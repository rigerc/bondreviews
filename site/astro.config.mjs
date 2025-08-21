import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: "https://rigerc.github.io",
  base: "/bondreviews",
  trailingSlash: "ignore",
  integrations: [sitemap(), mdx(), relativeLinks()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});