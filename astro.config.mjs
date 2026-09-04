import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://dasein16615.github.io',
  author: 'DASEIN1011',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    pagefind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  vite: {
    server: { port: 4000 },
  },
});