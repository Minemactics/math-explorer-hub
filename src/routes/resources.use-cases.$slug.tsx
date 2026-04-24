import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { UseCaseDetail } from "@/components/UseCaseDetail";
import { getUseCase } from "@/data/useCases";

export const Route = createFileRoute("/resources/use-cases/$slug")({
  loader: ({ params }) => {
    const useCase = getUseCase(params.slug);
    if (!useCase) throw notFound();
    return { useCase };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { useCase } = loaderData;
    return {
      meta: [
        { title: `${useCase.title} | Minematics Use Cases` },
        { name: "description", content: useCase.shortDescription },
        { property: "og:title", content: `${useCase.title} | Minematics` },
        { property: "og:description", content: useCase.shortDescription },
        { property: "og:image", content: useCase.image },
        { name: "twitter:image", content: useCase.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-bold">Use case not found</h1>
      <p className="mt-3 text-muted-foreground">We could not find the use case you were looking for.</p>
      <Link
        to="/resources"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Resources
      </Link>
    </div>
  ),
  component: UseCaseDetailPage,
});

function UseCaseDetailPage() {
  const { useCase } = Route.useLoaderData();
  const currentIndex = useCases.findIndex((u) => u.slug === useCase.slug);
  const next = useCases[(currentIndex + 1) % useCases.length];

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/40">
        <nav className="container-page flex items-center gap-1.5 py-3 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/resources" className="hover:text-accent">Resources</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/resources" hash="use-cases" className="hover:text-accent">Use Cases</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/80">{useCase.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {useCase.category}
              </span>
              {useCase.secondaryCategories?.map((c) => (
                <span key={c} className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-primary-foreground/80">
                  {c}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">{useCase.title}</h1>
            <p className="mt-5 text-lg text-primary-foreground/85 md:text-xl">{useCase.impactStatement}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-accent/20 blur-2xl" aria-hidden />
            <img
              src={useCase.image}
              alt={`${useCase.title} conceptual illustration`}
              className="relative w-full rounded-2xl border border-white/10 shadow-elevated"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold">Why current systems fall short</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/90">{useCase.problem.intro}</p>
            <ul className="mt-6 space-y-3">
              {useCase.problem.failures.map((f) => (
                <li key={f} className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground/85 shadow-card">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <span className="block h-1.5 w-1.5 rounded-full bg-destructive" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section className="bg-subtle-gradient">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>The Minematics approach</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold">A purpose-built solution</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/90">{useCase.solution.intro}</p>
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Layers className="h-4 w-4 text-accent" /> System architecture
              </div>
              <ul className="mt-4 space-y-3">
                {useCase.solution.architecture.map((a, i) => (
                  <li key={a} className="flex gap-3 text-sm text-foreground/85">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-md bg-accent/10 text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="mb-12 max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold">From signal to action, in four stages</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {useCase.howItWorks.map((step, i) => {
            const Icon = [Cpu, Workflow, Eye, Gauge][i] ?? Cpu;
            return (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="absolute -top-3 left-6 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
                  Step {i + 1}
                </div>
                <Icon className="mt-2 h-6 w-6 text-accent" />
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-subtle-gradient">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Eyebrow>Key features</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold">What ships in the box</h2>
          </div>
          <div className="md:col-span-2 grid gap-3 sm:grid-cols-2">
            {useCase.features.map((f) => (
              <div key={f} className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm shadow-card">
                <CheckCircle2 className="h-5 w-5 flex-none text-accent" />
                <span className="text-foreground/85">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Dashboard preview */}
      <Section>
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Dashboard preview</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold">What you will see in the dashboard</h2>
          <p className="mt-3 text-muted-foreground">{useCase.dashboard.intro}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCase.dashboard.items.map((item) => {
            const Icon = item.type === "Chart" ? BarChart3 : item.type === "Map" ? MapIcon : item.type === "Alert" ? AlertTriangle : Gauge;
            const tone =
              item.type === "Alert"
                ? "border-destructive/30 bg-destructive/5 text-destructive"
                : item.type === "Map"
                  ? "border-accent/30 bg-accent/5 text-accent"
                  : item.type === "KPI"
                    ? "border-primary/20 bg-primary/5 text-primary"
                    : "border-border bg-muted text-foreground/70";
            return (
              <div key={item.title} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-card">
                <div className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${tone}`}>
                  <Icon className="h-3.5 w-3.5" />
                  {item.type}
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Business impact */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mb-12 max-w-3xl">
          <Eyebrow>Business impact</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold">Measurable outcomes</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {useCase.impact.map((m) => (
            <div key={m.metric} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold">{m.metric}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">{m.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Visual / Before-After */}
      <Section>
        <div className="mb-10 max-w-3xl">
          <Eyebrow>System visual</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold">Operational flow at a glance</h2>
          <p className="mt-3 text-muted-foreground">{useCase.visual.caption}</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <img src={useCase.image} alt={`${useCase.title} system flow`} className="w-full" loading="lazy" />
        </div>
        {useCase.visual.beforeAfter && (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-destructive">Before</span>
              <p className="mt-2 text-sm text-foreground/85">{useCase.visual.beforeAfter.before}</p>
            </div>
            <div className="rounded-xl border border-accent/40 bg-accent/5 p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">After</span>
              <p className="mt-2 text-sm text-foreground/85">{useCase.visual.beforeAfter.after}</p>
            </div>
          </div>
        )}
      </Section>

      {/* Conclusion + CTA */}
      <Section className="bg-subtle-gradient">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Why it matters</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold">{useCase.title}, in one breath</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">{useCase.conclusion}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5">
              Talk to us about this
            </Link>
            <Link to="/resources" hash="use-cases" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
              <ArrowLeft className="h-4 w-4" /> All use cases
            </Link>
          </div>
        </div>
      </Section>

      {/* Next use case */}
      <Section>
        <Link
          to="/resources/use-cases/$slug"
          params={{ slug: next.slug }}
          className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated md:flex-row md:items-center md:justify-between"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Next use case</span>
            <h3 className="mt-1 text-2xl font-bold group-hover:text-accent">{next.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{next.shortDescription}</p>
          </div>
          <ArrowRight className="h-6 w-6 text-accent" />
        </Link>
      </Section>
    </>
  );
}
