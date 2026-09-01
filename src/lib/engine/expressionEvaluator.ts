/**
 * Evaluates template expressions in parameter strings.
 * e.g. "Hello {{ $json.user }}! Target: {{ $json.query }}"
 */
export function evaluateExpression(
  template: any,
  context: {
    $json: Record<string, any>;
    $node?: Record<string, { json: Record<string, any> }>;
    $now?: string;
  }
): any {
  if (typeof template !== "string") {
    return template;
  }

  // Exact whole-expression replacement: e.g. "{{ $json.someArray }}"
  const exactMatch = template.trim().match(/^\{\{\s*(.*?)\s*\}\}$/);
  if (exactMatch) {
    try {
      const code = exactMatch[1];
      const fn = new Function("$json", "$node", "$now", `return (${code});`);
      return fn(context.$json || {}, context.$node || {}, context.$now || new Date().toISOString());
    } catch {
      return template;
    }
  }

  // String interpolation: e.g. "Result is {{ $json.score }}"
  return template.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, expression) => {
    try {
      const fn = new Function("$json", "$node", "$now", `return (${expression});`);
      const res = fn(context.$json || {}, context.$node || {}, context.$now || new Date().toISOString());
      if (res === undefined || res === null) return "";
      if (typeof res === "object") return JSON.stringify(res);
      return String(res);
    } catch {
      return `{{ ${expression} }}`;
    }
  });
}
