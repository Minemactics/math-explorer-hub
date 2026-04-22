import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/minematics-logo.png";

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
  const location = useLocation();
  const productsActive = location.pathname.startsWith("/products");

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Minematics" className="h-9 w-auto" />
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

          <div className="group relative">
            <button
              type="button"
              className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${productsActive ? "bg-muted text-accent" : "text-foreground/80 hover:bg-muted hover:text-foreground"}`}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-border bg-background p-2 opacity-0 shadow-elevated transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {productLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
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

          <Link
            to="/contact"
            className="ml-2 inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Request a demo
          </Link>
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

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
            >
              Request a demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
