import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEYOND — Shanmukha Krishna | Creative Developer & AI Architect",
  description: "Personal portfolio of Shanmukha Krishna. Creative developer exploring AI systems, interactive 3D web experiences, WebGL graphics, and digital products.",
  keywords: [
    "Shanmukha Krishna",
    "BEYOND",
    "Creative Developer",
    "AI Architect",
    "Three.js",
    "WebGL",
    "Next.js Portfolio",
    "3D Web Design",
    "Generative AI"
  ],
  authors: [{ name: "Shanmukha Krishna" }],
  openGraph: {
    title: "BEYOND — Shanmukha Krishna | Creative Developer & AI Architect",
    description: "Building digital experiences beyond the ordinary. Interactive 3D, AI models, and luxury editorial design.",
    type: "website",
    locale: "en_US",
    siteName: "BEYOND",
  },
  icons: {
    icon: [
      { url: "/images/profile-logo.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/images/profile-logo.png",
    apple: "/images/profile-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable}`}>
      <body className="font-sans bg-[#F3EBDD] text-[#28301D] antialiased selection:bg-[#556B2F] selection:text-[#FAF7EF] has-custom-cursor">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
