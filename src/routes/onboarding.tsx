import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Section, PageHero, CTASection } from "@/components/page-primitives";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Onboarding — JVA Chase Bookkeeping" },
      { name: "description", content: "How our U.S.-managed team securely connects to your systems and gets you to production in weeks." },
      { property: "og:title", content: "Onboarding — JVA Chase" },
      { property: "og:description", content: "Access, security & onboarding — clearly explained." },
    ],
  }),
  component: OnboardingPage,
});

const timeline = [
  { d: "Week 1", t: "Discovery & Process Review", desc: "We map your current workflow, chart of accounts, and reporting needs." },
  { d: "Week 1-2", t: "Security & Access Setup", desc: "User accounts, MFA, VPN/RDP where required — all client-approved." },
  { d: "Week 2-3", t: "Knowledge Transfer", desc: "Documented procedures, close checklists, and month-end handoff." },
  { d: "Week 3-4", t: "Parallel Processing (Optional)", desc: "We shadow your close in parallel to verify accuracy." },
  { d: "Week 3-6", t: "Full Production Support", desc: "We own the close. You get clean, timely books." },
];

const items = [
  { q: "How will your team access our accounting system?", a: "Preferred: QuickBooks Online with role-based user accounts. For Desktop or on-prem, we support VPN, RDP, Citrix, VDI, hosted QuickBooks, or other approved secure remote access." },
  { q: "Do we need to provide VPN access?", a: "For cloud platforms (QBO), no. For Desktop or on-prem systems, VPN or virtual desktop access is typically required. Your IT team decides the most secure method." },
  { q: "What is required from our IT team?", a: "Individual user IDs with appropriate permissions and MFA, remote access credentials if needed, and validation that logins and application functionality work end-to-end." },
  { q: "Can multiple staff share one login?", a: "No. For security, compliance, and auditability, each team member gets an individual account — enabling activity tracking, audit logs, and immediate access revocation." },
  { q: "How do you protect our financial data?", a: "Signed confidentiality agreements, MFA where supported, secure password management, role-based access, controlled workstations, limited local storage, and immediate access removal on separation." },
  { q: "Will your staff download our data?", a: "Our standard is to work directly within client systems. Any exports follow client-approved procedures and retention policies." },
  { q: "Who provides software licenses?", a: "You provide QuickBooks, banking portal access, and expense-management logins. We provide the workforce, training, management, QA, and oversight." },
  { q: "What support hours are available?", a: "Standard business hours with partial overlap of U.S. business hours for meetings and month-end close. Schedules can be customized." },
  { q: "What happens if an employee leaves your company?", a: "Documented transition procedures: immediate access revocation, password changes, reassignment to trained backup personnel, and maintained knowledge-transfer documentation." },
  { q: "What should we expect during onboarding?", a: "A designated business owner/contact, timely responses, access to required systems, any existing process documentation, and monthly close expectations. We provide an onboarding checklist and implementation plan." },
];

function OnboardingPage() {
  return (
    <>
      <PageHero eyebrow="Setup & Operations" title="Access, security &" emphasis="onboarding." lead="How our U.S.-managed team connects to your systems — securely and transparently — and gets you to full production in weeks, not months." />

      <Section>
        <Reveal><h2 className="font-display text-3xl mb-10">Implementation Timeline</h2></Reveal>
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="grid gap-8">
            {timeline.map((step, i) => (
              <Reveal key={step.t} delay={i * 60}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}>
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} relative`}>
                    <div className="absolute left-[-32px] md:left-auto md:right-[-14px] top-1 h-6 w-6 rounded-full bg-accent border-4 border-background md:right-auto"
                      style={i % 2 === 0 ? { right: -14, left: "auto" } : { left: -14 }}
                    />
                    <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{step.d}</div>
                    <h3 className="font-display text-2xl mb-2">{step.t}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <Reveal><h2 className="font-display text-3xl mb-10">Operational FAQ</h2></Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.q} delay={i * 30}>
              <div className="card-tilt h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg mb-2 text-brand">{it.q}</h3>
                <p className="text-sm text-muted-foreground">{it.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
