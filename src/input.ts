export class Input {
  keys: Record<string, boolean> = {};
  mouseDelta = { x: 0, y: 0 };
  wheelDelta = 0;
  lockPounce = false;
  sensitivity = 1.0;

  // Gamepad state
  gpIndex: number = -1;
  gpDeadzone = 0.2;
  gpMoveX = 0; // left stick x (-1..1)
  gpMoveY = 0; // left stick y (-1..1, up positive)
  gpPrevButtons: boolean[] = [];
  padRestart = false;
  padNext = false;
  padAccept = false; // A button edge

  constructor(private dom: HTMLElement | Document = document) {
    this.bind();
  }

  bind() {
    this.dom.addEventListener("keydown", (e: KeyboardEvent) => {
      this.keys[e.code] = true;
      // Prevent browser scroll/shortcuts for movement keys
      if (
        [
          "KeyW",
          "KeyA",
          "KeyS",
          "KeyD",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "Space",
        ].includes(e.code)
      )
        e.preventDefault();
    });
    this.dom.addEventListener("keyup", (e: KeyboardEvent) => {
      this.keys[e.code] = false;
      if (e.code === "KeyE") this.lockPounce = true;
    });
    window.addEventListener("mousemove", (e: MouseEvent) => {
      this.mouseDelta.x += e.movementX;
      this.mouseDelta.y += e.movementY;
    });
    window.addEventListener(
      "wheel",
      (e: WheelEvent) => {
        this.wheelDelta += Math.sign(e.deltaY);
      },
      { passive: true }
    );

    // Gamepad connect/disconnect
    window.addEventListener('gamepadconnected', (e: any) => {
      const gp = e.gamepad as Gamepad;
      if (this.gpIndex < 0) this.gpIndex = gp.index;
    });
    window.addEventListener('gamepaddisconnected', (e: any) => {
      const gp = e.gamepad as Gamepad;
      if (this.gpIndex === gp.index) this.gpIndex = -1;
    });
  }

  consumeMouseDelta() {
    const d = { ...this.mouseDelta };
    this.mouseDelta.x = 0;
    this.mouseDelta.y = 0;
    return d;
  }

  consumeWheelDelta() {
    const d = this.wheelDelta;
    this.wheelDelta = 0;
    return d;
  }

  consumeLockPounce() {
    const v = this.lockPounce;
    this.lockPounce = false;
    return v;
  }

  get forward() {
    return (
      (this.keys["KeyW"] ? 1 : 0) +
      (this.keys["ArrowUp"] ? 1 : 0) +
      Math.max(0, this.gpMoveY)
    );
  }
  get backward() {
    return (
      (this.keys["KeyS"] ? 1 : 0) +
      (this.keys["ArrowDown"] ? 1 : 0) +
      Math.max(0, -this.gpMoveY)
    );
  }
  get left() {
    return (
      (this.keys["KeyA"] ? 1 : 0) +
      (this.keys["ArrowLeft"] ? 1 : 0) +
      Math.max(0, -this.gpMoveX)
    );
  }
  get right() {
    return (
      (this.keys["KeyD"] ? 1 : 0) +
      (this.keys["ArrowRight"] ? 1 : 0) +
      Math.max(0, this.gpMoveX)
    );
  }
  get jump() {
    return !!this.keys["Space"] || this.isPadButton(0); // A
  }
  get run() {
    const btn = this.getPadButtonValue(7) > 0.5 || this.isPadButton(5); // RT or RB
    return !!this.keys["ShiftLeft"] || !!this.keys["ShiftRight"] || btn;
  }
  get sneak() {
    const btn = this.getPadButtonValue(6) > 0.5 || this.isPadButton(4); // LT or LB
    return !!this.keys["ControlLeft"] || !!this.keys["ControlRight"] || btn;
  }
  get restart() {
    return !!this.keys["KeyR"] || this.padRestart; // Select/Back
  }
  get next() {
    return !!this.keys["KeyN"] || this.padNext; // Start
  }

  // Poll gamepad and update inputs
  updateGamepad(dt: number = 0) {
    const pads = (navigator as any).getGamepads ? (navigator as any).getGamepads() as (Gamepad | null)[] : [];
    let gp: Gamepad | null = null;
    if (this.gpIndex >= 0) gp = pads[this.gpIndex] || null;
    if (!gp) {
      for (const p of pads) { if (p) { gp = p; this.gpIndex = p.index; break; } }
    }
    if (!gp) return;

    const ax = gp.axes || [];
    const dz = this.gpDeadzone;
    const dead = (v: number) => {
      if (Math.abs(v) < dz) return 0;
      return (v - Math.sign(v) * dz) / (1 - dz);
    };
    const lx = dead(ax[0] || 0);
    const ly = dead(ax[1] || 0);
    const rx = dead(ax[2] || 0);
    const ry = dead(ax[3] || 0);
    this.gpMoveX = lx;
    this.gpMoveY = -ly; // up positive

    // Camera look from right stick
    const lookScale = 25 * this.sensitivity; // tuned for pad
    this.mouseDelta.x += rx * lookScale;
    this.mouseDelta.y += ry * lookScale;

    // Zoom via dpad up/down
    const up = this.isPadButton(12);
    const down = this.isPadButton(13);
    if (up) this.wheelDelta -= 1;
    if (down) this.wheelDelta += 1;

    // Pounce lock (X/B) edge trigger
    const xBtn = this.justPressed(2) || this.justPressed(1);
    if (xBtn) this.lockPounce = true;

    // Restart/Next via Back/Start edge
    this.padRestart = this.justPressed(8);
    this.padNext = this.justPressed(9);
    // Accept/Advance via A edge
    this.padAccept = this.justPressed(0);

    // Save prev buttons
    this.gpPrevButtons = (gp.buttons || []).map(b => (typeof b === 'object' ? (b as any).pressed : !!b));
  }

  private isPadButton(index: number) {
    const pads = (navigator as any).getGamepads ? (navigator as any).getGamepads() as (Gamepad | null)[] : [];
    const gp = (this.gpIndex >= 0) ? (pads[this.gpIndex] || null) : null;
    if (!gp) return false;
    const b = gp.buttons && gp.buttons[index];
    if (!b) return false;
    return (typeof b === 'object') ? (b as any).pressed : !!b;
  }
  private getPadButtonValue(index: number) {
    const pads = (navigator as any).getGamepads ? (navigator as any).getGamepads() as (Gamepad | null)[] : [];
    const gp = (this.gpIndex >= 0) ? (pads[this.gpIndex] || null) : null;
    if (!gp) return 0;
    const b = gp.buttons && gp.buttons[index];
    if (!b) return 0;
    return (typeof b === 'object') ? ((b as any).value ?? ((b as any).pressed ? 1 : 0)) : (b ? 1 : 0);
  }
  private justPressed(index: number) {
    const pads = (navigator as any).getGamepads ? (navigator as any).getGamepads() as (Gamepad | null)[] : [];
    const gp = (this.gpIndex >= 0) ? (pads[this.gpIndex] || null) : null;
    if (!gp) return false;
    const b = gp.buttons && gp.buttons[index];
    const pressedNow = (typeof b === 'object') ? (b as any).pressed : !!b;
    const prev = this.gpPrevButtons[index] || false;
    return pressedNow && !prev;
  }

  consumePadAccept() {
    const v = this.padAccept;
    this.padAccept = false;
    return v;
  }
}
