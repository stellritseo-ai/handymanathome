import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServiceDetailPageContent } from "@/components/site/ServiceDetailPageContent";
import { servicesData } from "@/lib/servicesData";

const service = servicesData["painting"];

export const Route = createFileRoute("/services/painting")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      {
        name: "keywords",
        content:
          "Interior Painting Dallas, Exterior Painting Fort Worth, Cabinet Painting DFW, Drywall Repair Texas, House Painters Dallas",
      },
      { property: "og:title", content: service.h1Title },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/services/painting" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://handymanathometx.com/services/painting",
      },
    ],
  }),
  component: PaintingPage,
});

function PaintingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ServiceDetailPageContent serviceId="painting" />
      </main>
      <Footer />
    </div>
  );
}
