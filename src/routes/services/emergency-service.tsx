import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPageTemplate } from "@/components/site/services/ServiceDetailPageTemplate";
import { servicesData } from "@/lib/servicesData";

const config = servicesData["emergency-service"];

export const Route = createFileRoute("/services/emergency-service")({
  head: () => ({
    meta: [
      { title: config.metaTitle },
      { name: "description", content: config.metaDescription },
      { name: "keywords", content: "24/7 pressure washing Mooresville NC, emergency pressure washing Mooresville NC, 24 hour pressure washing Mooresville NC, emergency exterior cleaning Mooresville NC, 24/7 emergency exterior cleaning, emergency pressure washing near me, 24 hour pressure washing near me, emergency commercial cleaning Mooresville NC" },
      { property: "og:title", content: config.metaTitle },
      { property: "og:description", content: config.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services/emergency-service" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services/emergency-service" }],
  }),
  component: EmergencyServiceRoute,
});

function EmergencyServiceRoute() {
  return <ServiceDetailPageTemplate config={config} />;
}
