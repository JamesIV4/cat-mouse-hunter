import { Input } from "./input";

export const UI = {
  setLevel(v: number) {
    const el = document.getElementById("level");
    if (el) el.textContent = String(v);
  },
  setCaught(v: number) {
    const el = document.getElementById("caught");
    if (el) el.textContent = String(v);
  },
  setRequired(v: number) {
    const el = document.getElementById("required");
    if (el) el.textContent = String(v);
  },
  setRemaining(v: number) {
    const el = document.getElementById("remaining");
    if (el) el.textContent = String(v);
  },
  setState(v: string) {
    const el = document.getElementById("state");
    if (el) el.textContent = v;
  },
  setFPS(v: number) {
    const el = document.getElementById("fps");
    if (el) el.textContent = v.toFixed(0);
  },
  setRoomType(v: string) {
    const el = document.getElementById("roomType");
    if (el) el.textContent = v;
  },
  showBanner(html: string) {
    const el = document.getElementById("banner") as HTMLElement | null;
    if (!el) return;
    el.innerHTML = html;
    el.style.display = "block";
    // Attach mobile accept handlers
    if (isMobilePlatform()) {
      const nextBtn = el.querySelector("#nextBtn") as HTMLElement | null;
      const accept = () => {
        bannerAcceptLatched = true;
      };
      if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          accept();
        });
        nextBtn.addEventListener("touchstart", (e) => {
          e.preventDefault();
          e.stopPropagation();
          accept();
        }, { passive: false });
      } else {
        // If no explicit button is provided, allow tapping the banner area
        el.addEventListener("click", accept, { once: true });
        el.addEventListener("touchstart", (e) => { e.preventDefault(); accept(); }, { once: true, passive: false });
      }
    }
  },
  hideBanner() {
    const el = document.getElementById("banner") as HTMLElement | null;
    if (!el) return;
    el.style.display = "none";
  },
};

// Simple mobile detection based on coarse pointer or touch support
function isMobilePlatform() {
  const mq = typeof window !== "undefined" && (window.matchMedia as any) ? window.matchMedia("(pointer: coarse)") : null;
  const coarse = mq ? mq.matches : false;
  const touch = (navigator as any).maxTouchPoints ? (navigator as any).maxTouchPoints > 0 : false;
  return coarse || touch;
}

/**
 * Enable on-screen mobile controls: left thumbstick (appears on touch),
 * right-side Sprint and Jump buttons. Overlay is 70% transparent.
 */
export function enableMobileControls(input: Input) {
  if (!isMobilePlatform()) return;

  // Hide pointer lock hint if present
  const lockHint = document.getElementById("lockHint");
  if (lockHint) lockHint.style.display = "none";

  // Container
  const container = document.createElement("div");
  container.id = "mobileControls";
  container.style.position = "absolute";
  container.style.left = "0";
  container.style.top = "0";
  container.style.right = "0";
  container.style.bottom = "0";
  container.style.pointerEvents = "none"; // let canvas still receive events where we don't capture
  container.style.userSelect = "none";
  container.style.webkitUserSelect = "none" as any;
  container.style.touchAction = "none"; // prevent scrolling/zooming gestures
  container.style.opacity = "0.3"; // 70% transparent overlay
  container.style.zIndex = "5"; // keep below banner

  // Joystick elements (hidden until touch)
  const joyBase = document.createElement("div");
  const joyKnob = document.createElement("div");
  const JOY_RADIUS = 80; // px
  const KNOB_RADIUS = 36; // px
  Object.assign(joyBase.style as any, {
    position: "absolute",
    width: `${JOY_RADIUS * 2}px`,
    height: `${JOY_RADIUS * 2}px`,
    borderRadius: "50%",
    border: "3px solid #fff",
    background: "rgba(255,255,255,0.1)",
    display: "none",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  } as any);
  Object.assign(joyKnob.style as any, {
    position: "absolute",
    width: `${KNOB_RADIUS * 2}px`,
    height: `${KNOB_RADIUS * 2}px`,
    borderRadius: "50%",
    background: "#fff",
    opacity: "0.9",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  } as any);
  joyBase.appendChild(joyKnob);
  container.appendChild(joyBase);

  // Right-side buttons container
  const btnWrap = document.createElement("div");
  Object.assign(btnWrap.style as any, {
    position: "absolute",
    right: "16px",
    bottom: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "center",
    pointerEvents: "auto",
    touchAction: "none",
  } as any);

  function makeButton(label: string) {
    const b = document.createElement("div");
    Object.assign(b.style as any, {
      width: "86px",
      height: "86px",
      borderRadius: "50%",
      background: "#fff",
      color: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: "700",
      boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
      opacity: "0.9",
      pointerEvents: "auto",
      touchAction: "none",
    } as any);
    b.textContent = label;
    return b;
  }

  const sprintBtn = makeButton("Sprint");
  const jumpBtn = makeButton("Jump");
  // Swap placement: Jump above Sprint
  btnWrap.appendChild(jumpBtn);
  btnWrap.appendChild(sprintBtn);
  container.appendChild(btnWrap);

  document.body.appendChild(container);

  // Joystick logic
  let joyTouchId: number | null = null;
  let joyCenterX = 0;
  let joyCenterY = 0;
  // Camera look touch (right side)
  let lookTouchId: number | null = null;
  let lookLastX = 0;
  let lookLastY = 0;

  function updateVirtualStick(dx: number, dy: number) {
    // Convert pixels to -1..1 range within radius
    const len = Math.hypot(dx, dy);
    const clamped = Math.min(len, JOY_RADIUS);
    const nx = len > 0 ? (dx / len) * (clamped / JOY_RADIUS) : 0;
    const ny = len > 0 ? (dy / len) * (clamped / JOY_RADIUS) : 0;
    // Up should be positive for forward
    input.vMoveX = nx;
    input.vMoveY = -ny;
    // Move knob
    (joyKnob.style as any).left = `${50 + nx * (JOY_RADIUS - KNOB_RADIUS)}%`;
    (joyKnob.style as any).top = `${50 + ny * (JOY_RADIUS - KNOB_RADIUS)}%`;
  }

  const onTouchStart = (e: TouchEvent) => {
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      const x = t.clientX;
      const y = t.clientY;
      const leftHalf = x < window.innerWidth * 0.5;
      if (leftHalf && joyTouchId === null) {
        joyTouchId = t.identifier;
        joyCenterX = x;
        joyCenterY = y;
        joyBase.style.left = `${x}px`;
        joyBase.style.top = `${y}px`;
        joyBase.style.display = "block";
        updateVirtualStick(0, 0);
      }
    }
  };
  const onTouchMove = (e: TouchEvent) => {
    // Joystick update
    if (joyTouchId !== null) {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === joyTouchId) {
          const dx = t.clientX - joyCenterX;
          const dy = t.clientY - joyCenterY;
          updateVirtualStick(dx, dy);
          e.preventDefault();
          break;
        }
      }
    }
    // Camera look update
    if (lookTouchId !== null) {
      // Find current position of the look touch from active touches (not just changed)
      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        if (t.identifier === lookTouchId) {
          const dx = t.clientX - lookLastX;
          const dy = t.clientY - lookLastY;
          lookLastX = t.clientX;
          lookLastY = t.clientY;
          // Feed movement into mouse delta for camera control
          const TOUCH_LOOK_SENS = 1.75; // 1.75x more sensitive
          input.mouseDelta.x += dx * TOUCH_LOOK_SENS;
          input.mouseDelta.y += dy * TOUCH_LOOK_SENS;
          e.preventDefault();
          break;
        }
      }
    }
  };
  const endStick = () => {
    joyTouchId = null;
    joyBase.style.display = "none";
    input.vMoveX = 0;
    input.vMoveY = 0;
    joyKnob.style.left = "50%";
    joyKnob.style.top = "50%";
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (joyTouchId !== null) {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === joyTouchId) {
          endStick();
          break;
        }
      }
    }
    if (lookTouchId !== null) {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === lookTouchId) {
          lookTouchId = null;
          break;
        }
      }
    }
  };

  // Buttons logic: sliding activation, visual feedback, multi-touch chords
  const setBtnActive = (btn: HTMLElement, active: boolean) => {
    btn.style.background = active ? "#9ad1ff" : "#fff";
    btn.style.transform = active ? "scale(0.96)" : "scale(1)";
  };
  let rects: { jump: DOMRect; sprint: DOMRect } | null = null;
  const refreshRects = () => {
    rects = {
      jump: jumpBtn.getBoundingClientRect(),
      sprint: sprintBtn.getBoundingClientRect(),
    };
  };
  const pointInRect = (x: number, y: number, r: DOMRect) => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
  const updateButtonsFromTouches = (touches: TouchList, preventEvent?: Event) => {
    if (!rects) refreshRects();
    let run = false;
    let jump = false;
    if (rects) {
      for (let i = 0; i < touches.length; i++) {
        const t = touches[i];
        // Ignore the active camera-look touch when evaluating buttons
        if (lookTouchId !== null && t.identifier === lookTouchId) continue;
        const x = t.clientX;
        const y = t.clientY;
        if (pointInRect(x, y, rects.jump)) jump = true;
        if (pointInRect(x, y, rects.sprint)) run = true;
      }
    }
    input.vRun = run;
    input.vJump = jump;
    setBtnActive(sprintBtn, run);
    setBtnActive(jumpBtn, jump);
    if (preventEvent && (run || jump)) {
      preventEvent.preventDefault();
    }
  };
  window.addEventListener("resize", () => (rects = null));

  // Decide if a right-side touch should control camera look (not on a button, banner hidden)
  const maybeBeginLook = (t: Touch) => {
    if (lookTouchId !== null) return false;
    const x = t.clientX;
    const y = t.clientY;
    const rightHalf = x >= window.innerWidth * 0.5;
    const banner = document.getElementById("banner") as HTMLElement | null;
    const bannerVisible = !!banner && banner.style.display !== "none";
    if (!rightHalf || bannerVisible) return false;
    if (!rects) refreshRects();
    if (rects && (pointInRect(x, y, rects.jump) || pointInRect(x, y, rects.sprint))) return false;
    lookTouchId = t.identifier;
    lookLastX = x;
    lookLastY = y;
    return true;
  };

  // Global listeners (pointerEvents none on container, so bind on document)
  document.addEventListener("touchstart", (e) => {
    onTouchStart(e);
    updateButtonsFromTouches(e.touches, e);
    for (let i = 0; i < e.changedTouches.length; i++) {
      const t = e.changedTouches[i];
      if (maybeBeginLook(t)) {
        e.preventDefault();
      }
    }
  }, { passive: false });
  document.addEventListener("touchmove", (e) => {
    onTouchMove(e);
    updateButtonsFromTouches(e.touches, e);
  }, { passive: false });
  document.addEventListener("touchend", (e) => {
    onTouchEnd(e);
    updateButtonsFromTouches(e.touches);
  }, { passive: false });
  document.addEventListener("touchcancel", (e) => {
    onTouchEnd(e as any);
    updateButtonsFromTouches((e as any).touches || ({} as any));
  }, { passive: false });
}

// Banner acceptance for mobile (tap)
let bannerAcceptLatched = false;
export function consumeBannerAccept() {
  const v = bannerAcceptLatched;
  bannerAcceptLatched = false;
  return v;
}
