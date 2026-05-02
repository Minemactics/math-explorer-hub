import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301, replace: true });
  },
  component: () => null,
});
