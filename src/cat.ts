import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import { CANNON } from "./physics";
import { Input } from "./input";
import { clamp } from "./utils";

export type CatState = "Idle" | "Walk" | "Run" | "Sneak" | "Jump" | "Pounce";

export class CatController {
  body: CANNON.Body;
  mesh: THREE.Group;
  state: CatState = "Idle";
  onGround = false;
  // Animation system
  private mixer: THREE.AnimationMixer | null = null;
  private actions: Record<string, THREE.AnimationAction> = {};
  private actionByKind: Partial<Record<"idle" | "walk" | "run", string>> = {};
  private currentAction: string | null = null;
  private animBaseSpeed = 1.15; // slightly faster baseline playback
  camYaw = 0;
  camPitch = -0.3;
  camDist = 4.5;
  targetMouse: THREE.Object3D | null = null;
  pounceCooldown = 0;
  private _raycaster = new THREE.Raycaster();

  constructor(
    public world: CANNON.World,
    public scene: THREE.Scene,
    public input: Input,
    public origin = new THREE.Vector3()
  ) {
    // Use a simple sphere for reliable ground collisions
    const shape = new CANNON.Sphere(0.45);
    const mass = 10;
    this.body = new CANNON.Body({
      mass,
      shape,
      position: new CANNON.Vec3(origin.x, origin.y + 0.7, origin.z),
    });
    this.body.linearDamping = 0.05;
    this.body.angularDamping = 1.0;
    this.body.fixedRotation = true;
    world.addBody(this.body);

    const container = new THREE.Group();
    this.mesh = container;
    scene.add(container);

    Promise.all([loadCatModel(), loadCatTexture()]).then(([model, tex]) => {
      // Clone rigged model with SkeletonUtils to preserve bone bindings
      const instance = SkeletonUtils.clone(model) as THREE.Object3D;
      instance.traverse((o: any) => {
        if (o.isSkinnedMesh || o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
          // Ensure skinned materials are flagged correctly
          const ensureSkin = (mat: any) => {
            if (mat && "skinning" in mat && (o.isSkinnedMesh || o.isMesh)) {
              mat.skinning = true;
            }
          };
          if (tex) {
            const mtl = o.material as THREE.Material | THREE.Material[];
            const apply = (mat: any) => {
              if (mat && "map" in mat) {
                mat.map = tex;
                if ("side" in mat) mat.side = THREE.DoubleSide;
                if ("needsUpdate" in mat) mat.needsUpdate = true;
              }
              ensureSkin(mat);
            };
            if (Array.isArray(mtl)) mtl.forEach(apply);
            else apply(mtl);
          } else if (o.material) {
            const mtl = o.material as THREE.Material | THREE.Material[];
            if (Array.isArray(mtl)) mtl.forEach(ensureSkin);
            else ensureSkin(mtl);
          }
          // Reduce culling issues with animated bounds
          o.frustumCulled = false;
        }
      });
      // Center horizontally and place feet at local y=0
      const box = new THREE.Box3().setFromObject(instance);
      const center = box.getCenter(new THREE.Vector3());
      instance.position.x -= center.x;
      instance.position.z -= center.z;
      instance.position.y -= box.min.y;
      container.add(instance);

      // Setup animation mixer/actions if clips are present on the source model
      const clips: THREE.AnimationClip[] = (model as any).animations || [];
      if (clips && clips.length > 0) {
        this.mixer = new THREE.AnimationMixer(instance);
        this.actions = {};
        for (const clip of clips) {
          const a = this.mixer.clipAction(clip);
          a.loop = THREE.LoopRepeat;
          a.clampWhenFinished = false;
          this.actions[clip.name.toLowerCase()] = a;
        }
        // Prefer common names; fallbacks if not present
        const names = Object.keys(this.actions);
        const findName = (alts: string[]) => names.find((n) => alts.some((k) => n.includes(k)));
        this.actionByKind.idle = findName(["idle", "stand"]) || names[0] || undefined;
        this.actionByKind.walk = findName(["walk"]) || this.actionByKind.idle;
        this.actionByKind.run = findName(["run", "jog", "sprint"]) || this.actionByKind.walk;
        // Start idle if available
        const start = this.actionByKind.idle;
        if (start && this.actions[start]) {
          this.actions[start].reset().fadeIn(0.2).play();
          this.currentAction = start;
        }
      }
    });
  }

  update(dt: number, camera: THREE.PerspectiveCamera, mice: THREE.Object3D[], colliders: THREE.Object3D[] = []) {
    this.onGround = false;
    // Grounded check via cannon-es narrowphase contact equations
    const world = this.body.world as any;
    const equations = (world?.narrowphase?.contactEquations as any[]) || [];
    for (const eq of equations) {
      if (eq.bi === this.body || eq.bj === this.body) {
        const n = eq.ni as import("./physics").CANNON.Vec3;
        const upY = eq.bi === this.body ? -n.y : n.y;
        const other = eq.bi === this.body ? eq.bj : eq.bi;
        if (upY > 0.5) {
          this.onGround = true;
          break;
        }
        // Consider couch tops as ground with a more lenient normal threshold
        if ((other as any)?.isCouch && upY > 0.1) {
          this.onGround = true;
          break;
        }
      }
    }

    // Extra gravity for the cat: apply an additional 1g when airborne
    // to effectively double the downward pull while in the air.
    if (!this.onGround && this.body && (this.body as any).world) {
      const g = (this.body.world as any).gravity?.y ?? -9.82;
      // Add an extra gravity force equal to mass * g (g is negative)
      this.body.force.y += this.body.mass * g;
    }
    // Fallback: short downward raycast if no contact equations detected
    if (!this.onGround) {
      const Ray: any = (CANNON as any).Ray;
      const RaycastResult: any = (CANNON as any).RaycastResult;
      if (Ray && RaycastResult) {
        const ray = new Ray();
        const result = new RaycastResult();
        ray.from.set(this.body.position.x, this.body.position.y, this.body.position.z);
        ray.to.set(this.body.position.x, this.body.position.y - 0.7, this.body.position.z);
        ray.intersectWorld(this.body.world, {
          mode: Ray.ANY,
          result,
          skipBackfaces: true,
        });
        if (result.hasHit && result.body !== this.body) {
          const gap = this.body.position.y - result.hitPointWorld.y;
          if (gap <= 0.75) this.onGround = true;
          // Be generous on couches even if ray angle/contact was odd
          if (!this.onGround && (result.body as any)?.isCouch && gap <= 0.9) {
            this.onGround = true;
          }
        }
      }
    }

    // Animation state machine by velocity magnitude
    if (this.mixer && this.actions) {
      const vx = this.body.velocity.x;
      const vz = this.body.velocity.z;
      const speedH = Math.hypot(vx, vz);
      let targetKind: "idle" | "walk" | "run" = "idle";
      if (speedH > 3.0) targetKind = "run";
      else if (speedH > 0.4) targetKind = "walk";
      const targetName = (this.actionByKind[targetKind] || this.currentAction || "").toLowerCase();
      if (targetName && targetName !== this.currentAction && this.actions[targetName]) {
        const next = this.actions[targetName];
        const prev = this.currentAction ? this.actions[this.currentAction] : null;
        next.reset().fadeIn(0.15).play();
        if (prev) prev.fadeOut(0.15);
        this.currentAction = targetName;
      }
      // Simple speed-based timescaling for locomotion clips
      if (this.currentAction) {
        const act = this.actions[this.currentAction];
        if (act) {
          if (this.currentAction === (this.actionByKind.run || "").toLowerCase()) {
            act.timeScale = THREE.MathUtils.clamp(speedH / 4.0, 0.7, 2.0);
          } else if (this.currentAction === (this.actionByKind.walk || "").toLowerCase()) {
            act.timeScale = THREE.MathUtils.clamp(speedH / 1.5, 0.6, 1.6);
          } else {
            act.timeScale = 1.0;
          }
        }
      }
      // Pause animation when not moving or while airborne (jump/pounce)
      // Using mixer.timeScale so all clips freeze cleanly
      const paused = speedH <= 0.05 || !this.onGround;
      this.mixer.timeScale = paused ? 0 : this.animBaseSpeed;
      this.mixer.update(dt);
    }

    const mouseDelta = this.input.consumeMouseDelta();
    // Increase overall camera look sensitivity by 50%
    const lookSpeed = 0.003 * this.input.sensitivity;
    this.camYaw -= mouseDelta.x * lookSpeed;
    this.camPitch -= mouseDelta.y * lookSpeed;
    // Further relax vertical look by ~50% more (both directions)
    // Previous: [-2.2, 0.45] ⇒ New: approx [-2.86, 1.11]
    this.camPitch = clamp(this.camPitch, -2.86, 1.11);
    this.camDist = clamp(this.camDist + this.input.consumeWheelDelta(), 3, 12);

    // Determine desired movement in local camera space
    const forward = this.input.forward - this.input.backward;
    const right = this.input.right - this.input.left;
    const moving = Math.abs(forward) + Math.abs(right) > 0;

    const speedBase = 12.0;
    const speedRun = speedBase * 1.75;
    const speedSneak = 2.0;
    const speed = this.input.sneak ? speedSneak : this.input.run ? speedRun : speedBase;

    if (this.onGround) {
      if (this.input.jump) {
        // Set upward velocity and preserve horizontal momentum; set minimum horizontal based on launch angle
        const Vy = 7; // Jump strength (vertical)
        this.body.velocity.y = Vy;
        this.state = "Jump";
        // Compute current horizontal speed and set a minimum based on angle from vertical: 0..45 deg
        const vx = this.body.velocity.x;
        const vz = this.body.velocity.z;
        const hSpeed = Math.hypot(vx, vz);
        const t = Math.min(1, hSpeed / speedRun);
        const alpha = ((45 * Math.PI) / 180) * t; // 0 at standstill, 45deg at run speed
        const hMin = Vy * Math.tan(alpha); // minimum horizontal to achieve angle
        if (hSpeed > 0.0001 && hSpeed < hMin) {
          const hx = vx / hSpeed;
          const hz = vz / hSpeed;
          const add = hMin - hSpeed;
          this.body.velocity.x = vx + hx * add;
          this.body.velocity.z = vz + hz * add;
        }
      } else if (moving) {
        this.state = this.input.sneak ? "Sneak" : this.input.run ? "Run" : "Walk";
      } else {
        this.state = "Idle";
      }
    } else {
      if (this.state !== "Pounce") this.state = "Jump";
    }

    // Pounce targeting
    this.pounceCooldown = Math.max(0, this.pounceCooldown - dt);
    if (this.input.consumeLockPounce() && this.pounceCooldown <= 0) {
      // find nearest mouse in front cone
      let best: THREE.Object3D | null = null;
      let bestDist = 999;
      const pos = new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
      const camDir = new THREE.Vector3(Math.sin(this.camYaw), 0, Math.cos(this.camYaw));
      for (const m of mice) {
        const d = m.position.distanceTo(pos);
        if (d < 8) {
          const dir = m.position.clone().sub(pos).normalize();
          if (dir.dot(camDir) > 0.6) {
            if (d < bestDist) {
              bestDist = d;
              best = m;
            }
          }
        }
      }
      if (best) {
        this.targetMouse = best;
        // Leap towards target
        const dir = best.position.clone().sub(pos).normalize();
        this.body.velocity.set(dir.x * 8, 6.5, dir.z * 8);
        this.state = "Pounce";
        this.pounceCooldown = 1.0;
      }
    }

    // Apply movement forces (project onto ground plane)
    const dir = new THREE.Vector3();
    if (moving) {
      // ensure body is awake when moving
      (this.body as any).wakeUp && (this.body as any).wakeUp();
      const yaw = this.camYaw;
      const forwardDir = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
      // Invert right vector so A/D match camera view intuitively
      const rightDir = new THREE.Vector3(-Math.cos(yaw), 0, Math.sin(yaw));
      dir.copy(forwardDir).multiplyScalar(forward).add(rightDir.multiplyScalar(right)).normalize();

      const v = this.body.velocity;
      if (this.onGround) {
        // Grounded: steer toward a target speed
        const desiredVel = new CANNON.Vec3(dir.x * speed, v.y, dir.z * speed);
        const accel = 0.35;
        v.x += (desiredVel.x - v.x) * accel;
        v.z += (desiredVel.z - v.z) * accel;
      } else {
        // Airborne: small additive nudge in input direction; scale by dt so it's framerate-independent
        const airNudgeAccel = 0.5; // per-second acceleration scale
        v.x += dir.x * speed * airNudgeAccel * dt;
        v.z += dir.z * speed * airNudgeAccel * dt;
      }
    } else {
      // Apply ground friction only when grounded and idle
      if (this.onGround) {
        this.body.velocity.x *= 0.9;
        this.body.velocity.z *= 0.9;
      }
    }

    // Update visual
    this.mesh.position.set(this.body.position.x, this.body.position.y - 0.45, this.body.position.z);
    if (dir.lengthSq() > 0.0001) {
      const targetRot = Math.atan2(dir.x, dir.z);
      const currentY = this.mesh.rotation.y;
      let delta = targetRot - currentY;
      while (delta > Math.PI) delta -= Math.PI * 2;
      while (delta < -Math.PI) delta += Math.PI * 2;
      let step: number;
      if (this.onGround) {
        // Grounded: normal snappy turn toward direction
        step = delta * 0.2;
      } else {
        // Airborne: limit max turn rate so the cat can't whip around mid-air
        const maxTurnRate = 4.0; // radians per second (~230 deg/s)
        const maxStep = maxTurnRate * dt;
        step = clamp(delta, -maxStep, maxStep);
      }
      this.mesh.rotation.y = currentY + step;
    }

    // Camera follow
    const camTarget = new THREE.Vector3(this.body.position.x, this.body.position.y + 0.8, this.body.position.z);
    const camOffset = new THREE.Vector3(
      -Math.sin(this.camYaw) * this.camDist,
      0,
      -Math.cos(this.camYaw) * this.camDist
    );
    let camPos = camTarget
      .clone()
      .add(new THREE.Vector3(0, 2.5 + this.camPitch * -2, 0))
      .add(camOffset);
    // Camera pushback: pull camera inwards if obstructed
    const desired = camPos.clone();
    const toCam = new THREE.Vector3().subVectors(desired, camTarget);
    const dist = toCam.length();
    if (dist > 0.001 && colliders && colliders.length > 0) {
      const dir = toCam.normalize();
      this._raycaster.set(camTarget, dir);
      this._raycaster.far = dist;
      const hits = this._raycaster
        .intersectObjects(colliders, true)
        // Ignore intersections with the cat's own model (any descendant of this.mesh)
        .filter((h) => {
          let o: any = h.object;
          while (o) {
            if (o === this.mesh) return false;
            o = o.parent;
          }
          return true;
        });
      if (hits.length > 0) {
        const margin = 0.25;
        const hit = hits[0];
        const hitDist = Math.max(0.0, hit.distance - margin);
        camPos.copy(camTarget).add(dir.multiplyScalar(hitDist));
      }
    }
    camera.position.lerp(camPos, 0.15);
    camera.lookAt(camTarget);
  }
}

let catModelPromise: Promise<THREE.Object3D> | null = null;
function loadCatModel(): Promise<THREE.Object3D> {
  if (!catModelPromise) {
    const loader = new FBXLoader();
    catModelPromise = new Promise((resolve, reject) => {
      const url = resolveAssetUrl("../models/cat/cat.fbx");
      loader.load(
        url,
        (obj) => {
          // Scale the cat so its height roughly matches the physics body diameter (~0.9)
          const preBox = new THREE.Box3().setFromObject(obj);
          const preSize = new THREE.Vector3();
          preBox.getSize(preSize);
          const height = preSize.y || 1;
          const targetHeight = 1.2;
          const factor = targetHeight / height;
          obj.scale.setScalar(factor);
          resolve(obj);
        },
        undefined,
        (err) => reject(err)
      );
    });
  }
  return catModelPromise;
}

let catTexturePromise: Promise<THREE.Texture | null> | null = null;
function loadCatTexture(): Promise<THREE.Texture | null> {
  if (!catTexturePromise) {
    catTexturePromise = new Promise((resolve) => {
      const texUrl = resolveAssetUrl("../models/cat/cat.jpg");
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
  return catTexturePromise;
}
import { resolveAssetUrl } from "./props";
