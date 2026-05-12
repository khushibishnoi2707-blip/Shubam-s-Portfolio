"use client";

import { ArrowDown, Download, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { profile, stats } from "@/data";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { HeroScene } from "./hero-scene";
import { RoleSwap } from "./role-swap";

const greeting = "Hello, I'm Shubham Gupta.";

export function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-screen overflow-hidden pt-24"
      aria-labelledby="hero-title"
    >
      <HeroScene />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,transparent,rgba(0,0,0,0.82)_62%,#000_100%)]" />
      <div className="container-shell relative z-10 grid items-center gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-black/70 px-4 py-2 text-sm text-[var(--muted-strong)] backdrop-blur"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-300" />
            </span>
            Open to work
          </motion.div>

          <h1
            id="hero-title"
            className="max-w-5xl font-display text-[clamp(3.9rem,11vw,9.8rem)] font-black leading-[0.82] tracking-[-0.055em] text-white"
          >
            <span className="sr-only">{greeting}</span>
            <span aria-hidden="true" className="block">
              {greeting.split("").map((character, index) => (
                <motion.span
                  key={`${character}-${index}`}
                  className="inline-block"
                  initial={reducedMotion ? false : { opacity: 0, y: 26, rotateX: -70 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: reducedMotion ? 0 : index * 0.018,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {character === " " ? "\u00A0" : character}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            className="mt-8 max-w-3xl text-balance text-xl leading-8 text-[var(--muted)] md:text-2xl md:leading-9"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Final-year data science student building intelligent systems as a <RoleSwap /> across
            RAG, deep learning, analytics, and product-grade interfaces.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <ButtonLink href="#work">
              View Work <ArrowDown size={17} />
            </ButtonLink>
            <ButtonLink
              href={profile.resumeUrl}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume <Download size={17} />
            </ButtonLink>
          </motion.div>
        </div>

        <motion.aside
          className="glass-panel rounded-[var(--radius)] p-5 lg:ml-auto lg:w-[420px]"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-5">
            <div>
              <p className="text-sm text-[var(--muted)]">Current signal</p>
              <p className="mt-1 font-display text-2xl font-semibold text-white">AI systems</p>
            </div>
            <Radio className="text-[var(--accent)]" />
          </div>
          <div className="grid gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-black/55 p-4"
              >
                <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
