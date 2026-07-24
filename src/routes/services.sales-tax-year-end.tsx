import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/sales-tax-year-end")({
  head: () => ({
    meta: [
      { title: "Sales Tax & Year-End — JVA Chase" },
      { name: "description", content: "Sales tax prepared and filed, plus a clean year-end package delivered to your CPA or tax preparer." },
      { property: "og:title", content: "Sales Tax & Year-End — JVA Chase" },
      { property: "og:description", content: "Tax-ready books, every year." },
    ],
  }),
  component: () => (
    <ServicePage
      num="06"
      eyebrow="Service · 06"
      title="Sales Tax"
      emphasis="& Year-End."
      lead="Sales tax prepared and filed, plus a clean year-end package handed straight to your CPA or tax preparer."
      overview="We handle the two most stressful compliance moments of the year: sales tax deadlines and the annual close. Your CPA gets a defensible, reconciled package; you get zero last-minute surprises."
      includes={[
        "Multi-state sales tax filing",
        "Nexus review",
        "1099 preparation & filing",
        "Year-end close & adjusting entries",
        "Fixed asset & depreciation schedules",
        "CPA-ready trial balance & workpapers",
      ]}
      deliverables={[
        "Filed sales tax returns per state",
        "1099 filings for eligible vendors",
        "Year-end financial package for tax prep",
      ]}
      ideal="Businesses with multi-state exposure, contractor-heavy vendor bases, or upcoming filing deadlines."
    />
  ),
});
