import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  })],
  output: "server",
  adapter: vercel()
});