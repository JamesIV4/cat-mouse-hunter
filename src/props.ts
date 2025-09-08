import * as THREE from "three";
import { CANNON } from "./physics";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry.js";

const fbxCache = new Map<string, Promise<THREE.Object3D>>();
const objCache = new Map<string, Promise<THREE.Object3D>>();

/**
 * Load an FBX once and cache by URL. No scaling is applied in the cache; scaling happens per-placement.
 *
 * @param modelUrl Relative or absolute URL to the FBX file (resolved against this module).
 * @returns Promise that resolves to a loaded THREE.Object3D (the raw model).
 */
export function loadFBXCached(modelUrl: string): Promise<THREE.Object3D> {
  const key = modelUrl;
  if (!fbxCache.has(key)) {
    const loader = new FBXLoader();
    const abs = new URL(modelUrl, import.meta.url).toString();
    const p = new Promise<THREE.Object3D>((resolve, reject) => {
      loader.load(
        abs,
        (obj) => {
          resolve(obj);
        },
        undefined,
        (err) => reject(err)
      );
    });
    fbxCache.set(key, p);
  }
  return fbxCache.get(key)!;
}

export function loadOBJCached(modelUrl: string): Promise<THREE.Object3D> {
  const key = modelUrl;
  if (!objCache.has(key)) {
    const loader = new OBJLoader();
    const abs = new URL(modelUrl, import.meta.url).toString();
    const p = new Promise<THREE.Object3D>((resolve, reject) => {
      loader.load(
        abs,
        (obj) => resolve(obj),
        undefined,
        (err) => reject(err)
      );
    });
    objCache.set(key, p);
  }
  return objCache.get(key)!;
}

/** Load a model by extension (FBX or OBJ) and cache results by URL. */
export function loadModelCached(modelUrl: string, textureUrl?: string): Promise<THREE.Object3D> {
  const lower = modelUrl.toLowerCase();
  const basePromise = lower.endsWith(".obj") ? loadOBJCached(modelUrl) : loadFBXCached(modelUrl);
  if (!textureUrl) return basePromise;
  return Promise.all([basePromise, loadTextureCached(textureUrl).catch(() => null)])
    .then(([model, tex]) => {
      if (tex) {
        model.traverse((o: any) => {
          if (o && o.isMesh && o.material && "map" in o.material) {
            o.material.map = tex;
            if ("needsUpdate" in o.material) o.material.needsUpdate = true;
          }
        });
      }
      return model;
    });
}

export type PlacePropOpts = {
  /**
   * Relative or absolute URL to the model (FBX or OBJ, resolved using import.meta.url).
   */
  modelUrl: string;
  /**
   * If provided, the model is uniformly scaled so its total height (Y) equals this value (in meters).
   * Applied before any additional `scale` below.
   */
  targetHeight?: number;
  /**
   * Additional scale to apply after `targetHeight`. Either a uniform scalar, or per-axis {x,y,z}.
   */
  scale?: number | { x: number; y: number; z: number };
  /**
   * How far to push the prop inward from the chosen wall (meters). Default 0.08.
   */
  inwardOffset?: number;
  /**
   * Extra yaw (degrees) added to the inward-facing orientation. Positive rotates CCW when viewed from above.
   */
  yawOffset?: number;
  /**
   * Optional texture URL to apply as a diffuse map to all meshes in the model.
   */
  textureUrl?: string;
  /**
   * Optional brightness multiplier applied via material color.
   * 1 = unchanged, <1 darker, >1 brighter. Default 1.
   */
  textureBrightness?: number;
  /**
   * Multiplier (0..1] that shrinks the generated collider hull toward its centroid. Default 0.9.
   */
  shrink?: number;
  /**
   * Optional tag that will set a boolean flag like `is<Tag>` on the created physics body (e.g., `tag: "toilet"` sets `isToilet`).
   */
  tag?: string;
  /**
   * Half-width of door openings along a wall (meters). Used to avoid placing props across doorways. Default 1.2.
   */
  doorHalf?: number;
  /**
   * Extra margin (meters) on either side of door openings that should remain clear. Default 0.5.
   */
  doorMargin?: number;
  /**
   * Whether meshes cast shadows. Default true.
   */
  castShadow?: boolean;
  /**
   * Whether meshes receive shadows. Default true.
   */
  receiveShadow?: boolean;
  /**
   * If false, no physics body is created (visual-only). Default true.
   */
  collidable?: boolean;
  /**
   * Callback invoked after placement with the created mesh and (optional) physics body.
   */
  onPlaced?: (mesh: THREE.Object3D, body: CANNON.Body | null) => void;
};

// Build a low-poly convex hull collider for a placed model instance.
// - Collects mesh vertices in world space
// - Downsamples and quantizes to reduce point count
// - Computes a convex hull (ConvexGeometry)
// - Converts hull triangles to a CANNON.ConvexPolyhedron
// - Returns a static body positioned at the collider centroid
function buildConvexHullStaticBody(
  world: CANNON.World,
  inst: THREE.Object3D,
  tag?: string,
  shrink = 0.9,
  maxPoints = 300
): CANNON.Body | null {
  inst.updateMatrixWorld(true);
  // Gather points from all meshes
  const pts: THREE.Vector3[] = [];
  const tmp = new THREE.Vector3();
  const pushVertex = (x: number, y: number, z: number, obj: THREE.Object3D) => {
    tmp.set(x, y, z).applyMatrix4((obj as any).matrixWorld);
    pts.push(tmp.clone());
  };
  inst.traverse((o: any) => {
    if (!o || !o.isMesh || !o.geometry) return;
    const g: THREE.BufferGeometry = o.geometry;
    const pos = g.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!pos) return;
    const arr = pos.array as ArrayLike<number>;
    // Sample positions with stride to limit points
    const stride = Math.max(1, Math.floor((arr.length / 3) / maxPoints));
    for (let i = 0; i < pos.count; i += stride) {
      const ix = i * 3;
      pushVertex(arr[ix], arr[ix + 1], arr[ix + 2], o);
    }
  });
  if (pts.length < 4) return null; // not enough for a hull

  // Quantize to collapse near-duplicates
  const quant = 1e-2;
  const map = new Map<string, THREE.Vector3>();
  for (const p of pts) {
    const k = `${Math.round(p.x / quant)},${Math.round(p.y / quant)},${Math.round(p.z / quant)}`;
    if (!map.has(k)) map.set(k, p);
  }
  const uniq = Array.from(map.values());
  if (uniq.length < 4) return null;

  // Compute convex hull geometry
  let hullGeom: THREE.BufferGeometry;
  try {
    const hull = new ConvexGeometry(uniq);
    hullGeom = hull as unknown as THREE.BufferGeometry;
  } catch {
    return null;
  }
  // Extract vertices from hull geometry
  const hPos = hullGeom.getAttribute("position") as THREE.BufferAttribute | undefined;
  if (!hPos) return null;

  // Build unique vertex list and triangular faces
  const verts: THREE.Vector3[] = [];
  const vMap = new Map<string, number>();
  const faces: number[][] = [];
  const key = (x: number, y: number, z: number) => `${x.toFixed(5)},${y.toFixed(5)},${z.toFixed(5)}`;
  for (let i = 0; i < hPos.count; i += 3) {
    const triIdx: number[] = [];
    for (let k = 0; k < 3; k++) {
      const ix = (i + k) * 3;
      const vx = (hPos.array as any)[ix];
      const vy = (hPos.array as any)[ix + 1];
      const vz = (hPos.array as any)[ix + 2];
      const kk = key(vx, vy, vz);
      let vi = vMap.get(kk);
      if (vi === undefined) {
        vi = verts.length;
        verts.push(new THREE.Vector3(vx, vy, vz));
        vMap.set(kk, vi);
      }
      triIdx.push(vi);
    }
    // Ensure triangle winding is consistent; Cannon expects outward winding but hull triangles should already be consistent
    faces.push(triIdx);
  }
  if (verts.length < 4 || faces.length < 4) return null;

  // Compute centroid and optionally shrink toward it to reduce overhangs
  const centroid = verts.reduce((acc, v) => acc.add(v), new THREE.Vector3()).multiplyScalar(1 / verts.length);
  const shrinkClamped = Math.max(0.5, Math.min(1, shrink || 1));
  const cannonVerts = verts.map((v) => {
    const dv = v.clone().sub(centroid).multiplyScalar(shrinkClamped);
    return new CANNON.Vec3(dv.x, dv.y, dv.z);
  });

  const shape = new (CANNON as any).ConvexPolyhedron({ vertices: cannonVerts, faces });
  const body = new CANNON.Body({ mass: 0 });
  body.addShape(shape);
  body.position.set(centroid.x, centroid.y, centroid.z);
  if (tag) (body as any)[`is${tag[0].toUpperCase()}${tag.slice(1)}`] = true;
  world.addBody(body);
  return body;
}

// Picks a point along a room wall (avoiding door openings) and places a single static model there.
/**
 * Place a single prop against one of the room's walls, avoiding door openings.
 * Chooses a random wall and several candidate spans until it finds a valid spot.
 *
 * - Aligns the prop to face inward toward the room (+ `yawOffset`).
 * - Grounds the prop to y=0 using its bounding box min.y.
 * - Optionally creates a static box collider based on the placed model's bounds.
 *
 * @param world The Cannon world to attach a static body (if collidable).
 * @param scene The Three scene to add the mesh to.
 * @param room The room box to place within.
 * @param openings Positions on the room boundary used to represent door centers; used for doorway avoidance.
 * @param opts Placement and model options.
 */
export function placePropAgainstWallOnce(
  world: CANNON.World,
  scene: THREE.Scene,
  room: THREE.Box3,
  openings: THREE.Vector3[],
  opts: PlacePropOpts
) {
  const min = room.min,
    max = room.max;
  const corners = [
    new THREE.Vector3(min.x, 0, min.z),
    new THREE.Vector3(max.x, 0, min.z),
    new THREE.Vector3(max.x, 0, max.z),
    new THREE.Vector3(min.x, 0, max.z),
  ];
  const edges = [
    [corners[0], corners[1]], // south
    [corners[1], corners[2]], // east
    [corners[2], corners[3]], // north
    [corners[3], corners[0]], // west
  ] as const;
  const roomCenter = new THREE.Vector3((min.x + max.x) / 2, 0, (min.z + max.z) / 2);
  const doorHalf = opts.doorHalf ?? 1.2;
  const widthExtra = opts.doorMargin ?? 0.5;
  const epsEdge = 1e-3;
  const startEdge = Math.floor(Math.random() * 4);

  loadModelCached(opts.modelUrl, opts.textureUrl).then((base) => {
    for (let k = 0; k < 4; k++) {
      const [a, b] = edges[(startEdge + k) % 4];
      const dir = new THREE.Vector3().subVectors(b, a);
      const len = dir.length();
      if (len < 0.8) continue;
      const tangent = dir.clone().normalize();
      const n = new THREE.Vector3(dir.z, 0, -dir.x).normalize();
      const mid = a.clone().addScaledVector(tangent, len / 2);
      const toCenter = new THREE.Vector3().subVectors(roomCenter, mid).setY(0).normalize();
      const inward = n.dot(toCenter) > 0 ? n : n.clone().multiplyScalar(-1);
      const wallIsNorth = Math.abs(a.z - max.z) < epsEdge && Math.abs(b.z - max.z) < epsEdge;
      const wallIsSouth = Math.abs(a.z - min.z) < epsEdge && Math.abs(b.z - min.z) < epsEdge;
      const wallIsEast = Math.abs(a.x - max.x) < epsEdge && Math.abs(b.x - max.x) < epsEdge;
      const wallIsWest = Math.abs(a.x - min.x) < epsEdge && Math.abs(b.x - min.x) < epsEdge;
      const badSpans: [number, number][] = [];
      for (const o of openings) {
        if (wallIsNorth && Math.abs(o.z - max.z) < epsEdge) {
          const t = (o.x - a.x) / (b.x - a.x);
          badSpans.push([Math.max(0, t - (doorHalf + widthExtra) / len), Math.min(1, t + (doorHalf + widthExtra) / len)]);
        }
        if (wallIsSouth && Math.abs(o.z - min.z) < epsEdge) {
          const t = (o.x - a.x) / (b.x - a.x);
          badSpans.push([Math.max(0, t - (doorHalf + widthExtra) / len), Math.min(1, t + (doorHalf + widthExtra) / len)]);
        }
        if (wallIsEast && Math.abs(o.x - max.x) < epsEdge) {
          const t = (o.z - a.z) / (b.z - a.z);
          badSpans.push([Math.max(0, t - (doorHalf + widthExtra) / len), Math.min(1, t + (doorHalf + widthExtra) / len)]);
        }
        if (wallIsWest && Math.abs(o.x - min.x) < epsEdge) {
          const t = (o.z - a.z) / (b.z - a.z);
          badSpans.push([Math.max(0, t - (doorHalf + widthExtra) / len), Math.min(1, t + (doorHalf + widthExtra) / len)]);
        }
      }
      const okT = (t: number) => badSpans.every(([lo, hi]) => !(t >= lo && t <= hi));
      for (let tries = 0; tries < 8; tries++) {
        const t = 0.15 + Math.random() * 0.7;
        if (!okT(t)) continue;
        const pos = a.clone().addScaledVector(tangent, t * len);
        const inwardOffset = opts.inwardOffset ?? 0.08;
        pos.add(inward.clone().multiplyScalar(inwardOffset));
        const inst = base.clone(true);
        // Ensure per-instance materials so brightness/other tweaks don't affect cached/shared mats
        inst.traverse((o: any) => {
          if (o && o.isMesh && o.material) {
            if (Array.isArray(o.material)) o.material = o.material.map((m: any) => (m && m.clone ? m.clone() : m));
            else if (o.material.clone) o.material = o.material.clone();
          }
        });
        // Apply normalized target height or explicit scale first
        if (opts.targetHeight && opts.targetHeight > 0) {
          const preBox = new THREE.Box3().setFromObject(inst);
          const preSize = new THREE.Vector3();
          preBox.getSize(preSize);
          const factor = preSize.y > 0 ? opts.targetHeight / preSize.y : 1;
          inst.scale.setScalar(factor);
        }
        if (typeof opts.scale === "number") {
          inst.scale.multiplyScalar(opts.scale);
        } else if (opts.scale && typeof opts.scale === "object") {
          const s: any = opts.scale;
          inst.scale.set(s.x, s.y, s.z);
        }
        // Shadows
        const cast = opts.castShadow ?? true;
        const recv = opts.receiveShadow ?? true;
        const brightness = typeof opts.textureBrightness === "number" ? opts.textureBrightness : 1;
        inst.traverse((o: any) => {
          if (o && o.isMesh) {
            o.castShadow = cast;
            o.receiveShadow = recv;
            if (brightness !== 1 && o.material) {
              const mats = Array.isArray(o.material) ? o.material : [o.material];
              for (const m of mats) {
                if (m && "color" in m && m.color && typeof m.color.multiplyScalar === "function") {
                  m.color.multiplyScalar(brightness);
                  if ("needsUpdate" in m) (m as any).needsUpdate = true;
                }
              }
            }
          }
        });
        const box = new THREE.Box3().setFromObject(inst);
        const minY = box.min.y;
        inst.position.copy(pos);
        inst.position.y -= minY;
        const yaw =
          Math.atan2(inward.x, inward.z) + THREE.MathUtils.degToRad(opts.yawOffset ?? 0);
        inst.rotation.y = yaw;
        scene.add(inst);
        let body: CANNON.Body | null = null;
        if (opts.collidable !== false) {
          body = buildConvexHullStaticBody(world, inst, opts.tag, opts.shrink ?? 0.9);
        }
        if (opts.onPlaced) opts.onPlaced(inst, body);
        return;
      }
    }
    // If we got here, we didn't find a valid spot; still notify if needed with mesh but no body
    if (opts.onPlaced) opts.onPlaced(new THREE.Object3D(), null);
  });
}

// Texture cache and loader
const textureCache = new Map<string, Promise<THREE.Texture>>();
export function loadTextureCached(url: string): Promise<THREE.Texture> {
  const key = url;
  if (!textureCache.has(key)) {
    const abs = new URL(url, import.meta.url).toString();
    const p = new Promise<THREE.Texture>((resolve, reject) => {
      const tl = new THREE.TextureLoader();
      tl.load(
        abs,
        (tex) => {
          try {
            (tex as any).colorSpace = (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
          } catch {}
          resolve(tex);
        },
        undefined,
        (err) => reject(err)
      );
    });
    textureCache.set(key, p);
  }
  return textureCache.get(key)!;
}

export type PlaceAtOpts = PlacePropOpts & {
  position: THREE.Vector3;
  yawDeg?: number; // world yaw in degrees
  y?: number; // override vertical placement (defaults to ground by bbox)
};

// Place a model at a given world position and yaw (degrees). Creates a static collider unless collidable === false.
export function placePropAt(
  world: CANNON.World,
  scene: THREE.Scene,
  opts: PlaceAtOpts
) {
  loadModelCached(opts.modelUrl, opts.textureUrl).then((base) => {
    const inst = base.clone(true);
    // Ensure per-instance materials so brightness/other tweaks don't affect cached/shared mats
    inst.traverse((o: any) => {
      if (o && o.isMesh && o.material) {
        if (Array.isArray(o.material)) o.material = o.material.map((m: any) => (m && m.clone ? m.clone() : m));
        else if (o.material.clone) o.material = o.material.clone();
      }
    });
    // Normalize to target height and custom scale
    if (opts.targetHeight && opts.targetHeight > 0) {
      const preBox = new THREE.Box3().setFromObject(inst);
      const preSize = new THREE.Vector3();
      preBox.getSize(preSize);
      const factor = preSize.y > 0 ? opts.targetHeight / preSize.y : 1;
      inst.scale.setScalar(factor);
    }
    if (typeof opts.scale === "number") inst.scale.multiplyScalar(opts.scale);
    else if (opts.scale && typeof opts.scale === "object") inst.scale.set(opts.scale.x, opts.scale.y, opts.scale.z);

    // Shadows and optional texture
    const cast = opts.castShadow ?? true;
    const recv = opts.receiveShadow ?? true;
    const brightness = typeof opts.textureBrightness === "number" ? opts.textureBrightness : 1;
    inst.traverse((o: any) => {
      if (o && o.isMesh) {
        o.castShadow = cast;
        o.receiveShadow = recv;
        if (brightness !== 1 && o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          for (const m of mats) {
            if (m && "color" in m && m.color && typeof m.color.multiplyScalar === "function") {
              m.color.multiplyScalar(brightness);
              if ("needsUpdate" in m) (m as any).needsUpdate = true;
            }
          }
        }
      }
    });

    // Position and yaw
    // Ground to y=0 unless y override provided
    const box = new THREE.Box3().setFromObject(inst);
    const minY = box.min.y;
    inst.position.copy(opts.position);
    if (typeof opts.y === "number") inst.position.y = opts.y;
    else inst.position.y -= minY;
    const yaw = THREE.MathUtils.degToRad(opts.yawDeg ?? 0) + THREE.MathUtils.degToRad(opts.yawOffset ?? 0);
    inst.rotation.y = yaw;
    scene.add(inst);

    // Collider
    let body: CANNON.Body | null = null;
    if (opts.collidable !== false) {
      body = buildConvexHullStaticBody(world, inst, opts.tag, opts.shrink ?? 0.9);
    }
    if (opts.onPlaced) opts.onPlaced(inst, body);
  });
}

// Place a model adjacent to a reference by specifying offsets along forward/right (derived from yawDeg)
export function placePropAdjacent(
  world: CANNON.World,
  scene: THREE.Scene,
  origin: THREE.Vector3,
  yawDeg: number,
  offsetForward: number,
  offsetRight: number,
  opts: PlacePropOpts & { y?: number }
) {
  const yawRad = THREE.MathUtils.degToRad(yawDeg);
  const F = new THREE.Vector3(Math.sin(yawRad), 0, Math.cos(yawRad));
  const R = new THREE.Vector3(Math.cos(yawRad), 0, -Math.sin(yawRad));
  const pos = origin.clone().addScaledVector(F, offsetForward).addScaledVector(R, offsetRight);
  placePropAt(world, scene, { ...opts, position: pos, yawDeg });
}
