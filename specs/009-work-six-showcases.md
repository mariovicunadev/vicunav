# 009 — Work: six showcases

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/009-work-six-showcases` |
| Estimate | 6 h |
| Actual   | — |

> Parts of this spec (Defined scope block, status on cards, feature pages) are superseded by
> spec 010.

## Goal

Work presents six portfolio showcases, all at the same level: Vicubites, Saelle Care, Fjelder,
Ondo Studio, Yuzora Tea House and Kairon Audio. Each one shows in full its features, skills and
expertise, so a recruiter or client can judge any store on its own.

## Context

Today "Commerce Showcase" is one project card with three tooling features. In the source it is five
stores, each with its own niche, base theme and feature set. Specs 002 and 004 still apply.

| Showcase | Niche | Base theme |
| --- | --- | --- |
| Vicubites | Pet food, DTC + B2B | Horizon |
| Saelle Care | Minimal skincare | Ritual |
| Fjelder | Technical outdoor, CAD base | Pitch |
| Ondo Studio | Made-to-order furniture | Dwell |
| Yuzora Tea House | Japanese tea and gifts | Savor |
| Kairon Audio | Headphones and speakers | Tinker |

## Decisions

| Topic | Decision | Why |
|---|---|---|
| Unit of Work | Six independent projects, no grouping and no hub page | Each store stands on its own, like Vicubites |
| Shared tooling | Each store has its own pages for the tooling it uses (tokens, contrast gate, seed, packshots, sample reviews), written with that store's data | Repetition across stores is fine; each page shows its own result |
| Old URLs | `/work/commerce-showcase` and its feature pages redirect (301) to Saelle Care equivalents via `public/_redirects` | No broken links from anything already shared |
| URLs | `/work/saelle-care`, `/work/fjelder`, `/work/ondo-studio`, `/work/yuzora`, `/work/kairon`; features at `/work/<store>/<feature>` | Short, matches store handles |
| Planned features | "Defined scope" block on the project page (see below); no feature page until work starts | Shows planning ability honestly, without thin pages |
| Work index and home | Both list all six as individual cards, ordered by progress | Six showcases visible at once; finished work first |
| Card | Niche, base theme, status, "N built · M defined" | Scope and progress in one glance |

### Defined scope block (planned features)

Planned features appear on their project page as a spec sheet, below the built features:

- Header: `Defined scope · 8 features · 0 built`.
- One row per feature: number, title, surfaces chips, a "Defined" chip.
- Each row is a native `<details>` disclosure: opening it shows the business problem and the
  planned approach in two or three lines, taken from that feature's spec.
- When a feature starts, it moves to the built list and gets its own page (status In progress).
- Planned features never add skills to the About matrix.

This turns an unfinished store into evidence of how the work is scoped (spec first, native Shopify
first), which is something a lead or client wants to see, instead of an empty page.

## Scope

**In scope**
- `src/content.config.ts`: `niche` and `baseTheme` on projects. For planned features, `decision`
  holds the planned approach shown in the Defined scope block.
- Five store entries in `src/content/projects/`, written from each store's specs and the showcase
  register in the source repo. `commerce-showcase.mdx` is removed.
- Saelle Care feature pages for what is built or in progress: design tokens, contrast gate, store
  seed, code-generated packshots, product page from data, content as code, sample reviews.
- Planned features of all six projects as `status: planned` entries rendered in Defined scope.
- `public/_redirects` for the old Commerce Showcase URLs.
- Work index, home "Selected work", project page (Defined scope block), ProjectCard.

**Out of scope**
- Demos (GIFs, screenshots): added when each store is finished
- Copy review for human voice (spec 010)

## Acceptance criteria

- [x] `/work` and the home list six individual showcases, ordered by progress
- [x] Each store page shows niche, base theme, status, built features and Defined scope
- [x] Old `/work/commerce-showcase` URLs redirect with 301 to Saelle Care
- [x] No planned feature has its own page or adds skills to the About matrix; skills missing from
      the About toolbox were added there, unlinked
- [x] Defined scope works without JavaScript (`<details>`), and with keyboard and screen reader
- [x] Every claim traces to a spec or the showcase register in the source repo; concept brands
      labelled "Concept brand — not a client"; no training wording, no invented metrics
- [x] Lighthouse unchanged; `npm run check` and `npm run build` pass

## Risks and open questions

- Four of six showcases are planned. Defined scope and the "N built · M defined" count keep that
  honest; revisit the order once Saelle Care ships.
- Store names and handles may still change before launch (SD-001, SD-009 in the source repo).
