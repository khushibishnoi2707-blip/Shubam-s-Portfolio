import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const siteUrl = "https://khushibishnoi2707-blip.github.io/Shubam-s-Portfolio";
