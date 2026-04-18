import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X, Smartphone, Camera, Radio, Database, ArrowRight } from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Mineoptic Lite, Plus & Canvas | Minematics" },
      { name: "description", content: "The Mineoptic Suite: three levels of mining intelligence. Lite replaces paper, Plus adds mine-network fleet tracking, Canvas builds your digital twin." },
      { property: "og:title", content: "The Mineoptic Suite — Lite, Plus, Canvas" },
      { property: "og:description", content: "Three levels of mining intelligence — from a focused starting point to a full self-service canvas." },
    ],
  }),
  component: ProductsPage,
});

const liteProblems = [
  "Fuel logging that drifts shift to shift because pens, paper, and dusty cabins don't play well together.",
  "Truck counts that never reconcile because one card went missing between the gate and the dispatcher.",
  "No visibility into bucket counts, load time, or how long a truck actually waits at the excavator or weighbridge.",
  "Managers who can't size the tipper fleet per excavator because the data has never been granular enough to decide.",
  "Staff motivation falling off a cliff because the logging work is mundane and thankless.",
];

const fuelHow = [
  "Operator opens the Mineoptic Fuel mobile app at the bowser.",
  "Captures three images: truck number plate, truck odometer reading, bowser meter reading.",
  "The app tags each image with the exact capture timestamp from the device — not a handwritten estimate.",
  "If the bowser zone has no network, the record is queued locally and uploaded automatically the moment the device reconnects, with both original capture and sync timestamps preserved.",
  "Back-end recognition and reconciliation produce a clean fuel ledger — no manual re-entry, no manual mistakes, no lost cards.",
];

const fuelWhy = [
  "Eliminates pen-and-paper error. No illegible handwriting, no wrong dates, no soiled cards, no card lost between the bowser and the office.",
  "Solves the connectivity problem. The bowser is often in the worst connectivity zone of the mine. Offline-first capture means the crew doesn't wait for signal.",
  "Keeps the time honest. Event time and upload time are both recorded, so reconciliation is straightforward.",
  "Removes the mundane. Operators tap and move on; no one has to sit at the end of the shift transcribing slips.",
];

const visualWhat = [
  "Truck counts per route, per direction, per hour — reconciled against dispatch.",
  "Bucket counts per truck, per excavator — the number that finally lets you size the fleet correctly.",
  "Load time per bucket and total load time per truck.",
  "Queue length and queue time at the excavator, the weighbridge, the crusher, the loadout.",
  "Trip breakup — travel, queue, load, unload — not just gross trip time.",
];

const visualWhy = [
  "Granularity the old way couldn't deliver. Nobody is going to hand-count buckets for a full shift. A camera with the right model will.",
  "Bottleneck data, not just movement data. Queue time at the weighbridge is the kind of number that turns into a decision within a week.",
  "Tipper fleet sizing, finally. With bucket count and load time per excavator, you can compute the right tipper count per excavator instead of guessing.",
  "Hands-off operation. The crew doesn't log anything. The data comes from the camera stream.",
];

const liteFor = [
  "Mines replacing paper registers and pen-logged fuel cards.",
  "Operations teams who want real cycle granularity without a full FMS deployment.",
  "Managers who need reliable numbers by mid-shift, not end-of-shift.",
];

const plusIncluded = [
  { t: "Everything in Mineoptic Lite.", d: "Mineoptic Fuel and Mineoptic Visual, fully integrated." },
  { t: "Near-live fleet tracking.", d: "Every truck, every shift — with status, not just position." },
  { t: "Status classification.", d: "Empty, loaded, in maintenance, idle — automatically inferred and displayed." },
  { t: "Low-network operation.", d: "Designed to work inside the mine's own connectivity fabric, not dependent on third-party GSM towers." },
  { t: "Time-synced asset view.", d: "Stationary assets like excavators and weighbridges report on time, so the whole mine is on a single clock." },
];

const plusProblems = [
  "Standard GPS trackers report a dot on a map and call it visibility — but they don't tell you whether the dot is hauling ore, running empty back, or parked for service.",
  "Trackers depend on public GSM towers, which take weeks to install, months to maintain, and never quite reach the pit floor.",
  "Offline trackers cache data and dump it late. Stationary assets — excavators, weighbridges — lose their place in the timeline, and the whole dataset goes out of sync.",
  "Accuracy of regular GPS tracking devices is not reliable enough to infer decent conclusions, hence limiting managers from making good decisions.",
  "Managers who can't size the tipper fleet per excavator because the data has never been granular enough to decide.",
  "Managers end up interpreting raw tracker feeds on their own, adding cognitive load instead of removing it. The map looks impressive; the insight is missing.",
  "Dealer-driven GPS solutions deliver manually collected solutions in digital form — without ever leveraging what the technology could actually do.",
];

const plusDifferent = [
  { t: "Status, not just position.", d: "A truck isn't just at a coordinate — it's at a state. Empty, full, maintenance, idle with durations." },
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

const canvasFeatures = [
  { t: "Mining-first vocabulary.", d: "Faces, benches, haul roads, crushers, tips — not just rows and columns." },
  { t: "Digital twin composition.", d: "Drop in assets, routes, and zones to build an operations view that mirrors the mine." },
  { t: "Multi-source data.", d: "Excel, CSV, SQL, data servers, ERP — connect it and reconcile it in one place." },
  { t: "Data sovereignty by design.", d: "Point Canvas at your own database. Nothing sensitive has to travel to a vendor cloud." },
  { t: "Self-service for operations.", d: "Planners, supervisors, and managers can build their own views — no long IT backlog." },
  { t: "Non-linear navigation.", d: "Jump across assets, locations, functions, and the overall mine directly — without going home or searching for the relevant dashboard." },
  { t: "Object-linked dashboards.", d: "Details about assets, locations, functions and the mine intuitively linked, so managers draw inferences from a single page." },
];

const canvasProblems = [
  "Data scattered across Excel workbooks, dispatch software, fuel logs, and the weighbridge — with no common view.",
  "A generic BI tool that doesn't speak mining, so every dashboard is built from scratch.",
  "Production data leaving the site for a vendor cloud, which compliance and security teams won't sign off on.",
  "End-of-shift decisions because there's no live aggregation layer that reconciles across sources.",
  "IT backlogs that mean every new report waits weeks to be built.",
  "Searching for the right dashboard for the right metric, often losing the perspective in the process.",
];

const canvasBuild = [
  { t: "Production dashboards.", d: "Tonnes per shift, per face, per crew — reconciled across dispatch, weighbridge, and visual counts." },
  { t: "Fleet utilisation views.", d: "Truck states, cycle times, queue times — rolled up to fleet, route, or excavator level." },
  { t: "Fuel and cost dashboards.", d: "Fuel per tonne, per truck, per route — reconciled against the Mineoptic Fuel ledger." },
  { t: "Bottleneck maps.", d: "Queue times overlaid on the mine layout — so the problem is obvious at a glance." },
  { t: "Planning vs actual.", d: "Plan adherence by shift, by face, by route — in a single view." },
  { t: "Mine View.", d: "Where everything happens, not in report pages — with search options. Managers can jump to a point of interest without checking various reports." },
];

const canvasFor = [
  "Operations and planning teams that want to build their own views without waiting on IT.",
  "Mines that need a real digital twin but aren't going down the enterprise FMS path.",
  "Companies that want to integrate other IT systems for analysis such as financial impact, mine planning, and operations simulation.",
  "Groups with strict data-residency requirements where production data must stay on-site.",
  "Teams already using Mineoptic Lite or Plus who want one canvas to see everything together.",
];

const vsRows = [
  { d: "Data type", a: "Raw positional and status feeds; manager interprets.", b: "Operations-ready data with context, relationships, and cycle granularity." },
  { d: "Connectivity design", a: "Depends on third-party GSM; dead zones cause late syncs.", b: "Offline-first capture; mine-controlled connectivity for Plus." },
  { d: "Asset relationships", a: "Each asset tracked in isolation; no cross-asset context.", b: "Excavator ↔ tipper ↔ weighbridge relationships modelled and reported." },
  { d: "Granularity", a: "Trip in / trip out — no buckets, no queue time, no cycle breakup.", b: "Bucket counts, load time, queue length, queue time, trip breakup." },
  { d: "Time synchronisation", a: "Stationary assets sync late — timelines don't line up.", b: "All assets — moving or stationary — on the same timeline." },
  { d: "Manager workload", a: "High cognitive burden; managers drop off and go back to paper.", b: "Dashboards answer operational questions directly." },
  { d: "Evolution path", a: "Dealer-driven; limited module depth.", b: "Lite → Plus → Canvas, built around Connectivity, Granularity, Adoptability." },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
      <span className="text-sm leading-relaxed text-foreground/85">{children}</span>
    </li>
  );
}

function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Products</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            The <span className="text-gradient">Mineoptic Suite</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            Three levels of intelligence — from a focused starting point to a full self-service
            canvas. Most mines begin with Lite, grow into Plus, and compose their operations
            digital twin on Canvas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a href="#lite" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">Mineoptic Lite</a>
            <a href="#plus" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">Mineoptic Plus</a>
            <a href="#canvas" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">Mineoptic Canvas</a>
          </div>
        </div>
      </section>

      {/* LITE */}
      <Section id="lite">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>Mineoptic Lite</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Kill the paper. Keep the shift.</h2>
            <p className="mt-5 text-base text-muted-foreground">
              Mineoptic Lite is the fastest way to replace two of the most error-prone paper
              workflows in any mine: fuel logging and production counting. Two focused modules —
              Mineoptic Fuel and Mineoptic Visual — work together to give you clean, reconciled,
              granular data without adding a step to your crew's day.
            </p>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">The problems Mineoptic Lite is built to solve</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">{liteProblems.map((p, i) => <Bullet key={i}>{p}</Bullet>)}</ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-gradient text-white"><Smartphone className="h-5 w-5" /></div>
                <h3 className="text-2xl font-bold">Module 1 — Mineoptic Fuel</h3>
              </div>
              <p className="mt-2 text-sm italic text-muted-foreground">Tap. Snap. Synced.</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                Mineoptic Fuel puts fuel logging on a phone. At the bowser, the operator opens the
                app, photographs the truck number plate, the truck odometer, and the bowser meter —
                and that's it. The system reads, timestamps, geolocates and uploads the record automatically.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</h4>
                  <ul className="mt-3 space-y-2">{fuelHow.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Why it matters</h4>
                  <ul className="mt-3 space-y-2">{fuelWhy.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-gradient text-white"><Camera className="h-5 w-5" /></div>
                <h3 className="text-2xl font-bold">Module 2 — Mineoptic Visual</h3>
              </div>
              <p className="mt-2 text-sm italic text-muted-foreground">Count every truck. Count every bucket.</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                Mineoptic Visual is the analytics engine that watches what your camera feeds have always
                seen but could never report. It counts trucks passing any route entry/exit of the dump yard,
                tracks how many times an excavator drops a bucket into a tipper to fill it, and measures
                time per bucket and per load — so you finally have the granular cycle data your spreadsheet always needed.
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">What it captures</h4>
                  <ul className="mt-3 space-y-2">{visualWhat.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Why it matters</h4>
                  <ul className="mt-3 space-y-2">{visualWhy.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Who Mineoptic Lite is for</h3>
              <ul className="mt-4 space-y-2">{liteFor.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
          </div>
        </div>
      </Section>

      {/* PLUS */}
      <Section id="plus" className="bg-subtle-gradient">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>Mineoptic Plus</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Everything in Lite. Plus the mine's own network.</h2>
            <p className="mt-5 text-base text-muted-foreground">
              Mineoptic Plus builds on Lite with near-live fleet tracking that is designed — from the radio
              layer up — for the realities of the mine. It tells you not only where each tipper is, but what
              state it's in: running empty, loaded, or parked in the maintenance yard. And it keeps reporting
              in the low-network zones where standard GPS-GSM or WiFi goes dark.
            </p>
            <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-gradient text-white"><Radio className="h-6 w-6" /></div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl font-semibold">What's included</h3>
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
              <h3 className="text-xl font-semibold">The problems Mineoptic Plus is built to solve</h3>
              <ul className="mt-4 space-y-2">{plusProblems.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How Mineoptic Plus is different</h3>
              <ul className="mt-4 space-y-3">
                {plusDifferent.map((x, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm"><strong className="text-primary">{x.t}</strong> <span className="text-foreground/80">{x.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Typical outcomes our customers look for</h3>
              <ul className="mt-4 space-y-2">{plusOutcomes.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Who Mineoptic Plus is for</h3>
              <ul className="mt-4 space-y-2">{plusFor.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CANVAS */}
      <Section id="canvas">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>Mineoptic Canvas</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Your mine's digital twin — on your database.</h2>
            <p className="mt-5 text-base text-muted-foreground">
              Mineoptic Canvas is a self-service BI tool, but built specifically for mines. It lets your
              team compose the digital twin of the operation — pits, routes, faces, fleets, plants — and
              wire it to whatever data you already have: Excel workbooks, SQL databases, data servers, ERP
              exports. And all of it can be stored on your mine's own database, so the data never has to leave your control.
            </p>
            <div className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-gradient text-white"><Database className="h-6 w-6" /></div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">What makes Canvas different from a generic BI tool</h3>
              <ul className="mt-4 space-y-3">
                {canvasFeatures.map((x, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm"><strong className="text-primary">{x.t}</strong> <span className="text-foreground/80">{x.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">The problems Mineoptic Canvas is built to solve</h3>
              <ul className="mt-4 space-y-2">{canvasProblems.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">What you can build on Canvas</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {canvasBuild.map((x, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-5 shadow-card">
                    <h4 className="font-semibold text-primary">{x.t}</h4>
                    <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-7">
              <h3 className="text-xl font-semibold text-primary">Data sovereignty, made explicit</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                Sensitive production and commercial data should not be a vendor's problem. Mineoptic Canvas
                is built so the data layer sits on your mine's infrastructure. You control the database; we
                provide the engine and the interface. When an audit or a compliance review asks where the
                data lives, the answer is simple: it never left.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Who Mineoptic Canvas is for</h3>
              <ul className="mt-4 space-y-2">{canvasFor.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
          </div>
        </div>
      </Section>

      {/* COMPARISON */}
      <Section className="bg-subtle-gradient">
        <SectionTitle
          eyebrow="Mineoptic vs GPS, RFID, and CCTV"
          title="Why commodity trackers fall short"
          lead="Commodity trackers look attractive on day one. By month three, the data is raw, the manager has stopped opening the dashboard, and the crew is back on paper. Here's where Mineoptic is materially different."
        />
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-elevated">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-5 py-4 font-semibold">Dimension</th>
                  <th className="px-5 py-4 font-semibold">Standard GPS / RFID / CCTV</th>
                  <th className="px-5 py-4 font-semibold bg-accent text-accent-foreground">Mineoptic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {vsRows.map((r) => (
                  <tr key={r.d} className="hover:bg-muted/40">
                    <td className="px-5 py-4 font-semibold text-foreground">{r.d}</td>
                    <td className="px-5 py-4 text-muted-foreground">
                      <div className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /> <span>{r.a}</span></div>
                    </td>
                    <td className="px-5 py-4 bg-accent/5 text-foreground">
                      <div className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <span className="font-medium">{r.b}</span></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section className="bg-teal-gradient text-accent-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Find the right starting point.</h2>
          <p className="mt-4 text-lg text-accent-foreground/90">
            Most mines start with Lite, grow into Plus, and compose Canvas. Tell us about your operation and we'll recommend where to begin.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated hover:-translate-y-0.5 transition-transform">
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
