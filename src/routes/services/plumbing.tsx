import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServiceDetailPageContent } from "@/components/site/ServiceDetailPageContent";
import { servicesData } from "@/lib/servicesData";

const service = servicesData["plumbing"];

export const Route = createFileRoute("/services/plumbing")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      {
        name: "keywords",
        content:
          "Plumber Dallas, Emergency Plumbing Fort Worth, Water Heater Repair DFW, Leak Detection Texas, Toilet Repair Plano",
      },
      { property: "og:title", content: service.h1Title },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/services/plumbing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://handymanathometx.com/services/plumbing",
      },
    ],
  }),
  component: PlumbingPage,
});

function PlumbingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ServiceDetailPageContent serviceId="plumbing" />
      </main>
      <Footer />
    </div>
  );
}
