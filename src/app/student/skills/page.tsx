"use client";

import React, { useState } from "react";
import {
  Code2,
  Award,
  CheckCircle2,
  Sparkles,
  Terminal,
  Play,
  Star,
  ChevronRight
} from "lucide-react";

interface SkillItem {
  id: string;
  name: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  status: "Completed" | "In Progress" | "Recommended";
  badgeCode: string;
}

const SKILLS: SkillItem[] = [
  {
    id: "sk-1",
    name: "Python Programming Fundamentals",
    category: "Coding & Computer Science",
    level: "Intermediate",
    status: "Completed",
    badgeCode: "SKL-PY-88"
  },
  {
    id: "sk-2",
    name: "Web Canvas 3D Graphics (Three.js)",
    category: "Creative Technology",
    level: "Intermediate",
    status: "In Progress",
    badgeCode: "SKL-3D-92"
  },
  {
    id: "sk-3",
    name: "Data Structures & Algorithmic Problem Solving",
    category: "Computer Science",
    level: "Advanced",
    status: "Recommended",
    badgeCode: "SKL-DSA-10"
  }
];

export default function SkillAssessmentsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D4425]/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#3D4425]" />
            <h1 className="font-accent font-bold text-2xl text-[#252B18]">
              Skill Profiles & Coding Assessments
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold bg-[#252B18] text-[#C8A95B] px-2.5 py-0.5 rounded-full border border-[#C8A95B]/40">
              Floor 2 — Skills
            </span>
          </div>
          <p className="text-xs text-[#69704A] mt-1">
            Build practical programming & technical skills alongside your academic preparation.
          </p>
        </div>
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SKILLS.map((sk) => (
          <div
            key={sk.id}
            className="bg-[#F8F4EC] border border-[#3D4425]/20 hover:border-[#C8A95B] rounded-2xl p-5 shadow-sm space-y-4 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase font-bold text-[#3D4425] bg-[#E8DCC3] px-2 py-0.5 rounded">
                  {sk.level}
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    sk.status === "Completed"
                      ? "bg-emerald-100 text-emerald-900"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  {sk.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-[#252B18]">
                {sk.name}
              </h3>
              <p className="text-xs text-[#69704A]">{sk.category}</p>
            </div>

            <div className="pt-3 border-t border-[#3D4425]/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#3D4425] font-bold">
                {sk.badgeCode}
              </span>
              <button className="text-xs font-bold text-[#252B18] hover:text-[#C8A95B] flex items-center gap-1">
                <span>Start Assessment</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
