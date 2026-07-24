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
      lead="Sales tax prepared and filed accurately, plus a pristine year-end package handed straight to your CPA."
      overview="We take on the two most stressful compliance moments of the year: confusing multi-state sales tax deadlines and the intense annual close process. Navigating nexus thresholds and varied tax rates across states can be a nightmare for growing e-commerce or SaaS companies. We calculate and file your sales tax accurately and on time. At year-end, we handle the heavy lifting of adjusting entries, depreciation schedules, and 1099 filings. Your CPA receives a fully defensible, reconciled trial balance, and you get zero last-minute tax surprises."
      includes={[
        "Multi-state sales tax calculation and scheduled filing",
        "Continuous economic and physical nexus review",
        "W-9 tracking and automated 1099 preparation & filing",
        "Year-end close procedures and complex adjusting entries",
        "Fixed asset tracking and depreciation schedule management",
        "Direct collaboration and communication with your CPA",
        "CPA-ready trial balance & comprehensive workpapers"
      ]}
      deliverables={[
        "Successfully filed sales tax returns per jurisdiction",
        "Completed 1099 filings for all eligible vendors/contractors",
        "Comprehensive year-end financial package for tax prep",
        "Detailed audit trail and supporting documentation"
      ]}
      ideal="E-commerce companies, SaaS businesses with multi-state exposure, operations heavily reliant on independent contractors, or anyone wanting a stress-free tax season."
      image="/images/tax_software.jpg"
    />
  ),
});
