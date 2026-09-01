export type NodeCategory = "trigger" | "ai" | "logic" | "action" | "data";

export interface NodeParamDefinition {
  name: string;
  label: string;
  type: "string" | "text" | "number" | "boolean" | "select" | "code" | "json" | "headers";
  defaultValue?: any;
  options?: { label: string; value: string }[];
  description?: string;
  placeholder?: string;
  required?: boolean;
}

export interface NodeTypeDefinition {
  type: string;
  name: string;
  category: NodeCategory;
  description: string;
  icon: string;
  accentColor: string;
  inputs: number; // 0 for triggers, 1 for single input, 2+ for merge
  outputs: number | string[]; // 1 for standard, ["true", "false"] for IF branching
  defaultParams: Record<string, any>;
  paramDefinitions: NodeParamDefinition[];
}

export const NODE_REGISTRY: Record<string, NodeTypeDefinition> = {
  // --- TRIGGERS ---
  "trigger.manual": {
    type: "trigger.manual",
    name: "Manual Trigger",
    category: "trigger",
    description: "Start workflow manually with sample test payload",
    icon: "Play",
    accentColor: "#556B2F",
    inputs: 0,
    outputs: 1,
    defaultParams: {
      payload: '{\n  "query": "Research latest developments in autonomous AI agents",\n  "user": "Shanmukha Krishna",\n  "timestamp": "2026-09-01"\n}'
    },
    paramDefinitions: [
      {
        name: "payload",
        label: "Initial Test Payload (JSON)",
        type: "json",
        description: "JSON object passed to subsequent nodes when executed manually."
      }
    ]
  },
  "trigger.webhook": {
    type: "trigger.webhook",
    name: "Webhook Trigger",
    category: "trigger",
    description: "Triggers on incoming HTTP POST/GET requests",
    icon: "Webhook",
    accentColor: "#C8A95B",
    inputs: 0,
    outputs: 1,
    defaultParams: {
      httpMethod: "POST",
      path: "lead-ingestion",
      responseMode: "immediate",
      responseCode: 200
    },
    paramDefinitions: [
      {
        name: "httpMethod",
        label: "HTTP Method",
        type: "select",
        options: [
          { label: "POST", value: "POST" },
          { label: "GET", value: "GET" },
          { label: "PUT", value: "PUT" }
        ]
      },
      {
        name: "path",
        label: "Webhook Path Identifier",
        type: "string",
        placeholder: "e.g. lead-ingestion",
        required: true
      },
      {
        name: "responseCode",
        label: "Immediate HTTP Response Code",
        type: "number",
        defaultValue: 200
      }
    ]
  },
  "trigger.schedule": {
    type: "trigger.schedule",
    name: "Schedule / Cron",
    category: "trigger",
    description: "Executes workflow at specified recurring intervals",
    icon: "Clock",
    accentColor: "#8A9A5B",
    inputs: 0,
    outputs: 1,
    defaultParams: {
      interval: "1h",
      cronExpression: "0 * * * *"
    },
    paramDefinitions: [
      {
        name: "interval",
        label: "Trigger Interval",
        type: "select",
        options: [
          { label: "Every 5 Minutes", value: "5m" },
          { label: "Every 15 Minutes", value: "15m" },
          { label: "Every Hour", value: "1h" },
          { label: "Daily at 09:00", value: "daily" }
        ]
      }
    ]
  },

  // --- AI NODES ---
  "ai.llm": {
    type: "ai.llm",
    name: "AI LLM Generator",
    category: "ai",
    description: "Generate structured text, summaries, code, or answers using NVIDIA Nemotron",
    icon: "Brain",
    accentColor: "#556B2F",
    inputs: 1,
    outputs: 1,
    defaultParams: {
      model: "nvidia/nemotron-3-ultra-550b-a55b",
      systemPrompt: "You are an expert autonomous AI workflow analyst in the BEYOND platform. Respond clearly with structured insights.",
      prompt: "Analyze the following request:\n{{ $json.query || $json.text || JSON.stringify($json) }}",
      temperature: 0.3,
      maxTokens: 1024
    },
    paramDefinitions: [
      {
        name: "model",
        label: "Model",
        type: "select",
        options: [
          { label: "NVIDIA Nemotron 3 Ultra 550B", value: "nvidia/nemotron-3-ultra-550b-a55b" },
          { label: "OpenAI GPT-4o", value: "gpt-4o" },
          { label: "OpenAI GPT-4o-mini", value: "gpt-4o-mini" }
        ]
      },
      {
        name: "systemPrompt",
        label: "System Prompt Instructions",
        type: "text"
      },
      {
        name: "prompt",
        label: "User Prompt (supports {{ $json.field }})",
        type: "text",
        required: true
      },
      {
        name: "temperature",
        label: "Temperature (0.0 to 1.0)",
        type: "number",
        defaultValue: 0.3
      }
    ]
  },
  "ai.sentiment": {
    type: "ai.sentiment",
    name: "AI Classifier",
    category: "ai",
    description: "Classify incoming input into categories (e.g. Urgent, High, Low)",
    icon: "Sparkles",
    accentColor: "#6B7A3A",
    inputs: 1,
    outputs: 1,
    defaultParams: {
      inputField: "query",
      categories: "Support, Sales, Bug, Feature Request, Inquiry"
    },
    paramDefinitions: [
      {
        name: "inputField",
        label: "Input Property to Classify",
        type: "string",
        defaultValue: "query"
      },
      {
        name: "categories",
        label: "Comma-Separated Categories",
        type: "string",
        defaultValue: "Support, Sales, Bug, Feature Request, Inquiry"
      }
    ]
  },

  // --- LOGIC & TRANSFORM ---
  "logic.code": {
    type: "logic.code",
    name: "Code (JS Sandbox)",
    category: "logic",
    description: "Execute custom JavaScript transformations on incoming items",
    icon: "Code2",
    accentColor: "#A68838",
    inputs: 1,
    outputs: 1,
    defaultParams: {
      code: "// $json contains the input payload\nreturn {\n  ...$json,\n  processedAt: new Date().toISOString(),\n  summary: `Processed: ${$json.query || 'payload'}`\n};"
    },
    paramDefinitions: [
      {
        name: "code",
        label: "JavaScript Transformation Code",
        type: "code",
        description: "Write JS that returns a modified JSON object."
      }
    ]
  },
  "logic.if": {
    type: "logic.if",
    name: "IF Condition",
    category: "logic",
    description: "Branch execution path based on expression conditions",
    icon: "GitFork",
    accentColor: "#8A9A5B",
    inputs: 1,
    outputs: ["true", "false"],
    defaultParams: {
      field: "status",
      operator: "equals",
      value: "success"
    },
    paramDefinitions: [
      {
        name: "field",
        label: "Field Path to Check",
        type: "string",
        placeholder: "e.g. status, score, confidence"
      },
      {
        name: "operator",
        label: "Comparison Operator",
        type: "select",
        options: [
          { label: "Equals (==)", value: "equals" },
          { label: "Not Equals (!=)", value: "not_equals" },
          { label: "Contains", value: "contains" },
          { label: "Greater Than (>)", value: "greater_than" },
          { label: "Less Than (<)", value: "less_than" },
          { label: "Is Empty / Null", value: "is_empty" },
          { label: "Is Not Empty", value: "is_not_empty" }
        ]
      },
      {
        name: "value",
        label: "Comparison Value",
        type: "string"
      }
    ]
  },
  "logic.set": {
    type: "logic.set",
    name: "Set / Transform",
    category: "logic",
    description: "Set, rename, or structure output attributes",
    icon: "Variable",
    accentColor: "#3D4E22",
    inputs: 1,
    outputs: 1,
    defaultParams: {
      variables: '{\n  "status": "APPROVED",\n  "environment": "production"\n}'
    },
    paramDefinitions: [
      {
        name: "variables",
        label: "Variables to Merge / Set (JSON)",
        type: "json"
      }
    ]
  },

  // --- ACTIONS & INTEGRATIONS ---
  "action.http": {
    type: "action.http",
    name: "HTTP Request",
    category: "action",
    description: "Make REST API calls (GET, POST, PUT, DELETE) with headers & auth",
    icon: "Globe",
    accentColor: "#556B2F",
    inputs: 1,
    outputs: 1,
    defaultParams: {
      method: "GET",
      url: "https://api.github.com/users/shannu760",
      headers: '{\n  "Accept": "application/json",\n  "User-Agent": "BEYOND-n8n-Engine"\n}',
      body: ""
    },
    paramDefinitions: [
      {
        name: "method",
        label: "HTTP Method",
        type: "select",
        options: [
          { label: "GET", value: "GET" },
          { label: "POST", value: "POST" },
          { label: "PUT", value: "PUT" },
          { label: "PATCH", value: "PATCH" },
          { label: "DELETE", value: "DELETE" }
        ]
      },
      {
        name: "url",
        label: "URL Endpoint",
        type: "string",
        placeholder: "https://api.example.com/v1/resource",
        required: true
      },
      {
        name: "headers",
        label: "Headers (JSON)",
        type: "json"
      },
      {
        name: "body",
        label: "Request Body (JSON / Raw)",
        type: "text"
      }
    ]
  },
  "action.discord": {
    type: "action.discord",
    name: "Discord / Slack Webhook",
    category: "action",
    description: "Send alert notifications to Discord channel or Slack webhook",
    icon: "MessageSquare",
    accentColor: "#C8A95B",
    inputs: 1,
    outputs: 1,
    defaultParams: {
      webhookUrl: "https://discord.com/api/webhooks/demo",
      message: "🟢 **BEYOND Workflow Notification**\n\nTask: {{ $json.query || 'Automation Completed' }}\nStatus: Success ✅"
    },
    paramDefinitions: [
      {
        name: "webhookUrl",
        label: "Webhook URL",
        type: "string",
        placeholder: "https://discord.com/api/webhooks/...",
        required: true
      },
      {
        name: "message",
        label: "Message Content (Markdown)",
        type: "text",
        required: true
      }
    ]
  },
  "action.email": {
    type: "action.email",
    name: "Email Dispatcher",
    category: "action",
    description: "Send formatted HTML or plain text email notification",
    icon: "Mail",
    accentColor: "#556B2F",
    inputs: 1,
    outputs: 1,
    defaultParams: {
      to: "krishna.addanki633@gmail.com",
      subject: "BEYOND Automation Report: {{ $json.query || 'Task Update' }}",
      body: "Hello Krishna,\n\nYour workflow has executed successfully with the following summary:\n{{ JSON.stringify($json, null, 2) }}"
    },
    paramDefinitions: [
      {
        name: "to",
        label: "Recipient Email",
        type: "string",
        defaultValue: "krishna.addanki633@gmail.com",
        required: true
      },
      {
        name: "subject",
        label: "Email Subject",
        type: "string",
        required: true
      },
      {
        name: "body",
        label: "Email Message Body",
        type: "text",
        required: true
      }
    ]
  }
};
