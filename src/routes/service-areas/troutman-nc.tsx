import { createFileRoute } from "@tanstack/react-router";
import { CityLandingPage } from "@/components/site/service-areas/CityLandingPage";
import { citiesData } from "@/lib/citiesData";

const city = citiesData["troutman-nc"];

export const Route = createFileRoute("/service-areas/troutman-nc")({
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
  component: TroutmanRoute,
});

function TroutmanRoute() {
  return <CityLandingPage city={city} />;
}
