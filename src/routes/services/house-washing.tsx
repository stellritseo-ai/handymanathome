import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPageTemplate } from "@/components/site/services/ServiceDetailPageTemplate";
import { servicesData } from "@/lib/servicesData";

const config = servicesData["house-washing"];

export const Route = createFileRoute("/services/house-washing")({
  head: () => ({
    meta: [
      { title: config.metaTitle },
      { name: "description", content: config.metaDescription },
      { name: "keywords", content: "house washing Mooresville NC, house washing Lake Norman NC, house washing near me, soft wash house washing Mooresville NC, residential exterior cleaning Mooresville NC, home exterior cleaning Mooresville NC, siding cleaning Mooresville NC" },
      { property: "og:title", content: config.metaTitle },
      { property: "og:description", content: config.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services/house-washing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services/house-washing" }],
  }),
  component: HouseWashingRoute,
});

function HouseWashingRoute() {
  return <ServiceDetailPageTemplate config={config} />;
}
