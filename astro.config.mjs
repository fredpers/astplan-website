import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ramosmap.com',
  // Emit dist/404.html (not 404/index.html) so Cloudflare Pages serves it with a real 404 status.
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Exclude the 404 page and redirect stubs from the sitemap.
      filter: (page) => !/\/404\/?$/.test(page) && !/\/warteliste\/?$/.test(page),
    }),
  ],
  redirects: {
    '/warteliste': '/',
  },
});
