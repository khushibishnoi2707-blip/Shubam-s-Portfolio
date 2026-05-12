import Image from "next/image";
import { testimonials } from "@/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function TestimonialsSection() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-24" aria-labelledby="testimonials-title">
      <SectionReveal className="container-shell">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Social Proof
            </p>
            <h2
              id="testimonials-title"
              className="font-display text-[clamp(2.2rem,5vw,4.8rem)] font-black leading-[0.92] tracking-[-0.045em]"
            >
              Trusted in the messy middle.
            </h2>
          </div>
        </div>
      </SectionReveal>
      <div className="overflow-hidden border-y border-[var(--border)] py-6">
        <div className="marquee-track flex w-max gap-5 px-5">
          {items.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="w-[360px] rounded-[var(--radius)] border border-[var(--border)] bg-black/76 p-5"
            >
              <p className="text-lg leading-8 text-[var(--muted-strong)]">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-full border border-[var(--border)]"
                />
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
