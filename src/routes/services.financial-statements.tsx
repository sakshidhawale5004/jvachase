import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/financial-statements")({
  head: () => ({
    meta: [
      { title: "Financial Statements — JVA Chase" },
      { name: "description", content: "Monthly P&L, balance sheet, and cash flow reports — delivered clearly, with insight into what they mean." },
      { property: "og:title", content: "Financial Statements — JVA Chase" },
      { property: "og:description", content: "Numbers that tell the truth — and the story." },
    ],
  }),
  component: () => (
    <ServicePage
      num="04"
      eyebrow="Service · 04"
      title="Financial"
      emphasis="Statements."
      lead="Monthly P&L, balance sheet, and cash flow — delivered clearly, with insight into what the numbers mean."
      overview="Statements are the output; understanding is the point. Each month you receive a polished reporting package alongside a short executive summary explaining what changed, why, and what to watch."
      includes={[
        "Profit & loss (income statement)",
        "Balance sheet",
        "Cash flow statement",
        "Budget vs. actual comparisons",
        "Departmental / class-based reporting",
        "Executive summary commentary",
      ]}
      deliverables={[
        "Monthly PDF reporting package",
        "Interactive dashboard access (optional)",
        "Trend charts across periods",
      ]}
      ideal="Owners and leadership teams who want to make decisions from real numbers, not gut feel."
    />
  ),
});
