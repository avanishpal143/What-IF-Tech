"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[40px] p-12 md:p-20 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(6,182,212,0.1) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Background aurora */}
          <div className="absolute inset-0 overflow-hidden rounded-[40px]">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -left-1/4 w-full h-full rounded-full opacity-30"
              style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.5) 0%, transparent 70%)", filter: "blur(60px)" }}
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
              className="absolute -bottom-1/2 -right-1/4 w-full h-full rounded-full opacity-20"
              style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.5) 0%, transparent 70%)", filter: "blur(80px)" }}
            />
            <div className="absolute inset-0 grid-overlay opacity-20" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="badge">
                <Zap className="w-3 h-3" />
                Get started in 5 minutes
              </div>
            </motion.div>

            {/* Headline */}
            <h2 className="text-display-lg font-black text-white mb-6 tracking-tight">
              Your team is ready{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">to move at light speed.</span>
            </h2>

            <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 50,000+ teams who automated their operations with Aro.
              No credit card. No lock-in. Pure velocity.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#"
                className="btn-primary text-white flex items-center gap-2.5 text-base px-9 py-4 w-full sm:w-auto justify-center"
              >
                <Zap className="w-4 h-4" />
                Start building free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="btn-secondary text-white flex items-center gap-2.5 text-base px-9 py-4 w-full sm:w-auto justify-center"
              >
                Talk to sales
              </a>
            </div>

            {/* Trust items */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#707070]">
              {[
                "No credit card required",
                "14-day free trial",
                "Cancel anytime",
                "SOC 2 Type II certified",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
