import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Target,
  Cpu,
  Instagram,
  Globe,
  Film,
  Palette,
  Video,
  Feather,
  Star,
  ChevronDown,
} from "lucide-react";
import { useRef } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Marquee } from "@/components/Marquee";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlawByte — Building Digital Experiences That Grow Brands" },
      {
        name: "description",
        content:
          "FlawByte is a creative digital agency crafting brands, websites, social campaigns and video that convert. Based in Hyderabad, working worldwide.",
      },
      { property: "og:title", content: "FlawByte — Building Digital Experiences That Grow Brands" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Instagram, title: "Social Media Marketing", desc: "Strategy, content, and paid growth that compounds.", href: "/pricing#social-media" },
  { icon: Globe, title: "Website Design & Development", desc: "High-conversion sites engineered for speed & scale.", href: "/pricing#website-development" },
  { icon: Video, title: "Video Editing", desc: "Cinematic cuts, ads and reels that stop the scroll.", href: "/pricing#video-editing" },
  { icon: Palette, title: "Graphic Design", desc: "On-brand systems, posters and social creatives.", href: "/pricing#graphic-design" },
  { icon: Film, title: "Instant Reels", desc: "Trend-native reels shipped in minutes, not weeks.", href: "/pricing#instant-reels" },
  { icon: Feather, title: "Brand Identity", desc: "Logos, systems and stories that stick.", href: "/pricing#brand-identity" },
];

const features = [
  { icon: Sparkles, title: "Creative", desc: "Original, art-directed work — no templates, ever." },
  { icon: Zap, title: "Fast Delivery", desc: "Weekly sprints. Real momentum, from day one." },
  { icon: Target, title: "Results Driven", desc: "Design that ships numbers, not just pixels." },
  { icon: Cpu, title: "Modern Technology", desc: "Cutting-edge stack, tuned for performance." },
];

const projects = [
  {
    title: "Unisol Homes",
    tag: "Web Design",
    hue: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Dr. Anudeep's Homeopathy",
    tag: "Branding",
    hue: "from-orange-400 to-pink-500",
  },
  {
    title: "Vashishta 360",
    tag: "Social Media",
    hue: "from-sky-400 to-indigo-500",
  },
  {
    title: "4D Entertainers",
    tag: "Video",
    hue: "from-emerald-400 to-teal-500",
  },
];

const testimonials = [
  {
    quote:
      "FlawByte reimagined our entire brand system. Our launch weekend outsold the entire previous quarter.",
    name: "Dr. Anudeep",
    role: "Founder & MD, Dr. Anudeep's Homeopathy",
  },
  {
    quote:
      "The reels alone paid for the retainer within a month. They just get modern audiences.",
    name: "4D Entertainers",
    role: "Major Event Partner",
  },
  {
    quote:
      "A rare team that ships fast without cutting corners. Design, dev, motion — all top-tier.",
    name: "Yugendar",
    role: "Founder, Ur Captures",
  },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 bg-mesh" />
        <motion.div
          style={{ y: y1 }}
          className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-blob"
        />
        <motion.div
          style={{ y: y2 }}
          className="pointer-events-none absolute -right-20 top-40 h-[500px] w-[500px] rounded-full bg-primary-glow/20 blur-3xl animate-blob"
        />

        <div className="container-x relative pt-16 pb-32 md:pt-24 md:pb-40">
          <Reveal>
            <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs text-ink-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now booking Q1 projects
            </div>
          </Reveal>

          <Stagger className="text-center" gap={0.12}>
            <StaggerItem>
              <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold tracking-[-0.04em] text-ink md:text-7xl lg:text-[92px] lg:leading-[0.98]">
                Building digital experiences that{" "}
                <span className="relative inline-block">
                  <span className="text-gradient animate-gradient-x">grow brands</span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1.4, ease: "easeInOut" }}
                    viewBox="0 0 300 20"
                    className="absolute -bottom-3 left-0 h-4 w-full"
                  >
                    <motion.path
                      d="M5 12 Q 80 4, 150 10 T 295 8"
                      fill="none"
                      stroke="url(#g1)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0" stopColor="#7C3AED" />
                        <stop offset="1" stopColor="#5B21B6" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                .
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
                FlawByte helps businesses scale with creative design, social media
                marketing, websites, branding and high-performing digital experiences.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <MagneticButton>
                    Get Started <ArrowRight size={16} />
                  </MagneticButton>
                </Link>
                <Link to="/portfolio">
                  <MagneticButton variant="outline">
                    View Portfolio <ArrowUpRight size={16} />
                  </MagneticButton>
                </Link>
              </div>
            </StaggerItem>
          </Stagger>

          {/* Floating glass cards */}
          <motion.div style={{ scale }} className="relative mx-auto mt-24 h-[380px] max-w-4xl">
            <FloatingHeroArt />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-20 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-ink-soft"
          >
            Scroll
            <ChevronDown size={16} className="animate-bounce-soft" />
          </motion.div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="border-y border-border bg-white py-14">
        <div className="container-x">
          <p className="mb-8 text-center text-xs uppercase tracking-widest text-ink-soft">
            Trusted by ambitious teams
          </p>
          <Marquee
            items={[
              "Unisol",
              "Dr. Anudeep",
              "Vashishta",
              "4D Entertainers",
              "Dhar",
              "Telugu Assets",
              "Roots",
              "Alaya",
              "Ur Captures",
            ]}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary">Services</p>
          </Reveal>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
                Everything your brand needs, under one roof.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Explore all services <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY */}
      <section className="relative overflow-hidden bg-surface py-32">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
        <div className="container-x relative">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary">Why FlawByte</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              We're built like a product team, not an agency.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <f.icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-2 gap-8 rounded-3xl border border-border bg-white p-10 shadow-card md:grid-cols-4">
            {[
              { n: 3, s: "+", l: "Years crafting" },
              { n: 20, s: "+", l: "Projects shipped" },
              { n: 150, s: "+", l: "Happy clients" },
              { n: 3000, s: "+", l: "Cups of coffee" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-4xl font-bold tracking-tight md:text-5xl text-gradient">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <p className="mt-2 text-sm text-ink-soft">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Selected work</p>
                <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
                  Recent projects we're proud of.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                See all case studies <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary">Kind words</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Founders who trusted us — and shipped bigger.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="mb-4 flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-semibold text-white">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-ink-soft">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[36px] bg-ink p-12 text-white md:p-20">
            <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/40 blur-3xl animate-blob" />
            <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary-glow/40 blur-3xl animate-blob" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Ready?</p>
                <h2 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
                  Let's build something{" "}
                  <span className="text-gradient animate-gradient-x">amazing</span>.
                </h2>
                <p className="mt-6 max-w-md text-white/70">
                  Tell us about your brand. We'll come back within 24 hours with a plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link to="/contact">
                  <MagneticButton>
                    Start a project <ArrowRight size={16} />
                  </MagneticButton>
                </Link>
                <a href="mailto:flawbyte@gmail.com">
                  <MagneticButton
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:text-white"
                  >
                    Email us
                  </MagneticButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FloatingHeroArt() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-8 h-56 w-80 -translate-x-1/2 rounded-3xl bg-gradient-primary shadow-glow"
      >
        <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-xl" />
        <div className="relative flex h-full flex-col justify-between p-6 text-white">
          <div className="flex items-center gap-2 text-xs opacity-80">
            <span className="h-2 w-2 rounded-full bg-white/80" /> Live campaign
          </div>
          <div>
            <div className="text-3xl font-semibold">+312%</div>
            <div className="text-xs opacity-80">Engagement lift, 30 days</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="glass absolute left-4 top-32 hidden h-40 w-64 rounded-3xl p-5 md:block"
      >
        <div className="text-xs text-ink-soft">Instant Reels</div>
        <div className="mt-2 text-xl font-semibold">Shot • Cut • Ship</div>
        <div className="mt-4 flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 w-12 rounded-lg bg-gradient-primary opacity-80" />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="glass absolute right-4 top-40 hidden w-64 rounded-3xl p-5 md:block"
      >
        <div className="text-xs text-ink-soft">Site performance</div>
        <div className="mt-2 flex items-end gap-2">
          <div className="text-3xl font-semibold">98</div>
          <div className="pb-1 text-xs text-primary">Lighthouse</div>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98%" }}
            transition={{ duration: 1.6, delay: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-primary"
          />
        </div>
      </motion.div>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  href,
}: {
  icon: typeof Instagram;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
            <Icon size={22} />
          </div>
          <ArrowUpRight
            size={20}
            className="text-ink-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
          />
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
      </div>
    </a>
  );
}

function ProjectCard({
  title,
  tag,
  hue,
}: {
  title: string;
  tag: string;
  hue: string;
}) {
  return (
    <Link
      to="/portfolio"
      className="group relative block overflow-hidden rounded-[28px] border border-border bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className={`relative aspect-[16/11] overflow-hidden bg-gradient-to-br ${hue}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-6 rounded-2xl bg-white/15 backdrop-blur-xl"
        />
        <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur">
          {tag}
        </div>
      </div>
      <div className="flex items-center justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-ink-soft">Case study</p>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white transition-transform group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
