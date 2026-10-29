// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/** Wraps each code block in an app-window frame titled by its `title="…"` meta (spec 008). */
/** @type {import('shiki').ShikiTransformer} */
const windowFrame = {
  name: 'window-frame',
  root(root) {
    const title = this.options.meta?.__raw?.match(/title="([^"]+)"/)?.[1];
    const label = title ?? (/^(ba|z)?sh$/.test(this.options.lang) ? 'terminal' : this.options.lang);
    root.children = [
      {
        type: 'element',
        tagName: 'figure',
        properties: { className: ['window'] },
        children: [
          {
            type: 'element',
            tagName: 'figcaption',
            properties: { className: ['window__bar'] },
            children: [
              { type: 'element', tagName: 'span', properties: { className: ['window__dots'], ariaHidden: 'true' }, children: [] },
              { type: 'element', tagName: 'span', properties: {}, children: [{ type: 'text', value: label }] },
            ],
          },
          // Shiki's root holds only the <pre> element.
          .../** @type {import('hast').ElementContent[]} */ (root.children),
        ],
      },
    ];
  },
};

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
      transformers: [windowFrame],
    },
  },
});
