# 002 — Information architecture

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/002-information-architecture` |
| Estimate | 4 h |
| Actual   | — |

## Goal

A small site with three content engines (work, services, articles) where every page has one
job and one primary call to action.

## Sitemap

```
/                              Home
/work                          All projects
/work/[project]                Case study (overview + feature index)
/work/[project]/[feature]      Feature showcase (one capability, deep dive)
/services                      Freelance offer: services, packages, process, FAQ
/articles                      Article index (filter by tag)
/articles/[slug]               Article
/articles/tags/[tag]           Tag archive
/about                         Bio, experience, skills matrix, CV download
/contact                       Contact options + project brief guidance
/rss.xml, /sitemap-index.xml   Feeds
/404
```

## Navigation

- Header: Work · Services · Articles · About · **Contact** (button).
- Footer: email, LinkedIn, GitHub, Upwork, RSS, CV (PDF), availability line.

## Page jobs

| Page | Job | Primary CTA | Secondary CTA |
|---|---|---|---|
| Home | Prove seniority in one scroll, route each audience | Book a call / email | See work |
| Work index | Show breadth: which Shopify surfaces I cover | Open a case study | — |
| Case study | Context → approach → features → results → process | Contact | Next project |
| Feature | Problem → demo → decision → code → quality evidence | Next feature | Contact |
| Services | Turn a client problem into a scoped engagement | Contact with a brief | Upwork profile |
| Articles | Authority, search traffic | Read related work | RSS |
| About | Trust: history, how I work, skills matrix | Download CV | Contact |
| Contact | Remove friction | Email | LinkedIn / Upwork |

## Home page sections (top to bottom)

1. **Hero**: headline, one-line sub, availability, CTAs (Contact, See work).
2. **Proof strip**: 4 numbers from the CV.
3. **Selected work**: 2–3 featured case studies.
4. **Capabilities**: Shopify surfaces matrix (Themes · Apps · Checkout & Functions · Headless ·
   Data & automation · Performance).
5. **How I work**: spec → build → review → ship, each step with its artifact.
6. **Services teaser**: 3 most requested services → /services.
7. **Latest articles**: 3 newest.
8. **Closing CTA**.

## Feature showcase structure (the core recruiting asset)

Each feature page follows the same five blocks so a recruiter scans it in seconds and a tech
lead can go deep:

1. **Problem** — one business sentence.
2. **Demo** — GIF/video or annotated screenshots, mobile and desktop.
3. **Decision** — 1–2 lines on why this approach (and what was rejected).
4. **Code** — 10–25 lines of own code with a link to the source when public.
5. **Quality** — spec link, PR, checks run, metric.

## Acceptance criteria

- [x] Every page in the sitemap exists and is linked from navigation or its parent
- [x] Each page has a unique `<title>` and meta description
- [x] Breadcrumbs on case study and article pages (feature pages removed in spec 010)
- [x] ~~Prev/next navigation between features~~ superseded by spec 010: features are rows on the project page
