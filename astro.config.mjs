import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL;
export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  // The stylesheet is small, so it goes inline and the page needn't wait for a second file.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: site ? [sitemap()] : [],
});
