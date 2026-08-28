"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  BookOpen,
  Target,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Flame,
  Star,
  Users,
  Award,
  Zap,
  ChevronRight,
  TrendingUp,
  Brain,
  ShieldCheck,
  RefreshCw
} from "lucide-react";

export default function GrowthHubDashboard() {
  const [diagnosticLoading, setDiagnosticLoading] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Top Welcome Hero Banner */}
      <div className="bg-[#252B18] text-[#F3EBDD] rounded-3xl p-6 sm:p-8 border border-[#C8A95B]/30 shadow-xl relative overflow-hidden">
        {/* Ambient Gold Mesh Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#C8A95B]/15 via-[#3D4425]/30 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#C8A95B] bg-[#C8A95B]/15 px-3 py-1 rounded-full border border-[#C8A95B]/30">
              Personalized Student Growth Hub
            </span>
            <span className="text-xs text-[#E8DCC3]/70 font-mono">
              Class 12 • JEE Main 2027
            </span>
          </div>

          <h1 className="font-accent font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F3EBDD] leading-tight">
            Welcome back, <span className="italic text-[#C8A95B]">Arjun</span>.
          </h1>

          <p className="text-sm sm:text-base text-[#D9CAA8]/90 leading-relaxed font-sans max-w-2xl">
            BEYOND is helping you focus on what matters most today. Your current preparation alignment for <strong className="text-[#F3EBDD]">JEE Main 2027</strong> is <strong className="text-[#C8A95B]">88% Strong</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/ai"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C8A95B] text-[#252B18] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4b566] transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask AI Student Assistant</span>
            </Link>

            <Link
              href="/study/planner"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3D4425] text-[#F3EBDD] font-display font-bold text-xs uppercase tracking-wider border border-[#69704A]/40 hover:bg-[#4A5230] transition-all"
            >
              <BookOpen className="w-4 h-4 text-[#C8A95B]" />
              <span>Open Study Planner</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CORE NORTH STAR: WHAT SHOULD I DO NEXT? */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-accent font-bold text-2xl text-[#252B18]">
              What Should You Do Next?
            </h2>
            <p className="text-xs text-[#69704A]">
              Recommended high-yield actions generated from your recent performance & weak topics.
            </p>
          </div>
          <span className="text-xs font-mono text-[#3D4425] font-semibold bg-[#E8DCC3] px-3 py-1 rounded-full border border-[#3D4425]/20">
            3 Recommendations Ready
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Quiz */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/20 hover:border-[#C8A95B] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  Weak Topic Remediation
                </span>
                <span className="text-xs font-semibold text-[#C8A95B] font-mono">
                  +50 Stars
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-[#252B18] group-hover:text-[#3D4425] transition-colors">
                Electrostatics Dipole Quiz
              </h3>
              <p className="text-xs text-[#69704A] leading-relaxed">
                You scored 60% on Dipole Problems last week. Solve 3 high-yield questions to fix concept errors.
              </p>
            </div>

            <div className="pt-3 border-t border-[#3D4425]/10 flex items-center justify-between">
              <span className="text-xs text-[#3D4425] font-medium flex items-center gap-1">
                <Target className="w-3.5 h-3.5" /> 12 Mins
              </span>
              <Link
                href="/exams"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#252B18] group-hover:text-[#C8A95B] transition-colors"
              >
                <span>Start Quiz</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: AI Tutor Concept */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/20 hover:border-[#C8A95B] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300">
                  AI Concept Explanation
                </span>
                <span className="text-xs font-semibold text-[#C8A95B] font-mono">
                  +30 Stars
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-[#252B18]">
                Calculus Limits & Continuity
              </h3>
              <p className="text-xs text-[#69704A] leading-relaxed">
                Review L&apos;Hôpital&apos;s Rule and indeterminate forms with interactive visual AI step-by-step guidance.
              </p>
            </div>

            <div className="pt-3 border-t border-[#3D4425]/10 flex items-center justify-between">
              <span className="text-xs text-[#3D4425] font-medium flex items-center gap-1">
                <Brain className="w-3.5 h-3.5" /> Interactive AI
              </span>
              <Link
                href="/ai"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#252B18] group-hover:text-[#C8A95B] transition-colors"
              >
                <span>Ask AI Assistant</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3: Peer Study Room */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/20 hover:border-[#C8A95B] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                  Live Peer Room
                </span>
                <span className="text-xs font-semibold text-emerald-700 font-mono">
                  8 Live Now
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-[#252B18]">
                JEE Physics Problem Sprint
              </h3>
              <p className="text-xs text-[#69704A] leading-relaxed">
                Join 8 classmates in a 45-minute focused problem-solving sprint with timer and goal logs.
              </p>
            </div>

            <div className="pt-3 border-t border-[#3D4425]/10 flex items-center justify-between">
              <span className="text-xs text-[#3D4425] font-medium flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Room #04
              </span>
              <Link
                href="/study/rooms"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#252B18] group-hover:text-[#C8A95B] transition-colors"
              >
                <span>Join Room</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC ALIGNMENT MATRIX */}
      <section className="bg-[#E8DCC3]/80 border border-[#3D4425]/20 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D4425]/15 pb-4">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3D4425]">
              Diagnostic Guidance Engine
            </span>
            <h2 className="font-accent font-bold text-2xl text-[#252B18]">
              JEE Main 2027 Pathway Alignment
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-2xl font-bold font-display text-[#252B18]">88%</div>
              <div className="text-[10px] text-[#69704A] uppercase font-mono font-bold">Strong Alignment</div>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-[#3D4425] border-t-[#C8A95B] flex items-center justify-center font-bold text-xs text-[#3D4425] bg-[#F8F4EC]">
              88%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key Evidence Points */}
          <div className="bg-[#F8F4EC] rounded-2xl p-5 border border-[#3D4425]/15 space-y-3">
            <h3 className="font-display font-bold text-sm text-[#252B18] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Evidence & Alignment Strengths</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#3D4425]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>High accuracy in <strong>Mechanics & Vector Calculus</strong> problems during recent mock tests.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Consistent 12-day study streak averaging 4.5 hours/day of focused concept learning.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Active involvement in peer help (resolved 14 student questions with 95% helpful rating).</span>
              </li>
            </ul>
          </div>

          {/* Uncertainty & Experiments */}
          <div className="bg-[#F8F4EC] rounded-2xl p-5 border border-[#3D4425]/15 space-y-3">
            <h3 className="font-display font-bold text-sm text-[#252B18] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Key Uncertainties & Experiments</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#3D4425]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                <span>Organic Chemistry reaction mechanisms show higher error rate under timed conditions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                <span>Need to test speed strategy: switching from Chemistry first to Physics first in sectional mocks.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUBJECT MASTERY MATRIX */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-accent font-bold text-2xl text-[#252B18]">
              Subject Mastery Matrix
            </h2>
            <p className="text-xs text-[#69704A]">
              Live topic-level mastery tracked across chapter quizzes and assessments.
            </p>
          </div>

          <Link
            href="/exams/performance"
            className="text-xs font-bold text-[#3D4425] hover:text-[#C8A95B] flex items-center gap-1"
          >
            <span>Full Mastery Report</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Subject: Physics */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/15 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#3D4425]/10 pb-3">
              <div className="font-display font-bold text-base text-[#252B18]">Physics</div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                78% Proficient
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#3D4425]">
                <span>Kinematics & Motion</span>
                <span className="font-semibold text-emerald-700">Strong</span>
              </div>
              <div className="flex justify-between text-[#3D4425]">
                <span>Newton&apos;s Laws of Motion</span>
                <span className="font-semibold text-emerald-700">Strong</span>
              </div>
              <div className="flex justify-between text-[#3D4425]">
                <span>Electrostatics & Fields</span>
                <span className="font-semibold text-amber-700">Needs Support</span>
              </div>
            </div>
          </div>

          {/* Subject: Mathematics */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/15 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#3D4425]/10 pb-3">
              <div className="font-display font-bold text-base text-[#252B18]">Mathematics</div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                82% Proficient
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#3D4425]">
                <span>Vectors & 3D Geometry</span>
                <span className="font-semibold text-emerald-700">Strong</span>
              </div>
              <div className="flex justify-between text-[#3D4425]">
                <span>Limits & Derivatives</span>
                <span className="font-semibold text-blue-700">Developing</span>
              </div>
              <div className="flex justify-between text-[#3D4425]">
                <span>Quadratic Equations</span>
                <span className="font-semibold text-emerald-700">Strong</span>
              </div>
            </div>
          </div>

          {/* Subject: Chemistry */}
          <div className="bg-[#F8F4EC] border border-[#3D4425]/15 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#3D4425]/10 pb-3">
              <div className="font-display font-bold text-base text-[#252B18]">Chemistry</div>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                68% Developing
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#3D4425]">
                <span>Atomic Structure</span>
                <span className="font-semibold text-emerald-700">Strong</span>
              </div>
              <div className="flex justify-between text-[#3D4425]">
                <span>Chemical Bonding</span>
                <span className="font-semibold text-blue-700">Developing</span>
              </div>
              <div className="flex justify-between text-[#3D4425]">
                <span>Organic Hydrocarbons</span>
                <span className="font-semibold text-amber-700">Needs Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY & IDEA HIGHLIGHT STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Scholarship Radar Teaser */}
        <div className="bg-[#252B18] text-[#F3EBDD] rounded-2xl p-6 border border-[#C8A95B]/30 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#C8A95B]">
              National Scholarship Radar
            </span>
            <span className="text-xs font-mono text-[#D9CAA8]">AY 2026-27</span>
          </div>

          <h3 className="font-accent font-bold text-xl text-[#F3EBDD]">
            Central Sector Scholarship (NSP)
          </h3>

          <p className="text-xs text-[#D9CAA8]/80 leading-relaxed">
            You match criteria for Class 12 board toppers with ₹12,000/yr support. Verification deadline is approaching.
          </p>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-bold text-[#C8A95B]">Strong Match (92%)</span>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#F3EBDD] hover:text-[#C8A95B] transition-colors"
            >
              <span>View Checklist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Idea Lab Teaser */}
        <div className="bg-[#3D4425] text-[#F3EBDD] rounded-2xl p-6 border border-[#69704A]/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#C8A95B]">
              BEYOND Idea Lab
            </span>
            <span className="text-xs font-mono text-[#E8DCC3]/70">Student Feedback</span>
          </div>

          <h3 className="font-accent font-bold text-xl text-[#F3EBDD]">
            Have an idea to improve study workflow?
          </h3>

          <p className="text-xs text-[#E8DCC3]/80 leading-relaxed">
            Submit your concept to the BEYOND Idea Lab. Get instant AI feasibility analysis and community votes.
          </p>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs font-mono text-[#C8A95B]">142 Ideas Submitted This Week</span>
            <Link
              href="/ideas"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#F3EBDD] hover:text-[#C8A95B] transition-colors"
            >
              <span>Submit Idea</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
