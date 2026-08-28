"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  PiggyBank,
  TrendingUp,
  CreditCard,
  CheckCircle2,
  Lock,
  Sparkles,
  BookOpen,
  DollarSign
} from "lucide-react";

interface LiteracyModule {
  id: string;
  title: string;
  category: string;
  summary: string;
  keyTakeaways: string[];
  practicalExercise: string;
}

const MODULES: LiteracyModule[] = [
  {
    id: "mod-1",
    title: "Student Budgeting & The 50/30/20 Rule",
    category: "Money Basics",
    summary: "Learn how to manage monthly pocket money or study allowances responsibly without running out at month-end.",
    keyTakeaways: [
      "50% Needs: Books, stationary, transportation & essential study materials.",
      "30% Wants: Snacks, hobbies & personal social outings.",
      "20% Savings: Emergency fund & future project savings."
    ],
    practicalExercise: "Track every ₹10 expense for 7 days in a simple spreadsheet."
  },
  {
    id: "mod-2",
    title: "Understanding Interest, Inflation & SIPs",
    category: "Investment Literacy",
    summary: "Discover why money loses purchasing power over time (inflation) and how Systematic Investment Plans (SIPs) utilize compound growth.",
    keyTakeaways: [
      "Compound Interest formula: A = P(1 + r/n)^(nt) — time in the market beats timing the market.",
      "Inflation (6-7% in India): ₹100 today buys less next year unless invested.",
      "Mutual Fund SIPs: Disciplined monthly micro-investments over 5-10 years."
    ],
    practicalExercise: "Calculate how ₹500/month invested at 12% annual return grows in 10 years using an online SIP calculator."
  },
  {
    id: "mod-3",
    title: "Digital Payment Safety & Scam Awareness",
    category: "Security & Safety",
    summary: "Essential guidelines to protect yourself from UPI phishing scams, fake scholarship processing fees, and suspicious link attacks.",
    keyTakeaways: [
      "NEVER enter your UPI PIN to RECEIVE money — UPI PIN is only required to send money.",
      "Official government scholarships (NSP) NEVER charge application fees via Telegram/WhatsApp.",
      "Verify link URLs before entering passwords or OTPs."
    ],
    practicalExercise: "Spot 3 red flags in sample phishing screenshots (unknown sender, urgent tone, strange domain)."
  }
];

export default function FinancialLiteracyPage() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const toggleComplete = (id: string) => {
    setCompletedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D4425]/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <PiggyBank className="w-5 h-5 text-[#3D4425]" />
            <h1 className="font-accent font-bold text-2xl text-[#252B18]">
              Financial Literacy for Students
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300">
              Responsible Education
            </span>
          </div>
          <p className="text-xs text-[#69704A] mt-1">
            Pure education on money management, budgeting, compound interest & digital scam protection.
          </p>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-5">
        {MODULES.map((mod) => {
          const isDone = completedModules.includes(mod.id);
          return (
            <div
              key={mod.id}
              className={`p-6 rounded-3xl border transition-all space-y-4 shadow-sm ${
                isDone
                  ? "bg-[#E8DCC3]/50 border-[#3D4425]/15 opacity-80"
                  : "bg-[#F8F4EC] border-[#3D4425]/20 hover:border-[#C8A95B]"
              }`}
            >
              <div className="flex items-center justify-between border-b border-[#3D4425]/10 pb-3">
                <span className="text-[10px] font-mono uppercase font-bold text-[#3D4425] bg-[#E8DCC3] px-2.5 py-0.5 rounded">
                  {mod.category}
                </span>

                <button
                  onClick={() => toggleComplete(mod.id)}
                  className={`text-xs font-mono font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 transition-all ${
                    isDone
                      ? "bg-emerald-700 border-emerald-700 text-white"
                      : "border-[#3D4425] text-[#3D4425] hover:bg-[#3D4425] hover:text-white"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isDone ? "Completed" : "Mark Complete (+40 Stars)"}</span>
                </button>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-[#252B18]">
                  {mod.title}
                </h3>
                <p className="text-xs text-[#69704A] mt-1">{mod.summary}</p>
              </div>

              <div className="bg-[#E8DCC3]/50 p-4 rounded-2xl border border-[#3D4425]/10 space-y-2">
                <div className="text-xs font-bold text-[#252B18]">Key Concepts:</div>
                <ul className="text-xs text-[#3D4425] space-y-1.5">
                  {mod.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3D4425] shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-[#3D4425] bg-white p-3 rounded-xl border border-[#3D4425]/10">
                <strong>Practical Exercise:</strong> {mod.practicalExercise}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
