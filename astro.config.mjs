// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vicunav.com',
  // URLs without a trailing slash (/about) served directly from about.html: no redirect hop.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // High-contrast variants: every token passes WCAG AA on the code block surface.
      themes: { light: 'github-light-high-contrast', dark: 'github-dark-high-contrast' },
      defaultColor: false,
    },
  },
});
