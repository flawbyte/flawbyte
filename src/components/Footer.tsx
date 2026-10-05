import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="border-t border-border bg-paper">
    <div className="container-x py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5"><Link to="/" className="text-xl font-bold">Flaw<span className="text-primary">Byte</span></Link><p className="mt-5 max-w-sm text-sm leading-7 text-ink-soft">Creative digital studio crafting brands, sites and campaigns that perform. Based in Hyderabad, working with founders worldwide.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold">Let&apos;s talk <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a></div>
        <FooterColumn title="Company" items={[['About','/about'],['Work','/portfolio'],['Services','/services'],['Pricing','/pricing'],['Contact','/contact']]}/>
        <div className="md:col-span-2"><h2 className="editorial-label text-ink-soft">Services</h2><ul className="mt-5 space-y-3 text-sm"><li>Social Media</li><li>Websites</li><li>Instant Reels</li><li>Branding</li><li>Video Editing</li></ul></div>
        <div className="md:col-span-3"><h2 className="editorial-label text-ink-soft">Contact</h2><div className="mt-5 space-y-3 text-sm text-ink-soft"><a className="block hover:text-primary" href="mailto:flawbyte@gmail.com">flawbyte@gmail.com</a><a className="block hover:text-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a><a className="block hover:text-primary" href="tel:+916302431662">+91 6302431662</a><p>Hyderabad, Telangana</p></div></div>
      </div>
      <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-xs text-ink-soft sm:flex-row sm:justify-between"><p>© {year} FlawByte. Designed and devoloped by Kamatham akhil</p><div className="flex gap-6"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div></div>
      <div aria-hidden className="footer-wordmark mt-12 overflow-hidden text-center text-[14.5vw] font-extrabold leading-[.76] text-ink">FLAWBYTE</div>
    </div>
  </footer>;
}

function FooterColumn({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return <div className="md:col-span-2"><h2 className="editorial-label text-ink-soft">{title}</h2><ul className="mt-5 space-y-3 text-sm">{items.map(([label,to]) => <li key={to}><Link to={to} className="hover:text-primary">{label}</Link></li>)}</ul></div>;
}