"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Skills", href: "#expertise" },
  { label: "Content", href: "#content" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Brand Mark with Official BEYOND Emblem */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-[#F3EBDD]/90 backdrop-blur-md border border-[#556B2F]/20 shadow-sm group hover:border-[#556B2F]/40 transition-all duration-300"
        >
          <img
            src="/images/profile-logo.png"
            alt="BEYOND emblem"
            className="w-7 h-7 object-contain rounded-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm tracking-widest text-[#28301D] group-hover:text-[#556B2F] transition-colors leading-none">
              {SOCIAL_LINKS.brand}
            </span>
            <span className="text-[8px] uppercase tracking-[0.2em] font-mono text-[#556B2F] font-bold mt-0.5">
              WEAR OUR PROSPERITY.
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`pointer-events-auto hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-[#F3EBDD]/90 backdrop-blur-xl border-[#556B2F]/25 shadow-md py-1"
              : "bg-[#F3EBDD]/70 backdrop-blur-md border-[#556B2F]/15"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#6F735F] hover:text-[#28301D] hover:bg-[#556B2F]/10 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        {/* Desktop CTA Button & Mobile Toggle */}
        <div className="pointer-events-auto flex items-center gap-3">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#556B2F] text-[#FAF7EF] text-xs font-semibold tracking-wide hover:bg-[#6B7A3A] transition-all duration-300 shadow-sm hover:shadow-olive-glow hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#F3EBDD]/90 backdrop-blur-md border border-[#556B2F]/20 text-[#28301D] hover:bg-[#E8DDC8] transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto md:hidden mt-3 max-w-7xl mx-auto rounded-2xl bg-[#F3EBDD]/95 backdrop-blur-xl border border-[#556B2F]/20 p-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#28301D] hover:text-[#556B2F] transition-colors py-1 flex items-center justify-between border-b border-[#556B2F]/10 pb-2"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-xl bg-[#556B2F] text-[#FAF7EF] font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Work Together</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
