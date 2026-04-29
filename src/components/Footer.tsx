import { Link } from "@tanstack/react-router";
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
