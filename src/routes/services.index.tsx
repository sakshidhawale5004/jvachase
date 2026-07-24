import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section, PageHero, CTASection } from "@/components/page-primitives";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — JVA Chase Bookkeeping" },
      { name: "description", content: "Monthly bookkeeping, reconciliation, AP/AR, financial statements, catch-up, and sales tax & year-end." },
      { property: "og:title", content: "Services — JVA Chase" },
      { property: "og:description", content: "Everything your books need — handled." },
    ],
  }),
  component: ServicesIndex,
});

const services = [
  { n: "01", to: "/services/monthly-bookkeeping", t: "Monthly Bookkeeping", d: "Transactions categorized, accounts reconciled, books kept continuously up to date." },
  { n: "02", to: "/services/reconciliation", t: "Bank & Card Reconciliation", d: "Every transaction matched against your statements to catch errors early." },
  { n: "03", to: "/services/ap-ar", t: "Accounts Payable & Receivable", d: "Stay on top of what you owe and what's owed to you — cash flow first." },
  { n: "04", to: "/services/financial-statements", t: "Financial Statements", d: "Monthly P&L, balance sheet, and cash flow — delivered with insight." },
  { n: "05", to: "/services/catch-up-cleanup", t: "Catch-Up & Cleanup", d: "Behind on your books? We organize months — or years — of backlog." },
  { n: "06", to: "/services/sales-tax-year-end", t: "Sales Tax & Year-End", d: "Sales tax filed, plus a clean year-end package for your CPA." },
];

function ServicesIndex() {
  return (
    <>
      <PageHero eyebrow="What We Do" title="Everything your books need —" emphasis="handled." lead="Six core service lines that cover recordkeeping, reporting, and readiness — from day one through year-end." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <Link to={s.to} className="card-tilt group block h-full rounded-2xl border border-border bg-card p-7">
                <div className="font-display italic text-accent mb-3">{s.n}</div>
                <h3 className="font-display text-xl mb-2 group-hover:text-brand transition">{s.t}</h3>
                <p className="text-muted-foreground text-sm">{s.d}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
