import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jve-kitchen-remodeling.keithkelly.dev",
  output: "static",
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "DM Serif Display",
      cssVariable: "--font-display",
      weights: [400],
      styles: ["normal", "italic"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-body",
      weights: [300, 400, 500, 600],
      styles: ["normal"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
});
