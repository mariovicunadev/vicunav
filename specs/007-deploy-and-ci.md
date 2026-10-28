# 007 — Deploy, CI and search basics

| Field    | Value |
|----------|-------|
| Status   | In progress |
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
| Host | **Cloudflare Pages**, connected to the GitHub repo | Free, unlimited bandwidth, preview deploy per PR, DNS and analytics in the same place |
| Domain | `vicunav.com` on Cloudflare DNS; `www` redirects to the apex | One canonical URL for SEO |
| Analytics | Cloudflare Web Analytics, enabled in the Pages project (no code, no cookies) | No consent banner needed |
| CI | GitHub Actions: `astro check` → contrast → build → Lighthouse CI | Same gates on every PR |
| Social card | 1200×630 `og.png` generated from the tokens by a script | Brand-consistent, reproducible |
| Headers | `public/_headers`: security headers, long cache for hashed assets | Best practices without a server |

## Scope

**In scope**
- GitHub repository, Cloudflare Pages project, custom domain with HTTPS
- `.github/workflows/ci.yml`, `lighthouserc.json`
- `public/robots.txt`, `public/_headers`, `public/og.png` + `tools/og.mjs`
- Open Graph image tags on every page

**Out of scope**
- Per-page OG images (later, when case studies have screenshots)
- Content Security Policy (needs a pass over inline scripts; separate spec)
- Contact form (spec 006, phase 2)

## Acceptance criteria

- [ ] `https://vicunav.com` serves the site over HTTPS; `www` and `*.pages.dev` redirect or are not indexed
- [ ] Opening a PR runs CI and posts a Cloudflare preview URL
- [ ] CI fails if `astro check`, the contrast check or the build fails, or if Lighthouse
      Accessibility or SEO is below 100 on the checked pages
- [ ] Lighthouse Performance ≥ 0.9 (error) and ≥ 0.95 (warning) on the checked pages
- [ ] LinkedIn Post Inspector shows title, description and image for the home page
- [ ] `robots.txt` points to `sitemap-index.xml`; sitemap submitted in Google Search Console

## Setup the owner does (accounts and DNS)

1. Create the GitHub repo or approve its creation.
2. Cloudflare: Workers & Pages → Create → Pages → Connect to Git → pick the repo.
   Build command `npm run build`, output `dist`, env var `NODE_VERSION=24`.
3. Pages project → Custom domains → add `vicunav.com` and `www.vicunav.com`.
   If the domain is registered elsewhere, change its nameservers to the two Cloudflare gives.
4. Pages project → Metrics → enable Web Analytics.
5. Google Search Console → add domain property → verify by DNS TXT → submit
   `https://vicunav.com/sitemap-index.xml`.

## Risks and open questions

- Lighthouse scores in CI vary run to run; three runs per URL and the median reduce noise.
