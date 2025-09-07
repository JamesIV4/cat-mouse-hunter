import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { CANNON } from "./physics";
import { Input } from "./input";
import { clamp } from "./utils";

export type CatState = "Idle" | "Walk" | "Run" | "Sneak" | "Jump" | "Pounce";

export class CatController {
  body: CANNON.Body;
  mesh: THREE.Group;
  state: CatState = "Idle";
  onGround = false;
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

    loadCatModel().then((model) => {
      const instance = model.clone(true);
      instance.traverse((o: any) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      // Center horizontally and place feet at local y=0
      const box = new THREE.Box3().setFromObject(instance);
      const center = box.getCenter(new THREE.Vector3());
      instance.position.x -= center.x;
      instance.position.z -= center.z;
      instance.position.y -= box.min.y;
      container.add(instance);
    });
  }

  update(
    dt: number,
    camera: THREE.PerspectiveCamera,
    mice: THREE.Object3D[],
    colliders: THREE.Object3D[] = []
  ) {
    this.onGround = false;
    // Grounded check via cannon-es narrowphase contact equations
    const world = this.body.world as any;
    const equations = (world?.narrowphase?.contactEquations as any[]) || [];
    for (const eq of equations) {
      if (eq.bi === this.body || eq.bj === this.body) {
        const n = eq.ni as import("./physics").CANNON.Vec3;
        const upY = eq.bi === this.body ? -n.y : n.y;
        if (upY > 0.5) {
          this.onGround = true;
          break;
        }
      }
    }
    // Fallback: short downward raycast if no contact equations detected
    if (!this.onGround) {
      const Ray: any = (CANNON as any).Ray;
      const RaycastResult: any = (CANNON as any).RaycastResult;
      if (Ray && RaycastResult) {
        const ray = new Ray();
        const result = new RaycastResult();
        ray.from.set(
          this.body.position.x,
          this.body.position.y,
          this.body.position.z
        );
        ray.to.set(
          this.body.position.x,
          this.body.position.y - 0.7,
          this.body.position.z
        );
        ray.intersectWorld(this.body.world, {
          mode: Ray.ANY,
          result,
          skipBackfaces: true,
        });
        if (result.hasHit && result.body !== this.body) {
          const gap = this.body.position.y - result.hitPointWorld.y;
          if (gap <= 0.75) this.onGround = true;
        }
      }
    }

    const mouseDelta = this.input.consumeMouseDelta();
    const lookSpeed = 0.002 * this.input.sensitivity;
    this.camYaw -= mouseDelta.x * lookSpeed;
    this.camPitch -= mouseDelta.y * lookSpeed;
    this.camPitch = clamp(this.camPitch, -1.3, 0.3);
    this.camDist = clamp(this.camDist + this.input.consumeWheelDelta(), 3, 12);

    // Determine desired movement in local camera space
    const forward = this.input.forward - this.input.backward;
    const right = this.input.right - this.input.left;
    const moving = Math.abs(forward) + Math.abs(right) > 0;

    const speedBase = 10.0;
    const speedRun = 13.5;
    const speedSneak = 2.0;
    const speed = this.input.sneak
      ? speedSneak
      : this.input.run
      ? speedRun
      : speedBase;

    if (this.onGround) {
      if (this.input.jump) {
        this.body.velocity.y = 7; // Jump strength
        this.state = "Jump";
      } else if (moving) {
        this.state = this.input.sneak
          ? "Sneak"
          : this.input.run
          ? "Run"
          : "Walk";
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
      const pos = new THREE.Vector3(
        this.body.position.x,
        this.body.position.y,
        this.body.position.z
      );
      const camDir = new THREE.Vector3(
        Math.sin(this.camYaw),
        0,
        Math.cos(this.camYaw)
      );
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
      dir
        .copy(forwardDir)
        .multiplyScalar(forward)
        .add(rightDir.multiplyScalar(right))
        .normalize();
      const desiredVel = new CANNON.Vec3(
        dir.x * speed,
        this.body.velocity.y,
        dir.z * speed
      );
      // Accelerate toward desired horizontal velocity
      const v = this.body.velocity;
      v.x += (desiredVel.x - v.x) * 0.35;
      v.z += (desiredVel.z - v.z) * 0.35;
    } else {
      // slow down when no input
      this.body.velocity.x *= 0.9;
      this.body.velocity.z *= 0.9;
    }

    // Update visual
    this.mesh.position.set(
      this.body.position.x,
      this.body.position.y - 0.45,
      this.body.position.z
    );
    if (dir.lengthSq() > 0.0001) {
      const targetRot = Math.atan2(dir.x, dir.z);
      const currentY = this.mesh.rotation.y;
      let delta = targetRot - currentY;
      while (delta > Math.PI) delta -= Math.PI * 2;
      while (delta < -Math.PI) delta += Math.PI * 2;
      this.mesh.rotation.y = currentY + delta * 0.2;
    }

    // Camera follow
    const camTarget = new THREE.Vector3(
      this.body.position.x,
      this.body.position.y + 0.8,
      this.body.position.z
    );
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
      const url = new URL(
        "../models/cat/cat-exported2.fbx",
        import.meta.url
      ).toString();
      loader.load(
        url,
        (obj) => {
          // Scale the cat so its height roughly matches the physics body diameter (~0.9)
          const preBox = new THREE.Box3().setFromObject(obj);
          const preSize = new THREE.Vector3();
          preBox.getSize(preSize);
          const height = preSize.y || 1;
          // Match visual height roughly to physics body diameter (~0.9)
          const targetHeight = 1;
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
