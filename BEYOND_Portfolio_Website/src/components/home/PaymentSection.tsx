import React from "react";
import Link from "next/link";
import {
  CreditCard,
  Building2,
  Smartphone,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PAYMENT_OPTIONS, PRICING_PLANS } from "@/lib/data";
import { Card3DTilt } from "@/components/3d/Card3DTilt";

const paymentIconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-6 h-6 text-cyan-400" />,
  Building2: <Building2 className="w-6 h-6 text-emerald-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-purple-400" />,
  Coins: <Coins className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-400" />,
};

export function PaymentSection() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            <Lock className="w-3.5 h-3.5" />
            <span>Transparent Pricing & Frictionless Billing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flexible Packages & <span className="text-gradient">Universal Payment Options</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            No hidden setup fees, no bloated agency markups. We accept all major payment methods globally, including credit cards, corporate wire, PayPal, and Web3 crypto.
          </p>
        </div>

        {/* Pricing Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_PLANS.map((plan) => (
            <Card3DTilt key={plan.id} className="h-full">
              <div
                className={`glass-panel rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 h-full ${
                  plan.popular
                    ? "border-cyan-500/60 shadow-[0_0_40px_rgba(0,240,255,0.25)] bg-[#0e111c]/95"
                    : "border-white/10 hover:border-white/25 bg-[#0a0c16]/90"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-black text-xs font-extrabold shadow-lg">
                    MOST POPULAR FOR SCALING
                  </div>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    {plan.idealFor}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-400">{plan.period}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Included in Package:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Turnaround:</span>
                    <span className="font-semibold text-white">{plan.deliveryTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>Revisions:</span>
                    <span className="font-semibold text-cyan-400">{plan.revisions}</span>
                  </div>

                  <Link
                    href={`/contact?plan=${plan.id}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)]"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Payment Methods Breakdown Section */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl bg-[#0a0c14]/95">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Accepted Payment Channels & Escrow Protection
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              We provide seamless, frictionless settlement options for international clients, enterprise procurement departments, and modern Web3 native teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PAYMENT_OPTIONS.map((opt) => (
              <Card3DTilt key={opt.id} maxTilt={6}>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {paymentIconMap[opt.icon]}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-semibold">
                        {opt.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">{opt.name}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3">
                      {opt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <div className="text-[11px] text-gray-400 font-mono flex flex-wrap gap-1">
                      {opt.supported.map((tag, idx) => (
                        <span key={idx} className="bg-black/40 px-2 py-0.5 rounded border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            ))}
          </div>

          {/* Guarantee Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Money-Back Satisfaction Guarantee during Initial Sprint</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>256-Bit SSL Encrypted Checkout & Compliant Invoicing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
