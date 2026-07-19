import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const list = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden hide-scrollbar", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-16 py-2">
        {list.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-xl font-semibold tracking-tight text-ink-soft/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary/50" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
