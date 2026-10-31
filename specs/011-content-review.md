# 011 — Content review

| Field    | Value |
|----------|-------|
| Status   | In progress |
| Branch   | `feature/011-content-<page>` (one PR per page) |
| Estimate | 1–2 h per page |
| Actual   | — |

## Goal

Every page reads as written by Mario for the two people who matter: a recruiter or hiring lead
deciding whether to interview, and a merchant or agency deciding whether to hire. Copy is
specific, first person where it fits, and every claim can be checked.

## Method

Page by page, section by section, in this order: Home, Work (index and each project), Services,
About, Contact, Articles index, 404.

For each section:

1. **Job.** What this section must make the reader think or do, and for which audience.
2. **Current copy** and what is wrong with it (generic, template-like, unprovable, too long,
   wrong audience).
3. **Proposal**, approved by the owner before it is written to the site.

## Rules

- Spec 001 voice: plain, specific, short sentences, outcomes before tools, no buzzwords.
- Sounds like a person: first person, concrete nouns (brands, numbers, tools), no stacked
  three-part slogans, no "not just X, but Y" formulas, no em-dash flourishes.
- Every number and employer claim traces to the CV; concept brands stay labelled.
- No progress or status language (spec 010).

## Acceptance criteria

- [x] Home reviewed and approved
- [x] Work index and the six project pages reviewed and approved
- [ ] Services reviewed and approved
- [ ] About reviewed and approved
- [ ] Contact, Articles index and 404 reviewed and approved
- [ ] `npm run check`, contrast, build and Lighthouse pass after each page
