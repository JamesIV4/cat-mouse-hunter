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
        // split along X
        const mid = box.min.x + size.x * randRange(0.35, 0.65);
        const left = new THREE.Box3(
          box.min.clone(),
          new THREE.Vector3(mid - 0.2, box.max.y, box.max.z)
        );
        const right = new THREE.Box3(
          new THREE.Vector3(mid + 0.2, box.min.y, box.min.z),
          box.max.clone()
        );
        remaining.push(left, right);
      } else {
        // split along Z
        const mid = box.min.z + size.z * randRange(0.35, 0.65);
        const near = new THREE.Box3(
          box.min.clone(),
          new THREE.Vector3(box.max.x, box.max.y, mid - 0.2)
        );
        const far = new THREE.Box3(
          new THREE.Vector3(box.min.x, box.min.y, mid + 0.2),
          box.max.clone()
        );
        remaining.push(near, far);
      }
    }
    rooms.push(...remaining);
    this.roomBoxes = rooms;

    // Build walls around house perimeter and between rooms, with random doorways
    const wallHeight = 2.5;
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

    // Helper to draw box edges as walls but leave one random door opening per adjacency
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
        // potential opening mid point near center
        const doorCenter = new THREE.Vector3()
          .addVectors(a, b)
          .multiplyScalar(0.5);
        // If an opening is requested close to this edge, leave a gap
        const gap = openings.find(
          (o) => new THREE.Vector3().subVectors(o, doorCenter).length() < 0.5
        );
        if (gap) {
          // split wall into two segments around a door (1.2m)
          const dir = new THREE.Vector3().subVectors(b, a).normalize();
          const half = 0.6;
          const leftEnd = doorCenter.clone().addScaledVector(dir, -half);
          const rightStart = doorCenter.clone().addScaledVector(dir, half);
          addWall(a, leftEnd, wallHeight);
          addWall(rightStart, b, wallHeight);
        } else {
          addWall(a, b, wallHeight);
        }
      }
    };

    // compute adjacency between rooms and make random openings
    for (let i = 0; i < rooms.length; i++) {
      const box = rooms[i];
      const openings: THREE.Vector3[] = [];
      for (let j = 0; j < rooms.length; j++) {
        if (i === j) continue;
        const other = rooms[j];
        // If they touch along an edge
        const overlapX =
          Math.min(box.max.x, other.max.x) - Math.max(box.min.x, other.min.x);
        const overlapZ =
          Math.min(box.max.z, other.max.z) - Math.max(box.min.z, other.min.z);
        const touchX =
          overlapX > 0 &&
          (Math.abs(box.max.z - other.min.z) < 0.05 ||
            Math.abs(box.min.z - other.max.z) < 0.05);
        const touchZ =
          overlapZ > 0 &&
          (Math.abs(box.max.x - other.min.x) < 0.05 ||
            Math.abs(box.min.x - other.max.x) < 0.05);
        if (touchX || touchZ) {
          // place doorway center within overlapping span
          if (touchX) {
            const z =
              (Math.max(box.min.z, other.min.z) +
                Math.min(box.max.z, other.max.z)) /
              2;
            const x =
              Math.abs(box.max.x - other.min.x) < 0.1 ? box.max.x : box.min.x;
            openings.push(new THREE.Vector3(x, 0, z));
          } else if (touchZ) {
            const x =
              (Math.max(box.min.x, other.min.x) +
                Math.min(box.max.x, other.max.x)) /
              2;
            const z =
              Math.abs(box.max.z - other.min.z) < 0.1 ? box.max.z : box.min.z;
            openings.push(new THREE.Vector3(x, 0, z));
          }
        }
      }
      // Add backyard opening from one random room at the back (positive z side)
      if (Math.random() < 0.5 && Math.abs(box.max.z - 10) < 0.2) {
        openings.push(
          new THREE.Vector3((box.min.x + box.max.x) / 2, 0, box.max.z)
        );
      }
      drawRoomWalls(box, openings);
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
    fence(
      new THREE.Vector3(yardMin.x, 0, yardMin.z),
      new THREE.Vector3(yardMax.x, 0, yardMin.z)
    );
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

    // Hard floors for rooms and yard
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xcfcfcf });
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

    for (const r of rooms) {
      const cx = (r.min.x + r.max.x) / 2,
        cz = (r.min.z + r.max.z) / 2;
      // Counter
      if (Math.random() < 0.8) {
        placeBox(
          new THREE.Vector3(cx, 0.9, cz),
          new THREE.Vector3(randRange(2.5, 3.5), 0.9, randRange(1.0, 1.6)),
          choice(furnMats)
        );
      }
      // Table
      if (Math.random() < 0.6) {
        placeBox(
          new THREE.Vector3(
            cx + randRange(-1.5, 1.5),
            0.75,
            cz + randRange(-1.5, 1.5)
          ),
          new THREE.Vector3(1.2, 0.6, 1.2),
          choice(furnMats)
        );
      }
      // Couch
      if (Math.random() < 0.5) {
        placeBox(
          new THREE.Vector3(cx + randRange(-2, 2), 0.6, cz + randRange(-2, 2)),
          new THREE.Vector3(2.0, 0.8, 0.8),
          choice(furnMats)
        );
      }
    }

    // Clutter: dynamic physics objects on top of furniture
    const furnitureSurfaces = this.meshes.filter(
      (m) =>
        m instanceof THREE.Mesh &&
        (m as THREE.Mesh).geometry instanceof THREE.BoxGeometry &&
        m.position.y > 0.5
    );
    for (let i = 0; i < spec.clutterCount; i++) {
      const surf = choice(furnitureSurfaces) as THREE.Mesh;
      if (!surf) break;
      const size = new THREE.Vector3().fromArray(
        (surf.geometry as THREE.BoxGeometry).parameters
      ) as any;
      const px = randRange(
        surf.position.x - size.width / 2 + 0.1,
        surf.position.x + size.width / 2 - 0.1
      );
      const pz = randRange(
        surf.position.z - size.depth / 2 + 0.1,
        surf.position.z + size.depth / 2 - 0.1
      );
      const p = new THREE.Vector3(
        px,
        surf.position.y + (surf as any).geometry.parameters.height / 2 + 0.1,
        pz
      );
      const w = randRange(0.1, 0.3);
      placeBox(
        p,
        new THREE.Vector3(w, w, w),
        new THREE.MeshStandardMaterial({ color: 0xffffff * Math.random() }),
        randRange(0.1, 0.6)
      );
    }
  }
}
