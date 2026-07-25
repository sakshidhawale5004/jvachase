import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { to: "/services/monthly-bookkeeping", label: "Monthly Bookkeeping" },
  { to: "/services/reconciliation", label: "Bank & Card Reconciliation" },
  { to: "/services/ap-ar", label: "Accounts Payable & Receivable" },
  { to: "/services/financial-statements", label: "Financial Statements" },
  { to: "/services/catch-up-cleanup", label: "Catch-Up & Cleanup" },
  { to: "/services/sales-tax-year-end", label: "Sales Tax & Year-End" },
] as const;

const primary = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/onboarding", label: "Onboarding" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent backdrop-blur-md transition-all duration-300",
        scrolled
          ? "bg-background/95 border-border/60 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.35)]"
          : "bg-background/60",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 font-display text-[1.35rem] font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-deep text-accent-soft font-display text-base shadow-lg">
            J
          </span>
          JVA Chase<span className="text-accent">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Home</Link>
          <div className="relative" onMouseLeave={() => setSvcOpen(false)}>
            <button
              onMouseEnter={() => setSvcOpen(true)}
              onClick={() => setSvcOpen((s) => !s)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Services <ChevronDown className={cn("h-3.5 w-3.5 transition", svcOpen && "rotate-180")} />
            </button>
            {svcOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 animate-pop-in">
                <div className="w-[320px] rounded-xl border border-border bg-card shadow-elegant p-2">
                  <Link to="/services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary" onClick={() => setSvcOpen(false)}>
                    All Services →
                  </Link>
                  <div className="my-1 h-px bg-border" />
                  {services.map((s) => (
                    <Link key={s.to} to={s.to} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground" onClick={() => setSvcOpen(false)}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Pricing</Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>About</Link>
          <Link to="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>FAQ</Link>
          <Link to="/onboarding" className="text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Onboarding</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-brand-deep px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_10px_30px_-12px_rgba(10,57,66,0.6)] transition hover:-translate-y-0.5 hover:bg-brand"
          >
            Book Consultation
          </Link>
          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-secondary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-pop-in">
          <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col gap-1">
            {primary.map((p) => (
              <Link key={p.to} to={p.to} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium border-b border-border/50">
                {p.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-accent">Services</div>
            {services.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="py-2 text-sm text-muted-foreground border-b border-border/40">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      </header>
  );
}
