"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Database, Layers, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Scattered tools, fragmented data",
    description: "Your team juggles 12+ disconnected apps. Every handoff creates friction, delays, and data loss. Nothing talks to anything.",
    stat: "73%",
    statLabel: "of work is context-switching",
    color: "#EF4444",
  },
  {
    icon: Clock,
    title: "Manual tasks drain your best people",
    description: "Talented engineers spend 40% of their week on repetitive operations instead of building the future. That's a talent crisis.",
    stat: "40%",
    statLabel: "of engineering time wasted",
    color: "#F59E0B",
  },
  {
    icon: Database,
    title: "Insights buried under noise",
    description: "Critical signals exist in your data. But they're locked behind dashboards nobody checks, alerts nobody acts on, reports nobody reads.",
    stat: "88%",
    statLabel: "of data goes unanalyzed",
    color: "#7C3AED",
  },
  {
    icon: AlertTriangle,
    title: "Moving slow in a fast market",
    description: "Your competitors are shipping in hours. You're shipping in weeks. The gap isn't talent — it's the infrastructure underneath.",
    stat: "5x",
    statLabel: "slower time-to-market",
    color: "#3B82F6",
  },
];

export function Problem() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(239,68,68,0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="badge mb-6 mx-auto w-fit"
            style={{ background: "rgba(239,68,68,0.1)", borderColor: "rgba(239,68,68,0.25)", color: "#fca5a5" }}>
            <AlertTriangle className="w-3 h-3" />
            The problem with modern work
          </div>
          <h2 className="text-display-md font-black text-white mb-5 tracking-tight">
            Your team is brilliant.{" "}
            <span className="text-gradient">Your tools are holding them back.</span>
          </h2>
          <p className="text-lg text-[#B8B8B8] leading-relaxed">
            Every fast-growing team hits the same wall. The tools that got you here
            can&apos;t take you to the next order of magnitude.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-3xl p-7 relative overflow-hidden group card-hover"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(circle, ${problem.color}10 0%, transparent 70%)`,
                  filter: "blur(30px)",
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${problem.color}15`, border: `1px solid ${problem.color}25` }}
              >
                <problem.icon className="w-5.5 h-5.5" style={{ color: problem.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-[#707070] leading-relaxed text-sm mb-6">{problem.description}</p>

              {/* Stat */}
              <div className="flex items-end gap-3 pt-4 border-t border-white/[0.05]">
                <span className="text-3xl font-black" style={{ color: problem.color }}>
                  {problem.stat}
                </span>
                <span className="text-xs text-[#707070] pb-1">{problem.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition to solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[#707070] text-sm mb-4">There&apos;s a better way</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 text-[#3B82F6] mx-auto rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
