import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionTitle } from "@/components/Section";
import { useCases, type UseCase } from "@/data/useCases";

type Props = {
  /** Slugs to feature, in display order. Unknown slugs are silently skipped. */
  slugs: string[];
  eyebrow?: string;
  title?: string;
  lead?: string;
};

/**
 * Reusable internal-linking block for product / pillar pages.
 * Surfaces 2–3 use case cards that link out to /resources/use-cases/<slug>.
 */
export function RelatedUseCases({
  slugs,
  eyebrow = "Related use cases",
  title = "See it in the field",
  lead = "Real operational problems this product solves on live mines.",
}: Props) {
  const items: UseCase[] = slugs
    .map((s) => useCases.find((u) => u.slug === s))
    .filter((u): u is UseCase => Boolean(u));

  if (items.length === 0) return null;

  return (
    <Section className="bg-subtle-gradient">
      <SectionTitle eyebrow={eyebrow} title={title} lead={lead} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((u) => (
          <Link
            key={u.slug}
            to="/resources/use-cases/$slug"
            params={{ slug: u.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={u.image}
                alt={`${u.title} — ${u.shortDescription}`}
                width={640}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {u.category}
              </span>
              <h3 className="mt-2 text-lg font-bold leading-snug text-foreground group-hover:text-accent">
                {u.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.shortDescription}</p>
              <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent">
                Read use case
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
