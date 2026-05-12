"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { roles } from "@/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RoleSwap() {
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 1800);
    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <span className="relative inline-grid min-w-[13ch] overflow-hidden align-bottom text-[var(--accent)]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={reducedMotion ? false : { y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reducedMotion ? undefined : { y: -28, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
