import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E8DFC9] border-t border-[#39452B]/15 pt-14 pb-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-[#39452B]/15">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#39452B]/30">
              <Image
                src="/assets/logo_web.png"
                alt="Beyond logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="font-mono font-bold text-lg text-[#1E2216]">BEYOND</span>
              <p className="text-xs text-[#737C5A] tracking-wider uppercase">
                Stay ahead. Think Beyond.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8">
            <Link
              href="#home"
              className="font-mono text-xs font-semibold tracking-wider uppercase text-[#1E2216] hover:text-[#39452B] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#skills"
              className="font-mono text-xs font-semibold tracking-wider uppercase text-[#1E2216] hover:text-[#39452B] transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#content"
              className="font-mono text-xs font-semibold tracking-wider uppercase text-[#1E2216] hover:text-[#39452B] transition-colors"
            >
              Content
            </Link>
            <Link
              href="#about"
              className="font-mono text-xs font-semibold tracking-wider uppercase text-[#1E2216] hover:text-[#39452B] transition-colors"
            >
              About
            </Link>
            <Link
              href="#process"
              className="font-mono text-xs font-semibold tracking-wider uppercase text-[#1E2216] hover:text-[#39452B] transition-colors"
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="font-mono text-xs font-semibold tracking-wider uppercase text-[#1E2216] hover:text-[#39452B] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-[#737C5A]">
          <span>
            © {currentYear} Beyond — {PROFILE.name}. All Rights Reserved.
          </span>
          <span className="font-mono tracking-wider">
            Built with AI. Crafted with Next.js &amp; Three.js.
          </span>
        </div>
      </div>
    </footer>
  );
}
