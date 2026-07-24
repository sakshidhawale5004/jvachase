import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/services/reconciliation")({
  head: () => ({
    meta: [
      { title: "Bank & Card Reconciliation — JVA Chase" },
      { name: "description", content: "Every transaction reconciled against statements. Catch errors, duplicates, and missing entries early." },
      { property: "og:title", content: "Bank & Card Reconciliation — JVA Chase" },
      { property: "og:description", content: "Reconciled accounts you can trust." },
    ],
  }),
  component: () => (
    <ServicePage
      num="02"
      eyebrow="Service · 02"
      title="Bank & Card"
      emphasis="Reconciliation."
      lead="Every transaction matched against your statements — errors, duplicates, and missing entries caught early."
      overview="Reconciliation is the foundation of trustworthy books. We match every bank, credit-card, and merchant account line-by-line against source statements, investigate discrepancies, and correct issues before they become tax-season surprises."
      includes={[
        "Line-by-line bank reconciliation",
        "Credit card & merchant account matching",
        "Discrepancy investigation & resolution",
        "Duplicate & missing-entry detection",
        "Beginning/ending balance validation",
        "Documented audit trail",
      ]}
      deliverables={[
        "Monthly reconciliation reports for every account",
        "List of resolved discrepancies and open items",
        "Clean, tie-out-ready balance sheet",
      ]}
      ideal="Businesses with multiple accounts, high transaction volumes, or historical inaccuracies."
    />
  ),
});
