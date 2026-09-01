"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Sparkles,
  BookOpen,
  Users,
  Target,
  Award,
  Lightbulb,
  GraduationCap,
  Flame,
  Star,
  ChevronRight,
  Menu,
  X,
  Bell,
  Search,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ArrowLeft,
  Rocket,
  PiggyBank,
  Code2
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Growth Hub", href: "/student/dashboard", icon: Compass },
  { name: "AI Assistant", href: "/student/ai", icon: Sparkles, badge: "PRO" },
  { name: "Study Planner", href: "/student/study/planner", icon: BookOpen },
  { name: "Study Rooms", href: "/student/study/rooms", icon: Users, badge: "Live" },
  { name: "Exams & Quizzes", href: "/student/exams", icon: Target },
  { name: "Course Explorer", href: "/student/guidance/courses", icon: Compass },
  { name: "Project Builder", href: "/student/projects", icon: Rocket },
  { name: "Skill Assessments", href: "/student/skills", icon: Code2 },
  { name: "Community & Help", href: "/student/community", icon: Users },
  { name: "Idea Lab", href: "/student/ideas", icon: Lightbulb },
  { name: "Opportunities Radar", href: "/student/opportunities", icon: Search },
  { name: "Financial Literacy", href: "/student/financial-literacy", icon: PiggyBank },
  { name: "Parent Overview", href: "/student/parent", icon: Users },
  { name: "BEYOND Profile", href: "/student/profile", icon: Award }
];

export default function StudentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F3EBDD] text-[#252B18] flex flex-col font-sans selection:bg-[#C8A95B]/20 selection:text-[#252B18]">
      {/* Background Subtle Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#3D4425_1px,transparent_1px)] [background-size:16px_16px] z-0" />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#252B18]/95 backdrop-blur-md border-b border-[#69704A]/20 text-[#F3EBDD] px-4 lg:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#3D4425] text-[#E8DCC3] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/student/dashboard" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#3D4425] border border-[#C8A95B]/40 flex items-center justify-center font-accent font-bold text-lg text-[#C8A95B] group-hover:border-[#C8A95B] transition-colors shadow-inner">
              B
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-wider text-[#F3EBDD]">
                BEYOND
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-widest font-mono text-[#C8A95B] bg-[#C8A95B]/10 px-2 py-0.5 rounded border border-[#C8A95B]/30">
                Agentic AI Ecosystem
              </span>
            </div>
          </Link>
        </div>

        {/* Header Right — Back to Portfolio + Gamification */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3D4425] border border-[#C8A95B]/40 text-[#FAF7EF] text-xs font-semibold hover:bg-[#4D562E] hover:border-[#C8A95B] transition-all shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C8A95B]" />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>

          {/* Streaks Pill */}
          <div className="flex items-center gap-1.5 bg-[#3D4425]/80 px-3 py-1.5 rounded-full border border-[#69704A]/30 text-xs font-semibold text-[#E8DCC3] shadow-sm">
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
            <span className="hidden sm:inline">12 Days</span>
          </div>

          {/* Stars Ledger Balance */}
          <div className="flex items-center gap-1.5 bg-[#3D4425]/80 px-3 py-1.5 rounded-full border border-[#C8A95B]/40 text-xs font-semibold text-[#C8A95B] shadow-sm">
            <Star className="w-4 h-4 text-[#C8A95B] fill-[#C8A95B]" />
            <span>1,450 ⭐</span>
          </div>

          {/* Student Profile Quick Avatar */}
          <Link
            href="/student/profile"
            className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-[#69704A]/30 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#E8DCC3] text-[#252B18] font-bold text-xs flex items-center justify-center border border-[#C8A95B] group-hover:scale-105 transition-transform">
              AK
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-semibold text-[#F3EBDD] group-hover:text-[#C8A95B] transition-colors">
                Arjun Kumar
              </div>
              <div className="text-[10px] text-[#D9CAA8]/70">Class 12 • JEE 2027</div>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Layout Body */}
      <div className="flex-1 flex relative">
        {/* Left Navigation Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-[57px] z-30 h-[calc(100vh-57px)] w-64 bg-[#252B18] border-r border-[#69704A]/20 text-[#E8DCC3] p-4 flex flex-col justify-between transition-transform duration-300 ease-out-expo
            ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <div className="space-y-6 overflow-y-auto pr-1">
            {/* Primary Nav Menu */}
            <div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#69704A] px-3 mb-2 font-semibold">
                Autonomous AI Hub
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || (item.href !== "/student/dashboard" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all group
                        ${
                          isActive
                            ? "bg-[#3D4425] text-[#F3EBDD] font-bold shadow-inner border border-[#C8A95B]/30"
                            : "text-[#D9CAA8]/80 hover:bg-[#3D4425]/50 hover:text-[#F3EBDD]"
                        }
                      `}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`w-4 h-4 transition-colors ${
                            isActive
                              ? "text-[#C8A95B]"
                              : "text-[#69704A] group-hover:text-[#C8A95B]"
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold tracking-wider ${
                            item.badge === "PRO"
                              ? "bg-[#C8A95B]/20 text-[#C8A95B] border border-[#C8A95B]/40"
                              : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Bottom Sidebar Widget */}
          <div className="pt-4 border-t border-[#69704A]/20">
            <Link
              href="/student/ai"
              className="p-3.5 rounded-2xl bg-gradient-to-br from-[#3D4425] to-[#2E351C] border border-[#C8A95B]/30 flex flex-col gap-2 group block hover:border-[#C8A95B]/60 transition-all shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F3EBDD]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A95B]" />
                  <span>AI Agent Ready</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#C8A95B] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-[#D9CAA8]/80 leading-snug">
                Ask your autonomous growth agent anything right now.
              </p>
            </Link>
          </div>
        </aside>

        {/* Backdrop for mobile drawer */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-20 lg:hidden"
          />
        )}

        {/* Main Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
