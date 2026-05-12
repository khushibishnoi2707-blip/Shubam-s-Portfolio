"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems, profile } from "@/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const activeSection = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-black/70 backdrop-blur-2xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary">
        <Link href="#top" className="flex items-center gap-3" aria-label={`${profile.name} home`}>
          <span className="grid size-10 place-items-center rounded-[var(--radius)] bg-[var(--accent)] text-sm font-black text-black">
            SG
          </span>
          <span className="hidden text-sm font-semibold text-white/86 sm:block">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-white/[0.035] p-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white/[0.06] hover:text-white",
                  activeSection === id && "bg-white/[0.08] text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href={profile.resumeUrl}
          target="_blank"
          className="hidden rounded-[var(--radius)] border border-[var(--border)] px-4 py-2 text-sm font-semibold text-white/88 transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:block"
        >
          Resume
        </Link>

        <Dialog.Root>
          <Dialog.Trigger className="grid size-10 place-items-center rounded-[var(--radius)] border border-[var(--border)] text-white md:hidden">
            <Menu size={18} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-x-4 top-4 z-50 rounded-[var(--radius)] border border-[var(--border)] bg-black p-5 shadow-2xl md:hidden">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-xl font-semibold">Navigate</Dialog.Title>
                <Dialog.Close className="grid size-9 place-items-center rounded-[var(--radius)] border border-[var(--border)]">
                  <X size={18} />
                </Dialog.Close>
              </div>
              <div className="mt-6 grid gap-2">
                {navItems.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-[var(--radius)] border border-[var(--border)] px-4 py-3 text-sm font-semibold text-white/86"
                    >
                      {item.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
