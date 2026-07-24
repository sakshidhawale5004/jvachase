import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/catch-up-cleanup")({
  head: () => ({
    meta: [
      { title: "Catch-Up & Cleanup — JVA Chase" },
      { name: "description", content: "Behind on your books? We organize months — or years — of backlog and get you tax-ready." },
      { property: "og:title", content: "Catch-Up & Cleanup — JVA Chase" },
      { property: "og:description", content: "From backlog to tax-ready — fast." },
    ],
  }),
  component: () => (
    <ServicePage
      num="05"
      eyebrow="Service · 05"
      title="Catch-Up"
      emphasis="& Cleanup."
      lead="Behind on your books? We organize months — or years — of backlog and get you tax-ready, then keep you current."
      overview="Falling behind on accounting is incredibly common, but the resulting blind spots can cripple your business decisions and invite massive tax liabilities. Whether you're 3 months behind due to rapid growth or 3 years behind due to neglect, we build a customized, rapid-response cleanup plan. We diligently reconstruct and reconcile historical periods, correct miscategorizations, untangle commingled personal/business expenses, tie out balances, and produce defensible, accurate statements. We turn a stressful backlog into a clean slate."
      includes={[
        "Comprehensive historical transaction categorization",
        "Multi-period bank, credit card, and merchant account reconciliation",
        "Strategic chart of accounts restructuring",
        "Duplicate entry detection and error correction",
        "Opening balance validation and tie-out",
        "Commingled expense separation (business vs. personal)",
        "Seamless turnover to ongoing monthly bookkeeping"
      ]}
      deliverables={[
        "Fully restored and accurate historical financial statements",
        "Reconciled accounts through the entire cleanup period",
        "Detailed diagnostic report explaining what went wrong and how to prevent it",
        "CPA-ready tax package for all prior years involved"
      ]}
      ideal="Business owners facing an impending tax deadline with messy or missing books, founders trying to secure financing, or companies transitioning away from a bookkeeper who fell behind."
      image="/images/struggling_receipts.jpg"
    />
  ),
});
