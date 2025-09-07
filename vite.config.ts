
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
  },
  optimizeDeps: {
    exclude: ["three", "three/examples/jsm/utils/SkeletonUtils.js"],
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      external: ["three", "three/examples/jsm/utils/SkeletonUtils.js"],
    },
  },
});
