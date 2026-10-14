import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServiceDetailPageContent } from "@/components/site/ServiceDetailPageContent";
import { servicesData } from "@/lib/servicesData";

const service = servicesData["landscaping"];

export const Route = createFileRoute("/services/landscaping")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      {
        name: "keywords",
        content:
          "Outdoor Living Dallas, Custom Deck Builder Fort Worth, Cedar Fence DFW, Stone Patio Texas, Pergolas Dallas",
      },
      { property: "og:title", content: service.h1Title },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/services/landscaping" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://handymanathometx.com/services/landscaping",
      },
    ],
  }),
  component: LandscapingPage,
});

function LandscapingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ServiceDetailPageContent serviceId="landscaping" />
      </main>
      <Footer />
    </div>
  );
}
