# 006 — Launch and channels

| Field    | Value |
|----------|-------|
| Status   | Approved |
| Branch   | `feature/006-launch` |
| Estimate | 4 h |
| Actual   | — |

## Goal

Make the site the hub that LinkedIn, Upwork, GitHub and the CV all point to, with one consistent
message.

## Channel alignment

| Channel | Change | Links to |
|---|---|---|
| CV (PDF) | Add site URL in header; "Selected work" line with 2 case study links | /work |
| LinkedIn | Website field; Featured section with 3 feature pages; headline matches the site | /, features |
| Upwork | Profile overview mirrors /services; portfolio items = feature pages (one per item, with GIF); specialized profile "Shopify Developer" | /services, features |
| GitHub | Profile README with the same one-liner and links; pin public repos | /work |

## Upwork playbook (summary)

- One specialized profile per offer if needed (Theme development · Store build · Performance).
- Every proposal: one sentence on their problem, one linked feature that solved something
  similar, one question about scope. No templates pasted unchanged.
- Start with fixed-price, small-scope jobs (theme fixes, speed audits) to collect reviews,
  then raise rates.

## Content calendar (first month)

Two articles per month, each tied to a shipped feature:

1. Building collections from metafield conditions with the Admin API
2. Design tokens to Shopify theme settings in one command
3. Idempotent store seeding with `productSet`

## Phase 2

- Spanish version (`/es/`) for LatAm clients.
- Contact form (Formspree or Cloudflare Worker).
- Case study videos (30–60 s per store).

## Acceptance criteria

- [ ] Site URL on CV, LinkedIn, Upwork and GitHub
- [ ] 3 feature pages pinned on LinkedIn Featured and Upwork portfolio
- [ ] Analytics running; inquiries tracked by source
