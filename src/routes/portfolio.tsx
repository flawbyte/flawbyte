import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — FlawByte" },
      {
        name: "description",
        content:
          "Selected work by FlawByte — brand systems, websites, social campaigns and video for modern founders.",
      },
      { property: "og:title", content: "Portfolio — FlawByte" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type Project = {
  title: string;
  category: "Social Media" | "Web Design" | "Branding" | "Videos";
  client: string;
  year: string;
  hue: string;
  span?: string;
  summary: string;
};

const projects: Project[] = [
  { title: "Unisol Homes",   category: "Web Design",   client: "Unisol",   year: "2025", hue: "from-violet-500 to-fuchsia-500", span: "md:col-span-2 md:row-span-2", summary: "A property discovery experience rebuilt around clarity and speed. +42% activation." },
  { title: "Dr. Anudeep's Homeopathy", category: "Branding",  client: "Dr. Anudeep",  year: "2024", hue: "from-orange-400 to-pink-500", summary: "A warm, trustworthy identity for a homeopathy practice scaling across clinics." },
  { title: "Vashishta 360",    category: "Social Media", client: "Vashishta",   year: "2025", hue: "from-sky-400 to-indigo-500", summary: "Weekly content system driving 3.2M organic reach in one quarter." },
  { title: "Dhar Fitness",   category: "Videos",       client: "Dhar",   year: "2024", hue: "from-emerald-400 to-teal-500", span: "md:col-span-2", summary: "A cinematic launch film for a next-gen fitness brand." },
  { title: "Telugu Assets",     category: "Web Design",   client: "Telugu Assets",  year: "2025", hue: "from-indigo-500 to-purple-500", summary: "Marketing site + library, purpose-built for a regional creator audience." },
  { title: "Roots Dental Care",   category: "Branding",     client: "Roots",  year: "2024", hue: "from-amber-400 to-rose-500", summary: "A modern dental brand that feels calm, caring and premium." },
  { title: "4D Entertainers",      category: "Videos",       client: "4D",  year: "2025", hue: "from-fuchsia-500 to-pink-500", summary: "Event highlight reels tuned for reach and re-bookings." },
  { title: "Alaya home decor", category: "Social Media", client: "Alaya", year: "2025", hue: "from-cyan-400 to-blue-500", summary: "Lifestyle content that turned a home decor brand into a daily inspiration feed." },
];

const filters = ["All", "Social Media", "Web Design", "Branding", "Videos"] as const;

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary">Portfolio</p>
          </Reveal>
          <Reveal>
            <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
              Work that <span className="text-gradient">moves numbers</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">
              A selection of recent projects across brand, product, social and film.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="relative rounded-full px-5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-primary"
                  />
                )}
                <span className={filter === f ? "text-white" : ""}>{f}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.button
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActive(p)}
                  className={`group relative overflow-hidden rounded-3xl text-left ${p.span ?? ""}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
                  <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-opacity duration-500 group-hover:from-white/20 group-hover:via-transparent group-hover:to-white/10" />
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-8 rounded-2xl bg-white/15 backdrop-blur-xl"
                  />
                  <div className="relative flex h-full flex-col justify-between p-6 text-white">
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur">{p.category}</span>
                      <span className="opacity-80">{p.year}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/70">{p.client}</p>
                        <h3 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
                      </div>
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-white/20 backdrop-blur transition-transform group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/60 p-4 backdrop-blur-md md:items-center"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-elevated"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-ink backdrop-blur hover:bg-white"
              >
                <X size={16} />
              </button>
              <div className={`relative aspect-[16/9] bg-gradient-to-br ${active.hue}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
                <div className="absolute inset-8 rounded-2xl bg-white/15 backdrop-blur-xl" />
              </div>
              <div className="p-8 md:p-12">
                <p className="text-xs uppercase tracking-widest text-primary">{active.category} · {active.year}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{active.title}</h3>
                <p className="mt-4 text-ink-soft">{active.summary}</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[["Timeline", "6 weeks"], ["Team", "4 people"], ["Impact", "+2.4x"]].map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-surface p-4">
                      <p className="text-xs text-ink-soft">{k}</p>
                      <p className="mt-1 text-lg font-semibold">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
