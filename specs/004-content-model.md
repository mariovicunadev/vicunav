# 004 — Content model

| Field    | Value |
|----------|-------|
| Status   | Approved |
| Branch   | `feature/004-content-model` |
| Estimate | 4 h |
| Actual   | — |

## Goal

Typed content collections so adding a project, a feature or an article is writing one MDX file,
with build errors when something required is missing.

## Collections (`src/content.config.ts`)

### `projects` — `src/content/projects/<slug>.mdx`

| Field | Type | Notes |
|---|---|---|
| title | string | |
| summary | string | ≤ 160 chars, used as meta description |
| kind | `concept` \| `client` \| `employer` | Concept brands are labelled on the page |
| role | string | e.g. "Lead developer" |
| year | number | |
| status | `shipped` \| `in-progress` \| `planned` | |
| surfaces | enum[] | theme, app, checkout, functions, headless, data, performance |
| stack | string[] | |
| cover | image | required alt in `coverAlt` |
| repo | `{ url?, visibility: public \| private \| on-request }` | |
| live | `{ url, note? }` optional | e.g. password on request |
| metrics | `{ value, label }[]` optional | |
| featured | boolean | Home page |
| order | number | Sorting |

Body: Context → Approach → Results → Process.

### `features` — `src/content/features/<project>/<slug>.mdx`

| Field | Type | Notes |
|---|---|---|
| title | string | |
| project | reference(`projects`) | |
| problem | string | One sentence |
| decision | string | 1–2 sentences |
| status | same enum as projects | |
| surfaces | enum[] | |
| skills | string[] | Matrix on /about |
| demo | `{ src: image, alt }[]` optional | |
| video | string optional | Path in `/public/media` |
| quality | string[] | Evidence bullets (spec, PR, checks) |
| order | number | Prev/next |

Body: the code excerpt and the narrative (MDX).

### `articles` — `src/content/articles/<slug>.mdx`

title, description, pubDate, updatedDate?, tags[], draft (hidden in production), related
project (optional reference).

### Static data (`src/data/`)

- `site.ts` — name, title, email, socials, availability.
- `services.ts` — services and packages.
- `experience.ts` — work history from the CV.

## Acceptance criteria

- [ ] A missing required field fails `astro build` with a readable error
- [ ] Draft articles render in `npm run dev` and are excluded from the production build, RSS and sitemap
- [ ] Feature URLs are `/work/<project>/<feature>`
- [ ] Seed content: 2 projects, 3+ features, 3 article drafts
