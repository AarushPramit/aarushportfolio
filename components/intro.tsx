"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  /* ---------- Cursor Glow ---------- */
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, { stiffness: 160, damping: 24 });
  const y = useSpring(mouseY, { stiffness: 160, damping: 24 });

  /* Show intro only once per session */
  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("introPlayed");

    if (!hasPlayed) {
      setShowIntro(true);
    }
  }, []);

  /* Mouse glow */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 180);
      mouseY.set(e.clientY - 180);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  /* Scroll animation */
  useEffect(() => {
    if (!showIntro) return;

    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (finished) return;

      setProgress((prev) => {
        const next = Math.min(Math.max(prev + e.deltaY * 0.002, 0), 1);

        if (next >= 1 && !finished) {
          setFinished(true);

          setTimeout(() => {
            sessionStorage.setItem("introPlayed", "true");
            document.body.style.overflow = "auto";
            setShowIntro(false);
          }, 800);
        }

        return next;
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [finished, showIntro]);

  if (!showIntro) return null;

  const offset = progress * 100;

  return (
    <motion.div
      className="fixed inset-0 z-[999] overflow-hidden bg-black"
      animate={{ opacity: finished ? 0 : 1 }}
      transition={{ duration: 0.45 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0"
        style={{ x, y }}
      >
        <div
          className="h-[360px] w-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(238,105,107,0.28) 0%, rgba(82,58,120,0.18) 35%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </motion.div>

      {/* Center Text */}
      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center">
        <motion.p
          animate={{ opacity: 1 - progress }}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-400"
        >
          THE DOOR TO MY
        </motion.p>

        <motion.h1
          animate={{
            opacity: 1 - progress,
            scale: 1 - progress * 0.05,
          }}
          className="font-[family-name:var(--font-dm-sans)] text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl"
        >
          PORTFOLIO
        </motion.h1>

        <motion.p
          animate={{ opacity: 1 - progress }}
          className="mt-5 text-sm uppercase tracking-[0.28em] text-zinc-500"
        >
          AI • PRODUCT DESIGN
        </motion.p>

        <motion.p
          animate={{ opacity: 1 - progress }}
          className="mt-16 text-xs uppercase tracking-[0.32em] text-zinc-600"
        >
          SCROLL TO ENTER
        </motion.p>
      </div>

      {/* Top Panel */}
      <motion.div
        animate={{ y: `-${offset}%` }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="absolute left-0 top-0 h-1/2 w-full"
      >
        <div className="h-full w-full border-b border-white/10 bg-gradient-to-b from-[#111111] to-[#050505]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_45%)]" />
      </motion.div>

      {/* Bottom Panel */}
      <motion.div
        animate={{ y: `${offset}%` }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className="absolute bottom-0 left-0 h-1/2 w-full"
      >
        <div className="h-full w-full border-t border-white/10 bg-gradient-to-t from-[#111111] to-[#050505]" />
        <div className="absolute inset-0 bg-[linear-gradient(315deg,rgba(255,255,255,0.02),transparent_45%)]" />
      </motion.div>

      {/* Divider */}
      <motion.div
        animate={{ opacity: 1 - progress }}
        className="absolute left-0 top-1/2 z-20 h-px w-full -translate-y-1/2 bg-white/10"
      />

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-1/2 w-40 -translate-x-1/2">
        <div className="h-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ width: `${progress * 100}%` }}
            className="h-full bg-gradient-to-r from-[#EE696B] to-[#523A78]"
          />
        </div>
      </div>
    </motion.div>
  );
}