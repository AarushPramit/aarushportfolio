"use client";

import Link from "next/link";

interface PortfolioButtonProps {
  text: string;
  href: string;
}

export default function PortfolioButton({
  text,
  href,
}: PortfolioButtonProps) {
  return (
    <Link href={href}>
      <button className="rounded-full border border-cyan-400 bg-gradient-to-r from-cyan-900 to-blue-900 px-10 py-4 text-lg font-medium text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(70,217,255,0.25)]">
        {text}
      </button>
    </Link>
  );
}