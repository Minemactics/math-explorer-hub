import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Smartphone, Camera } from "lucide-react";
import dashboardLite from "@/assets/dashboard-lite.png";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/products/lite")({
  head: () => ({
    meta: [
      { title: "Mineoptic Lite, Kill the paper. Keep the shift. | Minematics" },
      { name: "description", content: "Mineoptic Lite replaces fuel logging and production counting paper workflows with two modules, Fuel and Visual, for clean, reconciled, granular mine data." },
      { property: "og:title", content: "Mineoptic Lite, Kill the paper. Keep the shift." },
      { property: "og:description", content: "Two focused modules: Mineoptic Fuel and Mineoptic Visual." },
      { property: "og:image", content: dashboardLite },
      { name: "twitter:image", content: dashboardLite },
    ],
  }),
  component: LitePage,
});

const liteProblems = [
  "Fuel logging that drifts shift to shift because pens, paper, and dusty cabins do not play well together.",
  "Truck counts that never reconcile because one card went missing between the gate and the dispatcher.",
  "No visibility into bucket counts, load time, or how long a truck actually waits at the excavator or weighbridge.",
  "Managers who cannot size the tipper fleet per excavator because the data has never been granular enough to decide.",
  "Staff motivation falling off a cliff because the logging work is mundane and thankless.",
];

const fuelHow = [
  "Operator opens the Mineoptic Fuel mobile app at the bowser.",
  "Captures three images: truck number plate, truck odometer reading, bowser meter reading.",
  "The app tags each image with the exact capture timestamp from the device, not a handwritten estimate.",
  "If the bowser zone has no network, the record is queued locally and uploaded automatically the moment the device reconnects, with both original capture and sync timestamps preserved.",
  "Back-end recognition and reconciliation produce a clean fuel ledger, no manual re-entry, no manual mistakes, no lost cards.",
];

const fuelWhy = [
  "Eliminates pen-and-paper error. No illegible handwriting, no wrong dates, no soiled cards, no card lost between the bowser and the office.",
  "Solves the connectivity problem. The bowser is often in the worst connectivity zone of the mine. Offline-first capture means the crew does not wait for signal.",
  "Keeps the time honest. Event time and upload time are both recorded, so reconciliation is straightforward.",
  "Removes the mundane. Operators tap and move on; no one has to sit at the end of the shift transcribing slips.",
];

const visualWhat = [
  "Truck counts per route, per direction, per hour, reconciled against dispatch.",
  "Bucket counts per truck, per excavator, the number that finally lets you size the fleet correctly.",
  "Load time per bucket and total load time per truck.",
  "Queue length and queue time at the excavator, the weighbridge, the crusher, the loadout.",
  "Trip breakup, travel, queue, load, unload, not just gross trip time.",
];

const visualWhy = [
  "Granularity the old way could not deliver. Nobody is going to hand-count buckets for a full shift. A camera with the right model will.",
  "Bottleneck data, not just movement data. Queue time at the weighbridge is the kind of number that turns into a decision within a week.",
  "Tipper fleet sizing, finally. With bucket count and load time per excavator, you can compute the right tipper count per excavator instead of guessing.",
  "Hands-off operation. The crew does not log anything. The data comes from the camera stream.",
];

const liteFor = [
  "Mines replacing paper registers and pen-logged fuel cards.",
  "Operations teams who want real cycle granularity without a full FMS deployment.",
  "Managers who need reliable numbers by mid-shift, not end-of-shift.",
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
      <span className="text-sm leading-relaxed text-foreground/85">{children}</span>
    </li>
  );
}

function LitePage() {
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>Mineoptic Lite</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Kill the paper. <span className="text-gradient">Keep the shift.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            The fastest way to replace two of the most error-prone paper workflows in any mine ,
            fuel logging and production counting. Two focused modules work together to give you
            clean, reconciled, granular data without adding a step to your crews day.
          </p>
        </div>
      </section>

      <Section>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          <img
            src={dashboardLite}
            alt="Mineoptic Lite mobile app and fuel ledger dashboard"
            loading="lazy"
            width={1280}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
      </Section>

      <Section className="bg-subtle-gradient">
        <h2 className="text-2xl font-bold md:text-3xl">The problems Mineoptic Lite is built to solve</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">{liteProblems.map((p, i) => <Bullet key={i}>{p}</Bullet>)}</ul>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-gradient text-white"><Smartphone className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold md:text-3xl">Module 1, Mineoptic Fuel</h2>
          </div>
          <p className="mt-2 text-sm italic text-muted-foreground">Tap. Snap. Synced.</p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            Mineoptic Fuel puts fuel logging on a phone. At the bowser, the operator opens the
            app, photographs the truck number plate, the truck odometer, and the bowser meter ,
            and that is it. The system reads, timestamps, geolocates and uploads the record automatically.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</h3>
              <ul className="mt-3 space-y-2">{fuelHow.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Why it matters</h3>
              <ul className="mt-3 space-y-2">{fuelWhy.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-7 shadow-card">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal-gradient text-white"><Camera className="h-5 w-5" /></div>
            <h2 className="text-2xl font-bold md:text-3xl">Module 2, Mineoptic Visual</h2>
          </div>
          <p className="mt-2 text-sm italic text-muted-foreground">Count every truck. Count every bucket.</p>
          <p className="mt-4 text-base leading-relaxed text-foreground/85">
            Mineoptic Visual is the analytics engine that watches what your camera feeds have always
            seen but could never report. It counts trucks passing any route entry/exit of the dump yard,
            tracks how many times an excavator drops a bucket into a tipper to fill it, and measures
            time per bucket and per load, so you finally have the granular cycle data your spreadsheet always needed.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">What it captures</h3>
              <ul className="mt-3 space-y-2">{visualWhat.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Why it matters</h3>
              <ul className="mt-3 space-y-2">{visualWhy.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Who Mineoptic Lite is for</h2>
          <ul className="mt-4 space-y-2">{liteFor.map((x, i) => <Bullet key={i}>{x}</Bullet>)}</ul>
        </div>
      </Section>

      <Section className="bg-teal-gradient text-accent-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to replace the clipboard?</h2>
          <p className="mt-4 text-lg text-accent-foreground/90">See Mineoptic Lite running on a real shift.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5">Request a demo</Link>
            <Link to="/products/plus" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20">
              Next: Mineoptic Plus <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
