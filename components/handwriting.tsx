"use client";

import { motion } from "framer-motion";
import * as opentype from "opentype.js";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_FONT_URL = "/fonts/IndieFlower.ttf";

interface HandwritingSvgProps {
  path?: string;
  text?: string;
  fontUrl?: string;
  className?: string;
  strokeClassName?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
}

export default function HandwritingSvg({
  path: pathProp,
  text,
  fontUrl = DEFAULT_FONT_URL,
  className,
  strokeClassName,
  duration = 2,
  delay = 0.5,
  strokeWidth = 2,
  width = 100,
  height = 100,
  fontSize = 48,
  ease = "easeInOut",
}: HandwritingSvgProps) {
  const [path, setPath] = useState<string | null>(pathProp ?? null);
  const [viewBox, setViewBox] = useState(`0 0 ${width} ${height}`);
  const [loading, setLoading] = useState(!!text && !pathProp);

  useEffect(() => {
    if (!text || pathProp) {
      setPath(pathProp ?? null);
      setViewBox(`0 0 ${width} ${height}`);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(fontUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        if (cancelled) return;

        const font = opentype.parse(buffer);
        const p = font.getPath(text, 0, fontSize, fontSize);

        const bbox = p.getBoundingBox();
        const pad = 5;

        const vx = Math.floor(bbox.x1) - pad;
        const vy = Math.floor(bbox.y1) - pad;
        const vw = Math.ceil(bbox.x2 - bbox.x1) + pad * 2;
        const vh = Math.ceil(bbox.y2 - bbox.y1) + pad * 2;

        setViewBox(`${vx} ${vy} ${vw} ${vh}`);
        setPath(p.toPathData(2));
      })
      .catch(() => {
        if (!cancelled) setPath(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [text, fontUrl, pathProp, fontSize, width, height]);

  if (loading) {
    return null;
  }

  // Fix: define the SVG path
  const d = path ?? "";

  if (!d) {
    return null;
  }

  const svgViewBox = pathProp ? `0 0 ${width} ${height}` : viewBox;

  return (
    <svg
      width={width}
      height={height}
      viewBox={svgViewBox}
      className={cn("text-[#ff2d6f]", className)}
      aria-hidden="true"
    >
      <motion.path
  d={d}
  fill="none"
  stroke="currentColor" 
  strokeWidth={strokeWidth}
  strokeLinecap="round"
  strokeLinejoin="round"
  className={strokeClassName}
  style={{
    filter:
      "drop-shadow(0 0 2px rgba(255,45,111,0.9)) drop-shadow(0 0 6px rgba(255,45,111,0.35))",
  }}
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ delay, duration, ease }}
/>
    </svg>
  );
}