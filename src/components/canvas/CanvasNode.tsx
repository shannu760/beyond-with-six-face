"use client";

import React from "react";
import {
  Play,
  Webhook,
  Clock,
  Brain,
  Sparkles,
  Code2,
  GitFork,
  Variable,
  Globe,
  MessageSquare,
  Mail,
  Settings2,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";
import { NODE_REGISTRY } from "@/lib/engine/nodeTypes";

export interface CanvasNodeProps {
  id: string;
  name: string;
  type: string;
  position: { x: number; y: number };
  params: Record<string, any>;
  status?: "idle" | "running" | "success" | "error";
  isSelected?: boolean;
  onSelect: () => void;
  onOpenConfig: () => void;
  onDelete: () => void;
  onTestNode: () => void;
  onStartConnection: (sourceId: string, sourceHandle?: string) => void;
  onEndConnection: (targetId: string, targetHandle?: string) => void;
  isConnecting?: boolean;
}

const ICON_MAP: Record<string, any> = {
  Play,
  Webhook,
  Clock,
  Brain,
  Sparkles,
  Code2,
  GitFork,
  Variable,
  Globe,
  MessageSquare,
  Mail
};

export function CanvasNode({
  id,
  name,
  type,
  position,
  params,
  status = "idle",
  isSelected = false,
  onSelect,
  onOpenConfig,
  onDelete,
  onTestNode,
  onStartConnection,
  onEndConnection,
  isConnecting = false
}: CanvasNodeProps) {
  const nodeDef = NODE_REGISTRY[type] || {
    name: type,
    category: "logic",
    description: "",
    icon: "Settings2",
    accentColor: "#556B2F",
    inputs: 1,
    outputs: 1
  };

  const IconComponent = ICON_MAP[nodeDef.icon] || Settings2;

  // Glow classes based on execution status
  const getGlowClass = () => {
    switch (status) {
      case "running":
        return "node-glow-running border-[#C8A95B]";
      case "success":
        return "node-glow-success border-emerald-500";
      case "error":
        return "node-glow-error border-rose-500";
      default:
        return isSelected
          ? "border-[#C8A95B] shadow-[0_0_15px_rgba(200,169,91,0.25)]"
          : "border-[#556B2F]/30 hover:border-[#556B2F]/60";
    }
  };

  const isIfNode = type === "logic.if";

  return (
    <div
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className={`
        absolute w-72 rounded-2xl bg-[#1A2315] text-[#F3EBDD] border-2 transition-shadow select-none shadow-xl cursor-grab active:cursor-grabbing
        ${getGlowClass()}
      `}
    >
      {/* Node Header */}
      <div className="p-3.5 flex items-center justify-between border-b border-[#556B2F]/20">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shadow-inner text-[#FAF7EF]"
            style={{ backgroundColor: nodeDef.accentColor }}
          >
            {status === "running" ? (
              <Loader2 className="w-4 h-4 animate-spin text-[#12170D]" />
            ) : (
              <IconComponent className="w-4 h-4" />
            )}
          </div>
          <div>
            <div className="text-xs font-bold tracking-wide text-[#FAF7EF] truncate max-w-[140px]">
              {name || nodeDef.name}
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#D9CAA8]/70">
              {nodeDef.name}
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTestNode();
            }}
            title="Test this node"
            className="p-1.5 rounded-lg hover:bg-[#3D4E22] text-[#D9CAA8] hover:text-[#C8A95B] transition-colors"
          >
            <Play className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenConfig();
            }}
            title="Configure parameters"
            className="p-1.5 rounded-lg hover:bg-[#3D4E22] text-[#D9CAA8] hover:text-[#FAF7EF] transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            title="Delete node"
            className="p-1.5 rounded-lg hover:bg-rose-950/50 text-[#D9CAA8] hover:text-rose-400 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Node Body Parameters Snippet */}
      <div className="p-3 text-[11px] text-[#D9CAA8]/80 space-y-1.5 bg-[#141C10]/60 rounded-b-2xl">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#69704A]">
          <span>CATEGORY: {nodeDef.category.toUpperCase()}</span>
          {status === "success" && (
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3 h-3" /> Done
            </span>
          )}
          {status === "error" && (
            <span className="flex items-center gap-1 text-rose-400">
              <AlertCircle className="w-3 h-3" /> Error
            </span>
          )}
        </div>

        {/* Dynamic parameter snippet */}
        <div className="font-mono text-[10px] truncate bg-[#12170D] px-2 py-1 rounded border border-[#556B2F]/15 text-[#C8A95B]">
          {type === "ai.llm" && `model: ${params.model || "nemotron"}`}
          {type === "trigger.webhook" && `path: /${params.path || "webhook"}`}
          {type === "trigger.schedule" && `interval: ${params.interval || "1h"}`}
          {type === "logic.if" && `check: ${params.field || "status"} ${params.operator || "=="} ${params.value || ""}`}
          {type === "action.http" && `${params.method || "GET"} ${params.url || "endpoint"}`}
          {type === "action.email" && `to: ${params.to || "email"}`}
          {type === "action.discord" && `webhook: ${params.webhookUrl ? "configured" : "demo"}`}
          {type === "logic.code" && `js: custom transformation`}
          {type === "trigger.manual" && `mode: test JSON payload`}
          {type === "ai.sentiment" && `classify: ${params.inputField || "query"}`}
        </div>
      </div>

      {/* Input Port Handle (Left) */}
      {nodeDef.inputs > 0 && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onEndConnection(id, "input");
          }}
          title="Connect input port"
          className={`
            absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#252B18] border-2 flex items-center justify-center cursor-pointer transition-all hover:scale-125 shadow-md
            ${isConnecting ? "border-[#C8A95B] bg-[#C8A95B]/20 animate-pulse" : "border-[#556B2F] hover:border-[#C8A95B]"}
          `}
        >
          <div className="w-2 h-2 rounded-full bg-[#C8A95B]" />
        </div>
      )}

      {/* Output Port Handle(s) (Right) */}
      {isIfNode ? (
        <>
          {/* True Branch Output */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onStartConnection(id, "true");
            }}
            title="Output when condition is TRUE"
            className="absolute -right-3.5 top-[35%] -translate-y-1/2 w-7 h-7 rounded-full bg-[#1B3B22] border-2 border-emerald-500 flex items-center justify-center cursor-pointer hover:scale-125 transition-all shadow-md group/port"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover/port:scale-150 transition-transform" />
            <span className="absolute left-8 bg-[#182012] border border-emerald-500/40 text-[9px] font-mono px-1.5 py-0.5 rounded text-emerald-300 pointer-events-none opacity-0 group-hover/port:opacity-100 transition-opacity">
              True
            </span>
          </div>

          {/* False Branch Output */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onStartConnection(id, "false");
            }}
            title="Output when condition is FALSE"
            className="absolute -right-3.5 top-[65%] -translate-y-1/2 w-7 h-7 rounded-full bg-[#3B1B1B] border-2 border-rose-500 flex items-center justify-center cursor-pointer hover:scale-125 transition-all shadow-md group/port2"
          >
            <div className="w-2 h-2 rounded-full bg-rose-400 group-hover/port2:scale-150 transition-transform" />
            <span className="absolute left-8 bg-[#182012] border border-rose-500/40 text-[9px] font-mono px-1.5 py-0.5 rounded text-rose-300 pointer-events-none opacity-0 group-hover/port2:opacity-100 transition-opacity">
              False
            </span>
          </div>
        </>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation();
            onStartConnection(id, "output");
          }}
          title="Connect output port"
          className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#252B18] border-2 border-[#556B2F] flex items-center justify-center cursor-pointer hover:scale-125 hover:border-[#C8A95B] transition-all shadow-md group/port"
        >
          <div className="w-2 h-2 rounded-full bg-[#C8A95B] group-hover/port:scale-150 transition-transform" />
        </div>
      )}
    </div>
  );
}
