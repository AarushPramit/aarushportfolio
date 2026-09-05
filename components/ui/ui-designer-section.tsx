"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Nike",
    description:
      "Rebuilt Nike's Landing Page",
    image: "/nikelogo.jpg",
    link: "https://nike-website-amber-seven.vercel.app/",
  },
  {
    title: "Auren Audio",
    description: "A landing page for hi-tech audio equipment.",
    image: "/aurenaudio.png",
    link: "https://headphones-iota.vercel.app/",
  },
  {
    title: "Core Clothing",
    description:
      "Streetwear e-commerce interface.",
    image: "/coreclothing.png",
    link: "https://core-website-swart.vercel.app/",
  },
];

export default function UIDesignerSection() {
  const [active, setActive] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "center 45%"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 420]);

  const leftRotate = useTransform(scrollYProgress, [0, 1], [0, -14]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [0, 14]);

  const centerY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-28 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-400">
          UI DESIGN
        </p>

        <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          My Work as a UI Designer
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl">
          Every interface begins with music, references and rapid Figma
          wireframes. I iterate through multiple visual directions before
          transforming them into polished, production-ready experiences.
        </p>

        {/* ---------------- Desktop ---------------- */}
        {/* ---------------- Desktop ---------------- */}
<div className="relative mt-32 hidden h-[560px] items-end justify-center md:flex">
  {projects.map((project, index) => {
    const x =
      index === 0 ? leftX : index === 1 ? 0 : rightX;

    const rotate =
      index === 0 ? leftRotate : index === 1 ? 0 : rightRotate;

    return (
      <motion.a
        key={project.title}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 cursor-pointer"
        style={{ x, rotate, zIndex: active === index ? 20 : 10 - index }}
        onHoverStart={() => setActive(index)}
        onHoverEnd={() => setActive(null)}
        whileHover={{ y: -10 }}
      >
        <div className="relative h-[360px] w-[440px]">
          {/* Card */}
          <motion.div
            animate={{ y: active === index ? -155 : -28 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="absolute left-1/2 top-0 z-20 h-[300px] w-[390px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[#080808] shadow-[0_35px_70px_rgba(0,0,0,0.55)]"
          >
            <div className="relative h-[185px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-[38px] font-bold leading-none text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-base leading-6 text-zinc-300">
                {project.description}
              </p>
            </div>
          </motion.div>

          {/* Envelope */}
          <div className="absolute bottom-0 h-[240px] w-full">
            <div className="absolute inset-0 rounded-[34px] bg-[#101010]" />

            <div
              className="absolute bottom-0 left-0 h-full w-1/2 bg-[#181818]"
              style={{
                clipPath: "polygon(0 100%,100% 0,100% 100%)",
              }}
            />

            <div
              className="absolute bottom-0 right-0 h-full w-1/2 bg-[#181818]"
              style={{
                clipPath: "polygon(0 0,100% 100%,0 100%)",
              }}
            />

            <div
              className="absolute bottom-0 h-[58%] w-full bg-[#222222]"
              style={{
                clipPath:
                  "polygon(0 0,50% 72%,100% 0,100% 100%,0 100%)",
              }}
            />

            <div className="absolute bottom-8 w-full text-center text-xs uppercase tracking-[0.4em] text-zinc-500">
              UI CASE
            </div>
          </div>
        </div>
      </motion.a>
    );
  })}
</div>
        {/* ---------------- Mobile ---------------- */}
        {/* ---------------- Mobile ---------------- */}
<div className="mt-16 flex flex-col gap-10 md:hidden">
  {projects.map((project, index) => (
    <motion.a
      key={project.title}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      onTap={() => setActive(active === index ? null : index)}
    >
      <div className="relative h-[310px]">
        {/* Card */}
        <motion.div
          animate={{
            y: active === index ? -85 : -12,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="absolute left-1/2 top-0 z-20 h-[240px] w-[92%] -translate-x-1/2 overflow-hidden rounded-[26px] border border-cyan-400/20 bg-[#0A0A0A]"
        >
          <div className="relative h-[150px] w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4">
            <h3 className="text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-zinc-400">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Envelope */}
        <div className="absolute bottom-0 left-1/2 h-[180px] w-[94%] -translate-x-1/2">
          <div className="absolute inset-0 rounded-[24px] bg-[#111111]" />

          <div
            className="absolute bottom-0 left-0 h-full w-1/2 bg-[#171717]"
            style={{
              clipPath: "polygon(0 100%,100% 0,100% 100%)",
            }}
          />

          <div
            className="absolute bottom-0 right-0 h-full w-1/2 bg-[#171717]"
            style={{
              clipPath: "polygon(0 0,100% 100%,0 100%)",
            }}
          />

          <div
            className="absolute bottom-0 h-[55%] w-full bg-[#202020]"
            style={{
              clipPath:
                "polygon(0 0,50% 72%,100% 0,100% 100%,0 100%)",
            }}
          />

          <div className="absolute bottom-5 w-full text-center text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            UI CASE
          </div>
        </div>
      </div>
    </motion.a>
  ))}
</div>
    </div>
    </section>
  );
}