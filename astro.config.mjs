import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.itglass.cl',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8
    })
  ]
});
