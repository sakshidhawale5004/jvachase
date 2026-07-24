import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Section, PageHero, CTASection } from "@/components/page-primitives";
import { Check, DollarSign, TrendingUp, Shield, Clock } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — JVA Chase Bookkeeping" },
      { name: "description", content: "Transparent monthly pricing for bookkeeping, controller, and CFO services. Packages, revenue-based guide, and add-ons." },
      { property: "og:title", content: "Pricing — JVA Chase" },
      { property: "og:description", content: "Reliable. Scalable. Cost-effective." },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Essential Bookkeeping",
    ideal: "Small businesses & startups",
    price: "$450",
    unit: "/ month",
    priceNote: "Starting at",
    features: ["Bank reconciliations", "Expense categorization", "Monthly P&L & balance sheet", "QuickBooks maintenance"],
    featured: false,
  },
  {
    name: "Business Operations",
    ideal: "Multi-entity or operationally complex businesses",
    price: "Custom",
    unit: "pricing",
    priceNote: "Tailored",
    features: ["Full monthly close support", "KPI dashboards", "Cash flow tracking", "Management reporting", "Process improvement support"],
    featured: true,
  },
  {
    name: "Fractional Controller / CFO",
    ideal: "Organizations requiring financial leadership",
    price: "Custom",
    unit: "pricing",
    priceNote: "Tailored",
    features: ["Financial review meetings", "Forecasting & budgeting", "Operational analytics", "Executive reporting"],
    featured: false,
  },
];

const revGuide = [
  { band: "Under $1M revenue", fee: "$450 – $850", unit: "/mo" },
  { band: "$1M – $5M revenue", fee: "$1,000 – $2,000", unit: "/mo" },
  { band: "$5M+ revenue", fee: "$2,500 – $5,000+", unit: "/mo" },
];

const addons = [
  ["Historical QuickBooks Cleanup", "Starting at $500"],
  ["Sales Tax Filing Support", "Starting at $100 / state"],
  ["1099 Preparation", "Starting at $5 / vendor"],
  ["Multi-Entity Consolidation", "Custom Quote"],
  ["Custom KPI / Dashboard Reporting", "Starting at $250 / mo"],
  ["Catch-Up Bookkeeping", "Based on volume & months"],
];

const included = [
  "Dedicated accounting support team",
  "U.S.-based client communication and oversight",
  "Secure cloud-based workflows",
  "Monthly financial reporting package",
  "Standard operating procedures & documentation",
  "QuickBooks Online support",
  "Email response SLA within 1 business day",
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Monthly Pricing Schedule"
        title="Reliable. Scalable."
        emphasis="Cost-effective."
        lead="U.S.-managed accounting powered by experienced finance professionals — cost efficiency with executive-level oversight and standardized processes."
      />

      <Section>
        <Reveal><h2 className="font-display text-3xl mb-8">Service Packages</h2></Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className={`card-tilt relative h-full rounded-2xl p-8 flex flex-col ${p.featured ? "bg-brand-deep text-cream border-transparent" : "bg-card border border-border"}`}>
                {p.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">Popular</div>
                )}
                <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                <div className={`text-sm mb-6 ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>{p.ideal}</div>
                <div className="mb-6">
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${p.featured ? "text-cream/60" : "text-muted-foreground"}`}>{p.priceNote}</div>
                  <div className={`font-display text-3xl ${p.featured ? "text-accent-soft" : "text-brand"}`}>
                    {p.price} <span className="text-base font-sans font-normal opacity-70">{p.unit}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-auto">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${p.featured ? "text-cream/85" : "text-muted-foreground"}`}>
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Value Proposition - New Section */}
      <Section>
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-eyebrow mb-4">Why Our Pricing Makes Sense</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto mb-6">Enterprise quality, without the enterprise cost.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our model combines U.S.-based management with cost-efficient delivery, giving you the best of both worlds.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <DollarSign className="h-6 w-6" />, title: "Transparent Pricing", desc: "No hidden fees, no surprise charges. What you see is what you pay." },
            { icon: <TrendingUp className="h-6 w-6" />, title: "Scalable Services", desc: "Start small and grow. Only pay for what you need, when you need it." },
            { icon: <Shield className="h-6 w-6" />, title: "Risk-Free Trial", desc: "30-day money-back guarantee if you're not completely satisfied." },
            { icon: <Clock className="h-6 w-6" />, title: "Fast Onboarding", desc: "Get started in days, not weeks. Most clients are live within 2 weeks." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="rounded-xl border border-border bg-card p-6 card-tilt group hover:border-accent/40 transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 grid place-items-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg mb-2 group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <Reveal><h2 className="font-display text-3xl mb-8">Pricing by Company Size</h2></Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {revGuide.map((r, i) => (
            <Reveal key={r.band} delay={i * 60}>
              <div className="card-tilt rounded-2xl border border-border bg-card p-7 text-center">
                <div className="font-semibold mb-2">{r.band}</div>
                <div className="font-display text-3xl text-brand">
                  {r.fee}<span className="text-sm text-muted-foreground font-sans">{r.unit}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl mb-6">Optional Add-Ons</h2>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {addons.map((a, i) => (
                <div key={a[0]} className={`flex justify-between gap-4 px-6 py-4 text-sm ${i > 0 ? "border-t border-border" : ""}`}>
                  <span>{a[0]}</span>
                  <span className="font-display font-semibold text-brand whitespace-nowrap">{a[1]}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-3xl mb-6">What's Included</h2>
            <ul className="grid gap-3">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-dashed border-accent/60 bg-sand p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-2xl mb-1">Need a tailored proposal?</h4>
              <p className="text-muted-foreground">Custom pricing based on transaction volume, entities, and reporting.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5">
              Request a Discovery Session
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
