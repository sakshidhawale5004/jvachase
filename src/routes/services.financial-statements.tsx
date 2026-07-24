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
      lead="Monthly P&L, balance sheet, and cash flow reports — delivered clearly, with deep insight into what the numbers actually mean for your future."
      overview="Accurate statements are just the output; actionable understanding is the point. Every month, you receive a meticulously polished reporting package alongside a concise, easy-to-read executive summary. We don't just hand you a spreadsheet—we highlight what changed from the previous month, explain the 'why' behind the variances, and flag potential cash flow or margin issues before they become crises. We transform raw data into a narrative you can use to steer your company."
      includes={[
        "Detailed Profit & Loss (Income Statement)",
        "Comprehensive Balance Sheet",
        "Statement of Cash Flows (Direct or Indirect)",
        "Budget vs. Actual variance analysis",
        "Departmental, project, or class-based segmented reporting",
        "Custom KPI tracking and visual dashboards",
        "Monthly video or written executive summary commentary"
      ]}
      deliverables={[
        "Monthly highly-formatted PDF reporting package",
        "Interactive digital dashboard access for real-time tracking",
        "Trend charts comparing performance across multiple periods",
        "Quarterly strategic review meetings (optional)"
      ]}
      ideal="Business owners, CEOs, and leadership teams who want to transition from making decisions based on 'gut feel' to executing strategies driven by real, defensible financial data."
      image="/images/financial_statements.jpg"
    />
  ),
});
