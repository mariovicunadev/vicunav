# 012 — Dual profile: Shopify and WordPress

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/012-dual-profile` |
| Estimate | 2 h |
| Actual   | — |

## Goal

The site presents two profiles at the same depth: Shopify (today's site, unchanged) and
WordPress. A recruiter or client looking for either one lands on a page made for them, with
real work, skills and a CV to match.

## Context

Shopify stays the main niche and the home page. WordPress work comes in from clients and Upwork,
and there is real, live work to show: three client sites designed, built, written and maintained
by Mario, one of them with a custom plugin, two of them on a server he runs on AWS. This spec
sets positioning and information architecture only. Spec 013 changes the content model and
spec 014 builds the pages and case studies. Existing Shopify copy and design do not change.

## Decisions

| Topic | Decision | Why |
|---|---|---|
| General title | **Senior Shopify & WordPress Developer** in `site.role`, `<title>`, meta, footer, CV and LinkedIn | The two keywords recruiters and clients search for. "Full Stack Engineer" reads as backend and cloud and drops the niche |
| Home | `/` stays the Shopify home, copy and design unchanged; one line under the hero CTAs links to `/wordpress` | Shopify is the main niche; no rework, no URL changes |
| WordPress landing | New `/wordpress`, same section order and components as the home | Same depth, no new design |
| Symmetric links | `/shopify` redirects (301) to `/` | Clean pair of links for LinkedIn, Upwork and the CVs |
| Work | One `/work` index with two groups, Shopify and WordPress (`#shopify`, `#wordpress`); all projects use `/work/[project]` | One template, one route |
| Header | Unchanged: Work · Services · Articles · About · Contact | Navigation stays small; both profiles are one click away from Home and Work |
| Footer | Adds links to `/shopify` and `/wordpress` | Either profile reachable from every page |
| Services | Two groups on `/services`: Shopify and WordPress (reviewed together with spec 011) | One offer page; reviewed once |
| About | Skills matrix in three groups: Shopify, WordPress, Shared | Shows what carries across both platforms |
| CVs | Three PDFs: dual at the current URL `/mario-vicuna-cv.pdf`, plus `/mario-vicuna-cv-shopify.pdf` and `/mario-vicuna-cv-wordpress.pdf`. Home links the Shopify CV, `/wordpress` the WordPress CV, About and footer the dual one | Each audience gets the CV that matches the page; old links keep working |
| Client work | WordPress projects are `kind: client`, shown with their live URL, no password and no concept label | They are real client sites, with the clients' permission |

## WordPress positioning

**Headline for `/wordpress`** (provisional, approved 2026-11-03; the owner rewrites it in the
content review): "WordPress sites for local businesses: built, hosted and looked after." The role line
goes under it.

Role line: "WordPress developer. Elementor, custom plugins, local SEO and hosting."

**Proof points** (CV or verifiable, no invented numbers):

- 9+ years in ecommerce, 50+ Shopify and WordPress stores built (CV).
- Three live client sites designed, built, written and maintained: tatipilates.com, bhoga.yoga,
  nelsonlookflash.com.
- A private plugin that runs a Pilates studio: bookings, students, attendance, payments and a
  student portal.
- Two sites moved from shared hosting to a hardened server on AWS that Mario set up and runs.
- Local search results, shown only with dated evidence (screenshots or Search Console).

**Differentiators**

- Whole job in one person: design, copy, build, hosting and maintenance.
- Page builders where they fit (Elementor Pro, Divi, WPBakery, BeTheme), custom PHP where they
  don't.
- Speed and security at the server, not through extra plugins.
- Same process as the Shopify work: spec, pull request, checks before release.

## Audiences

| Audience | Arrives from | Wants to know | Primary action |
|---|---|---|---|
| Recruiter for a WordPress role | LinkedIn, WordPress CV | WordPress depth, PHP, live work | Download the WordPress CV, contact |
| Local business or agency | Upwork, referrals, the sites' footer credit | Can he build, host and maintain my site | Contact with a brief |
| Tech lead | Link from a recruiter | Plugin code quality, security, hosting decisions | Read the Tati Pilates case study |

## Sitemap changes

```
/                    Shopify home (unchanged)
/shopify             301 → /
/wordpress           WordPress landing (new)
/work                Two groups: Shopify · WordPress
/work/[project]      Same template for every project; client projects show the live site
```

**`/wordpress` sections:** hero, proof strip, selected work (the three sites), capabilities
(Page builders · Custom plugins · Local SEO · Hosting · Performance · Maintenance), how I work,
WordPress services, closing CTA.

## Case studies (built in spec 014)

| Project | Base | What it shows |
|---|---|---|
| Tati Pilates (featured, first) | Elementor Pro on Hello Elementor; private plugin; AWS | Conversion landing, local SEO and FAQ schema, the studio plugin (data model, portal, booking rules, encrypted medical data, roles, release pipeline, Elementor dynamic tag), hosting |
| Bhoga Yoga | Elementor Pro on Hello Elementor; AWS | One page for two audiences, local SEO, analytics, hosting |
| Nelson Look Flash | WPBakery | Portfolio by category, booking form, Yoast SEO |

## Content rules for the WordPress profile

- Never name or show the base theme of Nelson Look Flash; describe it as WPBakery work.
- No code from Elementor, WPBakery or any third-party theme. Code excerpts come from the
  plugin repository and stay short (10–25 lines).
- No real student data anywhere: portal screenshots use the plugin's test data on the local site.
- No hosting identifiers: no account ids, IP addresses, user names, key names or costs.
- Search results are claimed only with dated evidence; "near me" results depend on where the
  searcher is, so evidence comes from Search Console or a search made in the city.
- The plugin repository is private; access on request, like the Shopify repositories.

## Amends

- 001: general title and positioning become dual; the Shopify headline and role line stay on `/`.
- 002: sitemap adds `/wordpress` and `/shopify`; Work index gains platform groups; footer gains
  profile links.

## Acceptance criteria

- [x] Owner approves the general title, the `/wordpress` headline and the proof points
- [x] Owner approves the sitemap, navigation and CV decisions
- [x] Specs 001 and 002 note the amendments and link this spec
- [x] `specs/README.md` lists 012, 013 and 014 and the roadmap reflects the new order

## Risks and open questions

- Search result evidence: screenshots from Punto Fijo and San Carlos del Zulia or Search
  Console access, before any claim reaches the site.
- Lighthouse and accessibility pass on the three live sites before they are linked (heading
  outline on bhoga.yoga, image formats on tatipilates.com, page builder updates).
- More WordPress projects may be added later; the structure does not depend on having three.
