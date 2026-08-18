import { createFileRoute } from "@tanstack/react-router";
import { ServicesHubPage } from "@/components/site/ServicesHubPage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Exterior Cleaning & Pressure Washing Services | Steam On Wheels NC" },
      {
        name: "description",
        content:
          "Explore complete pressure washing, soft roof cleaning, house washing, concrete cleaning & 24/7 emergency services in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      {
        name: "keywords",
        content:
          "Pressure Washing Services Mooresville NC, Exterior Cleaning Lake Norman, House Washing Services NC, Roof Cleaning Services Mooresville, Commercial Pressure Washing NC",
      },
      { property: "og:title", content: "Exterior Cleaning & Pressure Washing Services | Steam On Wheels NC" },
      {
        property: "og:description",
        content:
          "Professional pressure washing, soft washing, roof cleaning & concrete restoration across Mooresville & Lake Norman NC. 15+ years experience.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/services" }],
  }),
  component: ServicesHubRoute,
});

function ServicesHubRoute() {
  return <ServicesHubPage />;
}
