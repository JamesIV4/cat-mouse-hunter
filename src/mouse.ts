import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { CANNON } from "./physics";
import { randRange, clamp } from "./utils";
import { Sound } from "./audio";

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
  speed = 13;
  alive = true;
  // Erratic steering when pursued
  private erraticTimer = 0;
  private erraticAngle = 0; // radians, applied around Y to steering dir
  private wasPursued = false;
  // Light wander jitter during normal movement
  private wanderJitterTimer = 0;

  constructor(
    public world: CANNON.World,
    public scene: THREE.Scene,
    pos: THREE.Vector3,
    public bounds: THREE.Box3,
    public sfx?: Sound
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

    // Detect if player is pursuing (within a close radius)
    const distToCat = pos.distanceTo(catPos);
    const pursued = distToCat < 7.0; // close enough to be considered chasing

    // On first transition to pursued, immediately change direction once
    if (pursued && !this.wasPursued) {
      // Squeak once when first noticing the player
      this.sfx?.mouseSqueek();
      // Rotate current desired direction by a random angle within ±90° and set a new waypoint
      const hasDir = dir.lengthSq() > 0.0001;
      if (!hasDir) {
        // establish a default forward if no dir yet
        dir.set(1, 0, 0);
      }
      const maxTurn = (90 * Math.PI) / 180;
      const turn = (Math.random() * 2 - 1) * maxTurn;
      const sin = Math.sin(turn);
      const cos = Math.cos(turn);
      const rx = dir.x * cos - dir.z * sin;
      const rz = dir.x * sin + dir.z * cos;
      const newDir = new THREE.Vector3(rx, 0, rz).normalize();
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
      dir.copy(newDir);
    }

    // Add erratic movement when pursued: change heading every 0.2s within +/-90 degrees
    if (pursued) {
      this.erraticTimer -= dt;
      if (this.erraticTimer <= 0) {
        const maxJitter = (60 * Math.PI) / 180; // 90 degrees in radians
        this.erraticAngle = (Math.random() * 2 - 1) * maxJitter;
        this.erraticTimer = 0.2;
      }
      if (dir.lengthSq() > 0.0001) {
        const sin = Math.sin(this.erraticAngle);
        const cos = Math.cos(this.erraticAngle);
        const rx = dir.x * cos - dir.z * sin;
        const rz = dir.x * sin + dir.z * cos;
        dir.set(rx, 0, rz).normalize();
      }
    } else {
      // Reset erratic steering when not pursued
      this.erraticAngle = 0;
      this.erraticTimer = Math.max(this.erraticTimer, 0);

      // Normal movement jitter: every 0.25s rotate heading by up to ±35°
      this.wanderJitterTimer -= dt;
      if (this.wanderJitterTimer <= 0 && dir.lengthSq() > 0.0001) {
        const maxJitter = (15 * Math.PI) / 180;
        const jitter = (Math.random() * 2 - 1) * maxJitter;
        const s = Math.sin(jitter);
        const c = Math.cos(jitter);
        const jx = dir.x * c - dir.z * s;
        const jz = dir.x * s + dir.z * c;
        dir.set(jx, 0, jz).normalize();
        this.wanderJitterTimer = 0.25;
      }
    }

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
    // Speed multipliers: +50% overall, +50% more when pursued
    let speedMul = 1.5; // global faster mice
    if (pursued) speedMul *= 2; // additional boost when chased
    v.x += (dir.x * this.speed * speedMul - v.x) * 0.2;
    v.z += (dir.z * this.speed * speedMul - v.z) * 0.2;

    // keep within bounds
    const b = this.bounds;
    v.x += (pos.x < b.min.x + 0.5 ? 1 : 0) + (pos.x > b.max.x - 0.5 ? -1 : 0);
    v.z += (pos.z < b.min.z + 0.5 ? 1 : 0) + (pos.z > b.max.z - 0.5 ? -1 : 0);

    this.mesh.position.set(this.body.position.x, 0.12, this.body.position.z);
    // Orient the mouse to face its direction of travel
    const speedH = Math.hypot(v.x, v.z);
    if (speedH > 0.05) {
      const targetRot = Math.atan2(v.x, v.z);
      const currentY = this.mesh.rotation.y;
      let delta = targetRot - currentY;
      while (delta > Math.PI) delta -= Math.PI * 2;
      while (delta < -Math.PI) delta += Math.PI * 2;
      this.mesh.rotation.y = currentY + delta * Math.min(1, dt * 8);
    }
    // Remember pursuit state for next frame
    this.wasPursued = pursued;
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
