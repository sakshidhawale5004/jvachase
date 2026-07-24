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
      overview="Whether you're 3 months behind or 3 years behind, we build a cleanup plan that reconciles historical periods, corrects miscategorizations, ties out balances, and produces defensible statements you can hand to a CPA or lender."
      includes={[
        "Historical transaction categorization",
        "Multi-period bank & card reconciliation",
        "Chart of accounts restructuring",
        "Duplicate & error correction",
        "Opening balance validation",
        "Turnover to ongoing monthly service",
      ]}
      deliverables={[
        "Restored historical financial statements",
        "Reconciled accounts through cleanup period",
        "CPA-ready tax package for prior years",
      ]}
      ideal="Owners facing a tax deadline with messy or missing books, or coming off a bookkeeper who fell behind."
    />
  ),
});
