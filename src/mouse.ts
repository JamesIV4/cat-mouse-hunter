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
  speed = 10;
  alive = true;
  // Hole exit ignore timer: prevents immediate re-entry after exiting
  private holeIgnoreTimer = 0;
  private holes: {
    position: THREE.Vector3;
    inward: THREE.Vector3;
    room: THREE.Box3;
  }[];
  // In-hole travel delay and destination scheduling
  private inHoleTimer = 0;
  private pendingExitHole: {
    position: THREE.Vector3;
    inward: THREE.Vector3;
    room: THREE.Box3;
  } | null = null;
  // Per-pursuit toggle: whether to seek holes during the current chase
  private seekHoleThisPursuit: boolean | null = null;
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
    holes: {
      position: THREE.Vector3;
      inward: THREE.Vector3;
      room: THREE.Box3;
    }[],
    public sfx?: Sound
  ) {
    // Increase hitbox radius to reduce wall clipping (~2x)
    const shape = new CANNON.Sphere(0.24);
    this.body = new CANNON.Body({
      mass: 0.3,
      shape,
      // Spawn slightly above floor; keep center above radius
      position: new CANNON.Vec3(pos.x, 0.36, pos.z),
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
    // Store holes reference
    this.holes = holes;
  }

  update(dt: number, catPos: THREE.Vector3) {
    if (!this.alive) return;
    // If traveling through a hole, wait out the delay hidden, then pop out
    if (this.inHoleTimer > 0) {
      this.inHoleTimer = Math.max(0, this.inHoleTimer - dt);
      // freeze motion while hidden
      this.body.velocity.x = 0;
      this.body.velocity.z = 0;
      if (this.inHoleTimer === 0 && this.pendingExitHole) {
        this.performHoleExit(this.pendingExitHole);
        this.pendingExitHole = null;
      } else {
        return;
      }
    }
    // Update hole ignore timer
    this.holeIgnoreTimer = Math.max(0, this.holeIgnoreTimer - dt);
    this.wanderTimer -= dt;
    this.pathTimer -= dt;
    this.flipRetryTimer = Math.max(0, this.flipRetryTimer - dt);
    const pos = new THREE.Vector3(this.body.position.x, 0, this.body.position.z);
    let dir = new THREE.Vector3();

    // Regular patrol: pick random waypoint when needed
    const needNew = !this.target || this.pathTimer <= 0 || this.target.distanceTo(pos) < 0.3;
    if (needNew) {
      const margin = 0.4;
      const tx = randRange(this.bounds.min.x + margin, this.bounds.max.x - margin);
      const tz = randRange(this.bounds.min.z + margin, this.bounds.max.z - margin);
      this.target = new THREE.Vector3(tx, 0, tz);
      this.pathTimer = randRange(3.0, 7.0);
    }

    if (this.target) dir.copy(this.target).sub(pos).normalize();

    // Detect if player is pursuing (within a close radius)
    const distToCat = pos.distanceTo(catPos);
    const pursued = distToCat < 7.0; // close enough to be considered chasing

    // On first transition to pursued, flip a coin for hole-seeking, then pick an initial flee direction
    if (pursued && !this.wasPursued) {
      this.sfx?.mouseSqueek();
      // 50% chance to enable hole seeking for this pursuit
      this.seekHoleThisPursuit = Math.random() < 0.5;
      const away = new THREE.Vector3(pos.x - catPos.x, 0, pos.z - catPos.z).normalize();
      const halfCone = (100 * Math.PI) / 180; // 200° cone centered on away-from-player
      const delta = randRange(-halfCone, halfCone);
      const s = Math.sin(delta), c = Math.cos(delta);
      const ndx = away.x * c - away.z * s;
      const ndz = away.x * s + away.z * c;
      const newDir = new THREE.Vector3(ndx, 0, ndz).normalize();
      const step = randRange(1.2, 2.5);
      const b = this.bounds;
      const marginIn = 0.8;
      const ntx = clamp(pos.x + newDir.x * step, b.min.x + marginIn, b.max.x - marginIn);
      const ntz = clamp(pos.z + newDir.z * step, b.min.z + marginIn, b.max.z - marginIn);
      this.target = new THREE.Vector3(ntx, 0, ntz);
      this.fleeCommitDir = newDir.clone();
      this.fleeCommitTimer = 0.3;
      dir.copy(newDir);
      // If seeking holes this pursuit, try to immediately aim toward the nearest hole in same room
      if (this.seekHoleThisPursuit && this.holeIgnoreTimer <= 0 && this.holes && this.holes.length > 0) {
        const myPos = new THREE.Vector3(this.body.position.x, 0.5, this.body.position.z);
        let nearest: { position: THREE.Vector3; inward: THREE.Vector3; room: THREE.Box3 } | null = null;
        let bestD = Infinity;
        for (const h of this.holes) {
          if (!h.room.containsPoint(myPos)) continue;
          const d = myPos.distanceTo(h.position);
          if (d < bestD) {
            bestD = d;
            nearest = h;
          }
        }
        if (nearest) {
          const aim = nearest.position.clone().addScaledVector(nearest.inward, -0.1);
          this.target = aim;
          const flatPos = new THREE.Vector3(this.body.position.x, 0, this.body.position.z);
          dir.copy(aim).sub(flatPos).normalize();
        }
      }
    }

    // Add erratic movement when pursued: random changes within a 200° cone away from the player
    if (pursued) {
      // decrement commit timer and reuse a committed flee direction if valid
      this.fleeCommitTimer = Math.max(0, this.fleeCommitTimer - dt);
      const away = new THREE.Vector3(pos.x - catPos.x, 0, pos.z - catPos.z);
      if (away.lengthSq() < 1e-6) away.set(1, 0, 0);
      away.normalize();
      this.erraticTimer -= dt;
      if (this.erraticTimer <= 0) {
        const halfCone = (100 * Math.PI) / 180; // 200° total around away
        const delta = randRange(-halfCone, halfCone);
        const s = Math.sin(delta), c = Math.cos(delta);
        const ndx = away.x * c - away.z * s;
        const ndz = away.x * s + away.z * c;
        this.erraticTimer = 0.2;
        this.fleeCommitDir = new THREE.Vector3(ndx, 0, ndz).normalize();
        this.fleeCommitTimer = Math.max(this.fleeCommitTimer, 0.25);
      }
      if (this.fleeCommitDir) {
        dir.copy(this.fleeCommitDir);
      }
    } else {
      // Reset erratic steering when not pursued
      this.erraticAngle = 0;
      this.erraticTimer = Math.max(this.erraticTimer, 0);
      this.fleeCommitTimer = 0;
      this.fleeCommitDir = null;
      this.seekHoleThisPursuit = null;

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

    // If near a mouse hole, bias direction to point to it (only when allowed this pursuit)
    const allowHoleSeek =
      this.holeIgnoreTimer <= 0 &&
      this.holes &&
      this.holes.length > 0 &&
      (!pursued || this.seekHoleThisPursuit === true);
    if (allowHoleSeek) {
      // Double seek radius when pursued to prefer holes sooner
      const seekRadius = pursued ? 12 : 6;
      const myPos = new THREE.Vector3(this.body.position.x, 0.5, this.body.position.z);
      let nearest: {
        position: THREE.Vector3;
        inward: THREE.Vector3;
        room: THREE.Box3;
      } | null = null;
      let bestD = Infinity;
      for (const h of this.holes) {
        // Only consider holes whose room contains the mouse
        if (!h.room.containsPoint(myPos)) continue;
        const d = myPos.distanceTo(h.position);
        if (d < bestD) {
          bestD = d;
          nearest = h;
        }
      }
      if (nearest && bestD <= seekRadius) {
        const aim = nearest.position.clone().addScaledVector(nearest.inward, -0.1); // stop a tad in front of the hole
        this.target = aim;
        const flatPos = new THREE.Vector3(this.body.position.x, 0, this.body.position.z);
        dir.copy(aim).sub(flatPos).normalize();
      }
    }

    // Stuck resolution: if not reaching speed along dir, flip one axis and try a new waypoint
    const v = this.body.velocity;
    const along = dir.lengthSq() > 0.0001 ? Math.max(0, v.x * dir.x + v.z * dir.z) : 0;
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
          const ntx = clamp(pos.x + newDir.x * step, b.min.x + marginIn, b.max.x - marginIn);
          const ntz = clamp(pos.z + newDir.z * step, b.min.z + marginIn, b.max.z - marginIn);
          this.target = new THREE.Vector3(ntx, 0, ntz);
          this.flipRetryTimer = 0.1;
          this.slowTimer = 0;
          dir.copy(newDir);
        }
      }
    }
    // Speed multipliers: +50% overall, +50% more when pursued
    let speedMul = 1.2; // global faster mice
    if (pursued) speedMul *= 1.75; // additional boost when chased
    v.x += (dir.x * this.speed * speedMul - v.x) * 0.2;
    v.z += (dir.z * this.speed * speedMul - v.z) * 0.2;

    // Enter mouse hole if within a slim horizontal gate in front of the hole (only when allowed)
    if (
      this.holeIgnoreTimer <= 0 &&
      this.holes &&
      this.holes.length > 0 &&
      (!pursued || this.seekHoleThisPursuit === true)
    ) {
      const myPos = new THREE.Vector3(this.body.position.x, 0, this.body.position.z);
      let enteredFrom: {
        position: THREE.Vector3;
        inward: THREE.Vector3;
        room: THREE.Box3;
      } | null = null;
      for (const h of this.holes) {
        const inward = h.inward.clone().setY(0).normalize();
        const tangent = new THREE.Vector3(-inward.z, 0, inward.x).normalize();
        const delta = myPos.clone().sub(h.position);
        const lateral = Math.abs(delta.x * tangent.x + delta.z * tangent.z);
        const forward = delta.x * inward.x + delta.z * inward.z; // >0 means in front (inside room)
        const halfWidth = 0.18; // narrow horizontally (approx hole half-width)
        const maxDepth = 0.9; // allow up to 0.9m away in front
        if (lateral <= halfWidth && forward >= 0 && forward <= maxDepth) {
          enteredFrom = h;
          break;
        }
      }
      if (enteredFrom) this.teleportFromHole(enteredFrom);
    }

    // keep within bounds
    const b = this.bounds;
    v.x += (pos.x < b.min.x + 0.5 ? 1 : 0) + (pos.x > b.max.x - 0.5 ? -1 : 0);
    v.z += (pos.z < b.min.z + 0.5 ? 1 : 0) + (pos.z > b.max.z - 0.5 ? -1 : 0);

    // Match visual Y to hitbox radius so feet stay on ground
    // Slightly lower the visual so it sits closer to the floor
    this.mesh.position.set(this.body.position.x, 0.1, this.body.position.z);
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

  private teleportFromHole(from: { position: THREE.Vector3; inward: THREE.Vector3; room: THREE.Box3 }) {
    // Choose a random destination hole (could be same if only one exists)
    const pool = this.holes;
    let dest = pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 1) {
      // try to avoid picking the same hole when possible
      for (let i = 0; i < 4 && dest === from; i++) dest = pool[Math.floor(Math.random() * pool.length)];
    }
    // Begin in-hole travel: hide, freeze, and schedule exit after 0.25s
    this.inHoleTimer = 0.25;
    this.pendingExitHole = dest;
    this.mesh.visible = false;
    this.body.velocity.x = 0;
    this.body.velocity.z = 0;
    return;
    // Spawn a bit inside the room in front of the destination hole
    const inward = dest.inward.clone().setY(0).normalize();
    const offset = 0.6; // meters inside the room
    const exitPos = dest.position.clone().addScaledVector(inward, offset);
    // Apply position instantly to physics body
    this.body.position.set(exitPos.x, 0.36, exitPos.z);
    // Push the mouse into the room with a random heading within ±75° of inward
    const deg = 75 * (Math.random() * 2 - 1);
    const a = (deg * Math.PI) / 180;
    const cos = Math.cos(a),
      sin = Math.sin(a);
    const d = new THREE.Vector3(inward.x * cos + inward.z * sin, 0, inward.z * cos - inward.x * sin).normalize();
    const burst = this.speed * 1.5;
    this.body.velocity.x = d.x * burst;
    this.body.velocity.z = d.z * burst;
    // Set a short-range target to sustain movement away from the hole
    this.target = exitPos.clone().addScaledVector(d, 2.0 + Math.random());
    this.pathTimer = 1.0;
    // Prevent immediate re-entry
    this.holeIgnoreTimer = 2.0;
  }

  private performHoleExit(dest: { position: THREE.Vector3; inward: THREE.Vector3; room: THREE.Box3 }) {
    // Spawn a bit inside the room in front of the destination hole
    const inward = dest.inward.clone().setY(0).normalize();
    const offset = 0.6; // meters inside the room
    const exitPos = dest.position.clone().addScaledVector(inward, offset);
    // Move and re-show
    this.body.position.set(exitPos.x, 0.36, exitPos.z);
    this.mesh.visible = true;
    // Push the mouse into the room with a random heading within ±75° of inward
    const deg = 75 * (Math.random() * 2 - 1);
    const a = (deg * Math.PI) / 180;
    const cos = Math.cos(a),
      sin = Math.sin(a);
    const d = new THREE.Vector3(inward.x * cos + inward.z * sin, 0, inward.z * cos - inward.x * sin).normalize();
    const burst = this.speed * 1.5;
    this.body.velocity.x = d.x * burst;
    this.body.velocity.z = d.z * burst;
    // Set a short-range target to sustain movement away from the hole
    this.target = exitPos.clone().addScaledVector(d, 2.0 + Math.random());
    this.pathTimer = 1.0;
    // Prevent immediate re-entry
    this.holeIgnoreTimer = 2.0;
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
      const url = resolveAssetUrl("../models/mouse/mouse-exported.fbx");
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
      const texUrl = resolveAssetUrl("../models/mouse/mouse.png");
      const tl = new THREE.TextureLoader();
      tl.load(
        texUrl,
        (tex) => {
          try {
            (tex as any).colorSpace = (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
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
import { resolveAssetUrl } from "./props";
