import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to FlawByte on WhatsApp"
      title="WhatsApp"
      className="group fixed bottom-4 right-4 z-40 grid h-12 w-12 place-items-center rounded-full border border-dark-foreground/15 bg-dark text-dark-foreground shadow-elevated transition-transform duration-300 hover:-translate-y-1 hover:bg-primary sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={19} aria-hidden />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-dark px-3 py-2 text-xs font-semibold text-dark-foreground opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Let&apos;s talk
      </span>
    </a>
  );
}