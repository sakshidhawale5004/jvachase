import { createFileRoute } from "@tanstack/react-router";

const SYSTEM = `You are the JVA Chase Bookkeeping assistant. Answer concisely (2-4 sentences).
Services: Monthly Bookkeeping, Bank & Card Reconciliation, Accounts Payable & Receivable, Financial Statements, Catch-Up & Cleanup, Sales Tax & Year-End.
Pricing: Essential Bookkeeping from $450/mo, Business Operations custom, Fractional Controller/CFO custom. Revenue guide: <$1M $450-850/mo, $1M-5M $1,000-2,000/mo, $5M+ $2,500-5,000+/mo.
Software: QuickBooks Online, Xero, and most major platforms.
Onboarding: 3-6 weeks (discovery, security/access setup, knowledge transfer, parallel processing, full production).
Contact: hello@jvachase.com. Encourage users to book a free consultation via /contact.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { messages?: { role: string; content: string }[] };
          const msgs = Array.isArray(body.messages) ? body.messages : [];
          const lastMsg = msgs[msgs.length - 1]?.content?.toLowerCase() || "";

          let reply = "I'm the JVA Chase assistant! Ask me about our bookkeeping services, pricing, or how to get started.";

          if (lastMsg.includes("price") || lastMsg.includes("cost") || lastMsg.includes("pricing") || lastMsg.includes("how much") || lastMsg.includes("fee")) {
            reply = "Our Essential Bookkeeping starts at $450/month. For businesses under $1M in revenue, it's typically $450-$850/mo. We also offer custom pricing for larger operations or fractional CFO services.";
          } else if (lastMsg.includes("service") || lastMsg.includes("what do you do") || lastMsg.includes("bookkeeping") || lastMsg.includes("offer")) {
            reply = "We offer Monthly Bookkeeping, Bank Reconciliation, Accounts Payable/Receivable, Financial Statements, Catch-Up/Cleanup, and Sales Tax & Year-End services.";
          } else if (lastMsg.includes("contact") || lastMsg.includes("email") || lastMsg.includes("call") || lastMsg.includes("book") || lastMsg.includes("phone")) {
            reply = "You can reach us at hello@jvachase.com, or book a free consultation through our Contact page!";
          } else if (lastMsg.includes("onboard") || lastMsg.includes("start") || lastMsg.includes("time") || lastMsg.includes("long")) {
            reply = "Our onboarding typically takes 3-6 weeks, which includes discovery, access setup, and getting you fully into production without disrupting your business.";
          } else if (lastMsg.includes("software") || lastMsg.includes("quickbooks") || lastMsg.includes("xero") || lastMsg.includes("platform")) {
            reply = "We are experts in QuickBooks Online, Xero, and most major accounting platforms.";
          } else {
            reply = "That's a great question! For the most detailed answer, I recommend booking a free consultation via our Contact page, or emailing us at hello@jvachase.com.";
          }

          // Simulate slight network delay to feel natural
          await new Promise((resolve) => setTimeout(resolve, 600));

          return Response.json({ reply });
        } catch {
          return Response.json({
            reply: "Connection issue reaching the assistant. Please email hello@jvachase.com.",
          });
        }
      },
    },
  },
});
