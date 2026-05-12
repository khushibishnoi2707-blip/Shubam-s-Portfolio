import { socials } from "@/data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="container-shell py-28" aria-labelledby="contact-title">
      <SectionReveal className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Contact
          </p>
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.7rem,8vw,7rem)] font-black leading-[0.84] tracking-[-0.055em]"
          >
            Let&apos;s build something sharp.
          </h2>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[var(--muted)]">
            Have an AI, analytics, or product engineering problem worth solving? Send the brief and
            I&apos;ll reply with the next sensible step.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-[var(--radius)] border border-[var(--border)] bg-black/72 p-4 text-sm font-semibold text-white/78 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-white"
                >
                  <span>{social.label}</span>
                  <Icon size={18} className="text-[var(--accent)]" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="glass-panel rounded-[var(--radius)] p-5 md:p-7">
          <ContactForm />
        </div>
      </SectionReveal>
    </section>
  );
}
