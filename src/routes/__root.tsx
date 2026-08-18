import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { MobileFloatingCTA } from "@/components/site/MobileFloatingCTA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Steam On Wheels NC | #1 Pressure Washing & Exterior Cleaning Mooresville & Lake Norman" },
      {
        name: "description",
        content:
          "Professional pressure washing, soft washing, roof cleaning, house washing, concrete degreasing & 24/7 emergency exterior cleaning in Mooresville & Lake Norman NC. Call David Hudson: (704) 516-9509.",
      },
      { name: "keywords", content: "Pressure Washing Mooresville NC, Pressure Washing Lake Norman NC, Power Washing Mooresville NC, Soft Washing Mooresville NC, House Washing Lake Norman, Roof Cleaning Mooresville NC, Concrete Cleaning Mooresville NC, Commercial Pressure Washing Mooresville NC, 24/7 Emergency Pressure Washing, Steam On Wheels NC" },
      { name: "author", content: "Steam On Wheels LLC" },
      { name: "geo.region", content: "US-NC" },
      { name: "geo.placename", content: "Mooresville" },
      { name: "geo.position", content: "35.5849;-80.8101" },
      { name: "ICBM", content: "35.5849, -80.8101" },
      { property: "og:site_name", content: "Steam On Wheels NC" },
      { property: "og:title", content: "Steam On Wheels NC | #1 Pressure Washing & Exterior Cleaning" },
      {
        property: "og:description",
        content:
          "Licensed & Insured exterior cleaning specialists. 15+ years experience. 100% 5-star customer reviews. 24/7 emergency service available.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Steam On Wheels NC | Pressure Washing & Soft Washing" },
      { name: "twitter:description", content: "Commercial & Residential exterior pressure washing in Mooresville & Lake Norman NC." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": "https://steamonwheelsnc.com/#business",
      "name": "Steam On Wheels",
      "legalName": "Steam On Wheels LLC",
      "url": "https://steamonwheelsnc.com",
      "logo": "https://steamonwheelsnc.com/favicon.png",
      "image": "https://steamonwheelsnc.com/favicon.png",
      "telephone": "+1-704-516-9509",
      "email": "motivate71@yahoo.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "107 Kase Ct",
        "addressLocality": "Mooresville",
        "addressRegion": "NC",
        "postalCode": "28115",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.5849,
        "longitude": -80.8101
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "description": "24/7 Emergency Dispatch Available"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Mooresville", "sameAs": "https://en.wikipedia.org/wiki/Mooresville,_North_Carolina" },
        { "@type": "City", "name": "Cornelius", "sameAs": "https://en.wikipedia.org/wiki/Cornelius,_North_Carolina" },
        { "@type": "City", "name": "Davidson", "sameAs": "https://en.wikipedia.org/wiki/Davidson,_North_Carolina" },
        { "@type": "City", "name": "Huntersville", "sameAs": "https://en.wikipedia.org/wiki/Huntersville,_North_Carolina" },
        { "@type": "City", "name": "Statesville", "sameAs": "https://en.wikipedia.org/wiki/Statesville,_North_Carolina" },
        { "@type": "City", "name": "Troutman", "sameAs": "https://en.wikipedia.org/wiki/Troutman,_North_Carolina" },
        { "@type": "City", "name": "Denver", "sameAs": "https://en.wikipedia.org/wiki/Denver,_North_Carolina" },
        { "@type": "City", "name": "Sherrills Ford" },
        { "@type": "Place", "name": "Mount Mourne" },
        { "@type": "Place", "name": "Lake Norman" },
        { "@type": "AdministrativeArea", "name": "Iredell County" },
        { "@type": "AdministrativeArea", "name": "Mecklenburg County" },
        { "@type": "AdministrativeArea", "name": "Catawba County" },
        { "@type": "AdministrativeArea", "name": "Lincoln County" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "412",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pressure Washing & Exterior Cleaning Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Washing Mooresville NC", "url": "https://steamonwheelsnc.com/services/pressure-washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Washing Mooresville NC", "url": "https://steamonwheelsnc.com/services/house-washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soft Washing Mooresville NC", "url": "https://steamonwheelsnc.com/services/soft-washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Cleaning Mooresville NC", "url": "https://steamonwheelsnc.com/services/roof-cleaning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concrete Cleaning Mooresville NC", "url": "https://steamonwheelsnc.com/services/concrete-cleaning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Driveway Cleaning Mooresville NC", "url": "https://steamonwheelsnc.com/services/driveway-cleaning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Pressure Washing Mooresville NC", "url": "https://steamonwheelsnc.com/services/commercial-pressure-washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Emergency Pressure Washing Mooresville NC", "url": "https://steamonwheelsnc.com/services/emergency-service" } }
        ]
      },
      "founder": {
        "@type": "Person",
        "name": "David Hudson"
      },
      "sameAs": [
        "https://www.facebook.com",
        "https://www.nextdoor.com",
        "https://www.google.com/maps"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://steamonwheelsnc.com/#website",
      "url": "https://steamonwheelsnc.com",
      "name": "Steam On Wheels NC",
      "publisher": {
        "@id": "https://steamonwheelsnc.com/#business"
      }
    }
  ]
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <MobileFloatingCTA />
    </QueryClientProvider>
  );
}

