import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wifi, Target, Layers, Users, Check, X, Minus } from "lucide-react";
import heroImg from "@/assets/hero-mine.jpg";
import overviewIllustration from "@/assets/illustration-overview.png";
import dashboardLite from "@/assets/dashboard-lite.png";
import dashboardPlus from "@/assets/dashboard-plus.png";
import dashboardCanvas from "@/assets/dashboard-canvas.png";
import { ClientLogos } from "@/components/ClientLogos";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minematics: Mining Intelligence, Purpose-Built" },
      { name: "description", content: "See every bucket, every bottleneck, every shift, in real time. Mineoptic gives mines granular, reliable visibility without enterprise FMS cost." },
      { property: "og:title", content: "Minematics: Mining Intelligence, Purpose-Built" },
      { property: "og:description", content: "Granular, real-time mining intelligence from the pit to the plant." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const pillars = [
  { icon: Wifi, name: "Connectivity", text: "Mines do not choose where the network reaches. Deep pits, underground drives, remote dumps, the signal drops where the action happens. Offline capture, deferred sync with timestamps that do not lie, and a network design that does not wait on a telecom operator." },
  { icon: Target, name: "Accuracy", text: "Decisions are only as relevant as the data is accurate. We do not rely on accuracy under standard circumstances, we build alternate mechanisms to obtain the data essential for decisions like distances between assets and road conditions." },
  { icon: Layers, name: "Granularity", text: "The difference between trip logged and five buckets, 3m 40s per bucket, 2m 10s queue at crusher is the difference between a report and a decision. Mineoptic captures the cycle so managers can answer the question that matters." },
  { icon: Users, name: "Adoptability", text: "A system only works if the people on the ground actually use it. Mineoptic is built for operators, supervisors, and managers who do not have time for training manuals, simple workflows, familiar interfaces, and dashboards that answer questions instead of raising new ones." },
];

const wrong = [
  "Logging varies across people, shifts, and times of day, the same event gets recorded three different ways.",
  "The time an event happens and the time it gets written down rarely match; watches drift, pens fail, cards get lost between hops.",
  "Paper cards travel through multiple hands before reconciliation, one missing slip can distort the shift report.",
  "Manual summarisation introduces its own errors, and the staff doing it are doing mundane, unrewarding work.",
  "Reconciliation across sections (pit, weighbridge, dispatch, fuel) rarely lines up, so the whole dataset becomes non-reliable.",
  "What gets captured is surface-level, total trips, total tonnage, with no view into queueing, bucket counts, cycle breakup, or bottlenecks.",
  "GPS trackers show where a truck is, not why it is waiting, how many buckets it took to fill, or which excavator is starving its fleet.",
  "Generic GPS devices rely on third-party GSM towers and store data offline during dead zones, so stationary assets like excavators and weighbridges report late, destroying time-sync across the mine.",
  "Dealer-driven tracking solutions give managers raw feeds to interpret themselves. The cognitive burden pushes them back to their old paper registers.",
];

type Cell = { type: "yes" | "partial" | "no"; text: string };
const comparison: { capability: string; gps: Cell; mineoptic: Cell; fms: Cell }[] = [
  { capability: "Asset position", gps: { type: "yes", text: "Yes, positional only" }, mineoptic: { type: "yes", text: "Yes, plus asset relationships" }, fms: { type: "yes", text: "Yes, deeply integrated" } },
  { capability: "Cycle granularity (buckets, queue, load time)", gps: { type: "no", text: "No" }, mineoptic: { type: "yes", text: "Yes, via visual analytics" }, fms: { type: "yes", text: "Yes, via OEM integration" } },
  { capability: "Works in low / no network zones", gps: { type: "partial", text: "Partial, late sync, no timestamps" }, mineoptic: { type: "yes", text: "Yes, sync with preserved timestamps" }, fms: { type: "yes", text: "Yes, private mine network" } },
  { capability: "Interpreted for operations", gps: { type: "no", text: "No, raw data, manager interprets" }, mineoptic: { type: "yes", text: "Yes, operations-ready" }, fms: { type: "yes", text: "Yes, operations-ready" } },
  { capability: "Implementation cost & time", gps: { type: "partial", text: "Low cost, low value" }, mineoptic: { type: "yes", text: "Moderate cost, high value" }, fms: { type: "no", text: "High cost, long deployment" } },
  { capability: "Data sovereignty", gps: { type: "no", text: "Vendor-hosted, dealer-driven" }, mineoptic: { type: "yes", text: "Mine-owned database option" }, fms: { type: "yes", text: "Mine-owned, vendor-managed" } },
];

function CellIcon({ type }: { type: Cell["type"] }) {
  if (type === "yes") return <Check className="h-4 w-4 shrink-0 text-accent" />;
  if (type === "no") return <X className="h-4 w-4 shrink-0 text-destructive" />;
  return <Minus className="h-4 w-4 shrink-0 text-muted-foreground" />;
}

const reasons = [
  { title: "Built for mining, not adapted for it.", text: "Every module, field, and report comes from a problem we have watched play out in a pit or on a haul road." },
  { title: "Designed around the four pillars.", text: "Connectivity, Accuracy, Granularity, Adoptability, each product is measured against all four." },
  { title: "Operationally honest about connectivity.", text: "We assume the network will fail and the phone will sync later; our data model handles it gracefully, with timestamps that hold up." },
  { title: "No cognitive burden on managers.", text: "The dashboard is the answer, not a stack of raw feeds to interpret." },
  { title: "Your data, your database.", text: "With Mineoptic Canvas, sensitive production data can stay inside your own infrastructure or on cloud, your choice." },
  { title: "Priced for the gap we fill.", text: "Between commodity trackers and enterprise FMS, with value that justifies the step up." },
];

const suite = [
  {
    name: "Mineoptic Lite",
    tag: "Start where the leakage is worst.",
    text: "Replaces the most error-prone paper workflows, fuel logging and production counting, with a mobile app and visual analytics. Two modules: Mineoptic Fuel and Mineoptic Visual that enable digital logging even in low/no network zones.",
    to: "/products/lite" as const,
    image: dashboardLite,
  },
  {
    name: "Mineoptic Plus",
    tag: "Plus the mines own network.",
    text: "Everything in Lite, plus near-live fleet tracking built for the mine. Know whether each tipper is running empty, loaded, or parked, and determine productive hours, identify queue and road bottlenecks, even where the public network drops.",
    to: "/products/plus" as const,
    image: dashboardPlus,
  },
  {
    name: "Mineoptic Canvas",
    tag: "Your mines digital twin.",
    text: "A self-service BI canvas purpose-built for mines. Connect Excel, SQL, your ERP, your data server, compose the digital twin of your operations on your own database. Analyze bottlenecks, simulate operations, get competitive.",
    to: "/products/canvas" as const,
    image: dashboardCanvas,
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-hero-gradient text-primary-foreground">
        <img
          src={heroImg}
          alt="Aerial view of an open-pit mine"
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
          width={1920}
          height={1080}
        />
        <div className="container-page relative py-24 md:py-36">
          <Eyebrow>Mineoptic Suite • Lite • Plus • Canvas</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Intelligence from the <span className="text-gradient">pit to the plant.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-primary-foreground/85 md:text-2xl">
            See every bucket, every bottleneck, every shift, in real time.
          </p>
          <p className="mt-5 max-w-3xl text-base text-primary-foreground/75 md:text-lg">
            Minematics builds Mineoptic, a purpose-built mining intelligence platform that captures
            what clipboards miss and what generic GPS systems cannot. Granular, reliable, real-time
            visibility into your operations, without the cost and complexity of enterprise FMS.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://calendly.com/dhruv-minematics/minematics" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5">
              Request a demo <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
              Talk to an expert
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <Section>
        <SectionTitle
          eyebrow="The reality on the ground"
          title="Mines run blind on their most critical operations"
          lead="Production, dispatch, fuel, loading, the data that drives a mines profitability is still largely captured on paper, in dusty cabins, by staff juggling pens that will not write and watches that do not agree. And where GPS trackers have been added, they deliver raw positional data that someone still has to interpret, reconcile, and trust."
        />
        <p className="mb-8 max-w-3xl text-base text-muted-foreground">
          The result is the same whether the mine is modern or traditional: decisions get made at
          the end of the shift, based on data nobody is fully sure of.
        </p>
        <h3 className="mb-6 text-xl font-semibold md:text-2xl">What is actually going wrong on the ground</h3>
        <ul className="grid gap-4 md:grid-cols-2">
          {wrong.map((w, i) => (
            <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-5 shadow-card">
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="text-sm text-foreground/85">{w}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* FOUR PILLARS */}
      <Section className="bg-subtle-gradient">
        <SectionTitle
          eyebrow="Our framework"
          title="Four pillars of mining intelligence"
          lead="Every mining operation, surface or underground, coal or metal, captive or commercial, needs these things from its data. Mineoptic is designed around them."
          center
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.name} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-gradient text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img
              src={overviewIllustration}
              alt="Illustration of mining intelligence connecting trucks, excavators and dashboards"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </Section>

      {/* WHERE WE FIT - COMPARISON */}
      <Section>
        <SectionTitle
          eyebrow="Where Minematics fits"
          title="Between commodity trackers and enterprise FMS"
          lead="Between the enterprise Fleet Management Systems that only the largest mines can justify, and the commodity trackers that capture too little to drive decisions, there is a gap. That gap is where most mines actually operate, and it is where Mineoptic is built to sit."
        />
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-elevated">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-5 py-4 font-semibold">Capability</th>
                  <th className="px-5 py-4 font-semibold">GPS / RFID / CCTV</th>
                  <th className="bg-accent px-5 py-4 font-semibold text-accent-foreground">Mineoptic</th>
                  <th className="px-5 py-4 font-semibold">Enterprise FMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.capability} className="hover:bg-muted/40">
                    <td className="px-5 py-4 font-semibold text-foreground">{row.capability}</td>
                    <td className="px-5 py-4 text-muted-foreground">
                      <div className="flex items-start gap-2"><CellIcon type={row.gps.type} /> <span>{row.gps.text}</span></div>
                    </td>
                    <td className="bg-accent/5 px-5 py-4 text-foreground">
                      <div className="flex items-start gap-2"><CellIcon type={row.mineoptic.type} /> <span className="font-medium">{row.mineoptic.text}</span></div>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      <div className="flex items-start gap-2"><CellIcon type={row.fms.type} /> <span>{row.fms.text}</span></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* THE SUITE, three products with individual explore links */}
      <Section className="bg-primary text-primary-foreground">
        <SectionTitle
          eyebrow="The Mineoptic Suite"
          title="Three products, one philosophy"
          lead="Capture what matters, close the gaps, and put intelligence in front of the people making decisions. Explore each solution in detail."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {suite.map((p) => (
            <div key={p.name} className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-all hover:bg-white/10">
              <div className="aspect-[16/10] w-full overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt={`${p.name} dashboard preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-bold text-accent">{p.name}</h3>
                <p className="mt-2 text-sm italic text-primary-foreground/70">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">{p.text}</p>
                <div className="mt-6">
                  <Link
                    to={p.to}
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Explore {p.name} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section>
        <SectionTitle eyebrow="Why mines choose Minematics" title="What makes Mineoptic different" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-teal-gradient text-accent-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Tell us about your mine.</h2>
          <p className="mt-4 text-lg text-accent-foreground/90">We will tell you where Mineoptic fits.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://calendly.com/dhruv-minematics/minematics" target="_blank" rel="noopener noreferrer" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5">Request a demo</a>
          </div>
        </div>
      </Section>
    </>
  );
}
