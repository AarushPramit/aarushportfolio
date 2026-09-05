"use client";

import { motion } from "framer-motion";

interface InteractiveHoverButtonProps {
  text?: string;
  className?: string;
}

export function InteractiveHoverButton({
  text = "Button",
  className = "",
}: InteractiveHoverButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`group relative rounded-full p-[1.5px] ${className}`}
      style={{
  background:
    "linear-gradient(135deg, #46D9FF 0%, #2AA8FF 55%, #4F6BFF 100%)",
}}
    >
      {/* Inner glass layer */}
      <div
        className="
          relative flex h-12 items-center justify-center
          overflow-hidden rounded-full
          bg-black/70 px-8 backdrop-blur-xl
          transition-all duration-300
          group-hover:bg-black/45
        "
      >
        {/* Sliding text */}
        <div className="relative h-6 overflow-hidden">
         <span
  className="
    block font-sans text-[18px] font-normal
    tracking-[-0.02em] text-white
    transition-transform duration-300 ease-out
    group-hover:-translate-y-6
  "
>
  {text}
</span>

          <span
            className="
              absolute left-0 top-0 translate-y-6
              text-[18px] font-semibold text-white
              transition-transform duration-300 ease-out
              group-hover:translate-y-0
            "
          >
            {text}
          </span>
        </div>

        {/* Shine sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <div
            className="
              absolute -left-20 top-0 h-full w-12 rotate-[20deg]
              bg-gradient-to-r from-transparent via-white/30 to-transparent
              opacity-0 blur-sm transition-all duration-700
              group-hover:left-[120%] group-hover:opacity-100
            "
          />
        </div>
      </div>

      {/* Gradient glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-full
          opacity-0 blur-md transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
  background:
    "linear-gradient(135deg, rgba(70,217,255,0.30), rgba(42,168,255,0.24), rgba(79,107,255,0.22))",
}}
      />
    </motion.button>
  );
}