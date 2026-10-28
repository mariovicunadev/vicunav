# CLAUDE.md

Personal site of Mario Vicuña, senior Shopify developer: portfolio (case studies broken down by
feature), services for freelance clients, and articles. Astro 7, static output, plain CSS.

## Commands

- `npm run dev` — dev server on http://localhost:4321 (drafts visible)
- `npm run check` — `astro check` (types, content schemas)
- `npm run build` — static build to `dist/` (drafts excluded)
- `npm run contrast` — WCAG contrast check of the color tokens

## Structure

- `specs/` — one spec per change; start here (`specs/README.md`).
- `src/content.config.ts` — schemas for `projects`, `features`, `articles` (spec 004).
- `src/content/features/<project>/<slug>.mdx` → `/work/<project>/<slug>`.
- `src/data/` — site info, services, experience. Every figure must trace back to the CV.
- `src/styles/tokens.css` — design tokens (spec 003). No raw colors outside this file.

## Rules

- Public content (copy, commits, PRs, specs) presents projects as product work on concept brands.
  Never describe them as training, practice, a course or a sprint.
- No invented metrics. Code excerpts come from the real source and stay short (10–25 lines).
- Horizon-derived theme code is not published; show own code only.
- Accessibility: WCAG 2.2 AA, works without JavaScript, one `h1` per page.
- English copy; plain and specific (spec 001, Voice).
