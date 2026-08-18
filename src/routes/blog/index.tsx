import { createFileRoute } from "@tanstack/react-router";
import { BlogHubPage } from "@/components/site/BlogHubPage";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Exterior Cleaning & Pressure Washing Blog | Steam On Wheels NC" },
      {
        name: "description",
        content:
          "Read expert exterior cleaning guides, soft washing tips & maintenance advice for homeowners & businesses in Mooresville & Lake Norman NC.",
      },
      {
        name: "keywords",
        content:
          "Pressure Washing Blog NC, Soft Washing Tips, Roof Cleaning Guide Lake Norman, How to Clean Siding NC, Driveway Pressure Washing Advice",
      },
      { property: "og:title", content: "Exterior Cleaning & Pressure Washing Blog | Steam On Wheels NC" },
      {
        property: "og:description",
        content:
          "Helpful exterior cleaning guides and local North Carolina maintenance advice by 15+ year expert David Hudson.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/blog" }],
  }),
  component: BlogHubRoute,
});

function BlogHubRoute() {
  return <BlogHubPage />;
}
