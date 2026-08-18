import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPageTemplate } from "@/components/site/services/ServiceDetailPageTemplate";
import { servicesData } from "@/lib/servicesData";

const config = servicesData["roof-cleaning"];

export const Route = createFileRoute("/services/roof-cleaning")({
  head: () => ({
    meta: [
      { title: config.metaTitle },
      { name: "description", content: config.metaDescription },
      { name: "keywords", content: "roof cleaning Mooresville NC, roof washing Mooresville NC, roof cleaning Lake Norman NC, soft wash roof cleaning Mooresville NC, roof soft washing Mooresville NC, roof cleaning near me, algae roof cleaning Mooresville NC, moss removal roof Mooresville NC, black streak roof cleaning Mooresville NC" },
      { property: "og:title", content: config.metaTitle },
      { property: "og:description", content: config.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services/roof-cleaning" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services/roof-cleaning" }],
  }),
  component: RoofCleaningRoute,
});

function RoofCleaningRoute() {
  return <ServiceDetailPageTemplate config={config} />;
}
