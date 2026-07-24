import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/70 pt-14 pb-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-4 pb-10 border-b border-cream/10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-display text-[1.35rem] font-semibold text-cream">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-accent-soft">J</span>
              JVA Chase<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-sm max-w-xs">Clean books. Clear decisions. Bookkeeping that stays tax-ready year-round.</p>
          </div>
          <div>
            <h4 className="text-cream text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent-soft">About</Link></li>
              <li><Link to="/pricing" className="hover:text-accent-soft">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-accent-soft">FAQ</Link></li>
              <li><Link to="/onboarding" className="hover:text-accent-soft">Onboarding</Link></li>
              <li><Link to="/contact" className="hover:text-accent-soft">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/monthly-bookkeeping" className="hover:text-accent-soft">Monthly Bookkeeping</Link></li>
              <li><Link to="/services/reconciliation" className="hover:text-accent-soft">Reconciliation</Link></li>
              <li><Link to="/services/ap-ar" className="hover:text-accent-soft">AP &amp; AR</Link></li>
              <li><Link to="/services/financial-statements" className="hover:text-accent-soft">Financial Statements</Link></li>
              <li><Link to="/services/catch-up-cleanup" className="hover:text-accent-soft">Catch-Up &amp; Cleanup</Link></li>
              <li><Link to="/services/sales-tax-year-end" className="hover:text-accent-soft">Sales Tax &amp; Year-End</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream text-sm font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@jvachase.com</li>
              <li>(555) 555-5555</li>
              <li>Serving clients nationwide</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs">
          <span>© {new Date().getFullYear()} JVA Chase Bookkeeping. All rights reserved.</span>
          <span className="font-display italic text-accent-soft">Clean books. Clear decisions.</span>
        </div>
      </div>
    </footer>
  );
}
