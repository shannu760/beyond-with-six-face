"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Plus,
  Save,
  RotateCcw,
  Maximize2,
  Minimize2,
  Download,
  Upload,
  Loader2,
  Sparkles,
  Layers,
  History,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { CanvasNode } from "./CanvasNode";
import { ConnectionEdge } from "./ConnectionEdge";
import { NodeSidebar } from "./NodeSidebar";
import { NodeConfigModal } from "./NodeConfigModal";
import { ExecutionDrawer } from "./ExecutionDrawer";
import { WorkflowNode, WorkflowEdge, WorkflowRunResult } from "@/lib/engine/dagRunner";
import { NODE_REGISTRY } from "@/lib/engine/nodeTypes";

export interface WorkflowCanvasProps {
  workflowId?: string;
  initialWorkflow?: {
    id?: string;
    name?: string;
    description?: string;
    triggerType?: string;
    webhookPath?: string;
    nodes?: any;
    edges?: any;
  };
}

export function WorkflowCanvas({ workflowId, initialWorkflow }: WorkflowCanvasProps) {
  const [workflowName, setWorkflowName] = useState(initialWorkflow?.name || "Autonomous AI Pipeline");
  const [nodes, setNodes] = useState<WorkflowNode[]>(() => {
    if (initialWorkflow?.nodes) {
      return typeof initialWorkflow.nodes === "string" ? JSON.parse(initialWorkflow.nodes) : initialWorkflow.nodes;
    }
    return [
      {
        id: "node-1",
        name: "Manual Trigger",
        type: "trigger.manual",
        position: { x: 100, y: 220 },
        params: {
          payload: '{\n  "query": "Research latest AI agent architectures",\n  "author": "Shanmukha Krishna"\n}'
        }
      },
      {
        id: "node-2",
        name: "NVIDIA Nemotron Analyzer",
        type: "ai.llm",
        position: { x: 460, y: 220 },
        params: {
          model: "nvidia/nemotron-3-ultra-550b-a55b",
          prompt: "Conduct a deep analysis on:\n{{ $json.query }}",
          temperature: 0.3
        }
      },
      {
        id: "node-3",
        name: "Format Output",
        type: "logic.code",
        position: { x: 820, y: 220 },
        params: {
          code: "return {\n  summary: $json.aiResult,\n  status: 'PROCESSED',\n  timestamp: $now\n};"
        }
      }
    ];
  });

  const [edges, setEdges] = useState<WorkflowEdge[]>(() => {
    if (initialWorkflow?.edges) {
      return typeof initialWorkflow.edges === "string" ? JSON.parse(initialWorkflow.edges) : initialWorkflow.edges;
    }
    return [
      { id: "e1-2", source: "node-1", target: "node-2" },
      { id: "e2-3", source: "node-2", target: "node-3" }
    ];
  });

  // Canvas Pan & Zoom State
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Connecting State
  const [connectionStart, setConnectionStart] = useState<{ sourceId: string; sourceHandle?: string } | null>(null);
  const [mouseCanvasPos, setMouseCanvasPos] = useState({ x: 0, y: 0 });

  // Selected Node & UI Drawers
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [configModalNode, setConfigModalNode] = useState<WorkflowNode | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [executionDrawerOpen, setExecutionDrawerOpen] = useState(false);

  // Execution & Saving State
  const [isExecuting, setIsExecuting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [executionResult, setExecutionResult] = useState<WorkflowRunResult | null>(null);
  const [nodeExecutionStatus, setNodeExecutionStatus] = useState<Record<string, "idle" | "running" | "success" | "error">>({});

  const containerRef = useRef<HTMLDivElement>(null);

  // Convert screen client coordinates to canvas coordinates
  const screenToCanvas = useCallback(
    (clientX: number, clientY: number) => {
      if (!containerRef.current) return { x: 0, y: 0 };
      const rect = containerRef.current.getBoundingClientRect();
      return {
        x: (clientX - rect.left - pan.x) / zoom,
        y: (clientY - rect.top - pan.y) / zoom
      };
    },
    [pan, zoom]
  );

  // Pan & Zoom Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || (e.target as HTMLElement).classList.contains("canvas-bg")) {
      setIsPanning(true);
      setConnectionStart(null);
      setSelectedNodeId(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const cPos = screenToCanvas(e.clientX, e.clientY);
    setMouseCanvasPos(cPos);

    if (isPanning) {
      setPan((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
    } else if (draggedNodeId) {
      setNodes((prev) =>
        prev.map((n) =>
          n.id === draggedNodeId
            ? {
                ...n,
                position: {
                  x: Math.round((cPos.x - dragOffset.x) / 10) * 10,
                  y: Math.round((cPos.y - dragOffset.y) / 10) * 10
                }
              }
            : n
        )
      );
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setDraggedNodeId(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const newZoom = Math.min(Math.max(zoom * zoomFactor, 0.4), 2.0);
    setZoom(newZoom);
  };

  // Node Dragging Start
  const handleNodeMouseDown = (nodeId: string, clientX: number, clientY: number) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return;
    const cPos = screenToCanvas(clientX, clientY);
    setDraggedNodeId(nodeId);
    setDragOffset({
      x: cPos.x - node.position.x,
      y: cPos.y - node.position.y
    });
    setSelectedNodeId(nodeId);
  };

  // Port Connection Handling
  const handleStartConnection = (sourceId: string, sourceHandle?: string) => {
    setConnectionStart({ sourceId, sourceHandle });
  };

  const handleEndConnection = (targetId: string, targetHandle?: string) => {
    if (!connectionStart || connectionStart.sourceId === targetId) {
      setConnectionStart(null);
      return;
    }

    // Check if edge already exists
    const exists = edges.some(
      (e) =>
        e.source === connectionStart.sourceId &&
        e.target === targetId &&
        e.sourceHandle === connectionStart.sourceHandle
    );

    if (!exists) {
      const newEdge: WorkflowEdge = {
        id: `e-${Date.now()}`,
        source: connectionStart.sourceId,
        target: targetId,
        sourceHandle: connectionStart.sourceHandle,
        targetHandle: targetHandle || "input"
      };
      setEdges((prev) => [...prev, newEdge]);
    }

    setConnectionStart(null);
  };

  // Add Node from Sidebar
  const handleAddNode = (type: string) => {
    const nodeDef = NODE_REGISTRY[type];
    const newNode: WorkflowNode = {
      id: `node-${Date.now()}`,
      name: nodeDef?.name || type,
      type,
      position: {
        x: Math.round((-pan.x + 300) / zoom / 10) * 10,
        y: Math.round((-pan.y + 200) / zoom / 10) * 10
      },
      params: { ...(nodeDef?.defaultParams || {}) }
    };
    setNodes((prev) => [...prev, newNode]);
    setSelectedNodeId(newNode.id);
  };

  // Delete Node & Associated Edges
  const handleDeleteNode = (nodeId: string) => {
    setNodes((prev) => prev.filter((n) => n.id !== nodeId));
    setEdges((prev) => prev.filter((e) => e.source !== nodeId && e.target !== nodeId));
    if (selectedNodeId === nodeId) setSelectedNodeId(null);
  };

  // Delete Single Edge
  const handleDeleteEdge = (edgeId: string) => {
    setEdges((prev) => prev.filter((e) => e.id !== edgeId));
  };

  // Auto Layout Nodes Left-to-Right
  const handleAutoLayout = () => {
    const incoming = new Map<string, number>();
    nodes.forEach((n) => incoming.set(n.id, 0));
    edges.forEach((e) => incoming.set(e.target, (incoming.get(e.target) || 0) + 1));

    const rootNodes = nodes.filter((n) => (incoming.get(n.id) || 0) === 0);
    const layoutNodes: WorkflowNode[] = [];
    const visited = new Set<string>();

    let currentX = 100;
    let queue: string[] = rootNodes.map((n) => n.id);

    while (queue.length > 0) {
      const nextLevel: string[] = [];
      let currentY = 160;

      for (const id of queue) {
        if (visited.has(id)) continue;
        visited.add(id);
        const node = nodes.find((n) => n.id === id);
        if (node) {
          layoutNodes.push({
            ...node,
            position: { x: currentX, y: currentY }
          });
          currentY += 160;
        }

        const outEdges = edges.filter((e) => e.source === id);
        outEdges.forEach((e) => nextLevel.push(e.target));
      }

      queue = nextLevel;
      currentX += 360;
    }

    // Add unvisited orphan nodes
    nodes.forEach((n) => {
      if (!visited.has(n.id)) {
        layoutNodes.push({ ...n, position: { x: currentX, y: 200 } });
        currentX += 360;
      }
    });

    setNodes(layoutNodes);
  };

  // Execute Workflow
  const handleExecuteWorkflow = async () => {
    setIsExecuting(true);
    setNodeExecutionStatus({});
    setExecutionResult(null);

    // Initial running indicator on root nodes
    const rootNodes = nodes.filter((n) => !edges.some((e) => e.target === n.id));
    const initialStatus: Record<string, "idle" | "running" | "success" | "error"> = {};
    nodes.forEach((n) => (initialStatus[n.id] = "idle"));
    rootNodes.forEach((n) => (initialStatus[n.id] = "running"));
    setNodeExecutionStatus(initialStatus);

    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workflowId,
          nodes,
          edges,
          triggerSource: "manual"
        })
      });

      const data = await res.json();
      if (data.success && data.data) {
        const result: WorkflowRunResult = data.data;
        setExecutionResult(result);

        // Update visual node statuses from step logs
        const finalStatuses: Record<string, "idle" | "running" | "success" | "error"> = {};
        nodes.forEach((n) => (finalStatuses[n.id] = "idle"));
        result.stepLogs.forEach((log) => {
          finalStatuses[log.nodeId] = log.status === "pending" ? "idle" : log.status;
        });
        setNodeExecutionStatus(finalStatuses);
        setExecutionDrawerOpen(true);
      } else {
        alert(`Execution Error: ${data.error || "Failed to run workflow"}`);
      }
    } catch (e: any) {
      alert(`Network error: ${e.message}`);
    } finally {
      setIsExecuting(false);
    }
  };

  // Save Workflow
  const handleSaveWorkflow = async () => {
    setIsSaving(true);
    try {
      const url = workflowId && workflowId !== "new" ? `/api/workflows/${workflowId}` : `/api/workflows`;
      const method = workflowId && workflowId !== "new" ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: workflowName,
          nodes,
          edges
        })
      });

      const data = await res.json();
      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2500);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  // Calculate Node Port Absolute Coordinates for Edges
  const getNodePortCoords = (nodeId: string, handle?: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return { x: 0, y: 0 };

    const isIf = node.type === "logic.if";
    const width = 288; // w-72 = 288px

    if (handle === "true") {
      return { x: node.position.x + width, y: node.position.y + 45 };
    }
    if (handle === "false") {
      return { x: node.position.x + width, y: node.position.y + 80 };
    }
    if (handle === "output") {
      return { x: node.position.x + width, y: node.position.y + 60 };
    }
    // Default Input Port (Left Center)
    return { x: node.position.x, y: node.position.y + 60 };
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      className="relative w-full h-[calc(100vh-57px)] bg-[#12170D] overflow-hidden select-none canvas-grid cursor-crosshair"
    >
      {/* Top Floating Action Bar */}
      <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        {/* Workflow Title Input */}
        <div className="pointer-events-auto flex items-center gap-3 bg-[#182012]/90 backdrop-blur-md border border-[#556B2F]/30 px-4 py-2 rounded-2xl shadow-xl">
          <input
            type="text"
            value={workflowName}
            onChange={(e) => setWorkflowName(e.target.value)}
            className="text-xs sm:text-sm font-bold text-[#F3EBDD] bg-transparent border-none focus:outline-none focus:ring-0 w-48 sm:w-64"
          />
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#252B18] text-[#8A9A5B] font-bold">
            {nodes.length} Nodes
          </span>
        </div>

        {/* Action Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Add Node Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#252B18] border border-[#556B2F]/30 text-[#F3EBDD] text-xs font-semibold hover:bg-[#3D4E22] transition-all shadow-md active:scale-95"
          >
            <Plus className="w-3.5 h-3.5 text-[#C8A95B]" />
            <span className="hidden sm:inline">Add Node</span>
          </button>

          {/* Auto Layout */}
          <button
            onClick={handleAutoLayout}
            title="Auto-organize nodes"
            className="p-2 rounded-xl bg-[#252B18] border border-[#556B2F]/30 text-[#D9CAA8] hover:text-[#FAF7EF] hover:bg-[#3D4E22] transition-all shadow-md"
          >
            <Layers className="w-4 h-4" />
          </button>

          {/* Save Workflow Button */}
          <button
            onClick={handleSaveWorkflow}
            disabled={isSaving}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#252B18] border border-[#556B2F]/30 text-[#FAF7EF] text-xs font-semibold hover:bg-[#3D4E22] transition-all shadow-md active:scale-95"
          >
            {isSaving ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C8A95B]" />
            ) : saveSuccess ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Save className="w-3.5 h-3.5 text-[#C8A95B]" />
            )}
            <span className="hidden sm:inline">{saveSuccess ? "Saved!" : "Save"}</span>
          </button>

          {/* Execute Workflow Primary Button */}
          <button
            onClick={handleExecuteWorkflow}
            disabled={isExecuting}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#556B2F] hover:bg-[#6B7A3A] text-[#FAF7EF] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_8px_20px_-4px_rgba(85,107,47,0.45)] active:scale-95 disabled:opacity-50"
          >
            {isExecuting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>{isExecuting ? "Running DAG..." : "Execute Workflow"}</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Infinite Space */}
      <div
        className="canvas-bg absolute inset-0 origin-top-left"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`
        }}
      >
        {/* SVG Canvas for Connection Edges */}
        <svg className="absolute inset-0 w-[5000px] h-[5000px] pointer-events-none overflow-visible">
          {/* Active Edges */}
          {edges.map((edge) => {
            const srcPos = getNodePortCoords(edge.source, edge.sourceHandle || "output");
            const tgtPos = getNodePortCoords(edge.target, "input");
            const isSourceRunning = nodeExecutionStatus[edge.source] === "running" || isExecuting;

            return (
              <ConnectionEdge
                key={edge.id}
                id={edge.id}
                sourceX={srcPos.x}
                sourceY={srcPos.y}
                targetX={tgtPos.x}
                targetY={tgtPos.y}
                sourceHandle={edge.sourceHandle}
                isActive={isSourceRunning}
                onDelete={() => handleDeleteEdge(edge.id)}
              />
            );
          })}

          {/* Connecting Preview Line */}
          {connectionStart && (
            <path
              d={`M ${getNodePortCoords(connectionStart.sourceId, connectionStart.sourceHandle || "output").x} ${
                getNodePortCoords(connectionStart.sourceId, connectionStart.sourceHandle || "output").y
              } L ${mouseCanvasPos.x} ${mouseCanvasPos.y}`}
              fill="none"
              stroke="#C8A95B"
              strokeWidth={2}
              strokeDasharray="4 4"
              className="animate-pulse"
            />
          )}
        </svg>

        {/* Node Cards */}
        {nodes.map((node) => (
          <div
            key={node.id}
            onMouseDown={(e) => handleNodeMouseDown(node.id, e.clientX, e.clientY)}
          >
            <CanvasNode
              id={node.id}
              name={node.name}
              type={node.type}
              position={node.position}
              params={node.params}
              status={nodeExecutionStatus[node.id] || "idle"}
              isSelected={selectedNodeId === node.id}
              isConnecting={Boolean(connectionStart)}
              onSelect={() => setSelectedNodeId(node.id)}
              onOpenConfig={() => setConfigModalNode(node)}
              onDelete={() => handleDeleteNode(node.id)}
              onTestNode={() => setConfigModalNode(node)}
              onStartConnection={handleStartConnection}
              onEndConnection={handleEndConnection}
            />
          </div>
        ))}
      </div>

      {/* Bottom Floating Canvas Navigation Controls */}
      <div className="absolute bottom-6 left-6 z-30 flex items-center gap-1 bg-[#182012]/90 backdrop-blur-md border border-[#556B2F]/30 p-1.5 rounded-2xl shadow-xl">
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.1, 2.0))}
          className="px-2.5 py-1 rounded-xl text-xs font-mono text-[#D9CAA8] hover:bg-[#252B18] hover:text-[#FAF7EF]"
          title="Zoom In"
        >
          +
        </button>
        <span className="text-[10px] font-mono text-[#C8A95B] px-1 font-bold">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.1, 0.4))}
          className="px-2.5 py-1 rounded-xl text-xs font-mono text-[#D9CAA8] hover:bg-[#252B18] hover:text-[#FAF7EF]"
          title="Zoom Out"
        >
          -
        </button>
        <button
          onClick={() => {
            setZoom(1);
            setPan({ x: 0, y: 0 });
          }}
          className="p-1.5 rounded-xl text-[#D9CAA8] hover:bg-[#252B18] hover:text-[#FAF7EF]"
          title="Reset View"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Sidebars & Modals */}
      <NodeSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onAddNode={handleAddNode}
      />

      <NodeConfigModal
        node={configModalNode}
        isOpen={Boolean(configModalNode)}
        onClose={() => setConfigModalNode(null)}
        onSave={(nodeId, name, params) => {
          setNodes((prev) =>
            prev.map((n) => (n.id === nodeId ? { ...n, name, params } : n))
          );
        }}
      />

      <ExecutionDrawer
        isOpen={executionDrawerOpen}
        onClose={() => setExecutionDrawerOpen(false)}
        execution={executionResult}
      />
    </div>
  );
}
