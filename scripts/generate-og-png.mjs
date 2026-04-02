/**
 * Writes public/og-image.png (1200×630) for Open Graph / Twitter embeds.
 * Prefers compositing a real logo; falls back to an SVG rasterized by sharp.
 */
import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const W = 1200;
const H = 630;
const BG = "#0f172a";

const publicDir = join(process.cwd(), "public");
const outPath = join(publicDir, "og-image.png");

async function tryFromLogo() {
  for (const name of ["og-logo.png", "logo.png", "logo.webp"]) {
    const p = join(publicDir, name);
    if (!existsSync(p)) continue;

    const logoBuf = await sharp(p)
      .resize({ height: 220, width: 700, fit: "inside" })
      .toBuffer();

    const { width: lw = 1, height: lh = 1 } = await sharp(logoBuf).metadata();
    const left = Math.round((W - lw) / 2);
    const top = Math.round((H - lh) / 2 - 20);

    const base = sharp({
      create: {
        width: W,
        height: H,
        channels: 3,
        background: BG,
      },
    });

    return base
      .composite([{ input: logoBuf, left, top }])
      .png()
      .toBuffer();
  }
  return null;
}

async function fromSvgFallback() {
  const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${BG}"/>
  <text x="50%" y="44%" text-anchor="middle" fill="#f8fafc" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700">Delete Risk</text>
  <text x="50%" y="58%" text-anchor="middle" fill="#cbd5e1" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="600">Independent Loss Control for Critical Manufacturing</text>
  <text x="50%" y="68%" text-anchor="middle" fill="#64748b" font-family="Arial, Helvetica, sans-serif" font-size="28">deleterisk.com</text>
</svg>`;

  return sharp(Buffer.from(svg)).resize(W, H).png().toBuffer();
}

const buf = (await tryFromLogo()) ?? (await fromSvgFallback());
await writeFile(outPath, buf);
console.log("Wrote", outPath);
