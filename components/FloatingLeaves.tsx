"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Leaf = {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

// Fixed, hand-placed positions so the scene feels composed rather than random.
const LEAVES: Leaf[] = [
  { left: "8%", top: "18%", size: 22, duration: 22, delay: 0, opacity: 0.35 },
  { left: "82%", top: "12%", size: 16, duration: 26, delay: 2, opacity: 0.3 },
  { left: "22%", top: "68%", size: 18, duration: 24, delay: 4, opacity: 0.28 },
  { left: "68%", top: "58%", size: 24, duration: 28, delay: 1, opacity: 0.32 },
  { left: "45%", top: "30%", size: 14, duration: 20, delay: 3, opacity: 0.25 },
  { left: "90%", top: "72%", size: 18, duration: 25, delay: 5, opacity: 0.3 },
];

function LeafShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C7 6 4 10 4 14.5C4 18.6 7.4 22 12 22C16.6 22 20 18.6 20 14.5C20 10 17 6 12 2Z"
        fill={color}
      />
      <path d="M12 22V10" stroke="#FAF8F5" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}

export function FloatingLeaves() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {LEAVES.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: leaf.left,
            top: leaf.top,
            opacity: leaf.opacity,
          }}
          animate={
            reduced
              ? undefined
              : {
                  y: [0, 24, 0],
                  x: [0, -10, 0],
                  rotate: [0, 10, 0],
                }
          }
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <LeafShape size={leaf.size} color={i % 2 === 0 ? "#C49A6C" : "#6F6B66"} />
        </motion.div>
      ))}
    </div>
  );
}
