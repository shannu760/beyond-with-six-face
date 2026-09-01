"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { N8nNavbar } from "@/components/navigation/N8nNavbar";
import {
  Workflow,
  Plus,
  Play,
  Clock,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Search,
  Layers,
  Webhook,
  Activity,
  Trash2,
  Copy
} from "lucide-react";

export default function N8nWorkflowsDashboard() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchWorkflows = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/workflows");
      const data = await res.json();
      if (data.success) {
        setWorkflows(data.data || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkflows();
  }, []);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this workflow?")) return;
    try {
      await fetch(`/api/workflows/${id}`, { method: "DELETE" });
      setWorkflows((prev) => prev.filter((w) => w.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredWorkflows = workflows.filter(
    (w) =>
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      (w.description && w.description.toLowerCase().includes(search.toLowerCase()))
  );

  const totalRuns = workflows.reduce((acc, w) => acc + (w._count?.executions || 0), 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#12170D] text-[#F3EBDD]">
      <N8nNavbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#556B2F]/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C8A95B]/50 shrink-0 shadow-lg bg-[#182012]">
              <img
                src="/images/profile-logo.png"
                alt="BEYOND Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C8A95B] font-extrabold">
                  WEAR OUR PROSPERITY.
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F3EBDD] tracking-tight">
                Workflows & Pipelines
              </h1>
              <p className="text-xs sm:text-sm text-[#D9CAA8]/80 mt-1">
                Design, orchestrate, and autonomously execute AI-driven node graphs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/n8n/templates"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#252B18] border border-[#556B2F]/30 text-xs font-semibold text-[#F3EBDD] hover:bg-[#3D4E22] transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A95B]" />
              <span>Explore Blueprints</span>
            </Link>

            <Link
              href="/n8n/canvas/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8A95B] text-[#12170D] text-xs font-bold uppercase tracking-wider hover:bg-[#d4b566] transition-all shadow-md active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Create Workflow</span>
            </Link>
          </div>
        </div>

        {/* Telemetry Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#182012] border border-[#556B2F]/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#69704A]">
                Active Workflows
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] mt-1">
                {workflows.length}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#556B2F]/20 border border-[#556B2F]/30 flex items-center justify-center text-[#C8A95B]">
              <Workflow className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#182012] border border-[#556B2F]/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#69704A]">
                Total Executions
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] mt-1">
                {totalRuns}
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#556B2F]/20 border border-[#556B2F]/30 flex items-center justify-center text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#182012] border border-[#556B2F]/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#69704A]">
                DAG Execution Engine
              </span>
              <div className="text-sm font-bold text-emerald-400 mt-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online & Cloud Hosted</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#556B2F]/20 border border-[#556B2F]/30 flex items-center justify-center text-[#8A9A5B]">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#69704A]" />
          <input
            type="text"
            placeholder="Search workflows by name or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#182012] border border-[#556B2F]/20 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#69704A] focus:outline-none focus:border-[#C8A95B]"
          />
        </div>

        {/* Workflows List Grid */}
        {loading ? (
          <div className="py-20 text-center text-xs font-mono text-[#69704A]">
            Loading workflows...
          </div>
        ) : filteredWorkflows.length === 0 ? (
          <div className="py-16 text-center rounded-3xl bg-[#182012] border border-[#556B2F]/20 p-8 space-y-4">
            <Workflow className="w-10 h-10 text-[#69704A] mx-auto" />
            <h3 className="text-sm font-bold text-[#F3EBDD]">No workflows found</h3>
            <p className="text-xs text-[#D9CAA8]/70 max-w-sm mx-auto">
              Create your first automation workflow or clone from our pre-built blueprint library.
            </p>
            <Link
              href="/n8n/templates"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#556B2F] text-[#FAF7EF] text-xs font-bold"
            >
              Browse Blueprints
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkflows.map((wf) => {
              const nodes = typeof wf.nodes === "string" ? JSON.parse(wf.nodes || "[]") : wf.nodes;
              const lastRun = wf.executions?.[0];

              return (
                <Link
                  key={wf.id}
                  href={`/n8n/canvas/${wf.id}`}
                  className="p-6 rounded-3xl bg-[#182012] border border-[#556B2F]/20 hover:border-[#C8A95B]/60 hover:shadow-[0_12px_30px_-6px_rgba(85,107,47,0.25)] hover:-translate-y-1 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-[#252B18] text-[#C8A95B] border border-[#556B2F]/30 font-bold">
                        {wf.triggerType.toUpperCase()} TRIGGER
                      </span>

                      <button
                        onClick={(e) => handleDelete(wf.id, e)}
                        title="Delete workflow"
                        className="p-1.5 rounded-lg text-[#69704A] hover:text-rose-400 hover:bg-rose-950/40 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-[#F3EBDD] group-hover:text-[#C8A95B] transition-colors line-clamp-1">
                      {wf.name}
                    </h3>

                    <p className="text-xs text-[#D9CAA8]/70 line-clamp-2 leading-relaxed">
                      {wf.description || "Interactive node automation graph."}
                    </p>
                  </div>

                  {/* Card Footer Meta */}
                  <div className="pt-6 mt-6 border-t border-[#556B2F]/15 flex items-center justify-between text-[11px] font-mono text-[#D9CAA8]/60">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#8A9A5B]" />
                      <span>{nodes.length} Steps</span>
                    </div>

                    {lastRun ? (
                      <div className="flex items-center gap-1">
                        {lastRun.status === "success" ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <AlertCircle className="w-3 h-3 text-rose-400" />
                        )}
                        <span className="text-[10px]">{lastRun.durationMs}ms</span>
                      </div>
                    ) : (
                      <span className="text-[10px] text-[#69704A]">Never Run</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
