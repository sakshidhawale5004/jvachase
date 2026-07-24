import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/ap-ar")({
  head: () => ({
    meta: [
      { title: "Accounts Payable & Receivable — JVA Chase" },
      { name: "description", content: "Bill pay, invoicing, collections, and vendor management — with healthy cash flow as the goal." },
      { property: "og:title", content: "Accounts Payable & Receivable — JVA Chase" },
      { property: "og:description", content: "Own your cash flow." },
    ],
  }),
  component: () => (
    <ServicePage
      num="03"
      eyebrow="Service · 03"
      title="Accounts Payable"
      emphasis="& Receivable."
      lead="Stay on top of what you owe and what's owed to you — with positive cash flow as the guiding metric."
      overview="We manage the day-to-day rhythm of money in and money out. Unpaid invoices can strangle a growing business, while unorganized payables can lead to missed discounts or damaged vendor relationships. We take over the entire process: entering bills, scheduling and routing approvals for payments, generating and sending customer invoices, persistently following up on outstanding receivables, and keeping both vendor and customer sub-ledgers perfectly reconciled. The result is optimized working capital and a clear picture of your cash position at all times."
      includes={[
        "Vendor bill entry, categorization & digital document storage",
        "Multi-tier payment approval routing and scheduling",
        "Customer invoice generation & distribution",
        "Automated and manual collections follow-up workflows",
        "Continuous AR/AP aging analysis",
        "W-9 collection and comprehensive 1099 tracking",
        "Vendor statement reconciliation"
      ]}
      deliverables={[
        "Weekly cash requirements and projected cash flow reports",
        "Detailed aging summaries organized by vendor and customer",
        "Fully reconciled AP and AR sub-ledgers tied to the balance sheet",
        "Year-end 1099 preparation and filing support"
      ]}
      ideal="Service businesses, creative agencies, contractors, and any operation juggling multiple recurring vendors and a high volume of customer invoices."
      image="/images/ap_ar_services.jpg"
    />
  ),
});
