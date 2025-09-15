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
  // Smoothed camera state
  private _smoothCamPos: THREE.Vector3 | null = null;
  private _smoothCamTarget: THREE.Vector3 | null = null;

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

  update(
    dt: number,
    camera: THREE.PerspectiveCamera,
    mice: THREE.Object3D[],
    colliders: THREE.Object3D[] = [],
    controlsEnabled: boolean = true
  ) {
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

    // Animation state machine by velocity magnitude, with input-aware fallback
    if (this.mixer && this.actions) {
      const vx = this.body.velocity.x;
      const vz = this.body.velocity.z;
      const speedH = Math.hypot(vx, vz);
      // Approximate analog magnitude from inputs (keyboard gives 0 or 1)
      const inX = this.input.right - this.input.left;
      const inZ = this.input.forward - this.input.backward;
      const inputMag = THREE.MathUtils.clamp(Math.hypot(inX, inZ), 0, 1);
      let targetKind: "idle" | "walk" | "run" = "idle";
      const movingInput = inputMag > 0.05 || speedH > 0.1;
      // Only play run when sprint is pressed; otherwise walk, so analog can slow the cycle
      if (this.input.run && movingInput) targetKind = "run";
      else if (movingInput) targetKind = "walk";
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
            // Running: scale with horizontal speed
            const ts = THREE.MathUtils.clamp(speedH / 4.0, 0.7, 2.0);
            act.enabled = true;
            act.setEffectiveTimeScale(ts);
          } else if (this.currentAction === (this.actionByKind.walk || "").toLowerCase()) {
            // Walking: scale animation by actual horizontal speed so small analog input
            // slows the cycle nearly to a stop. This ties foot cadence to motion and
            // prevents fast steps when accelerating/decelerating.
            const WALK_NOMINAL = 12.0; // must match speedBase below
            const speedNorm = THREE.MathUtils.clamp(speedH / WALK_NOMINAL, 0, 1);
            // Ease slightly for finer control in the low range
            const curved = Math.pow(speedNorm, 1.2);
            const low = 0.005; // effectively almost paused at tiny movement
            const high = 1.6; // brisk walk at full speed
            const ts = THREE.MathUtils.lerp(low, high, curved);
            act.enabled = true;
            act.setEffectiveTimeScale(ts);
          } else {
            act.enabled = true;
            act.setEffectiveTimeScale(1.0);
          }
        }
      }
      // Pause animation only when truly idle or while airborne (jump/pounce)
      // Keep a tiny playback when there's slight analog input.
      const paused = !this.onGround || (speedH <= 0.05 && inputMag <= 0.01);
      this.mixer.timeScale = paused ? 0 : this.animBaseSpeed;
      this.mixer.update(dt);
    }

    // Camera look input only when controls are enabled
    if (controlsEnabled) {
      const mouseDelta = this.input.consumeMouseDelta();
      // Increase overall camera look sensitivity by 50%
      const lookSpeed = 0.003 * this.input.sensitivity;
      this.camYaw -= mouseDelta.x * lookSpeed;
      this.camPitch -= mouseDelta.y * lookSpeed;
      // Further relax vertical look by ~50% more (both directions)
      // Previous: [-2.2, 0.45] ⇒ New: approx [-2.86, 1.11]
      this.camPitch = clamp(this.camPitch, -2.86, 1.11);
      this.camDist = clamp(this.camDist + this.input.consumeWheelDelta(), 3, 12);
    }

    // Subtle auto-rotate: while the player is providing movement input,
    // gently turn the camera toward the travel direction, but only if they
    // are not actively rotating the camera themselves this frame.
    {
      const hasLookInput = controlsEnabled
        ? Math.abs(this.input.mouseDelta.x) > 0.001 || Math.abs(this.input.mouseDelta.y) > 0.001
        : false;
      const inXRaw = this.input.right - this.input.left;
      const inZRaw = this.input.forward - this.input.backward;
      const inputMag = THREE.MathUtils.clamp(Math.hypot(inXRaw, inZRaw), 0, 1);
      const isMovingInput = inputMag > 0.0001;
      if (isMovingInput && !hasLookInput) {
        // Prefer current horizontal velocity to infer travel direction; if too low, fall back to intended input dir
        const vx = this.body.velocity.x;
        const vz = this.body.velocity.z;
        const speedH = Math.hypot(vx, vz);
        let desiredYaw: number | null = null;
        if (speedH > 0.2) {
          desiredYaw = Math.atan2(vx, vz);
        } else {
          // Compute intended dir from input in camera space
          const yaw = this.camYaw;
          const f = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
          const r = new THREE.Vector3(-Math.cos(yaw), 0, Math.sin(yaw));
          const intend = new THREE.Vector3().copy(f).multiplyScalar(inZRaw).add(r.multiplyScalar(inXRaw));
          if (intend.lengthSq() > 1e-4) desiredYaw = Math.atan2(intend.x, intend.z);
        }
        if (desiredYaw != null) {
          // Smoothly steer camYaw toward desiredYaw with speed proportional to angle difference
          let delta = desiredYaw - this.camYaw;
          while (delta > Math.PI) delta -= Math.PI * 2;
          while (delta < -Math.PI) delta += Math.PI * 2;
          // Base responsiveness scales the step with |delta|
          const speedHNow = Math.hypot(this.body.velocity.x, this.body.velocity.z);
          // Normalize movement factor by a nominal run speed (~10 m/s is plenty); clamp to [0.3, 1]
          const moveFactor = THREE.MathUtils.clamp(speedHNow / 10, 0.3, 1.0);
          // Also scale responsiveness by input intensity so a slight push rotates more gently
          const inputFactor = THREE.MathUtils.clamp(inputMag, 0.25, 1.0);
          const baseResp = this.input.run ? 3.0 : 2.0; // rad/s per rad of delta
          let step = delta * baseResp * moveFactor * inputFactor * dt; // proportional turn
          // Cap absolute rate to avoid whiplash
          let maxRate = 1.2; // rad/s base cap
          if (this.input.run) maxRate *= 1.4; // higher cap when sprinting
          const maxStep = maxRate * dt;
          step = THREE.MathUtils.clamp(step, -maxStep, maxStep);
          this.camYaw += step;
        }
      }
    }

    // Determine desired movement in local camera space
    const forward = controlsEnabled ? this.input.forward - this.input.backward : 0;
    const right = controlsEnabled ? this.input.right - this.input.left : 0;
    const moving = Math.abs(forward) + Math.abs(right) > 0;

    const speedBase = 12.0;
    const speedRun = speedBase * 1.75;
    const speedSneak = 2.0;
    const speed = this.input.run ? speedRun : speedBase;

    if (this.onGround) {
      if (controlsEnabled && this.input.jump) {
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
        this.state = this.input.run ? "Run" : "Walk";
      } else {
        this.state = "Idle";
      }
    } else {
      if (this.state !== "Pounce") this.state = "Jump";
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
      // Build intended movement vector in world space using raw input strengths
      const intend = new THREE.Vector3().copy(forwardDir).multiplyScalar(forward).add(rightDir.multiplyScalar(right));
      const intendLen = intend.length();
      // Exponential scaling (gamma < 1) so small input travels faster than linear
      const rawAmount = THREE.MathUtils.clamp(intendLen, 0, 1); // 0..1
      const moveAmount = Math.pow(rawAmount, 0.6); // bias toward higher output
      if (intendLen > 1e-4) dir.copy(intend).multiplyScalar(1 / intendLen); // normalize to direction

      const v = this.body.velocity;
      if (this.onGround) {
        // Grounded: steer toward a target speed
        const effectiveSpeed = this.input.run ? speedRun : speedBase * moveAmount;
        const desiredVel = new CANNON.Vec3(dir.x * effectiveSpeed, v.y, dir.z * effectiveSpeed);
        const accel = 0.35;
        v.x += (desiredVel.x - v.x) * accel;
        v.z += (desiredVel.z - v.z) * accel;
      } else {
        // Airborne: small additive nudge in input direction; scale by dt so it's framerate-independent
        const airNudgeAccel = 0.5; // per-second acceleration scale
        const effectiveSpeed = this.input.run ? speedRun : speedBase * moveAmount;
        v.x += dir.x * effectiveSpeed * airNudgeAccel * dt;
        v.z += dir.z * effectiveSpeed * airNudgeAccel * dt;
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
    // Initialize smooth buffers on first use
    if (!this._smoothCamPos) this._smoothCamPos = camPos.clone();
    if (!this._smoothCamTarget) this._smoothCamTarget = camTarget.clone();
    // Smooth falloff/lerp for camera position and target
    const posAlpha = this.input.run ? 0.22 : 0.16; // slightly quicker when sprinting
    const tgtAlpha = 0.2;
    this._smoothCamPos.lerp(camPos, posAlpha);
    this._smoothCamTarget.lerp(camTarget, tgtAlpha);
    camera.position.copy(this._smoothCamPos);
    camera.lookAt(this._smoothCamTarget);
  }
}

let catModelPromise: Promise<THREE.Object3D> | null = null;
function loadCatModel(): Promise<THREE.Object3D> {
  if (!catModelPromise) {
    const loader = new FBXLoader();
    catModelPromise = new Promise((resolve, reject) => {
      const url = new URL("../models/cat/cat.fbx", import.meta.url).toString();
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
      const texUrl = new URL("../models/cat/cat.jpg", import.meta.url).toString();
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
//
