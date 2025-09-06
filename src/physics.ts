import * as CANNON from "cannon-es";

export function createWorld() {
  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
  // Naive broadphase is more robust for mixed shapes (Plane + dynamic bodies)
  world.broadphase = new CANNON.NaiveBroadphase();
  world.allowSleep = false;
  // Improve interaction so dynamic clutter collides and pushes nicely
  world.defaultContactMaterial.friction = 0.45;
  world.defaultContactMaterial.restitution = 0.05;
  return world;
}

export { CANNON };
