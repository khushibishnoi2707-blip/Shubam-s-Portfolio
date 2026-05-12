import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      colors: {
        accent: "var(--accent)",
        "accent-muted": "var(--accent-muted)",
        surface: "var(--surface)",
        border: "var(--border)"
      }
    }
  }
};

export default config;
