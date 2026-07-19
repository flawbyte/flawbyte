import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FlawByte" },
      {
        name: "description",
        content:
          "FlawByte is a small, senior creative team building brands, sites and campaigns for founders who care about craft.",
      },
      { property: "og:title", content: "About — FlawByte" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "2021", title: "The first sketch", desc: "At 16, Akhil started freelancing — designing posters and edits from his bedroom." },
  { year: "2023", title: "Building the craft", desc: "Two years of hands-on client work across brands, reels and websites." },
  { year: "2024", title: "The idea for FlawByte", desc: "A senior-quality studio for founders who care about craft — the vision takes shape." },
  { year: "2025", title: "FlawByte is born", desc: "The studio launches officially with a tight, senior team and a global roster." },
  { year: "2026", title: "150+ happy clients", desc: "Working with founders across India, US and Europe — and just getting started." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
        <div className="container-x relative">
          <div className="grid gap-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <Reveal>
                <p className="text-xs uppercase tracking-widest text-primary">About</p>
              </Reveal>
              <Reveal>
                <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-7xl lg:text-8xl">
                  A small studio, obsessed with{" "}
                  <span className="text-gradient">craft</span>.
                </h1>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="md:col-span-4">
              <p className="text-lg leading-relaxed text-ink-soft">
                FlawByte is a senior creative team of designers, developers and
                filmmakers. We take on a handful of projects each quarter — so we
                can go deep on every one.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / STORY */}
      <section className="py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            {
              tag: "Our Story",
              title: "Founded in 2025 by Kamatam Akhil.",
              desc: "Akhil is 20 today. He started freelancing at 16 — years of client work across brands, reels and websites shaped the taste and speed that FlawByte is built on.",
            },
            {
              tag: "Mission",
              title: "Make craft the default.",
              desc: "Great design shouldn't be a luxury. We bring senior-level work to founders at every stage — startup to scale.",
            },
            {
              tag: "Vision",
              title: "The studio of the next decade.",
              desc: "A tight, senior team that ships like a product company — fast, thoughtful, and always on-brand.",
            },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                <p className="text-xs uppercase tracking-widest text-primary">{c.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-ink-soft">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-surface py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary">Timeline</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              The journey so far.
            </h2>
          </Reveal>

          <Stagger className="mt-16 space-y-4" gap={0.1}>
            {timeline.map((t) => (
              <StaggerItem key={t.year}>
                <div className="group grid gap-6 rounded-3xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated md:grid-cols-[140px_1fr_auto] md:items-center">
                  <div className="text-4xl font-bold text-gradient">{t.year}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{t.title}</h3>
                    <p className="mt-1 text-ink-soft">{t.desc}</p>
                  </div>
                  <div className="hidden h-2 w-24 overflow-hidden rounded-full bg-surface md:block">
                    <div className="h-full w-3/4 rounded-full bg-gradient-primary" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-8 rounded-[32px] border border-border bg-white p-12 shadow-card md:grid-cols-4">
            {[
              { n: 3, s: "+", l: "Years" },
              { n: 20, s: "+", l: "Projects" },
              { n: 150, s: "+", l: "Clients" },
              { n: 3000, s: "+", l: "Cups of coffee" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-5xl font-bold tracking-tight text-gradient md:text-6xl">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <p className="mt-2 text-sm text-ink-soft">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact">
              <MagneticButton>
                Work with us <ArrowRight size={16} />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
