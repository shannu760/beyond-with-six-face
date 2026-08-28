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
  Rocket,
  PiggyBank,
  Code2
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Growth Hub", href: "/dashboard", icon: Compass },
  { name: "AI Assistant", href: "/ai", icon: Sparkles, badge: "PRO" },
  { name: "Study Planner", href: "/study/planner", icon: BookOpen },
  { name: "Study Rooms", href: "/study/rooms", icon: Users, badge: "Live" },
  { name: "Exams & Quizzes", href: "/exams", icon: Target },
  { name: "Mastery Matrix", href: "/exams/performance", icon: GraduationCap },
  { name: "Course Explorer", href: "/guidance/courses", icon: Compass },
  { name: "Project Builder", href: "/projects", icon: Rocket },
  { name: "Skill Assessments", href: "/skills", icon: Code2 },
  { name: "Community & Help", href: "/community", icon: Users },
  { name: "Idea Lab", href: "/ideas", icon: Lightbulb },
  { name: "Opportunities Radar", href: "/opportunities", icon: Search },
  { name: "Financial Literacy", href: "/financial-literacy", icon: PiggyBank },
  { name: "Parent Overview", href: "/parent", icon: Users },
  { name: "BEYOND Profile", href: "/profile", icon: Award }
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

          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#3D4425] border border-[#C8A95B]/40 flex items-center justify-center font-accent font-bold text-lg text-[#C8A95B] group-hover:border-[#C8A95B] transition-colors shadow-inner">
              B
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-wider text-[#F3EBDD]">
                BEYOND
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-widest font-mono text-[#C8A95B] bg-[#C8A95B]/10 px-2 py-0.5 rounded border border-[#C8A95B]/30">
                Student Network
              </span>
            </div>
          </Link>
        </div>

        {/* Header Right — Gamification & Profile Pill */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Streaks Pill */}
          <div className="flex items-center gap-1.5 bg-[#3D4425]/80 px-3 py-1.5 rounded-full border border-[#69704A]/30 text-xs font-semibold text-[#E8DCC3] shadow-sm">
            <Flame className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
            <span>12 Days</span>
          </div>

          {/* Stars Ledger Balance */}
          <div className="flex items-center gap-1.5 bg-[#3D4425]/80 px-3 py-1.5 rounded-full border border-[#C8A95B]/40 text-xs font-semibold text-[#C8A95B] shadow-sm">
            <Star className="w-4 h-4 text-[#C8A95B] fill-[#C8A95B]" />
            <span>1,450 ⭐</span>
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-[#3D4425] text-[#E8DCC3] transition-colors">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C8A95B]" />
          </button>

          {/* Student Profile Quick Avatar */}
          <Link
            href="/profile"
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
                Student Navigation
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`
                        flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#3D4425] text-[#F3EBDD] font-semibold border-l-4 border-[#C8A95B] shadow-md pl-2.5"
                            : "text-[#D9CAA8]/80 hover:bg-[#3D4425]/50 hover:text-[#F3EBDD]"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? "text-[#C8A95B]" : "text-[#69704A]"}`} />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#C8A95B]/20 text-[#C8A95B] border border-[#C8A95B]/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Quick Diagnostic Badge Card */}
            <div className="bg-[#3D4425]/70 border border-[#69704A]/30 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C8A95B]">
                <Sparkles className="w-4 h-4" />
                <span>Pathway Status</span>
              </div>
              <p className="text-[11px] text-[#E8DCC3]/80 leading-relaxed">
                JEE Main 2027 Alignment: <strong className="text-[#F3EBDD]">88% Strong</strong>
              </p>
              <Link
                href="/ai"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C8A95B] hover:underline"
              >
                <span>Re-assess with AI</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-[#69704A]/20 text-[10px] text-[#69704A] flex items-center justify-between">
            <span>BEYOND v1.0 • AY 2026-27</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 z-10 max-w-6xl mx-auto">
          {children}
        </main>

        {/* Right Action Rail ("What should I do next?") */}
        <aside className="hidden xl:block w-80 sticky top-[57px] h-[calc(100vh-57px)] border-l border-[#3D4425]/15 p-5 space-y-6 overflow-y-auto bg-[#E8DCC3]/40">
          {/* North-Star Card: WHAT TO DO NEXT */}
          <div className="bg-[#252B18] text-[#F3EBDD] rounded-2xl p-5 shadow-lg border border-[#C8A95B]/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C8A95B]/20 to-transparent rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#C8A95B]">
                North Star Guide
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C8A95B] animate-ping" />
            </div>

            <h3 className="font-accent font-bold text-lg text-[#F3EBDD] leading-tight mb-2">
              What should I do next?
            </h3>
            <p className="text-xs text-[#D9CAA8]/80 leading-relaxed mb-4">
              Your highest-yield action right now to improve your weak topic <strong className="text-[#F3EBDD]">Electrostatics</strong>:
            </p>

            <div className="bg-[#3D4425] rounded-xl p-3.5 border border-[#69704A]/30 space-y-2.5 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F3EBDD]">
                <Clock className="w-4 h-4 text-[#C8A95B]" />
                <span>15-Min Chapter Quiz</span>
              </div>
              <p className="text-[11px] text-[#E8DCC3]/70">
                3 high-yield questions on Electric Dipole & Gauss Law.
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#C8A95B] font-mono font-bold pt-1 border-t border-[#69704A]/30">
                <span>+50 Stars Reward</span>
                <span>Est. 12 mins</span>
              </div>
            </div>

            <Link
              href="/exams"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#C8A95B] text-[#252B18] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4b566] transition-all shadow-md group-hover:translate-y-[-1px]"
            >
              <span>Start Diagnostic Quiz</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Today's Goal Progress */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/15 rounded-xl p-4 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#252B18] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#3D4425]" />
                <span>Today&apos;s Target</span>
              </span>
              <span className="text-xs font-mono font-semibold text-[#69704A]">2 / 3 Tasks</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#E8DCC3] rounded-full overflow-hidden">
              <div className="h-full bg-[#3D4425] rounded-full w-2/3 transition-all duration-500" />
            </div>

            <ul className="space-y-2 pt-1 text-xs text-[#3D4425]">
              <li className="flex items-center gap-2 text-emerald-800 line-through opacity-70">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Physics Formula Review</span>
              </li>
              <li className="flex items-center gap-2 text-emerald-800 line-through opacity-70">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Calculus Limits Problem Set</span>
              </li>
              <li className="flex items-center gap-2 font-medium text-[#252B18]">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#3D4425] flex-shrink-0" />
                <span>Complete Electrostatics Quiz</span>
              </li>
            </ul>
          </div>

          {/* Active Live Study Rooms */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/15 rounded-xl p-4 space-y-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#252B18] flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#3D4425]" />
                <span>Live Study Rooms</span>
              </span>
              <Link href="/study/rooms" className="text-[10px] font-semibold text-[#3D4425] hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-2">
              <Link
                href="/study/rooms"
                className="block bg-[#E8DCC3]/60 hover:bg-[#E8DCC3] p-2.5 rounded-lg border border-[#3D4425]/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#252B18]">⚡ JEE Physics Sprint</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-bold">
                    8 Online
                  </span>
                </div>
                <p className="text-[10px] text-[#69704A]">Topic: Kinematics & Mechanics</p>
              </Link>

              <Link
                href="/study/rooms"
                className="block bg-[#E8DCC3]/60 hover:bg-[#E8DCC3] p-2.5 rounded-lg border border-[#3D4425]/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#252B18]">🧪 Organic Chem Deep Work</span>
                  <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono font-bold">
                    5 Online
                  </span>
                </div>
                <p className="text-[10px] text-[#69704A]">Topic: Reaction Mechanisms</p>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
