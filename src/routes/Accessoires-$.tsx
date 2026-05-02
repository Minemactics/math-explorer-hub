// Spammy/legacy /Accessoires-* paths — return 410 Gone so search engines drop them.
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Accessoires-$")({
  server: {
    handlers: {
      GET: async () => new Response("Gone", { status: 410, headers: { "Content-Type": "text/plain" } }),
    },
  },
});
