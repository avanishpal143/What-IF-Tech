"use client";

import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] overflow-hidden border-t border-white/5 py-12">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-sm tracking-widest font-display uppercase">
              WATT-IF
            </span>
          </div>

          {/* Copy */}
          <div className="text-[11px] text-white/40 font-sans text-center md:text-left">
            © 2026 WATT-IF Studio. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy.html"
              className="text-[11px] text-white/40 hover:text-white transition-colors font-semibold"
            >
              Privacy
            </a>
            <a
              href="https://testflight.apple.com/join/BSy2A8Yy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/40 hover:text-white transition-colors font-semibold"
            >
              iOS Beta
            </a>
            <a
              href="mailto:contact@wattif.studio"
              className="text-[11px] text-white/40 hover:text-white transition-colors font-semibold flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
