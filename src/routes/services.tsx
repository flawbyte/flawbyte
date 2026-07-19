import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Instagram,
  Globe,
  Palette,
  Video,
  Film,
  Feather,
  ArrowRight,
  Check,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — FlawByte" },
      {
        name: "description",
        content:
          "Social Media Marketing, Website Design & Development, Graphic Design, Video Editing, Instant Reels, and Branding by FlawByte.",
      },
      { property: "og:title", content: "Services — FlawByte" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

type Service = {
  icon: LucideIcon;
  title: string;
  tag: string;
  desc: string;
  features: string[];
  hue: string;
};

const services: Service[] = [
  {
    icon: Instagram,
    title: "Social Media Marketing",
    tag: "01 — Growth",
    desc: "Full-funnel social strategy: from brand positioning to paid growth. Content that earns attention and campaigns that scale.",
    features: [
      "Brand positioning",
      "Content strategy",
      "Campaign management",
      "Growth strategy",
      "Analytics & reporting",
    ],
    hue: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    tag: "02 — Web",
    desc: "Sites engineered for speed, SEO and conversion. Design systems, custom builds and dashboards that just feel right.",
    features: [
      "Responsive design",
      "SEO optimized",
      "Performance-first",
      "UI / UX design",
      "Custom development",
    ],
    hue: "from-sky-400 to-indigo-500",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    tag: "03 — Visual",
    desc: "Cohesive visual systems, from brand marks to campaign creatives. Every asset on-brand, on-purpose.",
    features: [
      "Branding",
      "Posters & print",
      "Social media designs",
      "Motion graphics",
      "Presentation decks",
    ],
    hue: "from-pink-400 to-rose-500",
  },
  {
    icon: Video,
    title: "Video Editing",
    tag: "04 — Video",
    desc: "Cinematic ad edits, product films and reels. Cut for pacing, colored for mood, tuned for retention.",
    features: [
      "Ads & commercials",
      "Reels & shorts",
      "Transitions & FX",
      "Color grading",
      "Sound design",
    ],
    hue: "from-emerald-400 to-teal-500",
  },
  {
    icon: Film,
    title: "Instant Reels",
    tag: "05 — Speed",
    desc: "Trend-native reels shipped in minutes. Shot on iPhone, edited fast, tuned to what's working right now.",
    features: [
      "Delivered in minutes",
      "Shot on iPhone",
      "Trend-based edits",
      "Fast turnaround",
      "Weekly retainers",
    ],
    hue: "from-orange-400 to-pink-500",
  },
  {
    icon: Feather,
    title: "Brand Identity",
    tag: "06 — Brand",
    desc: "Names, marks, voice and systems. A brand that shows up consistently and grows with you.",
    features: [
      "Logo design",
      "Design systems",
      "Brand guidelines",
      "Voice & messaging",
      "Naming",
    ],
    hue: "from-amber-400 to-orange-500",
  },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary">Services</p>
          </Reveal>
          <Reveal>
            <h1 className="mx-auto mt-4 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
              A studio built for <span className="text-gradient">modern brands</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
              Six focused disciplines — one team. Pick what you need, or hand us the
              whole thing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x space-y-8">
          {services.map((s, i) => (
            <ServiceRow key={s.title} service={s} reversed={i % 2 === 1} />
          ))}
        </div>
      </section>
    </>
  );
}

function ServiceRow({ service, reversed }: { service: Service; reversed: boolean }) {
  const Icon = service.icon;
  return (
    <Reveal>
      <div className="group grid gap-8 rounded-[32px] border border-border bg-white p-8 shadow-card transition-shadow hover:shadow-elevated md:grid-cols-2 md:p-12 lg:p-16">
        <div className={reversed ? "md:order-2" : ""}>
          <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${service.hue}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white/20 text-white backdrop-blur-xl transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
                <Icon size={44} />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
              {service.tag}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-primary">{service.tag}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {service.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            {service.desc}
          </p>

          <Stagger className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2" gap={0.05}>
            {service.features.map((f) => (
              <StaggerItem key={f}>
                <div className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-primary text-white">
                    <Check size={12} />
                  </span>
                  {f}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10">
            <Link to="/contact">
              <MagneticButton>
                Start with {service.title.split(" ")[0]} <ArrowRight size={16} />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
