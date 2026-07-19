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
      "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors overflow-hidden";
    const styles = {
      primary:
        "bg-gradient-primary text-white shadow-elevated hover:shadow-glow",
      outline:
        "border border-border bg-white text-ink hover:border-primary/40 hover:text-primary",
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
        {variant === "primary" && (
          <span
            aria-hidden
            className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.35), transparent 60%)",
            }}
          />
        )}
      </motion.button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
