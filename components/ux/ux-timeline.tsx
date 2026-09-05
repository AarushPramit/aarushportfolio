"use client";

import { motion } from "framer-motion";
import {
  Search,
  Users,
  GitBranch,
  PenTool,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    description:
      "Competitor analysis, stakeholder interviews and identifying user pain points.",
  },
  {
    icon: Users,
    title: "Define",
    description:
      "Building personas, user stories and clearly framing the problem statement.",
  },
  {
    icon: GitBranch,
    title: "Ideate",
    description:
      "Creating user flows and information architecture before visual design begins.",
  },
  {
    icon: PenTool,
    title: "Prototype",
    description:
      "Low & high fidelity wireframes in Figma with rapid iterations.",
  },
  {
    icon: CheckCircle2,
    title: "Validate",
    description:
      "Usability testing, feedback loops and refining the final experience.",
  },
];

export default function UXTimeline() {
  return (
    <section className="px-6 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            MY UX PROCESS
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            From Insight to Experience
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Every project follows a structured journey that transforms user
            insights into meaningful digital experiences.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden md:block">
          <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
    delay: i * 0.25,
  }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-950 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  <div className="mb-3 text-sm font-medium tracking-[0.2em] text-cyan-400">
                    0{i + 1}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

                  <p className="text-sm leading-6 text-zinc-400">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="space-y-8 md:hidden">
          {steps.map((step, i) => {
  const Icon = step.icon;

  return (
    <motion.div
      key={step.title}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.2,
      }}
      className="flex gap-5"
    >
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-950">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  {i !== steps.length - 1 && (
                    <div className="mt-2 h-full w-px bg-zinc-700" />
                  )}
                </div>

                <div className="pb-6">
                  <div className="text-xs tracking-[0.25em] text-cyan-400">
                    0{i + 1}
                  </div>

                  <h3 className="mt-1 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}