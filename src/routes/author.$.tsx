// Old WordPress author archives — send to home.
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/author/$")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301, replace: true });
  },
  component: () => null,
});
