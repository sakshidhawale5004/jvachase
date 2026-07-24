import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, PlayCircle, Shield, Clock, TrendingUp, Users, Award, FileCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section, SectionHead, CTASection } from "@/components/page-primitives";

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
  { i: <Shield className="h-6 w-6" />, t: "Cost Efficiency", d: "Reduce accounting overhead by up to 60% without sacrificing quality or accuracy." },
  { i: <TrendingUp className="h-6 w-6" />, t: "Scalable Operations", d: "A flexible support model that grows with your business from startup to enterprise." },
  { i: <FileCheck className="h-6 w-6" />, t: "Process Standardization", d: "Structured workflows and documented procedures that improve financial accuracy." },
  { i: <Award className="h-6 w-6" />, t: "Executive Oversight", d: "U.S.-based management ensures quality control and strategic financial operations." },
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
      <section className="relative bg-brand-deep text-cream overflow-hidden min-h-[85vh] flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        >
          <source src="/newvideoforherosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/70 via-brand-deep/60 to-brand-deep/70" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-28 md:py-40 w-full">
          <p className="text-eyebrow text-accent-soft mb-5 animate-reveal">Bookkeeping · Tax-ready · Stress-free</p>
          <h1 className="font-display text-5xl md:text-[5.5rem] leading-[1.02] max-w-[15ch] font-normal animate-reveal" style={{ animationDelay: "80ms" }}>
            Books that stay clear, current, and <em className="not-italic font-display italic text-accent-soft">tax-ready.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-cream/85 animate-reveal leading-relaxed" style={{ animationDelay: "180ms" }}>
            JVA Chase handles the numbers so you can focus on running and growing your business. Clean books, on time, every month — no jargon and no surprises.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-reveal" style={{ animationDelay: "260ms" }}>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_0_50px_oklch(0.75_0.12_75_/_0.45)]">
              Book a Free Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-cream/10 hover:border-cream/50">
              <PlayCircle className="h-4 w-4" /> Explore Services
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-cream/15 pt-8 animate-reveal" style={{ animationDelay: "340ms" }}>
            {[
              { n: "15+", l: "Years keeping books", icon: <Clock className="h-5 w-5 text-accent-soft mb-2" /> },
              { n: "500+", l: "Businesses served", icon: <Users className="h-5 w-5 text-accent-soft mb-2" /> },
              { n: "100%", l: "Tax-ready, year-round", icon: <CheckCircle2 className="h-5 w-5 text-accent-soft mb-2" /> },
            ].map((s) => (
              <div key={s.l} className="text-center md:text-left">
                {s.icon}
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
              <div className="card-tilt h-full rounded-2xl border border-border bg-card p-7 hover:border-accent/50 transition-all duration-300 group">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-brand-deep to-brand text-accent-soft mb-5 group-hover:scale-110 transition-transform duration-300">
                  {p.i}
                </div>
                <h3 className="font-display text-xl mb-2 group-hover:text-brand transition-colors">{p.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services grid */}
      <Section tone="sand">
        <SectionHead eyebrow="What We Do" title="Everything your books need — handled." lead="From day-to-day recordkeeping to a clean hand-off at tax time." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const imageMap: Record<string, string> = {
              "01": "/images/bookkeeping.jpg",
              "02": "/images/bank_reconciliation.jpg",
              "03": "/images/ap_ar_services.jpg",
              "04": "/images/financial_statements.jpg",
              "05": "/images/struggling_receipts.jpg",
              "06": "/images/tax_software.jpg"
            };
            const image = imageMap[s.n];

            return (
              <Reveal key={s.n} delay={i * 60}>
                <Link to={s.to} className="card-tilt group block h-full rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
                  <div className="h-48 overflow-hidden relative border-b border-border">
                    <img src={image} alt={s.t} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="font-display italic text-accent mb-3">{s.n}</div>
                    <h3 className="font-display text-xl mb-2 group-hover:text-brand transition">{s.t}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{s.d}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* How It Works - New Section */}
      <Section>
        <SectionHead eyebrow="Our Process" title="How we work with you." lead="A simple, transparent process that gets you from backlog to current in weeks, not months." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Discovery Call", desc: "We learn about your business, accounting software, and current state of your books.", icon: <Users className="h-6 w-6" /> },
            { step: "02", title: "Custom Proposal", desc: "Receive a detailed scope, timeline, and pricing based on your specific needs.", icon: <FileCheck className="h-6 w-6" /> },
            { step: "03", title: "Onboarding", desc: "Secure access setup, process documentation, and knowledge transfer begins.", icon: <Shield className="h-6 w-6" /> },
            { step: "04", title: "Ongoing Support", desc: "Monthly close, reports delivered, and you're always tax-ready.", icon: <Clock className="h-6 w-6" /> },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-accent to-transparent -translate-x-8" />
                )}
                <div className="rounded-2xl border border-border bg-card p-6 card-tilt hover:border-accent/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 grid place-items-center text-accent group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="font-display text-3xl text-accent-soft opacity-50">{item.step}</div>
                  </div>
                  <h3 className="font-display text-lg mb-2 group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Visual Break / Showcase */}
      <section className="relative py-24 overflow-hidden bg-brand-deep text-cream">
        <div className="absolute inset-0 bg-hero-glow opacity-50" />
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Expertise you can count on.</h2>
              <p className="text-cream/80 text-lg mb-8 leading-relaxed">
                Whether you need straightforward monthly bookkeeping, complex bank reconciliations, or detailed financial statements, our experts ensure your records are pristine.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated bookkeeper & account manager",
                  "Direct integration with your banks",
                  "Detailed monthly reporting packages"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative group perspective-1000">
                <div className="rounded-2xl overflow-hidden border border-cream/20 shadow-2xl transition-transform duration-700 ease-out transform-gpu group-hover:rotate-y-12 group-hover:rotate-x-12 group-hover:scale-105 [transform-style:preserve-3d]">
                  <img src="/images/expert_bookkeeping.jpg" alt="Expert Bookkeeping" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 translate-z-10 [transform:translateZ(50px)]">
                    <div className="bg-brand/80 backdrop-blur-md rounded-xl p-4 border border-cream/10 inline-block">
                      <p className="font-display text-xl">Top Rated Accuracy</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-gold opacity-20 blur-3xl animate-float-3d" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust Indicators - New Section */}
      <Section tone="sand">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-eyebrow mb-4">Trusted by Growing Businesses</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto">Built on expertise, delivered with care.</h2>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Shield className="h-8 w-8" />, title: "SOC 2 Compliant", desc: "Enterprise-grade security and data protection" },
            { icon: <Award className="h-8 w-8" />, title: "CPA Approved", desc: "Work seamlessly with your tax preparer" },
            { icon: <Users className="h-8 w-8" />, title: "U.S. Based Team", desc: "Direct communication with native English speakers" },
            { icon: <CheckCircle2 className="h-8 w-8" />, title: "99.9% Accuracy", desc: "Rigorous QA process for every transaction" },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="text-center p-6 rounded-2xl border border-border bg-card card-tilt group hover:border-accent/40 transition-all">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg mb-2 group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
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
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-2xl overflow-hidden border border-border bg-card shadow-elegant animate-float-3d" style={{ animationDelay: "-2s" }}>
                <img src="/images/monthly_bookkeeping.jpg" alt="Monthly Bookkeeping" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-2xl overflow-hidden border border-border bg-card shadow-elegant animate-float-3d" style={{ animationDelay: "-4s" }}>
                <img src="/images/financial_statements.jpg" alt="Financial Statements" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="sand">
        <SectionHead center eyebrow="Clients" title="Books off their minds." lead="Real businesses, real results. Here's what our clients have to say about working with JVA Chase." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { q: "Since switching to JVA Chase, I finally understand my numbers — and I got hours of my week back. Tax season was the easiest it's ever been.", w: "Sarah M.", r: "Founder, Wellness Studio", rating: 5 },
            { q: "They cleaned up two years of neglected books and now everything just runs. Couldn't recommend them more highly.", w: "Michael R.", r: "Owner, Contracting Firm", rating: 5 },
            { q: "The monthly reports are clear, delivered on time, and the team is incredibly responsive. It's like having an in-house controller at a fraction of the cost.", w: "Jennifer L.", r: "CEO, Tech Startup", rating: 5 },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-8 card-tilt h-full flex flex-col group hover:border-accent/40 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="font-display text-4xl text-accent leading-none mb-3 group-hover:scale-110 transition-transform inline-block">"</div>
                <p className="font-display italic text-lg mb-5 flex-1 leading-relaxed">{t.q}</p>
                <div>
                  <div className="font-semibold">{t.w}</div>
                  <div className="text-sm text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
