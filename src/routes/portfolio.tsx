import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ProjectCover } from "@/components/ProjectCover";
import { Reveal } from "@/components/Reveal";
import { projects, type Project, type ProjectCategory } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Selected Work — FlawByte" },
      { name: "description", content: "Explore selected brand, website, social media and film projects created by FlawByte." },
      { property: "og:title", content: "Selected Work — FlawByte" },
      { property: "og:description", content: "Selected brand, website, social media and film projects by FlawByte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://flawbyte.com/portfolio" }],
  }),
  component: Portfolio,
});

const filters: ("All" | ProjectCategory)[] = ["All", "Social Media", "Web Design", "Branding", "Videos"];
const layouts = [
  "md:col-span-12",
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];
const ratios = ["aspect-[16/7]", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[16/10]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[4/5]"];

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  return (
    <>
      <section className="border-b border-border py-20 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="editorial-label text-primary">Selected work</p>
            <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[.98] md:col-span-9 md:text-8xl">Real work. Built to move real brands.</h1>
              <p className="text-sm leading-7 text-ink-soft md:col-span-3">Eight collaborations across property, healthcare, culture, fitness and entertainment.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mb-14 flex gap-2 overflow-x-auto border-b border-border pb-5 hide-scrollbar" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={cn("whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors", filter === item ? "bg-primary text-primary-foreground" : "text-ink-soft hover:text-ink")}>{item}</button>
            ))}
          </div>
          <motion.div layout className="grid gap-x-6 gap-y-16 md:grid-cols-12">
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <motion.article layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: 0.35 }} key={project.slug} className={cn("group min-w-0", filter === "All" ? layouts[index] : "md:col-span-6")}>
                  <ProjectLink project={project} featured={index === 0 && filter === "All"} ratio={filter === "All" ? ratios[index] : "aspect-[4/3]"} />
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ProjectLink({ project, featured, ratio }: { project: Project; featured: boolean; ratio: string }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group/project block" aria-label={`View ${project.title} project`}>
      <div className="relative overflow-hidden">
        <ProjectCover project={project} className={ratio} />
        <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-dark px-4 py-2 text-[10px] font-bold uppercase text-dark-foreground opacity-0 transition-all duration-300 group-hover/project:translate-y-0 group-hover/project:opacity-100">View project</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-5 transition-colors group-hover/project:border-primary">
        <div className="min-w-0 transition-transform duration-300 group-hover/project:translate-x-1">
          <p className="text-xs uppercase text-ink-soft">{project.category} · {project.year}{featured ? " · Featured" : ""}</p>
          <h2 className={cn("mt-2 font-semibold", featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl")}>{project.title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-soft">{project.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-primary">View Project <ArrowUpRight size={14} /></span>
        </div>
        <ArrowUpRight size={20} className="shrink-0 transition-transform duration-300 group-hover/project:translate-x-1 group-hover/project:-translate-y-1" />
      </div>
    </a>
  );
}