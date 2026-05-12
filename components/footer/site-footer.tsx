"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { navItems, profile } from "@/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">Built with Next.js</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted)]" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex size-11 items-center justify-center rounded-[var(--radius)] border border-[var(--border)] text-[var(--accent)] transition hover:border-[var(--accent)]"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
