# 003 — Visual system

| Field    | Value |
|----------|-------|
| Status   | Done |
| Branch   | `feature/003-visual-system` |
| Estimate | 6 h |
| Actual   | — |

## Goal

A distinctive, fast, accessible look that says "senior engineer who cares about craft" and
does not compete with the project screenshots.

## Concept: "Spec sheet"

The site borrows from technical spec sheets and product data cards: hairline rules,
monospaced labels, key/value tables, numbered sections and status chips. It mirrors the way the
work is delivered (specs, criteria, evidence) and gives every case study a consistent frame.
Screenshots and demos carry the color; the chrome stays quiet.

## Tokens

All values live in `src/styles/tokens.css` as custom properties. Components never use raw values.

**Color (light)**

| Role | Token | Value |
|---|---|---|
| Background | `--color-bg` | `#F5F2EC` (warm paper) |
| Surface | `--color-surface` | `#FFFFFF` |
| Text | `--color-text` | `#151513` |
| Muted text | `--color-muted` | `#5C5A54` |
| Rule / border | `--color-line` | `#D8D2C4` |
| Accent (fills only) | `--color-accent` | `#14E099` (mint) |
| Accent text, links, focus | `--color-accent-ink`, `--color-focus` | `#08704B` |
| Shipped status | `--color-ok` | `#08704B` |
| In-progress status | `--color-warn` | `#B45309` |

**Color (dark)** — follows `prefers-color-scheme`, with a manual toggle:
bg `#121211`, surface `#1A1A18`, text `#EDE9E0`, muted `#A19D93`, line `#2E2D29`,
accent, accent-ink, focus and ok `#14E099`, warn `#F5A524`.

**Accent rule.** `#14E099` is 1.55:1 on the light background, so in light mode it is never
text, an icon or a border that carries meaning. It is a fill behind dark text (10.6:1): primary
buttons, the hero highlight, selection, decorative rules. Text, links and the focus ring use
`#08704B` (5.5:1), the same hue darkened. In dark mode the mint itself is 10.9:1 and is used
everywhere.

All text pairs ≥ 4.5:1 and UI pairs ≥ 3:1 (checked with the contrast script, spec 005).

**Type**

- Display and body: **Inter Tight** (variable, self-hosted).
- Labels, metadata, code: **JetBrains Mono** (variable, self-hosted).
- Fluid scale with `clamp()`: `--step--1` … `--step-5`; body 17–18 px, line-height 1.6;
  display line-height 1.05, letter-spacing −0.02em.

**Space and layout**

- 4 px base, scale `--space-1` … `--space-10`.
- Content max width 1200 px; prose max width 68ch.
- 12-column grid on desktop, single column under 720 px, 16 px side gutter on mobile.

**Shape and motion**

- Radius 2 px (cards) and 999 px (chips). Hairline 1 px borders, no heavy shadows.
- Motion: 150–250 ms ease-out on hover/focus; no motion when `prefers-reduced-motion: reduce`.

## Signature components

- **Section label**: `01 — Selected work` in mono, with a rule.
- **Spec table**: key/value rows (Role, Stack, Surfaces, Year, Status) on every case study.
- **Status chip**: Shipped · In progress · Planned.
- **Surface tags**: Theme · App · Checkout · Functions · Headless · Data.
- **Proof number**: big figure + mono caption.
- **Code excerpt**: Shiki highlighting, file path caption, copy-free (it is for reading).
- **Media frame**: browser/phone frame around screenshots with a caption.

## Accessibility

- WCAG 2.2 AA: contrast, visible focus (2 px accent outline, 2 px offset), 24×24 px targets,
  skip link, landmarks, one `h1` per page, alt text required by the content schema.

## Acceptance criteria

- [x] Owner approves the concept and the accent color (`#14E099`, 2026-10-28)
- [x] Tokens drive every component; no raw hex values outside `tokens.css` (except the
      `theme-color` meta tags, which cannot read CSS variables)
- [x] Light and dark themes pass AA on every text pair (`npm run contrast`)
- [x] Lighthouse Accessibility 100 on all templates (CI, 2026-10-28)
