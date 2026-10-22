import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServiceDetailPageContent } from "@/components/site/ServiceDetailPageContent";
import { servicesData } from "@/lib/servicesData";

const service = servicesData["kitchen-bathroom-remodel"];

export const Route = createFileRoute("/services/kitchen-bathroom-remodel")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      {
        name: "keywords",
        content:
          "Kitchen Remodel Dallas, Bathroom Remodel Fort Worth, Custom Cabinetry DFW, Tile Shower Installation, Quartz Countertops Texas",
      },
      { property: "og:title", content: service.h1Title },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://handymanathometx.com/services/kitchen-bathroom-remodel",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://handymanathometx.com/services/kitchen-bathroom-remodel",
      },
    ],
  }),
  component: KitchenBathroomRemodelPage,
});

function KitchenBathroomRemodelPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ServiceDetailPageContent serviceId="kitchen-bathroom-remodel" />
      </main>
      <Footer />
    </div>
  );
}
