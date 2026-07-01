"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9990] hidden md:block"
      style={{ x: springX, y: springY, top: 0, left: 0 }}
    >
      <div
        className="w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,1) 0%, rgba(124,58,237,0.6) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
}
