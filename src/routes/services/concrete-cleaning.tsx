import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPageTemplate } from "@/components/site/services/ServiceDetailPageTemplate";
import { servicesData } from "@/lib/servicesData";

const config = servicesData["concrete-cleaning"];

export const Route = createFileRoute("/services/concrete-cleaning")({
  head: () => ({
    meta: [
      { title: config.metaTitle },
      { name: "description", content: config.metaDescription },
      { name: "keywords", content: "concrete cleaning Mooresville NC, concrete pressure washing Mooresville NC, patio cleaning Mooresville NC, sidewalk cleaning Mooresville NC, concrete cleaning Lake Norman NC, pool deck cleaning Mooresville" },
      { property: "og:title", content: config.metaTitle },
      { property: "og:description", content: config.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services/concrete-cleaning" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services/concrete-cleaning" }],
  }),
  component: ConcreteCleaningRoute,
});

function ConcreteCleaningRoute() {
  return <ServiceDetailPageTemplate config={config} />;
}
