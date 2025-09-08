import * as THREE from "three";
import { createWorld, CANNON } from "./physics";
import { CatController } from "./cat";
import { Mouse } from "./mouse";
import { Level, LevelSpec } from "./level";
import { Input } from "./input";
import { UI, enableMobileControls, consumeBannerAccept } from "./ui";
import { toggleColliderDebug } from "./props";
import { Sound } from "./audio";
import { ParticleSystem } from "./particles";

const app = document.getElementById("app")!;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x22303a);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2.8, 4.2);

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
const sfx = new Sound();

// Simple mobile detection
const isMobile = (() => {
  const mq = (window as any).matchMedia ? window.matchMedia("(pointer: coarse)") : null;
  const coarse = mq ? mq.matches : false;
  const touch = (navigator as any).maxTouchPoints ? (navigator as any).maxTouchPoints > 0 : false;
  return coarse || touch;
})();

// Pointer lock for seamless mouse look (desktop only)
const canvas = renderer.domElement;
canvas.style.outline = "none";
canvas.tabIndex = 0;
if (!isMobile) {
  canvas.addEventListener("click", () => {
    if (document.pointerLockElement !== canvas) {
      canvas.requestPointerLock();
    }
    sfx.resume();
  });
  document.addEventListener("pointerlockchange", () => {
    // const locked = document.pointerLockElement === canvas;
    // const hint = document.getElementById("lockHint") as HTMLElement | null;
    // if (hint) hint.style.display = locked ? "none" : "block";
  });
} else {
  // On mobile, resume audio on first interaction via touch anywhere
  window.addEventListener(
    "touchstart",
    () => {
      sfx.resume();
    },
    { once: true, passive: true }
  );
}

// Enable mobile on-screen controls
enableMobileControls(input);

// Sensitivity slider
const sens = document.getElementById("sensitivity") as HTMLInputElement | null;
const sensLabel = document.getElementById("sensitivityLabel") as HTMLElement | null;
if (sens) {
  const applySens = () => {
    const v = Number(sens.value);
    input.sensitivity = isNaN(v) ? 1 : v;
    if (sensLabel) sensLabel.textContent = `${input.sensitivity.toFixed(2)}x`;
  };
  applySens();
  sens.addEventListener("input", applySens);
}

const level = new Level(world, scene);
let currentLevel = 1;
const particles = new ParticleSystem(world, scene);
particles.prewarm();

function specForLevel(n: number): LevelSpec {
  const mouseCount = 4 + Math.floor(n * 1.5);
  // Scale house size with level
  const houseHalfSize = 10 + Math.min(20, Math.floor(n * 2)); // grows up to +20
  const sizeScale = houseHalfSize / 10;
  const houseArea = houseHalfSize * 2 * (houseHalfSize * 2);
  // Aim for similar room density across sizes
  const desiredRooms = Math.min(14, 3 + Math.floor(n * 0.8) + Math.floor((sizeScale - 1) * 3));
  const roomDensity = desiredRooms / houseArea;
  return {
    miceRequired: Math.min(mouseCount, 4 + n),
    mouseCount,
    mouseSpeed: 2.5 + n * 0.2,
    roomCount: desiredRooms,
    clutterCount: Math.floor((20 + n * 5) * sizeScale * sizeScale),
    houseHalfSize,
    roomDensity,
  };
}

let cat: CatController;
let mice: Mouse[] = [];
let caught = 0;
let required = 0;
let remaining = 0;
let bannerVisible = false;
let introVisible = false;
// Defer mouse spawning on initial intro
let pendingMiceSpawn = false;
let pendingSpec: LevelSpec | null = null;
let levelStartPos: THREE.Vector3 | null = null;

function createLevel(n: number, spawnMice: boolean = true) {
  level.generate(specForLevel(n));
  // Clear any leftover particles when a new level loads
  particles.clear();
  // Ensure any looping purr is stopped when leaving banner/starting a level
  sfx.stopCatPurr();
  if (cat) {
    // remove old cat visuals; physics body will be GC'd if removed, but we keep same body for simplicity by recreating
    scene.remove(cat.mesh);
    world.removeBody(cat.body);
  }
  // Place cat at a random spawn point
  const start = level.spawnPoints[Math.floor(Math.random() * level.spawnPoints.length)] || new THREE.Vector3(0, 0, 0);
  cat = new CatController(world, scene, input, start.clone());
  UI.hideBanner();
  bannerVisible = false;
  levelStartPos = start.clone();

  // mice
  for (const m of mice) {
    if (m.alive) m.kill();
  }
  mice = [];
  const spec = specForLevel(n);
  required = spec.miceRequired;
  // Defer mice spawn if requested
  pendingSpec = spec;
  caught = 0;
  if (spawnMice) {
    spawnMiceNow();
  } else {
    remaining = 0;
    pendingMiceSpawn = true;
  }
  UI.setLevel(currentLevel);
  UI.setCaught(caught);
  UI.setRequired(required);
  UI.setRemaining(remaining);
}

// Helper: pick a spawn point far from an origin
function pickSpawnFarFrom(origin: THREE.Vector3): THREE.Vector3 {
  const safeRadius = 5.0; // meters
  // Prefer filtered spawnPoints if any remain
  if (level.spawnPoints.length > 0) {
    return level.spawnPoints[Math.floor(Math.random() * level.spawnPoints.length)].clone();
  }
  // Fallback: sample points inside random rooms, away from origin
  for (let tries = 0; tries < 40; tries++) {
    const r = level.roomBoxes[Math.floor(Math.random() * level.roomBoxes.length)];
    const margin = 0.6;
    const x = THREE.MathUtils.lerp(r.min.x + margin, r.max.x - margin, Math.random());
    const z = THREE.MathUtils.lerp(r.min.z + margin, r.max.z - margin, Math.random());
    const p = new THREE.Vector3(x, 0, z);
    if (p.distanceTo(origin) >= safeRadius) return p;
  }
  // Last resort: push a point away from origin
  const dir = new THREE.Vector2(Math.random() - 0.5, Math.random() - 0.5).normalize();
  return new THREE.Vector3(origin.x + dir.x * (safeRadius + 1), 0, origin.z + dir.y * (safeRadius + 1));
}

function spawnMiceNow() {
  if (!pendingSpec || !levelStartPos) return;
  // Reset per-level banned mouse-hole spawns
  Mouse.resetHoleBans();
  // Create a no-spawn safe radius around the player's start so mice don't spawn too close
  const safeRadius = 5.0; // meters
  if (level.spawnPoints.length > 0) {
    level.spawnPoints = level.spawnPoints.filter((p) => p.distanceTo(levelStartPos!) >= safeRadius);
  }
  for (let i = 0; i < pendingSpec.mouseCount; i++) {
    const p = pickSpawnFarFrom(levelStartPos!);
    const mouse = new Mouse(world, scene, p.clone(), level.worldBounds.clone(), level.mouseHoles, sfx);
    mouse.speed = pendingSpec.mouseSpeed;
    mice.push(mouse);
  }
  remaining = mice.length;
  UI.setRemaining(remaining);
  pendingMiceSpawn = false;
}

// Initial level: build world and cat, but defer mice until Start is clicked
createLevel(currentLevel, false);

// Game name (cooler title)
const GAME_NAME = "Cat & Mouse";

// Intro modal
const introHtml = `
  <h1 style="margin:0 0 8px 0; font-size:28px; letter-spacing:0.5px;">${GAME_NAME}</h1>
  <p style="margin:6px 0 10px 0; max-width:520px;">
    A mice infestation is sweeping the neighborhood — and you've been hired to shut it down.
    Clear the target number of mice in each house, then push on to the next.
  </p>
  <div id="introControls" style="opacity:0.9; font-size:13px; margin-bottom:10px;"></div>
  <div style="margin-top:8px; display:flex; justify-content:center;">
    <button id="nextBtn" style="
      padding:10px 16px;
      font-family: system-ui, sans-serif;
      font-size:16px;
      font-weight:700;
      border-radius:10px;
      border:none;
      background:#fff;
      color:#000;
      box-shadow:0 6px 16px rgba(0,0,0,0.35);
    ">Start ▶</button>
  </div>`;
UI.showBanner(introHtml);
bannerVisible = true;
introVisible = true;

// Controls help strings per scheme
const controlsForScheme = (scheme: string) => {
  if (scheme === "gamepad")
    return "Left stick move • A jump • RT/RB run • LT/LB sneak • Right stick look • D‑pad up/down zoom • Back restart • Start next • X/B lock pounce";
  if (scheme === "touch")
    return "Left thumbstick moves • Jump and Sprint buttons on the right • Drag right side to look";
  return "WASD move • Space jump • Shift run • Ctrl sneak • E lock pounce • Mouse look • Wheel zoom • R restart • N next";
};
// Initial help (will auto-update on device change)
UI.setIntroControls(controlsForScheme(isMobile ? "touch" : "keyboardMouse"));

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let last = performance.now();
let fpsTimer = 0,
  fpsFrames = 0;
let roomTypeTimer = 0;
function loop() {
  const now = performance.now();
  const dt = Math.min(0.033, (now - last) / 1000);
  last = now;

  // update inputs (always so UI/banners can be accepted)
  input.updateGamepad(dt);
  // If the "Next level" banner is up and A was pressed to accept,
  // suppress interpreting that A press as jump this frame.
  if (bannerVisible && input.padAccept) {
    input.suppressPadJumpOnce();
  }
  // Intro acceptance: close intro banner on A or tap
  if (introVisible && (input.consumePadAccept() || consumeBannerAccept())) {
    UI.hideBanner();
    introVisible = false;
    bannerVisible = false;
    if (pendingMiceSpawn) spawnMiceNow();
  }
  // Pause gameplay when a banner is visible, or (on desktop) until pointer lock is active
  const canvasEl = renderer.domElement as HTMLCanvasElement;
  const pointerLocked = document.pointerLockElement === canvasEl;
  const controlsDisabled = false;
  // const controlsDisabled = bannerVisible || (!isMobile && !pointerLocked);

  // Always advance physics/time; input is gated separately
  world.step(1 / 60, dt, 3);
  // Update controls help when input device changes
  (loop as any)._lastScheme = (loop as any)._lastScheme || "";
  const scheme = input.lastDevice;
  if (scheme !== (loop as any)._lastScheme) {
    if (introVisible) UI.setIntroControls(controlsForScheme(scheme));
    (loop as any)._lastScheme = scheme;
  }
  // Provide player position so level can pause far dynamic bodies
  const playerPos = new THREE.Vector3(cat.body.position.x, 0, cat.body.position.z);
  level.update(dt, playerPos);
  particles.update(dt);
  cat.update(
    dt,
    camera,
    mice.filter((m) => m.alive).map((m) => m.mesh),
    // Colliders for camera pushback: all static/dynamic meshes we added to the scene
    level.meshes,
    !controlsDisabled
  );

  const catPos = playerPos.clone();
  for (const m of mice) m.update(dt, catPos);

  // catch detection: touching a mouse despawns and scores
  for (const m of mice) {
    if (!m.alive) continue;
    const d = m.mesh.position.distanceTo(cat.mesh.position);
    // Slightly larger catch radius to match bigger mouse collider
    if (d < 0.7) {
      // Spawn a gentle star puff at the catch position
      const p = m.mesh.position.clone();
      particles.spawn(p, 18 + Math.floor(Math.random() * 10));
      m.kill();
      // Play death squeak and cat trill on catch
      sfx.mouseDie();
      sfx.catTrill();
      caught++;
      remaining--;
      UI.setCaught(caught);
      UI.setRemaining(remaining);
      if (caught >= required && !bannerVisible) {
        const scheme = input.lastDevice;
        const hint = scheme === "gamepad" ? "Press A or click Next to continue." : "Click Next to continue.";
        const html = `<h2>House cleared!</h2>
               <p>You caught ${caught} mice.</p>
               <p>${hint}</p>
               <div style=\"margin-top:10px;display:flex;justify-content:center;\">
                 <button id=\"nextBtn\" style=\"
                   padding:10px 16px;
                   font-family: system-ui, sans-serif;
                   font-size:16px;
                   font-weight:700;
                   border-radius:10px;
                   border:none;
                   background:#fff;
                   color:#000;
                   box-shadow:0 6px 16px rgba(0,0,0,0.35);\
                 \">Next ▶</button>
               </div>`;
        UI.showBanner(html);
        bannerVisible = true;
        // Soft purr while banner is visible
        sfx.startCatPurr();
      }
    }
  }

  // restart/next level
  if (input.restart) {
    createLevel(currentLevel);
  }
  if ((input.consumePadAccept() || consumeBannerAccept()) && caught >= required) {
    currentLevel++;
    createLevel(currentLevel);
  }

  // Debug: toggle collider visibility and HUD debug with F2
  // Edge-detect the key press to avoid rapid toggling while held
  (loop as any)._prevF2 = (loop as any)._prevF2 || false;
  const f2 = !!input.keys["F2"];
  if (f2 && !(loop as any)._prevF2) {
    toggleColliderDebug();
    (loop as any)._hudDbg = !(loop as any)._hudDbg;
    UI.setHudDebugVisible(!!(loop as any)._hudDbg);
  }
  (loop as any)._prevF2 = f2;

  UI.setState(cat.state);

  // render
  renderer.render(scene, camera);

  // fps
  fpsTimer += dt;
  fpsFrames++;
  // room type update
  roomTypeTimer += dt;
  if (roomTypeTimer >= 0.25) {
    const t = level.getRoomTypeAtPosition(playerPos);
    UI.setRoomType(t);
    roomTypeTimer = 0;
  }
  if (fpsTimer >= 0.5) {
    const fps = fpsFrames / fpsTimer;
    UI.setFPS(fps);
    fpsTimer = 0;
    fpsFrames = 0;
  }

  requestAnimationFrame(loop);
}
loop();
