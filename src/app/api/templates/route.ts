import { NextResponse } from "next/server";
import { WORKFLOW_TEMPLATES } from "@/lib/templates";

export async function GET() {
  return NextResponse.json({ success: true, data: WORKFLOW_TEMPLATES });
}
