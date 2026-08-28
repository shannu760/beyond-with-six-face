"use client";

import React from "react";
import {
  ShieldCheck,
  Users,
  AlertTriangle,
  FileCheck,
  Activity,
  CheckCircle2,
  Lock,
  Search
} from "lucide-react";
import { OFFICIAL_KNOWLEDGE_SOURCES } from "@/lib/ai/student-engine";

import DatabaseExtractorCard from "@/components/database/DatabaseExtractorCard";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#252B18] text-[#F3EBDD] p-6 sm:p-10 font-sans space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#69704A]/30 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#C8A95B]" />
            <h1 className="font-accent font-bold text-3xl text-[#F3EBDD]">
              BEYOND Admin Governance & Control
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold bg-[#C8A95B]/15 text-[#C8A95B] px-2.5 py-0.5 rounded-full border border-[#C8A95B]/30">
              Admin Ops
            </span>
          </div>
          <p className="text-xs text-[#D9CAA8]/80 mt-1">
            System moderation, knowledge source verification & platform metrics.
          </p>
        </div>

        <div className="text-right">
          <div className="text-xs font-mono text-[#D9CAA8]">Platform Status</div>
          <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 justify-end">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Operational • Zero Open Critical Incidents
          </div>
        </div>
      </div>

      {/* Database Extraction Tool */}
      <DatabaseExtractorCard />

      {/* High Level Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <div className="bg-[#3D4425]/60 p-5 rounded-2xl border border-[#69704A]/30 space-y-1">
          <div className="text-[10px] uppercase font-mono text-[#D9CAA8]/70 font-bold">Active Weekly Students</div>
          <div className="text-3xl font-display font-bold text-[#F3EBDD]">1,280</div>
          <div className="text-[10px] text-emerald-400 font-mono">Meaningful Progress Event</div>
        </div>

        <div className="bg-[#3D4425]/60 p-5 rounded-2xl border border-[#69704A]/30 space-y-1">
          <div className="text-[10px] uppercase font-mono text-[#D9CAA8]/70 font-bold">Open Moderation Reports</div>
          <div className="text-3xl font-display font-bold text-[#C8A95B]">0</div>
          <div className="text-[10px] text-[#D9CAA8]/70 font-mono">Queue Cleared</div>
        </div>

        <div className="bg-[#3D4425]/60 p-5 rounded-2xl border border-[#69704A]/30 space-y-1">
          <div className="text-[10px] uppercase font-mono text-[#D9CAA8]/70 font-bold">Verified Sources Ingested</div>
          <div className="text-3xl font-display font-bold text-[#F3EBDD]">4 Core</div>
          <div className="text-[10px] text-[#D9CAA8]/70 font-mono">NTA, NSP, UGC, AICTE</div>
        </div>

        <div className="bg-[#3D4425]/60 p-5 rounded-2xl border border-[#69704A]/30 space-y-1">
          <div className="text-[10px] uppercase font-mono text-[#D9CAA8]/70 font-bold">Stars Ledger Balance</div>
          <div className="text-3xl font-display font-bold text-[#C8A95B]">142.5k ⭐</div>
          <div className="text-[10px] text-[#D9CAA8]/70 font-mono">Immutable Audit Log</div>
        </div>
      </div>

      {/* Official Knowledge Sources Verification Log */}
      <section className="bg-[#3D4425]/40 border border-[#69704A]/30 rounded-3xl p-6 space-y-4">
        <h2 className="font-accent font-bold text-xl text-[#F3EBDD]">
          Knowledge Base Verification Register
        </h2>

        <div className="space-y-3">
          {OFFICIAL_KNOWLEDGE_SOURCES.map((src, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#252B18]/80 border border-[#69704A]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div>
                <div className="font-bold text-[#F3EBDD] flex items-center gap-2">
                  <span>{src.name}</span>
                  <span className="text-[10px] font-mono bg-[#3D4425] text-[#C8A95B] px-2 py-0.5 rounded border border-[#69704A]/30">
                    {src.category}
                  </span>
                </div>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#D9CAA8]/80 hover:text-[#C8A95B] underline"
                >
                  {src.url}
                </a>
              </div>

              <div className="text-right">
                <div className="text-[10px] font-mono text-[#D9CAA8]/70">Last Verified</div>
                <div className="font-mono font-bold text-emerald-400">{src.verifiedDate}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
