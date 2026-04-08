import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const alt =
  "Delete Risk — Independent Loss Control for Critical Manufacturing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Returns a PNG data URL for Satori (ImageResponse). WebP from `logo.webp` is
 * converted with sharp because Satori often fails on WebP.
 */
async function loadLogoPngDataUrl(): Promise<string | null> {
  const publicDir = join(process.cwd(), "public");

  for (const name of ["og-logo.png", "logo.png"] as const) {
    try {
      const buf = await readFile(join(publicDir, name));
      return `data:image/png;base64,${buf.toString("base64")}`;
    } catch {
      /* try next */
    }
  }

  try {
    const webp = await readFile(join(publicDir, "logo.webp"));
    const pngBuf = await sharp(webp).png().toBuffer();
    return `data:image/png;base64,${pngBuf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const logoDataUrl = await loadLogoPngDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          padding: 48,
        }}
      >
        {logoDataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- OG generation; data URL for Satori
          <img
            src={logoDataUrl}
            alt=""
            height={220}
            width={440}
            style={{
              height: 220,
              width: "auto",
              maxWidth: 700,
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Delete Risk
          </div>
        )}
        <p
          style={{
            marginTop: logoDataUrl ? 40 : 28,
            fontSize: 38,
            fontWeight: 600,
            color: "#f1f5f9",
            textAlign: "center",
            maxWidth: 980,
            lineHeight: 1.25,
          }}
        >
          Independent Loss Control for Critical Manufacturing
        </p>
        <p
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          deleterisk.com
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
