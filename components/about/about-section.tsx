import Image from "next/image";
import { marqueeSkills, profile, skillGroups } from "@/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function AboutSection() {
  const tickerItems = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="about" className="container-shell py-28" aria-labelledby="about-title">
      <SectionReveal className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <aside className="glass-panel overflow-hidden rounded-[var(--radius)]">
          <Image
            src={profile.avatar}
            alt="Abstract SG avatar for Shubham Gupta"
            width={900}
            height={900}
            className="aspect-square w-full object-cover"
            priority={false}
          />
          <div className="border-t border-[var(--border)] p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent)]">Based in</p>
            <p className="mt-2 font-display text-2xl font-semibold">{profile.location}</p>
          </div>
        </aside>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            About
          </p>
          <h2
            id="about-title"
            className="font-display text-[clamp(2.4rem,6vw,5.8rem)] font-black leading-[0.9] tracking-[-0.045em]"
          >
            I build useful AI with product instincts.
          </h2>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[var(--muted)]">
            {profile.statement}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article
                  key={group.title}
                  className="rounded-[var(--radius)] border border-[var(--border)] bg-black/70 p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-[var(--radius)] bg-[var(--accent-muted)] text-[var(--accent)]">
                      <Icon size={19} />
                    </span>
                    <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-white/[0.035] px-3 py-1.5 text-sm text-[var(--muted-strong)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="mt-16 overflow-hidden border-y border-[var(--border)] py-5">
        <div className="marquee-track flex w-max gap-4">
          {tickerItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-[var(--border)] bg-black/60 px-5 py-2 text-sm font-semibold text-white/76"
            >
              {item}
            </span>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
