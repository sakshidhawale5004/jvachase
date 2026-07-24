import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant" | "system"; content: string };

const seed: Msg[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm the JVA Chase assistant. Ask me about our bookkeeping services, pricing, onboarding, or how to get started.",
  },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user", content: text } as Msg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply: string =
        data?.reply ??
        "Sorry, I couldn't reach the assistant just now. You can email hello@jvachase.com and we'll respond within one business day.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Connection issue. Try again in a moment." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-brand-deep text-accent-soft shadow-elegant transition hover:-translate-y-1 hover:shadow-glow",
          open && "rotate-90",
        )}
        aria-label="Open chat"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[60] w-[calc(100vw-3rem)] max-w-[380px] rounded-2xl border border-border bg-card shadow-elegant overflow-hidden animate-pop-in">
          <div className="bg-brand-deep text-cream px-4 py-3.5 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-cream/10 text-accent-soft">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <div className="font-display text-base leading-tight">JVA Chase Assistant</div>
              <div className="text-[11px] text-cream/70">Answers about our books &amp; services</div>
            </div>
          </div>
          <div ref={listRef} className="max-h-[380px] min-h-[280px] overflow-y-auto px-3 py-4 space-y-2.5 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-brand-deep text-cream rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm",
                  )}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-muted-foreground rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex gap-2 border-t border-border bg-card p-2.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services…"
              className="flex-1 rounded-full bg-background border border-border px-4 py-2.5 text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground transition hover:brightness-105 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
