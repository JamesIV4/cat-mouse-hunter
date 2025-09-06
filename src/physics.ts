import * as CANNON from "cannon-es";

export function createWorld() {
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
  // Naive broadphase is more robust for mixed shapes (Plane + dynamic bodies)
  world.broadphase = new CANNON.NaiveBroadphase();
  world.allowSleep = true;
  return world;
}

export { CANNON };
