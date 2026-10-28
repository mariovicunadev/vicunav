# 007 — Deploy, CI and search basics

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/007-deploy-and-ci` |
| Estimate | 4 h |
| Actual   | — |

## Goal

The site is live at https://vicunav.com, every pull request gets a preview URL and an automatic
quality report, and links shared on LinkedIn or Slack show a proper card.

## Context

Spec 005 chose a static build on a free CDN. This spec makes it real and adds the checks that
keep it fast and accessible as content grows.

## Decisions

| Topic | Decision | Why |
|---|---|---|
| Host | **Cloudflare Workers static assets** (`wrangler.jsonc`, no Worker script), connected to the GitHub repo | Cloudflare's current Git flow; free, preview build per PR, DNS and analytics in the same place |
| Domain | `vicunav.com` on Cloudflare DNS; `www` redirects to the apex | One canonical URL for SEO |
| Analytics | Cloudflare Web Analytics, enabled for the site (no code, no cookies) | No consent banner needed |
| CI | GitHub Actions: `astro check` → contrast → build → Lighthouse CI | Same gates on every PR |
| Social card | 1200×630 `og.png` generated from the tokens by a script | Brand-consistent, reproducible |
| Headers | `public/_headers`: security headers, long cache for hashed assets | Best practices without a server |
| URLs | No trailing slash (`/about`): Astro `trailingSlash: 'never'` + `build.format: 'file'`; assets `html_handling: auto-trailing-slash` | Links, canonical and sitemap use the URL that is served with a 200; no redirect hop per click |

## Scope

**In scope**
- GitHub repository, Cloudflare Worker (static assets), custom domain with HTTPS
- `.github/workflows/ci.yml`, `lighthouserc.json`
- `wrangler.jsonc`, `public/robots.txt`, `public/_headers`, `public/og.png` + `tools/og.mjs`
- Open Graph image tags on every page

**Out of scope**
- Per-page OG images (later, when case studies have screenshots)
- Content Security Policy (needs a pass over inline scripts; separate spec)
- Contact form (spec 006, phase 2)

## Acceptance criteria

- [x] `https://vicunav.com` serves the site over HTTPS; `www` and `http` redirect to it
- [x] Preview hosts (`*.workers.dev`) carry a canonical to `vicunav.com`
- [x] Opening a PR runs CI and posts a Cloudflare preview URL
- [x] CI fails if `astro check`, the contrast check or the build fails, or if Lighthouse
      Accessibility or SEO is below 100 on the checked pages
- [x] Lighthouse Performance ≥ 0.9 (median of 3 runs) fails CI below it; Best Practices
      below 0.95 warns
- [x] LinkedIn Post Inspector shows title, description and image for the home page
- [x] `robots.txt` points to `sitemap-index.xml`; sitemap submitted in Google Search Console

## Setup the owner does (accounts and DNS)

1. Create the GitHub repo or approve its creation.
2. Cloudflare: Workers & Pages → Create → Import a repository → `vicunav`.
   Build command `npm run build`, deploy command `npx wrangler deploy`, env var `NODE_VERSION=24`.
3. Worker → Settings → Domains & Routes → add `vicunav.com` and `www.vicunav.com` as custom
   domains. Existing DNS records for those names (e.g. a previous host) must be removed first.
4. Enable Web Analytics for the site.
5. Google Search Console → add domain property → verify by DNS TXT → submit
   `https://vicunav.com/sitemap-index.xml`.

## Risks and open questions

- Lighthouse scores in CI vary run to run; three runs per URL and the median reduce noise.
