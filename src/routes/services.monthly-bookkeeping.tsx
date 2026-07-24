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
      lead="Continuous, accurate books — categorized, reconciled, and reported every month so you can run your business with confidence."
      overview="We keep your books current so decisions and tax filings are never held up by missing data. Every month, our U.S.-based team meticulously categorizes your transactions, reconciles every bank and credit card account, reviews for anomalies, and delivers a full financial reporting package. You’ll never have to wonder where your cash went or if your margins are shrinking. We build a standardized process around your business, ensuring that your financial data is not just a compliance requirement, but a strategic asset."
      includes={[
        "Transaction categorization (up to custom granular levels)",
        "Chart of accounts maintenance & optimization",
        "Bank & credit card reconciliation for all accounts",
        "Accrual or cash-basis bookkeeping methodology",
        "QuickBooks Online or Xero setup and ongoing maintenance",
        "Month-end close checklist tailored to your operations",
        "Dedicated account manager for direct communication",
        "Receipt and expense documentation management"
      ]}
      deliverables={[
        "Monthly close report (delivered within 10 business days of month-end)",
        "Detailed P&L, balance sheet, and cash flow statement",
        "Executive summary highlighting notable movements and trends",
        "Documented month-end procedures for full transparency",
        "Year-end tax-ready package delivered directly to your CPA"
      ]}
      ideal="Growing businesses, startups, and established companies that need highly reliable, accurate financial records without the overhead, management burden, or expense of an in-house accounting team."
      image="/images/bookkeeping.jpg"
    />
  ),
});
