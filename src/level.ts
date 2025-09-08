import * as THREE from "three";
import { CANNON } from "./physics";
import { placePropAgainstWallOnce, registerColliderDebugObject } from "./props";
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
  // Doorway colliders per room (2D rectangles in XZ) to keep placement clear
  doorwayRectsByRoom: { minX: number; maxX: number; minZ: number; maxZ: number }[][] = [];

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

    // Helper to draw box edges as walls but leave one or more door openings per edge
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
        // Gather all openings that lie along this edge segment (within tolerance)
        const edgeDir = new THREE.Vector3().subVectors(b, a);
        const len = edgeDir.length();
        const dir = edgeDir.clone().normalize();
        const tol = 0.3; // perpendicular tolerance to consider on-edge
        const doorHalf = 1.2; // must match door carving elsewhere
        type EdgeOpening = { t: number; center: THREE.Vector3 };
        const edgeOpenings: EdgeOpening[] = [];
        for (const o of openings) {
          const ap = new THREE.Vector3().subVectors(o, a);
          const t = ap.dot(dir) / len; // param along edge
          if (t <= 0.05 || t >= 0.95) continue; // avoid cutting doors at corners
          // perpendicular distance to edge
          const closest = a.clone().addScaledVector(dir, t * len);
          const perp = o.clone().sub(closest);
          if (Math.abs(perp.x) + Math.abs(perp.z) < tol) {
            edgeOpenings.push({ t, center: closest });
          }
        }
        // Sort and de-duplicate openings that are too close
        edgeOpenings.sort((u, v) => u.t - v.t);
        const filtered: EdgeOpening[] = [];
        for (const e of edgeOpenings) {
          if (filtered.length === 0 || Math.abs(e.t - filtered[filtered.length - 1].t) * len >= doorHalf * 2 + 0.6) {
            filtered.push(e);
          }
        }

        if (filtered.length > 0) {
          // Build wall segments around each doorway and add lintels
          const clampPoint = (p: THREE.Vector3) =>
            new THREE.Vector3(
              THREE.MathUtils.clamp(p.x, Math.min(a.x, b.x), Math.max(a.x, b.x)),
              p.y,
              THREE.MathUtils.clamp(p.z, Math.min(a.z, b.z), Math.max(a.z, b.z))
            );

          // Helper to add a wall subsegment with baseboards
          const addSeg = (p1: THREE.Vector3, p2: THREE.Vector3) => {
            if (p1.distanceToSquared(p2) < 1e-6) return;
            addWall(p1, p2, wallHeight);
            if (isInteriorEdge) addBaseboards(p1, p2, true);
            else addBaseboardInner(p1, p2);
          };

          // Segments before, between, and after openings
          let cursor = a.clone();
          for (let k = 0; k < filtered.length; k++) {
            const c = filtered[k].center;
            const leftEnd = c.clone().addScaledVector(dir, -doorHalf);
            const rightStart = c.clone().addScaledVector(dir, doorHalf);
            const seg1b = clampPoint(leftEnd);
            addSeg(cursor, seg1b);

            // Lintel above this opening
            const doorWidth = doorHalf * 2;
            const lintelHeight = wallHeight / 3;
            const openingHeight = wallHeight - lintelHeight; // ~2/3 of wall height for opening
            const angle = Math.atan2(dir.x, dir.z);
            const lintelGeo = new THREE.BoxGeometry(wallThickness, lintelHeight, doorWidth);
            const lintelMesh = new THREE.Mesh(lintelGeo, wallMat);
            lintelMesh.position.copy(c);
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

            // Advance cursor to right edge of doorway
            cursor = clampPoint(rightStart);
          }
          // Final segment after last door
          addSeg(cursor, b.clone());
        } else {
          addWall(a, b, wallHeight);
          if (isInteriorEdge) addBaseboards(a, b, true);
          else addBaseboardInner(a, b);
        }
      }
    };

    // Compute adjacency once and assign one or more doorway centers to each touching pair
    const roomOpenings: THREE.Vector3[][] = rooms.map(() => []);
    const eps = 1e-3;
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const A = rooms[i],
          B = rooms[j];
        // vertical shared wall (x constant), overlap along z
        const overlapZ = Math.min(A.max.z, B.max.z) - Math.max(A.min.z, B.min.z);
        if (overlapZ > 0) {
          const doorHalf = 1.2;
          const edgeMargin = doorHalf + 0.4; // keep away from wall corners
          const minZ = Math.max(A.min.z, B.min.z) + edgeMargin;
          const maxZ = Math.min(A.max.z, B.max.z) - edgeMargin;
          if (maxZ > minZ) {
            const addVertical = (x: number) => {
              // Single doorway at random along overlap
              const z = randRange(minZ, maxZ);
              const p = new THREE.Vector3(x, 0, z);
              roomOpenings[i].push(p);
              roomOpenings[j].push(p);
            };
            if (Math.abs(A.max.x - B.min.x) < eps) {
              addVertical(A.max.x);
              continue;
            }
            if (Math.abs(A.min.x - B.max.x) < eps) {
              addVertical(A.min.x);
              continue;
            }
          }
        }
        // horizontal shared wall (z constant), overlap along x
        const overlapX = Math.min(A.max.x, B.max.x) - Math.max(A.min.x, B.min.x);
        if (overlapX > 0) {
          const doorHalf = 1.2;
          const edgeMargin = doorHalf + 0.4;
          const minX = Math.max(A.min.x, B.min.x) + edgeMargin;
          const maxX = Math.min(A.max.x, B.max.x) - edgeMargin;
          if (maxX > minX) {
            const addHorizontal = (z: number) => {
              const x = randRange(minX, maxX);
              const p = new THREE.Vector3(x, 0, z);
              roomOpenings[i].push(p);
              roomOpenings[j].push(p);
            };
            if (Math.abs(A.max.z - B.min.z) < eps) {
              addHorizontal(A.max.z);
              continue;
            }
            if (Math.abs(A.min.z - B.max.z) < eps) {
              addHorizontal(A.min.z);
              continue;
            }
          }
        }
      }
    }
    // Optional backyard opening from a back room (north side of house)
    const backIdx = rooms.findIndex((r) => Math.abs(r.max.z - houseMax.z) < eps);
    if (backIdx >= 0) {
      const r = rooms[backIdx];
      const doorHalf = 1.2;
      const edgeMargin = doorHalf + 0.4;
      const minX = r.min.x + edgeMargin;
      const maxX = r.max.x - edgeMargin;
      const x = minX < maxX ? randRange(minX, maxX) : (r.min.x + r.max.x) / 2;
      roomOpenings[backIdx].push(new THREE.Vector3(x, 0, r.max.z));
    }

    // Classify rooms by type based on size/shape/adjacency and exterior location
    this.classifyRooms(rooms, roomOpenings, houseMin, houseMax);
    // Build doorway colliders (extend into each room from each doorway edge)
    this.doorwayRectsByRoom = rooms.map(() => []);
    {
      const doorHalf = 1.2; // keep in sync with walls
      const widthExtra = 0.4;
      const depthClear = 0.8;
      const epsEdge = 1e-3;
      for (let i = 0; i < rooms.length; i++) {
        const r = rooms[i];
        const rects = this.doorwayRectsByRoom[i];
        for (const o of roomOpenings[i]) {
          // North wall (z ~ r.max.z): corridor extends inward along -Z
          if (Math.abs(o.z - r.max.z) < epsEdge) {
            rects.push({
              minX: o.x - (doorHalf + widthExtra),
              maxX: o.x + (doorHalf + widthExtra),
              minZ: r.max.z - depthClear,
              maxZ: r.max.z,
            });
          }
          // South wall (z ~ r.min.z): corridor extends inward along +Z
          if (Math.abs(o.z - r.min.z) < epsEdge) {
            rects.push({
              minX: o.x - (doorHalf + widthExtra),
              maxX: o.x + (doorHalf + widthExtra),
              minZ: r.min.z,
              maxZ: r.min.z + depthClear,
            });
          }
          // East wall (x ~ r.max.x): corridor extends inward along -X
          if (Math.abs(o.x - r.max.x) < epsEdge) {
            rects.push({
              minX: r.max.x - depthClear,
              maxX: r.max.x,
              minZ: o.z - (doorHalf + widthExtra),
              maxZ: o.z + (doorHalf + widthExtra),
            });
          }
          // West wall (x ~ r.min.x): corridor extends inward along +X
          if (Math.abs(o.x - r.min.x) < epsEdge) {
            rects.push({
              minX: r.min.x,
              maxX: r.min.x + depthClear,
              minZ: o.z - (doorHalf + widthExtra),
              maxZ: o.z + (doorHalf + widthExtra),
            });
          }
        }
      }
    }
    // Optional debug wires for doorway rectangles (placement-only colliders)
    try {
      for (let i = 0; i < rooms.length; i++) {
        for (const d of this.doorwayRectsByRoom[i]) {
          const w = Math.max(0.01, d.maxX - d.minX);
          const h = 0.02;
          const dz = Math.max(0.01, d.maxZ - d.minZ);
          const cx = (d.minX + d.maxX) / 2;
          const cz = (d.minZ + d.maxZ) / 2;
          const geo = new THREE.BoxGeometry(w, h, dz);
          const wire = new THREE.LineSegments(
            new THREE.WireframeGeometry(geo),
            new THREE.LineBasicMaterial({ color: 0xffaa66, depthTest: true, depthWrite: false })
          );
          wire.position.set(cx, h / 2 + 0.002, cz);
          registerColliderDebugObject(wire);
          this.scene.add(wire);
          this.meshes.push(wire);
        }
      }
    } catch {}
    // Draw all rooms with their assigned openings
    for (let i = 0; i < rooms.length; i++) {
      drawRoomWalls(rooms[i], roomOpenings[i]);
    }

    // Doorway jamb cylinder colliders removed (keeping doorway rectangles and F2 debug elsewhere)

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
      // pick a position along the edge, avoid corners; retry if colliding with objects
      const angle = Math.atan2(dir.x, dir.z);
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      const n = new THREE.Vector3(dir.z, 0, -dir.x).normalize(); // outward normal (one side)
      const roomCenter = new THREE.Vector3((room.min.x + room.max.x) / 2, 0, (room.min.z + room.max.z) / 2);
      const toCenter = new THREE.Vector3().subVectors(roomCenter, mid).setY(0).normalize();
      const inward = n.dot(toCenter) > 0 ? n : n.clone().multiplyScalar(-1);

      // Define a small prism that represents the mouse hole collider intruding into the room
      const doorHalf = 1.2;
      const baseboardH = 0.24;
      const holeWidth = 0.48; // collider a bit wider than visual
      const holeDepth = 0.35; // collider extends further into room
      const holeClearance = 0.08; // keep a bit of extra space around hole
      const corridorDepth = 0.6; // additional forward clearance beyond the hole
      const wallT = 0.35;
      const eps = 0.01;
      const rectOverlap = (aabb: {minX:number;maxX:number;minZ:number;maxZ:number}, b: {minX:number;maxX:number;minZ:number;maxZ:number}) => {
        return !(aabb.maxX < b.minX || aabb.minX > b.maxX || aabb.maxZ < b.minZ || aabb.minZ > b.maxZ);
      };

      let pos: THREE.Vector3 | null = null;
      let tries = 16;
      pickSpot: while (tries-- > 0) {
        const t = 0.2 + Math.random() * 0.6;
        const candPos = a.clone().addScaledVector(dir, t);
        // Build prism center just inside room so it doesn't intersect the wall itself
        const center = candPos
          .clone()
          .add(inward.clone().multiplyScalar(wallT / 2 + holeDepth / 2 + eps));
        const half = { x: holeWidth / 2, z: holeDepth / 2 };
        const aabb = {
          minX: center.x - half.x - holeClearance,
          maxX: center.x + half.x + holeClearance,
          minZ: center.z - half.z - holeClearance,
          maxZ: center.z + half.z + holeClearance,
        };
        // Corridor AABB further into the room from the hole opening
        const corridorCenter = candPos
          .clone()
          .add(inward.clone().multiplyScalar(wallT / 2 + corridorDepth / 2 + eps));
        const corridorHalf = { x: holeWidth / 2 + holeClearance, z: corridorDepth / 2 };
        const corridorAabb = {
          minX: corridorCenter.x - corridorHalf.x,
          maxX: corridorCenter.x + corridorHalf.x,
          minZ: corridorCenter.z - corridorHalf.z,
          maxZ: corridorCenter.z + corridorHalf.z,
        };
        // 1) Ensure does not overlap doorway rectangles for this room (if available)
        const ri = rooms.indexOf(room);
        if (ri >= 0 && this.doorwayRectsByRoom[ri]) {
          let bad = false;
          for (const d of this.doorwayRectsByRoom[ri]) {
            if (rectOverlap(aabb, d) || rectOverlap(corridorAabb, d)) {
              bad = true;
              break;
            }
          }
          if (bad) continue pickSpot;
        }
        // 2) Keep corridor within room interior bounds (avoid walls)
        const inside = (X: number, Z: number) =>
          X >= room.min.x + wallT / 2 + eps &&
          X <= room.max.x - wallT / 2 - eps &&
          Z >= room.min.z + wallT / 2 + eps &&
          Z <= room.max.z - wallT / 2 - eps;
        if (
          !inside(corridorAabb.minX, corridorAabb.minZ) ||
          !inside(corridorAabb.maxX, corridorAabb.maxZ)
        ) continue pickSpot;

        // 3) Ensure prism/corridor does not intersect any existing physics body AABB (props, couches, etc.)
        let hitsBody = false;
        for (const bdy of this.bodies) {
          // Update and read AABB if supported
          try {
            (bdy as any).computeAABB && (bdy as any).computeAABB();
            const bb = (bdy as any).aabb as { lowerBound: any; upperBound: any } | undefined;
            if (!bb) continue;
            const bb2 = {
              minX: bb.lowerBound.x,
              maxX: bb.upperBound.x,
              minZ: bb.lowerBound.z,
              maxZ: bb.upperBound.z,
            };
            if (rectOverlap(aabb, bb2) || rectOverlap(corridorAabb, bb2)) {
              hitsBody = true;
              break;
            }
          } catch {}
        }
        if (hitsBody) continue pickSpot;
        pos = candPos;
        break;
      }
      if (!pos) return; // give up if no valid spot found

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
    // Wood floor texture for interior rooms (tiled per room size)
    const woodTexUrl = new URL("../textures/wood-floor.jpg", import.meta.url).toString();
    const woodBaseTex = new THREE.TextureLoader().load(woodTexUrl);
    woodBaseTex.wrapS = THREE.RepeatWrapping;
    woodBaseTex.wrapT = THREE.RepeatWrapping;
    // Modern THREE uses colorSpace; fall back to encoding if needed
    (woodBaseTex as any).colorSpace = (THREE as any).SRGBColorSpace || (woodBaseTex as any).colorSpace;
    woodBaseTex.anisotropy = 8;
    const tileSize = 2.5; // meters per texture tile
    const makeFloorMat = (sx: number, sz: number) => {
      const tex = woodBaseTex.clone();
      tex.needsUpdate = true;
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(Math.max(1, sx / tileSize), Math.max(1, sz / tileSize));
      return new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85, metalness: 0.0 });
    };
    const ceilMat = new THREE.MeshStandardMaterial({ color: 0xe6e6e6 });
    for (const r of rooms) {
      const size = new THREE.Vector3().subVectors(r.max, r.min);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(size.x, 0.1, size.z), makeFloorMat(size.x, size.z));
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

    // Place toilets for each Bathroom via re-usable prop utility
    for (let i = 0; i < rooms.length; i++) {
      if (this.roomLabels[i] === "Bathroom") {
        placePropAgainstWallOnce(this.world, this.scene, rooms[i], roomOpenings[i], {
          modelUrl: new URL("../models/toilet/toilet.fbx", import.meta.url).toString(),
          targetHeight: 2,
          inwardOffset: 1.08,
          yawOffset: -90,
          shrink: 0.9,
          tag: "toilet",
          canPlace: ({ position, halfSize }) => {
            const cand = {
              minX: position.x - halfSize.x,
              maxX: position.x + halfSize.x,
              minZ: position.z - halfSize.z,
              maxZ: position.z + halfSize.z,
            };
            for (const d of this.doorwayRectsByRoom[i] || []) {
              if (!(cand.maxX < d.minX || cand.minX > d.maxX || cand.maxZ < d.minZ || cand.minZ > d.maxZ)) return false;
            }
            return true;
          },
          onPlaced: (mesh, body) => {
            this.meshes.push(mesh);
            if (body) this.bodies.push(body);
          },
        });
        // Also place a sink (OBJ) in the bathroom
        placePropAgainstWallOnce(this.world, this.scene, rooms[i], roomOpenings[i], {
          modelUrl: new URL("../models/sink-bathroom/sink-bathroom.obj", import.meta.url).toString(),
          targetHeight: 3,
          inwardOffset: 0.9,
          yawOffset: 0,
          shrink: 0.9,
          tag: "sink",
          canPlace: ({ position, halfSize }) => {
            const cand = {
              minX: position.x - halfSize.x,
              maxX: position.x + halfSize.x,
              minZ: position.z - halfSize.z,
              maxZ: position.z + halfSize.z,
            };
            for (const d of this.doorwayRectsByRoom[i] || []) {
              if (!(cand.maxX < d.minX || cand.minX > d.maxX || cand.maxZ < d.minZ || cand.minZ > d.maxZ)) return false;
            }
            return true;
          },
          onPlaced: (mesh, body) => {
            this.meshes.push(mesh);
            if (body) this.bodies.push(body);
          },
        });
      }
    }

    // Place couches: along walls, avoid doorways (fresh implementation)
    const couchRoomIdxs = this.roomLabels
      .map((label, i) => ({ label, i }))
      .filter(({ label }) => label === "Living Room" || label === "Family Room")
      .map(({ i }) => i);
    for (const ri of couchRoomIdxs) {
      const r = rooms[ri];
      const size = new THREE.Vector3().subVectors(r.max, r.min);
      const area = Math.max(0.001, size.x * size.z);
      // Normalize area to [0,1] based on small/large heuristics
      const a0 = 35; // small room area threshold
      const a1 = 95; // large room area threshold
      const t = THREE.MathUtils.clamp((area - a0) / Math.max(1, a1 - a0), 0, 1);
      // Start with 1 couch; add up to 2 more with probability weighted by room size
      let couches = 1;
      if (Math.random() < t) couches++;
      if (Math.random() < t * 0.6) couches++;
      couches = Math.min(3, couches);

      // Track already placed couch AABBs in this room to prevent overlaps
      const placedAabbs: { minX: number; maxX: number; minZ: number; maxZ: number }[] = [];
      const aabbOverlaps = (a: { minX: number; maxX: number; minZ: number; maxZ: number }, b: { minX: number; maxX: number; minZ: number; maxZ: number }) => {
        return !(a.maxX < b.minX || a.minX > b.maxX || a.maxZ < b.minZ || a.minZ > b.maxZ);
      };

      for (let n = 0; n < couches; n++) {
        placePropAgainstWallOnce(this.world, this.scene, r, roomOpenings[ri], {
          modelUrl: new URL("../models/couch/couch.fbx", import.meta.url).toString(),
          textureUrl: new URL("../models/couch/couch.jpg", import.meta.url).toString(),
          textureBrightness: 3,
          targetHeight: 2,
          inwardOffset: 1.35,
          doorHalf: 1.2,
          doorMargin: 0.6,
          // Use simple convex hull for couches
          colliderStrategy: "hull",
          shrink: 0.9,
          tag: "couch",
          // Reject placement candidates that overlap couches or collide with walls
          canPlace: ({ position, yawRad, halfSize }) => {
            // AABB for quick overlap tests (axis-aligned; yaw is multiples of 90deg)
            const candidate = {
              minX: position.x - halfSize.x,
              maxX: position.x + halfSize.x,
              minZ: position.z - halfSize.z,
              maxZ: position.z + halfSize.z,
            };
            // 1) No overlap with already placed couches
            for (const p of placedAabbs) if (aabbOverlaps(candidate, p)) return false;
            // 2) No overlap with doorway colliders in this room
            for (const d of this.doorwayRectsByRoom[ri] || []) {
              if (!(candidate.maxX < d.minX || candidate.minX > d.maxX || candidate.maxZ < d.minZ || candidate.minZ > d.maxZ)) {
                return false;
              }
            }

            // 3) Do not collide with walls: keep AABB inside room interior and keep back against wall interior face
            const wallT = 0.35; // must match wall thickness in generation
            const eps = 0.02;
            // Keep entire AABB within interior bounds
            if (
              candidate.minX < r.min.x + wallT / 2 + eps ||
              candidate.maxX > r.max.x - wallT / 2 - eps ||
              candidate.minZ < r.min.z + wallT / 2 + eps ||
              candidate.maxZ > r.max.z - wallT / 2 - eps
            )
              return false;
            // Ensure the back of the couch is not embedded in the wall
            const F = new THREE.Vector3(Math.sin(yawRad), 0, Math.cos(yawRad)); // inward-facing
            const back = position.clone().addScaledVector(F, -halfSize.z);
            // Determine wall by F axis
            if (Math.abs(F.z) >= Math.abs(F.x)) {
              // Facing along Z (north/south)
              if (F.z < 0) {
                // North wall behind; interior plane at r.max.z - wallT/2
                const interior = r.max.z - wallT / 2;
                if (back.z > interior - eps) return false;
              } else {
                // South wall
                const interior = r.min.z + wallT / 2;
                if (back.z < interior + eps) return false;
              }
            } else {
              // Facing along X (east/west)
              if (F.x < 0) {
                // East wall
                const interior = r.max.x - wallT / 2;
                if (back.x > interior - eps) return false;
              } else {
                // West wall
                const interior = r.min.x + wallT / 2;
                if (back.x < interior + eps) return false;
              }
            }
            return true;
          },
          onPlaced: (mesh, body) => {
            // Only record real placements that produced a mesh with geometry
            if (mesh && (mesh as any).isObject3D) {
              // Compute world AABB and store for subsequent overlap checks
              const bb = new THREE.Box3().setFromObject(mesh);
              if (isFinite(bb.min.x) && isFinite(bb.max.x) && isFinite(bb.min.z) && isFinite(bb.max.z)) {
                placedAabbs.push({ minX: bb.min.x, maxX: bb.max.x, minZ: bb.min.z, maxZ: bb.max.z });
              }
              this.meshes.push(mesh);
            }
            if (body) this.bodies.push(body);
          },
        });
      }
    }

    // Clutter: dynamic physics objects biased to kid-friendly rooms
    // Build weighted room list based on semantic labels
    const kidWeights: Record<string, number> = {
      "Living Room": 1.0,
      "Family Room": 1.0,
      "Master Bedroom": 0.9,
      Bedroom: 0.8,
      "Spare Room": 0.5,
      "Dining Room": 0.2,
      // Not likely play areas
      Hallway: 0,
      Kitchen: 0,
      Bathroom: 0,
      Office: 0,
      Laundry: 0,
      Closet: 0,
    };
    const eligible: { room: THREE.Box3; weight: number }[] = [];
    for (let i = 0; i < rooms.length; i++) {
      const label = this.roomLabels[i] || "";
      const baseW = kidWeights[label] ?? 0;
      if (baseW <= 0) continue;
      // Mildly scale by room area to spread clutter sensibly
      const sz = new THREE.Vector3().subVectors(rooms[i].max, rooms[i].min);
      const areaScale = THREE.MathUtils.clamp((sz.x * sz.z) / 16, 0.6, 1.6);
      eligible.push({ room: rooms[i], weight: baseW * areaScale });
    }

    // Precompute cumulative weights for sampling
    const cum: number[] = [];
    let totalW = 0;
    for (const e of eligible) {
      totalW += e.weight;
      cum.push(totalW);
    }

    const pickEligible = () => {
      if (eligible.length === 0 || totalW <= 0) return null as THREE.Box3 | null;
      const r = Math.random() * totalW;
      const idx = cum.findIndex((v) => r < v);
      return eligible[Math.max(0, idx)].room;
    };

    for (let i = 0; i < spec.clutterCount; i++) {
      const r = pickEligible();
      if (!r) break; // no eligible rooms
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
