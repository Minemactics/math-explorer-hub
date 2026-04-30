import { Eyebrow } from "@/components/Section";
import optym from "@/assets/clients/optym.png";
import komatsu from "@/assets/clients/komatsu.png";
import bgr from "@/assets/clients/bgr.png";
import baldota from "@/assets/clients/baldota.png";

const logos = [
  { src: optym, alt: "Optym" },
  { src: komatsu, alt: "Komatsu" },
  { src: bgr, alt: "BGR Mining & Infra Limited" },
  { src: baldota, alt: "Baldota" },
];

// Duplicate enough times so the marquee always fills the viewport
const marquee = [...logos, ...logos, ...logos, ...logos];

export function ClientLogos({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <section
      className={`py-16 md:py-20 ${
        isDark ? "bg-primary text-primary-foreground" : "bg-background"
      }`}
    >
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow>Trusted partners</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            The teams that trust Minematics
          </h2>
          <p
            className={`mt-4 text-base md:text-lg ${
              isDark ? "text-primary-foreground/80" : "text-muted-foreground"
            }`}
          >
            From global OEMs to leading mining contractors and operators, our clients
            rely on Mineoptic to run sharper shifts.
          </p>
        </div>

        <div
          className="group/marquee relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-16 md:gap-24">
            {marquee.map((logo, i) => (
              <div
                key={i}
                className="flex h-20 w-40 shrink-0 items-center justify-center md:h-24 md:w-48"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
