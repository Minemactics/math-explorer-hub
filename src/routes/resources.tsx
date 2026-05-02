import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  FileText,
  ShieldAlert,
  Truck,
  Gauge,
  Workflow,
} from "lucide-react";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { useCases, useCaseCategories, type UseCaseCategory } from "@/data/useCases";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { UseCaseDetail } from "@/components/UseCaseDetail";
import { ClientLogos } from "@/components/ClientLogos";
import { seo, jsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () => {
    const s = seo({
      title: "Mining Use Cases, Case Studies & Insights | Minematics",
      description:
        "Real-world use cases, case studies, and blog posts on mining fleet management, fuel logging, production counting, and mining intelligence.",
      path: "/resources",
    });
    return {
      meta: s.meta,
      links: s.links,
      scripts: [
        jsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ),
      ],
    };
  },
  component: ResourcesPage,
});

const categoryIcon: Record<UseCaseCategory, typeof ShieldAlert> = {
  Efficiency: Gauge,
  Safety: ShieldAlert,
  Logistics: Truck,
  "Operations Intelligence": Workflow,
};

const cases = [
  { n: 1, title: "From paper fuel slips to a reconciled fuel ledger", sector: "Open-cast coal", module: "Mineoptic Fuel", pillar: "Adoptability, Granularity",
    body: "The mine was logging fuel on paper cards at three bowsers, reconciling manually at shift end, and losing an estimated 4 to 6 cards per week. After rolling out Mineoptic Fuel, the site moved to tap-and-snap capture at the bowser, with offline sync to handle the dead zone at the back-of-pit bowser, and eliminated end-of-shift transcription entirely. Fuel reconciliation variance dropped sharply and the fuel-per-tonne number became trusted at the management review." },
  { n: 2, title: "Sizing the tipper fleet with bucket-level data", sector: "Iron ore", module: "Mineoptic Visual", pillar: "Connectivity, Granularity",
    body: "The planning team had been sizing the tipper fleet per excavator using trip counts and average cycle time, numbers the team did not fully trust. Mineoptic Visual started reporting bucket counts per truck, load time per bucket, and queue time at the excavator. Within a shift, the manager could see which excavators were starving their fleet and which had excess tippers. The fleet was rebalanced within a week." },
  { n: 3, title: "Fleet status visibility in a low-network pit", sector: "Limestone", module: "Mineoptic Plus", pillar: "Connectivity, Accuracy",
    body: "A standard GPS tracker deployment had been live for two years but never used by the operations manager, the public GSM coverage dropped in the deepest bench, so the pit floor was effectively invisible, and stationary assets synced late. Mineoptic Plus was deployed on the mines own connectivity fabric. The pit floor came online, time-sync across moving and stationary assets held up, and the manager began using the fleet-status view as the primary operational screen." },
  { n: 4, title: "One canvas for production, fuel, and fleet", sector: "Bauxite", module: "Mineoptic Canvas", pillar: "Accuracy, Adoptability",
    body: "Production data lived in dispatch software, fuel data in Excel, and weighbridge data in a separate SQL database, each reconciled weekly, none of them live. Mineoptic Canvas was connected to all three sources with the data layer on the mines own server. The operations team built a single shift dashboard that reconciled the three sources automatically. The weekly reconciliation meeting was retired." },
];

const blogs = [
  { t: "Why a map view is not visibility", d: "Every GPS dashboard looks impressive on day one. Two months later, the manager has stopped opening it. We look at why, and what visibility actually has to deliver to stay useful." },
  { t: "The real cost of pen-and-paper fuel logging", d: "Everyone knows paper fuel cards are error-prone. We quantify what that actually costs across a year, in missed reconciliations, distorted fuel-per-tonne numbers, and end-of-shift hours spent transcribing." },
  { t: "How many tippers per excavator? The question nobody could answer", d: "Sizing the tipper fleet per excavator has historically been a rule-of-thumb exercise because the data was not there. With bucket and queue data, the answer becomes calculable. We walk through the method." },
  { t: "Why mines outgrow their GPS trackers", d: "Standard GPS is built for fleets on public roads. Mines are different, dead zones, stationary assets, asset relationships that matter more than coordinates. We break down where trackers run out of road." },
  { t: "Designing for the dead zone", d: "The deepest bench, the underground drive, the back-of-pit bowser, every mine has a dead zone where it matters most. We discuss what offline-first capture really requires to stay trustworthy." },
  { t: "Adoption is the hardest pillar", d: "Connectivity, Accuracy, Granularity are all engineering problems. Adoptability is a design problem, and it is the one that decides whether the system gets used. Here is how we approach it." },
];

function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<UseCaseCategory | "All">("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openSlug && dialogContentRef.current) {
      dialogContentRef.current.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [openSlug]);

  const filteredUseCases = useMemo(
    () =>
      activeFilter === "All"
        ? useCases
        : useCases.filter(
            (u) => u.category === activeFilter || u.secondaryCategories?.includes(activeFilter),
          ),
    [activeFilter],
  );

  const activeUseCase = openSlug ? useCases.find((u) => u.slug === openSlug) ?? null : null;

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">What we are seeing in the field.</h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            Use cases, case studies, blogs, and e-books, all focused on the pillars that drive
            productivity: Connectivity, Accuracy, Granularity, Adoptability.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <Section id="use-cases">
        <SectionTitle
          eyebrow="Use Cases"
          title="Real-world impact of industrial intelligence"
          lead="A library of analytics, computer vision, and tracking use cases, drawn from real operational problems we have solved across mining and adjacent heavy industries."
        />

        {/* Filter bar */}
        <div className="mb-8 flex flex-wrap gap-2">
          {(["All", ...useCaseCategories] as const).map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                  active
                    ? "border-accent bg-accent text-accent-foreground shadow-sm"
                    : "border-border bg-card text-foreground/75 hover:border-accent/50 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUseCases.map((u) => {
            const Icon = categoryIcon[u.category];
            return (
              <button
                key={u.slug}
                type="button"
                onClick={() => setOpenSlug(u.slug)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elevated"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={u.image}
                    alt={`${u.title} illustration`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    {u.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-accent">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.shortDescription}</p>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-foreground/70 opacity-0 transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
                    {u.hoverPreview}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent">
                    Read use case
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {filteredUseCases.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">No use cases in this category yet.</p>
        )}
      </Section>

      {/* CASE STUDIES */}
      <Section className="bg-subtle-gradient">
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

      {/* BLOGS */}
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

      {/* CLIENT LOGOS */}
      <ClientLogos />

      {/* Use Case Modal */}
      <Dialog open={!!activeUseCase} onOpenChange={(open) => !open && setOpenSlug(null)}>
        <DialogContent ref={dialogContentRef} className="max-h-[92vh] w-[96vw] max-w-6xl overflow-y-auto p-0 sm:rounded-2xl">
          {activeUseCase && (
            <>
              <DialogTitle className="sr-only">{activeUseCase.title}</DialogTitle>
              <DialogDescription className="sr-only">{activeUseCase.shortDescription}</DialogDescription>
              <UseCaseDetail
                useCase={activeUseCase}
                variant="modal"
                onClose={() => setOpenSlug(null)}
                onSelectNext={(slug) => setOpenSlug(slug)}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
