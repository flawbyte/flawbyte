"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  href?: string;
};

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15 });
    const sy = useSpring(y, { stiffness: 200, damping: 15 });
    const rotate = useTransform(sx, [-20, 20], [-3, 3]);

    const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set(((e.clientX - rect.left) / rect.width - 0.5) * 24);
      y.set(((e.clientY - rect.top) / rect.height - 0.5) * 16);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    const base =
      "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-md px-6 py-3 text-sm font-semibold transition-[color,background-color,border-color,transform] duration-300";
    const styles = {
      primary:
        "bg-dark text-dark-foreground hover:-translate-y-0.5 hover:bg-primary",
      outline:
        "border border-border bg-paper text-ink hover:border-ink hover:-translate-y-0.5",
      ghost: "text-ink hover:text-primary",
    }[variant];

    return (
      <motion.button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ x: sx, y: sy, rotate }}
        className={cn(base, styles, className)}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
