import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight, Star, Crown, Zap, Film, Instagram, Globe, Palette, Video, Feather, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — FlawByte" },
      {
        name: "description",
        content:
          "Transparent pricing for Instant Reels, Social Media Marketing, Digital Marketing, Website Development, Video Editing, Graphic Design and Brand Identity by FlawByte.",
      },
      { property: "og:title", content: "Pricing — FlawByte" },
      {
        property: "og:description",
        content:
          "Simple, transparent packages for growing brands. Reels, socials, websites, ads, design and branding.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

type Tier = {
  name: string;
  originalPrice?: string;
  price: string;
  cadence?: string;
  badge?: string;
  badgeTone?: "primary" | "accent" | "dark" | "gold";
  highlight?: boolean;
  description?: string;
  features: string[];
  cta: string;
  ctaTo?: string;
};

type Section = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
  columns: 3 | 4;
  tiers: Tier[];
};

const sections: Section[] = [
  {
    id: "instant-reels",
    icon: Film,
    eyebrow: "01 — Speed",
    title: "Instant Reels",
    subtitle: "Trend-native reels delivered fast. Shot, cut and shipped in minutes.",
    columns: 4,
    tiers: [
      {
        name: "Instant Reel Premium",
        originalPrice: "₹2,500",
        price: "₹1,999",
        badge: "Most Popular",
        badgeTone: "primary",
        highlight: true,
        features: [
          "No Watermark",
          "Fast Delivery",
          "Raw Footage Included",
          "Professional Editing",
          "Event Coverage",
        ],
        cta: "Book Now",
      },
      {
        name: "Instant Reel Lite",
        originalPrice: "₹2,000",
        price: "₹1,499",
        badge: "Special Offer",
        badgeTone: "accent",
        features: [
          "Watermark Included",
          "Fast Delivery",
          "Raw Footage Included",
          "Professional Editing",
          "Event Coverage",
        ],
        cta: "Book Now",
      },
      {
        name: "Combo Offer",
        originalPrice: "₹5,000",
        price: "₹3,999",
        badge: "Best Value",
        badgeTone: "gold",
        description: "Buy 2 Premium Reels and get 1 Reel FREE.",
        features: [
          "2 Premium Reels (No Watermark)",
          "1 Free Reel (Watermark Included)",
          "Raw Footage Included",
          "Fast Delivery",
        ],
        cta: "Book Now",
      },
      {
        name: "Weddings & Large Events",
        price: "Custom Quote",
        badge: "Made for Scale",
        badgeTone: "dark",
        description: "Weddings, corporate events, concerts, birthdays, college & cultural events.",
        features: [
          "Weddings",
          "Corporate Events",
          "Concerts & Birthdays",
          "College & Cultural Events",
          "Any Large Event",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "social-media",
    icon: Instagram,
    eyebrow: "02 — Growth",
    title: "Social Media Marketing",
    subtitle: "Full-funnel social handling — strategy, content, shooting, editing and reporting.",
    columns: 3,
    tiers: [
      {
        name: "Flawbyte",
        originalPrice: "₹24,999",
        price: "₹19,999",
        cadence: "/ month",
        badge: "Most Popular",
        badgeTone: "primary",
        features: [
          "12–15 Reels",
          "6 Professional Posts",
          "Complete Social Media Handling",
          "Content Planning",
          "Script Writing",
          "Professional Shooting",
          "Video Editing",
          "SEO Optimization",
          "SMO Optimization",
          "Analytics & Reporting",
          "Monthly Strategy",
        ],
        cta: "Book Now",
      },
      {
        name: "Flawbyte Pro",
        originalPrice: "₹34,999",
        price: "Custom Pricing",
        badge: "Premium",
        badgeTone: "gold",
        highlight: true,
        features: [
          "20 Reels",
          "Everything Included in Flawbyte",
          "Priority Customer Support",
          "Dedicated Account Manager",
          "Advanced SEO",
          "Advanced SMO",
          "Complete Content Creation",
          "Script Writing",
          "Professional Shooting",
          "Premium Editing",
          "Monthly Strategy Call",
          "Performance Reports",
        ],
        cta: "Book Now",
      },
      {
        name: "Flawbyte Plus",
        price: "Custom Package",
        badge: "Fully Tailored",
        badgeTone: "dark",
        features: [
          "Custom Number of Reels",
          "Custom Posts",
          "Ads Management",
          "Branding",
          "Website Integration",
          "Strategy Consultation",
          "Completely Customized Solution",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "digital-marketing",
    icon: LineChart,
    eyebrow: "03 — Performance",
    title: "Digital Marketing",
    subtitle: "SEO, ads, funnels and analytics — engineered for measurable growth.",
    columns: 3,
    tiers: [
      {
        name: "Flawbyte",
        originalPrice: "₹21,999",
        price: "₹16,999",
        cadence: "/ month",
        badge: "Best for Growing Businesses",
        badgeTone: "accent",
        features: [
          "Search Engine Optimization (SEO)",
          "Google Business Profile Optimization",
          "Pay-Per-Click (PPC) Campaign Setup",
          "Google Ads Management",
          "Keyword Research",
          "Competitor Analysis",
          "On-Page SEO",
          "Monthly Performance Reports",
          "Basic Conversion Tracking",
          "Email Support",
        ],
        cta: "Book Now",
      },
      {
        name: "Flawbyte Pro",
        originalPrice: "₹34,999",
        price: "₹27,999",
        cadence: "/ month",
        badge: "Most Popular",
        badgeTone: "primary",
        highlight: true,
        features: [
          "Everything in Flawbyte",
          "Advanced SEO",
          "Technical SEO",
          "Local SEO",
          "Google Ads Optimization",
          "Meta Ads Management",
          "Conversion Rate Optimization (CRO)",
          "Landing Page Recommendations",
          "Advanced Analytics",
          "Monthly Strategy Calls",
          "Priority Customer Support",
          "Dedicated Account Manager",
        ],
        cta: "Book Now",
      },
      {
        name: "Flawbyte Plus",
        price: "Custom Package",
        badge: "Enterprise Solution",
        badgeTone: "dark",
        features: [
          "Custom Digital Marketing Strategy",
          "Multi-Platform Advertising",
          "Performance Marketing",
          "Lead Generation Campaigns",
          "Marketing Funnel Strategy",
          "Remarketing Campaigns",
          "Marketing Consultation",
          "Custom Reporting Dashboard",
          "Dedicated Team Support",
          "Flexible Deliverables Based on Business Goals",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "website-development",
    icon: Globe,
    eyebrow: "04 — Web",
    title: "Website Development",
    subtitle: "Sites engineered for speed, SEO and conversion — from landing pages to full builds.",
    columns: 3,
    tiers: [
      {
        name: "Starter Website",
        originalPrice: "₹21,999",
        price: "₹16,999",
        badge: "For Startups",
        badgeTone: "accent",
        features: [
          "Up to 5 Pages",
          "Fully Responsive Design",
          "Basic SEO Setup",
          "Contact Form Integration",
          "WhatsApp & Social Links",
          "1 Round of Revisions",
          "Delivered in 7–10 Days",
        ],
        cta: "Book Now",
      },
      {
        name: "Business Website",
        originalPrice: "₹49,999",
        price: "₹34,999",
        badge: "Most Popular",
        badgeTone: "primary",
        highlight: true,
        features: [
          "Up to 10 Pages",
          "Custom UI / UX Design",
          "CMS Integration",
          "Blog Setup",
          "On-Page SEO",
          "Performance Optimized",
          "Analytics & Pixel Setup",
          "2 Rounds of Revisions",
          "Priority Support",
        ],
        cta: "Book Now",
      },
      {
        name: "Custom Web App",
        price: "Custom Quote",
        badge: "Product-Grade",
        badgeTone: "dark",
        features: [
          "Custom Web Application",
          "E-commerce / Dashboards",
          "Authentication & Payments",
          "Database & APIs",
          "Advanced Animations",
          "Dedicated Product Team",
          "Ongoing Maintenance Available",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "video-editing",
    icon: Video,
    eyebrow: "05 — Video",
    title: "Video Editing",
    subtitle: "Cinematic edits — cut for pacing, colored for mood, tuned for retention.",
    columns: 3,
    tiers: [
      {
        name: "Basic Edit",
        originalPrice: "₹2,999",
        price: "₹1,999",
        cadence: "/ video",
        badge: "Quick Turnaround",
        badgeTone: "accent",
        features: [
          "Up to 60 Seconds",
          "Cuts, Music & Subtitles",
          "Basic Color Correction",
          "1 Round of Revisions",
          "Delivered in 48 Hours",
        ],
        cta: "Book Now",
      },
      {
        name: "Pro Edit",
        originalPrice: "₹5,999",
        price: "₹4,499",
        cadence: "/ video",
        badge: "Most Popular",
        badgeTone: "primary",
        highlight: true,
        features: [
          "Up to 3 Minutes",
          "Advanced Transitions & FX",
          "Full Color Grading",
          "Sound Design & Mixing",
          "Motion Graphics",
          "2 Rounds of Revisions",
        ],
        cta: "Book Now",
      },
      {
        name: "Cinematic Package",
        price: "Custom Quote",
        badge: "Ads & Films",
        badgeTone: "dark",
        features: [
          "Long-form / Ad Films",
          "Storyboarding",
          "Premium VFX & Grading",
          "Custom Sound Design",
          "Dedicated Editor",
          "Unlimited Revisions",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "graphic-design",
    icon: Palette,
    eyebrow: "06 — Visual",
    title: "Graphic Design",
    subtitle: "On-brand visuals — posters, socials, decks and motion graphics.",
    columns: 3,
    tiers: [
      {
        name: "Design Starter",
        originalPrice: "₹4,999",
        price: "₹3,499",
        badge: "For Creators",
        badgeTone: "accent",
        features: [
          "6 Social Media Posts",
          "2 Poster Designs",
          "Basic Brand Colors",
          "Source Files Included",
          "48 Hour Delivery",
        ],
        cta: "Book Now",
      },
      {
        name: "Design Pro",
        originalPrice: "₹9,999",
        price: "₹7,499",
        badge: "Most Popular",
        badgeTone: "primary",
        highlight: true,
        features: [
          "25 Social Media Posts",
          "5 Poster / Print Designs",
          "Motion Graphic Templates",
          "Presentation Deck",
          "Custom Illustrations",
          "2 Rounds of Revisions",
        ],
        cta: "Book Now",
      },
      {
        name: "Design Studio",
        price: "Custom Quote",
        badge: "On Retainer",
        badgeTone: "dark",
        features: [
          "Unlimited Design Requests",
          "Dedicated Designer",
          "Motion & Print Included",
          "Brand Asset Library",
          "Priority Turnaround",
          "Monthly Strategy Call",
        ],
        cta: "Request Quote",
      },
    ],
  },
  {
    id: "brand-identity",
    icon: Feather,
    eyebrow: "07 — Brand",
    title: "Complete Brand Identity",
    subtitle: "Names, marks, voice and systems — a brand that shows up consistently.",
    columns: 3,
    tiers: [
      {
        name: "Logo Package",
        price: "₹9,999",
        cadence: "starting",
        badge: "New Brands",
        badgeTone: "accent",
        features: [
          "3 Logo Concepts",
          "2 Rounds of Revisions",
          "Color & Typography",
          "Vector Source Files",
          "Social Media Kit",
        ],
        cta: "Book Now",
      },
      {
        name: "Brand Identity",
        originalPrice: "₹29,999",
        price: "₹22,999",
        badge: "Most Popular",
        badgeTone: "primary",
        highlight: true,
        features: [
          "Full Logo System",
          "Complete Color Palette",
          "Typography System",
          "Brand Guidelines PDF",
          "Business Card & Letterhead",
          "Social Media Templates",
          "Brand Voice & Tone",
        ],
        cta: "Book Now",
      },
      {
        name: "Brand Studio",
        price: "Custom Quote",
        badge: "Founder-Led",
        badgeTone: "dark",
        features: [
          "Brand Naming",
          "Positioning & Strategy",
          "Full Identity System",
          "Packaging Design",
          "Launch Campaign",
          "Website Direction",
          "Ongoing Brand Support",
        ],
        cta: "Request Quote",
      },
    ],
  },
];

function PricingPage() {
  return (
    <>
      <PricingHero />
      <SectionNav />
      {sections.map((s) => (
        <PricingSection key={s.id} section={s} />
      ))}
      <FAQ />
      <FinalCTA />
    </>
  );
}

function PricingHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="container-x relative text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs uppercase tracking-widest text-primary backdrop-blur">
            <Sparkles size={14} /> Pricing
          </span>
        </Reveal>
        <Reveal>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
            Simple & Transparent <span className="text-gradient">Pricing</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
            Choose the perfect package for your business. Whether you need Instant Reels,
            Social Media Marketing, Digital Marketing, Website Development, Video Editing,
            Graphic Designing, or Complete Brand Identity — we've got you covered.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact">
              <MagneticButton>
                Talk to us <ArrowRight size={16} />
              </MagneticButton>
            </Link>
            <a
              href="#instant-reels"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Explore packages
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionNav() {
  return (
    <div className="sticky top-20 z-30 border-y border-border/70 bg-white/80 backdrop-blur-xl">
      <div className="container-x flex gap-2 overflow-x-auto py-3 text-sm hide-scrollbar">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-ink-soft transition-colors hover:border-primary hover:text-primary"
          >
            {s.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function PricingSection({ section }: { section: Section }) {
  const Icon = section.icon;
  const gridCols =
    section.columns === 4
      ? "md:grid-cols-2 xl:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section id={section.id} className="scroll-mt-32 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-white shadow-elevated">
                  <Icon size={20} />
                </span>
                <p className="text-xs uppercase tracking-widest text-primary">
                  {section.eyebrow}
                </p>
              </div>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                {section.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base text-ink-soft md:text-lg">
                {section.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <Stagger className={cn("grid gap-6", gridCols)} gap={0.08}>
          {section.tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <PricingCard tier={tier} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function PricingCard({ tier }: { tier: Tier }) {
  const badgeToneClass = {
    primary: "bg-gradient-primary text-white",
    accent: "bg-accent text-accent-foreground",
    dark: "bg-ink text-white",
    gold: "bg-gradient-to-r from-amber-400 to-orange-500 text-white",
  }[tier.badgeTone ?? "accent"];

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500",
        tier.highlight
          ? "border-transparent bg-ink text-white shadow-glow"
          : "border-border bg-white shadow-card hover:-translate-y-1 hover:shadow-elevated"
      )}
    >
      {tier.highlight && (
        <>
          <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_-20%,rgba(124,58,237,0.55),transparent_55%)]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-primary opacity-40 blur-3xl" />
        </>
      )}

      <div className="relative flex items-start justify-between gap-4">
        <h3
          className={cn(
            "text-xl font-semibold tracking-tight",
            tier.highlight ? "text-white" : "text-ink"
          )}
        >
          {tier.name}
        </h3>
        {tier.badge && (
          <span
            className={cn(
              "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider",
              badgeToneClass
            )}
          >
            {tier.badgeTone === "gold" && <Crown size={10} />}
            {tier.badgeTone === "primary" && <Star size={10} />}
            {tier.badge}
          </span>
        )}
      </div>

      <div className="relative mt-6 flex items-end gap-2">
        {tier.originalPrice && (
          <span
            className={cn(
              "text-lg line-through",
              tier.highlight ? "text-white/50" : "text-ink-soft/70"
            )}
          >
            {tier.originalPrice}
          </span>
        )}
        <span
          className={cn(
            "text-4xl font-semibold tracking-tight md:text-5xl",
            tier.highlight ? "text-white" : "text-ink"
          )}
        >
          {tier.price}
        </span>
        {tier.cadence && (
          <span
            className={cn(
              "pb-2 text-sm",
              tier.highlight ? "text-white/70" : "text-ink-soft"
            )}
          >
            {tier.cadence}
          </span>
        )}
      </div>

      {tier.description && (
        <p
          className={cn(
            "relative mt-4 text-sm leading-relaxed",
            tier.highlight ? "text-white/80" : "text-ink-soft"
          )}
        >
          {tier.description}
        </p>
      )}

      <ul className="relative mt-8 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                tier.highlight
                  ? "bg-white/15 text-white"
                  : "bg-gradient-primary text-white"
              )}
            >
              <Check size={12} />
            </span>
            <span className={tier.highlight ? "text-white/90" : "text-ink"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-10 pt-2">
        <Link
          to="/contact"
          className={cn(
            "group/cta inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all",
            tier.highlight
              ? "bg-white text-ink hover:bg-white/90"
              : "bg-ink text-white hover:-translate-y-0.5 hover:shadow-elevated"
          )}
        >
          {tier.cta}
          <ArrowRight
            size={16}
            className="transition-transform group-hover/cta:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "Are the offer prices really limited?",
    a: "Yes — our launch offers rotate every month. If a price is listed with an original + offer price, that's the live rate for this cycle.",
  },
  {
    q: "Do you offer custom or combined packages?",
    a: "Absolutely. Most brands mix reels, socials and web. Tell us your goals and we'll tailor a single package that covers everything.",
  },
  {
    q: "How fast do you deliver?",
    a: "Instant Reels ship in minutes. Social retainers start within 3–5 days. Websites and brand identities range from 7 days to a few weeks based on scope.",
  },
  {
    q: "Do you work with brands outside Hyderabad?",
    a: "Yes — we're based in Hyderabad and work with founders across India and worldwide, fully remote.",
  },
];

function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-primary">FAQ</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Answers before you <span className="text-gradient">ask.</span>
              </h2>
              <p className="mt-5 text-base text-ink-soft">
                Still unsure which package fits? Drop us a line — we'll help you pick or
                build a custom one.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Talk to us <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Stagger className="space-y-4" gap={0.06}>
              {faqs.map((f) => (
                <StaggerItem key={f.q}>
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-elevated">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-primary text-white">
                        <Zap size={12} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">{f.q}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="pb-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-ink p-12 text-white md:p-20">
            <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-primary opacity-40 blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Ready when you are
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Let's build the brand you keep <span className="text-gradient">picturing.</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  Start a project <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
                >
                  See services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
