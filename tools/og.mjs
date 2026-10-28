// Renders public/og.png (1200×630) for social cards (spec 007). Run: npm run og
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');
const token = (name) => css.match(new RegExp(`--color-${name}:[ ]*(#[0-9a-f]{6})`, 'i'))[1];
const [bg, text, accent] = ['bg', 'text', 'accent'].map(token); // first match = light theme
const muted = token('muted');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${bg}"/>
  <g stroke="#00000010">${Array.from({ length: 24 }, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="630"/>`).join('')}</g>
  <rect x="80" y="80" width="64" height="64" rx="4" fill="${text}"/>
  <text x="112" y="122" font-family="Consolas, 'Courier New', monospace" font-size="24" font-weight="700" fill="${bg}" text-anchor="middle">MV</text>
  <text x="168" y="122" font-family="Consolas, 'Courier New', monospace" font-size="24" fill="${muted}">vicunav.com</text>
  <rect x="78" y="374" width="692" height="36" fill="${accent}"/>
  <text x="76" y="300" font-family="'Segoe UI', Arial, sans-serif" font-size="84" font-weight="700" letter-spacing="-3" fill="${text}">Mario Vicuña</text>
  <text x="76" y="400" font-family="'Segoe UI', Arial, sans-serif" font-size="64" font-weight="600" letter-spacing="-2" fill="${text}">Senior Shopify Developer</text>
  <text x="80" y="540" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="${muted}">Themes · Apps · Checkout · Hydrogen</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL('../public/og.png', import.meta.url)));
console.log('public/og.png written');
