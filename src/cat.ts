
import * as THREE from 'three'
import { CANNON } from './physics'
import { Input } from './input'
import { clamp } from './utils'

export type CatState = 'Idle' | 'Walk' | 'Run' | 'Sneak' | 'Jump' | 'Pounce'

export class CatController {
  body: CANNON.Body
  mesh: THREE.Group
  state: CatState = 'Idle'
  onGround = false
  camYaw = 0
  camPitch = -0.3
  camDist = 6
  targetMouse: THREE.Object3D | null = null
  pounceCooldown = 0

  constructor(public world: CANNON.World, public scene: THREE.Scene, public input: Input, public origin = new THREE.Vector3()) {
    const shape = new CANNON.Cylinder(0.35, 0.35, 0.9, 8)
    const mass = 10
    this.body = new CANNON.Body({ mass, shape, position: new CANNON.Vec3(origin.x, origin.y + 1.0, origin.z) })
    this.body.linearDamping = 0.2
    this.body.angularDamping = 1.0
    this.body.fixedRotation = true
    world.addBody(this.body)

    // Visual cat: simple capsule + head sphere + tail
    const g = new THREE.Group()
    const bodyGeo = new THREE.CapsuleGeometry(0.35, 0.6, 8, 16)
    const mat = new THREE.MeshStandardMaterial({ color: 0x202020, roughness: 0.6, metalness: 0.0 })
    const bodyMesh = new THREE.Mesh(bodyGeo, mat)
    bodyMesh.position.y = 0.75
    g.add(bodyMesh)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), new THREE.MeshStandardMaterial({ color: 0x333333 }))
    head.position.set(0, 1.25, 0.4)
    g.add(head)
    const earGeo = new THREE.ConeGeometry(0.12, 0.2, 8)
    const ear1 = new THREE.Mesh(earGeo, mat); ear1.position.set(-0.12, 1.45, 0.35); ear1.rotation.x = Math.PI
    const ear2 = ear1.clone(); ear2.position.x = 0.12
    g.add(ear1, ear2)
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 8), mat)
    tail.position.set(0, 1.0, -0.4); tail.rotation.x = Math.PI/4
    g.add(tail)
    this.mesh = g
    scene.add(this.mesh)
  }

  update(dt: number, camera: THREE.PerspectiveCamera, mice: THREE.Object3D[]) {
    this.onGround = false
    // Simple ground check using contact equations
    for (const c of this.body.world!.contacts) {
      if (c.bi === this.body || c.bj === this.body) {
        const n = c.ni
        // If contact normal points mostly up relative to our body, consider grounded
        const up = (c.bi === this.body) ? n.negate() : n
        if (up.y > 0.5) { this.onGround = true; break }
      }
    }

    const mouseDelta = this.input.consumeMouseDelta()
    this.camYaw -= mouseDelta.x * 0.002
    this.camPitch -= mouseDelta.y * 0.002
    this.camPitch = clamp(this.camPitch, -1.3, 0.3)
    this.camDist = clamp(this.camDist + this.input.consumeWheelDelta(), 3, 12)

    // Determine desired movement in local camera space
    const forward = this.input.forward - this.input.backward
    const right = this.input.right - this.input.left
    const moving = Math.abs(forward) + Math.abs(right) > 0

    const speedBase = 3.5
    const speedRun = 7.0
    const speedSneak = 1.5
    const speed = this.input.sneak ? speedSneak : (this.input.run ? speedRun : speedBase)

    if (this.onGround) {
      if (this.input.jump) {
        // Jump or mantle; we just apply upward impulse
        this.body.velocity.y = 5.5
        this.state = 'Jump'
      } else if (moving) {
        this.state = this.input.sneak ? 'Sneak' : (this.input.run ? 'Run' : 'Walk')
      } else {
        this.state = 'Idle'
      }
    } else {
      if (this.state !== 'Pounce') this.state = 'Jump'
    }

    // Pounce targeting
    this.pounceCooldown = Math.max(0, this.pounceCooldown - dt)
    if (this.input.consumeLockPounce() && this.pounceCooldown <= 0) {
      // find nearest mouse in front cone
      let best: THREE.Object3D | null = null
      let bestDist = 999
      const pos = new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z)
      const camDir = new THREE.Vector3(Math.sin(this.camYaw), 0, Math.cos(this.camYaw))
      for (const m of mice) {
        const d = m.position.distanceTo(pos)
        if (d < 8) {
          const dir = m.position.clone().sub(pos).normalize()
          if (dir.dot(camDir) > 0.6) {
            if (d < bestDist) { bestDist = d; best = m }
          }
        }
      }
      if (best) {
        this.targetMouse = best
        // Leap towards target
        const dir = best.position.clone().sub(pos).normalize()
        this.body.velocity.set(dir.x * 8, 6.5, dir.z * 8)
        this.state = 'Pounce'
        this.pounceCooldown = 1.0
      }
    }

    // Apply movement forces (project onto ground plane)
    const dir = new THREE.Vector3()
    if (moving) {
      const yaw = this.camYaw
      const forwardDir = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw))
      const rightDir = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw))
      dir.copy(forwardDir).multiplyScalar(forward).add(rightDir.multiplyScalar(right)).normalize()
      const desiredVel = new CANNON.Vec3(dir.x * speed, this.body.velocity.y, dir.z * speed)
      // Lerp horizontal velocity
      const v = this.body.velocity
      v.x += (desiredVel.x - v.x) * 0.15
      v.z += (desiredVel.z - v.z) * 0.15
    } else {
      // slow down when no input
      this.body.velocity.x *= 0.9
      this.body.velocity.z *= 0.9
    }

    // Update visual
    this.mesh.position.set(this.body.position.x, this.body.position.y - 0.45, this.body.position.z)
    if (dir.lengthSq() > 0.0001) {
      const targetRot = Math.atan2(dir.x, dir.z)
      const currentY = this.mesh.rotation.y
      let delta = targetRot - currentY
      while (delta > Math.PI) delta -= Math.PI * 2
      while (delta < -Math.PI) delta += Math.PI * 2
      this.mesh.rotation.y = currentY + delta * 0.2
    }

    // Camera follow
    const camTarget = new THREE.Vector3(this.body.position.x, this.body.position.y + 0.8, this.body.position.z)
    const camOffset = new THREE.Vector3(Math.sin(this.camYaw) * this.camDist, 0, Math.cos(this.camYaw) * this.camDist)
    let camPos = camTarget.clone().add(new THREE.Vector3(0, 2.5 + this.camPitch * -2, 0)).add(camOffset)
    camera.position.lerp(camPos, 0.15)
    camera.lookAt(camTarget)
  }
}
