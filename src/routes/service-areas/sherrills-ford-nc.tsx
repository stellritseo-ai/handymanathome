import { createFileRoute } from "@tanstack/react-router";
import { CityLandingPage } from "@/components/site/service-areas/CityLandingPage";
import { citiesData } from "@/lib/citiesData";

const city = citiesData["sherrills-ford-nc"];

export const Route = createFileRoute("/service-areas/sherrills-ford-nc")({
  head: () => ({
    meta: [
      { title: city.metaTitle },
      { name: "description", content: city.metaDescription },
      { name: "keywords", content: city.secondaryKeywords.join(", ") },
      { property: "og:title", content: city.metaTitle },
      { property: "og:description", content: city.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://steamonwheelsnc.com${city.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `https://steamonwheelsnc.com${city.slug}` }],
  }),
  component: SherrillsFordRoute,
});

function SherrillsFordRoute() {
  return <CityLandingPage city={city} />;
}
