import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-cream/70 pt-24 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-20 pointer-events-none" />
      <div className="mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 pb-16 border-b border-cream/10">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 font-display text-2xl font-semibold text-cream mb-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-cream shadow-glow">J</span>
              JVA Chase<span className="text-accent">.</span>
            </Link>
            <p className="text-cream/60 max-w-sm text-lg leading-relaxed mb-8">
              Clean books. Clear decisions. Bookkeeping that stays tax-ready year-round without the overhead of an in-house team.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/onboarding" className="hover:text-accent transition-colors">Onboarding</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/monthly-bookkeeping" className="hover:text-accent transition-colors">Monthly Bookkeeping</Link></li>
              <li><Link to="/services/reconciliation" className="hover:text-accent transition-colors">Reconciliation</Link></li>
              <li><Link to="/services/ap-ar" className="hover:text-accent transition-colors">AP &amp; AR</Link></li>
              <li><Link to="/services/financial-statements" className="hover:text-accent transition-colors">Financial Statements</Link></li>
              <li><Link to="/services/catch-up-cleanup" className="hover:text-accent transition-colors">Catch-Up &amp; Cleanup</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:hello@jvachase.com" className="hover:text-accent transition-colors">hello@jvachase.com</a></li>
              <li><a href="tel:5555555555" className="hover:text-accent transition-colors">(555) 555-5555</a></li>
              <li className="pt-2 text-white/50">Serving clients nationwide</li>
            </ul>
          </div>
        </div>
        
        {/* Giant Typography Brand Name */}
        <div className="py-12 overflow-hidden flex justify-center border-b border-cream/5">
          <h2 className="font-display text-[12vw] leading-none font-bold text-white/[0.03] select-none whitespace-nowrap">
            JVA CHASE BOOKKEEPING
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/40">
          <span>© {new Date().getFullYear()} JVA Chase Bookkeeping. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
