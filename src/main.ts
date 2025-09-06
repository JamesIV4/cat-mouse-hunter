import * as THREE from "three";
import { createWorld, CANNON } from "./physics";
import { CatController } from "./cat";
import { Mouse } from "./mouse";
import { Level, LevelSpec } from "./level";
import { Input } from "./input";
import { UI } from "./ui";

const app = document.getElementById("app")!;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x22303a);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 3, 6);

// Lights
const hemi = new THREE.HemisphereLight(0xffffff, 0x445566, 0.6);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffffff, 0.9);
sun.position.set(10, 15, 8);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -25;
sun.shadow.camera.right = 25;
sun.shadow.camera.top = 25;
sun.shadow.camera.bottom = -25;
scene.add(sun);

const world = createWorld();

const input = new Input(document);

const level = new Level(world, scene);
let currentLevel = 1;

function specForLevel(n: number): LevelSpec {
  const mouseCount = 4 + Math.floor(n * 1.5);
  return {
    miceRequired: Math.min(mouseCount, 4 + n),
    mouseCount,
    mouseSpeed: 2.5 + n * 0.2,
    roomCount: Math.min(6, 3 + Math.floor(n / 2)),
    clutterCount: 20 + n * 4,
  };
}

let cat: CatController;
let mice: Mouse[] = [];
let caught = 0;
let required = 0;
let remaining = 0;
let bannerVisible = false;

function createLevel(n: number) {
  level.generate(specForLevel(n));
  if (cat) {
    // remove old cat visuals; physics body will be GC'd if removed, but we keep same body for simplicity by recreating
    scene.remove(cat.mesh);
    world.removeBody(cat.body);
  }
  // Place cat at a random spawn point
  const start =
    level.spawnPoints[Math.floor(Math.random() * level.spawnPoints.length)] ||
    new THREE.Vector3(0, 0, 0);
  cat = new CatController(world, scene, input, start.clone());
  UI.hideBanner();
  bannerVisible = false;

  // mice
  for (const m of mice) {
    if (m.alive) m.kill();
  }
  mice = [];
  const spec = specForLevel(n);
  required = spec.miceRequired;
  for (let i = 0; i < spec.mouseCount; i++) {
    const p =
      level.spawnPoints[Math.floor(Math.random() * level.spawnPoints.length)] ||
      new THREE.Vector3(0, 0, 0);
    const mouse = new Mouse(world, scene, p.clone(), level.worldBounds.clone());
    mouse.speed = spec.mouseSpeed;
    mice.push(mouse);
  }
  caught = 0;
  remaining = mice.length;
  UI.setLevel(currentLevel);
  UI.setCaught(caught);
  UI.setRequired(required);
  UI.setRemaining(remaining);
}

createLevel(currentLevel);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let last = performance.now();
let fpsTimer = 0,
  fpsFrames = 0;
function loop() {
  const now = performance.now();
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;

  // physics
  world.step(1 / 60, dt, 3);

  // update entities
  cat.update(
    dt,
    camera,
    mice.filter((m) => m.alive).map((m) => m.mesh)
  );

  const catPos = new THREE.Vector3(cat.body.position.x, 0, cat.body.position.z);
  for (const m of mice) m.update(dt, catPos);

  // catch detection
  for (const m of mice) {
    if (!m.alive) continue;
    const d = m.mesh.position.distanceTo(cat.mesh.position);
    if (
      d < 0.6 &&
      (cat.state === "Pounce" ||
        cat.state === "Run" ||
        cat.state === "Walk" ||
        cat.state === "Sneak")
    ) {
      m.kill();
      caught++;
      remaining--;
      UI.setCaught(caught);
      UI.setRemaining(remaining);
      if (caught >= required && !bannerVisible) {
        UI.showBanner(
          `<h2>House cleared!</h2><p>You caught ${caught} mice.</p><p>Press <b>N</b> for the next house.</p>`
        );
        bannerVisible = true;
      }
    }
  }

  // restart/next level
  if (input.restart) {
    createLevel(currentLevel);
  }
  if (input.next && caught >= required) {
    currentLevel++;
    createLevel(currentLevel);
  }

  UI.setState(cat.state);

  // render
  renderer.render(scene, camera);

  // fps
  fpsTimer += dt;
  fpsFrames++;
  if (fpsTimer >= 0.5) {
    const fps = fpsFrames / fpsTimer;
    UI.setFPS(fps);
    fpsTimer = 0;
    fpsFrames = 0;
  }

  requestAnimationFrame(loop);
}
loop();
