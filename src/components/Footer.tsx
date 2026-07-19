import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-border bg-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-mesh opacity-60 blur-3xl" />
      <div className="container-x relative py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-white shadow-elevated">F</span>
              <span className="text-lg font-semibold tracking-tight">
                Flaw<span className="text-gradient">Byte</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
              Creative digital agency crafting brands, sites and campaigns that
              perform. Based in Hyderabad, working with founders worldwide.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Services</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Social Media</li>
              <li>Websites</li>
              <li>Instant Reels</li>
              <li>Branding</li>
              <li>Video Editing</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li><a href="mailto:flawbyte@gmail.com" className="hover:text-primary">flawbyte@gmail.com</a></li>
              <li><a href="tel:+916302431662" className="hover:text-primary">+91 6302431662</a></li>
              <li>Hyderabad, Telangana</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-ink-soft md:flex-row md:items-center">
          <p>© {year} FlawByte. Designed and devoloped by Kamatham akhil</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-10 select-none bg-gradient-primary bg-clip-text text-center text-[15vw] font-black leading-none tracking-tighter text-transparent opacity-90"
        >
          FLAWBYTE
        </div>
      </div>
    </footer>
  );
}
