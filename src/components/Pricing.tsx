"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Building2, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small teams getting started with AI automation.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    color: "#3B82F6",
    popular: false,
    cta: "Start free trial",
    features: [
      "Up to 10 team members",
      "50 AI workflow automations",
      "10 integrations",
      "Basic analytics dashboard",
      "Email & chat support",
      "2GB data storage",
      "API access",
    ],
    unavailable: ["Custom AI agents", "Enterprise SSO", "Priority support", "SLA guarantee"],
  },
  {
    name: "Pro",
    icon: Star,
    description: "For growing teams that need power, speed, and advanced AI.",
    monthlyPrice: 149,
    yearlyPrice: 119,
    color: "#7C3AED",
    popular: true,
    cta: "Start free trial",
    features: [
      "Unlimited team members",
      "Unlimited AI automations",
      "300+ integrations",
      "Advanced analytics & BI",
      "Custom AI agents (5)",
      "Priority support (4h SLA)",
      "50GB data storage",
      "Webhooks & API access",
      "Custom dashboards",
      "Team permissions & RBAC",
    ],
    unavailable: ["Enterprise SSO", "Custom SLA"],
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "Mission-critical operations for large organizations.",
    monthlyPrice: null,
    yearlyPrice: null,
    color: "#06B6D4",
    popular: false,
    cta: "Talk to sales",
    features: [
      "Everything in Pro",
      "Unlimited AI agents",
      "Enterprise SSO (SAML, OIDC)",
      "Custom data residency",
      "Dedicated infrastructure",
      "Custom SLA (99.99% uptime)",
      "White-glove onboarding",
      "Dedicated customer success",
      "Audit logs & compliance",
      "Custom billing & invoicing",
      "On-premise deployment option",
    ],
    unavailable: [],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="badge mb-6 mx-auto w-fit">
            <Shield className="w-3 h-3" />
            Simple, transparent pricing
          </div>
          <h2 className="text-display-md font-black text-white mb-5 tracking-tight">
            Invest in speed.{" "}
            <span className="text-gradient">Not overhead.</span>
          </h2>
          <p className="text-lg text-[#B8B8B8] mb-10">
            Start free. Scale as you grow. No hidden fees, no surprise invoices.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!yearly ? "text-white" : "text-[#707070]"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-14 h-7 rounded-full transition-all duration-300"
              style={{ background: yearly ? "linear-gradient(135deg, #3B82F6, #7C3AED)" : "rgba(255,255,255,0.1)" }}
              aria-label="Toggle billing period"
            >
              <motion.div
                animate={{ x: yearly ? 28 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${yearly ? "text-white" : "text-[#707070]"}`}>Annual</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
                Save 20%
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative glass-card rounded-3xl overflow-hidden transition-all duration-300 ${plan.popular ? "ring-1 ring-purple-500/25 shadow-glow-purple scale-105" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #3B82F6)" }}
                >
                  ✦ Most Popular
                </div>
              )}

              <div className={`p-7 ${plan.popular ? "pt-12" : ""}`}>
                {/* Plan header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}25` }}
                  >
                    <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-[#707070] mb-6 leading-relaxed">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <div className="flex items-end gap-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={yearly ? "y" : "m"}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-4xl font-black text-white"
                        >
                          ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-sm text-[#707070] pb-1">/month</span>
                      {yearly && (
                        <span className="text-xs text-[#707070] pb-1">billed annually</span>
                      )}
                    </div>
                  ) : (
                    <div className="text-2xl font-black text-white">Custom pricing</div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 mb-7 ${
                    plan.popular
                      ? "btn-primary text-white"
                      : "btn-secondary text-white"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.color}20` }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-[#B8B8B8]">{feature}</span>
                    </div>
                  ))}
                  {plan.unavailable.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 opacity-30">
                      <div className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0" />
                      <span className="text-sm text-[#707070] line-through">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { icon: "🔒", text: "No credit card required" },
            { icon: "↩", text: "14-day free trial" },
            { icon: "✦", text: "Cancel anytime" },
            { icon: "🛡", text: "SOC 2 Type II secured" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-[#707070]">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
