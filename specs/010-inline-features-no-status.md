# 010 — Features inline, no status, open stores

| Field    | Value |
|----------|-------|
| Status   | In progress |
| Branch   | `feature/010-inline-features-no-status` |
| Estimate | 4 h |
| Actual   | — |

## Goal

Each work reads as finished product work: every feature explained on the project page itself,
no progress reporting anywhere, and every store open to visitors with one public password.

## Context

The site goes public when the work is ready; any project not ready by then is removed instead of
being labelled. Progress (shipped, in progress, planned, "N built · M defined") is internal data
and does not belong on the site. Feature pages spread one project across many URLs. This spec
supersedes parts of specs 002, 004, 008 and 009 (listed below).

## Decisions

| Topic | Decision | Why |
|---|---|---|
| Status | Removed from the site and from its content: no status field, chips, counts, "Defined scope" or breathing dots. A feature is added to the site when its work exists; progress is tracked privately in the source repositories | The site is a portfolio, not a progress report, and this repository is public |
| Feature pages | Removed. Features live on the project page as a compact list: each one a native `<details>` row (title, problem, surfaces) that opens to decision, build notes, quality and skills | One page per work, scannable, nothing hidden behind navigation |
| Old feature URLs | `/work/<project>/<feature>` redirects (301) to `/work/<project>#<feature>`; the row with that id opens | No broken links |
| Store access | Every project shows "View the store" and the password `mariovic`, stated as public; the Work index says it once for all | Recruiters and clients see the stores without asking |
| Skills matrix | About links every feature on the site (all of them exist), now to its anchor on the project page | "Skills, with proof" stays honest |
| Projects without features yet | Show context, approach, stack and the store; features are added as the work lands | No placeholders, no roadmap on the site |

### Superseded

- 002: the feature page with five blocks becomes a feature row on the project page.
- 004: `features` no longer generate routes.
- 008: breathing status dots removed; phase 2 "Feature tabs" dropped (features are rows now).
- 009: "Defined scope" block, status on cards and "N built · M defined" removed.

## Acceptance criteria

- [x] No page shows a status, a progress count or a "planned/defined/in progress" label
- [x] `/work` and the home list all six works
- [x] Each project page lists its features as rows; opening one shows problem, decision, build
      notes, quality and skills; the first row is open by default
- [ ] `/work/<project>/<feature>` redirects with 301 to the anchor, and the matching row opens
- [x] Each project page shows the store link and the public password `mariovic`
- [x] Works without JavaScript (`<details>`), keyboard and screen reader accessible
- [x] Lighthouse stays at 100; `npm run check` and `npm run build` pass
