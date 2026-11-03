# 013 — Content model: platform

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/013-content-model-platform` |
| Estimate | 2 h |
| Actual   | — |

## Goal

Projects can belong to Shopify or WordPress and can be client work, so spec 014 can add the
WordPress case studies by writing content files only.

## Context

Spec 012 adds a WordPress profile with real client sites. Today every project is assumed to be
a Shopify concept store: the project page always shows the store password, surfaces are Shopify
only, and every list shows every project. Amends spec 004.

## Scope

**In scope**
- `projects.platform`: `shopify` | `wordpress`, default `shopify` (existing files unchanged).
- Surfaces for WordPress work: `builder` (Page builder), `plugin` (Custom plugin), `seo` (SEO),
  `hosting` (Hosting). Existing surfaces stay and can be shared (`theme`, `data`, `performance`).
- `getProjects(platform?)`: Home and Work list Shopify projects until spec 014 adds the
  WordPress group; "Next project" stays within the same platform.
- Project page by kind: concept projects keep the concept label and the public password;
  client projects show "Live site", the host and "Visit the site", with no password.
- Project page by platform: the "Base theme" row reads "Built with" on WordPress projects.
- `/shopify` redirects (301) to `/`.

**Out of scope**
- The `/wordpress` page, Work groups, case study content (spec 014).
- Services and About changes (spec 011).

## Acceptance criteria

- [x] Existing six projects render exactly as before (no content file changes)
- [x] A WordPress client project renders with "Live site", no password, no concept label and
      "Built with", and its "Next project" link points to another WordPress project
- [x] Home and Work list only Shopify projects
- [x] `/shopify` returns 301 to `/` in production
- [x] `npm run check` and `npm run build` pass

## Technical approach

`src/content.config.ts` (schema), `src/data/site.ts` (surface labels), `src/lib/content.ts`
(`getProjects` filter), `src/pages/index.astro` and `src/pages/work/index.astro` (Shopify only),
`src/pages/work/[project]/index.astro` (kind and platform conditions, next project),
`public/_redirects`.

## Risks and open questions

- Cloudflare applies `_redirects` only in production; the dev server shows a 404 for `/shopify`.
