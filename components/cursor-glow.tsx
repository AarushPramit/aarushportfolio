"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 180, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 180, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      style={{ x, y }}
    >
      <div
        className="h-80 w-80 rounded-full"
        style={{
  background: `
    radial-gradient(
      circle,
      rgba(70,217,255,0.42) 0%,
      rgba(70,217,255,0.22) 28%,
      rgba(70,217,255,0.10) 52%,
      transparent 72%
    )
  `,
  filter: "blur(30px)",
}}
      />
    </motion.div>
  );
}