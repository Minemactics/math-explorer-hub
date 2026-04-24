import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
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
        Back to Resources
      </Link>
    </div>
  ),
  component: UseCaseDetailPage,
});

function UseCaseDetailPage() {
  const { useCase } = Route.useLoaderData();
  return (
    <>
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
      <UseCaseDetail useCase={useCase} variant="page" />
    </>
  );
}
