"use client";

import React from "react";
import {
  Award,
  Star,
  Flame,
  ShieldCheck,
  QrCode,
  BookOpen,
  Target,
  GraduationCap,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import DatabaseExtractorCard from "@/components/database/DatabaseExtractorCard";

interface Certificate {
  id: string;
  title: string;
  issuedDate: string;
  issuer: string;
  verificationCode: string;
  skillsVerified: string[];
}

const CERTIFICATES: Certificate[] = [
  {
    id: "cert-101",
    title: "Physics Mechanics & Kinematics Mastery",
    issuedDate: "15th August 2026",
    issuer: "BEYOND Academic Council",
    verificationCode: "BYND-CERT-88421-KIN",
    skillsVerified: ["Kinematics 2D", "Newton's Laws", "Vector Analysis"]
  },
  {
    id: "cert-102",
    title: "Top 5% Peer Learning Helper (Physics)",
    issuedDate: "20th August 2026",
    issuer: "BEYOND Student Growth Network",
    verificationCode: "BYND-CERT-99120-PEER",
    skillsVerified: ["Peer Support", "Concept Explanation", "Electrostatics"]
  }
];

export default function StudentProfilePage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      {/* Top BEYOND ID Card */}
      <div className="bg-[#252B18] text-[#F3EBDD] rounded-3xl p-6 sm:p-8 border border-[#C8A95B]/40 shadow-xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-[#C8A95B]/20 via-[#3D4425]/30 to-transparent blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#E8DCC3] text-[#252B18] font-bold text-2xl flex items-center justify-center border-2 border-[#C8A95B] shadow-lg">
              AK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-accent font-bold text-2xl sm:text-3xl text-[#F3EBDD]">
                  Arjun Kumar
                </h1>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-xs text-[#D9CAA8]">
                BEYOND ID: <strong className="font-mono text-[#C8A95B]">BYND-2026-88421</strong>
              </p>
              <div className="text-[11px] text-[#E8DCC3]/70 mt-0.5">
                Class 12 • Target: JEE Main 2027
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#3D4425]/80 px-4 py-2.5 rounded-2xl border border-[#69704A]/30">
            <QrCode className="w-8 h-8 text-[#C8A95B]" />
            <div className="text-left">
              <div className="text-[9px] uppercase font-mono font-bold text-[#D9CAA8]/70">Verified ID</div>
              <div className="text-xs font-mono font-bold text-[#F3EBDD]">Active Student</div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#69704A]/30 text-center">
          <div className="bg-[#3D4425]/60 p-3 rounded-xl border border-[#69704A]/20">
            <div className="text-xl font-bold font-display text-[#C8A95B]">1,450 ⭐</div>
            <div className="text-[10px] uppercase font-mono text-[#E8DCC3]/70 font-bold">Stars Ledger</div>
          </div>

          <div className="bg-[#3D4425]/60 p-3 rounded-xl border border-[#69704A]/20">
            <div className="text-xl font-bold font-display text-orange-400 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-orange-400" /> 12 Days
            </div>
            <div className="text-[10px] uppercase font-mono text-[#E8DCC3]/70 font-bold">Active Streak</div>
          </div>

          <div className="bg-[#3D4425]/60 p-3 rounded-xl border border-[#69704A]/20">
            <div className="text-xl font-bold font-display text-[#F3EBDD]">88%</div>
            <div className="text-[10px] uppercase font-mono text-[#E8DCC3]/70 font-bold">Pathway Score</div>
          </div>

          <div className="bg-[#3D4425]/60 p-3 rounded-xl border border-[#69704A]/20">
            <div className="text-xl font-bold font-display text-emerald-400">14 Solved</div>
            <div className="text-[10px] uppercase font-mono text-[#E8DCC3]/70 font-bold">Peer Helps</div>
          </div>
        </div>
      </div>

      {/* Verifiable Digital Certificates */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-accent font-bold text-2xl text-[#252B18]">
              Verifiable Digital Certificates
            </h2>
            <p className="text-xs text-[#69704A]">
              Cryptographically verified achievements backed by diagnostic test evidence & peer contributions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#F8F4EC] border border-[#3D4425]/20 hover:border-[#C8A95B] rounded-2xl p-6 shadow-sm space-y-4 transition-all"
            >
              <div className="flex items-center justify-between border-b border-[#3D4425]/10 pb-3">
                <span className="text-[10px] font-mono uppercase font-bold text-[#3D4425] bg-[#E8DCC3] px-2 py-0.5 rounded">
                  {cert.issuer}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Verified
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-[#252B18] mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#69704A]">Issued on: {cert.issuedDate}</p>
              </div>

              <div className="bg-[#E8DCC3]/50 p-3 rounded-xl border border-[#3D4425]/10 space-y-1">
                <div className="text-[10px] uppercase font-mono font-bold text-[#69704A]">Verified Competencies</div>
                <div className="flex flex-wrap gap-1">
                  {cert.skillsVerified.map((sk, idx) => (
                    <span key={idx} className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#3D4425]/10 text-[#3D4425] font-medium">
                      ✓ {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#3D4425]/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#3D4425] font-bold">
                  Code: {cert.verificationCode}
                </span>
                <button className="text-xs font-bold text-[#252B18] hover:text-[#C8A95B] flex items-center gap-1">
                  <span>Verify Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Data Extraction Tool */}
      <section className="space-y-3 pt-4">
        <h2 className="font-accent font-bold text-2xl text-[#252B18]">
          Export Your BEYOND Learning Data
        </h2>
        <DatabaseExtractorCard />
      </section>
    </div>
  );
}
