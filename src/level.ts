import * as THREE from "three";
import { CANNON } from "./physics";
import { randRange, choice } from "./utils";

export type LevelSpec = {
  miceRequired: number;
  mouseCount: number;
  mouseSpeed: number;
  roomCount: number;
  clutterCount: number;
};

export class Level {
  roomBoxes: THREE.Box3[] = [];
  worldBounds: THREE.Box3;
  floorBody: CANNON.Body;
  meshes: THREE.Object3D[] = [];
  bodies: CANNON.Body[] = [];
  spawnPoints: THREE.Vector3[] = [];

  constructor(
    public world: CANNON.World,
    public scene: THREE.Scene,
    public rngSeed = Math.random() * 1e9
  ) {
    this.worldBounds = new THREE.Box3(
      new THREE.Vector3(-20, 0, -20),
      new THREE.Vector3(20, 5, 20)
    );
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

    // Generate a set of rectangular rooms connected in a loose grid, plus a backyard
    const houseMin = new THREE.Vector3(-10, 0, -10);
    const houseMax = new THREE.Vector3(10, 3, 10);
    const house = new THREE.Box3(houseMin.clone(), houseMax.clone());
    // Partition into rooms
    const rooms: THREE.Box3[] = [];
    let remaining = [house];
    for (let i = 0; i < spec.roomCount - 1; i++) {
      if (remaining.length === 0) break;
      const box = remaining.pop()!;
      const size = new THREE.Vector3().subVectors(box.max, box.min);
      if (size.x > size.z) {
        // split along X (no gap so rooms touch; walls we add will define thickness)
        const mid = box.min.x + size.x * randRange(0.35, 0.65);
        const left = new THREE.Box3(
          box.min.clone(),
          new THREE.Vector3(mid, box.max.y, box.max.z)
        );
        const right = new THREE.Box3(
          new THREE.Vector3(mid, box.min.y, box.min.z),
          box.max.clone()
        );
        remaining.push(left, right);
      } else {
        // split along Z
        const mid = box.min.z + size.z * randRange(0.35, 0.65);
        const near = new THREE.Box3(
          box.min.clone(),
          new THREE.Vector3(box.max.x, box.max.y, mid)
        );
        const far = new THREE.Box3(
          new THREE.Vector3(box.min.x, box.min.y, mid),
          box.max.clone()
        );
        remaining.push(near, far);
      }
    }
    rooms.push(...remaining);
    this.roomBoxes = rooms;

    // Build walls around house perimeter and between rooms, with random doorways
    const wallHeight = 7.5;
    const wallThickness = 0.2;
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xdedede,
      roughness: 0.9,
    });
    const addWall = (p1: THREE.Vector3, p2: THREE.Vector3, height: number) => {
      const dir = new THREE.Vector3().subVectors(p2, p1);
      const len = dir.length();
      const angle = Math.atan2(dir.x, dir.z);
      const geo = new THREE.BoxGeometry(wallThickness, height, len);
      const mesh = new THREE.Mesh(geo, wallMat);
      mesh.position.copy(
        new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5)
      );
      mesh.position.y = height / 2;
      mesh.rotation.y = angle;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.meshes.push(mesh);

      const shape = new CANNON.Box(
        new CANNON.Vec3(wallThickness / 2, height / 2, len / 2)
      );
      const body = new CANNON.Body({ mass: 0, shape });
      body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
      body.quaternion.setFromEuler(0, angle, 0);
      this.world.addBody(body);
      this.bodies.push(body);
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
          if (Math.abs(perp.x) + Math.abs(perp.z) < tol) { // approx distance in XZ
            chosenCenter = closest; break;
          }
        }
        if (chosenCenter) {
          // split wall into two segments around a door
          const doorHalf = 1.2; // 2x wider (~2.4m)
          const leftEnd = chosenCenter.clone().addScaledVector(dir, -doorHalf);
          const rightStart = chosenCenter.clone().addScaledVector(dir, doorHalf);
          // Clamp to segment
          const clampPoint = (p: THREE.Vector3) => new THREE.Vector3(
            THREE.MathUtils.clamp(p.x, Math.min(a.x, b.x), Math.max(a.x, b.x)),
            p.y,
            THREE.MathUtils.clamp(p.z, Math.min(a.z, b.z), Math.max(a.z, b.z))
          );
          addWall(a, clampPoint(leftEnd), wallHeight);
          addWall(clampPoint(rightStart), b, wallHeight);

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

          const lintelShape = new CANNON.Box(
            new CANNON.Vec3(wallThickness / 2, lintelHeight / 2, doorWidth / 2)
          );
          const lintelBody = new CANNON.Body({ mass: 0, shape: lintelShape });
          lintelBody.position.set(
            lintelMesh.position.x,
            lintelMesh.position.y,
            lintelMesh.position.z
          );
          lintelBody.quaternion.setFromEuler(0, angle, 0);
          this.world.addBody(lintelBody);
          this.bodies.push(lintelBody);
        } else {
          addWall(a, b, wallHeight);
        }
      }
    };

    // Compute adjacency once and assign a doorway to each touching pair
    const roomOpenings: THREE.Vector3[][] = rooms.map(() => [])
    const eps = 1e-3
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const A = rooms[i], B = rooms[j]
        // vertical shared wall (x constant), overlap along z
        const overlapZ = Math.min(A.max.z, B.max.z) - Math.max(A.min.z, B.min.z)
        if (overlapZ > 0) {
          if (Math.abs(A.max.x - B.min.x) < eps) {
            const z = (Math.max(A.min.z, B.min.z) + Math.min(A.max.z, B.max.z)) / 2
            const x = A.max.x
            const p = new THREE.Vector3(x, 0, z)
            roomOpenings[i].push(p)
            roomOpenings[j].push(p)
            continue
          }
          if (Math.abs(A.min.x - B.max.x) < eps) {
            const z = (Math.max(A.min.z, B.min.z) + Math.min(A.max.z, B.max.z)) / 2
            const x = A.min.x
            const p = new THREE.Vector3(x, 0, z)
            roomOpenings[i].push(p)
            roomOpenings[j].push(p)
            continue
          }
        }
        // horizontal shared wall (z constant), overlap along x
        const overlapX = Math.min(A.max.x, B.max.x) - Math.max(A.min.x, B.min.x)
        if (overlapX > 0) {
          if (Math.abs(A.max.z - B.min.z) < eps) {
            const x = (Math.max(A.min.x, B.min.x) + Math.min(A.max.x, B.max.x)) / 2
            const z = A.max.z
            const p = new THREE.Vector3(x, 0, z)
            roomOpenings[i].push(p)
            roomOpenings[j].push(p)
            continue
          }
          if (Math.abs(A.min.z - B.max.z) < eps) {
            const x = (Math.max(A.min.x, B.min.x) + Math.min(A.max.x, B.max.x)) / 2
            const z = A.min.z
            const p = new THREE.Vector3(x, 0, z)
            roomOpenings[i].push(p)
            roomOpenings[j].push(p)
            continue
          }
        }
      }
    }
    // Optional backyard opening from a back room
    const backIdx = rooms.findIndex(r => Math.abs(r.max.z - 10) < eps)
    if (backIdx >= 0) {
      const r = rooms[backIdx]
      roomOpenings[backIdx].push(new THREE.Vector3((r.min.x + r.max.x)/2, 0, r.max.z))
    }
    // Draw all rooms with their assigned openings
    for (let i = 0; i < rooms.length; i++) {
      drawRoomWalls(rooms[i], roomOpenings[i])
    }

    // Backyard fence
    const yardMin = new THREE.Vector3(-7, 0, 10.2);
    const yardMax = new THREE.Vector3(7, 0, 20);
    const fenceH = 1.2;
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5b });
    const fence = (a: THREE.Vector3, b: THREE.Vector3) => {
      const dir = new THREE.Vector3().subVectors(b, a);
      const len = dir.length();
      const angle = Math.atan2(dir.x, dir.z);
      const geo = new THREE.BoxGeometry(0.15, fenceH, len);
      const mesh = new THREE.Mesh(geo, fenceMat);
      mesh.position.copy(
        new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5)
      );
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
    fence(
      new THREE.Vector3(yardMax.x, 0, yardMin.z),
      new THREE.Vector3(yardMax.x, 0, yardMax.z)
    );
    fence(
      new THREE.Vector3(yardMax.x, 0, yardMax.z),
      new THREE.Vector3(yardMin.x, 0, yardMax.z)
    );
    fence(
      new THREE.Vector3(yardMin.x, 0, yardMax.z),
      new THREE.Vector3(yardMin.x, 0, yardMin.z)
    );

    // Hard floors and ceilings for rooms, plus yard
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xcfcfcf });
    const ceilMat = new THREE.MeshStandardMaterial({ color: 0xe6e6e6 });
    for (const r of rooms) {
      const size = new THREE.Vector3().subVectors(r.max, r.min);
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(size.x, 0.1, size.z),
        floorMat
      );
      mesh.position.set((r.min.x + r.max.x) / 2, 0.05, (r.min.z + r.max.z) / 2);
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.meshes.push(mesh);

      const shape = new CANNON.Box(
        new CANNON.Vec3(size.x / 2, 0.05, size.z / 2)
      );
      const body = new CANNON.Body({ mass: 0, shape });
      body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
      this.world.addBody(body);
      this.bodies.push(body);

      // ceiling
      const ceil = new THREE.Mesh(new THREE.BoxGeometry(size.x, 0.1, size.z), ceilMat)
      ceil.position.set((r.min.x + r.max.x)/2, wallHeight - 0.05, (r.min.z + r.max.z)/2)
      ceil.receiveShadow = false; ceil.castShadow = false
      this.scene.add(ceil); this.meshes.push(ceil)
      const ceilBody = new CANNON.Body({ mass: 0, shape: new CANNON.Box(new CANNON.Vec3(size.x/2, 0.05, size.z/2)) })
      ceilBody.position.set(ceil.position.x, ceil.position.y, ceil.position.z)
      this.world.addBody(ceilBody); this.bodies.push(ceilBody)

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
    yardMesh.position.set(
      (yardMin.x + yardMax.x) / 2,
      0.05,
      (yardMin.z + yardMax.z) / 2
    );
    yardMesh.receiveShadow = true;
    this.scene.add(yardMesh);
    this.meshes.push(yardMesh);
    const yardBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(
        new CANNON.Vec3(yardSize.x / 2, 0.05, yardSize.z / 2)
      ),
    });
    yardBody.position.set(
      yardMesh.position.x,
      yardMesh.position.y,
      yardMesh.position.z
    );
    this.world.addBody(yardBody);
    this.bodies.push(yardBody);

    // Furniture: tables, counters, couches
    const furnMats = [
      new THREE.MeshStandardMaterial({ color: 0x8b5a2b }),
      new THREE.MeshStandardMaterial({ color: 0x556b2f }),
      new THREE.MeshStandardMaterial({ color: 0x3a506b }),
      new THREE.MeshStandardMaterial({ color: 0x7a7a7a }),
    ];
    const placeBox = (
      pos: THREE.Vector3,
      size: THREE.Vector3,
      mat: THREE.Material,
      mass = 0
    ) => {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(size.x, size.y, size.z),
        mat
      );
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.meshes.push(mesh);
      const shape = new CANNON.Box(
        new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2)
      );
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

    // Procedural couch model built from simple primitives
    const makeCouch = (length: number, depth = 0.9, height = 0.8) => {
      const group = new THREE.Group();
      const fabric = new THREE.MeshStandardMaterial({ color: 0x6b7a8f, roughness: 0.9 });
      const fabric2 = new THREE.MeshStandardMaterial({ color: 0x5c6a7a, roughness: 0.9 });
      const wood = new THREE.MeshStandardMaterial({ color: 0x775533, roughness: 0.7, metalness: 0.0 });

      const seatH = 0.4;
      const backH = height - seatH;
      const armW = Math.min(0.18, Math.max(0.12, length * 0.08));
      const legH = 0.1;

      // Base frame (thin wood under seat)
      const base = new THREE.Mesh(new THREE.BoxGeometry(length, 0.08, depth), wood);
      base.position.set(0, 0.08/2 + legH, 0);
      base.castShadow = base.receiveShadow = true; group.add(base);

      // Seat cushion (slightly rounded via segments)
      const seat = new THREE.Mesh(new THREE.BoxGeometry(length - armW*2, seatH, depth - 0.06, 2, 1, 2), fabric);
      seat.position.set(0, legH + 0.08 + seatH/2, 0);
      seat.castShadow = seat.receiveShadow = true; group.add(seat);

      // Backrest
      const back = new THREE.Mesh(new THREE.BoxGeometry(length - armW*2, backH, 0.12), fabric2);
      back.position.set(0, legH + 0.08 + seatH + backH/2, -(depth/2) + 0.06);
      back.castShadow = back.receiveShadow = true; group.add(back);

      // Armrests
      const armL = new THREE.Mesh(new THREE.BoxGeometry(armW, height, depth), fabric2);
      armL.position.set(-(length/2) + armW/2, legH + height/2, 0);
      const armR = armL.clone(); armR.position.x = (length/2) - armW/2;
      group.add(armL, armR);

      // Seat cushions detail (two or three depending on length)
      const cushionCount = length > 2.4 ? 3 : 2;
      for (let i = 0; i < cushionCount; i++) {
        const w = (length - armW*2 - 0.06 * (cushionCount + 1)) / cushionCount;
        const c = new THREE.Mesh(new THREE.BoxGeometry(w, seatH*0.95, depth - 0.08, 2, 1, 2), fabric);
        c.position.set(- (length/2 - armW) + 0.06 + w/2 + i * (w + 0.06), legH + 0.08 + seatH/2 + 0.01, 0.01);
        c.castShadow = c.receiveShadow = true; group.add(c);
      }

      // Legs
      const legGeo = new THREE.CylinderGeometry(0.035, 0.035, legH, 8);
      const leg1 = new THREE.Mesh(legGeo, wood);
      const leg2 = leg1.clone(); const leg3 = leg1.clone(); const leg4 = leg1.clone();
      leg1.position.set(-length/2 + 0.08, legH/2, -depth/2 + 0.08);
      leg2.position.set(length/2 - 0.08, legH/2, -depth/2 + 0.08);
      leg3.position.set(-length/2 + 0.08, legH/2, depth/2 - 0.08);
      leg4.position.set(length/2 - 0.08, legH/2, depth/2 - 0.08);
      group.add(leg1, leg2, leg3, leg4);

      return group;
    };

    // Helpers to keep couches clear of doorways
    const wouldBlockDoor = (room: THREE.Box3, openings: THREE.Vector3[], wall: number, center: number, halfLen: number) => {
      // Disallow centers too close to door center along the wall axis
      const eps = 0.15;
      const doorHalf = 1.2; // keep in sync with door carving
      const extra = 0.6;    // additional clearance
      for (const o of openings) {
        if (wall === 0 && Math.abs(o.z - room.max.z) < eps) { if (Math.abs(center - o.x) < halfLen + doorHalf + extra) return true }
        if (wall === 1 && Math.abs(o.z - room.min.z) < eps) { if (Math.abs(center - o.x) < halfLen + doorHalf + extra) return true }
        if (wall === 2 && Math.abs(o.x - room.max.x) < eps) { if (Math.abs(center - o.z) < halfLen + doorHalf + extra) return true }
        if (wall === 3 && Math.abs(o.x - room.min.x) < eps) { if (Math.abs(center - o.z) < halfLen + doorHalf + extra) return true }
      }
      return false;
    }
    const boxIntersects = (minA: THREE.Vector2, maxA: THREE.Vector2, minB: THREE.Vector2, maxB: THREE.Vector2) => {
      return !(maxA.x < minB.x || minA.x > maxB.x || maxA.y < minB.y || minA.y > maxB.y)
    }
    const wouldBlockDoorCorridor = (room: THREE.Box3, openings: THREE.Vector3[], couchX: number, couchZ: number, yaw: number, len: number, dep: number) => {
      // couch axis-aligned at yaw multiples of 90deg
      const halfX = (Math.abs(Math.sin(yaw)) > 0.5) ? dep/2 : len/2
      const halfZ = (Math.abs(Math.sin(yaw)) > 0.5) ? len/2 : dep/2
      const cMin = new THREE.Vector2(couchX - halfX, couchZ - halfZ)
      const cMax = new THREE.Vector2(couchX + halfX, couchZ + halfZ)
      const eps = 1e-3
      const doorHalf = 1.2, depthClear = 1.0, widthExtra = 0.6
      for (const o of openings) {
        // North corridor
        if (Math.abs(o.z - room.max.z) < eps) {
          const min = new THREE.Vector2(o.x - (doorHalf + widthExtra), room.max.z - depthClear)
          const max = new THREE.Vector2(o.x + (doorHalf + widthExtra), room.max.z)
          if (boxIntersects(cMin, cMax, min, max)) return true
        }
        // South
        if (Math.abs(o.z - room.min.z) < eps) {
          const min = new THREE.Vector2(o.x - (doorHalf + widthExtra), room.min.z)
          const max = new THREE.Vector2(o.x + (doorHalf + widthExtra), room.min.z + depthClear)
          if (boxIntersects(cMin, cMax, min, max)) return true
        }
        // East
        if (Math.abs(o.x - room.max.x) < eps) {
          const min = new THREE.Vector2(room.max.x - depthClear, o.z - (doorHalf + widthExtra))
          const max = new THREE.Vector2(room.max.x,           o.z + (doorHalf + widthExtra))
          if (boxIntersects(cMin, cMax, min, max)) return true
        }
        // West
        if (Math.abs(o.x - room.min.x) < eps) {
          const min = new THREE.Vector2(room.min.x,           o.z - (doorHalf + widthExtra))
          const max = new THREE.Vector2(room.min.x + depthClear, o.z + (doorHalf + widthExtra))
          if (boxIntersects(cMin, cMax, min, max)) return true
        }
      }
      return false
    }

    const placeCouchAlongWall = (room: THREE.Box3, openings: THREE.Vector3[]): number => {
      // 1.5x larger couch
      const scale = 1.5;
      // Bigger rooms tend to get bigger couches
      const roomSize = new THREE.Vector3().subVectors(room.max, room.min)
      const longSpan = Math.max(roomSize.x, roomSize.z)
      const sizeFactor = THREE.MathUtils.clamp((longSpan - 4) / 8, 0, 1) // span 4..12 -> 0..1
      const length = (randRange(1.6, 3.2) + sizeFactor * randRange(0.4, 1.0)) * scale;
      const depth = (randRange(0.8, 1.0) + sizeFactor * randRange(0.0, 0.2)) * scale;
      const height = 0.8 * scale;
      const couch = makeCouch(length, depth, height);
      couch.traverse(o => { (o as any).castShadow = true; (o as any).receiveShadow = true; });

      // choose a wall: 0=N(max z),1=S(min z),2=E(max x),3=W(min x)
      const wall = Math.floor(Math.random()*4);
      const gap = 0.06;
      let x = 0, z = 0, yaw = 0;
      let tries = 12;
      let foundPos = false;
      while (tries-- > 0) {
        if (wall === 0) { // North: face away from wall (into room), back toward +Z => yaw = Math.PI
          z = room.max.z - (depth/2 + gap);
          const minX = room.min.x + 0.6 + length/2;
          const maxX = room.max.x - 0.6 - length/2;
          x = randRange(minX, Math.max(minX, maxX));
          yaw = Math.PI;
          if (!wouldBlockDoor(room, openings, wall, x, length/2)) { foundPos = true; break; }
        } else if (wall === 1) { // South: back toward -Z => yaw = 0
          z = room.min.z + (depth/2 + gap);
          const minX = room.min.x + 0.6 + length/2;
          const maxX = room.max.x - 0.6 - length/2;
          x = randRange(minX, Math.max(minX, maxX));
          yaw = 0;
          if (!wouldBlockDoor(room, openings, wall, x, length/2)) { foundPos = true; break; }
        } else if (wall === 2) { // East: back toward +X => yaw = -PI/2
          x = room.max.x - (depth/2 + gap);
          const minZ = room.min.z + 0.6 + length/2;
          const maxZ = room.max.z - 0.6 - length/2;
          z = randRange(minZ, Math.max(minZ, maxZ));
          yaw = -Math.PI/2;
          if (!wouldBlockDoor(room, openings, wall, z, length/2)) { foundPos = true; break; }
        } else { // West: back toward -X => yaw = +PI/2
          x = room.min.x + (depth/2 + gap);
          const minZ = room.min.z + 0.6 + length/2;
          const maxZ = room.max.z - 0.6 - length/2;
          z = randRange(minZ, Math.max(minZ, maxZ));
          yaw = Math.PI/2;
          if (!wouldBlockDoor(room, openings, wall, z, length/2)) { foundPos = true; break; }
      }
      if (!foundPos) return 0;
      }

      couch.position.set(x, 0, z);
      couch.rotation.y = yaw;
      // doorway corridor check for main couch
      if (wouldBlockDoorCorridor(room, openings, x, z, yaw, length, depth)) return 0;
      this.scene.add(couch); this.meshes.push(couch);

      // Physics proxy box for couch
      const physLen = length;
      const physDepth = depth;
      const physHeight = height;
      const shape = new CANNON.Box(new CANNON.Vec3(physLen/2, physHeight/2, physDepth/2));
      const body = new CANNON.Body({ mass: 0, shape });
      body.position.set(x, physHeight/2, z);
      if (couch.rotation.y !== 0) body.quaternion.setFromEuler(0, couch.rotation.y, 0);
      this.world.addBody(body); this.bodies.push(body);
      let placedCount = 1;

      // Chance to add a perpendicular couch forming an L shape in larger rooms
      if (longSpan > 6 && Math.random() < (0.5 + sizeFactor * 0.3)) {
        const secondaryScale = 1.0 + sizeFactor * 0.5;
        const len2 = (randRange(1.2, 2.4) * secondaryScale) * scale;
        const dep2 = (randRange(0.75, 0.95) * secondaryScale) * scale;
        const h2 = height;
        const couch2 = makeCouch(len2, dep2, h2);
        couch2.traverse(o => { (o as any).castShadow = true; (o as any).receiveShadow = true; });

        // Compute local axes for main couch
        const R = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw)); // length axis
        const F = new THREE.Vector3(Math.sin(yaw), 0,  Math.cos(yaw)); // forward (into room)
        const innerCorner = (endSign: number) => x + 0; // placeholder
        const cornerPos = (endSign: number) => new THREE.Vector3().copy(new THREE.Vector3(x,0,z)).add(R.clone().multiplyScalar(endSign * length/2)).add(F.clone().multiplyScalar(depth/2));
        const gap = 0.06;

        let placed = false;
        for (const endSign of [1, -1]) {
          const pCorner = cornerPos(endSign);
          // Desired forward for the L leg: point toward inside of L (toward main couch center)
          const Fdesired = R.clone().multiplyScalar(-endSign).normalize();
          const candYaw = [yaw + Math.PI/2, yaw - Math.PI/2];
          // Choose yaw2 so that its forward best matches Fdesired
          let yaw2 = candYaw[0];
          let bestDot = -1e9;
          for (const y of candYaw) {
            const Ftest = new THREE.Vector3(Math.sin(y), 0, Math.cos(y));
            const d = Ftest.dot(Fdesired);
            if (d > bestDot) { bestDot = d; yaw2 = y; }
          }
          const R2 = new THREE.Vector3(Math.cos(yaw2), 0, -Math.sin(yaw2));
          const F2 = new THREE.Vector3(Math.sin(yaw2), 0,  Math.cos(yaw2));

          // Try both choices of which length end of couch2 is the inner corner
          for (const s of [1, -1]) {
            const targetCorner = pCorner.clone().sub(F.clone().multiplyScalar(gap));
            const c2 = targetCorner.clone()
              .sub(R2.clone().multiplyScalar(s * len2/2 + gap))
              .sub(F2.clone().multiplyScalar(dep2/2 + gap));

            // Bounds and doorway corridor checks
            if (c2.x - len2/2 < room.min.x + 0.5 || c2.x + len2/2 > room.max.x - 0.5) continue;
            if (c2.z - dep2/2 < room.min.z + 0.5 || c2.z + dep2/2 > room.max.z - 0.5) continue;
            if (wouldBlockDoorCorridor(room, openings, c2.x, c2.z, yaw2, len2, dep2)) continue;

            couch2.position.set(c2.x, 0, c2.z); couch2.rotation.y = yaw2;
            this.scene.add(couch2); this.meshes.push(couch2);
            const shape2 = new CANNON.Box(new CANNON.Vec3((Math.abs(Math.sin(yaw2))>0.5?dep2:len2)/2, h2/2, (Math.abs(Math.sin(yaw2))>0.5?len2:dep2)/2));
            const body2 = new CANNON.Body({ mass: 0, shape: shape2 });
            body2.position.set(c2.x, h2/2, c2.z); if (yaw2 !== 0) body2.quaternion.setFromEuler(0, yaw2, 0);
            this.world.addBody(body2); this.bodies.push(body2);
            placed = true; placedCount += 1; break;
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
    // Ensure a minimum couches per house: randomly 1 or 2
    const minCouches = Math.random() < 0.5 ? 1 : 2;
    let totalCouches = 0;
    for (let ri = 0; ri < rooms.length; ri++) {
      if (Math.random() < 0.7) totalCouches += placeCouchAlongWall(rooms[ri], roomOpenings[ri]);
      if (Math.random() < 0.35) totalCouches += placeCouchAlongWall(rooms[ri], roomOpenings[ri]);
    }
    let safety = 50;
    while (totalCouches < minCouches && safety-- > 0) {
      const idx = Math.floor(Math.random() * rooms.length);
      totalCouches += placeCouchAlongWall(rooms[idx], roomOpenings[idx]);
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
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff * Math.random() });
      if (Math.random() < 0.5) {
        // Sphere clutter
        const baseR = randRange(0.08, 0.18);
        const rr = baseR * scale;
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(rr, 18, 14), mat);
        mesh.position.set(px, baseY + rr + 0.02, pz);
        mesh.castShadow = true; mesh.receiveShadow = true;
        this.scene.add(mesh); this.meshes.push(mesh);
        const body = new CANNON.Body({ mass: massBase, shape: new CANNON.Sphere(rr) });
        body.angularDamping = 0.25; body.linearDamping = 0.02;
        body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
        this.world.addBody(body); this.bodies.push(body);
      } else {
        // Upright cylinder clutter
        const baseR = randRange(0.06, 0.12);
        const baseH = randRange(0.14, 0.3);
        const rr = baseR * scale;
        const h = baseH * scale;
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rr, rr, h, 16), mat);
        mesh.position.set(px, baseY + h / 2 + 0.02, pz);
        mesh.castShadow = true; mesh.receiveShadow = true;
        this.scene.add(mesh); this.meshes.push(mesh);
        const cyl = new (CANNON as any).Cylinder(rr, rr, h, 16);
        const body = new CANNON.Body({ mass: massBase });
        // Align cylinder axis to Y by rotating around Z
        const q = new CANNON.Quaternion();
        q.setFromEuler(0, 0, Math.PI / 2);
        body.addShape(cyl, new CANNON.Vec3(0, 0, 0), q);
        body.angularDamping = 0.25; body.linearDamping = 0.02;
        body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
        this.world.addBody(body); this.bodies.push(body);
      }
    }
  }
}
