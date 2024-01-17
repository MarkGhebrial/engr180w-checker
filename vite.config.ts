import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/engr180w-checker/",
  plugins: [
    react(),
    nodePolyfills({
      include: ["fs", "path"],
    }),
  ],
});
