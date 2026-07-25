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
      <div className="bg-brand-deep border-y border-white/10 overflow-hidden py-6">
        <div className="flex gap-16 whitespace-nowrap animate-marquee font-display text-2xl tracking-wide text-cream/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 pr-16 items-center">
              <span>Clean Books</span><span className="text-accent text-sm">✦</span>
              <span>Clear Decisions</span><span className="text-accent text-sm">✦</span>
              <span>Tax-Ready Year-Round</span><span className="text-accent text-sm">✦</span>
              <span>U.S.-Managed</span><span className="text-accent text-sm">✦</span>
              <span>QuickBooks & Xero</span><span className="text-accent text-sm">✦</span>
              <span>Trusted Advisors</span><span className="text-accent text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial "The JVA Chase Standard" Section */}
      <section className="bg-background py-32 relative overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative z-10">
              <Reveal>
                <div className="inline-block rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent mb-6">The Standard</div>
                <h2 className="font-display text-5xl md:text-6xl leading-[1.1] mb-8">
                  Financial clarity <br/><span className="italic text-muted-foreground font-normal">without compromise.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  U.S.-managed accounting powered by experienced finance professionals. We bring you the massive savings of an outsourced model, but maintain executive-level oversight so your numbers are never just "close enough."
                </p>
                <div className="space-y-6">
                  {props.map((p, i) => (
                    <Reveal key={p.t} delay={i * 80}>
                      <div className="flex gap-4 group">
                        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-cream transition-colors duration-300">
                          {p.i}
                        </div>
                        <div>
                          <h3 className="font-display text-xl mb-1">{p.t}</h3>
                          <p className="text-muted-foreground text-sm">{p.d}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 relative">
              <Reveal delay={200}>
                <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden group">
                  <img src="/images/expert_bookkeeping.jpg" alt="Expert Team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-transparent to-transparent" />
                  
                  {/* Floating Glass Cards */}
                  <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 glass-panel rounded-2xl p-6 text-cream translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-cream/70">Accuracy Rate</div>
                        <div className="font-display text-2xl">99.9%</div>
                      </div>
                    </div>
                    <p className="text-sm text-cream/60">Rigorous multi-tier review process on every account.</p>
                  </div>
                </div>
              </Reveal>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="bg-sand py-32 border-y border-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHead 
            eyebrow="What We Do" 
            title="Everything your books need." 
            lead="From day-to-day categorization to a pristine hand-off at tax time. We handle the heavy lifting." 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px] mt-16">
            {/* Featured Large Service */}
            <Link to="/services/monthly-bookkeeping" className="md:col-span-2 relative rounded-3xl overflow-hidden group card-tilt">
              <img src="/images/monthly_bookkeeping.jpg" alt="Bookkeeping" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="mb-4 inline-flex items-center rounded-full glass-panel px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
                  Most Popular
                </div>
                <h3 className="font-display text-3xl mb-2">Monthly Bookkeeping</h3>
                <p className="text-white/80 text-sm max-w-md mb-6">Transactions categorized, accounts reconciled, and books kept continuously up to date without you having to lift a finger.</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Standard Service 1 */}
            <Link to="/services/reconciliation" className="relative rounded-3xl overflow-hidden group card-tilt bg-brand-deep text-cream p-8 flex flex-col">
              <div className="mb-auto">
                <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl mb-2">Bank & Card Reconciliation</h3>
                <p className="text-cream/70 text-sm">Every single transaction matched against your statements. Errors caught early, guaranteed.</p>
              </div>
              <div className="mt-8 flex justify-between items-center group-hover:text-accent transition-colors">
                <span className="text-sm font-semibold">Explore</span>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </Link>

            {/* Standard Service 2 */}
            <Link to="/services/financial-statements" className="relative rounded-3xl overflow-hidden group card-tilt bg-card border border-border p-8 flex flex-col">
              <div className="mb-auto">
                <div className="h-12 w-12 rounded-xl bg-brand/5 flex items-center justify-center mb-6 text-brand">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl mb-2">Financial Statements</h3>
                <p className="text-muted-foreground text-sm">Monthly P&L, balance sheet, and cash flow—delivered on time, every time.</p>
              </div>
              <div className="mt-8 flex justify-between items-center text-brand group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-semibold">Explore</span>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </Link>

            {/* Wide Service */}
            <Link to="/services/catch-up-cleanup" className="md:col-span-2 relative rounded-3xl overflow-hidden group card-tilt">
              <img src="/images/struggling_receipts.jpg" alt="Cleanup" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center text-white w-2/3">
                <h3 className="font-display text-3xl mb-3">Catch-Up & Cleanup</h3>
                <p className="text-white/80 text-sm mb-6">Behind on your books? Don't stress. We organize months or even years of backlog to get you compliant and tax-ready fast.</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-sm font-semibold hover:bg-secondary transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="text-center mb-20">
            <p className="text-eyebrow mb-4">Our Process</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">From messy backlog to <span className="italic text-muted-foreground">total clarity.</span></h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] top-4 bottom-4 w-px bg-border md:left-1/2 md:-ml-[0.5px]" />
            
            {[
              { step: "01", title: "Discovery & Audit", desc: "We review your current accounting software and recent tax returns to understand exactly where things stand.", icon: <Users className="h-5 w-5" /> },
              { step: "02", title: "Custom Roadmap", desc: "You receive a precise, fixed-price proposal detailing exactly how we will get your books current and keep them there.", icon: <FileCheck className="h-5 w-5" /> },
              { step: "03", title: "Secure Onboarding", desc: "We securely connect to your banks, payroll, and software. No more hunting down statements manually.", icon: <Shield className="h-5 w-5" /> },
              { step: "04", title: "Monthly Rhythm", desc: "Books are closed monthly. You receive clear financial statements. When tax season hits, you simply hand the file to your CPA.", icon: <Clock className="h-5 w-5" /> },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className={`relative flex items-center mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  {/* Icon Node */}
                  <div className="absolute left-0 md:left-1/2 md:-ml-7 h-14 w-14 rounded-full border-4 border-background bg-accent text-cream flex items-center justify-center z-10 shadow-glow">
                    {item.icon}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="rounded-2xl border border-border bg-card p-6 card-tilt hover:border-accent/30 transition-colors">
                      <div className="text-accent text-sm font-semibold tracking-widest mb-2">STEP {item.step}</div>
                      <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-deep text-cream py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        <div className="absolute inset-0 bg-hero-glow opacity-30" />
        
        <div className="mx-auto max-w-[1200px] px-6 relative z-10">
          <SectionHead 
            center 
            eyebrow="Client Stories" 
            title="Books off their minds." 
            lead="Real businesses, real results. Here's what founders say."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { q: "I finally understand my numbers, and I got hours of my week back. Tax season was the easiest it's ever been.", w: "Sarah M.", r: "Founder, Wellness Studio" },
              { q: "They cleaned up two years of neglected books and now everything just runs. Couldn't recommend them more highly.", w: "Michael R.", r: "Owner, Contracting Firm" },
              { q: "The monthly reports are clear, delivered on time, and the team is responsive. It's like having an in-house controller.", w: "Jennifer L.", r: "CEO, Tech Startup" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glass-panel rounded-3xl p-8 h-full flex flex-col relative group card-tilt">
                  <div className="absolute -top-4 -right-4 text-7xl text-accent opacity-20 font-display italic group-hover:scale-110 transition-transform">"</div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map((s) => (
                      <StarIcon key={s} className="h-5 w-5 text-accent" />
                    ))}
                  </div>
                  <p className="font-display text-xl leading-relaxed mb-8 flex-1">"{t.q}"</p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center font-display text-xl">
                      {t.w[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{t.w}</div>
                      <div className="text-sm text-cream/60">{t.r}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
