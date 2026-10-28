# 001 — Positioning, audiences and goals

| Field    | Value |
|----------|-------|
| Status   | Approved |
| Branch   | `feature/001-positioning` |
| Estimate | 3 h |
| Actual   | — |

## Goal

Define who the site is for, what each visitor must believe after 30 seconds, and what action
we want from them. Every page and every piece of copy is checked against this spec.

## Positioning

**One line:** Senior Shopify developer who ships the whole stack: themes, apps, checkout and
headless storefronts, with a documented, spec-driven process.

**Headlines** (approved 2026-10-28: 1 is the home `h1`, 2 is the role line under it; 3 rejected):

1. "Shopify stores that load fast, sell more and are easy to change."
2. "Senior Shopify developer. Themes, apps, checkout and Hydrogen."
3. "I build the Shopify features your theme doesn't have."

**Proof points** (from real work history, no invented numbers):

- 9+ years in ecommerce, 50+ Shopify and WordPress stores shipped.
- Load times cut by 35 % on average through Core Web Vitals work (Trafilea Group).
- +15 % Facebook ad ROAS from mobile-first A/B testing (Trafilea Group).
- Magento → Shopify migrations with zero downtime (Redstage).
- Every portfolio feature ships with a spec, a PR and a self review: the process is visible.

**Differentiators:**

- Full Shopify surface: Online Store 2.0 themes, embedded apps, Functions and checkout
  extensions, Hydrogen.
- Native first: uses what Shopify already ships (Search & Discovery, Subscriptions, Markets,
  B2B) and builds only where it is missing.
- Data as code: catalogs, metafields, metaobjects and brand settings rebuilt from a repo.
- AI-assisted delivery with engineering discipline (specs, reviews, checks).
- Bilingual (Spanish native, English C1): serves US, EU and LatAm clients.

## Audiences

| Audience | Arrives from | Has | Wants to know | Primary action |
|---|---|---|---|---|
| **Recruiter / hiring manager** | LinkedIn, job application, CV link | 30–90 s | Seniority, stack match, communication, availability | Download CV, book a call, email |
| **Tech lead (interview loop)** | Link from recruiter | 5–15 min | Code quality, decisions, trade-offs | Read a case study, open a code excerpt or repo |
| **Freelance client** (merchant, agency) | Upwork profile, referrals, search | 1–3 min | Can he solve *my* problem, how much, how fast, is he reliable | Contact with a project brief |
| **Peer developer** | Articles, search, social | Variable | A specific technical answer | Read, share, follow |

## Goals and success metrics

| Goal | Metric | Target (first 90 days) |
|---|---|---|
| Land a full-time role | Interview requests attributed to the site | 5+ |
| Win freelance work | Qualified inquiries (form or email with a brief) | 2+ per month |
| Support Upwork proposals | Proposals that link a case study or feature page | 100 % |
| Build authority | Articles published | 2 per month |
| Technical quality | Lighthouse (mobile) on every template | Performance ≥ 95, Accessibility 100, SEO 100 |

## Voice

- Plain, specific, confident. Short sentences. Verbs over adjectives.
- Show outcomes before tools: "Shoppers pick a delivery frequency without leaving the product
  page" before "selling plans with a custom picker".
- No buzzwords ("passionate", "ninja", "cutting-edge"), no claims without proof.
- English first. Spanish version is phase 2 (spec 006).

**Examples**

- ✅ "Cut average load time by 35 % across a portfolio of DTC stores."
- ❌ "Passionate developer delivering blazing-fast experiences."
- ✅ "Built with Shopify Subscriptions and a custom picker; works without JavaScript."

## Keeping it current

Skills are not listed by hand: each feature page declares the skills it proves, and the About
page builds its "Skills, with proof" matrix from them. Shipping a feature updates the site; a
skill with no feature behind it stays in the CV toolbox only.

## Public-content rule

Nothing on the site, in the repo, commits or PRs presents the work as training, a course,
a sprint or practice. Projects are presented as product work on concept brands, which is what
they are. Concept brands are labelled as such ("Concept brand — not a client").

## Acceptance criteria

- [x] Owner picks a headline and approves the proof points
- [ ] Each audience has one clear primary CTA reachable from the home page in one click
- [ ] Every number on the site traces back to the CV or a measured result

## Risks and open questions

- **Availability wording**: "Open to full-time remote roles and select freelance projects" —
  confirm with owner.
- **Location and time zone**: show "Venezuela · UTC−4, overlaps US business hours"? Confirm.
- **Rates**: show starting prices on Services or "from US$X"? Recommendation: hourly range
  and fixed-price packages with "from", aligned with Upwork.
