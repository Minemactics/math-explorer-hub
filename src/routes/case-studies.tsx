import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies")({
  beforeLoad: () => {
    throw redirect({ to: "/resources", statusCode: 301, replace: true });
  },
  component: () => null,
});
