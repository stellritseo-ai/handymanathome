import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPageTemplate } from "@/components/site/services/ServiceDetailPageTemplate";
import { servicesData } from "@/lib/servicesData";

const config = servicesData["commercial-pressure-washing"];

export const Route = createFileRoute("/services/commercial-pressure-washing")({
  head: () => ({
    meta: [
      { title: config.metaTitle },
      { name: "description", content: config.metaDescription },
      { name: "keywords", content: "commercial pressure washing Mooresville NC, commercial pressure washing Lake Norman NC, commercial power washing Mooresville NC, commercial exterior cleaning Mooresville NC, commercial building washing Mooresville NC, storefront pressure washing Mooresville NC, parking lot pressure washing Mooresville NC" },
      { property: "og:title", content: config.metaTitle },
      { property: "og:description", content: config.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services/commercial-pressure-washing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services/commercial-pressure-washing" }],
  }),
  component: CommercialPressureWashingRoute,
});

function CommercialPressureWashingRoute() {
  return <ServiceDetailPageTemplate config={config} />;
}
