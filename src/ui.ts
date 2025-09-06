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
  showBanner(html: string) {
    const el = document.getElementById("banner") as HTMLElement | null;
    if (!el) return;
    el.innerHTML = html;
    el.style.display = "block";
  },
  hideBanner() {
    const el = document.getElementById("banner") as HTMLElement | null;
    if (!el) return;
    el.style.display = "none";
  },
};
