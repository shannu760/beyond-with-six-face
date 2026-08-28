import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "BEYOND — Shanmukha Krishna | Creative Technologist",
  description:
    "At the intersection of AI, code, design and content — I turn ideas into experiences that inspire, engage and create impact. Think Beyond. Build Beyond.",
  keywords:
    "Creative Technologist, AI, Web Development, Three.js, React, Next.js, Design, Content Creator, Shanmukha Krishna, BEYOND",
  openGraph: {
    title: "BEYOND — Shanmukha Krishna | Creative Technologist",
    description:
      "At the intersection of AI, code, design and content — I turn ideas into experiences that inspire, engage and create impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BEYOND — Shanmukha Krishna",
    description:
      "Creative Technologist. Think Beyond. Build Beyond.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://static.figma.com" />
        <link rel="dns-prefetch" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://static.figma.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          background: "#E8DCC3",
          color: "#252B18",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Film grain overlay for editorial texture */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
