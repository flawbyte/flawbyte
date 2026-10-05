"use client";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] mix-blend-multiply opacity-50 motion-reduce:hidden"
      style={{
        background: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--primary) 10%, transparent), transparent 68%)`,
        transition: "background 120ms ease-out",
      }}
    />
  );
}
