// Pre-resolve SFX asset URLs so Vite includes them in the build
const SFX_MOUSE_SQUEEK = new URL(
  "../sfx/mouse-squeek.wav",
  import.meta.url
).toString();
const SFX_MOUSE_DIE = new URL(
  "../sfx/mouse-die.wav",
  import.meta.url
).toString();
const SFX_CAT_TRILL = new URL(
  "../sfx/cat-trill.wav",
  import.meta.url
).toString();
const SFX_CAT_PURR = new URL("../sfx/cat-pur.wav", import.meta.url).toString();

export class Sound {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private unlocked = false;
  private buffers: Map<string, AudioBuffer> = new Map();
  private loopSrc: {
    key: string;
    src: AudioBufferSourceNode;
    gain: GainNode;
  } | null = null;

  private ensure() {
    if (!this.ctx) {
      const AC =
        (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.6;
      this.master.connect(this.ctx.destination);
    }
  }

  resume() {
    this.ensure();
    if (this.ctx && this.ctx.state !== "running") {
      this.ctx.resume();
    }
    this.unlocked = true;
  }

  // Simple boop with a slight pitch up and short decay
  boop() {
    this.ensure();
    if (!this.ctx || !this.master) return;
    if (!this.unlocked) return; // wait for user interaction
    const t0 = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(420, t0);
    o.frequency.exponentialRampToValueAtTime(660, t0 + 0.09);
    g.gain.setValueAtTime(0.001, t0);
    g.gain.exponentialRampToValueAtTime(0.2, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12);
    o.connect(g);
    g.connect(this.master);
    o.start(t0);
    o.stop(t0 + 0.14);
  }

  private async loadBuffer(url: string): Promise<AudioBuffer | null> {
    this.ensure();
    if (!this.ctx) return null;
    if (this.buffers.has(url)) return this.buffers.get(url) as AudioBuffer;
    try {
      const res = await fetch(url);
      const arr = await res.arrayBuffer();
      const buf = await this.ctx.decodeAudioData(arr);
      this.buffers.set(url, buf);
      return buf;
    } catch {
      return null;
    }
  }

  async playSample(relPath: string, volume = 1, rate = 1) {
    this.ensure();
    if (!this.ctx || !this.master) return;
    if (!this.unlocked) return;
    const url = new URL(relPath, import.meta.url).toString();
    const buf = await this.loadBuffer(url);
    if (!buf) return;
    const t0 = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    const g = this.ctx.createGain();
    g.gain.value = volume;
    src.connect(g);
    g.connect(this.master);
    src.start(t0);
  }

  // Convenience wrappers
  mouseSqueek() {
    // Slightly quieter to avoid being harsh
    this.playSample(SFX_MOUSE_SQUEEK, 0.45, 1);
  }
  mouseDie() {
    this.playSample(SFX_MOUSE_DIE, 1, 1);
  }

  // New: cat sounds
  catTrill() {
    this.playSample(SFX_CAT_TRILL, 0.12, 1);
  }

  async startCatPurr(volume = 0.45) {
    this.ensure();
    if (!this.ctx || !this.master) return;
    if (!this.unlocked) return;
    // If already looping purr, just adjust volume
    if (this.loopSrc && this.loopSrc.key === "cat-purr") {
      this.loopSrc.gain.gain.value = volume;
      return;
    }
    const buf = await this.loadBuffer(SFX_CAT_PURR);
    if (!buf) return;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const g = this.ctx.createGain();
    g.gain.value = volume;
    src.connect(g);
    g.connect(this.master);
    src.start();
    this.loopSrc = { key: "cat-purr", src, gain: g };
  }

  stopCatPurr() {
    if (!this.ctx || !this.loopSrc) return;
    try {
      this.loopSrc.src.stop();
    } catch {}
    try {
      this.loopSrc.src.disconnect();
      this.loopSrc.gain.disconnect();
    } catch {}
    this.loopSrc = null;
  }
}
