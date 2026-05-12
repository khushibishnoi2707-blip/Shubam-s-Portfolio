"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 18 });

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-black/80",
        featured && "lg:grid lg:grid-cols-[1.06fr_0.94fr]"
      )}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className={cn("relative min-h-[340px] overflow-hidden", featured && "lg:min-h-[540px]")}>
        <Image
          src={project.image}
          alt={`${project.title} interface preview`}
          fill
          sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
          placeholder="blur"
          blurDataURL={project.blurDataUrl}
          className="object-cover opacity-84 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="flex flex-col justify-between p-6 md:p-8">
        <div>
          <span className="rounded-full border border-[var(--border)] bg-[var(--accent-muted)] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
            {project.category}
          </span>
          <h3 className="mt-6 font-display text-3xl font-black tracking-[-0.03em] md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{project.longDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-white/72"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={project.liveUrl}
            className="inline-flex h-11 items-center gap-2 rounded-[var(--radius)] bg-[var(--accent)] px-4 text-sm font-bold text-black"
          >
            Live Demo <ExternalLink size={16} />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] px-4 text-sm font-bold text-white/82 transition hover:border-[var(--accent)]"
          >
            GitHub <Github size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
