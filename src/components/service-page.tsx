import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section, PageHero, CTASection } from "@/components/page-primitives";

export function ServicePage({
  num,
  eyebrow,
  title,
  emphasis,
  lead,
  overview,
  includes,
  deliverables,
  ideal,
}: {
  num: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  lead: string;
  overview: string;
  includes: string[];
  deliverables: string[];
  ideal: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} emphasis={emphasis} lead={lead} />
      <Section>
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10">
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          <Reveal>
            <div className="font-display italic text-accent mb-3">{num}</div>
            <h2 className="font-display text-4xl mb-5">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">{overview}</p>

            <h3 className="font-display text-2xl mb-4">What's included</h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>

            <h3 className="font-display text-2xl mb-4">You'll receive</h3>
            <ul className="grid gap-2">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="sticky top-24 rounded-3xl border border-border bg-card p-7 card-tilt">
              <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Ideal for</div>
              <p className="text-foreground mb-6">{ideal}</p>
              <div className="rounded-xl bg-brand-deep text-cream p-5 mb-5">
                <div className="text-xs uppercase tracking-widest text-cream/70 mb-1">Get a quote</div>
                <div className="font-display text-2xl mb-3">Custom to your books</div>
                <Link to="/pricing" className="inline-flex items-center text-sm font-semibold text-accent-soft hover:underline">
                  See pricing →
                </Link>
              </div>
              <Link to="/contact" className="block w-full text-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5">
                Book Free Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
