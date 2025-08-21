import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import mcp from "astro-mcp";

// https://astro.build/config
export default defineConfig({
  site: "https://rigerc.github.io",
  trailingSlash: "ignore",
  integrations: [sitemap(), mdx(), mcp()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});