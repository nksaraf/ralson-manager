import { defineConfig } from "vite";
import react from "vite-preset-react";
import twindJsx from "@twind/vite-plugin-jsx";
import { join, resolve } from "path";

const rendererPath = resolve(__dirname, "./packages/app");
const outDirRenderer = resolve(__dirname, "./app/renderer");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), twindJsx()],
  base: "./",
  root: rendererPath,
  build: {
    outDir: outDirRenderer,
    emptyOutDir: true,
  },
  resolve: {
    alias: [
      {
        find: "@renderer",
        replacement: resolve(__dirname, "packages/app"),
      },
      {
        find: "@common",
        replacement: resolve(__dirname, "packages/common"),
      },
    ],
  },
});
