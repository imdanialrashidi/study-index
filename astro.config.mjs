import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical production origin for study.danialrashidi.ir.
// Keep root output (no base path) so the static build is portable
// to GitHub Pages (custom domain) and Cloudflare Pages alike.
export default defineConfig({
  site: "https://study.danialrashidi.ir",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
