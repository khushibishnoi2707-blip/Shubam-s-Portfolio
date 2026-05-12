import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel
}: ButtonLinkProps) {
  return (
    <Magnetic>
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cn(
          "group inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius)] border px-5 text-sm font-semibold transition duration-300",
          variant === "primary"
            ? "border-transparent bg-[var(--accent)] text-black shadow-[0_0_42px_rgba(49,246,212,0.22)] hover:bg-[#8ffff0]"
            : "border-[var(--border)] bg-black/70 text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-white/[0.06]",
          className
        )}
      >
        {children}
      </Link>
    </Magnetic>
  );
}
