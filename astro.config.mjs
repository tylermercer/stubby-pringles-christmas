// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  output: "static",
  session: {
    driver: "memory",
  },
  adapter: cloudflare({
    imageService: 'compile',
    prerenderEnvironment: 'node',
  }),
  integrations: [metaTags()],
});
