import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/minematics-logo.png";

const CALENDLY_URL = "https://calendly.com/dhruv-minematics/minematics";

const nav = [
  { to: "/" as const, label: "Home" },
  { to: "/resources" as const, label: "Resources" },
  { to: "/about" as const, label: "About" },
  { to: "/careers" as const, label: "Careers" },
  { to: "/contact" as const, label: "Contact" },
];

const productLinks = [
  { to: "/products/lite" as const, label: "Mineoptic Lite", description: "Fuel logging and production counting" },
  { to: "/products/plus" as const, label: "Mineoptic Plus", description: "Fleet tracking on the mines own network" },
  { to: "/products/canvas" as const, label: "Mineoptic Canvas", description: "Digital twin and mining BI canvas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const productsActive = location.pathname.startsWith("/products");

  // Close dropdown whenever the route changes
  useEffect(() => {
    setProductsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Minematics" className="h-14 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.slice(0, 1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-muted text-accent" }}
            >
              {n.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${productsActive ? "bg-muted text-accent" : "text-foreground/80 hover:bg-muted hover:text-foreground"}`}
              aria-haspopup="true"
              aria-expanded={productsOpen}
            >
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            <div
              className={`absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-border bg-background p-2 shadow-elevated transition-all ${productsOpen ? "visible opacity-100" : "invisible opacity-0"}`}
            >
              {productLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setProductsOpen(false)}
                  className="block rounded-lg px-3 py-3 transition-colors hover:bg-muted"
                  activeProps={{ className: "block rounded-lg bg-muted px-3 py-3 text-accent" }}
                >
                  <span className="block text-sm font-semibold">{link.label}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{link.description}</span>
                </Link>
              ))}
            </div>
          </div>

          {nav.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-muted text-accent" }}
            >
              {n.label}
            </Link>
          ))}

          <div className="ml-2 hidden flex-col items-end gap-0.5 border-l border-border/60 pl-4 text-xs leading-tight md:flex">
            <a
              href="tel:+919502136760"
              className="inline-flex items-center gap-1.5 font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 95021 36760
            </a>
            <a
              href="mailto:info@minematics.in"
              className="inline-flex items-center gap-1.5 font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5" />
              info@minematics.in
            </a>
          </div>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Request a demo
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
            >
              Home
            </Link>

            <div className="rounded-md px-3 py-2">
              <div className="text-sm font-semibold text-foreground">Products</div>
              <div className="mt-2 flex flex-col gap-1 pl-3">
                {productLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}

            <div className="mt-2 flex flex-col gap-1 border-t border-border pt-3">
              <a
                href="tel:+919502136760"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +91 95021 36760
              </a>
              <a
                href="mailto:info@minematics.in"
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@minematics.in
              </a>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
            >
              Request a demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
