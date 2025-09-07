import * as THREE from "three";
import { CANNON } from "./physics";

type PuffParticle = {
  body: CANNON.Body;
  sprite: THREE.Sprite;
  life: number; // remaining life in seconds
  total: number; // total life for fade
};

let starTexturePromise: Promise<THREE.Texture> | null = null;
function loadStarTexture(): Promise<THREE.Texture> {
  if (!starTexturePromise) {
    const url = new URL("../imgs/star-cropped.png", import.meta.url).toString();
    starTexturePromise = new Promise((resolve, reject) => {
      new THREE.TextureLoader().load(
        url,
        (tex) => {
          try {
            (tex as any).colorSpace =
              (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
          } catch {}
          resolve(tex);
        },
        undefined,
        (err) => reject(err)
      );
    });
  }
  return starTexturePromise;
}

export class ParticleSystem {
  private particles: PuffParticle[] = [];
  private materialBase: THREE.SpriteMaterial | null = null;
  private maxParticles = 400;
  private warmSprite: THREE.Sprite | null = null;

  constructor(private world: CANNON.World, private scene: THREE.Scene) {
    loadStarTexture().then((tex) => {
      this.materialBase = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthWrite: false,
        opacity: 1,
        // Normal blending to keep star edges readable; change to Additive for glow
        blending: THREE.NormalBlending,
      });
      // If prewarm was requested before texture loaded, honor it now
      if (this._pendingPrewarm) {
        this._pendingPrewarm = false;
        this.prewarm();
      }
    });
  }

  private _pendingPrewarm = false;
  // Pre-buffer the PNG by creating an invisible sprite so the texture is ready on first use
  prewarm() {
    if (this.warmSprite) return;
    if (!this.materialBase) {
      // Defer until texture load completes
      this._pendingPrewarm = true;
      return;
    }
    const mat = this.materialBase.clone();
    mat.opacity = 0; // invisible, but keeps texture and material alive
    const sprite = new THREE.Sprite(mat);
    sprite.renderOrder = -1;
    // Place off to the side; invisible anyway
    sprite.position.set(0, -10, 0);
    sprite.scale.set(0.1, 0.1, 1);
    sprite.visible = true;
    this.scene.add(sprite);
    this.warmSprite = sprite;
  }

  clear() {
    for (const p of this.particles) {
      this.scene.remove(p.sprite);
      (p.sprite.material as THREE.Material).dispose?.();
      this.world.removeBody(p.body);
    }
    this.particles.length = 0;
    if (this.warmSprite) {
      this.scene.remove(this.warmSprite);
      (this.warmSprite.material as THREE.Material).dispose?.();
      this.warmSprite = null;
    }
  }

  spawn(center: THREE.Vector3, count = 16) {
    if (!this.materialBase) return; // texture not ready yet
    // Trim if nearing capacity
    if (this.particles.length >= this.maxParticles) return;

    const remainingCapacity = Math.max(0, this.maxParticles - this.particles.length);
    const n = Math.min(count, remainingCapacity);

    for (let i = 0; i < n; i++) {
      // Per-particle material so we can fade independently
      const mat = this.materialBase.clone();
      mat.opacity = 1;
      const sprite = new THREE.Sprite(mat);
      // Randomize size slightly
      const size = 0.18 + Math.random() * 0.12; // meters
      sprite.scale.set(size, size, 1);
      sprite.position.set(center.x, Math.max(0.1, center.y) + 0.1, center.z);
      this.scene.add(sprite);

      const shape = new CANNON.Sphere(size * 0.25);
      const body = new CANNON.Body({ mass: 0.02, shape });
      body.position.set(sprite.position.x, sprite.position.y, sprite.position.z);
      body.linearDamping = 0.15;
      body.angularDamping = 0.2;
      // Gentle outward burst + upward lift
      const theta = Math.random() * Math.PI * 2;
      const r = 1.0 + Math.random() * 1.0; // 1..2 m/s horizontal
      // Increase upward velocity 5x for a stronger lift
      const up = (1.0 + Math.random() * 1.2) * 5; // ~5..11 m/s upward
      body.velocity.set(Math.sin(theta) * r, up, Math.cos(theta) * r);
      // Small random spin doesn't affect sprite but keeps physics lively
      body.angularVelocity.set((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
      this.world.addBody(body);

      const life = 1.2 + Math.random() * 0.6; // 1.2..1.8s
      this.particles.push({ body, sprite, life, total: life });
    }
  }

  update(dt: number) {
    if (this.particles.length === 0) return;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      // Sync visual to physics
      p.sprite.position.set(p.body.position.x, p.body.position.y, p.body.position.z);
      // Fade out with ease
      const t = Math.max(0, p.life) / p.total;
      const alpha = t * t; // ease-in fade
      (p.sprite.material as THREE.SpriteMaterial).opacity = alpha;
      // Cull if expired or fell far below floor bounds
      if (p.life <= 0 || p.body.position.y < -1 || (p.sprite.material as THREE.SpriteMaterial).opacity <= 0.01) {
        this.scene.remove(p.sprite);
        (p.sprite.material as THREE.Material).dispose?.();
        this.world.removeBody(p.body);
        this.particles.splice(i, 1);
      }
    }
  }
}
