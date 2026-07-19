import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FlawByte" },
      { name: "description", content: "How FlawByte collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — FlawByte" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-primary">Legal</p>
        </Reveal>
        <Reveal>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-6xl">Privacy Policy</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-ink-soft">Last updated: January 2026</p>
        </Reveal>

        <div className="prose prose-lg mt-12 max-w-none space-y-8 text-ink-soft [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:tracking-tight [&_p]:leading-relaxed">
          <p>
            At FlawByte, your privacy is fundamental. This policy explains what
            information we collect when you use our site or work with us, how we
            use it, and the choices you have.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you contact us or engage our services, we collect the details you
            share — name, email, company, and any project context. We also collect
            basic analytics (page views, referrer) to understand what's useful.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information to respond, to deliver services you've hired
            us for, and to improve how the site works. We never sell your data.
          </p>
          <h2>Sharing</h2>
          <p>
            We share information only with vetted service providers (analytics,
            email delivery) that help us run FlawByte, and only when necessary.
          </p>
          <h2>Your rights</h2>
          <p>
            You can ask us to access, correct, or delete any information we hold
            about you. Email <a href="mailto:flawbyte@gmail.com" className="text-primary">flawbyte@gmail.com</a>.
          </p>
          <h2>Contact</h2>
          <p>Questions about this policy? Reach us at flawbyte@gmail.com.</p>
        </div>
      </div>
    </section>
  );
}
