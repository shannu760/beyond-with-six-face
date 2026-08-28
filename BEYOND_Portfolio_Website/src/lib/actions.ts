"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  data?: {
    name: string;
    email: string;
    company?: string;
    services: string[];
    budget?: string;
    timeline?: string;
    message: string;
    paymentPreference?: string;
  };
}

export async function submitContactBrief(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Simulate network latency / server processing
  await new Promise((resolve) => setTimeout(resolve, 800));

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const company = formData.get("company")?.toString().trim() || "";
  const budget = formData.get("budget")?.toString().trim() || "";
  const timeline = formData.get("timeline")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";
  const paymentPreference = formData.get("paymentPreference")?.toString().trim() || "Credit / Debit Cards";
  
  const services = formData.getAll("services").map((s) => s.toString());

  const errors: Record<string, string> = {};

  if (!name || name.length < 2) {
    errors.name = "Please enter your full name or company representative name.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please provide a valid business email address.";
  }

  if (services.length === 0) {
    errors.services = "Please select at least one service or workshop you are interested in.";
  }

  if (!message || message.length < 10) {
    errors.message = "Please provide a brief description of your project goals (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors before submitting.",
      errors,
    };
  }

  // In production, this can dispatch to Slack/Discord webhook, Resend email API, or CRM (HubSpot/Salesforce)
  console.log("=== NEW PROJECT BRIEF RECEIVED ===");
  console.log({
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    company,
    services,
    budget,
    timeline,
    paymentPreference,
    message,
  });

  return {
    success: true,
    message: "Thank you! Your AI project brief has been received. A Senior AI Creative Strategist from Beyond will review your requirements and reach out within 2 hours with a tailored proposal.",
    data: {
      name,
      email,
      company,
      services,
      budget,
      timeline,
      message,
      paymentPreference,
    },
  };
}
