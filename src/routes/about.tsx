import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Section, PageHero, CTASection } from "@/components/page-primitives";
import { Target, Users, TrendingUp, Award, Shield, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JVA Chase Bookkeeping" },
      { name: "description", content: "Meet the team behind clean books, accurate reports, and stress-free tax seasons." },
      { property: "og:title", content: "About JVA Chase Bookkeeping" },
      { property: "og:description", content: "Your numbers, finally working for you." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Accuracy first", d: "Every transaction reconciled, every category right. Books are only useful if they're correct.", icon: <Target className="h-5 w-5" /> },
  { t: "Clarity over complexity", d: "We translate the numbers into language you can use to make decisions.", icon: <Users className="h-5 w-5" /> },
  { t: "Reliable to the day", d: "Deadlines met, statements delivered, questions answered promptly.", icon: <CheckCircle2 className="h-5 w-5" /> },
  { t: "Your success is the scorecard", d: "Better books, better decisions. That's the whole job.", icon: <Award className="h-5 w-5" /> },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Your numbers, finally"
        emphasis="working for you."
        lead="We believe business owners deserve to understand their own numbers without drowning in them. We keep records accurate, reports honest, and businesses always ready — for tax season, a loan application, or growth."
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 items-start">
          <Reveal>
            <p className="text-eyebrow mb-4">Who we are</p>
            <h2 className="font-display text-4xl mb-5">A U.S.-managed team of experienced finance professionals.</h2>
            <p className="text-muted-foreground text-lg mb-4">
              JVA Chase blends executive-level oversight with a cost-efficient delivery model. Whether you're just getting organized or scaling fast, we meet you where you are.
            </p>
            <p className="text-muted-foreground text-lg">
              Our clients range from solo founders to multi-entity operators — the common thread is a desire for accurate, understandable books, on time.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="card-tilt rounded-xl border border-border bg-card p-6 hover:border-accent/40 transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 grid place-items-center text-accent group-hover:scale-110 transition-transform">
                      {v.icon}
                    </div>
                    <h4 className="font-display text-lg text-brand">{v.t}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Our Story with Image */}
      <Section tone="sand">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal delay={100}>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img src="/images/bookkeeper_thoughts.jpg" alt="A Bookkeeper's Thoughts" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-xl overflow-hidden border-4 border-sand shadow-lg hidden md:block">
                <img src="/images/accounting_services.jpg" alt="Accounting Services" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="text-eyebrow mb-4">Behind the Numbers</p>
            <h2 className="font-display text-4xl mb-6">More than just data entry.</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We take pride in turning chaotic receipts and scattered spreadsheets into coherent, reliable financial stories. By combining deep industry expertise with streamlined processes, we help founders reclaim their time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team consists of dedicated professionals who believe that accurate bookkeeping is the foundation of any successful business strategy.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision - New Section */}
      <Section tone="sand">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-eyebrow mb-4">Our Mission</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Making financial clarity accessible to every business.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe every business owner deserves to understand their financial position without drowning in complexity. 
                Our mission is to provide enterprise-level bookkeeping and financial operations at a price point that works for 
                growing businesses — combining U.S.-based expertise with efficient delivery models.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="h-6 w-6" />, title: "Security First", desc: "Your financial data is protected with enterprise-grade security and strict confidentiality protocols." },
              { icon: <TrendingUp className="h-6 w-6" />, title: "Growth Focused", desc: "We scale with you, from startup through expansion, adapting our services to your evolving needs." },
              { icon: <Users className="h-6 w-6" />, title: "Partnership Mindset", desc: "We're not just a service provider — we're your financial operations partner committed to your success." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="text-center p-6 rounded-xl border border-border bg-card card-tilt group hover:border-accent/40 transition-all">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "15+", l: "Years of experience", desc: "Combined team expertise in bookkeeping and financial operations" },
            { n: "500+", l: "Businesses supported", desc: "From startups to established companies across diverse industries" },
            { n: "6", l: "Core service lines", desc: "Comprehensive coverage from bookkeeping to fractional CFO services" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="rounded-2xl border border-border bg-card p-8 text-center card-tilt group hover:border-accent/40 transition-all">
                <div className="font-display text-6xl gradient-text mb-3 group-hover:scale-110 transition-transform inline-block">{s.n}</div>
                <div className="font-display text-lg mb-2">{s.l}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{s.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
