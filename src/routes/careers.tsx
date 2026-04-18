import { createFileRoute } from "@tanstack/react-router";
import { Code, Palette, Hammer, Handshake } from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build the intelligence layer of mining | Minematics" },
      { name: "description", content: "Mining runs the world — and far more of it runs on paper than outsiders realise. Help us change that." },
      { property: "og:title", content: "Careers at Minematics" },
      { property: "og:description", content: "Hard, useful problems. Real-world impact. Purpose-built culture." },
    ],
  }),
  component: CareersPage,
});

const why = [
  { t: "Real-world impact.", d: "Our software runs in pits, on haul roads, at weighbridges. The feedback loop is fast and tangible." },
  { t: "Hard, useful problems.", d: "Offline-first sync, computer vision on dusty cameras, digital-twin modelling on customer databases — the problems are substantive." },
  { t: "Purpose-built culture.", d: "We don't build generic — we go deep on mining. If the domain interests you, you'll grow fast." },
  { t: "Ownership.", d: "Small teams, wide scope, visible impact on customers." },
];

const teams = [
  { icon: Code, t: "Engineering", d: "Full-stack, mobile (our field app), data science, ML (computer vision for Mineoptic Visual), platform." },
  { icon: Palette, t: "Product and design", d: "Design the interfaces mining crews actually use." },
  { icon: Hammer, t: "Field operations & customer success", d: "Work on-site with mines to deploy, train, and expand." },
  { icon: Handshake, t: "Business development & partnerships", d: "Build the relationships that get Mineoptic into new mines and new geographies." },
];

function CareersPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
            Build the <span className="text-gradient">intelligence layer</span> of the mining industry.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            Mining runs the world — the steel in every building, the copper in every wire, the coal still
            running a sizeable share of the grid. The work is essential. It also runs, far more than outsiders
            realise, on paper cards and rule-of-thumb. We think that's a problem worth solving, and we'd like
            company on the way.
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle eyebrow="Why Minematics" title="What you'll find here" />
        <div className="grid gap-5 md:grid-cols-2">
          {why.map((w) => (
            <div key={w.t} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">{w.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-subtle-gradient">
        <SectionTitle eyebrow="Teams we hire for" title="Where you can join" />
        <div className="grid gap-5 md:grid-cols-2">
          {teams.map((t) => (
            <div key={t.t} className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-gradient text-white">
                <t.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">{t.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-accent/30 bg-accent/5 p-10 text-center">
          <h2 className="text-3xl font-bold">How to apply</h2>
          <p className="mt-4 text-base text-foreground/85">
            Send your CV and a short note — why mining, why Minematics — to{" "}
            <a href="mailto:careers@minematics.com" className="font-semibold text-accent hover:underline">careers@minematics.com</a>.
            If there's a specific open role you're targeting, mention it in the subject line. If there isn't,
            tell us what you'd want to work on; speculative applications are welcome.
          </p>
          <a href="mailto:careers@minematics.com" className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform">
            Email careers@minematics.com
          </a>
        </div>
      </Section>
    </>
  );
}
