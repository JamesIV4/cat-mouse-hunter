
import * as THREE from 'three'
import { CANNON } from './physics'
import { randRange, clamp } from './utils'

export class Mouse {
  body: CANNON.Body
  mesh: THREE.Mesh
  wanderTimer = 0
  speed = 3
  alive = true

  constructor(public world: CANNON.World, public scene: THREE.Scene, pos: THREE.Vector3, public bounds: THREE.Box3) {
    const shape = new CANNON.Sphere(0.12)
    this.body = new CANNON.Body({ mass: 0.3, shape, position: new CANNON.Vec3(pos.x, 0.3, pos.z) })
    this.body.linearDamping = 0.2
    world.addBody(this.body)

    const geo = new THREE.SphereGeometry(0.12, 12, 12)
    const mat = new THREE.MeshStandardMaterial({ color: 0x6f4d2b })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.castShadow = true
    scene.add(this.mesh)
  }

  update(dt: number, catPos: THREE.Vector3) {
    if (!this.alive) return
    this.wanderTimer -= dt
    const pos = new THREE.Vector3(this.body.position.x, 0, this.body.position.z)
    const toCat = catPos.clone().sub(pos)
    const dist = toCat.length()
    const dir = new THREE.Vector3()
    if (dist < 5) {
      // flee
      dir.copy(toCat).multiplyScalar(-1).normalize()
    } else {
      // wander
      if (this.wanderTimer <= 0) {
        const angle = randRange(0, Math.PI * 2)
        dir.set(Math.cos(angle), 0, Math.sin(angle))
        this.wanderTimer = randRange(0.8, 2.4)
      }
    }
    const v = this.body.velocity
    v.x += (dir.x * this.speed - v.x) * 0.2
    v.z += (dir.z * this.speed - v.z) * 0.2

    // keep within bounds
    const b = this.bounds
    v.x += (pos.x < b.min.x + 0.5 ? 1 : 0) + (pos.x > b.max.x - 0.5 ? -1 : 0)
    v.z += (pos.z < b.min.z + 0.5 ? 1 : 0) + (pos.z > b.max.z - 0.5 ? -1 : 0)

    this.mesh.position.set(this.body.position.x, 0.12, this.body.position.z)
    this.mesh.rotation.y += dt * 8
  }

  kill() {
    this.alive = false
    this.mesh.visible = false
    this.world.removeBody(this.body)
  }
}
