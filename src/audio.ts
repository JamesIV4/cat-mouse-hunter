export class Sound {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private unlocked = false
  private buffers: Map<string, AudioBuffer> = new Map()

  private ensure() {
    if (!this.ctx) {
      const AC = (window as any).AudioContext || (window as any).webkitAudioContext
      if (!AC) return
      this.ctx = new AC()
      this.master = this.ctx.createGain()
      this.master.gain.value = 0.6
      this.master.connect(this.ctx.destination)
    }
  }

  resume() {
    this.ensure()
    if (this.ctx && this.ctx.state !== 'running') {
      this.ctx.resume()
    }
    this.unlocked = true
  }

  // Simple boop with a slight pitch up and short decay
  boop() {
    this.ensure()
    if (!this.ctx || !this.master) return
    if (!this.unlocked) return // wait for user interaction
    const t0 = this.ctx.currentTime
    const o = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    o.type = 'sine'
    o.frequency.setValueAtTime(420, t0)
    o.frequency.exponentialRampToValueAtTime(660, t0 + 0.09)
    g.gain.setValueAtTime(0.001, t0)
    g.gain.exponentialRampToValueAtTime(0.2, t0 + 0.01)
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.12)
    o.connect(g)
    g.connect(this.master)
    o.start(t0)
    o.stop(t0 + 0.14)
  }

  private async loadBuffer(url: string): Promise<AudioBuffer | null> {
    this.ensure()
    if (!this.ctx) return null
    if (this.buffers.has(url)) return this.buffers.get(url) as AudioBuffer
    try {
      const res = await fetch(url)
      const arr = await res.arrayBuffer()
      const buf = await this.ctx.decodeAudioData(arr)
      this.buffers.set(url, buf)
      return buf
    } catch {
      return null
    }
  }

  async playSample(relPath: string, volume = 1, rate = 1) {
    this.ensure()
    if (!this.ctx || !this.master) return
    if (!this.unlocked) return
    const url = new URL(relPath, import.meta.url).toString()
    const buf = await this.loadBuffer(url)
    if (!buf) return
    const t0 = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = buf
    src.playbackRate.value = rate
    const g = this.ctx.createGain()
    g.gain.value = volume
    src.connect(g)
    g.connect(this.master)
    src.start(t0)
  }

  // Convenience wrappers
  mouseSqueek() {
    // Slightly quieter to avoid being harsh
    this.playSample("../sfx/mouse-squeek.wav", 0.35, 1)
  }
  mouseDie() {
    this.playSample("../sfx/mouse-die.wav", 0.5, 1)
  }
}
