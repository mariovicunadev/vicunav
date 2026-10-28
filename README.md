# mariovikuna

Personal site of Mario Vicuña, senior Shopify developer: case studies, services and articles.

Built with [Astro](https://astro.build), static output, no client framework.

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # types and content schemas
npm run build     # static site in dist/
npm run contrast  # WCAG check of the color tokens
```

## Adding content

| Content | File | URL |
|---|---|---|
| Project | `src/content/projects/<slug>.mdx` | `/work/<slug>` |
| Feature | `src/content/features/<project>/<slug>.mdx` | `/work/<project>/<slug>` |
| Article | `src/content/articles/<slug>.mdx` (`draft: true` to hide in production) | `/articles/<slug>` |

Schemas and required fields: [`src/content.config.ts`](src/content.config.ts) and
[spec 004](specs/004-content-model.md). Every change starts as a spec in [`specs/`](specs/).
