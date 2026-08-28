"use client";

import React, { useState } from "react";
import { Database, Download, FileCode, FileSpreadsheet, Check, Sparkles, Code2, Server } from "lucide-react";

export default function DatabaseExtractorCard() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [previewData, setPreviewData] = useState<string | null>(null);

  const handleDownload = (format: "json" | "sql" | "csv") => {
    setDownloading(format);
    const link = document.createElement("a");
    link.href = `/api/db/extract?format=${format}`;
    link.target = "_blank";
    link.click();
    setTimeout(() => setDownloading(null), 1000);
  };

  const fetchLivePreview = async () => {
    try {
      const res = await fetch("/api/db/extract?format=json");
      const json = await res.json();
      setPreviewData(JSON.stringify(json, null, 2));
    } catch (err) {
      console.error("Preview fetch error:", err);
    }
  };

  return (
    <div className="bg-[#252B18] text-[#F3EBDD] rounded-3xl p-6 sm:p-8 border border-[#C8A95B]/40 shadow-xl space-y-6 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-[#C8A95B]/15 via-[#3D4425]/30 to-transparent blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#69704A]/30 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#3D4425] border border-[#C8A95B]/40 flex items-center justify-center text-[#C8A95B] shadow-inner">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-accent font-bold text-2xl text-[#F3EBDD]">
              Database Extraction & Export Engine
            </h3>
            <p className="text-xs text-[#D9CAA8]/80 font-sans">
              Export student growth data, study session logs, and verified knowledge base records.
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C8A95B] bg-[#C8A95B]/15 px-3 py-1 rounded-full border border-[#C8A95B]/30 shrink-0">
          Live SQLite / PostgreSQL Sync
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
        {/* JSON Export */}
        <button
          onClick={() => handleDownload("json")}
          className="bg-[#3D4425]/60 hover:bg-[#3D4425] p-4 rounded-2xl border border-[#69704A]/30 text-left transition-all group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <Code2 className="w-5 h-5 text-[#C8A95B] group-hover:scale-110 transition-transform" />
            <Download className="w-4 h-4 text-[#D9CAA8] group-hover:text-[#C8A95B]" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-[#F3EBDD]">JSON Snapshot</div>
            <div className="text-[11px] text-[#D9CAA8]/70">Full API payload export</div>
          </div>
        </button>

        {/* SQL DDL Export */}
        <button
          onClick={() => handleDownload("sql")}
          className="bg-[#3D4425]/60 hover:bg-[#3D4425] p-4 rounded-2xl border border-[#69704A]/30 text-left transition-all group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <FileCode className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <Download className="w-4 h-4 text-[#D9CAA8] group-hover:text-emerald-400" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-[#F3EBDD]">SQL DDL & Seed</div>
            <div className="text-[11px] text-[#D9CAA8]/70">Postgres & SQLite script</div>
          </div>
        </button>

        {/* CSV Analytics Export */}
        <button
          onClick={() => handleDownload("csv")}
          className="bg-[#3D4425]/60 hover:bg-[#3D4425] p-4 rounded-2xl border border-[#69704A]/30 text-left transition-all group flex flex-col justify-between space-y-3"
        >
          <div className="flex items-center justify-between">
            <FileSpreadsheet className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <Download className="w-4 h-4 text-[#D9CAA8] group-hover:text-blue-400" />
          </div>
          <div>
            <div className="font-display font-bold text-sm text-[#F3EBDD]">CSV Dataset</div>
            <div className="text-[11px] text-[#D9CAA8]/70">Student progress table</div>
          </div>
        </button>
      </div>

      {/* Live Json Preview Drawer */}
      <div className="space-y-3 relative z-10 pt-2 border-t border-[#69704A]/30">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-[#C8A95B] uppercase tracking-wider">
            Raw Database Inspector
          </span>
          <button
            onClick={fetchLivePreview}
            className="text-xs font-mono font-bold text-[#F3EBDD] hover:text-[#C8A95B] underline"
          >
            {previewData ? "Refresh Preview" : "Inspect Live JSON Snapshot"}
          </button>
        </div>

        {previewData && (
          <pre className="bg-[#11160D] text-[#C8A95B] font-mono text-[11px] p-4 rounded-2xl border border-[#69704A]/30 overflow-x-auto max-h-60 leading-relaxed shadow-inner">
            {previewData}
          </pre>
        )}
      </div>
    </div>
  );
}
