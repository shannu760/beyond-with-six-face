"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Workflow,
  History,
  LayoutTemplate,
  Plus,
  ArrowLeft,
  Activity,
  Sparkles
} from "lucide-react";

export function N8nNavbar() {
  const pathname = usePathname();

  const NAV_LINKS = [
    { label: "Workflows", href: "/n8n", icon: Workflow },
    { label: "Executions", href: "/n8n/executions", icon: History },
    { label: "Templates", href: "/n8n/templates", icon: LayoutTemplate }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#141C10]/95 backdrop-blur-xl border-b border-[#556B2F]/25 px-4 sm:px-8 py-2.5 flex items-center justify-between shadow-lg">
      {/* Left: Return to Portfolio & Brand Emblem */}
      <div className="flex items-center gap-4 sm:gap-6">
        <Link
          href="/#work"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182012] border border-[#556B2F]/30 text-xs font-semibold text-[#D9CAA8] hover:text-[#FAF7EF] hover:bg-[#252B18] transition-all shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Portfolio</span>
        </Link>

        <Link href="/n8n" className="flex items-center gap-3.5 group">
          {/* Official Beyond Profile Logo */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#C8A95B]/50 group-hover:border-[#C8A95B] group-hover:scale-105 transition-all shadow-md bg-[#182012] flex items-center justify-center shrink-0">
            <img
              src="/images/profile-logo.png"
              alt="BEYOND Emblem"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-sm sm:text-base text-[#F3EBDD] group-hover:text-[#C8A95B] transition-colors">
                BEYOND
              </span>
              <span className="text-[9px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-[#556B2F]/25 border border-[#556B2F]/40 text-[#C8A95B] font-bold">
                n8n Runtime
              </span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.22em] font-mono text-[#8A9A5B] font-bold">
              WEAR OUR PROSPERITY.
            </div>
          </div>
        </Link>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#12170D]/80 p-1 rounded-full border border-[#556B2F]/20">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-[#556B2F] text-[#FAF7EF] shadow-sm font-bold"
                    : "text-[#D9CAA8]/80 hover:text-[#F3EBDD] hover:bg-[#252B18]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Right: Executive Founder Profile & Action Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Engine Status Badge */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#182012] border border-[#556B2F]/30 text-[11px] font-mono text-[#8A9A5B]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>DAG Engine Live</span>
        </div>

        {/* Founder Profile Chip */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-[#556B2F]/25">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#C8A95B]/60 bg-[#252B18] flex items-center justify-center text-[#C8A95B] font-bold text-xs shadow-inner shrink-0">
            <img
              src="/images/portrait.png"
              alt="Shanmukha Krishna"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-[10px] font-mono">SK</span>
          </div>

          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-[#F3EBDD] tracking-wide leading-tight">
              Shanmukha Krishna
            </div>
            <div className="text-[10px] text-[#D9CAA8]/70 font-mono flex items-center gap-1.5">
              <span>Founder & Architect</span>
              <span className="text-[#556B2F]">•</span>
              <span className="text-[#C8A95B]">BEYOND</span>
            </div>
          </div>
        </div>

        {/* New Workflow Button */}
        <Link
          href="/n8n/canvas/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C8A95B] text-[#12170D] text-xs font-bold uppercase tracking-wider hover:bg-[#d4b566] hover:shadow-[0_8px_20px_-4px_rgba(200,169,91,0.35)] transition-all shadow-md active:scale-95"
        >
          <Plus className="w-3.5 h-3.5 stroke-[3]" />
          <span className="hidden sm:inline">New Workflow</span>
        </Link>
      </div>
    </header>
  );
}
