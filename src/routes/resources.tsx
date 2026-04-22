import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Lightbulb } from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources: Case Studies, Use Cases, Blogs & E-books | Minematics" },
      { name: "description", content: "Real operations, real numbers. Case studies, use cases, blogs and e-books focused on Connectivity, Accuracy, Granularity, and Adoptability." },
      { property: "og:title", content: "Resources | Minematics" },
      { property: "og:description", content: "Case studies, use cases, blogs and e-books from the field." },
    ],
  }),
  component: ResourcesPage,
});

const cases = [
  { n: 1, title: "From paper fuel slips to a reconciled fuel ledger", sector: "Open-cast coal", module: "Mineoptic Fuel", pillar: "Adoptability, Granularity",
    body: "The mine was logging fuel on paper cards at three bowsers, reconciling manually at shift end, and losing an estimated 4–6 cards per week. After rolling out Mineoptic Fuel, the site moved to tap-and-snap capture at the bowser, with offline sync to handle the dead zone at the back-of-pit bowser, and eliminated end-of-shift transcription entirely. Fuel reconciliation variance dropped sharply and the fuel-per-tonne number became trusted at the management review." },
  { n: 2, title: "Sizing the tipper fleet with bucket-level data", sector: "Iron ore", module: "Mineoptic Visual", pillar: "Connectivity, Granularity",
    body: "The planning team had been sizing the tipper fleet per excavator using trip counts and average cycle time, numbers the team did not fully trust. Mineoptic Visual started reporting bucket counts per truck, load time per bucket, and queue time at the excavator. Within a shift, the manager could see which excavators were starving their fleet and which had excess tippers. The fleet was rebalanced within a week." },
  { n: 3, title: "Fleet status visibility in a low-network pit", sector: "Limestone", module: "Mineoptic Plus", pillar: "Connectivity, Accuracy",
    body: "A standard GPS tracker deployment had been live for two years but never used by the operations manager, the public GSM coverage dropped in the deepest bench, so the pit floor was effectively invisible, and stationary assets synced late. Mineoptic Plus was deployed on the mines own connectivity fabric. The pit floor came online, time-sync across moving and stationary assets held up, and the manager began using the fleet-status view as the primary operational screen." },
  { n: 4, title: "One canvas for production, fuel, and fleet", sector: "Bauxite", module: "Mineoptic Canvas", pillar: "Accuracy, Adoptability",
    body: "Production data lived in dispatch software, fuel data in Excel, and weighbridge data in a separate SQL database, each reconciled weekly, none of them live. Mineoptic Canvas was connected to all three sources with the data layer on the mines own server. The operations team built a single shift dashboard that reconciled the three sources automatically. The weekly reconciliation meeting was retired." },
];

const useCases = [
  { group: "Production and dispatch", items: [
    { t: "Real-time shift production.", d: "Tonnes by face, by crew, by route, reconciled across dispatch, weighbridge, and Visual counts." },
    { t: "Plan vs actual adherence.", d: "Shift plan overlaid on actuals, updated through the shift, not at the end." },
    { t: "Bucket-level cycle tracking.", d: "Know exactly how many buckets each truck took and how long each one cost." },
  ]},
  { group: "Fleet management", items: [
    { t: "Fleet state utilisation.", d: "Hour-by-hour breakdown of loaded, empty, idle, and in-maintenance state." },
    { t: "Tipper fleet sizing per excavator.", d: "Answered properly for the first time, from bucket and queue data." },
    { t: "Bottleneck detection.", d: "Queue length and queue time at excavator, weighbridge, crusher, loadout, flagged as they form." },
  ]},
  { group: "Fuel and cost control", items: [
    { t: "Bowser-level fuel ledger.", d: "Every issue, timestamped and reconciled, with no paper in the loop." },
    { t: "Fuel per tonne.", d: "Real numbers the ops review can actually act on." },
    { t: "Anomaly flags.", d: "Unusual consumption patterns surfaced automatically." },
  ]},
  { group: "Operations reporting and governance", items: [
    { t: "Shift reports in minutes, not hours.", d: "No transcription, no reconciliation, no missing cards." },
    { t: "Audit-ready data trail.", d: "Every event carries a capture timestamp and an upload timestamp." },
    { t: "Cross-section reconciliation.", d: "Pit, weighbridge, dispatch, fuel, reconciled in one canvas." },
  ]},
  { group: "Safety and compliance (supporting)", items: [
    { t: "Maintenance yard visibility.", d: "Know which assets are in the yard and for how long, without radio calls." },
    { t: "Idle detection.", d: "Unusually long idle events flagged for supervisor review." },
  ]},
];

const blogs = [
  { t: "Why a map view is not visibility", d: "Every GPS dashboard looks impressive on day one. Two months later, the manager has stopped opening it. We look at why, and what visibility actually has to deliver to stay useful." },
  { t: "The real cost of pen-and-paper fuel logging", d: "Everyone knows paper fuel cards are error-prone. We quantify what that actually costs across a year, in missed reconciliations, distorted fuel-per-tonne numbers, and end-of-shift hours spent transcribing." },
  { t: "How many tippers per excavator? The question nobody could answer", d: "Sizing the tipper fleet per excavator has historically been a rule-of-thumb exercise because the data was not there. With bucket and queue data, the answer becomes calculable. We walk through the method." },
  { t: "Why mines outgrow their GPS trackers", d: "Standard GPS is built for fleets on public roads. Mines are different, dead zones, stationary assets, asset relationships that matter more than coordinates. We break down where trackers run out of road." },
  { t: "Designing for the dead zone", d: "The deepest bench, the underground drive, the back-of-pit bowser, every mine has a dead zone where it matters most. We discuss what offline-first capture really requires to stay trustworthy." },
  { t: "Adoption is the hardest pillar", d: "Connectivity, Accuracy, Granularity are all engineering problems. Adoptability is a design problem, and it is the one that decides whether the system gets used. Here is how we approach it." },
];

const ebooks = [
  { t: "The Four Pillars of Mining Intelligence", sub: "The flagship Minematics guide.", d: "A detailed walk-through of Connectivity, Accuracy, Granularity, and Adoptability, why these four, how they interact, and how to score your current setup against each one. Includes a pillar-by-pillar assessment framework and representative operational metrics." },
  { t: "From Paper to Digital, A Practical Playbook for Mines", d: "A practical guide to retiring paper-based data capture in a mine, which workflows to start with, how to handle the offline zones, how to win the crew over, and how to measure the return within one quarter." },
  { t: "Sizing the Tipper Fleet, A Data-Driven Method", d: "The planning question that rule-of-thumb has never answered well. This e-book walks through a data-driven method using bucket counts, load times, and queue times, and shows how granular visual analytics makes it practical." },
  { t: "Choosing Between GPS, Mineoptic, and Enterprise FMS", d: "A candid buyers guide for mines deciding how far up the stack to go. What each category is actually good at, where each one stops, and how to match the choice to the operation." },
  { t: "Data Sovereignty in Mining Operations", d: "Why production and commercial data should stay inside the mines infrastructure, what data sovereignty by design actually means, and how Mineoptic Canvas is architected to deliver it." },
];

function ResourcesPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">What we are seeing in the field.</h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            Case studies, use cases, blogs, and e-books, all focused on the pillars that drive
            productivity: Connectivity, Accuracy, Granularity, Adoptability.
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle
          eyebrow="Case studies"
          title="Real operations, real numbers"
          lead="Each case study walks through the before-state, the pillar we addressed, the modules deployed, and the operational outcome. Representative case studies, actual customer write-ups are published as they are signed off."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.n} className="flex flex-col rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">Case Study {c.n}</span>
              <h3 className="mt-2 text-xl font-bold leading-snug">{c.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground"><strong>Sector:</strong> {c.sector}</span>
                <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground"><strong>Module:</strong> {c.module}</span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-accent"><strong>Pillar:</strong> {c.pillar}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-subtle-gradient">
        <SectionTitle
          eyebrow="Use Cases"
          title="How mines actually put Mineoptic to work"
          lead="Grouped by the operational question the team is trying to answer."
        />
        <div className="space-y-10">
          {useCases.map((g) => (
            <div key={g.group}>
              <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold text-primary">
                <Lightbulb className="h-5 w-5 text-accent" /> {g.group}
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {g.items.map((it) => (
                  <div key={it.t} className="rounded-lg border border-border bg-card p-5 shadow-card">
                    <h4 className="text-sm font-semibold text-primary">{it.t}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Blogs"
          title="Featured posts"
          lead="Short, operationally useful pieces on the problems we see in the field, and the thinking behind how Mineoptic solves them."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <article key={b.t} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
              <FileText className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-accent">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <SectionTitle
          eyebrow="E-books"
          title="Longer-form guides"
          lead="For operations leaders, planners, and IT teams evaluating how to modernise mine data capture."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {ebooks.map((e) => (
            <div key={e.t} className="rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all hover:bg-white/10">
              <BookOpen className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-xl font-bold">{e.t}</h3>
              {e.sub && <p className="mt-1 text-sm italic text-primary-foreground/70">{e.sub}</p>}
              <p className="mt-3 text-sm text-primary-foreground/80">{e.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
