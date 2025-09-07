
import { defineConfig } from "vite";

export default defineConfig({
  base: "/cat-mouse-hunter/",
  server: {
    open: true,
  },
  build: {
    outDir: "docs",
  },
});
