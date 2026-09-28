import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://astplan-website.pages.dev',
  redirects: {
    '/warteliste': '/',
  },
});
