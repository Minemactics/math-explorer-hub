// Server-side 301/410 handlers for legacy WordPress URLs.
// Implemented as TanStack server routes so they fire at the edge before the SPA
// loads. _redirects / vercel.json are not used — Lovable hosting runs the Worker.

import { createFileRoute, redirect } from "@tanstack/react-router";

const r301 = (to: string) => () => {
  throw redirect({ to, statusCode: 301, replace: true });
};

// /contact/  → /contact     (handled by /contact-us route below; trailing slashes
// on canonical paths like /contact/ are normalised by the Worker automatically.)

export const contactUsRedirect = createFileRoute("/contact-us")({
  beforeLoad: r301("/contact"),
  component: () => null,
});

export const Route = contactUsRedirect;
