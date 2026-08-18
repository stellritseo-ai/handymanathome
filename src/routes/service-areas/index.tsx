import { createFileRoute } from "@tanstack/react-router";
import { ServiceAreasHubPage } from "@/components/site/ServiceAreasHubPage";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      { title: "Service Areas | Pressure Washing Mooresville & Lake Norman NC" },
      {
        name: "description",
        content:
          "Steam On Wheels provides professional pressure washing, roof cleaning & house washing across Mooresville, Lake Norman, Cornelius, Davidson, Huntersville, Troutman & Denver NC. Call (704) 516-9509.",
      },
      {
        name: "keywords",
        content:
          "Pressure Washing Service Areas NC, Pressure Washing Mooresville, Pressure Washing Lake Norman, House Washing Cornelius, Roof Cleaning Huntersville, Pressure Washing Troutman",
      },
      { property: "og:title", content: "Service Areas | Pressure Washing Mooresville & Lake Norman NC" },
      {
        property: "og:description",
        content:
          "Explore our North Carolina service areas across Mooresville, Lake Norman, and surrounding counties. 15+ years experience, licensed & insured.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/service-areas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/service-areas" }],
  }),
  component: ServiceAreasHubRoute,
});

function ServiceAreasHubRoute() {
  return <ServiceAreasHubPage />;
}
