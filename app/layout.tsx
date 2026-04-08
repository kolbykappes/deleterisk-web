import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://deleterisk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Delete Risk - Independent Loss Control for Critical Manufacturing",
  description: "Delete Risk delivers rapid, independent loss control for critical manufacturing operations—bringing structure, visibility, and control when it matters most. 15+ years managing large-scale losses.",
  keywords: ["large loss management", "manufacturing recovery", "business continuity", "loss control", "disaster recovery", "plant recovery"],
  authors: [{ name: "Delete Risk" }],
  openGraph: {
    title: "Delete Risk - Independent Loss Control for Critical Manufacturing",
    description: "Delete Risk delivers rapid, independent loss control for critical manufacturing operations—bringing structure, visibility, and control when it matters most.",
    url: siteUrl,
    siteName: "Delete Risk",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Delete Risk — Independent Loss Control for Critical Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete Risk - Independent Loss Control for Critical Manufacturing",
    description: "Delete Risk delivers rapid, independent loss control for critical manufacturing operations—bringing structure, visibility, and control when it matters most.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
