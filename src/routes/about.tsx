import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Section, PageHero, CTASection } from "@/components/page-primitives";

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
  { t: "Accuracy first", d: "Every transaction reconciled, every category right. Books are only useful if they're correct." },
  { t: "Clarity over complexity", d: "We translate the numbers into language you can use to make decisions." },
  { t: "Reliable to the day", d: "Deadlines met, statements delivered, questions answered." },
  { t: "Your success is the scorecard", d: "Better books, better decisions. That's the whole job." },
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
                <div key={v.t} className="card-tilt rounded-xl border border-border bg-card p-6">
                  <h4 className="font-display text-lg text-brand mb-1">{v.t}</h4>
                  <p className="text-sm text-muted-foreground">{v.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "15+", l: "Years of experience" },
            { n: "300+", l: "Businesses supported" },
            { n: "6", l: "Core service lines" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="rounded-2xl border border-border bg-card p-8 text-center card-tilt">
                <div className="font-display text-5xl gradient-text mb-2">{s.n}</div>
                <div className="text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
