export class Input {
  keys: Record<string, boolean> = {};
  mouseDelta = { x: 0, y: 0 };
  wheelDelta = 0;
  lockPounce = false;
  sensitivity = 1.0;

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
    return (this.keys["KeyW"] ? 1 : 0) + (this.keys["ArrowUp"] ? 1 : 0);
  }
  get backward() {
    return (this.keys["KeyS"] ? 1 : 0) + (this.keys["ArrowDown"] ? 1 : 0);
  }
  get left() {
    return (this.keys["KeyA"] ? 1 : 0) + (this.keys["ArrowLeft"] ? 1 : 0);
  }
  get right() {
    return (this.keys["KeyD"] ? 1 : 0) + (this.keys["ArrowRight"] ? 1 : 0);
  }
  get jump() {
    return !!this.keys["Space"];
  }
  get run() {
    return !!this.keys["ShiftLeft"] || !!this.keys["ShiftRight"];
  }
  get sneak() {
    return !!this.keys["ControlLeft"] || !!this.keys["ControlRight"];
  }
  get restart() {
    return !!this.keys["KeyR"];
  }
  get next() {
    return !!this.keys["KeyN"];
  }
}
