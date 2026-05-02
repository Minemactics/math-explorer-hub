// Splat catches /category/blog/, /category/anything/ etc.
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$")({
  beforeLoad: () => {
    throw redirect({ to: "/resources", statusCode: 301, replace: true });
  },
  component: () => null,
});
