export interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: "AI & Agents" | "Webhooks & Leads" | "DevOps & API" | "Notifications";
  badge: string;
  triggerType: "manual" | "webhook" | "schedule";
  webhookPath?: string;
  nodes: any[];
  edges: any[];
}

export const WORKFLOW_TEMPLATES: WorkflowTemplate[] = [
  {
    id: "ai-research-pipeline",
    name: "Autonomous AI Research & Synthesis",
    description: "Deep multi-stage AI analysis pipeline that structures raw research prompts into actionable markdown reports.",
    category: "AI & Agents",
    badge: "AI Agent",
    triggerType: "manual",
    nodes: [
      {
        id: "node-1",
        name: "Research Query Trigger",
        type: "trigger.manual",
        position: { x: 100, y: 200 },
        params: {
          payload: '{\n  "query": "Autonomous coding agents architecture in 2026",\n  "depth": "comprehensive",\n  "author": "Shanmukha Krishna"\n}'
        }
      },
      {
        id: "node-2",
        name: "NVIDIA Nemotron Analyzer",
        type: "ai.llm",
        position: { x: 450, y: 200 },
        params: {
          model: "nvidia/nemotron-3-ultra-550b-a55b",
          systemPrompt: "You are an autonomous AI research analyst. Structure output into Executive Summary, Technical Architecture, and Actionable Steps.",
          prompt: "Conduct a deep analysis on:\n{{ $json.query }}\n\nAuthor: {{ $json.author }}",
          temperature: 0.2
        }
      },
      {
        id: "node-3",
        name: "Format Markdown Payload",
        type: "logic.code",
        position: { x: 800, y: 200 },
        params: {
          code: "return {\n  title: `Report: ${$json.query}`,\n  report: $json.aiResult,\n  generatedAt: new Date().toISOString(),\n  status: 'COMPLETED'\n};"
        }
      },
      {
        id: "node-4",
        name: "Email Dispatch Report",
        type: "action.email",
        position: { x: 1150, y: 200 },
        params: {
          to: "krishna.addanki633@gmail.com",
          subject: "BEYOND Research Brief: {{ $json.title }}",
          body: "Hello Krishna,\n\nHere is your generated research report:\n\n{{ $json.report }}"
        }
      }
    ],
    edges: [
      { id: "e1-2", source: "node-1", target: "node-2" },
      { id: "e2-3", source: "node-2", target: "node-3" },
      { id: "e3-4", source: "node-3", target: "node-4" }
    ]
  },
  {
    id: "webhook-lead-router",
    name: "Webhook Ingestion & AI Classifier",
    description: "Receive incoming webhook leads, classify intent with AI, and conditionally alert Discord for high-priority sales inquiries.",
    category: "Webhooks & Leads",
    badge: "Webhook",
    triggerType: "webhook",
    webhookPath: "inbound-leads",
    nodes: [
      {
        id: "node-1",
        name: "Incoming Webhook",
        type: "trigger.webhook",
        position: { x: 100, y: 200 },
        params: {
          httpMethod: "POST",
          path: "inbound-leads",
          responseCode: 200
        }
      },
      {
        id: "node-2",
        name: "AI Intent Classifier",
        type: "ai.sentiment",
        position: { x: 450, y: 200 },
        params: {
          inputField: "message",
          categories: "Sales, Enterprise, Support, Partnership, Spam"
        }
      },
      {
        id: "node-3",
        name: "Is High Priority (Sales/Enterprise)?",
        type: "logic.if",
        position: { x: 800, y: 200 },
        params: {
          field: "classification",
          operator: "contains",
          value: "Sales"
        }
      },
      {
        id: "node-4",
        name: "Discord Alert (Sales Team)",
        type: "action.discord",
        position: { x: 1150, y: 120 },
        params: {
          webhookUrl: "https://discord.com/api/webhooks/demo",
          message: "🚨 **High Priority Lead Alert**\n\nLead Category: **{{ $json.classification }}**\nMessage: {{ $json.message || 'New inbound inquiry' }}\nTimestamp: {{ $now }}"
        }
      },
      {
        id: "node-5",
        name: "Auto Acknowledgement Email",
        type: "action.email",
        position: { x: 1150, y: 300 },
        params: {
          to: "krishna.addanki633@gmail.com",
          subject: "Inbound Inquiry Logged [{{ $json.classification }}]",
          body: "Inquiry received:\n{{ JSON.stringify($json, null, 2) }}"
        }
      }
    ],
    edges: [
      { id: "e1-2", source: "node-1", target: "node-2" },
      { id: "e2-3", source: "node-2", target: "node-3" },
      { id: "e3-4", source: "node-3", target: "node-4", sourceHandle: "true" },
      { id: "e3-5", source: "node-3", target: "node-5", sourceHandle: "false" }
    ]
  },
  {
    id: "github-metrics-scheduler",
    name: "GitHub API Telemetry & Health Tracker",
    description: "Scheduled automation fetching live GitHub repository statistics, aggregating commits, and sending a daily performance bulletin.",
    category: "DevOps & API",
    badge: "Scheduled",
    triggerType: "schedule",
    nodes: [
      {
        id: "node-1",
        name: "Hourly Schedule",
        type: "trigger.schedule",
        position: { x: 100, y: 200 },
        params: {
          interval: "1h"
        }
      },
      {
        id: "node-2",
        name: "Fetch GitHub Profile API",
        type: "action.http",
        position: { x: 450, y: 200 },
        params: {
          method: "GET",
          url: "https://api.github.com/users/shannu760",
          headers: '{\n  "Accept": "application/json",\n  "User-Agent": "BEYOND-n8n"\n}'
        }
      },
      {
        id: "node-3",
        name: "Extract Metrics",
        type: "logic.code",
        position: { x: 800, y: 200 },
        params: {
          code: "const resp = $json.response || {};\nreturn {\n  username: resp.login,\n  publicRepos: resp.public_repos,\n  followers: resp.followers,\n  lastUpdated: resp.updated_at,\n  status: 'METRICS_SYNCED'\n};"
        }
      },
      {
        id: "node-4",
        name: "Log Telemetry Bulletin",
        type: "action.discord",
        position: { x: 1150, y: 200 },
        params: {
          webhookUrl: "https://discord.com/api/webhooks/demo",
          message: "📊 **GitHub Telemetry Report**\n\nUser: **{{ $json.username }}**\nPublic Repos: **{{ $json.publicRepos }}**\nFollowers: **{{ $json.followers }}**"
        }
      }
    ],
    edges: [
      { id: "e1-2", source: "node-1", target: "node-2" },
      { id: "e2-3", source: "node-2", target: "node-3" },
      { id: "e3-4", source: "node-3", target: "node-4" }
    ]
  }
];
