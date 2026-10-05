import type { Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProjectCover({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("project-cover relative flex h-full min-h-72 overflow-hidden bg-project text-project-ink", `project-${project.visual}`, className)}>
      <div className="project-art" aria-hidden />
      <div className="relative z-10 flex w-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em] opacity-70">
          <span>{project.category}</span><span>{project.year}</span>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.16em] opacity-60">{project.client}</p>
          <p className="max-w-[12ch] text-3xl font-semibold leading-[0.95] md:text-5xl">{project.title}</p>
        </div>
      </div>
    </div>
  );
}