import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delete Risk - Large-Loss Restoration & Loss Control for Manufacturing",
  description: "Delete Risk delivers rapid restoration and independent loss control for critical manufacturing operations. 15+ years managing large-scale losses. Protect your operations.",
  keywords: ["large loss restoration", "manufacturing recovery", "business continuity", "loss control", "disaster recovery", "plant recovery"],
  authors: [{ name: "Delete Risk" }],
  openGraph: {
    title: "Delete Risk - Large-Loss Restoration & Loss Control for Manufacturing",
    description: "Delete Risk delivers rapid restoration and independent loss control for critical manufacturing operations. 15+ years managing large-scale losses.",
    url: "https://deleterisk.com",
    siteName: "Delete Risk",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete Risk - Large-Loss Restoration & Loss Control for Manufacturing",
    description: "Delete Risk delivers rapid restoration and independent loss control for critical manufacturing operations.",
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
