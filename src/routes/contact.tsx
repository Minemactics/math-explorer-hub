import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, LifeBuoy, Handshake, MapPin } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Minematics" },
      { name: "description", content: "Tell us about your mine. We will tell you where Mineoptic fits. Sales, support, partnerships and press." },
      { property: "og:title", content: "Contact Minematics" },
      { property: "og:description", content: "Talk to sales, customer support, partnerships, or general enquiries." },
    ],
  }),
  component: ContactPage,
});

const blocks = [
  {
    icon: Mail, title: "Talk to sales",
    body: "If you are evaluating Mineoptic for a specific mine or group of mines, our team can walk you through the suite, discuss where Lite, Plus, or Canvas fits best, and arrange a site demo.",
    items: [
      { l: "Email", v: "sales@minematics.com", href: "mailto:sales@minematics.com" },
      { l: "Phone", v: "+91 95021 36760", href: "tel:+919502136760" },
    ],
  },
  {
    icon: LifeBuoy, title: "Customer support",
    body: "Existing customers — our support team is available around the clock for deployed Mineoptic sites.",
    items: [
      { l: "Email", v: "support@minematics.com", href: "mailto:support@minematics.com" },
      { l: "Support portal", v: "support.minematics.com", href: "https://support.minematics.com" },
    ],
  },
  {
    icon: Handshake, title: "Partnerships",
    body: "System integrators, OEMs, and consultancies working with mines — we would like to hear from you.",
    items: [
      { l: "Email", v: "partners@minematics.com", href: "mailto:partners@minematics.com" },
    ],
  },
  {
    icon: Phone, title: "General enquiries & press",
    body: "Anything else — story ideas, media, partnerships, or just hello.",
    items: [
      { l: "Email", v: "hello@minematics.com", href: "mailto:hello@minematics.com" },
    ],
  },
];

function ContactPage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
            Tell us about your mine. <br />
            <span className="text-gradient">We will tell you where Mineoptic fits.</span>
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-gradient text-white">
                  <b.icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold">{b.title}</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              <ul className="mt-5 space-y-2">
                {b.items.map((it) => (
                  <li key={it.l} className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold text-primary">{it.l}:</span>
                    <a href={it.href} className="text-accent hover:underline">{it.v}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-subtle-gradient p-8 shadow-card">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-bold">Office</h2>
          </div>
          <p className="mt-3 text-base font-semibold text-primary">Minematics Technologies</p>
          <p className="text-sm text-muted-foreground">Hyderabad, Telangana, India</p>
          <p className="mt-3 text-xs italic text-muted-foreground">
            (Full address, directions, and regional offices listed on the live website.)
          </p>
        </div>
      </Section>
    </>
  );
}
