
import * as CANNON from 'cannon-es'

export function createWorld() {
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) })
  world.broadphase = new CANNON.SAPBroadphase(world)
  world.allowSleep = true
  return world
}

export { CANNON }
