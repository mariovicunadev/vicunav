// WCAG 2.2 contrast check for the token pairs in src/styles/tokens.css (spec 003).
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

function luminance(hex) {
  const [r, g, b] = hex
    .replace('#', '')
    .match(/.{2}/g)
    .map((h) => parseInt(h, 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// First block is light, second (inside the media query) is dark.
const blocks = [...css.matchAll(/\{([^{}]*--color-bg[^{}]*)\}/g)].slice(0, 2).map((m) =>
  Object.fromEntries([...m[1].matchAll(/--color-([\w-]+):\s*(#[0-9a-f]{6})/gi)].map((x) => [x[1], x[2]])),
);

const pairs = [
  ['text', 'bg', 4.5],
  ['text', 'surface', 4.5],
  ['muted', 'bg', 4.5],
  ['muted', 'surface', 4.5],
  ['accent-ink', 'bg', 4.5],
  ['accent-ink', 'surface', 4.5],
  ['on-accent', 'accent', 4.5],
  // The accent (#14e099) is a fill: on light it is only used behind dark text, never as text.
  ['focus', 'bg', 3],
  ['focus', 'surface', 3],
  ['ok', 'bg', 3],
  ['warn', 'bg', 3],
];

let failed = 0;
for (const [name, t] of [['light', blocks[0]], ['dark', blocks[1]]]) {
  for (const [fg, bg, min] of pairs) {
    const ratio = contrast(t[fg], t[bg]);
    const ok = ratio >= min;
    if (!ok) failed++;
    console.log(`${ok ? 'pass' : 'FAIL'}  ${name.padEnd(5)} ${fg.padEnd(10)} on ${bg.padEnd(7)} ${ratio.toFixed(2)} (min ${min})`);
  }
}
process.exit(failed ? 1 : 0);
