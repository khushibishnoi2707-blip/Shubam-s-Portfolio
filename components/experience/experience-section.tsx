"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="container-shell py-28" aria-labelledby="experience-title">
      <SectionReveal>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Experience
        </p>
        <h2
          id="experience-title"
          className="max-w-4xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.88] tracking-[-0.05em]"
        >
          Where impact compounds.
        </h2>
      </SectionReveal>

      <div ref={ref} className="relative mt-16">
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 lg:left-1/2" />
        <motion.div
          className="absolute left-4 top-0 h-full w-px origin-top bg-[var(--accent)] lg:left-1/2"
          style={{ scaleY }}
        />
        <div className="grid gap-8">
          {experiences.map((entry, index) => (
            <SectionReveal key={`${entry.company}-${entry.dates}`} delay={index * 0.05}>
              <article
                className={`relative grid gap-5 pl-12 lg:grid-cols-2 lg:gap-12 lg:pl-0 ${
                  index % 2 === 0 ? "" : "lg:[&>div]:col-start-2"
                }`}
              >
                <span className="absolute left-[11px] top-7 z-10 size-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(49,246,212,0.12)] lg:left-[calc(50%-6px)]" />
                <div className="rounded-[var(--radius)] border border-[var(--border)] bg-black/78 p-6">
                  <time className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                    {entry.dates}
                  </time>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em]">
                    {entry.role}
                  </h3>
                  <p className="mt-1 text-[var(--muted)]">{entry.company}</p>
                  <ul className="mt-5 grid gap-3 text-[var(--muted-strong)]">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
