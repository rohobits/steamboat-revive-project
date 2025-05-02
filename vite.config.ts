// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use sub-folder only in production builds:
  base: mode === "production" ? "/steamboat-revive-project/" : "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // only tag components in dev
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "docs", // for GitHub Pages
  },
}));
