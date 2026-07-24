import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/monthly-bookkeeping")({
  head: () => ({
    meta: [
      { title: "Monthly Bookkeeping — JVA Chase" },
      { name: "description", content: "Continuous monthly bookkeeping: categorization, reconciliation, and reporting — always tax-ready." },
      { property: "og:title", content: "Monthly Bookkeeping — JVA Chase" },
      { property: "og:description", content: "Never start from scratch. Books that stay current." },
    ],
  }),
  component: () => (
    <ServicePage
      num="01"
      eyebrow="Service · 01"
      title="Monthly"
      emphasis="Bookkeeping."
      lead="Continuous, accurate books — categorized, reconciled, and reported every month."
      overview="We keep your books current so decisions and tax filings are never held up by missing data. Every month we categorize transactions, reconcile every account, review anomalies, and deliver a full financial reporting package."
      includes={[
        "Transaction categorization",
        "Chart of accounts maintenance",
        "Bank & credit card reconciliation",
        "Accrual or cash-basis bookkeeping",
        "QuickBooks Online or Xero maintenance",
        "Month-end close checklist",
      ]}
      deliverables={[
        "Monthly close report (usually within 10 business days)",
        "P&L, balance sheet, and cash flow statement",
        "Executive summary of notable movements",
        "Documented month-end procedures",
      ]}
      ideal="Growing businesses that need reliable, accurate financial records without the overhead of an in-house team."
      image="/images/bookkeeping.jpg"
    />
  ),
});
