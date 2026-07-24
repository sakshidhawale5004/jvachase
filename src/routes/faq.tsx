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
  { 
    category: "Getting Started",
    q: "Do I need a bookkeeper if I already have a CPA?", 
    a: "Yes — and they work better together. A bookkeeper keeps records accurate and current all year; your CPA uses those clean books to file taxes and advise on strategy. Good bookkeeping makes your accountant faster, more effective, and your tax bill potentially lower." 
  },
  { 
    category: "Getting Started",
    q: "How do we get started?", 
    a: "Book a free 30-minute consultation. We'll review your current situation, discuss your pain points, recommend the right plan, and provide a detailed proposal. Most clients are fully onboarded and operational within 1-2 weeks." 
  },
  { 
    category: "Technology",
    q: "What software do you work with?", 
    a: "We work primarily in QuickBooks Online and Xero, but can adapt to most major platforms including QuickBooks Desktop, Sage, and FreshBooks. If you're not set up yet, we'll help you choose the right solution and handle the implementation." 
  },
  { 
    category: "Services",
    q: "My books are a mess / I'm months behind. Can you help?", 
    a: "Absolutely. Catch-up and cleanup work is one of our specialties. We've restored books that were 2-3 years behind. We'll build a detailed cleanup plan, reconcile everything, fix errors, and then transition you to ongoing monthly maintenance." 
  },
  { 
    category: "Security",
    q: "Is my financial information secure?", 
    a: "Yes. We use bank-level encryption, secure document sharing platforms, multi-factor authentication where supported, and follow strict confidentiality practices. All team members sign NDAs and we're SOC 2 Type II compliant." 
  },
  { 
    category: "Services",
    q: "How often do I receive reports?", 
    a: "Every month, typically within 10 business days of month-end. You'll receive a full close package including P&L, balance sheet, cash flow statement, and a short executive summary explaining what changed and why." 
  },
  { 
    category: "Services",
    q: "Can you file my sales tax?", 
    a: "Yes. Sales tax preparation and filing is one of our add-on services, starting at $100 per state. We handle nexus research, exemption certificates, and multi-state compliance." 
  },
  { 
    category: "Services",
    q: "Do you work with businesses outside the U.S.?", 
    a: "Our practice focuses on U.S.-based businesses with U.S. entities. However, we can support U.S. subsidiaries of international parents or businesses with foreign transactions, as long as the primary entity is U.S.-based." 
  },
  { 
    category: "Pricing",
    q: "What if my needs change or my business grows?", 
    a: "Our services are designed to scale with you. We can adjust your service level up or down with 30 days notice. Many clients start with basic bookkeeping and add services like AP/AR, controller support, or CFO advisory as they grow." 
  },
  { 
    category: "Technology",
    q: "Do I need to give you access to my bank accounts?", 
    a: "We need read-only access to your accounting software and bank feeds for reconciliation. You maintain full control of your accounts — we never have the ability to move money or make payments without your explicit approval process." 
  },
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
            const showCategory = i === 0 || f.category !== faqs[i - 1]?.category;
            return (
              <div key={f.q}>
                {showCategory && (
                  <div className="mt-8 mb-4 first:mt-0">
                    <Reveal delay={i * 20}>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                        {f.category}
                      </div>
                    </Reveal>
                  </div>
                )}
                <Reveal delay={i * 30}>
                  <div className="border-b border-border">
                    <button
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-6 text-left font-display text-xl hover:text-brand transition group"
                    >
                      <span className="flex-1">{f.q}</span>
                      <span className={cn(
                        "grid h-8 w-8 place-items-center rounded-full bg-secondary text-accent transition shrink-0",
                        "group-hover:bg-accent/10 group-hover:scale-110",
                        open && "rotate-45 bg-accent/10"
                      )}>
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={cn("overflow-hidden transition-[max-height] duration-500", open ? "max-h-96" : "max-h-0")}>
                      <p className="pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border relative">
          <img src="/images/taxes_retirement.jpg" alt="Tax and Retirement Planning" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep to-transparent flex items-end p-8">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl text-cream mb-2">Still have questions?</h3>
              <p className="text-cream/80 text-lg">We understand that every business is unique. Reach out to our team to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
