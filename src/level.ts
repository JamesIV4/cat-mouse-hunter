import * as THREE from "three";
import { CANNON } from "./physics";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { randRange, choice } from "./utils";

export type LevelSpec = {
  miceRequired: number;
  mouseCount: number;
  mouseSpeed: number;
  roomCount: number;
  clutterCount: number;
  houseHalfSize: number; // controls house footprint size per level
  roomDensity?: number; // rooms per square meter
};

export class Level {
  roomBoxes: THREE.Box3[] = [];
  // Assigned semantic labels for each room after segmentation
  roomLabels: string[] = [];
  // Adjacency by indices; filled during classification
  roomAdjacency: number[][] = [];
  worldBounds: THREE.Box3;
  floorBody: CANNON.Body;
  meshes: THREE.Object3D[] = [];
  bodies: CANNON.Body[] = [];
  spawnPoints: THREE.Vector3[] = [];
  dynamicPairs: { mesh: THREE.Object3D; body: CANNON.Body }[] = [];
  // Track which dynamic bodies are paused (slept) due to distance from player
  private pausedBodies: Set<CANNON.Body> = new Set();
  // Gameplay registry of mouse holes (position and inward normal)
  mouseHoles: {
    position: THREE.Vector3;
    inward: THREE.Vector3;
    room: THREE.Box3;
  }[] = [];

  constructor(
    public world: CANNON.World,
    public scene: THREE.Scene,
    public rngSeed = Math.random() * 1e9
  ) {
    this.worldBounds = new THREE.Box3(new THREE.Vector3(-20, 0, -20), new THREE.Vector3(20, 5, 20));
    // Floor
    const floorShape = new CANNON.Plane();
    this.floorBody = new CANNON.Body({ mass: 0 });
    this.floorBody.addShape(floorShape);
    this.floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(this.floorBody);

    const floorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0xa9b49f })
    );
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);
    this.meshes.push(floorMesh);
  }

  update(dt: number, playerPos?: THREE.Vector3) {
    // Conservative pause radius (horizontal). Use hysteresis to avoid thrashing.
    const baseRadius = 12; // meters; conservative, user can increase later
    const hysteresis = 2; // enter/exit buffer
    const sleepRadius = baseRadius + hysteresis;
    const wakeRadius = Math.max(0, baseRadius - hysteresis);

    for (const p of this.dynamicPairs) {
      // Optional distance-based pausing of dynamic clutter
      if (playerPos) {
        const dx = p.body.position.x - playerPos.x;
        const dz = p.body.position.z - playerPos.z;
        const distXZ = Math.hypot(dx, dz);
        const isPaused = this.pausedBodies.has(p.body);
        if (!isPaused && distXZ > sleepRadius) {
          // Pause: zero velocities and put body to sleep
          p.body.velocity.set(0, 0, 0);
          p.body.angularVelocity.set(0, 0, 0);
          (p.body as any).sleep && (p.body as any).sleep();
          this.pausedBodies.add(p.body);
        } else if (isPaused && distXZ < wakeRadius) {
          // Resume: wake up body
          (p.body as any).wakeUp && (p.body as any).wakeUp();
          this.pausedBodies.delete(p.body);
        }
      }

      // Sync mesh from body (sleeping bodies won't move, but syncing is harmless)
      const bp = p.body.position as any;
      const bq = p.body.quaternion as any;
      p.mesh.position.set(bp.x, bp.y, bp.z);
      (p.mesh as any).quaternion && (p.mesh as any).quaternion.set(bq.x, bq.y, bq.z, bq.w);
    }
  }

  dispose() {
    for (const b of this.bodies) this.world.removeBody(b);
    for (const m of this.meshes) this.scene.remove(m);
    this.bodies.length = 0;
    this.meshes.length = 0;
    this.roomBoxes.length = 0;
    this.spawnPoints.length = 0;
  }

  generate(spec: LevelSpec) {
    // Clear any prior generated meshes/bodies except world floor already added
    for (let i = this.meshes.length - 1; i >= 1; i--) {
      this.scene.remove(this.meshes[i]);
      this.meshes.splice(i, 1);
    }
    for (const b of this.bodies) this.world.removeBody(b);
    this.bodies.length = 0;
    this.roomBoxes.length = 0;
    this.spawnPoints.length = 0;
    this.mouseHoles.length = 0;

    // Generate a set of rectangular rooms connected in a loose grid, plus a backyard
    const H = Math.max(8, spec.houseHalfSize || 10);
    const houseMin = new THREE.Vector3(-H, 0, -H);
    const houseMax = new THREE.Vector3(H, 3, H);
    const house = new THREE.Box3(houseMin.clone(), houseMax.clone());
    // Partition into rooms using density and a minimum room size based on door width
    const rooms: THREE.Box3[] = [];
    let remaining = [house];
    const doorWidth = 1.2 * 2; // matches door carving (doorHalf=1.2)
    const minRoomSize = doorWidth + 0.6; // slightly larger than a door
    // Determine desired room count from density and house area
    const area = (houseMax.x - houseMin.x) * (houseMax.z - houseMin.z);
    const density =
      typeof spec.roomDensity === "number" && spec.roomDensity! > 0
        ? spec.roomDensity!
        : Math.max(0.002, spec.roomCount / Math.max(1, area));
    const targetRooms = Math.max(1, Math.min(48, Math.floor(area * density)));

    // Greedy split largest rooms until target reached or no valid splits
    let guard = 0;
    while (remaining.length + rooms.length < targetRooms && guard++ < 500) {
      // pick the largest box to split
      let idx = -1,
        bestA = -1;
      for (let i = 0; i < remaining.length; i++) {
        const b = remaining[i];
        const sz = new THREE.Vector3().subVectors(b.max, b.min);
        const a = sz.x * sz.z;
        if (a > bestA) {
          bestA = a;
          idx = i;
        }
      }
      if (idx < 0) break;
      const box = remaining.splice(idx, 1)[0];
      const size = new THREE.Vector3().subVectors(box.max, box.min);
      let splitAlongX = size.x > size.z;
      // Try multiple candidate splits
      let didSplit = false;
      for (let attempt = 0; attempt < 8 && !didSplit; attempt++) {
        const alongX = attempt < 4 ? splitAlongX : !splitAlongX;
        if (alongX) {
          const minCut = box.min.x + minRoomSize;
          const maxCut = box.max.x - minRoomSize;
          if (maxCut - minCut <= 0.5) continue;
          const mid = randRange(minCut, maxCut);
          const left = new THREE.Box3(box.min.clone(), new THREE.Vector3(mid, box.max.y, box.max.z));
          const right = new THREE.Box3(new THREE.Vector3(mid, box.min.y, box.min.z), box.max.clone());
          const lsz = new THREE.Vector3().subVectors(left.max, left.min);
          const rsz = new THREE.Vector3().subVectors(right.max, right.min);
          if (lsz.x >= minRoomSize && lsz.z >= minRoomSize && rsz.x >= minRoomSize && rsz.z >= minRoomSize) {
            remaining.push(left, right);
            didSplit = true;
          }
        } else {
          const minCut = box.min.z + minRoomSize;
          const maxCut = box.max.z - minRoomSize;
          if (maxCut - minCut <= 0.5) continue;
          const mid = randRange(minCut, maxCut);
          const near = new THREE.Box3(box.min.clone(), new THREE.Vector3(box.max.x, box.max.y, mid));
          const far = new THREE.Box3(new THREE.Vector3(box.min.x, box.min.y, mid), box.max.clone());
          const nsz = new THREE.Vector3().subVectors(near.max, near.min);
          const fsz = new THREE.Vector3().subVectors(far.max, far.min);
          if (nsz.x >= minRoomSize && nsz.z >= minRoomSize && fsz.x >= minRoomSize && fsz.z >= minRoomSize) {
            remaining.push(near, far);
            didSplit = true;
          }
        }
      }
      if (!didSplit) {
        // cannot split further; accept as final room
        rooms.push(box);
      }
    }
    // Move remaining to rooms
    rooms.push(...remaining);
    this.roomBoxes = rooms;

    // Build walls around house perimeter and between rooms, with random doorways
    const wallHeight = 7.5;
    const wallThickness = 0.35; // thicker walls for stronger look
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf0ead6, // eggshell/light beige
      roughness: 0.9,
      metalness: 0.0,
    });
    const baseboardMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
      metalness: 0.0,
    });
    const addWall = (p1: THREE.Vector3, p2: THREE.Vector3, height: number) => {
      const dir = new THREE.Vector3().subVectors(p2, p1);
      const len = dir.length();
      const angle = Math.atan2(dir.x, dir.z);
      const geo = new THREE.BoxGeometry(wallThickness, height, len);
      const mesh = new THREE.Mesh(geo, wallMat);
      mesh.position.copy(new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5));
      mesh.position.y = height / 2;
      mesh.rotation.y = angle;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.meshes.push(mesh);

      const shape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, len / 2));
      const body = new CANNON.Body({ mass: 0, shape });
      body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
      body.quaternion.setFromEuler(0, angle, 0);
      this.world.addBody(body);
      this.bodies.push(body);
    };

    const addBaseboards = (p1: THREE.Vector3, p2: THREE.Vector3, interior: boolean) => {
      if (!interior) return;
      const dir = new THREE.Vector3().subVectors(p2, p1);
      const len = dir.length();
      if (len < 0.05) return;
      const angle = Math.atan2(dir.x, dir.z);
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const n = new THREE.Vector3(dir.z, 0, -dir.x).normalize(); // perpendicular in XZ
      const baseH = 0.24;
      const baseT = 0.06;
      const offset = wallThickness / 2 + baseT / 2;
      const geo = new THREE.BoxGeometry(baseT, baseH, Math.max(0.01, len - 0.02));
      const m1 = new THREE.Mesh(geo, baseboardMat);
      m1.position.copy(mid);
      m1.position.y = baseH / 2;
      m1.position.add(n.clone().multiplyScalar(offset));
      m1.rotation.y = angle;
      m1.castShadow = false;
      m1.receiveShadow = true;
      const m2 = m1.clone();
      m2.position.copy(mid);
      m2.position.y = baseH / 2;
      m2.position.add(n.clone().multiplyScalar(-offset));
      this.scene.add(m1);
      this.meshes.push(m1);
      this.scene.add(m2);
      this.meshes.push(m2);
    };

    // Add a single baseboard on the interior side (used for exterior perimeter walls)
    const addBaseboardInner = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const dir = new THREE.Vector3().subVectors(p2, p1);
      const len = dir.length();
      if (len < 0.05) return;
      const angle = Math.atan2(dir.x, dir.z);
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const n = new THREE.Vector3(dir.z, 0, -dir.x).normalize();
      const baseH = 0.24;
      const baseT = 0.06;
      const offset = wallThickness / 2 + baseT / 2;
      const geo = new THREE.BoxGeometry(baseT, baseH, Math.max(0.01, len - 0.02));
      const houseCenter = new THREE.Vector3((houseMin.x + houseMax.x) / 2, 0, (houseMin.z + houseMax.z) / 2);
      const toCenter = new THREE.Vector3().subVectors(houseCenter, mid).setY(0).normalize();
      const inwardIsN = n.dot(toCenter) > 0;
      const normal = inwardIsN ? n : n.clone().multiplyScalar(-1);
      const m = new THREE.Mesh(geo, baseboardMat);
      m.position.copy(mid);
      m.position.y = baseH / 2;
      m.position.add(normal.clone().multiplyScalar(offset));
      m.rotation.y = angle;
      m.castShadow = false;
      m.receiveShadow = true;
      this.scene.add(m);
      this.meshes.push(m);
    };

    // Helper to draw box edges as walls but leave one door opening per adjacency
    const drawRoomWalls = (box: THREE.Box3, openings: THREE.Vector3[]) => {
      const min = box.min,
        max = box.max;
      const corners = [
        new THREE.Vector3(min.x, 0, min.z),
        new THREE.Vector3(max.x, 0, min.z),
        new THREE.Vector3(max.x, 0, max.z),
        new THREE.Vector3(min.x, 0, max.z),
      ];
      // four edges
      const edges = [
        [corners[0], corners[1]],
        [corners[1], corners[2]],
        [corners[2], corners[3]],
        [corners[3], corners[0]],
      ] as const;
      for (const [a, b] of edges) {
        // Interior check: skip baseboards if this edge lies on outer house boundary
        const onNorth = Math.abs(a.z - houseMax.z) < 1e-3 && Math.abs(b.z - houseMax.z) < 1e-3;
        const onSouth = Math.abs(a.z - houseMin.z) < 1e-3 && Math.abs(b.z - houseMin.z) < 1e-3;
        const onEast = Math.abs(a.x - houseMax.x) < 1e-3 && Math.abs(b.x - houseMax.x) < 1e-3;
        const onWest = Math.abs(a.x - houseMin.x) < 1e-3 && Math.abs(b.x - houseMin.x) < 1e-3;
        const isInteriorEdge = !(onNorth || onSouth || onEast || onWest);
        // Find an opening that lies along this edge segment (within tolerance)
        const edgeDir = new THREE.Vector3().subVectors(b, a);
        const len = edgeDir.length();
        const dir = edgeDir.clone().normalize();
        const tol = 0.3; // perpendicular tolerance to consider on-edge
        let chosenCenter: THREE.Vector3 | null = null;
        for (const o of openings) {
          const ap = new THREE.Vector3().subVectors(o, a);
          const t = ap.dot(dir) / len; // param along edge
          if (t <= 0.05 || t >= 0.95) continue; // avoid cutting doors at corners
          // perpendicular distance to edge
          const closest = a.clone().addScaledVector(dir, t * len);
          const perp = o.clone().sub(closest);
          if (Math.abs(perp.x) + Math.abs(perp.z) < tol) {
            // approx distance in XZ
            chosenCenter = closest;
            break;
          }
        }
        if (chosenCenter) {
          // split wall into two segments around a door
          const doorHalf = 1.2; // 2x wider (~2.4m)
          const leftEnd = chosenCenter.clone().addScaledVector(dir, -doorHalf);
          const rightStart = chosenCenter.clone().addScaledVector(dir, doorHalf);
          // Clamp to segment
          const clampPoint = (p: THREE.Vector3) =>
            new THREE.Vector3(
              THREE.MathUtils.clamp(p.x, Math.min(a.x, b.x), Math.max(a.x, b.x)),
              p.y,
              THREE.MathUtils.clamp(p.z, Math.min(a.z, b.z), Math.max(a.z, b.z))
            );
          const seg1a = a.clone(),
            seg1b = clampPoint(leftEnd);
          const seg2a = clampPoint(rightStart),
            seg2b = b.clone();
          addWall(seg1a, seg1b, wallHeight);
          addWall(seg2a, seg2b, wallHeight);
          if (isInteriorEdge) {
            addBaseboards(seg1a, seg1b, true);
            addBaseboards(seg2a, seg2b, true);
          } else {
            addBaseboardInner(seg1a, seg1b);
            addBaseboardInner(seg2a, seg2b);
          }

          // Lintel over doorway: fill top 1/3 of wall height above the opening
          const doorWidth = doorHalf * 2;
          const lintelHeight = wallHeight / 3;
          const openingHeight = wallHeight - lintelHeight; // ~2/3 of wall height for opening
          const angle = Math.atan2(dir.x, dir.z);
          const lintelGeo = new THREE.BoxGeometry(wallThickness, lintelHeight, doorWidth);
          const lintelMesh = new THREE.Mesh(lintelGeo, wallMat);
          lintelMesh.position.copy(chosenCenter);
          lintelMesh.position.y = openingHeight + lintelHeight / 2;
          lintelMesh.rotation.y = angle;
          lintelMesh.castShadow = true;
          lintelMesh.receiveShadow = true;
          this.scene.add(lintelMesh);
          this.meshes.push(lintelMesh);

          const lintelShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, lintelHeight / 2, doorWidth / 2));
          const lintelBody = new CANNON.Body({ mass: 0, shape: lintelShape });
          lintelBody.position.set(lintelMesh.position.x, lintelMesh.position.y, lintelMesh.position.z);
          lintelBody.quaternion.setFromEuler(0, angle, 0);
          this.world.addBody(lintelBody);
          this.bodies.push(lintelBody);
        } else {
          addWall(a, b, wallHeight);
          if (isInteriorEdge) addBaseboards(a, b, true);
          else addBaseboardInner(a, b);
        }
      }
    };

    // Compute adjacency once and assign a doorway to each touching pair
    const roomOpenings: THREE.Vector3[][] = rooms.map(() => []);
    const eps = 1e-3;
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const A = rooms[i],
          B = rooms[j];
        // vertical shared wall (x constant), overlap along z
        const overlapZ = Math.min(A.max.z, B.max.z) - Math.max(A.min.z, B.min.z);
        if (overlapZ > 0) {
          if (Math.abs(A.max.x - B.min.x) < eps) {
            const z = (Math.max(A.min.z, B.min.z) + Math.min(A.max.z, B.max.z)) / 2;
            const x = A.max.x;
            const p = new THREE.Vector3(x, 0, z);
            roomOpenings[i].push(p);
            roomOpenings[j].push(p);
            continue;
          }
          if (Math.abs(A.min.x - B.max.x) < eps) {
            const z = (Math.max(A.min.z, B.min.z) + Math.min(A.max.z, B.max.z)) / 2;
            const x = A.min.x;
            const p = new THREE.Vector3(x, 0, z);
            roomOpenings[i].push(p);
            roomOpenings[j].push(p);
            continue;
          }
        }
        // horizontal shared wall (z constant), overlap along x
        const overlapX = Math.min(A.max.x, B.max.x) - Math.max(A.min.x, B.min.x);
        if (overlapX > 0) {
          if (Math.abs(A.max.z - B.min.z) < eps) {
            const x = (Math.max(A.min.x, B.min.x) + Math.min(A.max.x, B.max.x)) / 2;
            const z = A.max.z;
            const p = new THREE.Vector3(x, 0, z);
            roomOpenings[i].push(p);
            roomOpenings[j].push(p);
            continue;
          }
          if (Math.abs(A.min.z - B.max.z) < eps) {
            const x = (Math.max(A.min.x, B.min.x) + Math.min(A.max.x, B.max.x)) / 2;
            const z = A.min.z;
            const p = new THREE.Vector3(x, 0, z);
            roomOpenings[i].push(p);
            roomOpenings[j].push(p);
            continue;
          }
        }
      }
    }
    // Optional backyard opening from a back room (north side of house)
    const backIdx = rooms.findIndex((r) => Math.abs(r.max.z - houseMax.z) < eps);
    if (backIdx >= 0) {
      const r = rooms[backIdx];
      roomOpenings[backIdx].push(new THREE.Vector3((r.min.x + r.max.x) / 2, 0, r.max.z));
    }

    // Classify rooms by type based on size/shape/adjacency and exterior location
    this.classifyRooms(rooms, roomOpenings, houseMin, houseMax);
    // Draw all rooms with their assigned openings
    for (let i = 0; i < rooms.length; i++) {
      drawRoomWalls(rooms[i], roomOpenings[i]);
    }

    // Filter spawn points: avoid placing spawns inside doorway corridors
    if (this.spawnPoints.length > 0) {
      const doorHalf = 1.2; // keep in sync with doorway carving
      const widthExtra = 0.4; // extra width clearance
      const depthClear = 0.8; // inward clearance from the wall
      const epsEdge = 1e-3;
      const spawnOK = (p: THREE.Vector3) => {
        // Find the room containing this point
        let roomIdx = -1;
        for (let i = 0; i < rooms.length; i++) {
          const r = rooms[i];
          if (p.x >= r.min.x && p.x <= r.max.x && p.z >= r.min.z && p.z <= r.max.z) {
            roomIdx = i;
            break;
          }
        }
        if (roomIdx < 0) return true;
        const r = rooms[roomIdx];
        const openings = roomOpenings[roomIdx];
        for (const o of openings) {
          // Check four wall sides for corridor rectangles
          // North wall (z ~ r.max.z): corridor extends inward along -Z
          if (Math.abs(o.z - r.max.z) < epsEdge) {
            if (
              p.z <= r.max.z &&
              p.z >= r.max.z - depthClear &&
              p.x >= o.x - (doorHalf + widthExtra) &&
              p.x <= o.x + (doorHalf + widthExtra)
            )
              return false;
          }
          // South wall (z ~ r.min.z): corridor extends inward along +Z
          if (Math.abs(o.z - r.min.z) < epsEdge) {
            if (
              p.z >= r.min.z &&
              p.z <= r.min.z + depthClear &&
              p.x >= o.x - (doorHalf + widthExtra) &&
              p.x <= o.x + (doorHalf + widthExtra)
            )
              return false;
          }
          // East wall (x ~ r.max.x): corridor extends inward along -X
          if (Math.abs(o.x - r.max.x) < epsEdge) {
            if (
              p.x <= r.max.x &&
              p.x >= r.max.x - depthClear &&
              p.z >= o.z - (doorHalf + widthExtra) &&
              p.z <= o.z + (doorHalf + widthExtra)
            )
              return false;
          }
          // West wall (x ~ r.min.x): corridor extends inward along +X
          if (Math.abs(o.x - r.min.x) < epsEdge) {
            if (
              p.x >= r.min.x &&
              p.x <= r.min.x + depthClear &&
              p.z >= o.z - (doorHalf + widthExtra) &&
              p.z <= o.z + (doorHalf + widthExtra)
            )
              return false;
          }
        }
        return true;
      };
      this.spawnPoints = this.spawnPoints.filter(spawnOK);
    }

    // Track couch footprints placed in this level to avoid intersections and ban hole placement behind couches later
    const couchRects: { x: number; z: number; halfX: number; halfZ: number }[] = [];

    // Mouse holes: small black arch shapes along interior walls/baseboards
    const holeMat = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 1.0,
      metalness: 0.0,
    });
    const addMouseHoleOnEdge = (room: THREE.Box3, a: THREE.Vector3, b: THREE.Vector3) => {
      const dir = new THREE.Vector3().subVectors(b, a);
      const len = dir.length();
      if (len < 0.8) return; // too short
      // pick a position along the edge, avoid corners
      const t = 0.2 + Math.random() * 0.6;
      const pos = a.clone().addScaledVector(dir, t);
      const angle = Math.atan2(dir.x, dir.z);
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      const n = new THREE.Vector3(dir.z, 0, -dir.x).normalize(); // outward normal (one side)
      const roomCenter = new THREE.Vector3((room.min.x + room.max.x) / 2, 0, (room.min.z + room.max.z) / 2);
      const toCenter = new THREE.Vector3().subVectors(roomCenter, mid).setY(0).normalize();
      const inward = n.dot(toCenter) > 0 ? n : n.clone().multiplyScalar(-1);

      // Skip if this wall segment is behind a couch placed along the wall
      {
        const eps = 1e-3;
        const margin = 0.06; // small extra around couch span
        const nearNorth = Math.abs(a.z - b.z) < eps && Math.abs(a.z - room.max.z) < eps;
        const nearSouth = Math.abs(a.z - b.z) < eps && Math.abs(a.z - room.min.z) < eps;
        const nearEast = Math.abs(a.x - b.x) < eps && Math.abs(a.x - room.max.x) < eps;
        const nearWest = Math.abs(a.x - b.x) < eps && Math.abs(a.x - room.min.x) < eps;
        let blocked = false;
        for (const r of couchRects) {
          if (nearNorth) {
            const touchesWall = Math.abs(r.z + r.halfZ - room.max.z) < 0.2; // couch backs to north wall
            if (touchesWall && pos.x >= r.x - r.halfX - margin && pos.x <= r.x + r.halfX + margin) {
              blocked = true;
              break;
            }
          }
          if (nearSouth) {
            const touchesWall = Math.abs(r.z - r.halfZ - room.min.z) < 0.2; // backs to south wall
            if (touchesWall && pos.x >= r.x - r.halfX - margin && pos.x <= r.x + r.halfX + margin) {
              blocked = true;
              break;
            }
          }
          if (nearEast) {
            const touchesWall = Math.abs(r.x + r.halfX - room.max.x) < 0.2; // backs to east wall
            if (touchesWall && pos.z >= r.z - r.halfZ - margin && pos.z <= r.z + r.halfZ + margin) {
              blocked = true;
              break;
            }
          }
          if (nearWest) {
            const touchesWall = Math.abs(r.x - r.halfX - room.min.x) < 0.2; // backs to west wall
            if (touchesWall && pos.z >= r.z - r.halfZ - margin && pos.z <= r.z + r.halfZ + margin) {
              blocked = true;
              break;
            }
          }
        }
        if (blocked) return; // don't place hole behind a couch
      }

      // Do not place holes where a doorway is carved on this wall segment
      const epsEdge = 1e-3;
      const idx = rooms.indexOf(room);
      if (idx >= 0) {
        const openings = roomOpenings[idx];
        const doorHalf = 1.2; // keep in sync with door carving
        const widthExtra = 0.4; // margin around the doorway
        let isDoorSeg = false;
        for (const o of openings) {
          // Check which wall this edge lies on and compare lateral coordinate to doorway center
          if (Math.abs(pos.z - room.max.z) < epsEdge && Math.abs(o.z - room.max.z) < epsEdge) {
            if (pos.x >= o.x - (doorHalf + widthExtra) && pos.x <= o.x + (doorHalf + widthExtra)) {
              isDoorSeg = true;
              break;
            }
          }
          if (Math.abs(pos.z - room.min.z) < epsEdge && Math.abs(o.z - room.min.z) < epsEdge) {
            if (pos.x >= o.x - (doorHalf + widthExtra) && pos.x <= o.x + (doorHalf + widthExtra)) {
              isDoorSeg = true;
              break;
            }
          }
          if (Math.abs(pos.x - room.max.x) < epsEdge && Math.abs(o.x - room.max.x) < epsEdge) {
            if (pos.z >= o.z - (doorHalf + widthExtra) && pos.z <= o.z + (doorHalf + widthExtra)) {
              isDoorSeg = true;
              break;
            }
          }
          if (Math.abs(pos.x - room.min.x) < epsEdge && Math.abs(o.x - room.min.x) < epsEdge) {
            if (pos.z >= o.z - (doorHalf + widthExtra) && pos.z <= o.z + (doorHalf + widthExtra)) {
              isDoorSeg = true;
              break;
            }
          }
        }
        if (isDoorSeg) return; // skip placing hole on doorway span
      }

      // Geometry sizes
      const depth = 0.02; // thin, sits on wall face
      const width = 0.36;
      const squareH = 0.3; // taller square base
      const radius = width / 2;
      const insetFrac = 0.85; // cylinder inset 85% into the square vertically (lower the top circle a bit)

      const group = new THREE.Group();
      // Square base (thin box)
      const sqGeo = new THREE.BoxGeometry(depth, squareH, width);
      const sq = new THREE.Mesh(sqGeo, holeMat);
      sq.position.set(0, squareH / 2, 0);
      group.add(sq);
      // Cylinder cap (thin along depth, circle in YZ plane)
      const cylGeo = new THREE.CylinderGeometry(radius, radius, depth, 24);
      const cyl = new THREE.Mesh(cylGeo, holeMat);
      cyl.rotation.z = Math.PI / 2; // align cylinder axis with X (depth)
      // Place cylinder so it overlaps the square by 50%
      const overlap = radius * insetFrac;
      cyl.position.set(0, squareH + radius - overlap, 0);
      group.add(cyl);

      // Position against the wall, facing into the room
      group.position.copy(pos);
      group.position.y = 0; // rests on floor
      const pushOut = wallThickness / 2 + depth / 2 + 0.002;
      group.position.add(inward.clone().multiplyScalar(pushOut));
      group.rotation.y = angle;
      // Slightly raise to avoid z-fighting with floor
      group.position.y += 0.001;

      this.scene.add(group);
      this.meshes.push(group);
      // Record this mouse hole for gameplay logic
      this.mouseHoles.push({
        position: group.position.clone(),
        inward: inward.clone(),
        room,
      });

      // Create a matching black cutout over the baseboard area so the hole lines up visually
      const baseT = 0.06; // baseboard thickness
      const baseH = 0.24; // baseboard height
      const cutGeo = new THREE.BoxGeometry(baseT + 0.005, baseH, width * 0.9);
      const cut = new THREE.Mesh(cutGeo, holeMat);
      cut.position.copy(pos);
      cut.position.y = baseH / 2 + 0.001; // slight lift to avoid z-fighting
      const inwardOffset = wallThickness / 2 + (baseT + 0.005) / 2 + 0.001;
      cut.position.add(inward.clone().multiplyScalar(inwardOffset));
      cut.rotation.y = angle;
      this.scene.add(cut);
      this.meshes.push(cut);
    };

    // Randomly add mouse holes to interior edges of rooms
    for (let i = 0; i < rooms.length; i++) {
      const r = rooms[i];
      const min = r.min,
        max = r.max;
      const corners = [
        new THREE.Vector3(min.x, 0, min.z),
        new THREE.Vector3(max.x, 0, min.z),
        new THREE.Vector3(max.x, 0, max.z),
        new THREE.Vector3(min.x, 0, max.z),
      ];
      const edges = [
        [corners[0], corners[1]],
        [corners[1], corners[2]],
        [corners[2], corners[3]],
        [corners[3], corners[0]],
      ] as const;
      for (const [a, b] of edges) {
        // Skip exterior perimeter edges
        const onNorth = Math.abs(a.z - houseMax.z) < 1e-3 && Math.abs(b.z - houseMax.z) < 1e-3;
        const onSouth = Math.abs(a.z - houseMin.z) < 1e-3 && Math.abs(b.z - houseMin.z) < 1e-3;
        const onEast = Math.abs(a.x - houseMax.x) < 1e-3 && Math.abs(b.x - houseMax.x) < 1e-3;
        const onWest = Math.abs(a.x - houseMin.x) < 1e-3 && Math.abs(b.x - houseMin.x) < 1e-3;
        const isInteriorEdge = !(onNorth || onSouth || onEast || onWest);
        if (!isInteriorEdge) continue;
        if (Math.random() < 0.25) {
          addMouseHoleOnEdge(r, a, b);
        }
      }
    }

    // Ensure a minimum number of mouse holes in the house
    const MIN_HOLES = 3;
    if (this.mouseHoles.length < MIN_HOLES) {
      const candidates: {
        room: THREE.Box3;
        a: THREE.Vector3;
        b: THREE.Vector3;
      }[] = [];
      for (let i = 0; i < rooms.length; i++) {
        const r = rooms[i];
        const min = r.min,
          max = r.max;
        const corners = [
          new THREE.Vector3(min.x, 0, min.z),
          new THREE.Vector3(max.x, 0, min.z),
          new THREE.Vector3(max.x, 0, max.z),
          new THREE.Vector3(min.x, 0, max.z),
        ];
        const edges = [
          [corners[0], corners[1]],
          [corners[1], corners[2]],
          [corners[2], corners[3]],
          [corners[3], corners[0]],
        ] as const;
        for (const [a, b] of edges) {
          const onNorth = Math.abs(a.z - houseMax.z) < 1e-3 && Math.abs(b.z - houseMax.z) < 1e-3;
          const onSouth = Math.abs(a.z - houseMin.z) < 1e-3 && Math.abs(b.z - houseMin.z) < 1e-3;
          const onEast = Math.abs(a.x - houseMax.x) < 1e-3 && Math.abs(b.x - houseMax.x) < 1e-3;
          const onWest = Math.abs(a.x - houseMin.x) < 1e-3 && Math.abs(b.x - houseMin.x) < 1e-3;
          const isInteriorEdge = !(onNorth || onSouth || onEast || onWest);
          if (!isInteriorEdge) continue;
          candidates.push({ room: r, a, b });
        }
      }
      // Add holes on random interior edges until we reach the minimum or run out
      for (let guard = 0; guard < candidates.length && this.mouseHoles.length < MIN_HOLES; guard++) {
        const idx = Math.floor(Math.random() * candidates.length);
        const c = candidates[idx];
        addMouseHoleOnEdge(c.room, c.a, c.b);
      }
    }

    // Backyard fence (position relative to current house size)
    const yardGap = 0.2; // small gap beyond exterior wall
    const yardDepth = 10; // constant backyard depth
    const yardMin = new THREE.Vector3(
      houseMin.x + wallThickness, // align with exterior walls
      0,
      houseMax.z + yardGap
    );
    const yardMax = new THREE.Vector3(houseMax.x - wallThickness, 0, houseMax.z + yardGap + yardDepth);
    const fenceH = 1.2;
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5b });
    const fence = (a: THREE.Vector3, b: THREE.Vector3) => {
      const dir = new THREE.Vector3().subVectors(b, a);
      const len = dir.length();
      const angle = Math.atan2(dir.x, dir.z);
      const geo = new THREE.BoxGeometry(0.15, fenceH, len);
      const mesh = new THREE.Mesh(geo, fenceMat);
      mesh.position.copy(new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5));
      mesh.position.y = fenceH / 2;
      mesh.rotation.y = angle;
      this.scene.add(mesh);
      this.meshes.push(mesh);
      const shape = new CANNON.Box(new CANNON.Vec3(0.075, fenceH / 2, len / 2));
      const body = new CANNON.Body({ mass: 0, shape });
      body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
      body.quaternion.setFromEuler(0, angle, 0);
      this.world.addBody(body);
      this.bodies.push(body);
    };
    // No fence along the side that touches the house (south edge)
    fence(new THREE.Vector3(yardMax.x, 0, yardMin.z), new THREE.Vector3(yardMax.x, 0, yardMax.z));
    fence(new THREE.Vector3(yardMax.x, 0, yardMax.z), new THREE.Vector3(yardMin.x, 0, yardMax.z));
    fence(new THREE.Vector3(yardMin.x, 0, yardMax.z), new THREE.Vector3(yardMin.x, 0, yardMin.z));

    // Hard floors and ceilings for rooms, plus yard
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xc8a97e }); // light wood brown
    const ceilMat = new THREE.MeshStandardMaterial({ color: 0xe6e6e6 });
    for (const r of rooms) {
      const size = new THREE.Vector3().subVectors(r.max, r.min);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(size.x, 0.1, size.z), floorMat);
      mesh.position.set((r.min.x + r.max.x) / 2, 0.05, (r.min.z + r.max.z) / 2);
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.meshes.push(mesh);

      const shape = new CANNON.Box(new CANNON.Vec3(size.x / 2, 0.05, size.z / 2));
      const body = new CANNON.Body({ mass: 0, shape });
      body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
      this.world.addBody(body);
      this.bodies.push(body);

      // ceiling
      const ceil = new THREE.Mesh(new THREE.BoxGeometry(size.x, 0.1, size.z), ceilMat);
      ceil.position.set((r.min.x + r.max.x) / 2, wallHeight - 0.05, (r.min.z + r.max.z) / 2);
      ceil.receiveShadow = false;
      ceil.castShadow = false;
      this.scene.add(ceil);
      this.meshes.push(ceil);
      const ceilBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Box(new CANNON.Vec3(size.x / 2, 0.05, size.z / 2)),
      });
      ceilBody.position.set(ceil.position.x, ceil.position.y, ceil.position.z);
      this.world.addBody(ceilBody);
      this.bodies.push(ceilBody);

      // spawn points inside room
      for (let i = 0; i < 5; i++) {
        const x = randRange(r.min.x + 0.5, r.max.x - 0.5);
        const z = randRange(r.min.z + 0.5, r.max.z - 0.5);
        this.spawnPoints.push(new THREE.Vector3(x, 0, z));
      }
    }
    // Yard ground
    const yardSize = new THREE.Vector3().subVectors(yardMax, yardMin);
    const yardMesh = new THREE.Mesh(
      new THREE.BoxGeometry(yardSize.x, 0.1, yardSize.z),
      new THREE.MeshStandardMaterial({ color: 0xa8c789 })
    );
    yardMesh.position.set((yardMin.x + yardMax.x) / 2, 0.05, (yardMin.z + yardMax.z) / 2);
    yardMesh.receiveShadow = true;
    this.scene.add(yardMesh);
    this.meshes.push(yardMesh);
    const yardBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(new CANNON.Vec3(yardSize.x / 2, 0.05, yardSize.z / 2)),
    });
    yardBody.position.set(yardMesh.position.x, yardMesh.position.y, yardMesh.position.z);
    this.world.addBody(yardBody);
    this.bodies.push(yardBody);

    // Furniture: tables, counters, couches
    const furnMats = [
      new THREE.MeshStandardMaterial({ color: 0x8b5a2b }),
      new THREE.MeshStandardMaterial({ color: 0x556b2f }),
      new THREE.MeshStandardMaterial({ color: 0x3a506b }),
      new THREE.MeshStandardMaterial({ color: 0x7a7a7a }),
    ];
    const placeBox = (pos: THREE.Vector3, size: THREE.Vector3, mat: THREE.Material, mass = 0) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), mat);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.meshes.push(mesh);
      const shape = new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2));
      const body = new CANNON.Body({ mass, shape });
      body.position.set(pos.x, pos.y, pos.z);
      if (mass > 0) {
        body.angularDamping = 0.2;
        body.linearDamping = 0.01;
      }
      this.world.addBody(body);
      this.bodies.push(body);
      return mesh;
    };

    // Load and place one toilet in each Bathroom, aligned to a wall and facing inward
    let toiletModelPromise: Promise<THREE.Object3D> | null = null;
    const loadToiletModel = (): Promise<THREE.Object3D> => {
      if (!toiletModelPromise) {
        const loader = new FBXLoader();
        toiletModelPromise = new Promise((resolve, reject) => {
          const url = new URL("../models/toilet/toilet.fbx", import.meta.url).toString();
          loader.load(
            url,
            (obj) => {
              // Normalize to target height
              const preBox = new THREE.Box3().setFromObject(obj);
              const preSize = new THREE.Vector3();
              preBox.getSize(preSize);
              const targetHeight = 2;
              const factor = preSize.y > 0 ? targetHeight / preSize.y : 1;
              obj.scale.setScalar(factor);
              resolve(obj);
            },
            undefined,
            (err) => reject(err)
          );
        });
      }
      return toiletModelPromise;
    };
    const placeToiletInBathroom = (room: THREE.Box3, openings: THREE.Vector3[]) => {
      const min = room.min,
        max = room.max;
      const corners = [
        new THREE.Vector3(min.x, 0, min.z),
        new THREE.Vector3(max.x, 0, min.z),
        new THREE.Vector3(max.x, 0, max.z),
        new THREE.Vector3(min.x, 0, max.z),
      ];
      const edges = [
        [corners[0], corners[1]], // south
        [corners[1], corners[2]], // east
        [corners[2], corners[3]], // north
        [corners[3], corners[0]], // west
      ] as const;
      const roomCenter = new THREE.Vector3((min.x + max.x) / 2, 0, (min.z + max.z) / 2);
      const doorHalf = 1.2;
      const widthExtra = 0.5;
      const epsEdge = 1e-3;
      // Try up to a few edges to find a valid spot
      const startEdge = Math.floor(Math.random() * 4);
      for (let k = 0; k < 4; k++) {
        const [a, b] = edges[(startEdge + k) % 4];
        const dir = new THREE.Vector3().subVectors(b, a);
        const len = dir.length();
        if (len < 0.8) continue;
        const tangent = dir.clone().normalize();
        const n = new THREE.Vector3(dir.z, 0, -dir.x).normalize();
        // Choose inward normal
        const mid = a.clone().addScaledVector(tangent, len / 2);
        const toCenter = new THREE.Vector3().subVectors(roomCenter, mid).setY(0).normalize();
        const inward = n.dot(toCenter) > 0 ? n : n.clone().multiplyScalar(-1);
        // Determine openings that lie on this wall and mark unusable spans
        const wallIsNorth = Math.abs(a.z - max.z) < epsEdge && Math.abs(b.z - max.z) < epsEdge;
        const wallIsSouth = Math.abs(a.z - min.z) < epsEdge && Math.abs(b.z - min.z) < epsEdge;
        const wallIsEast = Math.abs(a.x - max.x) < epsEdge && Math.abs(b.x - max.x) < epsEdge;
        const wallIsWest = Math.abs(a.x - min.x) < epsEdge && Math.abs(b.x - min.x) < epsEdge;
        const badSpans: [number, number][] = [];
        for (const o of openings) {
          if (wallIsNorth && Math.abs(o.z - max.z) < epsEdge) {
            const t = (o.x - a.x) / (b.x - a.x);
            badSpans.push([
              Math.max(0, t - (doorHalf + widthExtra) / len),
              Math.min(1, t + (doorHalf + widthExtra) / len),
            ]);
          }
          if (wallIsSouth && Math.abs(o.z - min.z) < epsEdge) {
            const t = (o.x - a.x) / (b.x - a.x);
            badSpans.push([
              Math.max(0, t - (doorHalf + widthExtra) / len),
              Math.min(1, t + (doorHalf + widthExtra) / len),
            ]);
          }
          if (wallIsEast && Math.abs(o.x - max.x) < epsEdge) {
            const t = (o.z - a.z) / (b.z - a.z);
            badSpans.push([
              Math.max(0, t - (doorHalf + widthExtra) / len),
              Math.min(1, t + (doorHalf + widthExtra) / len),
            ]);
          }
          if (wallIsWest && Math.abs(o.x - min.x) < epsEdge) {
            const t = (o.z - a.z) / (b.z - a.z);
            badSpans.push([
              Math.max(0, t - (doorHalf + widthExtra) / len),
              Math.min(1, t + (doorHalf + widthExtra) / len),
            ]);
          }
        }
        const okT = (t: number) => badSpans.every(([lo, hi]) => !(t >= lo && t <= hi));
        // Try several candidate positions along the wall
        for (let tries = 0; tries < 8; tries++) {
          const t = 0.15 + Math.random() * 0.7;
          if (!okT(t)) continue;
          const pos = a.clone().addScaledVector(tangent, t * len);
          // Offset slightly toward the room interior
          const inwardOffset = 0.08;
          pos.add(inward.clone().multiplyScalar(inwardOffset));
          // Load/clone model and place
          loadToiletModel().then((model) => {
            const inst = model.clone(true);
            // Align feet to floor
            const box = new THREE.Box3().setFromObject(inst);
            const minY = box.min.y;
            inst.position.copy(pos);
            inst.position.y -= minY; // ground it
            // Rotate to face inward
            inst.rotation.y = Math.atan2(inward.x, inward.z);
            // Add to scene and registry
            this.scene.add(inst);
            this.meshes.push(inst);
          });
          return; // only one per bathroom
        }
      }
    };
    // Place toilets for each Bathroom
    for (let i = 0; i < rooms.length; i++) {
      if (this.roomLabels[i] === "Bathroom") {
        placeToiletInBathroom(rooms[i], roomOpenings[i]);
      }
    }

    // Procedural couch model built from simple primitives
    const makeCouch = (length: number, depth = 0.9, height = 0.8) => {
      const group = new THREE.Group();
      const fabric = new THREE.MeshStandardMaterial({
        color: 0x6b7a8f,
        roughness: 0.9,
      });
      const fabric2 = new THREE.MeshStandardMaterial({
        color: 0x5c6a7a,
        roughness: 0.9,
      });
      const wood = new THREE.MeshStandardMaterial({
        color: 0x775533,
        roughness: 0.7,
        metalness: 0.0,
      });

      const seatH = 0.4;
      const backH = height - seatH;
      const armW = Math.min(0.18, Math.max(0.12, length * 0.08));
      const legH = 0.1;

      // Base frame (thin wood under seat)
      const base = new THREE.Mesh(new THREE.BoxGeometry(length, 0.08, depth), wood);
      base.position.set(0, 0.08 / 2 + legH, 0);
      base.castShadow = base.receiveShadow = true;
      group.add(base);

      // Seat cushion (slightly rounded via segments)
      const seat = new THREE.Mesh(new THREE.BoxGeometry(length - armW * 2, seatH, depth - 0.06, 2, 1, 2), fabric);
      seat.position.set(0, legH + 0.08 + seatH / 2, 0);
      seat.castShadow = seat.receiveShadow = true;
      group.add(seat);

      // Backrest
      const back = new THREE.Mesh(new THREE.BoxGeometry(length - armW * 2, backH, 0.12), fabric2);
      back.position.set(0, legH + 0.08 + seatH + backH / 2, -(depth / 2) + 0.06);
      back.castShadow = back.receiveShadow = true;
      group.add(back);

      // Armrests
      const armL = new THREE.Mesh(new THREE.BoxGeometry(armW, height, depth), fabric2);
      armL.position.set(-(length / 2) + armW / 2, legH + height / 2, 0);
      const armR = armL.clone();
      armR.position.x = length / 2 - armW / 2;
      group.add(armL, armR);

      // Seat cushions detail (two or three depending on length)
      const cushionCount = length > 2.4 ? 3 : 2;
      for (let i = 0; i < cushionCount; i++) {
        const w = (length - armW * 2 - 0.06 * (cushionCount + 1)) / cushionCount;
        const c = new THREE.Mesh(new THREE.BoxGeometry(w, seatH * 0.95, depth - 0.08, 2, 1, 2), fabric);
        c.position.set(-(length / 2 - armW) + 0.06 + w / 2 + i * (w + 0.06), legH + 0.08 + seatH / 2 + 0.01, 0.01);
        c.castShadow = c.receiveShadow = true;
        group.add(c);
      }

      // Legs
      const legGeo = new THREE.CylinderGeometry(0.035, 0.035, legH, 8);
      const leg1 = new THREE.Mesh(legGeo, wood);
      const leg2 = leg1.clone();
      const leg3 = leg1.clone();
      const leg4 = leg1.clone();
      leg1.position.set(-length / 2 + 0.08, legH / 2, -depth / 2 + 0.08);
      leg2.position.set(length / 2 - 0.08, legH / 2, -depth / 2 + 0.08);
      leg3.position.set(-length / 2 + 0.08, legH / 2, depth / 2 - 0.08);
      leg4.position.set(length / 2 - 0.08, legH / 2, depth / 2 - 0.08);
      group.add(leg1, leg2, leg3, leg4);

      return group;
    };

    // Helpers to keep couches clear of doorways
    const wouldBlockDoor = (
      room: THREE.Box3,
      openings: THREE.Vector3[],
      wall: number,
      center: number,
      halfLen: number
    ) => {
      // Disallow centers too close to door center along the wall axis
      const eps = 0.15;
      const doorHalf = 1.2; // keep in sync with door carving
      const extra = 0.6; // additional clearance
      for (const o of openings) {
        if (wall === 0 && Math.abs(o.z - room.max.z) < eps) {
          if (Math.abs(center - o.x) < halfLen + doorHalf + extra) return true;
        }
        if (wall === 1 && Math.abs(o.z - room.min.z) < eps) {
          if (Math.abs(center - o.x) < halfLen + doorHalf + extra) return true;
        }
        if (wall === 2 && Math.abs(o.x - room.max.x) < eps) {
          if (Math.abs(center - o.z) < halfLen + doorHalf + extra) return true;
        }
        if (wall === 3 && Math.abs(o.x - room.min.x) < eps) {
          if (Math.abs(center - o.z) < halfLen + doorHalf + extra) return true;
        }
      }
      return false;
    };
    const boxIntersects = (minA: THREE.Vector2, maxA: THREE.Vector2, minB: THREE.Vector2, maxB: THREE.Vector2) => {
      return !(maxA.x < minB.x || minA.x > maxB.x || maxA.y < minB.y || minA.y > maxB.y);
    };
    const wouldBlockDoorCorridor = (
      room: THREE.Box3,
      openings: THREE.Vector3[],
      couchX: number,
      couchZ: number,
      yaw: number,
      len: number,
      dep: number
    ) => {
      // couch axis-aligned at yaw multiples of 90deg
      const halfX = Math.abs(Math.sin(yaw)) > 0.5 ? dep / 2 : len / 2;
      const halfZ = Math.abs(Math.sin(yaw)) > 0.5 ? len / 2 : dep / 2;
      const cMin = new THREE.Vector2(couchX - halfX, couchZ - halfZ);
      const cMax = new THREE.Vector2(couchX + halfX, couchZ + halfZ);
      const eps = 1e-3;
      const doorHalf = 1.2,
        depthClear = 1.0,
        widthExtra = 0.6;
      for (const o of openings) {
        // North corridor
        if (Math.abs(o.z - room.max.z) < eps) {
          const min = new THREE.Vector2(o.x - (doorHalf + widthExtra), room.max.z - depthClear);
          const max = new THREE.Vector2(o.x + (doorHalf + widthExtra), room.max.z);
          if (boxIntersects(cMin, cMax, min, max)) return true;
        }
        // South
        if (Math.abs(o.z - room.min.z) < eps) {
          const min = new THREE.Vector2(o.x - (doorHalf + widthExtra), room.min.z);
          const max = new THREE.Vector2(o.x + (doorHalf + widthExtra), room.min.z + depthClear);
          if (boxIntersects(cMin, cMax, min, max)) return true;
        }
        // East
        if (Math.abs(o.x - room.max.x) < eps) {
          const min = new THREE.Vector2(room.max.x - depthClear, o.z - (doorHalf + widthExtra));
          const max = new THREE.Vector2(room.max.x, o.z + (doorHalf + widthExtra));
          if (boxIntersects(cMin, cMax, min, max)) return true;
        }
        // West
        if (Math.abs(o.x - room.min.x) < eps) {
          const min = new THREE.Vector2(room.min.x, o.z - (doorHalf + widthExtra));
          const max = new THREE.Vector2(room.min.x + depthClear, o.z + (doorHalf + widthExtra));
          if (boxIntersects(cMin, cMax, min, max)) return true;
        }
      }
      return false;
    };
    // Track couch footprints placed in this level to avoid intersections
    // NOTE: declared earlier before hole generation
    const rectIntersects = (x: number, z: number, halfX: number, halfZ: number) => {
      const pad = 0.04;
      for (const r of couchRects) {
        if (
          !(
            x + halfX + pad < r.x - r.halfX ||
            x - halfX - pad > r.x + r.halfX ||
            z + halfZ + pad < r.z - r.halfZ ||
            z - halfZ - pad > r.z + r.halfZ
          )
        )
          return true;
      }
      return false;
    };

    const placeCouchAlongWall = (room: THREE.Box3, openings: THREE.Vector3[]): number => {
      // 1.5x larger couch
      const scale = 1.5;
      // Bigger rooms tend to get bigger couches
      const roomSize = new THREE.Vector3().subVectors(room.max, room.min);
      const longSpan = Math.max(roomSize.x, roomSize.z);
      const sizeFactor = THREE.MathUtils.clamp((longSpan - 4) / 8, 0, 1); // span 4..12 -> 0..1
      const length = (randRange(1.6, 3.2) + sizeFactor * randRange(0.4, 1.0)) * scale;
      const depth = (randRange(0.8, 1.0) + sizeFactor * randRange(0.0, 0.2)) * scale;
      const height = 0.8 * scale;
      const couch = makeCouch(length, depth, height);
      couch.traverse((o) => {
        (o as any).castShadow = true;
        (o as any).receiveShadow = true;
      });

      // choose a wall: 0=N(max z),1=S(min z),2=E(max x),3=W(min x)
      const wall = Math.floor(Math.random() * 4);
      const gap = 0.06;
      let x = 0,
        z = 0,
        yaw = 0;
      let tries = 12;
      let foundPos = false;
      while (tries-- > 0) {
        if (wall === 0) {
          // North: face away from wall (into room), back toward +Z => yaw = Math.PI
          z = room.max.z - (depth / 2 + gap);
          const minX = room.min.x + 0.6 + length / 2;
          const maxX = room.max.x - 0.6 - length / 2;
          x = randRange(minX, Math.max(minX, maxX));
          yaw = Math.PI;
          if (!wouldBlockDoor(room, openings, wall, x, length / 2) && !rectIntersects(x, z, length / 2, depth / 2)) {
            foundPos = true;
            break;
          }
        } else if (wall === 1) {
          // South: back toward -Z => yaw = 0
          z = room.min.z + (depth / 2 + gap);
          const minX = room.min.x + 0.6 + length / 2;
          const maxX = room.max.x - 0.6 - length / 2;
          x = randRange(minX, Math.max(minX, maxX));
          yaw = 0;
          if (!wouldBlockDoor(room, openings, wall, x, length / 2) && !rectIntersects(x, z, length / 2, depth / 2)) {
            foundPos = true;
            break;
          }
        } else if (wall === 2) {
          // East: back toward +X => yaw = -PI/2
          x = room.max.x - (depth / 2 + gap);
          const minZ = room.min.z + 0.6 + length / 2;
          const maxZ = room.max.z - 0.6 - length / 2;
          z = randRange(minZ, Math.max(minZ, maxZ));
          yaw = -Math.PI / 2;
          if (!wouldBlockDoor(room, openings, wall, z, length / 2) && !rectIntersects(x, z, depth / 2, length / 2)) {
            foundPos = true;
            break;
          }
        } else {
          // West: back toward -X => yaw = +PI/2
          x = room.min.x + (depth / 2 + gap);
          const minZ = room.min.z + 0.6 + length / 2;
          const maxZ = room.max.z - 0.6 - length / 2;
          z = randRange(minZ, Math.max(minZ, maxZ));
          yaw = Math.PI / 2;
          if (!wouldBlockDoor(room, openings, wall, z, length / 2) && !rectIntersects(x, z, depth / 2, length / 2)) {
            foundPos = true;
            break;
          }
        }
        if (!foundPos) return 0;
      }

      couch.position.set(x, 0, z);
      couch.rotation.y = yaw;
      // doorway corridor check for main couch
      if (wouldBlockDoorCorridor(room, openings, x, z, yaw, length, depth)) return 0;
      this.scene.add(couch);
      this.meshes.push(couch);
      // record main couch footprint
      const halfXMain = Math.abs(Math.sin(yaw)) > 0.5 ? depth / 2 : length / 2;
      const halfZMain = Math.abs(Math.sin(yaw)) > 0.5 ? length / 2 : depth / 2;
      couchRects.push({ x, z, halfX: halfXMain, halfZ: halfZMain });
      // record main couch footprint
      {
        const halfXMain = Math.abs(Math.sin(yaw)) > 0.5 ? depth / 2 : length / 2;
        const halfZMain = Math.abs(Math.sin(yaw)) > 0.5 ? length / 2 : depth / 2;
        couchRects.push({ x, z, halfX: halfXMain, halfZ: halfZMain });
      }

      // Physics proxies for couch: seat slab + backrest (better alignment/grounding)
      const legH = 0.1;
      const baseThick = 0.08;
      const seatH = 0.4;
      const backH = height - seatH;
      const armW = Math.min(0.18 * (length / (length || 1)), Math.max(0.12, length * 0.08));
      const seatTopY = legH + baseThick + seatH; // top surface of the seating area

      const body = new CANNON.Body({ mass: 0 });
      // 1) Seat slab (thin, matches top surface for correct grounding)
      {
        const seatWidth = Math.max(0.2, length - armW * 2);
        const seatDepth = Math.max(0.2, depth - 0.06);
        const seatThickness = 0.12; // thin slab for collision; keeps top aligned with visuals
        const seatShape = new CANNON.Box(new CANNON.Vec3(seatWidth / 2, seatThickness / 2, seatDepth / 2));
        // Center the slab so that its top is at seatTopY
        const seatOffset = new CANNON.Vec3(0, seatTopY - seatThickness / 2, 0);
        body.addShape(seatShape, seatOffset as any);
      }
      // 2) Backrest blocker (thin tall box at the back so you can't clip through)
      {
        const backWidth = Math.max(0.2, length - armW * 2);
        const backThickness = 0.12;
        const backShape = new CANNON.Box(new CANNON.Vec3(backWidth / 2, Math.max(0.1, backH) / 2, backThickness / 2));
        const backCenterY = legH + baseThick + seatH + Math.max(0.1, backH) / 2;
        const backOffset = new CANNON.Vec3(0, backCenterY, -(depth / 2) + backThickness / 2 + 0.06);
        body.addShape(backShape, backOffset as any);
      }
      // Position and rotate compound body to match the mesh
      body.position.set(x, 0, z);
      if (couch.rotation.y !== 0) body.quaternion.setFromEuler(0, couch.rotation.y, 0);
      // Tag as couch for gameplay grounding checks
      (body as any).isCouch = true;
      this.world.addBody(body);
      this.bodies.push(body);
      let placedCount = 1;

      // Chance to add a perpendicular couch forming an L shape in larger rooms
      if (longSpan > 6 && Math.random() < 0.5 + sizeFactor * 0.3) {
        const secondaryScale = 1.0 + sizeFactor * 0.5;
        const len2 = randRange(1.2, 2.4) * secondaryScale * scale;
        const dep2 = randRange(0.75, 0.95) * secondaryScale * scale;
        const h2 = height;
        const couch2 = makeCouch(len2, dep2, h2);
        couch2.traverse((o) => {
          (o as any).castShadow = true;
          (o as any).receiveShadow = true;
        });

        // Compute local axes for main couch
        const R = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw)); // length axis
        const F = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)); // forward (into room)
        const innerCorner = (endSign: number) => x + 0; // placeholder
        const cornerPos = (endSign: number) =>
          new THREE.Vector3()
            .copy(new THREE.Vector3(x, 0, z))
            .add(R.clone().multiplyScalar((endSign * length) / 2))
            .add(F.clone().multiplyScalar(depth / 2));
        const gap = 0.06;

        let placed = false;
        for (const endSign of [1, -1]) {
          const pCorner = cornerPos(endSign);
          // Desired forward for the L leg: point toward inside of L (toward main couch center)
          const Fdesired = R.clone().multiplyScalar(-endSign).normalize();
          const candYaw = [yaw + Math.PI / 2, yaw - Math.PI / 2];
          // Choose yaw2 so that its forward best matches Fdesired
          let yaw2 = candYaw[0];
          let bestDot = -1e9;
          for (const y of candYaw) {
            const Ftest = new THREE.Vector3(Math.sin(y), 0, Math.cos(y));
            const d = Ftest.dot(Fdesired);
            if (d > bestDot) {
              bestDot = d;
              yaw2 = y;
            }
          }
          const R2 = new THREE.Vector3(Math.cos(yaw2), 0, -Math.sin(yaw2));
          const F2 = new THREE.Vector3(Math.sin(yaw2), 0, Math.cos(yaw2));

          // Try both choices of which length end of couch2 is the inner corner
          for (const s of [1, -1]) {
            const targetCorner = pCorner.clone().sub(F.clone().multiplyScalar(gap));
            const c2 = targetCorner
              .clone()
              .sub(R2.clone().multiplyScalar((s * len2) / 2 + gap))
              .sub(F2.clone().multiplyScalar(dep2 / 2 + gap));

            // Bounds and doorway corridor checks
            if (c2.x - len2 / 2 < room.min.x + 0.5 || c2.x + len2 / 2 > room.max.x - 0.5) continue;
            if (c2.z - dep2 / 2 < room.min.z + 0.5 || c2.z + dep2 / 2 > room.max.z - 0.5) continue;
            if (wouldBlockDoorCorridor(room, openings, c2.x, c2.z, yaw2, len2, dep2)) continue;

            // avoid intersecting existing couches
            {
              const halfX2 = Math.abs(Math.sin(yaw2)) > 0.5 ? dep2 / 2 : len2 / 2;
              const halfZ2 = Math.abs(Math.sin(yaw2)) > 0.5 ? len2 / 2 : dep2 / 2;
              if (rectIntersects(c2.x, c2.z, halfX2, halfZ2)) continue;
              couch2.position.set(c2.x, 0, c2.z);
              couch2.rotation.y = yaw2;
              this.scene.add(couch2);
              this.meshes.push(couch2);
              // Secondary (L) couch: use same improved seat/back proxies
              const legH2 = 0.1;
              const baseThick2 = 0.08;
              const seatH2 = 0.4;
              const backH2 = h2 - seatH2;
              const armW2 = Math.min(0.18 * (len2 / (len2 || 1)), Math.max(0.12, len2 * 0.08));
              const seatTopY2 = legH2 + baseThick2 + seatH2;
              const body2 = new CANNON.Body({ mass: 0 });
              // Seat slab
              {
                const seatWidth2 = Math.max(0.2, len2 - armW2 * 2);
                const seatDepth2 = Math.max(0.2, dep2 - 0.06);
                const seatThickness2 = 0.12;
                const seatShape2 = new CANNON.Box(new CANNON.Vec3(seatWidth2 / 2, seatThickness2 / 2, seatDepth2 / 2));
                const seatOffset2 = new CANNON.Vec3(0, seatTopY2 - seatThickness2 / 2, 0);
                body2.addShape(seatShape2, seatOffset2 as any);
              }
              // Backrest blocker
              {
                const backWidth2 = Math.max(0.2, len2 - armW2 * 2);
                const backThickness2 = 0.12;
                const backShape2 = new CANNON.Box(
                  new CANNON.Vec3(backWidth2 / 2, Math.max(0.1, backH2) / 2, backThickness2 / 2)
                );
                const backCenterY2 = legH2 + baseThick2 + seatH2 + Math.max(0.1, backH2) / 2;
                const backOffset2 = new CANNON.Vec3(0, backCenterY2, -(dep2 / 2) + backThickness2 / 2 + 0.06);
                body2.addShape(backShape2, backOffset2 as any);
              }
              body2.position.set(c2.x, 0, c2.z);
              if (yaw2 !== 0) body2.quaternion.setFromEuler(0, yaw2, 0);
              // Tag as couch for gameplay grounding checks
              (body2 as any).isCouch = true;
              this.world.addBody(body2);
              this.bodies.push(body2);
              couchRects.push({
                x: c2.x,
                z: c2.z,
                halfX: halfX2,
                halfZ: halfZ2,
              });
              placed = true;
              placedCount += 1;
              break;
            }
          }
          if (placed) break;
        }
      }
      return placedCount;
    };

    for (let ri = 0; ri < rooms.length; ri++) {
      const r = rooms[ri];
      const cx = (r.min.x + r.max.x) / 2,
        cz = (r.min.z + r.max.z) / 2;
      // Couches along walls (avoid doorways)
      // Count total to enforce a minimum later
      // First stochastic pass
      // Accumulator defined after loop
    }
    // Restrict couches to Living Room or Family Room only
    const eligibleIdxs = this.roomLabels
      .map((lab, i) => ({ lab, i }))
      .filter(({ lab }) => lab === "Living Room" || lab === "Family Room")
      .map(({ i }) => i);
    // Ensure a minimum couches per house only if eligible rooms exist
    const minCouches = eligibleIdxs.length > 0 ? (Math.random() < 0.5 ? 1 : 2) : 0;
    let totalCouches = 0;
    for (const ri of eligibleIdxs) {
      if (Math.random() < 0.7) totalCouches += placeCouchAlongWall(rooms[ri], roomOpenings[ri]);
      if (Math.random() < 0.35) totalCouches += placeCouchAlongWall(rooms[ri], roomOpenings[ri]);
    }
    let safety = 50;
    while (eligibleIdxs.length > 0 && totalCouches < minCouches && safety-- > 0) {
      const idx = eligibleIdxs[Math.floor(Math.random() * eligibleIdxs.length)];
      totalCouches += placeCouchAlongWall(rooms[idx], roomOpenings[idx]);
    }

    // After couches are placed, remove any gameplay holes that are behind couches
    if (this.mouseHoles.length > 0 && couchRects.length > 0) {
      const margin = 0.06;
      const eps = 1e-3;
      const notBehindCouch = (h: { position: THREE.Vector3; inward: THREE.Vector3; room: THREE.Box3 }) => {
        const room = h.room;
        const pos = h.position;
        const nearNorth = Math.abs(pos.z - room.max.z) < eps;
        const nearSouth = Math.abs(pos.z - room.min.z) < eps;
        const nearEast = Math.abs(pos.x - room.max.x) < eps;
        const nearWest = Math.abs(pos.x - room.min.x) < eps;
        for (const r of couchRects) {
          if (nearNorth) {
            const touchesWall = Math.abs(r.z + r.halfZ - room.max.z) < 0.2;
            if (touchesWall && pos.x >= r.x - r.halfX - margin && pos.x <= r.x + r.halfX + margin) return false;
          }
          if (nearSouth) {
            const touchesWall = Math.abs(r.z - r.halfZ - room.min.z) < 0.2;
            if (touchesWall && pos.x >= r.x - r.halfX - margin && pos.x <= r.x + r.halfX + margin) return false;
          }
          if (nearEast) {
            const touchesWall = Math.abs(r.x + r.halfX - room.max.x) < 0.2;
            if (touchesWall && pos.z >= r.z - r.halfZ - margin && pos.z <= r.z + r.halfZ + margin) return false;
          }
          if (nearWest) {
            const touchesWall = Math.abs(r.x - r.halfX - room.min.x) < 0.2;
            if (touchesWall && pos.z >= r.z - r.halfZ - margin && pos.z <= r.z + r.halfZ + margin) return false;
          }
        }
        return true;
      };
      const before = this.mouseHoles.length;
      this.mouseHoles = this.mouseHoles.filter(notBehindCouch);
      const removedCount = Math.max(0, before - this.mouseHoles.length);

      // If any holes were removed due to couches, try to add replacements
      if (removedCount > 0) {
        const candidates: {
          room: THREE.Box3;
          a: THREE.Vector3;
          b: THREE.Vector3;
        }[] = [];
        for (let i = 0; i < rooms.length; i++) {
          const r = rooms[i];
          const min = r.min,
            max = r.max;
          const corners = [
            new THREE.Vector3(min.x, 0, min.z),
            new THREE.Vector3(max.x, 0, min.z),
            new THREE.Vector3(max.x, 0, max.z),
            new THREE.Vector3(min.x, 0, max.z),
          ];
          const edges = [
            [corners[0], corners[1]],
            [corners[1], corners[2]],
            [corners[2], corners[3]],
            [corners[3], corners[0]],
          ] as const;
          for (const [a, b] of edges) {
            const onNorth = Math.abs(a.z - houseMax.z) < 1e-3 && Math.abs(b.z - houseMax.z) < 1e-3;
            const onSouth = Math.abs(a.z - houseMin.z) < 1e-3 && Math.abs(b.z - houseMin.z) < 1e-3;
            const onEast = Math.abs(a.x - houseMax.x) < 1e-3 && Math.abs(b.x - houseMax.x) < 1e-3;
            const onWest = Math.abs(a.x - houseMin.x) < 1e-3 && Math.abs(b.x - houseMin.x) < 1e-3;
            const isInteriorEdge = !(onNorth || onSouth || onEast || onWest);
            if (!isInteriorEdge) continue;
            candidates.push({ room: r, a, b });
          }
        }
        let toAdd = removedCount;
        let guard = candidates.length * 2 + 20;
        while (toAdd > 0 && guard-- > 0 && candidates.length > 0) {
          const idx = Math.floor(Math.random() * candidates.length);
          const c = candidates[idx];
          addMouseHoleOnEdge(c.room, c.a, c.b);
          // After each attempted placement, recheck if it survived couch filter
          const afterTry = this.mouseHoles.filter(notBehindCouch);
          const grew = afterTry.length > this.mouseHoles.length ? 1 : 0;
          this.mouseHoles = afterTry;
          if (grew > 0) toAdd -= grew;
        }
        // Final safety recheck
        this.mouseHoles = this.mouseHoles.filter(notBehindCouch);
      }
    }

    // Remove spawn points that ended up under couches
    if (this.spawnPoints.length > 0 && couchRects.length > 0) {
      const margin = 0.1; // small clearance around couch footprint
      this.spawnPoints = this.spawnPoints.filter((p) => {
        for (const r of couchRects) {
          if (
            p.x >= r.x - r.halfX - margin &&
            p.x <= r.x + r.halfX + margin &&
            p.z >= r.z - r.halfZ - margin &&
            p.z <= r.z + r.halfZ + margin
          ) {
            return false; // inside a couch footprint
          }
        }
        return true;
      });
    }

    // Clutter: dynamic physics objects randomly around rooms (not on furniture)
    for (let i = 0; i < spec.clutterCount; i++) {
      const r = choice(rooms);
      const margin = 0.6;
      const px = randRange(r.min.x + margin, r.max.x - margin);
      const pz = randRange(r.min.z + margin, r.max.z - margin);
      const baseY = 0.15; // spawn slightly above floor and let physics settle

      // Heavier-looking but lighter weight: size x2–x3, mass at 25%
      const massBase = randRange(0.12, 0.6) * 0.25;
      const scale = randRange(2.0, 3.0);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff * Math.random(),
      });
      if (Math.random() < 0.5) {
        // Sphere clutter
        const baseR = randRange(0.08, 0.18);
        const rr = baseR * scale;
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(rr, 18, 14), mat);
        mesh.position.set(px, baseY + rr + 0.02, pz);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
        this.meshes.push(mesh);
        const body = new CANNON.Body({
          mass: massBase,
          shape: new CANNON.Sphere(rr),
        });
        body.angularDamping = 0.25;
        body.linearDamping = 0.02;
        body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
        this.world.addBody(body);
        this.bodies.push(body);
        this.dynamicPairs.push({ mesh, body });
      } else {
        // Upright cylinder clutter
        const baseR = randRange(0.06, 0.12);
        const baseH = randRange(0.14, 0.3);
        const rr = baseR * scale;
        const h = baseH * scale;
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr, h, 16), mat);
        mesh.position.set(px, baseY + h / 2 + 0.02, pz);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
        this.meshes.push(mesh);
        const cyl = new (CANNON as any).Cylinder(rr, rr, h, 16);
        const body = new CANNON.Body({ mass: massBase });
        // Align cylinder axis to Y by rotating around Z
        const q = new CANNON.Quaternion();
        q.setFromEuler(0, 0, Math.PI / 2);
        body.addShape(cyl, new CANNON.Vec3(0, 0, 0), q);
        body.angularDamping = 0.25;
        body.linearDamping = 0.02;
        body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
        this.world.addBody(body);
        this.bodies.push(body);
        this.dynamicPairs.push({ mesh, body });
      }
    }
  }

  // Determine best-fit semantic type for each room
  private classifyRooms(
    rooms: THREE.Box3[],
    roomOpenings: THREE.Vector3[][],
    houseMin: THREE.Vector3,
    houseMax: THREE.Vector3
  ) {
    const eps = 1e-3;
    type Meta = {
      idx: number;
      w: number;
      d: number;
      area: number;
      aspect: number; // long/short
      boundary: boolean;
      touchesNorth: boolean;
      touchesSouth: boolean;
      touchesEast: boolean;
      touchesWest: boolean;
      neighbors: number[];
      degree: number;
    };

    const metas: Meta[] = rooms.map((r, i) => {
      const size = new THREE.Vector3().subVectors(r.max, r.min);
      const long = Math.max(size.x, size.z);
      const short = Math.max(0.001, Math.min(size.x, size.z));
      const boundary =
        Math.abs(r.min.x - houseMin.x) < eps ||
        Math.abs(r.max.x - houseMax.x) < eps ||
        Math.abs(r.min.z - houseMin.z) < eps ||
        Math.abs(r.max.z - houseMax.z) < eps;
      return {
        idx: i,
        w: size.x,
        d: size.z,
        area: size.x * size.z,
        aspect: long / short,
        boundary,
        touchesNorth: Math.abs(r.max.z - houseMax.z) < eps,
        touchesSouth: Math.abs(r.min.z - houseMin.z) < eps,
        touchesEast: Math.abs(r.max.x - houseMax.x) < eps,
        touchesWest: Math.abs(r.min.x - houseMin.x) < eps,
        neighbors: [],
        degree: 0,
      };
    });

    // Build adjacency list (room-to-room); do not count backyard opening
    const neighbors: number[][] = rooms.map(() => []);
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const A = rooms[i],
          B = rooms[j];
        const overlapZ = Math.min(A.max.z, B.max.z) - Math.max(A.min.z, B.min.z);
        const overlapX = Math.min(A.max.x, B.max.x) - Math.max(A.min.x, B.min.x);
        const shareVertical = overlapZ > 0 && (Math.abs(A.max.x - B.min.x) < eps || Math.abs(A.min.x - B.max.x) < eps);
        const shareHorizontal =
          overlapX > 0 && (Math.abs(A.max.z - B.min.z) < eps || Math.abs(A.min.z - B.max.z) < eps);
        if (shareVertical || shareHorizontal) {
          neighbors[i].push(j);
          neighbors[j].push(i);
        }
      }
    }
    for (let i = 0; i < metas.length; i++) {
      metas[i].neighbors = neighbors[i];
      metas[i].degree = neighbors[i].length;
    }

    // Helper lookups
    const byAreaDesc = [...metas].sort((a, b) => b.area - a.area);
    const isLongThin = (m: Meta) => m.aspect >= 3 && Math.min(m.w, m.d) <= 2.2;
    const isSmall = (m: Meta) => m.area < 9;
    const isMedium = (m: Meta) => m.area >= 9 && m.area <= 20;
    const isLarge = (m: Meta) => m.area > 20;

    const labels: string[] = rooms.map(() => "Unlabeled");
    const taken = new Set<number>();

    // 1) Hallways: long, thin connectors
    for (const m of metas) {
      if (isLongThin(m) && m.area >= 6 && m.area <= 40 && m.degree >= 2) {
        labels[m.idx] = "Hallway";
        taken.add(m.idx);
      }
    }

    // 2) Living Room: largest non-hallway, not too elongated, prefer boundary/back
    let livingIdx = -1;
    for (const m of byAreaDesc) {
      if (taken.has(m.idx)) continue;
      if (m.aspect <= 2.5) {
        livingIdx = m.idx;
        labels[m.idx] = "Living Room";
        taken.add(m.idx);
        break;
      }
    }

    // 3) Kitchen: medium/large neighbor of living, compact-ish
    if (livingIdx >= 0) {
      const livingNeighbors = metas[livingIdx].neighbors.map((i) => metas[i]);
      const kitchenCand = livingNeighbors
        .filter((m) => !taken.has(m.idx) && m.aspect <= 2.5 && m.area >= 10 && m.area <= 35)
        .sort((a, b) => b.area - a.area)[0];
      if (kitchenCand) {
        labels[kitchenCand.idx] = "Kitchen";
        taken.add(kitchenCand.idx);
      }
    }

    // 4) Dining Room: adjacent to Kitchen or Living, small/medium
    const kitchenIdx = labels.indexOf("Kitchen");
    const diningSourceIdx = kitchenIdx >= 0 ? kitchenIdx : livingIdx;
    if (diningSourceIdx >= 0) {
      const cands = metas[diningSourceIdx].neighbors
        .map((i) => metas[i])
        .filter((m) => !taken.has(m.idx) && m.area >= 8 && m.area <= 25 && m.aspect <= 2.8)
        .sort((a, b) => a.area - b.area);
      if (cands.length > 0) {
        labels[cands[0].idx] = "Dining Room";
        taken.add(cands[0].idx);
      }
    }

    // 5) Bathrooms: small, adjacent to hallway or bedroom candidates.
    // Don't create duplicates of major types (bathrooms count as major) until all majors are present.
    // Mark hallway indices for preference
    const hallwayIdxs = labels.map((v, i) => (v === "Hallway" ? i : -1)).filter((i) => i >= 0);
    const isNextTo = (m: Meta, idxs: number[]) => m.neighbors.some((n) => idxs.includes(n));
    const bathCands = metas.filter((m) => !taken.has(m.idx) && isSmall(m)).sort((a, b) => a.area - b.area);
    let bathroomAssigned = false;
    for (const m of bathCands) {
      if (isNextTo(m, hallwayIdxs)) {
        if (!bathroomAssigned) {
          labels[m.idx] = "Bathroom";
          taken.add(m.idx);
          bathroomAssigned = true;
        } else {
          // Skip assigning more bathrooms for now; may allow later after majors satisfied
        }
      }
    }

    // 6) Bedrooms: medium rooms, prefer off hallways, not kitchens/dining/living
    const bedroomCands = metas
      .filter((m) => !taken.has(m.idx) && !isLongThin(m) && m.area >= 9 && m.area <= 25 && m.aspect <= 2.6)
      .sort((a, b) => b.area - a.area);
    const assignedBedrooms: number[] = [];
    for (const m of bedroomCands) {
      if (hallwayIdxs.length === 0 || isNextTo(m, hallwayIdxs) || m.degree <= 2) {
        labels[m.idx] = "Bedroom";
        taken.add(m.idx);
        assignedBedrooms.push(m.idx);
      }
    }

    // Promote largest bedroom to Master Bedroom
    if (assignedBedrooms.length > 0) {
      const largestBed = assignedBedrooms.map((i) => metas[i]).sort((a, b) => b.area - a.area)[0];
      if (largestBed) labels[largestBed.idx] = "Master Bedroom";
    }

    // 7) Entry/Foyer: boundary near south edge, small/medium, ideally near hallway/living
    const foyerCands = metas
      .filter((m) => !taken.has(m.idx) && m.boundary && m.touchesSouth && m.area >= 6 && m.area <= 16)
      .sort((a, b) => a.area - b.area);
    if (foyerCands.length > 0) {
      // Prefer those connected to hallway or living
      const pref = foyerCands.find(
        (m) => isNextTo(m, hallwayIdxs) || (livingIdx >= 0 && m.neighbors.includes(livingIdx))
      );
      const chosen = pref || foyerCands[0];
      labels[chosen.idx] = "Foyer";
      taken.add(chosen.idx);
    }

    // 8) Laundry/Mudroom: boundary, small/medium, near kitchen or hallway
    const laundryCands = metas
      .filter((m) => !taken.has(m.idx) && m.boundary && m.area >= 5 && m.area <= 12)
      .sort((a, b) => a.area - b.area);
    for (const m of laundryCands) {
      if ((kitchenIdx >= 0 && m.neighbors.includes(kitchenIdx)) || isNextTo(m, hallwayIdxs)) {
        labels[m.idx] = "Laundry";
        taken.add(m.idx);
        break;
      }
    }

    // 9) Office/Study: medium, lower degree, not assigned yet
    const office = metas
      .filter((m) => !taken.has(m.idx) && isMedium(m) && m.aspect <= 2.5)
      .sort((a, b) => a.degree - b.degree)[0];
    if (office) {
      labels[office.idx] = "Office";
      taken.add(office.idx);
    }

    // Ensure required majors exist: Living Room, Kitchen, Bathroom, Bedroom
    const hasType = (t: string) => labels.includes(t);
    const hasBedroomAny = () => labels.includes("Bedroom") || labels.includes("Master Bedroom");
    const ensureLiving = () => {
      if (!hasType("Living Room")) {
        const cand = byAreaDesc.find((m) => !taken.has(m.idx) && labels[m.idx] !== "Hallway");
        if (cand) {
          labels[cand.idx] = "Living Room";
          taken.add(cand.idx);
        }
      }
    };
    const ensureKitchen = () => {
      if (!hasType("Kitchen")) {
        const liv = labels.findIndex((v) => v === "Living Room");
        if (liv >= 0) {
          const k = metas[liv].neighbors
            .map((i) => metas[i])
            .filter((m) => !taken.has(m.idx) && labels[m.idx] !== "Hallway")
            .filter((m) => m.aspect <= 2.6)
            .sort((a, b) => Math.abs(18 - a.area) - Math.abs(18 - b.area))[0];
          if (k) {
            labels[k.idx] = "Kitchen";
            taken.add(k.idx);
            return;
          }
        }
        // fallback: best medium-ish compact room
        const k2 = metas
          .filter((m) => !taken.has(m.idx) && labels[m.idx] !== "Hallway" && m.aspect <= 2.6)
          .sort((a, b) => Math.abs(18 - a.area) - Math.abs(18 - b.area))[0];
        if (k2) {
          labels[k2.idx] = "Kitchen";
          taken.add(k2.idx);
        }
      }
    };
    const ensureBathroom = () => {
      if (!hasType("Bathroom")) {
        const b = metas
          .filter((m) => !taken.has(m.idx) && labels[m.idx] !== "Hallway")
          .sort((a, b) => a.area - b.area)[0];
        if (b) {
          labels[b.idx] = "Bathroom";
          taken.add(b.idx);
        }
      }
    };
    const ensureBedroom = () => {
      if (!hasBedroomAny()) {
        const bed = metas
          .filter((m) => !taken.has(m.idx) && !isLongThin(m))
          .sort((a, b) => Math.abs(14 - a.area) - Math.abs(14 - b.area))[0];
        if (bed) {
          labels[bed.idx] = "Bedroom";
          taken.add(bed.idx);
        }
      }
    };
    ensureLiving();
    ensureKitchen();
    ensureBathroom();
    ensureBedroom();

    // 10) Anything remaining: label by size or as Storage
    for (const m of metas) {
      if (taken.has(m.idx)) continue;
      if (m.area < 7) labels[m.idx] = "Closet";
      else if (m.area > 26) labels[m.idx] = "Family Room";
      else labels[m.idx] = "Spare Room";
      taken.add(m.idx);
    }

    // If all majors are present, it's okay to add additional bathrooms; otherwise keep single bathroom.
    const majorsPresent = hasType("Living Room") && hasType("Kitchen") && hasType("Bathroom") && hasBedroomAny();
    if (majorsPresent) {
      for (const m of bathCands) {
        if (labels[m.idx] === "Closet" || labels[m.idx] === "Spare Room") {
          labels[m.idx] = "Bathroom";
        }
      }
    }

    // Re-promote largest bedroom to Master Bedroom after any enforced assignments
    const bedroomIdxs = labels
      .map((v, i) => (v === "Bedroom" || v === "Master Bedroom" ? i : -1))
      .filter((i) => i >= 0);
    if (bedroomIdxs.length > 0) {
      const largestBed = bedroomIdxs.map((i) => metas[i]).sort((a, b) => b.area - a.area)[0];
      if (largestBed) labels[largestBed.idx] = "Master Bedroom";
    }

    this.roomLabels = labels;
    this.roomAdjacency = neighbors;
    this.roomBoxes = rooms;
  }

  // Return the label for the room containing the given XZ position
  getRoomTypeAtPosition(pos: THREE.Vector3): string {
    for (let i = 0; i < this.roomBoxes.length; i++) {
      const r = this.roomBoxes[i];
      if (pos.x >= r.min.x && pos.x <= r.max.x && pos.z >= r.min.z && pos.z <= r.max.z) {
        return this.roomLabels[i] || "Unknown";
      }
    }
    return "Unknown";
  }
}
