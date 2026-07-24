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
      lead="Every single transaction matched against your statements to catch errors, fraud, or missed deductions early."
      overview="Bank and credit card reconciliation is the foundation of accurate accounting. Without it, you are flying blind. We ensure that every penny moving in and out of your accounts matches your statements perfectly. We track down missing transactions, resolve discrepancies, and identify uncleared checks or unrecorded deposits. By performing thorough reconciliations on a monthly (or even weekly) basis, we protect your business against internal errors and external fraud, ensuring your balance sheet is always completely dependable."
      includes={[
        "Line-by-line bank statement matching",
        "Credit card statement reconciliation",
        "Payment gateway (Stripe, PayPal, Square) clearing account reconciliation",
        "Identification and resolution of unrecorded transactions",
        "Uncleared check and deposit tracking",
        "Suspicious transaction flagging and investigation",
        "Historical discrepancy cleanup"
      ]}
      deliverables={[
        "Monthly reconciliation reports for all connected accounts",
        "List of resolved discrepancies and pending open items requiring your review",
        "Clean, tie-out-ready balance sheet",
        "Recommendations for process improvements to reduce errors"
      ]}
      ideal="Businesses with high transaction volumes, complex payment gateways, multiple bank accounts, or those who have previously struggled with unrecorded transactions and cash flow mysteries."
      image="/images/bank_reconciliation.jpg"
    />
  ),
});
