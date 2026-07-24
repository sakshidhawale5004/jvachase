import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section, SectionHead, CTASection } from "@/components/page-primitives";
import brandFilm from "@/assets/brand-film.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JVA Chase Bookkeeping — Clean, tax-ready books, every month" },
      { name: "description", content: "U.S.-managed bookkeeping and financial operations. Clean books, monthly reports, tax-ready year-round." },
      { property: "og:title", content: "JVA Chase Bookkeeping" },
      { property: "og:description", content: "Clean books. Clear decisions. Tax-ready year-round." },
    ],
  }),
  component: HomePage,
});

const props = [
  { i: "$", t: "Cost Efficiency", d: "Reduce accounting overhead without sacrificing quality." },
  { i: "↗", t: "Scalable Operations", d: "A flexible support model that grows with your business." },
  { i: "▤", t: "Process Standardization", d: "Structured workflows that improve financial accuracy." },
  { i: "◆", t: "Executive Oversight", d: "Financial operations run with a strategic mindset." },
];

const services = [
  { n: "01", to: "/services/monthly-bookkeeping", t: "Monthly Bookkeeping", d: "Transactions categorized, accounts reconciled, books kept continuously up to date." },
  { n: "02", to: "/services/reconciliation", t: "Bank & Card Reconciliation", d: "Every transaction matched against statements — errors caught early." },
  { n: "03", to: "/services/ap-ar", t: "Accounts Payable & Receivable", d: "Stay on top of what you owe and what's owed to you." },
  { n: "04", to: "/services/financial-statements", t: "Financial Statements", d: "Monthly P&L, balance sheet, and cash flow — delivered with insight." },
  { n: "05", to: "/services/catch-up-cleanup", t: "Catch-Up & Cleanup", d: "Behind on your books? We organize months — or years — of backlog." },
  { n: "06", to: "/services/sales-tax-year-end", t: "Sales Tax & Year-End", d: "Sales tax filed, plus a clean year-end package for your CPA." },
];

function HomePage() {
  return (
    <>
      {/* Hero with brand video */}
      <section className="relative bg-brand-deep text-cream overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          poster=""
        >
          <source src={brandFilm.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/80 via-brand-deep/70 to-brand-deep/95" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:py-40">
          <p className="text-eyebrow text-accent-soft mb-5 animate-reveal">Bookkeeping · Tax-ready · Stress-free</p>
          <h1 className="font-display text-5xl md:text-[5.5rem] leading-[1.02] max-w-[15ch] font-normal animate-reveal" style={{ animationDelay: "80ms" }}>
            Books that stay clear, current, and <em className="not-italic font-display italic text-accent-soft">tax-ready.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-cream/85 animate-reveal" style={{ animationDelay: "180ms" }}>
            JVA Chase handles the numbers so you can focus on running and growing your business. Clean books, on time, every month — no jargon and no surprises.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-reveal" style={{ animationDelay: "260ms" }}>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5">
              Book a Free Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10">
              <PlayCircle className="h-4 w-4" /> Explore Services
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-cream/15 pt-8 animate-reveal" style={{ animationDelay: "340ms" }}>
            {[
              { n: "15+", l: "Years keeping books" },
              { n: "Monthly", l: "Statements, on time" },
              { n: "100%", l: "Tax-ready, year-round" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl md:text-5xl text-accent-soft">{s.n}</div>
                <div className="text-sm text-cream/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Floating 3D orbs */}
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-gradient-gold opacity-30 blur-3xl animate-float-3d" />
        <div className="pointer-events-none absolute top-1/3 -left-24 h-56 w-56 rounded-full bg-brand opacity-40 blur-3xl animate-float-3d" style={{ animationDelay: "-3s" }} />
      </section>

      {/* Marquee ribbon */}
      <div className="bg-sand border-y border-border overflow-hidden py-4">
        <div className="flex gap-16 whitespace-nowrap animate-marquee font-display italic text-xl text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 pr-16">
              <span>Clean Books</span><span className="text-accent">✦</span>
              <span>Clear Decisions</span><span className="text-accent">✦</span>
              <span>Tax-Ready Year-Round</span><span className="text-accent">✦</span>
              <span>U.S.-Managed</span><span className="text-accent">✦</span>
              <span>QuickBooks · Xero</span><span className="text-accent">✦</span>
              <span>Trusted Advisors</span><span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why */}
      <Section>
        <SectionHead eyebrow="Why JVA Chase" title="Cost efficiency, without cutting corners." lead="U.S.-managed accounting powered by experienced finance professionals — the savings of an outsourced model with executive-level oversight." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {props.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className="card-tilt h-full rounded-2xl border border-border bg-card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-deep text-accent-soft font-display text-xl mb-5">{p.i}</div>
                <h3 className="font-display text-xl mb-2">{p.t}</h3>
                <p className="text-muted-foreground text-sm">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services grid */}
      <Section tone="sand">
        <SectionHead eyebrow="What We Do" title="Everything your books need — handled." lead="From day-to-day recordkeeping to a clean hand-off at tax time." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 50}>
              <Link to={s.to} className="card-tilt group block h-full rounded-2xl border border-border bg-card p-7">
                <div className="font-display italic text-accent text-base mb-3">{s.n}</div>
                <h3 className="font-display text-xl mb-2 group-hover:text-brand transition">{s.t}</h3>
                <p className="text-muted-foreground text-sm">{s.d}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3D showcase card */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="text-eyebrow mb-4">Precision at every step</p>
            <h2 className="font-display text-4xl md:text-5xl mb-5">A monthly close, done right.</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Categorize, reconcile, review, report. Every step documented, every number defensible.
            </p>
            <ul className="space-y-3">
              {["Bank & card reconciliation", "Vendor and customer AP/AR", "P&L, balance sheet & cash flow", "Year-end handoff to your CPA"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative [perspective:1200px]">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant animate-float-3d [transform-style:preserve-3d]">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-semibold text-muted-foreground tracking-widest">MONTHLY REPORT</div>
                  <div className="text-xs text-accent font-semibold">DELIVERED</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-secondary p-4">
                    <div className="text-xs text-muted-foreground">Revenue</div>
                    <div className="font-display text-2xl">$248,320</div>
                    <div className="text-xs text-accent">+12.4%</div>
                  </div>
                  <div className="rounded-xl bg-secondary p-4">
                    <div className="text-xs text-muted-foreground">Net Income</div>
                    <div className="font-display text-2xl">$47,910</div>
                    <div className="text-xs text-accent">+8.1%</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[70, 45, 88, 55, 72].map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-16 text-xs text-muted-foreground">Cat {i + 1}</div>
                      <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-brand to-accent" style={{ width: `${w}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl border border-border bg-card p-3 shadow-elegant animate-float-3d" style={{ animationDelay: "-2s" }}>
                <div className="text-[10px] text-muted-foreground">Reconciled</div>
                <div className="font-display text-2xl mt-1 gradient-text">100%</div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-20 rounded-2xl border border-border bg-card px-4 py-3 shadow-elegant animate-float-3d" style={{ animationDelay: "-4s" }}>
                <div className="text-[10px] text-muted-foreground">On time</div>
                <div className="font-display text-lg">Every month</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="sand">
        <SectionHead center eyebrow="Clients" title="Books off their minds." />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { q: "Since switching to JVA Chase, I finally understand my numbers — and I got hours of my week back. Tax season was the easiest it's ever been.", w: "— Founder, Wellness Studio" },
            { q: "They cleaned up two years of neglected books and now everything just runs. Couldn't recommend them more.", w: "— Owner, Contracting Firm" },
          ].map((t, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl border border-border bg-card p-8 card-tilt">
                <div className="font-display text-4xl text-accent leading-none">"</div>
                <p className="font-display italic text-xl mt-3 mb-5">{t.q}</p>
                <div className="text-sm font-semibold text-muted-foreground">{t.w}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
