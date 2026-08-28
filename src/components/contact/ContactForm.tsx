"use client";

import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  CreditCard,
  Building2,
  Smartphone,
  Coins,
  DollarSign,
  Calendar,
} from "lucide-react";
import { submitContactBrief, ContactFormState } from "@/lib/actions";
import { SERVICES, PAYMENT_OPTIONS } from "@/lib/data";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white font-bold text-base shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Processing AI Project Brief...</span>
        </>
      ) : (
        <>
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span>Submit AI Project Brief & Request Proposal</span>
          <Send className="w-4 h-4 ml-1" />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactBrief, initialState);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "AI Advertisements & Commercials",
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$1,000 - $3,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Within 48-72 Hours");
  const [selectedPayment, setSelectedPayment] = useState<string>("Credit / Debit Cards");

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const budgets = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $10,000",
    "$10,000+ (Enterprise)",
  ];

  const timelines = [
    "⚡ 24-Hour Rush Delivery",
    "Within 48-72 Hours",
    "Within 1-2 Weeks",
    "Monthly Creative Retainer",
  ];

  if (state.success) {
    return (
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.2)] bg-[#0c1219] text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Project Brief Received Successfully!
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            {state.message}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-lg mx-auto text-left text-xs text-gray-300 space-y-2.5">
          <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
            Summary of Your AI Request:
          </div>
          <div><strong className="text-cyan-400">Name:</strong> {state.data?.name}</div>
          <div><strong className="text-cyan-400">Email:</strong> {state.data?.email}</div>
          <div><strong className="text-cyan-400">Company:</strong> {state.data?.company || "Not specified"}</div>
          <div><strong className="text-cyan-400">Services:</strong> {state.data?.services?.join(", ")}</div>
          <div><strong className="text-cyan-400">Budget Range:</strong> {state.data?.budget}</div>
          <div><strong className="text-cyan-400">Timeline:</strong> {state.data?.timeline}</div>
          <div><strong className="text-cyan-400">Payment Option:</strong> {state.data?.paymentPreference}</div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/18004923966?text=Hi%20Beyond%20Team%2C%20I%20just%20submitted%20a%20project%20brief%20for%20${encodeURIComponent(state.data?.name || "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-lg transition-all"
          >
            Direct WhatsApp VIP Fast-Track
          </a>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 rounded-xl glass-panel text-gray-300 hover:text-white text-xs font-semibold"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl bg-[#090b12]/95 space-y-8">
      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Please correct the following:</div>
            <ul className="list-disc list-inside mt-1 space-y-0.5">
              {Object.values(state.errors).map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 1. Services Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between">
          <span>1. Select Required AI Capabilities</span>
          <span className="text-xs font-normal text-cyan-400">Multiple allowed</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICES.map((s) => {
            const isSelected = selectedServices.includes(s.title);
            return (
              <label
                key={s.id}
                onClick={() => toggleService(s.title)}
                className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                  isSelected
                    ? "bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    : "bg-white/[0.02] border-white/10 text-gray-300 hover:border-white/25"
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={s.title}
                  checked={isSelected}
                  onChange={() => {}}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 ${
                    isSelected ? "bg-cyan-500 text-black font-bold" : "border border-white/30"
                  }`}
                >
                  {isSelected && "✓"}
                </div>
                <span className="text-xs font-semibold">{s.title}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. Client Details */}
      <div className="space-y-4">
        <label className="block text-sm font-bold text-white uppercase tracking-wider">
          2. Your Contact Information
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">
              Full Name / Rep Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Alex Morgan"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">
              Business Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="alex@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">
              Company / Brand Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Acme Brands Inc."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">
              Phone / WhatsApp Hotline
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 3. Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Budget */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
            Estimated Budget Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setSelectedBudget(b)}
                className={`p-2.5 rounded-lg border text-xs font-semibold transition-all text-center ${
                  selectedBudget === b
                    ? "bg-purple-500/20 border-purple-400 text-white"
                    : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <input type="hidden" name="budget" value={selectedBudget} />
        </div>

        {/* Timeline */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
            Target Delivery Timeline
          </label>
          <div className="grid grid-cols-2 gap-2">
            {timelines.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTimeline(t)}
                className={`p-2.5 rounded-lg border text-xs font-semibold transition-all text-center ${
                  selectedTimeline === t
                    ? "bg-cyan-500/20 border-cyan-400 text-white"
                    : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <input type="hidden" name="timeline" value={selectedTimeline} />
        </div>
      </div>

      {/* 4. Preferred Payment Option */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
          Preferred Payment Channel
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["Credit / Debit Cards", "Bank Wire (ACH/SWIFT)", "Apple Pay / PayPal", "Crypto (USDT/USDC)"].map(
            (p) => (
              <button
                key={p}
                type="button"
                onClick={() => setSelectedPayment(p)}
                className={`p-2 rounded-lg border text-[11px] font-medium transition-all text-center ${
                  selectedPayment === p
                    ? "bg-emerald-500/20 border-emerald-400 text-white"
                    : "bg-white/[0.02] border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {p}
              </button>
            )
          )}
        </div>
        <input type="hidden" name="paymentPreference" value={selectedPayment} />
      </div>

      {/* 5. Message / Project Goals */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
          Project Details, Goals & Reference Links *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe what you want to achieve (e.g. 'We need 5 high-converting TikTok video ads for our new beverage line with UGC actors, plus an 8K staged product render for our website hero banner')..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <SubmitButton />
      </div>

      {/* Reassurance notes */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 pt-2">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Strict NDA Protection Guaranteed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-cyan-400" />
          <span>Average response time: Under 2 hours</span>
        </div>
      </div>
    </form>
  );
}
