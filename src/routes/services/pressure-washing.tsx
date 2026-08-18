import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPageTemplate } from "@/components/site/services/ServiceDetailPageTemplate";
import { servicesData } from "@/lib/servicesData";

const config = servicesData["pressure-washing"];

export const Route = createFileRoute("/services/pressure-washing")({
  head: () => ({
    meta: [
      { title: config.metaTitle },
      { name: "description", content: config.metaDescription },
      { name: "keywords", content: "pressure washing Mooresville NC, pressure washing Lake Norman NC, power washing Mooresville NC, pressure washing company Mooresville NC, pressure washing services Mooresville NC, pressure washing near me, exterior cleaning Mooresville NC" },
      { property: "og:title", content: config.metaTitle },
      { property: "og:description", content: config.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services/pressure-washing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services/pressure-washing" }],
  }),
  component: PressureWashingRoute,
});

function PressureWashingRoute() {
  return <ServiceDetailPageTemplate config={config} />;
}
