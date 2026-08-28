"use client";

import React, { useState } from "react";
import {
  Compass,
  BookOpen,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Search
} from "lucide-react";

interface CourseDetail {
  id: string;
  name: string;
  degreeType: string;
  duration: string;
  eligibility: string;
  admissionRoutes: string[];
  coreSubjects: string[];
  labsAndProjects: string[];
  typicalCareers: string[];
  misconceptions: string[];
  realityOverview: string;
}

const COURSES: CourseDetail[] = [
  {
    id: "btech-cse",
    name: "B.Tech in Computer Science & Engineering",
    degreeType: "Undergraduate Engineering",
    duration: "4 Years (8 Semesters)",
    eligibility: "Class 12 with Physics, Mathematics, Chemistry (Min 60-75%)",
    admissionRoutes: ["JEE Main & JEE Advanced", "BITSAT", "State CETs", "CUET-UG"],
    coreSubjects: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management", "Discrete Mathematics", "Software Engineering"],
    labsAndProjects: ["Full-Stack Web App Build", "Compiler Design Lab", "Cloud Infrastructure Project"],
    typicalCareers: ["Software Development Engineer", "Backend Developer", "Data Scientist", "DevOps Engineer", "AI/ML Engineer"],
    misconceptions: [
      "You spend 4 years just writing code (Reality: High emphasis on theoretical math, algorithms, logic & hardware systems).",
      "Only top IITians get good roles (Reality: Proven portfolio projects & open-source contributions matter immensely)."
    ],
    realityOverview: "B.Tech CSE combines rigorous mathematical foundations with practical software engineering. In the first 2 years, you study core engineering math, physics, data structures, and computer organization."
  },
  {
    id: "mbbs",
    name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
    degreeType: "Undergraduate Medical",
    duration: "5.5 Years (4.5 Yrs Study + 1 Yr Internship)",
    eligibility: "Class 12 with Physics, Chemistry, Biology/Biotechnology (Min 50% for General, 40% for Reserved)",
    admissionRoutes: ["NEET-UG (National Eligibility cum Entrance Test)"],
    coreSubjects: ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "General Medicine", "Surgery"],
    labsAndProjects: ["Dissection Hall Clinicals", "Hospital Ward Postings", "Community Health Rotations"],
    typicalCareers: ["Medical Officer", "General Physician", "Specialist Doctor (Post MD/MS)", "Clinical Researcher"],
    misconceptions: [
      "Life becomes easy once you crack NEET (Reality: Continuous intense study throughout 5.5 years and PG preparation).",
      "It's pure memorization (Reality: Clinical diagnostic reasoning & emergency decision making are paramount)."
    ],
    realityOverview: "MBBS requires high dedication and stamina. Pre-clinical years focus on human anatomy and physiology, followed by extensive hospital clinical rotations."
  },
  {
    id: "bsc-physics",
    name: "B.Sc. (Hons) in Physics",
    degreeType: "Undergraduate Science",
    duration: "3 - 4 Years (NEP 4-Year Research Route)",
    eligibility: "Class 12 with Physics, Mathematics, Chemistry",
    admissionRoutes: ["CUET-UG", "University Merit Tests", "IISER IAT / NISER NEST"],
    coreSubjects: ["Classical Mechanics", "Quantum Physics", "Electromagnetism", "Thermodynamics", "Statistical Mechanics", "Mathematical Physics"],
    labsAndProjects: ["Optics & Laser Lab", "Computational Physics Simulation", "Nanomaterials Research"],
    typicalCareers: ["Research Scientist (ISRO/DRDO/DAE)", "Data Analyst", "Applied Physicist", "Academic Professor"],
    misconceptions: [
      "Scope is limited to teaching (Reality: Physics graduates are heavily recruited in quantitative finance, data science & aerospace).",
      "It's just formulas (Reality: Focuses on fundamental principles of nature & deep mathematical modeling)."
    ],
    realityOverview: "B.Sc. Physics develops deep analytical reasoning and mathematical problem-solving skills. Ideal for students aiming for research, astrophysics, or quantitative analytics."
  }
];

export default function CourseExplorerPage() {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail>(COURSES[0]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D4425]/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#3D4425]" />
            <h1 className="font-accent font-bold text-2xl text-[#252B18]">
              Course & Branch Reality Explorer
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold bg-[#252B18] text-[#C8A95B] px-2.5 py-0.5 rounded-full border border-[#C8A95B]/40">
              Post-12th Decision Support
            </span>
          </div>
          <p className="text-xs text-[#69704A] mt-1">
            &quot;What will I actually study in this degree?&quot; — Grounded in UGC, AICTE & NMC official curricula.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Select List */}
        <div className="space-y-3 lg:col-span-1">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#69704A]">
            Explore Pathways ({COURSES.length})
          </div>

          {COURSES.map((c) => {
            const isSelected = selectedCourse.id === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setSelectedCourse(c)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                  isSelected
                    ? "bg-[#252B18] text-[#F3EBDD] border-[#C8A95B] shadow-md"
                    : "bg-[#F8F4EC] text-[#252B18] border-[#3D4425]/20 hover:border-[#3D4425]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase font-mono font-bold text-[#C8A95B]">
                    {c.degreeType}
                  </span>
                  <span className={`text-[10px] font-mono ${isSelected ? "text-[#D9CAA8]" : "text-[#69704A]"}`}>
                    {c.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm leading-snug">
                  {c.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Selected Course Deep Dive */}
        <div className="lg:col-span-2 bg-[#F8F4EC] border border-[#3D4425]/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-[#3D4425]/15 pb-4 space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-[#3D4425] bg-[#E8DCC3] px-2.5 py-0.5 rounded">
              {selectedCourse.degreeType} • {selectedCourse.duration}
            </span>
            <h2 className="font-accent font-bold text-3xl text-[#252B18]">
              {selectedCourse.name}
            </h2>
            <p className="text-xs text-[#3D4425] leading-relaxed bg-[#E8DCC3]/40 p-3.5 rounded-xl border border-[#3D4425]/10">
              {selectedCourse.realityOverview}
            </p>
          </div>

          {/* Admission Routes & Eligibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#E8DCC3]/50 p-4 rounded-2xl border border-[#3D4425]/10 space-y-2">
              <div className="text-xs font-bold text-[#252B18] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#3D4425]" />
                <span>Eligibility</span>
              </div>
              <p className="text-xs text-[#3D4425]">{selectedCourse.eligibility}</p>
            </div>

            <div className="bg-[#E8DCC3]/50 p-4 rounded-2xl border border-[#3D4425]/10 space-y-2">
              <div className="text-xs font-bold text-[#252B18] flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#3D4425]" />
                <span>Admission Routes</span>
              </div>
              <ul className="text-xs text-[#3D4425] space-y-1">
                {selectedCourse.admissionRoutes.map((r, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Subjects */}
          <div className="space-y-2">
            <h3 className="font-display font-bold text-sm text-[#252B18] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#3D4425]" />
              <span>What You Will Actually Study (Core Subjects)</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedCourse.coreSubjects.map((sub, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#252B18] text-[#F3EBDD] px-3 py-1 rounded-xl border border-[#C8A95B]/30 font-medium"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Common Misconceptions */}
          <div className="space-y-2">
            <h3 className="font-display font-bold text-sm text-[#252B18] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Common Misconceptions vs. Reality</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#3D4425]">
              {selectedCourse.misconceptions.map((m, i) => (
                <li key={i} className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-amber-950">
                  ⚠️ {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
