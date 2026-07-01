"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Vercel", abbr: "▲" },
  { name: "Stripe", abbr: "S" },
  { name: "Linear", abbr: "◈" },
  { name: "Notion", abbr: "N" },
  { name: "Figma", abbr: "F" },
  { name: "Slack", abbr: "#" },
  { name: "GitHub", abbr: "⊛" },
  { name: "AWS", abbr: "⬡" },
  { name: "Shopify", abbr: "⟨S⟩" },
  { name: "Salesforce", abbr: "☁" },
  { name: "HubSpot", abbr: "⊕" },
  { name: "Atlassian", abbr: "⊞" },
];

const stats = [
  { value: "50K+", label: "Teams worldwide", color: "#3B82F6" },
  { value: "99.9%", label: "Uptime SLA", color: "#7C3AED" },
  { value: "4.2B+", label: "Tasks automated", color: "#06B6D4" },
  { value: "$840M+", label: "Revenue generated", color: "#22C55E" },
];

export function SocialProof() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Section divider */}
      <div className="premium-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#707070] uppercase tracking-[0.2em] font-medium mb-8">
            Trusted by teams at world-class companies
          </p>

          {/* Marquee logos */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-2.5 glass rounded-xl hover:glass-strong transition-all duration-300 group cursor-default flex-shrink-0"
                >
                  <span
                    className="text-lg font-bold text-[#707070] group-hover:text-white transition-colors w-6 text-center"
                    aria-hidden="true"
                  >
                    {logo.abbr}
                  </span>
                  <span className="text-sm font-medium text-[#707070] group-hover:text-[#B8B8B8] transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to right, #040404, transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to left, #040404, transparent)" }} />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-3xl p-6 text-center card-hover gradient-border"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                className="text-display-sm font-black mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-[#707070]">{stat.label}</div>
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full opacity-60"
                style={{ background: stat.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Featured in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
        >
          <span className="text-xs text-[#707070] uppercase tracking-widest">Featured in</span>
          {["TechCrunch", "Forbes", "Product Hunt", "Wired", "YC"].map((pub) => (
            <span
              key={pub}
              className="px-3 py-1 glass rounded-lg text-xs font-medium text-[#707070] hover:text-white transition-colors cursor-default"
            >
              {pub}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
