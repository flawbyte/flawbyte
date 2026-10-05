"use client";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" },
  { to: "/services", label: "Services" }, { to: "/portfolio", label: "Work" },
  { to: "/pricing", label: "Pricing" }, { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const py = useTransform(scrollY, [0, 100], [17, 10]);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 16); fn(); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <motion.header style={{ paddingTop: py, paddingBottom: py }} className={cn("fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300", scrolled || open ? "glass border-border" : "border-transparent bg-background/80")}>
      <div className="container-x flex items-center justify-between">
        <Link to="/" aria-label="FlawByte home" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">F</span>
          <span className="text-sm font-bold">Flaw<span className="text-primary">Byte</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => <Link key={link.to} to={link.to} className={cn("relative py-2 text-xs font-semibold text-ink-soft transition-colors hover:text-ink", location.pathname === link.to && "text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-primary")}>{link.label}</Link>)}
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group hidden min-h-11 items-center gap-2 rounded-md bg-dark px-5 text-xs font-semibold text-dark-foreground transition-colors hover:bg-primary md:inline-flex">Let's Talk <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        <button type="button" className="relative z-[70] grid h-11 w-11 place-items-center rounded-md border border-border bg-paper md:hidden" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .16 }} className="fixed inset-0 z-60 bg-background pt-28 md:hidden">
          <nav aria-label="Mobile navigation" className="container-x flex h-full flex-col">
            <div className="border-t border-border">
              {links.map((link, i) => <motion.div key={link.to} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .04 }}><Link to={link.to} className="flex items-center justify-between border-b border-border py-5 text-3xl font-semibold"><span>{link.label}</span><span className="text-sm text-ink-soft">0{i + 1}</span></Link></motion.div>)}
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-auto mb-8 flex min-h-14 items-center justify-between rounded-md bg-dark px-5 text-sm font-semibold text-dark-foreground">Let&apos;s Talk <ArrowUpRight size={17}/></a>
          </nav>
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  );
}