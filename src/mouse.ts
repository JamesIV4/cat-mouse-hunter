import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { CANNON } from "./physics";
import { randRange, clamp } from "./utils";

export class Mouse {
  body: CANNON.Body;
  mesh: THREE.Object3D;
  wanderTimer = 0;
  pathTimer = 0;
  target: THREE.Vector3 | null = null;
  lastCatPos: THREE.Vector3 | null = null;
  wallCommitTimer = 0; // commit time after wall collision
  wallCommitDir: THREE.Vector3 | null = null;
  fleeCommitTimer = 0; // commit time when fleeing from player
  fleeCommitDir: THREE.Vector3 | null = null;
  heading: THREE.Vector3 = new THREE.Vector3(1, 0, 0);
  flipRetryTimer = 0;
  slowTimer = 0;
  turnCooldown = 0; // prevents rapid side switching
  forwardBlockTimer = 0; // hysteresis for forward blocked detection
  speed = 10;
  alive = true;

  constructor(
    public world: CANNON.World,
    public scene: THREE.Scene,
    pos: THREE.Vector3,
    public bounds: THREE.Box3
  ) {
    const shape = new CANNON.Sphere(0.12);
    this.body = new CANNON.Body({
      mass: 0.3,
      shape,
      position: new CANNON.Vec3(pos.x, 0.3, pos.z),
    });
    this.body.linearDamping = 0.2;
    world.addBody(this.body);

    const container = new THREE.Group();
    this.mesh = container;
    scene.add(container);

    Promise.all([loadRatModel(), loadMouseTexture()]).then(([model, tex]) => {
      const instance = model.clone(true);
      instance.traverse((o: any) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
          if (tex) {
            const mtl = o.material as THREE.Material | THREE.Material[];
            const apply = (mat: any) => {
              if (mat && "map" in mat) {
                mat.map = tex;
                if ("side" in mat) mat.side = THREE.DoubleSide;
                if ("needsUpdate" in mat) mat.needsUpdate = true;
              }
            };
            if (Array.isArray(mtl)) mtl.forEach(apply);
            else apply(mtl);
          }
        }
      });
      // Center horizontally and align feet to y=0
      const box = new THREE.Box3().setFromObject(instance);
      const center = box.getCenter(new THREE.Vector3());
      instance.position.x -= center.x;
      instance.position.z -= center.z;
      instance.position.y -= box.min.y;
      container.add(instance);
    });

    // Initialize random heading
    const ang = randRange(0, Math.PI * 2);
    this.heading.set(Math.sin(ang), 0, Math.cos(ang));
  }

  update(dt: number, catPos: THREE.Vector3) {
    if (!this.alive) return;
    this.wanderTimer -= dt;
    this.pathTimer -= dt;
    this.flipRetryTimer = Math.max(0, this.flipRetryTimer - dt);
    const pos = new THREE.Vector3(
      this.body.position.x,
      0,
      this.body.position.z
    );
    let dir = new THREE.Vector3();

    // Regular patrol: pick random waypoint when needed
    const needNew =
      !this.target || this.pathTimer <= 0 || this.target.distanceTo(pos) < 0.3;
    if (needNew) {
      const margin = 0.4;
      const tx = randRange(
        this.bounds.min.x + margin,
        this.bounds.max.x - margin
      );
      const tz = randRange(
        this.bounds.min.z + margin,
        this.bounds.max.z - margin
      );
      this.target = new THREE.Vector3(tx, 0, tz);
      this.pathTimer = randRange(3.0, 7.0);
    }

    if (this.target) dir.copy(this.target).sub(pos).normalize();

    // Stuck resolution: if not reaching speed along dir, flip one axis and try a new waypoint
    const v = this.body.velocity;
    const along =
      dir.lengthSq() > 0.0001 ? Math.max(0, v.x * dir.x + v.z * dir.z) : 0;
    if (dir.lengthSq() > 0.0001) {
      if (along >= this.speed * 0.9) {
        this.slowTimer = 0;
      } else {
        this.slowTimer += dt;
        if (this.slowTimer >= 0.25 && this.flipRetryTimer <= 0) {
          const flipX = Math.random() < 0.5;
          const newDir = dir.clone();
          if (flipX) newDir.x *= -1;
          else newDir.z *= -1;
          const step = randRange(1.2, 2.5);
          const b = this.bounds;
          const marginIn = 0.8;
          const ntx = clamp(
            pos.x + newDir.x * step,
            b.min.x + marginIn,
            b.max.x - marginIn
          );
          const ntz = clamp(
            pos.z + newDir.z * step,
            b.min.z + marginIn,
            b.max.z - marginIn
          );
          this.target = new THREE.Vector3(ntx, 0, ntz);
          this.flipRetryTimer = 0.1;
          this.slowTimer = 0;
          dir.copy(newDir);
        }
      }
    }
    v.x += (dir.x * this.speed - v.x) * 0.2;
    v.z += (dir.z * this.speed - v.z) * 0.2;

    // keep within bounds
    const b = this.bounds;
    v.x += (pos.x < b.min.x + 0.5 ? 1 : 0) + (pos.x > b.max.x - 0.5 ? -1 : 0);
    v.z += (pos.z < b.min.z + 0.5 ? 1 : 0) + (pos.z > b.max.z - 0.5 ? -1 : 0);

    this.mesh.position.set(this.body.position.x, 0.12, this.body.position.z);
    this.mesh.rotation.y += dt * 8;
  }

  kill() {
    this.alive = false;
    this.mesh.visible = false;
    this.world.removeBody(this.body);
  }
}

let mouseModelPromise: Promise<THREE.Object3D> | null = null;
function loadRatModel(): Promise<THREE.Object3D> {
  if (!mouseModelPromise) {
    const loader = new FBXLoader();
    mouseModelPromise = new Promise((resolve, reject) => {
      const url = new URL(
        "../models/mouse/mouse-exported.fbx",
        import.meta.url
      ).toString();
      loader.load(
        url,
        (obj) => {
          const preBox = new THREE.Box3().setFromObject(obj);
          const preSize = new THREE.Vector3();
          preBox.getSize(preSize);
          const height = preSize.y || 1;
          const targetHeight = 0.2; // ~10x previous primitive height (0.24)
          const factor = targetHeight / height;
          obj.scale.setScalar(factor);
          resolve(obj);
        },
        undefined,
        (err) => reject(err)
      );
    });
  }
  return mouseModelPromise;
}

let mouseTexturePromise: Promise<THREE.Texture | null> | null = null;
function loadMouseTexture(): Promise<THREE.Texture | null> {
  if (!mouseTexturePromise) {
    mouseTexturePromise = new Promise((resolve) => {
      const texUrl = new URL(
        "../models/mouse/mouse.png",
        import.meta.url
      ).toString();
      const tl = new THREE.TextureLoader();
      tl.load(
        texUrl,
        (tex) => {
          try {
            (tex as any).colorSpace =
              (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
          } catch {}
          resolve(tex);
        },
        undefined,
        () => resolve(null)
      );
    });
  }
  return mouseTexturePromise;
}
