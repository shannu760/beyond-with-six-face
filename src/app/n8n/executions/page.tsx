"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { N8nNavbar } from "@/components/navigation/N8nNavbar";
import {
  History,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  RefreshCw,
  Terminal,
  Activity,
  Layers
} from "lucide-react";

export default function N8nExecutionsPage() {
  const [executions, setExecutions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedExecution, setSelectedExecution] = useState<any | null>(null);

  const fetchExecutions = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/executions");
      const data = await res.json();
      if (data.success) {
        setExecutions(data.data || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExecutions();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#12170D] text-[#F3EBDD]">
      <N8nNavbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#556B2F]/20">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C8A95B] font-bold">
              Telemetry & Audit Logs
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] tracking-tight">
              Execution History
            </h1>
          </div>

          <button
            onClick={fetchExecutions}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#182012] border border-[#556B2F]/30 text-xs font-semibold text-[#D9CAA8] hover:text-[#FAF7EF] hover:bg-[#252B18] transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Execution Table / List */}
        {loading ? (
          <div className="py-20 text-center text-xs font-mono text-[#69704A]">
            Loading execution logs...
          </div>
        ) : executions.length === 0 ? (
          <div className="py-16 text-center rounded-3xl bg-[#182012] border border-[#556B2F]/20 p-8 space-y-2">
            <History className="w-8 h-8 text-[#69704A] mx-auto" />
            <h3 className="text-sm font-bold text-[#F3EBDD]">No execution runs recorded yet</h3>
            <p className="text-xs text-[#D9CAA8]/70">
              Trigger a workflow from the canvas or via webhook to see telemetry logs here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Executions Table */}
            <div className="lg:col-span-7 space-y-3">
              {executions.map((exec) => {
                const isSelected = selectedExecution?.id === exec.id;
                return (
                  <div
                    key={exec.id}
                    onClick={() => setSelectedExecution(exec)}
                    className={`p-4 rounded-2xl bg-[#182012] border transition-all cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? "border-[#C8A95B] shadow-md bg-[#1D2716]"
                        : "border-[#556B2F]/20 hover:border-[#556B2F]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          exec.status === "success"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                        }`}
                      >
                        {exec.status === "success" ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <AlertCircle className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#F3EBDD] group-hover:text-[#C8A95B] transition-colors">
                          {exec.workflow?.name || "Workflow Run"}
                        </div>
                        <div className="text-[10px] font-mono text-[#D9CAA8]/60 mt-0.5 flex items-center gap-2">
                          <span>{new Date(exec.startedAt).toLocaleTimeString()}</span>
                          <span>•</span>
                          <span className="uppercase text-[#8A9A5B]">{exec.triggerSource}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#C8A95B] font-bold">
                        {exec.durationMs || 0}ms
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#69704A] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Execution Inspector Panel */}
            <div className="lg:col-span-5">
              {selectedExecution ? (
                <div className="p-5 rounded-3xl bg-[#182012] border border-[#556B2F]/30 shadow-xl space-y-4 sticky top-24">
                  <div className="flex items-center justify-between pb-3 border-b border-[#556B2F]/20">
                    <div>
                      <h3 className="text-xs font-bold text-[#F3EBDD] uppercase font-mono">
                        Run Details
                      </h3>
                      <p className="text-[10px] text-[#D9CAA8]/60 font-mono">
                        {selectedExecution.id}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-bold ${
                        selectedExecution.status === "success"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-rose-500/20 text-rose-400"
                      }`}
                    >
                      {selectedExecution.status}
                    </span>
                  </div>

                  {/* Steps List */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#69704A]">
                      Executed Steps ({selectedExecution.logs?.length || 0})
                    </span>
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {selectedExecution.logs?.map((step: any) => (
                        <div
                          key={step.id}
                          className="p-2 rounded-xl bg-[#12170D] border border-[#556B2F]/20 flex items-center justify-between text-xs"
                        >
                          <div className="flex items-center gap-2">
                            {step.status === "success" ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <AlertCircle className="w-3 h-3 text-rose-400" />
                            )}
                            <span className="font-semibold text-[#F3EBDD] text-[11px]">
                              {step.nodeName}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-[#8A9A5B]">
                            {step.durationMs}ms
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Output JSON Preview */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#69704A]">
                      Result Output
                    </span>
                    <pre className="p-3 rounded-2xl bg-[#0D1109] border border-[#556B2F]/30 text-[10px] font-mono text-[#C8A95B] max-h-48 overflow-y-auto leading-relaxed">
                      {selectedExecution.resultData || "{}"}
                    </pre>
                  </div>

                  <Link
                    href={`/n8n/canvas/${selectedExecution.workflowId}`}
                    className="w-full py-2.5 rounded-xl bg-[#556B2F] hover:bg-[#6B7A3A] text-[#FAF7EF] text-xs font-bold text-center block transition-all shadow-md"
                  >
                    Open in Visual Canvas
                  </Link>
                </div>
              ) : (
                <div className="p-8 rounded-3xl bg-[#182012]/40 border border-dashed border-[#556B2F]/20 text-center text-xs text-[#69704A]">
                  Select an execution run to inspect detailed step logs and payloads.
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
