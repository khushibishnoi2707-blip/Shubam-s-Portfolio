"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/data";
import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ProjectCard } from "./project-card";

const filters = ["All", "Frontend", "Backend", "Full Stack", "Open Source"] as const;
type Filter = (typeof filters)[number];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const featured = projects.find((project) => project.featured);

  const filteredProjects = useMemo<Project[]>(() => {
    const projectList = projects.filter((project) => !project.featured);
    return filter === "All"
      ? projectList
      : projectList.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="work" className="container-shell py-28" aria-labelledby="work-title">
      <SectionReveal>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Selected Work
            </p>
            <h2
              id="work-title"
              className="max-w-4xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.88] tracking-[-0.05em]"
            >
              Projects with systems thinking.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-black/70 p-1">
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-[var(--radius)] px-3 py-2 text-sm font-semibold text-[var(--muted)] transition",
                  filter === item && "bg-white/[0.08] text-white"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>

      {featured ? (
        <SectionReveal>
          <ProjectCard project={featured} featured />
        </SectionReveal>
      ) : null}

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
