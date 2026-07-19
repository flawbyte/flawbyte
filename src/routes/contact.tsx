import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FlawByte" },
      {
        name: "description",
        content:
          "Tell us about your project. We'll come back within 24 hours with a plan. Email flawbyte@gmail.com or call +91 6302431662.",
      },
      { property: "og:title", content: "Contact — FlawByte" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-70" />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-primary">Contact</p>
          </Reveal>
          <Reveal>
            <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
              Let's build something <span className="text-gradient">unforgettable</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="flex h-full flex-col rounded-[28px] border border-border bg-white p-8 shadow-card lg:p-10">
                <p className="text-xs uppercase tracking-widest text-primary">Reach us</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Prefer the direct route?
                </h2>
                <p className="mt-3 text-ink-soft">
                  We reply to every message within 24 hours, Monday–Friday.
                </p>

                <div className="mt-10 space-y-6">
                  <ContactItem icon={<Mail size={18} />} label="Email" value="flawbyte@gmail.com" href="mailto:flawbyte@gmail.com" />
                  <ContactItem icon={<Phone size={18} />} label="Phone" value="+91 6302431662" href="tel:+916302431662" />
                  <ContactItem icon={<MapPin size={18} />} label="Location" value="Hyderabad, Telangana" />
                </div>

                <div className="mt-auto pt-10">
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
                    <iframe
                      title="Map — Hyderabad"
                      loading="lazy"
                      className="h-56 w-full grayscale contrast-125"
                      src="https://www.google.com/maps?q=Hyderabad%2C%20Telangana&output=embed"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-[28px] border border-border bg-white p-8 shadow-card lg:p-12">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 transition-all hover:border-primary/40 hover:shadow-card"
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary transition-transform group-hover:scale-110">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-ink-soft">{label}</p>
        <p className="mt-0.5 text-sm font-medium">{value}</p>
      </div>
    </Wrap>
  );
}

type Status = "idle" | "loading" | "success";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col">
      <p className="text-xs uppercase tracking-widest text-primary">Project brief</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">Tell us about it.</h2>
      <p className="mt-3 text-ink-soft">
        A few details help us prep a thoughtful reply.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Field label="Your name" required value={values.name} onChange={(v) => setValues((s) => ({ ...s, name: v }))} />
        <Field label="Email" type="email" required value={values.email} onChange={(v) => setValues((s) => ({ ...s, email: v }))} />
      </div>
      <div className="mt-5">
        <Field label="Company (optional)" value={values.company} onChange={(v) => setValues((s) => ({ ...s, company: v }))} />
      </div>
      <div className="mt-5">
        <Field
          label="What are we building?"
          required
          multiline
          value={values.message}
          onChange={(v) => setValues((s) => ({ ...s, message: v }))}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-soft">
          By submitting you agree to our{" "}
          <a href="/privacy" className="underline hover:text-primary">privacy policy</a>.
        </p>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status !== "idle"}
          className="group relative inline-flex min-w-[180px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-white shadow-elevated"
        >
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.span key="i" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="inline-flex items-center gap-2">
                Send message <Send size={16} />
              </motion.span>
            )}
            {status === "loading" && (
              <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" /> Sending
              </motion.span>
            )}
            {status === "success" && (
              <motion.span key="s" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                <Check size={16} /> Sent — talk soon
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const shared =
    "peer block w-full rounded-2xl border border-border bg-white px-4 pb-3 pt-6 text-sm text-ink outline-none transition-all focus:border-primary/60 focus:ring-4 focus:ring-primary/10";

  return (
    <label className="relative block">
      {multiline ? (
        <textarea
          required={required}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={shared + " resize-none"}
          maxLength={1000}
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          maxLength={200}
          className={shared}
        />
      )}
      <motion.span
        animate={{
          y: active ? 0 : 8,
          scale: active ? 0.85 : 1,
          color: active ? "#6d28d9" : "#666666",
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute left-4 top-2 origin-left text-sm"
      >
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </motion.span>
    </label>
  );
}
