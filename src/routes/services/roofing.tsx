import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServiceDetailPageContent } from "@/components/site/ServiceDetailPageContent";
import { servicesData } from "@/lib/servicesData";

const service = servicesData["roofing"];

export const Route = createFileRoute("/services/roofing")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      {
        name: "keywords",
        content:
          "Roof Repair Dallas, Roofing Contractor Fort Worth, Storm Damage Roof DFW, Emergency Roof Leak Repair, Shingle Replacement Texas",
      },
      { property: "og:title", content: service.h1Title },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/services/roofing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://handymanathometx.com/services/roofing",
      },
    ],
  }),
  component: RoofingPage,
});

function RoofingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ServiceDetailPageContent serviceId="roofing" />
      </main>
      <Footer />
    </div>
  );
}
