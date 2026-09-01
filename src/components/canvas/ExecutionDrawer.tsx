"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Clock,
  Code2,
  Layers,
  ChevronRight,
  Terminal,
  Activity,
  Copy,
  Check
} from "lucide-react";

export interface ExecutionDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  execution: {
    executionId: string;
    status: "success" | "error";
    durationMs: number;
    startedAt: string;
    stepLogs: {
      nodeId: string;
      nodeName: string;
      nodeType: string;
      status: "pending" | "running" | "success" | "error";
      inputData: Record<string, any>;
      outputData: Record<string, any>;
      error?: string;
      durationMs: number;
    }[];
    finalOutput: Record<string, any>;
    error?: string;
  } | null;
}

export function ExecutionDrawer({ isOpen, onClose, execution }: ExecutionDrawerProps) {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"output" | "input" | "final">("output");
  const [copied, setCopied] = useState(false);

  if (!isOpen || !execution) return null;

  const currentStep = execution.stepLogs[selectedStepIndex] || execution.stepLogs[0];

  const handleCopy = (data: any) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[500px] lg:w-[600px] bg-[#182012]/95 backdrop-blur-xl border-l border-[#556B2F]/30 z-40 flex flex-col shadow-2xl animate-fade-in">
      {/* Drawer Header */}
      <div className="p-4 border-b border-[#556B2F]/20 flex items-center justify-between bg-[#141C10]">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center ${
              execution.status === "success"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
            }`}
          >
            {execution.status === "success" ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#F3EBDD] uppercase tracking-wider">
                Execution {execution.status === "success" ? "Succeeded" : "Failed"}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#252B18] text-[#C8A95B] border border-[#556B2F]/30">
                {execution.durationMs}ms
              </span>
            </div>
            <p className="text-[10px] text-[#D9CAA8]/60 font-mono">{execution.executionId}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-[#252B18] text-[#D9CAA8] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Drawer Layout: Steps List on Left, JSON Inspector on Right */}
      <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">
        {/* Step Navigation Rail */}
        <div className="w-full sm:w-48 bg-[#12170D] border-b sm:border-b-0 sm:border-r border-[#556B2F]/20 p-2 overflow-y-auto space-y-1">
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#69704A] px-2 py-1 font-semibold">
            Execution Steps ({execution.stepLogs.length})
          </div>
          {execution.stepLogs.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={step.nodeId + idx}
                onClick={() => setSelectedStepIndex(idx)}
                className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                  isSelected
                    ? "bg-[#252B18] text-[#F3EBDD] font-bold border border-[#C8A95B]/40 shadow-sm"
                    : "text-[#D9CAA8]/70 hover:bg-[#1C2516] hover:text-[#F3EBDD]"
                }`}
              >
                <div className="truncate pr-1">
                  <div className="truncate text-[11px]">{step.nodeName}</div>
                  <div className="text-[9px] text-[#69704A] font-mono">{step.durationMs}ms</div>
                </div>
                {step.status === "success" ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* JSON Inspector & Data Flow */}
        <div className="flex-1 flex flex-col bg-[#141C10] overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#556B2F]/15 bg-[#182012]/40">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("output")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeTab === "output"
                    ? "bg-[#556B2F] text-[#FAF7EF]"
                    : "text-[#D9CAA8]/70 hover:text-[#F3EBDD]"
                }`}
              >
                Output JSON
              </button>
              <button
                onClick={() => setActiveTab("input")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeTab === "input"
                    ? "bg-[#556B2F] text-[#FAF7EF]"
                    : "text-[#D9CAA8]/70 hover:text-[#F3EBDD]"
                }`}
              >
                Input JSON
              </button>
              <button
                onClick={() => setActiveTab("final")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeTab === "final"
                    ? "bg-[#556B2F] text-[#FAF7EF]"
                    : "text-[#D9CAA8]/70 hover:text-[#F3EBDD]"
                }`}
              >
                Final Result
              </button>
            </div>

            <button
              onClick={() =>
                handleCopy(
                  activeTab === "output"
                    ? currentStep?.outputData
                    : activeTab === "input"
                    ? currentStep?.inputData
                    : execution.finalOutput
                )
              }
              className="p-1.5 rounded-lg hover:bg-[#252B18] text-[#D9CAA8] hover:text-[#C8A95B] transition-colors"
              title="Copy JSON"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* JSON Viewer */}
          <div className="flex-1 p-4 overflow-y-auto font-mono text-xs">
            {currentStep?.error && activeTab === "output" && (
              <div className="mb-3 p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300">
                <span className="font-bold">Error:</span> {currentStep.error}
              </div>
            )}

            <pre className="text-[#C8A95B] leading-relaxed select-text">
              {JSON.stringify(
                activeTab === "output"
                  ? currentStep?.outputData || {}
                  : activeTab === "input"
                  ? currentStep?.inputData || {}
                  : execution.finalOutput || {},
                null,
                2
              )}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
