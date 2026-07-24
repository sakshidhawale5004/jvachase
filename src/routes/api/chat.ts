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
        const key = process.env.LOVABLE_API_KEY;
        if (!key) {
          return Response.json({ reply: "Chat is not configured. Email hello@jvachase.com." }, { status: 200 });
        }
        const body = (await request.json()) as { messages?: { role: string; content: string }[] };
        const msgs = Array.isArray(body.messages) ? body.messages : [];
        try {
          const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${key}`,
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash",
              messages: [{ role: "system", content: SYSTEM }, ...msgs].slice(-20),
            }),
          });
          if (!upstream.ok) {
            return Response.json({
              reply:
                "Our assistant is briefly unavailable. Please email hello@jvachase.com or book a consultation and we'll respond within one business day.",
            });
          }
          const data = (await upstream.json()) as {
            choices?: { message?: { content?: string } }[];
          };
          const reply = data.choices?.[0]?.message?.content?.trim() ??
            "Sorry, I didn't catch that. Could you rephrase?";
          return Response.json({ reply });
        } catch {
          return Response.json({
            reply: "Connection issue reaching the assistant. Please try again shortly.",
          });
        }
      },
    },
  },
});
