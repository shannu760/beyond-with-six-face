"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Content", href: "#content" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        id="siteHeader"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#252D1D]/95 backdrop-blur-md py-3 border-b border-[#F3ECDD]/10 shadow-lg shadow-[#1E2216]/10"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#737C5A]/40 group-hover:border-[#C8A95B] transition-colors">
              <Image
                src="/assets/logo_web.png"
                alt="BEYOND Logo"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span
              className={`font-mono font-bold tracking-wider text-base sm:text-lg transition-colors ${
                scrolled ? "text-[#F3ECDD]" : "text-[#252D1D]"
              }`}
            >
              BEYOND
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-xs font-semibold tracking-widest uppercase transition-colors relative py-1 hover:text-[#C8A95B] ${
                  scrolled ? "text-[#EFE7D2]" : "text-[#252D1D]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden sm:inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase px-5 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-[#F3ECDD] text-[#252D1D] hover:bg-[#E8DFC9] hover:shadow-md"
                  : "bg-[#252D1D] text-[#F3ECDD] hover:bg-[#1E2216] hover:shadow-lg shadow-[#252D1D]/20"
              }`}
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-inherit"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? "text-[#F3ECDD]" : "text-[#252D1D]"} size={24} />
              ) : (
                <Menu className={scrolled ? "text-[#F3ECDD]" : "text-[#252D1D]"} size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-[#252D1D] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-[#F3ECDD] p-2"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-3xl text-[#F3ECDD] hover:text-[#C8A95B] transition-colors"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 inline-flex items-center gap-2 font-mono text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full bg-[#F3ECDD] text-[#252D1D]"
        >
          <span>Start a Project</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </>
  );
}
