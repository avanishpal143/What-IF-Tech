"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Scan → Bake", href: "#splat" },
  { label: "The Sandbox", href: "#sandbox" },
  { label: "Set Plan PDF", href: "#setplan" },
  { label: "Cine Camera", href: "#camera" },
  { label: "M/mk AI", href: "#mmk" },
  { label: "Live Demo", href: "#demo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5" : "py-5 bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 md:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group" aria-label="WATT-IF home">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663638639686/oksTeUUKlCwCRhug.png"
                  alt="WATT-IF Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold text-lg tracking-tight font-display">
                WATT-IF
              </span>
            </a>

            {/* Desktop Navigation with sliding pill background */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 rounded-lg text-xs font-semibold text-[#B8B8B8] hover:text-white transition-colors duration-200"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="relative z-10">{link.label}</span>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="navHover"
                      className="absolute inset-0 bg-white/5 rounded-lg -z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://testflight.apple.com/join/BSy2A8Yy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-[#f5c842] hover:text-black transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(245,200,66,0.3)]"
              >
                Get the Beta
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/5 text-[#B8B8B8] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-[#B8B8B8] hover:text-white hover:bg-white/5 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-3" />
              <a
                href="https://testflight.apple.com/join/BSy2A8Yy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-[#f5c842] hover:text-black transition-all flex items-center justify-center gap-1.5"
                onClick={() => setMobileOpen(false)}
              >
                Get the Beta
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
