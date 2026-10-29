# Specs

Every change to this site starts as a spec. One spec = one branch = one PR.

| #   | Spec | Status |
|-----|------|--------|
| 000 | [Template](000-template.md) | — |
| 001 | [Positioning, audiences and goals](001-positioning.md) | Done |
| 002 | [Information architecture](002-information-architecture.md) | Done |
| 003 | [Visual system](003-visual-system.md) | Done |
| 004 | [Content model](004-content-model.md) | Done |
| 005 | [Technical foundation](005-tech-foundation.md) | Done |
| 006 | [Launch and channels](006-launch-and-channels.md) | Approved, at launch |
| 007 | [Deploy, CI and search basics](007-deploy-and-ci.md) | Done |
| 008 | [Motion and detail](008-motion-and-detail.md) | Phase 1 done; phase 2 later |
| 009 | [Work: six showcases](009-work-six-showcases.md) | Done |
| 010 | [Features inline, no status, open stores](010-inline-features-no-status.md) | Done |

## Roadmap

1. **011 — Content review.** Page by page, section by section: human voice and site strategy.
2. **Articles.** Topics proposed from the features; written by the owner.
3. **Services and About.** Restructure and iterate.
4. **At launch:** demos as the first stores finish, motion phase 2 (spec 008), channels (spec 006).

## Workflow

1. Copy `000-template.md` to `NNN-short-name.md`, fill Goal, Scope and Acceptance criteria.
2. Estimate before starting; record the actual time when the spec is done.
3. Branch `feature/NNN-short-name`, open a PR that links the spec, self review, merge.
4. Tick the acceptance criteria and set Status to Done.

Content (a new case study, feature or article) does not need a spec: it follows the content
model in spec 004 and goes through a PR like any other change.
