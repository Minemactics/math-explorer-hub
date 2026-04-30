import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Database } from "lucide-react";
import dashboardCanvas from "@/assets/dashboard-canvas.png";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/products/canvas")({
  head: () => ({
    meta: [
      { title: "Mineoptic Canvas: Your mines digital twin, on your database | Minematics" },
      { name: "description", content: "A self-service BI canvas built for mines. Compose your operations digital twin from Excel, SQL, ERP and data servers, and keep the data on your own infrastructure." },
      { property: "og:title", content: "Mineoptic Canvas: Your mines digital twin." },
      { property: "og:description", content: "Self-service BI built specifically for mines, with data sovereignty by design." },
      { property: "og:image", content: dashboardCanvas },
      { name: "twitter:image", content: dashboardCanvas },
    ],
  }),
  component: CanvasPage,
});

const canvasFeatures = [
  { t: "Mining-first vocabulary.", d: "Faces, benches, haul roads, crushers, tips, not just rows and columns." },
  { t: "Digital twin composition.", d: "Drop in assets, routes, and zones to build an operations view that mirrors the mine." },
  { t: "Multi-source data.", d: "Excel, CSV, SQL, data servers, ERP, connect it and reconcile it in one place." },
  { t: "Data sovereignty by design.", d: "Point Canvas at your own database. Nothing sensitive has to travel to a vendor cloud." },
  { t: "Self-service for operations.", d: "Planners, supervisors, and managers can build their own views, no long IT backlog." },
  { t: "Non-linear navigation.", d: "Jump across assets, locations, functions, and the overall mine directly, without going home or searching for the relevant dashboard." },
  { t: "Object-linked dashboards.", d: "Details about assets, locations, functions and the mine intuitively linked, so managers draw inferences from a single page." },
];

const canvasProblems = [
  "Data scattered across Excel workbooks, dispatch software, fuel logs, and the weighbridge, with no common view.",
  "A generic BI tool that does not speak mining, so every dashboard is built from scratch.",
  "Production data leaving the site for a vendor cloud, which compliance and security teams will not sign off on.",
  "End-of-shift decisions because there is no live aggregation layer that reconciles across sources.",
  "IT backlogs that mean every new report waits weeks to be built.",
  "Searching for the right dashboard for the right metric, often losing the perspective in the process.",
];

const canvasBuild = [
  { t: "Production dashboards.", d: "Tonnes per shift, per face, per crew, reconciled across dispatch, weighbridge, and visual counts." },
  { t: "Fleet utilisation views.", d: "Truck states, cycle times, queue times, rolled up to fleet, route, or excavator level." },
  { t: "Fuel and cost dashboards.", d: "Fuel per tonne, per truck, per route, reconciled against the Mineoptic Fuel ledger." },
  { t: "Bottleneck maps.", d: "Queue times overlaid on the mine layout, so the problem is obvious at a glance." },
  { t: "Planning vs actual.", d: "Plan adherence by shift, by face, by route, in a single view." },
  { t: "Mine View.", d: "Where everything happens, not in report pages, with search options. Managers can jump to a point of interest without checking various reports." },
];

const canvasFor = [
  "Operations and planning teams that want to build their own views without waiting on IT.",
  "Mines that need a real digital twin but are not going down the enterprise FMS path.",
  "Companies that want to integrate other IT systems for analysis such as financial impact, mine planning, and operations simulation.",
  "Groups with strict data-residency requirements where production data must stay on-site.",
  "Teams already using Mineoptic Lite or Plus who want one canvas to see everything together.",
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
      <span className="text-sm leading-relaxed text-foreground/85">{children}</span>
    </li>
  );
}

function CanvasPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Mineoptic Canvas</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Your mines digital twin, <span className="text-gradient">on your database.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            A self-service BI tool built specifically for mines. Compose the digital twin of the
            operation, pits, routes, faces, fleets, plants, and wire it to whatever data you
            already have. Stored on your mines own database, so the data never has to leave your control.
          </p>
          <div className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-gradient text-white"><Database className="h-6 w-6" /></div>
        </div>
      </section>

      <Section>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          <img
            src={dashboardCanvas}
            alt="Mineoptic Canvas multi-dashboard digital twin view"
            loading="lazy"
            width={1280}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </Section>

      <Section className="bg-subtle-gradient">
        <h2 className="text-2xl font-bold md:text-3xl">What makes Canvas different from a generic BI tool</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {canvasFeatures.map((x, i) => (
            <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-5 shadow-card">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm"><strong className="text-primary">{x.t}</strong> <span className="text-foreground/80">{x.d}</span></span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold md:text-3xl">The problems Mineoptic Canvas is built to solve</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">{canvasProblems.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>

        <h2 className="mt-12 text-2xl font-bold md:text-3xl">What you can build on Canvas</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {canvasBuild.map((x, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5 shadow-card">
              <h3 className="font-semibold text-primary">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-7">
          <h3 className="text-xl font-semibold text-primary">Data sovereignty, made explicit</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
            Sensitive production and commercial data should not be a vendors problem. Mineoptic Canvas
            is built so the data layer sits on your mines infrastructure. You control the database; we
            provide the engine and the interface. When an audit or a compliance review asks where the
            data lives, the answer is simple: it never left.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Who Mineoptic Canvas is for</h2>
          <ul className="mt-4 space-y-2">{canvasFor.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
        </div>
      </Section>

      <Section className="bg-teal-gradient text-accent-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Compose your digital twin.</h2>
          <p className="mt-4 text-lg text-accent-foreground/90">See Mineoptic Canvas wired to your real data.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/dhruv-minematics/minematics" target="_blank" rel="noopener noreferrer" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5">Request a demo</a>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20">
              Back to all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
