import { NextResponse } from "next/server";
import { executeNode } from "@/lib/engine/executors";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nodeId = "test-node", nodeName = "Test Node", nodeType, params = {}, inputData = {} } = body;

    if (!nodeType) {
      return NextResponse.json({ success: false, error: "nodeType is required" }, { status: 400 });
    }

    const result = await executeNode({
      nodeId,
      nodeName,
      nodeType,
      params,
      inputData,
      nodeOutputs: {}
    });

    return NextResponse.json({
      success: result.status === "success",
      data: result
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
