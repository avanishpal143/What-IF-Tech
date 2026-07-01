"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const daySteps = [
  {
    num: "01",
    title: "Pre-light morning",
    desc: "You and the Gaffer review the Set Plan PDF over coffee. He flags fixtures he doesn't have. You swap them in the sandbox, regenerate, AirDrop the new PDF. Done in 10 minutes.",
  },
  {
    num: "02",
    title: "Camera prep",
    desc: "Open the Cine camera. Body + lens to today's package. Dial the look. Verify the lux on the meter matches what your actual DP card will see at that body / ISO / shutter / aperture.",
  },
  {
    num: "03",
    title: "Walk-through",
    desc: "Use the scanned splat to walk talent's blocking before they arrive. Adjust key position if a wall casts a shadow you didn't predict. Spot the problems before they're problems.",
  },
  {
    num: "04",
    title: "First setup",
    desc: "Gaffer rigs to the PDF. You take a reference reading with a real Sekonic L-858. Compare to the app. If within ±5% — you're good. If not, room geometry moved (furniture, talent block) — re-scan or adjust.",
  },
  {
    num: "05",
    title: "Coverage",
    desc: "Save each new shot as a Recipe. The Recipe library becomes your shot log — you can scroll back through the day's lighting decisions on a meal break.",
  },
  {
    num: "06",
    title: "Wrap",
    desc: "Export final Set Plan PDF + a JSON digital twin in case a re-shoot needs the exact same setup tomorrow. The whole shoot is now archived as a re-importable scene.",
  },
];

interface ChatMessage {
  name: string;
  text: string;
  isHost: boolean;
  ts: number;
}

export function Integrations() {
  // Live stream state
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);

  // Chat state
  const [chatName, setChatName] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      name: "WATT-IF Studio",
      text: "Welcome to the WATT-IF live demo. Ask questions about scan → bake → relight, the Set Plan PDF output, photometric fixtures, or anything you see on screen.",
      isHost: true,
      ts: Date.now(),
    },
  ]);

  const chatMessagesContainerRef = useRef<HTMLDivElement>(null);

  // Load chat history & name from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("wattifChatName") || localStorage.getItem("aroChatName") || "";
      setChatName(storedName);

      try {
        const history = JSON.parse(
          localStorage.getItem("wattifChatHistory") || localStorage.getItem("aroChatHistory") || "[]"
        );
        if (history && history.length > 0) {
          setMessages((prev) => [...prev, ...history]);
        }
      } catch {
        console.warn("Failed to parse chat history");
      }
    }
  }, []);

  // Check stream status
  useEffect(() => {
    const VIEWER_URL = `https://customer-vc20asflfgjji7e5.cloudflarestream.com/377d04e86b28b4e4737ba6c7fd69f71c/views`;
    
    const checkStreamStatus = async () => {
      try {
        const res = await fetch(VIEWER_URL, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          const count = data.liveViewers ?? data.viewers ?? 0;
          setIsLive(true);
          setViewerCount(count);
        } else {
          setIsLive(false);
        }
      } catch {
        setIsLive(false);
      }
    };

    checkStreamStatus();
    const interval = setInterval(checkStreamStatus, 20000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatMessagesContainerRef.current) {
      chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setChatName(value);
    localStorage.setItem("wattifChatName", value);
  };

  const handleSend = () => {
    const text = chatInput.trim();
    if (!text) return;

    const name = chatName.trim() || "Viewer";
    const newMsg: ChatMessage = {
      name,
      text,
      isHost: false,
      ts: Date.now(),
    };

    setMessages((prev) => [...prev, newMsg]);

    // Save to localStorage
    try {
      const history = JSON.parse(localStorage.getItem("wattifChatHistory") || "[]");
      history.push(newMsg);
      if (history.length > 100) history.splice(0, history.length - 100);
      localStorage.setItem("wattifChatHistory", JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }

    setChatInput("");
  };

  return (
    <section id="day" className="relative py-24 sm:py-32 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 md:px-20 relative z-10">
        {/* A Realistic Day Header */}
        <div className="text-left max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
            A Realistic Day
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
            From pre-light to wrap, in six moves.
          </h2>
          <p className="mt-6 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-4xl font-sans">
            WATT-IF isn&apos;t a toy. It&apos;s the tool that closes the gap between &ldquo;I know what this should look like&rdquo; and &ldquo;the Gaffer rigged it correctly the first time.&rdquo; Here&apos;s how a working DP actually uses it.
          </p>
        </div>

        {/* Day steps grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {daySteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-6 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-bold text-[#f5c842] tracking-tight group-hover:text-white transition-colors font-display">
                  {step.num}
                </span>
                <h4 className="mt-3 text-sm sm:text-base font-bold text-white leading-snug font-display">
                  {step.title}
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-24 border-t border-white/5" />

        {/* Live Demo Header */}
        <div id="demo" className="text-left max-w-4xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5c842] border-l-2 border-[#f5c842] pl-3">
            Live Demo
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
            Watch WATT-IF in action.
          </h2>
          <p className="mt-6 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-4xl font-sans">
            When a live demo session is active, you can watch WATT-IF being demonstrated in real time below — capturing rooms, baking splats, placing photometric fixtures, comparing app lux to a real Sekonic. Sessions are announced on social. When offline, grab the iOS beta and try it yourself.
          </p>
        </div>

        {/* Live Stream & Chat Panel split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-stretch">
          {/* Stream Box */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.01] flex flex-col justify-between min-h-[300px] sm:min-h-[400px]">
            {/* Status Bar */}
            <div className="flex items-center justify-between p-4 bg-white/[0.03] border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${isLive ? "bg-[#ff3b3b] shadow-[0_0_8px_rgba(255,59,59,0.8)] animate-pulse" : "bg-white/15"}`} />
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                  {isLive ? "Live Now" : "Live Demo Stream"}
                </span>
              </div>
              {isLive && (
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b3b] animate-pulse" />
                  <span>{viewerCount.toLocaleString()} watching</span>
                </div>
              )}
            </div>

            {/* Embed or Offline Box */}
            <div className="relative flex-1 bg-black flex items-center justify-center">
              {isLive ? (
                <div className="absolute inset-0">
                  <iframe
                    src="https://customer-vc20asflfgjji7e5.cloudflarestream.com/377d04e86b28b4e4737ba6c7fd69f71c/iframe?autoplay=true&muted=true&controls=true&loop=false"
                    className="w-full h-full border-none absolute top-0 left-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="WATT-IF Studio Live Demo"
                  />
                </div>
              ) : (
                <div className="p-8 text-center flex flex-col items-center max-w-sm">
                  <span className="text-sm font-bold uppercase tracking-wider text-white/40">Offline</span>
                  <p className="mt-2 text-xs sm:text-sm text-white/40 leading-relaxed">
                    Follow WATT-IF on social to be notified when the next live demo starts.
                  </p>
                  <a
                    href="https://testflight.apple.com/join/BSy2A8Yy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-white/90 transition-all"
                  >
                    Get the iOS Beta
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Chat Box */}
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.01] flex flex-col min-h-[400px]">
            {/* Header */}
            <div className="p-4 bg-white/[0.03] border-b border-white/5">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">Live Chat</span>
            </div>

            {/* Name Selector */}
            <div className="p-3 border-b border-white/5">
              <input
                type="text"
                value={chatName}
                onChange={handleNameChange}
                placeholder="Your name"
                maxLength={24}
                className="w-full px-3 py-2 text-xs bg-white/[0.03] border border-white/5 rounded-lg text-white placeholder-white/30 outline-none focus:border-white/10 transition-colors"
              />
            </div>

            {/* Messages */}
            <div
              ref={chatMessagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[300px] scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((msg, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className={`text-[10px] font-semibold tracking-wide ${msg.isHost ? "text-[#f5c842]" : "text-white/60"}`}>
                    {msg.name}
                  </span>
                  <span className="text-xs text-white/80 leading-relaxed font-sans break-words bg-white/[0.01] border border-white/[0.03] p-2.5 rounded-xl">
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Input Row */}
            <div className="p-3 bg-white/[0.03] border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Say something..."
                maxLength={200}
                className="flex-1 px-3 py-2 text-xs bg-white/[0.03] border border-white/5 rounded-lg text-white placeholder-white/30 outline-none focus:border-white/10 transition-colors"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-white text-black font-bold text-xs rounded-lg hover:bg-white/90 transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
