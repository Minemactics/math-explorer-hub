import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import logo from "@/assets/minematics-logo.png";

const productLinks = [
  { to: "/products/lite" as const, label: "Mineoptic Lite" },
  { to: "/products/plus" as const, label: "Mineoptic Plus" },
  { to: "/products/canvas" as const, label: "Mineoptic Canvas" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Minematics" className="h-10 w-auto rounded bg-white/95 p-1.5" />
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">
            Minematics builds Mineoptic, a purpose-built mining intelligence
            platform. Connectivity • Accuracy • Granularity • Adoptability.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/minematics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Minematics on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/Mine_Matics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Minematics on X (Twitter)"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Product</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {productLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/resources" className="hover:text-accent">
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-accent">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><a href="mailto:info@minematics.in" className="hover:text-accent">info@minematics.in</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Minematics Technologies. Hyderabad, Telangana, India.</p>
          <p>Mineoptic: Mining Intelligence, Purpose-Built.</p>
        </div>
      </div>
    </footer>
  );
}
