import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import dashboardLite from "@/assets/dashboard-lite.png";
import dashboardPlus from "@/assets/dashboard-plus.png";
import dashboardCanvas from "@/assets/dashboard-canvas.png";
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
  component: ProductsOverview,
});

const products = [
  {
    name: "Mineoptic Lite",
    tag: "Kill the paper. Keep the shift.",
    text: "Two focused modules — Mineoptic Fuel and Mineoptic Visual — replace the most error-prone paper workflows in the mine: fuel logging and production counting. Clean, reconciled, granular data without adding a step to your crew's day.",
    to: "/products/lite" as const,
    image: dashboardLite,
  },
  {
    name: "Mineoptic Plus",
    tag: "Plus the mine's own network.",
    text: "Everything in Lite, plus near-live fleet tracking designed from the radio layer up for the realities of the mine. Status, not just position — and reporting that holds up in low-network zones.",
    to: "/products/plus" as const,
    image: dashboardPlus,
  },
  {
    name: "Mineoptic Canvas",
    tag: "Your mine's digital twin — on your database.",
    text: "A self-service BI canvas built specifically for mines. Compose the digital twin of your operation, wire it to whatever data you already have, and keep production data on your own infrastructure.",
    to: "/products/canvas" as const,
    image: dashboardCanvas,
  },
];

const vsRows = [
  { d: "Data type", a: "Raw positional and status feeds; manager interprets.", b: "Operations-ready data with context, relationships, and cycle granularity." },
  { d: "Connectivity design", a: "Depends on third-party GSM; dead zones cause late syncs.", b: "Offline-first capture; mine-controlled connectivity for Plus." },
  { d: "Asset relationships", a: "Each asset tracked in isolation; no cross-asset context.", b: "Excavator ↔ tipper ↔ weighbridge relationships modelled and reported." },
  { d: "Granularity", a: "Trip in / trip out — no buckets, no queue time, no cycle breakup.", b: "Bucket counts, load time, queue length, queue time, trip breakup." },
  { d: "Time synchronisation", a: "Stationary assets sync late — timelines don't line up.", b: "All assets — moving or stationary — on the same timeline." },
  { d: "Manager workload", a: "High cognitive burden; managers drop off and go back to paper.", b: "Dashboards answer operational questions directly." },
  { d: "Evolution path", a: "Dealer-driven; limited module depth.", b: "Lite → Plus → Canvas, built around Visibility, Connectivity, Accuracy, Granularity." },
];

function ProductsOverview() {
  return (
    <>
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
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
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
                <h2 className="text-2xl font-bold text-primary">{p.name}</h2>
                <p className="mt-2 text-sm italic text-muted-foreground">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">{p.text}</p>
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
                  <th className="bg-accent px-5 py-4 font-semibold text-accent-foreground">Mineoptic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {vsRows.map((r) => (
                  <tr key={r.d} className="hover:bg-muted/40">
                    <td className="px-5 py-4 font-semibold text-foreground">{r.d}</td>
                    <td className="px-5 py-4 text-muted-foreground">
                      <div className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /> <span>{r.a}</span></div>
                    </td>
                    <td className="bg-accent/5 px-5 py-4 text-foreground">
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
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5">
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
