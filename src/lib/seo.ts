// Centralised SEO helpers for TanStack Start head() metadata + JSON-LD.
// Canonical host is www. The bare apex (minematics.in) should be 301-redirected
// to www at the DNS / hosting level — see SEO docs in repo root if added.

export const SITE_URL = "https://www.minematics.in";
export const SITE_NAME = "Minematics";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-default.png`;
export const ORG_LOGO = `${SITE_URL}/assets/minematics-logo.png`;

export type SeoInput = {
  title: string;
  description: string;
  /** Path beginning with "/" — used for canonical + og:url. */
  path: string;
  /** Absolute URL or an imported asset URL. Falls back to DEFAULT_OG_IMAGE. */
  image?: string;
  type?: "website" | "article";
};

type MetaTag =
  | { title: string }
  | { charSet: string }
  | { name: string; content: string }
  | { property: string; content: string };

type LinkTag = { rel: string; href: string; crossOrigin?: "anonymous" | "use-credentials" | "" };

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  if (!path.startsWith("/")) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path}`;
}

/** Build the per-page meta + canonical link. Apply on every shareable route. */
export function seo(input: SeoInput): { meta: MetaTag[]; links: LinkTag[] } {
  const url = absoluteUrl(input.path);
  const image = input.image ? absoluteUrl(input.image) : DEFAULT_OG_IMAGE;
  const type = input.type ?? "website";
  return {
    meta: [
      { title: input.title },
      { name: "description", content: input.description },
      { property: "og:type", content: type },
      { property: "og:title", content: input.title },
      { property: "og:description", content: input.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: input.title },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Inline a JSON-LD script tag inside head() → scripts. */
export function jsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Minematics Solutions Pvt. Ltd.",
  url: SITE_URL,
  logo: ORG_LOGO,
  sameAs: ["https://in.linkedin.com/company/minematics"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-95021-36760",
    contactType: "sales",
    email: "info@minematics.in",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function softwareAppJsonLd(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    image: input.image ? absoluteUrl(input.image) : DEFAULT_OG_IMAGE,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    publisher: {
      "@type": "Organization",
      name: "Minematics Solutions Pvt. Ltd.",
      url: SITE_URL,
    },
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    image: input.image ? absoluteUrl(input.image) : DEFAULT_OG_IMAGE,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": input.authorName ? "Person" : "Organization",
      name: input.authorName ?? "Minematics",
    },
    publisher: {
      "@type": "Organization",
      name: "Minematics Solutions Pvt. Ltd.",
      logo: { "@type": "ImageObject", url: ORG_LOGO },
    },
  };
}
