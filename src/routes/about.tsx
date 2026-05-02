import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionTitle, Eyebrow } from "@/components/Section";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import training1 from "@/assets/training/training-1.jpg";
import training2 from "@/assets/training/training-2.jpg";
import training3 from "@/assets/training/training-3.jpg";
import training4 from "@/assets/training/training-4.jpg";
import training5 from "@/assets/training/training-5.jpg";
import { ClientLogos } from "@/components/ClientLogos";
import { seo, jsonLd, breadcrumbJsonLd } from "@/lib/seo";

const trainingImages = [
  { src: training1, alt: "Training session at ESCI Hyderabad for NMDC Engineers" },
  { src: training2, alt: "Training session at Jindal Institute of Power Technology, Raigarh" },
  { src: training3, alt: "Session on AI for Productivity in Mining at SCCL" },
  { src: training4, alt: "National Seminar on Operational Safety, Health & Environment in Mining at ESCI" },
  { src: training5, alt: "Training session at Jindal Institute of Power Technology, Raigarh" },
];

export const Route = createFileRoute("/about")({
  head: () => {
    const s = seo({
      title: "About Minematics — Mining Intelligence Built for Indian Mines",
      description:
        "Minematics builds Mineoptic, a purpose-built mining intelligence platform. Learn how we close the gap between commodity GPS trackers and enterprise FMS.",
      path: "/about",
    });
    return {
      meta: s.meta,
      links: s.links,
      scripts: [
        jsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      ],
    };
  },
  component: AboutPage,
});

const mission = [
  { t: "Purpose-built.", d: "Every feature, field, and report is designed from a real mining workflow, not retrofitted from a generic platform." },
  { t: "Operationally honest.", d: "We assume networks fail, paper gets lost, and crews are busy. We design for that, not against it." },
  { t: "Adopted on the ground.", d: "A system that is not used is a system that does not exist. Adoption is a first-class design goal, not an afterthought." },
  { t: "Aligned to the pillars.", d: "Connectivity, Accuracy, Granularity, Adoptability, we measure every product against all four." },
  { t: "Respectful of your data.", d: "Sensitive production data stays where you decide it stays." },
];

function AboutPage() {
  const autoplay = useRef(Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <Eyebrow>About Us</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
            We close the intelligence gap between the <span className="text-gradient">pit and the office.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-primary-foreground/85 md:text-xl">
            Minematics is a mining intelligence company. We build Mineoptic, a purpose-built platform that
            gives mines the connectivity, accuracy, granularity, and adoptability they need to
            run better shifts, every shift.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Why we exist</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/85">
              We exist because of a specific gap we kept seeing in the field. On one side, enterprise Fleet
              Management Systems are powerful but out of reach for most mines, in cost, in deployment time,
              and in the kind of fleet organisation they assume. On the other side, commodity GPS, RFID, and
              CCTV solutions are affordable but operationally shallow, they show dots on a map while
              managers go back to paper to actually run the shift.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              Minematics fills that gap. Mineoptic is built around what mining teams actually need to make
              decisions: not raw feeds, but auto-reconciled, granular, time-synced, operations-ready intelligence.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl bg-teal-gradient p-8 text-accent-foreground shadow-elevated">
              <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Vision</h3>
              <p className="mt-2 text-2xl font-bold italic">A world where every mine operates on real data, not recollection.</p>
              <p className="mt-4 text-sm leading-relaxed opacity-90">
                We believe mining productivity is not limited by effort, the crews already work hard, but
                by the quality of the data the operation runs on. Our vision is a mining industry where every
                shift, at every mine, starts and ends with numbers everyone trusts.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Mission</h3>
              <p className="mt-2 text-2xl font-bold italic text-primary">Close the intelligence gap between the pit and the office.</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Build mining intelligence that is purpose-built, operationally honest, and genuinely adopted on the ground.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-subtle-gradient">
        <SectionTitle eyebrow="What this means in practice" title="Our principles" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mission.map((m) => (
            <div key={m.t} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-primary">{m.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CLIENT LOGOS */}
      <ClientLogos />

      <Section>
        <SectionTitle eyebrow="On the ground" title="Training & industry engagement" />
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          setApi={setApi}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent>
            {trainingImages.map((img, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                  <img src={img.src} alt={img.alt} className="aspect-video w-full object-cover" loading="lazy" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-2">
            {trainingImages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  selected === i ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                )}
              />
            ))}
          </div>
        </Carousel>
      </Section>

      <Section className="bg-teal-gradient text-accent-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Want to work with us?</h2>
          <p className="mt-4 text-lg opacity-90">Whether you are a mine, a partner, or a future Minematics engineer, we would like to hear from you.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/careers" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-elevated hover:-translate-y-0.5 transition-transform">See careers</Link>
            <Link to="/contact" className="rounded-md border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/20">Contact us</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
