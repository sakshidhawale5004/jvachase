import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JVA Chase Bookkeeping" },
      { name: "description", content: "Book a free consultation with JVA Chase Bookkeeping. Serving clients nationwide." },
      { property: "og:title", content: "Contact JVA Chase" },
      { property: "og:description", content: "Let's get your books in order." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative bg-brand-deep text-cream min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Floating 3D orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand blur-3xl opacity-40 animate-float-3d" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float-3d" style={{ animationDelay: "-3s" }} />

      <div className="relative mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-eyebrow text-accent-soft mb-4">Get In Touch</p>
            <h1 className="font-display text-5xl md:text-6xl text-cream leading-[1.08] mb-5">
              Let's get your books in <em className="italic text-accent-soft">order.</em>
            </h1>
            <p className="text-cream/85 text-lg leading-relaxed mb-10 max-w-md">
              Ready to stop stressing about your finances? Reach out for a free, no-obligation consultation.
            </p>
            <div className="space-y-5">
              {[
                { i: <Phone className="h-4 w-4" />, l: "Phone", v: "(555) 555-5555" },
                { i: <Mail className="h-4 w-4" />, l: "Email", v: "hello@jvachase.com" },
                { i: <MapPin className="h-4 w-4" />, l: "Serving", v: "Nationwide, remote-first" },
              ].map((c) => (
                <div key={c.l} className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-cream/10 text-accent-soft shrink-0">{c.i}</div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/60">{c.l}</div>
                    <div className="font-semibold text-cream">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 max-w-sm rounded-2xl overflow-hidden shadow-elegant border border-cream/10 relative group">
              <img src="/images/green_revolution.jpg" alt="Dedicated Support" className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-brand-deep/30 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 right-4 bg-brand/90 backdrop-blur-md rounded-xl p-3 text-sm text-cream border border-cream/10">
                <span className="block font-semibold mb-1">Always Here to Help</span>
                Our team is ready to provide tailored financial solutions for your business.
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl bg-cream/[0.06] border border-cream/15 p-8 backdrop-blur-sm"
            >
              {sent && (
                <div className="mb-5 rounded-xl border border-accent-soft/60 bg-accent/20 p-4 text-sm text-cream animate-pop-in">
                  Thanks — we received your message and will respond within one business day.
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Smith" required />
                <Field label="Phone" name="phone" placeholder="(555) 555-5555" />
              </div>
              <Field label="Email" name="email" placeholder="you@business.com" type="email" required />
              <Field label="Business name" name="business" placeholder="Your Company LLC" />
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wide text-cream/75 mb-2">How can we help?</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a bit about your books…"
                  className="w-full rounded-xl bg-cream/10 border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent-soft resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-semibold uppercase tracking-wide text-cream/75 mb-2">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl bg-cream/10 border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent-soft"
      />
    </div>
  );
}
