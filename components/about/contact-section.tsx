"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contacts = [
  {
    title: "Phone",
    value: "+91 98765 43210",
    icon: Phone,
    href: "tel:+919876543210",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/aarushpramit",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/aarushpramit",
  },
  {
    title: "GitHub",
    value: "github.com/AarushPramit",
    icon: FaGithub,
    href: "https://github.com/AarushPramit",
  },
];

export default function ContactSection() {
  return (
    <section className="relative px-6 py-28 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            CONTACT
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Let’s Create
            <br />
            Something Meaningful.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I'm currently open to internships, freelance opportunities and
            meaningful product collaborations. If you've got an idea, let's talk.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="mt-20 grid gap-6 lg:grid-cols-5">
          {/* Featured Email Card */}
          <motion.a
            href="mailto:burntpalette@gmail.com"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/[0.03] p-8 lg:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-black/50">
                <Mail className="h-8 w-8 text-cyan-400" />
              </div>

              <div>
                

                <h3 className="mt-4 text-3xl font-semibold text-white">
                  burntpalette@gmail.com
                </h3>

                <p className="mt-3 text-zinc-400">
                  Best way to reach me for internships, product design and
                  collaborations.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-cyan-400">
                <span>Send an Email</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </motion.a>

          {/* Right Side Cards */}
          <div className="space-y-6 lg:col-span-3">
            {contacts.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Phone" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-cyan-400/30"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-black/40">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                        {item.title}
                      </p>

                      <h3 className="mt-1 text-lg font-medium text-white">
                        {item.value}
                      </h3>
                    </div>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-zinc-500 transition group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          
        </motion.div>
      </div>
    </section>
  );
}