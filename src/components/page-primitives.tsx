import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  children,
  className,
  tone,
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "sand" | "dark";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-24",
        tone === "sand" && "bg-sand",
        tone === "dark" && "bg-brand-deep text-cream",
        className,
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl mb-14", center && "mx-auto text-center")}>
      {eyebrow && <p className="text-eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-4xl md:text-5xl mb-4">{title}</h2>
      {lead && <p className="text-muted-foreground text-lg">{lead}</p>}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  emphasis,
  lead,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  lead: string;
  cta?: boolean;
}) {
  return (
    <section className="relative bg-brand-deep text-cream overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Floating 3D orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand blur-3xl opacity-40 animate-float-3d" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 rounded-full bg-gradient-gold opacity-25 blur-3xl animate-float-3d" style={{ animationDelay: "-3s" }} />
      
      <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:py-32">
        <p className="text-eyebrow text-accent-soft mb-5 animate-reveal">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl font-normal text-cream leading-[1.08] animate-reveal" style={{ animationDelay: "80ms" }}>
          {title}{" "}
          {emphasis && <em className="text-accent-soft not-italic font-display italic">{emphasis}</em>}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed animate-reveal" style={{ animationDelay: "160ms" }}>
          {lead}
        </p>
        {cta && (
          <div className="mt-9 flex flex-wrap gap-3 animate-reveal" style={{ animationDelay: "240ms" }}>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
            >
              Explore Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <Section tone="dark" className="!py-20">
      <Reveal className="grid gap-8 md:grid-cols-[1.5fr_auto] items-center">
        <div>
          <p className="text-eyebrow text-accent-soft mb-3">Ready when you are</p>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Let's get your books in order.</h2>
          <p className="mt-4 text-cream/75 max-w-xl">
            Free 30-minute consultation. No jargon, no surprises — just a clear plan for clean books.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5"
        >
          Book Consultation →
        </Link>
      </Reveal>
    </Section>
  );
}
