# 014 — WordPress landing and case studies

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/014-wordpress-profile` |
| Estimate | 6 h |
| Actual   | — |

## Goal

Ship the WordPress profile decided in spec 012: a `/wordpress` page at the same depth as the
home page, the WordPress group on `/work` and three client case studies with feature rows.

## Context

Spec 012 set positioning and information architecture; spec 013 added `platform`, client
projects and `/shopify`. This spec is pages and content. Shopify copy and design stay as they
are; the only home change is one line linking to `/wordpress`.

## Scope

**In scope**
- General title "Senior Shopify & WordPress Developer" in `site.role`, `site.title` and the
  default description; footer prompt and profile links (`/shopify`, `/wordpress`).
- Three CVs in `public/`: dual at `/mario-vicuna-cv.pdf`, plus Shopify and WordPress versions.
  Home links the Shopify CV, `/wordpress` the WordPress CV, About and footer the dual one.
- Home: one line under the hero actions linking to `/wordpress`. The page styles move to a
  shared stylesheet so `/wordpress` reuses them unchanged.
- `/wordpress`: hero, proof strip, selected work, capabilities, WordPress services, how I work,
  closing CTA.
- `/work`: one `h1`, then a Shopify group (current copy) and a WordPress group, with anchors
  `#shopify` and `#wordpress`.
- Case studies, `kind: client`: Tati Pilates (featured, with the studio plugin and hosting),
  Bhoga Yoga and Nelson Look Flash, each with feature rows.

**Out of scope**
- `/services` groups and the About skills groups (spec 011 review).
- Demo images and GIFs (added with the demos at launch).
- Search ranking claims, until there is dated evidence (spec 012).

## Acceptance criteria

- [x] `/wordpress` renders every section, has one `h1` and links the WordPress CV
- [x] `/work` shows both groups; Shopify group copy and password unchanged
- [x] The three case studies render as client projects with "Built with" and "Visit the site"
- [x] Code excerpts come from the plugin repository or the server configuration, 10–25 lines,
      with no hosting identifiers
- [x] No base theme name for Nelson Look Flash, no student data, no ranking claims
- [x] Home differs from `main` only by the `/wordpress` line and the Shopify CV link
- [x] `npm run check`, `npm run contrast` and `npm run build` pass

## Technical approach

`src/data/site.ts`, `src/data/services.ts` (`wordpressServices`), `src/styles/profile.css`,
`src/pages/index.astro`, `src/pages/wordpress.astro`, `src/pages/work/index.astro`,
`src/components/Footer.astro`, `src/content/projects/*.mdx`, `src/content/features/<project>/`.

## Risks and open questions

- The `/wordpress` headline and copy are provisional; the owner rewrites them in the content review.
- The plugin repository is private: excerpts link nowhere and the source reads "Read access on
  request".
