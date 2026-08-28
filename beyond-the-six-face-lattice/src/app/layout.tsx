import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEYOND — Shanmukha Krishna | AI Creator & Builder",
  description:
    "BEYOND — Shanmukha Krishna. AI creator and builder working across scriptwriting, AI video production, and faceless YouTube content.",
  icons: {
    icon: "/assets/logo_web.png",
    apple: "/assets/logo_web.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-[#E8DFC9] text-[#1E2216] antialiased selection:bg-[#39452B] selection:text-[#F3ECDD] min-h-screen">
        {children}
      </body>
    </html>
  );
}
