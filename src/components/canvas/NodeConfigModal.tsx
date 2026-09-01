"use client";

import React, { useState } from "react";
import {
  X,
  Play,
  CheckCircle2,
  AlertCircle,
  Copy,
  Code2,
  Loader2,
  Sparkles
} from "lucide-react";
import { NODE_REGISTRY, NodeParamDefinition } from "@/lib/engine/nodeTypes";

export interface NodeConfigModalProps {
  node: {
    id: string;
    name: string;
    type: string;
    params: Record<string, any>;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (nodeId: string, name: string, params: Record<string, any>) => void;
}

export function NodeConfigModal({ node, isOpen, onClose, onSave }: NodeConfigModalProps) {
  if (!isOpen || !node) return null;

  const nodeDef = NODE_REGISTRY[node.type];
  const [nodeName, setNodeName] = useState(node.name || nodeDef?.name || "");
  const [params, setParams] = useState<Record<string, any>>({
    ...(nodeDef?.defaultParams || {}),
    ...(node.params || {})
  });

  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<any>(null);
  const [mockInput, setMockInput] = useState('{\n  "query": "Autonomous Agents in 2026",\n  "status": "APPROVED"\n}');

  const handleParamChange = (name: string, value: any) => {
    setParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleTestRun = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      let parsedInput = {};
      try {
        parsedInput = JSON.parse(mockInput);
      } catch {}

      const res = await fetch("/api/execute/node", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nodeId: node.id,
          nodeName,
          nodeType: node.type,
          params,
          inputData: parsedInput
        })
      });
      const data = await res.json();
      setTestResult(data);
    } catch (e: any) {
      setTestResult({ success: false, error: e.message });
    } finally {
      setTesting(false);
    }
  };

  const handleSaveAndClose = () => {
    onSave(node.id, nodeName, params);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-2xl max-h-[90vh] bg-[#182012] border border-[#556B2F]/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        {/* Modal Header */}
        <div className="p-5 border-b border-[#556B2F]/20 flex items-center justify-between bg-[#141C10]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-[#FAF7EF] shadow-md"
              style={{ backgroundColor: nodeDef?.accentColor || "#556B2F" }}
            >
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={nodeName}
                  onChange={(e) => setNodeName(e.target.value)}
                  className="text-sm font-bold text-[#F3EBDD] bg-transparent border-b border-transparent hover:border-[#556B2F]/40 focus:border-[#C8A95B] focus:outline-none px-1"
                />
              </div>
              <p className="text-[11px] text-[#D9CAA8]/70 px-1 font-mono">{nodeDef?.name || node.type}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-[#252B18] text-[#D9CAA8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Parameters Form */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#C8A95B] font-mono">
              Parameters & Inputs
            </h3>

            {nodeDef?.paramDefinitions?.map((param: NodeParamDefinition) => (
              <div key={param.name} className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#F3EBDD]">
                  {param.label} {param.required && <span className="text-rose-400">*</span>}
                </label>

                {param.type === "select" && (
                  <select
                    value={params[param.name] ?? param.defaultValue ?? ""}
                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#12170D] border border-[#556B2F]/30 text-xs text-[#F3EBDD] focus:outline-none focus:border-[#C8A95B]"
                  >
                    {param.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}

                {param.type === "text" && (
                  <textarea
                    rows={4}
                    value={params[param.name] ?? param.defaultValue ?? ""}
                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                    placeholder={param.placeholder}
                    className="w-full px-3 py-2 rounded-xl bg-[#12170D] border border-[#556B2F]/30 text-xs text-[#F3EBDD] font-mono placeholder-[#69704A] focus:outline-none focus:border-[#C8A95B]"
                  />
                )}

                {(param.type === "code" || param.type === "json") && (
                  <textarea
                    rows={6}
                    value={params[param.name] ?? param.defaultValue ?? ""}
                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                    placeholder={param.placeholder}
                    className="w-full px-3 py-2 rounded-xl bg-[#0D1109] border border-[#556B2F]/40 text-xs text-[#C8A95B] font-mono focus:outline-none focus:border-[#C8A95B]"
                  />
                )}

                {param.type === "string" && (
                  <input
                    type="text"
                    value={params[param.name] ?? param.defaultValue ?? ""}
                    onChange={(e) => handleParamChange(param.name, e.target.value)}
                    placeholder={param.placeholder}
                    className="w-full px-3 py-2 rounded-xl bg-[#12170D] border border-[#556B2F]/30 text-xs text-[#F3EBDD] placeholder-[#69704A] focus:outline-none focus:border-[#C8A95B]"
                  />
                )}

                {param.type === "number" && (
                  <input
                    type="number"
                    value={params[param.name] ?? param.defaultValue ?? ""}
                    onChange={(e) => handleParamChange(param.name, Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[#12170D] border border-[#556B2F]/30 text-xs text-[#F3EBDD] focus:outline-none focus:border-[#C8A95B]"
                  />
                )}

                {param.description && (
                  <p className="text-[10px] text-[#D9CAA8]/60">{param.description}</p>
                )}
              </div>
            ))}
          </div>

          {/* Test Node Sandbox */}
          <div className="pt-4 border-t border-[#556B2F]/20 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A9A5B] font-mono">
                🧪 Test Step Execution
              </h3>
              <button
                onClick={handleTestRun}
                disabled={testing}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#556B2F] hover:bg-[#6B7A3A] text-[#FAF7EF] text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
              >
                {testing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                <span>Run Step Test</span>
              </button>
            </div>

            {testResult && (
              <div className="p-3 rounded-xl bg-[#0D1109] border border-[#556B2F]/30 text-xs font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-[#556B2F]/20 text-[10px]">
                  <span className={testResult.success ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                    {testResult.success ? "✓ Step Success" : "✕ Step Failed"}
                  </span>
                  <span className="text-[#69704A]">{testResult.data?.durationMs || 0}ms</span>
                </div>
                <pre className="mt-2 text-[11px] text-[#D9CAA8] overflow-x-auto max-h-40">
                  {JSON.stringify(testResult.data?.outputData || testResult, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#556B2F]/20 bg-[#141C10] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#D9CAA8] hover:bg-[#252B18] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveAndClose}
            className="px-5 py-2 rounded-xl bg-[#C8A95B] text-[#12170D] text-xs font-bold hover:bg-[#d4b566] transition-all shadow-md"
          >
            Save Parameters
          </button>
        </div>
      </div>
    </div>
  );
}
