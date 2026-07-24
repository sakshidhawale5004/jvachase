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
      lead="Stay on top of what you owe and what's owed to you — with cash flow as the guiding metric."
      overview="We manage the day-to-day rhythm of money in and money out: entering bills, scheduling payments, sending invoices, following up on receivables, and reconciling vendor and customer accounts."
      includes={[
        "Vendor bill entry & approvals",
        "Payment scheduling & runs",
        "Customer invoicing",
        "Collections follow-up",
        "AR/AP aging reports",
        "1099 tracking",
      ]}
      deliverables={[
        "Weekly cash requirements report",
        "Aging summaries by vendor/customer",
        "Reconciled AP and AR sub-ledgers",
      ]}
      ideal="Service businesses, agencies, and any operation with recurring vendors and customers."
    />
  ),
});
