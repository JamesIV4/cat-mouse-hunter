import { defineConfig } from "vite";

export default defineConfig({
  base: "/cat-mouse-hunter/",
  assetsInclude: ["**/*.fbx", "**/*.obj"],
  server: {
    open: true,
  },
  build: {
    outDir: "docs",
  },
});
