"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { N8nNavbar } from "@/components/navigation/N8nNavbar";
import { WorkflowCanvas } from "@/components/canvas/WorkflowCanvas";
import { Loader2 } from "lucide-react";

export default function N8nCanvasEditorPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [workflow, setWorkflow] = useState<any>(null);
  const [loading, setLoading] = useState(id !== "new");

  useEffect(() => {
    if (id === "new") {
      setWorkflow({
        name: "New Automation Workflow",
        nodes: [],
        edges: []
      });
      return;
    }

    const fetchWorkflow = async () => {
      try {
        const res = await fetch(`/api/workflows/${id}`);
        const data = await res.json();
        if (data.success) {
          setWorkflow(data.data);
        } else {
          router.push("/n8n");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflow();
  }, [id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#12170D] flex flex-col">
        <N8nNavbar />
        <div className="flex-1 flex items-center justify-center text-xs font-mono text-[#C8A95B] gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Loading Visual Canvas Studio...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#12170D] flex flex-col overflow-hidden">
      <N8nNavbar />
      <WorkflowCanvas workflowId={id === "new" ? undefined : id} initialWorkflow={workflow} />
    </div>
  );
}
