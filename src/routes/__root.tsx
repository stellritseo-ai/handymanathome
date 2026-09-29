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
      { title: "Handyman At Home | Quality General Contractor & Handyman Services in Dallas, Fort Worth, TX" },
      {
        name: "description",
        content:
          "Quality General Contractor & Handyman Services in Dallas, Fort Worth, TX. Reliable Repairs, Expert Remodeling, and 24/7 Emergency Service. Call (214) 814-1444.",
      },
      { name: "keywords", content: "General Contractor DFW, Handyman Dallas TX, Handyman Fort Worth, Bathroom Remodel Near Me, Roofing Company DFW, Kitchen Remodelers DFW, Painting Services DFW, Emergency Handyman DFW, Handyman At Home" },
      { name: "author", content: "Handyman At Home" },
      { name: "geo.region", content: "US-TX" },
      { name: "geo.placename", content: "Dallas-Fort Worth" },
      { name: "geo.position", content: "32.7767;-96.7970" },
      { name: "ICBM", content: "32.7767, -96.7970" },
      { property: "og:site_name", content: "Handyman At Home" },
      { property: "og:title", content: "Handyman At Home | General Contractor & Handyman Services Dallas-Fort Worth TX" },
      {
        property: "og:description",
        content:
          "Over 24 years of experience providing reliable repairs, expert remodeling, and 24/7 emergency service in DFW, TX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Handyman At Home | DFW General Contractor & Handyman Services" },
      { name: "twitter:description", content: "Reliable repairs, expert remodeling, and 24/7 emergency service in Dallas, Fort Worth, TX." },
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
      "@id": "https://handymanathometx.com/#business",
      "name": "Handyman At Home",
      "legalName": "Handyman At Home LLC",
      "url": "https://handymanathometx.com",
      "telephone": "+1-214-814-1444",
      "email": "handymanathome@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1730 Newlin Dr",
        "addressLocality": "DFW",
        "addressRegion": "TX",
        "postalCode": "75125",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "description": "24/7 Emergency Dispatch Available"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Dallas" },
        { "@type": "City", "name": "Fort Worth" },
        { "@type": "City", "name": "Watauga" },
        { "@type": "City", "name": "Ennis" },
        { "@type": "City", "name": "Lancaster" },
        { "@type": "City", "name": "DeSoto" },
        { "@type": "City", "name": "Cedar Hill" },
        { "@type": "City", "name": "Duncanville" },
        { "@type": "City", "name": "Red Oak" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "9",
        "bestRating": "5",
        "worstRating": "1"
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

