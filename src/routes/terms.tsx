import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FlawByte" },
      { name: "description", content: "The terms that govern your use of FlawByte's website and services." },
      { property: "og:title", content: "Terms of Service — FlawByte" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-primary">Legal</p>
        </Reveal>
        <Reveal>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-6xl">Terms of Service</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-ink-soft">Last updated: January 2026</p>
        </Reveal>

        <div className="prose prose-lg mt-12 max-w-none space-y-8 text-ink-soft [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:tracking-tight [&_p]:leading-relaxed">
          <p>
            By using flawbyte.com or engaging FlawByte for services, you agree to
            the terms below. If you don't agree, please don't use the site.
          </p>
          <h2>Services</h2>
          <p>
            Project scope, deliverables, timelines and fees are defined in the
            statement of work we sign with each client. This site is informational.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Work we deliver becomes yours upon full payment. Case studies, brand
            marks and any materials on this site remain the property of FlawByte
            or their respective owners.
          </p>
          <h2>Acceptable use</h2>
          <p>
            Don't attempt to disrupt the site, scrape it at abusive volumes, or
            use it in ways that infringe others' rights.
          </p>
          <h2>Liability</h2>
          <p>
            The site is provided "as is". To the extent permitted by law,
            FlawByte is not liable for indirect or consequential damages arising
            from use of the site.
          </p>
          <h2>Contact</h2>
          <p>Questions? Reach us at flawbyte@gmail.com.</p>
        </div>
      </div>
    </section>
  );
}
