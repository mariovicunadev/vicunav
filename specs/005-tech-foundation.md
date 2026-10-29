# 005 — Technical foundation

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/005-tech-foundation` |
| Estimate | 5 h |
| Actual   | — |

## Goal

A static, very fast Astro site that is cheap to host, easy to write for and safe to change.

## Decisions

| Topic | Decision | Why |
|---|---|---|
| Framework | Astro 7, static output | Zero JS by default; content collections; MDX |
| Styling | Plain CSS + custom-property tokens, scoped component styles | No build dependency, full control, small CSS |
| Fonts | `@fontsource-variable` self-hosted, `font-display: swap` | No third-party requests, privacy, performance |
| Content | MDX in content collections, Zod schemas | Type-safe, reviewable in PRs |
| Code highlighting | Shiki (built in), dual theme | No client JS |
| Images | `astro:assets` (`<Image>`, WebP/AVIF, width/height) | CLS 0, responsive |
| SEO | Per-page title/description, canonical, Open Graph, JSON-LD `Person` + `Article`, sitemap, RSS | Recruiter and search visibility |
| Hosting | Cloudflare Pages or Vercel (static) | Free tier, global CDN, preview deploys per PR |
| Analytics | Cloudflare Web Analytics or Plausible (cookie-less) | No consent banner needed |
| Contact | `mailto:` + optional form service in phase 2 | No backend |
| Quality | `astro check`, build, Lighthouse CI budgets in GitHub Actions | Visible engineering standard |

## Performance budget

- JS shipped on content pages: ≤ 5 KB (theme toggle only).
- LCP < 1.5 s on 4G mobile, CLS 0, total page weight < 300 KB excluding demo media.

## Acceptance criteria

- [x] Project scaffolded, dev server runs
- [x] `npm run check` (astro check) passes with 0 errors
- [x] `npm run build` produces static output with sitemap and RSS
- [x] GitHub Actions: check + build + Lighthouse CI on every PR
- [x] Deployed with a custom domain and HTTPS

## Decisions log

- 2026-10-28 — Domain: **vicunav.com** (`site` in `astro.config.mjs`).
