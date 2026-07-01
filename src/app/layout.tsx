import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WATT-IF — Scan. Light. Recreate.",
  description: "WATT-IF is a lighting design tool. Scan a real room with your iPhone's LiDAR, cloud-bake a photometrically calibrated 3D scene in ~20–30 min, drop real cinema fixtures (Aputure, ARRI, ETC Source Four), and export a Set Plan PDF for your Gaffer.",
  keywords: ["lighting design", "cinematography", "LiDAR scanning", "pre-production", "set plan", "DP", "gaffer"],
  authors: [{ name: "WATT-IF" }],
  openGraph: {
    title: "WATT-IF — Scan. Light. Recreate.",
    description: "Capture your location. Bake a photometric splat. Light it with real candela, lumens, lux — Sekonic-accurate within ±5%. Export Set Plan PDFs for the crew.",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://pub-4920bb193f79485cb96f6ad32dc0966f.r2.dev/Landing_Page_Images/ChatGPT%20Image%20Apr%201%2C%202026%2C%2004_04_31%20PM.png", width: 1200, height: 630, alt: "WATT-IF Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WATT-IF — Scan. Light. Recreate.",
    description: "Capture your location. Bake a photometric splat. Light it with real candela, lumens, lux — Sekonic-accurate within ±5%. Export Set Plan PDFs for the crew.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0d0d0d] text-white antialiased overflow-x-hidden selection:bg-white/10 selection:text-white">
        {children}
      </body>
    </html>
  );
}
