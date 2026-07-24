import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Section, PageHero, CTASection } from "@/components/page-primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — JVA Chase Bookkeeping" },
      { name: "description", content: "Answers about bookkeeping, software, security, cleanup, and getting started with JVA Chase." },
      { property: "og:title", content: "FAQ — JVA Chase" },
      { property: "og:description", content: "Good to know: common questions about our bookkeeping service." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Do I need a bookkeeper if I already have a CPA?", a: "Yes — and they work better together. A bookkeeper keeps records accurate and current all year; your CPA uses those clean books to file taxes and advise on strategy. Good bookkeeping makes your accountant faster and your tax bill lower." },
  { q: "What software do you work with?", a: "We work primarily in QuickBooks Online and Xero, and can adapt to most major platforms. If you're not set up yet, we'll handle it for you." },
  { q: "My books are a mess / I'm months behind. Can you help?", a: "Absolutely. Catch-up and cleanup work is one of our specialties. We'll get everything reconciled and organized, then keep you current." },
  { q: "Is my financial information secure?", a: "Yes. We use bank-level encryption, secure document sharing, MFA where supported, and follow strict confidentiality practices to protect your data." },
  { q: "How do we get started?", a: "Book a free consultation. We'll review your current situation, recommend the right plan, and get you set up — usually within a few business days." },
  { q: "How often do I receive reports?", a: "Every month. You'll receive a full close package: P&L, balance sheet, and cash flow, with a short summary of what changed." },
  { q: "Can you file my sales tax?", a: "Yes. Sales tax preparation and filing is one of our add-on services — starting at $100 per state." },
  { q: "Do you work with businesses outside the U.S.?", a: "Our practice focuses on U.S. businesses, but our team can support U.S. subsidiaries of international parents." },
];

function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <>
      <PageHero eyebrow="Questions" title="Good to" emphasis="know." lead="Everything you might want to ask before hiring a bookkeeper — clearly answered." />
      <Section>
        <div className="max-w-3xl mx-auto">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 30}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left font-display text-xl hover:text-brand transition"
                  >
                    <span>{f.q}</span>
                    <span className={cn("grid h-8 w-8 place-items-center rounded-full bg-secondary text-accent transition", open && "rotate-45")}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={cn("overflow-hidden transition-[max-height] duration-500", open ? "max-h-96" : "max-h-0")}>
                    <p className="pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
