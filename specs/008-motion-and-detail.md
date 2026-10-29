# 008 — Motion and detail

| Field    | Value |
|----------|-------|
| Status   | In progress (phase 1 done) |
| Branch   | `feature/008-motion-and-detail` |
| Estimate | 10 h (phase 1: 6 h, phase 2: 4 h) |
| Actual   | — |

## Goal

Raise the finish of the site with motion and small details, so a recruiter or client feels the
same care in the site that the case studies claim. The brand does not change: same palette,
type, accent rule and "spec sheet" concept (spec 003).

## Context

The site is correct and fast but static: content appears all at once, hovers are minimal, and
the hairline structure stops at section level. A reference landing page reviewed on 2026-10-29
gets its polish from motion and detail, not from its colors. Its measured values are below; this
spec translates them into our tokens and rules.

### Reference notes (measured)

| Area | What it does | Values |
|---|---|---|
| Easing | Two curves cover almost everything | standard `cubic-bezier(0.4, 0, 0.2, 1)`; entrances `cubic-bezier(0.22, 1, 0.36, 1)` / `(0.2, 0.8, 0.2, 1)` |
| Durations | Color 150–300 ms, transform 300–500 ms, entrances 700–800 ms | — |
| Scroll reveal | Blocks fade up once when they enter the viewport | `opacity 0→1`, `translateY(18px→0)`, 0.7 s |
| Heading reveal | Headings split into words; each word goes from blurred and muted to sharp, staggered | blur ~6 px → 0, muted → text color |
| Two-tone headings | Lead words muted, key words in the text color | muted `#8A8F98`-ish against white |
| Frame | Whole page sits inside a container with hairline side rails; sections are cells split by hairlines | `border-x 1px`, cells `border-t 1px` |
| Hover | Cards lift and their border brightens; buttons lift less | cards `translateY(-2…-4px)`; buttons `-1…-2px`; 300 ms |
| Links | Underline grows from the left on hover, shrinks to the right on leave | `::after scaleX(0→1)`, `transform-origin` swap, 350 ms |
| Header | Fixed, translucent, blurred | `bg 90 %`, `backdrop-filter: blur(12px)` |
| Live dots | "In progress" indicators breathe; a terminal caret blinks | opacity 0.35↔1 over 1.4 s; caret `steps(1)` 1.05 s |
| Window chrome | Code and demo panels framed as app windows: three dots, mono title on the right | radius ~20 px, hairline border |
| Eyebrows | Mono, uppercase, wide tracking, accent, numbered | `STAGE 01 · /scope` |
| Tabs | Step tabs with an accent underline; autoplay with a circular progress ring and a pause button | ring = SVG circle, `stroke-dashoffset` |
| CTA sheen | A light band sweeps across the primary button on hover | 0.9 s, skewed gradient |
| Typography | Tight tracking on large type | h1 64 px / −1.6 px; h2 48 px / −2 px, line-height 1.05–1.08 |
| Reduced motion | Everything collapses to the final state | global `0.01ms` override, content visible |

## Scope

**In scope — phase 1 (foundations)**
1. **Motion tokens** in `tokens.css`: `--ease-standard`, `--ease-out` (`0.22, 1, 0.36, 1`),
   `--dur-fast` 150 ms, `--dur` 300 ms, `--dur-slow` 700 ms. The old `--ease`/`--duration` map to these.
2. **Scroll reveal**: `[data-reveal]` blocks fade up 16 px over `--dur-slow`; children of
   `[data-reveal-stagger]` delay by 60 ms each (max 6). One inline script with
   `IntersectionObserver`, runs once per element, adds `.is-in`.
3. **Heading reveal** on the home h1 and section h2s: words split at build time by a small Astro
   component; each word goes from `filter: blur(6px)` + `--color-muted` to sharp + `--color-text`,
   40 ms stagger. The h1 runs on load; h2s on reveal.
4. **Two-tone headings**: section h2s take a muted lead and a text-color key phrase
   (`<Heading lead="…" key="…">`). The hero keeps its accent marker; no other accent text on light.
5. **Hairline frame**: the main container gets side rails (`--color-line`); sections become cells
   with top hairlines and the label row in mono. Extends the existing spec-sheet look.
6. **Hover system**: cards lift −3 px and the border goes to `--color-text`; buttons lift −1 px;
   prose and nav links get the grow-from-left underline in `--color-accent-ink`.
7. **Sticky header**: translucent (`color-mix(in oklab, var(--color-bg) 85%, transparent)`),
   `backdrop-filter: blur(12px)`, hairline appears after 8 px of scroll; `scroll-margin-top` on
   anchors.
8. **Live status**: the in-progress chip dot breathes (opacity 0.35↔1, 1.4 s).
9. **Window chrome** around code excerpts and demo images on feature pages: three dots, file
   name in mono on the right, hairline border, `--radius-window` 12 px.
10. **Numbered eyebrows**: section labels gain an index (`01 · Work`), feature pages
    `Feature 02 · /autoship`.
11. **Type polish**: tighter tracking on `--step-4`/`--step-5` (−0.03 em), h2 line-height 1.08,
    `-webkit-font-smoothing: antialiased`, `text-wrap: balance` on headings, `pretty` on prose.

Status dots breathe three times (4.2 s) and stop, which keeps them under the 5 s limit
without a pause control.

**In scope — phase 2 (signature pieces)**
12. **Hero spec-sheet demo**: a window on the home page that types one feature as a spec
    (`problem → decision → quality`), with a blinking caret, cycling through 3 real features,
    pause button with progress ring. Stops after one cycle.
13. **Feature tabs** on project pages: one tab per feature with the accent underline, autoplay
    with progress ring and pause, the panel shows problem, decision and chips.
14. **CTA sheen** on the primary button, on hover/focus only (never looping).

**Out of scope**
- Changing palette, fonts, logo or accent rule (spec 003 stands)
- Smooth-scroll libraries, GSAP or any animation dependency
- Background images, glows and looping decorative animations
- Marquees

## Acceptance criteria

- [x] No JavaScript: every element is visible in its final state (reveal styles apply only under
      `html.js`)
- [x] `prefers-reduced-motion: reduce`: no movement, blur or autoplay; content in final state
- [x] Anything that moves for more than 5 s has a visible pause control (WCAG 2.2.2)
- [x] Animations use only `opacity`, `transform` and `filter`; no new layout shift (the home
      h1 keeps the 0.005 CLS from the web font swap it already had)
- [x] Split headings read as normal sentences in a screen reader (no `aria-label` hacks)
- [x] Focus styles match hover styles for every interactive element
- [x] Contrast check passes in both themes, including muted heading leads at large size
- [x] Lighthouse stays at 100 for Accessibility and SEO and ≥ 0.9 Performance; added JS < 2 KB
- [x] `npm run check` and `npm run build` pass

## Technical approach

- `src/styles/tokens.css`: motion tokens, `--radius-window`.
- `src/styles/motion.css` (new): reveal, heading words, link underline, live dot, keyframes,
  reduced-motion block.
- `src/components/Heading.astro` (new): splits `lead`/`key` into word spans at build time.
- `src/components/Window.astro` (new): window chrome wrapper; used by MDX code blocks and demos.
- `src/scripts/reveal.ts` (new): adds `js` class to `<html>`, one `IntersectionObserver`.
- `Header.astro`, `Chip.astro`, `SectionLabel.astro`, `ProjectCard.astro`, `global.css`: hover,
  sticky header, live dot, numbered labels.
- Phase 2: `HeroDemo.astro`, `FeatureTabs.astro`, small scripts each with pause state.

## Risks and open questions

- `backdrop-filter` and `filter: blur` cost paint time on low-end phones: blur only headings, and
  only once.
- Muted heading leads must still pass AA as large text (3:1) on both backgrounds; check with the
  contrast script.
- Phase 2 content must use real features only; no invented metrics in the demo.
