import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPageTemplate } from "@/components/site/services/ServiceDetailPageTemplate";
import { servicesData } from "@/lib/servicesData";

const config = servicesData["driveway-cleaning"];

export const Route = createFileRoute("/services/driveway-cleaning")({
  head: () => ({
    meta: [
      { title: config.metaTitle },
      { name: "description", content: config.metaDescription },
      { name: "keywords", content: "driveway cleaning Mooresville NC, driveway pressure washing Mooresville NC, driveway power washing Mooresville NC, oil stain removal driveway NC, paver driveway cleaning Lake Norman" },
      { property: "og:title", content: config.metaTitle },
      { property: "og:description", content: config.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services/driveway-cleaning" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services/driveway-cleaning" }],
  }),
  component: DrivewayCleaningRoute,
});

function DrivewayCleaningRoute() {
  return <ServiceDetailPageTemplate config={config} />;
}
