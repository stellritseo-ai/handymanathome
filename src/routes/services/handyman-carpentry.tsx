import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServiceDetailPageContent } from "@/components/site/ServiceDetailPageContent";
import { servicesData } from "@/lib/servicesData";

const service = servicesData["handyman-carpentry"];

export const Route = createFileRoute("/services/handyman-carpentry")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      {
        name: "keywords",
        content:
          "Handyman Dallas, General Contractor Fort Worth, Finish Carpentry DFW, Door Installation Texas, Drywall Patching Plano",
      },
      { property: "og:title", content: service.h1Title },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/services/handyman-carpentry" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://handymanathometx.com/services/handyman-carpentry",
      },
    ],
  }),
  component: HandymanCarpentryPage,
});

function HandymanCarpentryPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ServiceDetailPageContent serviceId="handyman-carpentry" />
      </main>
      <Footer />
    </div>
  );
}
