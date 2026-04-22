import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Radio } from "lucide-react";
import dashboardPlus from "@/assets/dashboard-plus.png";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/products/plus")({
  head: () => ({
    meta: [
      { title: "Mineoptic Plus — Fleet tracking on the mines own network | Minematics" },
      { name: "description", content: "Everything in Lite, plus near-live fleet tracking with status (empty, loaded, idle, maintenance) — designed for low-network mine zones." },
      { property: "og:title", content: "Mineoptic Plus — Status, not just position." },
      { property: "og:description", content: "Near-live fleet intelligence on the mines own network." },
      { property: "og:image", content: dashboardPlus },
      { name: "twitter:image", content: dashboardPlus },
    ],
  }),
  component: PlusPage,
});

const plusIncluded = [
  { t: "Everything in Mineoptic Lite.", d: "Mineoptic Fuel and Mineoptic Visual, fully integrated." },
  { t: "Near-live fleet tracking.", d: "Every truck, every shift — with status, not just position." },
  { t: "Status classification.", d: "Empty, loaded, in maintenance, idle — automatically inferred and displayed." },
  { t: "Low-network operation.", d: "Designed to work inside the mines own connectivity fabric, not dependent on third-party GSM towers." },
  { t: "Time-synced asset view.", d: "Stationary assets like excavators and weighbridges report on time, so the whole mine is on a single clock." },
];

const plusProblems = [
  "Standard GPS trackers report a dot on a map and call it visibility — but they do not tell you whether the dot is hauling ore, running empty back, or parked for service.",
  "Trackers depend on public GSM towers, which take weeks to install, months to maintain, and never quite reach the pit floor.",
  "Offline trackers cache data and dump it late. Stationary assets — excavators, weighbridges — lose their place in the timeline, and the whole dataset goes out of sync.",
  "Accuracy of regular GPS tracking devices is not reliable enough to infer decent conclusions, hence limiting managers from making good decisions.",
  "Managers who cannot size the tipper fleet per excavator because the data has never been granular enough to decide.",
  "Managers end up interpreting raw tracker feeds on their own, adding cognitive load instead of removing it. The map looks impressive; the insight is missing.",
  "Dealer-driven GPS solutions deliver manually collected solutions in digital form — without ever leveraging what the technology could actually do.",
];

const plusDifferent = [
  { t: "Status, not just position.", d: "A truck is not just at a coordinate — it is at a state. Empty, full, maintenance, idle with durations." },
  { t: "Adaptive connectivity.", d: "Built to operate on mine-controlled connectivity, so new zones and assets can be onboarded without waiting on a telecom or network rollout." },
  { t: "Time-synced data model.", d: "Every asset — moving or stationary — lands on the same timeline, so reconciliation is automatic." },
  { t: "Operations-ready dashboards.", d: "The manager opens the screen and gets the answer, not the raw feed." },
  { t: "Integrated with Lite.", d: "Fuel events, visual counts, and fleet status all reconcile in one system." },
];

const plusOutcomes = [
  "Near-real-time fleet utilisation by state — how much of the hour each truck spent loaded vs empty vs idle.",
  "Bottleneck mapping — where queues are forming, trucks moving slow, and for how long.",
  "Cycle-time accountability — which crew, which excavator, which route is pulling the shift average down.",
  "Connectivity coverage the mine controls — and can extend — without waiting on a telecom operator.",
];

const plusFor = [
  "Mines that have outgrown basic GPS trackers and want genuine fleet intelligence.",
  "Operations teams frustrated with data arriving late because stationary assets never sync on time.",
  "Sites with poor public network coverage where the pit, the workshop, or the dump is effectively a dead zone.",
  "Mines that need the full Lite data plus live fleet status in a single pane.",
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
      <span className="text-sm leading-relaxed text-foreground/85">{children}</span>
    </li>
  );
}

function PlusPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Mineoptic Plus</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Everything in Lite. <span className="text-gradient">Plus the mines own network.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            Near-live fleet tracking that is designed — from the radio layer up — for the realities
            of the mine. It tells you not only where each tipper is, but what state it is in:
            running empty, loaded, or parked in the maintenance yard.
          </p>
          <div className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-gradient text-white"><Radio className="h-6 w-6" /></div>
        </div>
      </section>

      <Section>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          <img
            src={dashboardPlus}
            alt="Mineoptic Plus fleet tracking dashboard"
            loading="lazy"
            width={1280}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </Section>

      <Section className="bg-subtle-gradient">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <h2 className="text-2xl font-bold">What is included</h2>
            <ul className="mt-4 space-y-3">
              {plusIncluded.map((x, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm"><strong className="text-primary">{x.t}</strong> <span className="text-foreground/80">{x.d}</span></span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">The problems Mineoptic Plus is built to solve</h2>
            <ul className="mt-4 space-y-2">{plusProblems.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold md:text-3xl">How Mineoptic Plus is different</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {plusDifferent.map((x, i) => (
            <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-5 shadow-card">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm"><strong className="text-primary">{x.t}</strong> <span className="text-foreground/80">{x.d}</span></span>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Typical outcomes our customers look for</h2>
            <ul className="mt-4 space-y-2">{plusOutcomes.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Who Mineoptic Plus is for</h2>
            <ul className="mt-4 space-y-2">{plusFor.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
          </div>
        </div>
      </Section>

      <Section className="bg-teal-gradient text-accent-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Status, not just position.</h2>
          <p className="mt-4 text-lg text-accent-foreground/90">See Mineoptic Plus running across a live mine fleet.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5">Request a demo</Link>
            <Link to="/products/canvas" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20">
              Next: Mineoptic Canvas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
