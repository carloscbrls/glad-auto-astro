import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Glad Auto Sales & Services LLC — Lodi, CA
// Production URL set after first Netlify deploy; update when custom domain is wired.
export default defineConfig({
  site: 'https://gladautosllc.netlify.app',
  integrations: [sitemap()],
});
