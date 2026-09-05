"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PortfolioButton from "./portfolio-button";
import Link from "next/link";

const cards = [
  { src: "/aarush.jpg", title: "UI Designer" },
  { src: "/aarush2.jpeg", title: "Creative" },
  { src: "/aarush3.jpeg", title: "Education" },
];

export default function HeroSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
  if (window.innerWidth >= 768) {
    const handleWheel = (e: WheelEvent) => {
      if (step < 3) {
        e.preventDefault();

        if (e.deltaY > 0) {
          setStep((prev) => Math.min(prev + 1, 3));
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () =>
      window.removeEventListener("wheel", handleWheel);
  }

  const timer1 = setTimeout(() => setStep(1), 500);
  const timer2 = setTimeout(() => setStep(2), 1200);
  const timer3 = setTimeout(() => setStep(3), 1900);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
  };
}, []);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen bg-transparent px-6 pt-28 text-white md:px-14"
    >
      {/* Heading */}
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-[family:var(--font-dm)] text-[42px] font-semibold leading-[1.05] tracking-[-0.045em] md:text-7xl"
        >
          Designing Experiences
          <br />
          that feel Human.
        </motion.h1>
      </div>

      {/* Card Deck */}
      {/* ---------- Desktop Card Deck ---------- */}
<div className="relative mt-16 hidden h-[430px] items-center justify-center md:flex">
  {cards.map((card, index) => {
    const positions = [
      step >= 1 ? -340 : 0,
      0,
      step >= 3 ? 340 : 0,
    ];

    return (
      <motion.div
        key={card.title}
        initial={false}
        animate={{
          x: positions[index],
          rotate:
            index === 0 && step >= 1
              ? -8
              : index === 2 && step >= 3
              ? 8
              : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 42,
          damping: 18,
          mass: 1.4,
        }}
        className="absolute"
        style={{ zIndex: 30 - index }}
      >
        <FlipCard image={card.src} title={card.title} />
      </motion.div>
    );
  })}
</div>

{/* ---------- Mobile Horizontal Scroll ---------- */}
<div className="mt-12 md:hidden">
  <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide">
    {cards.map((card) => (
      <div
        key={card.title}
        className="w-[250px] shrink-0 snap-center"
      >
        <FlipCard image={card.src} title={card.title} />
      </div>
    ))}
  </div>

  <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
    Swipe to explore →
  </p>
</div>

      
    </section>
  );
}

function FlipCard({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
  onHoverStart={() => setFlipped(true)}
  onHoverEnd={() => setFlipped(false)}
  onTap={() => setFlipped(!flipped)}
  style={{ perspective: 1200 }}
  className="h-[340px] w-[250px] cursor-pointer"
>
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 overflow-hidden rounded-[28px] border border-[#46D9FF]/70 shadow-[0_0_18px_rgba(70,217,255,0.18)]"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 flex flex-col justify-end rounded-[28px] border border-[#46D9FF] bg-black/95 p-6 shadow-[0_0_22px_rgba(70,217,255,0.15)]"
        >
          {/* CARD 1 */}
          {title === "UI Designer" && (
            <>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#46D9FF]">
                IDENTITY
              </p>

              <h3 className="mb-5 text-2xl font-bold">UI Designer</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#3CCEFF]" />
                  <p className="text-zinc-300">AI</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#3CCEFF]" />
                  <p className="text-zinc-300">Product Designer</p>
                </div>
              </div>
            </>
          )}

          {/* CARD 2 */}
          {title === "Creative" && (
            <>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#46D9FF]">
                PASSION
              </p>

              <h3 className="mb-4 text-2xl font-bold">
                Design • Fashion • Music
              </h3>

              <p className="text-[15px] leading-6 text-zinc-400">
                I'm passionate about design, fashion and music. A lot of my visual
                ideas are inspired by the music I'm listening to in that moment.
              </p>
            </>
          )}

          {/* CARD 3 */}
          {title === "Education" && (
            <>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#46D9FF]">
                EDUCATION
              </p>

              <h3 className="mb-5 text-xl font-bold leading-snug">
                Manipal Institute of Technology
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#3CCEFF]" />
                  <p className="text-zinc-300">
                    B.Tech in Artificial Intelligence
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#3CCEFF]" />
                  <p className="text-zinc-300 leading-6">
                    Photoshop, Adobe Illustrator, Figma & Front-end Development
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}