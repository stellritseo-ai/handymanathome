import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProjectsPageContent } from "@/components/site/ProjectsPageContent";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Our Works & Project Gallery | Handyman At Home - DFW Remodeling & Repairs",
      },
      {
        name: "description",
        content:
          "Browse 48+ authentic photos of completed kitchen & bathroom remodels, painting, roofing, carpentry, and handyman repairs across Dallas-Fort Worth. Call (214) 814-1444.",
      },
      {
        name: "keywords",
        content:
          "Handyman At Home Projects, Handyman DFW Portfolio, Bathroom Remodel Photos Dallas, Kitchen Remodeling Fort Worth, Roofing Repair Photos DFW, Carpentry Works Texas",
      },
      {
        property: "og:title",
        content:
          "Our Works & Project Gallery | Handyman At Home - Dallas-Fort Worth, TX",
      },
      {
        property: "og:description",
        content:
          "Explore authentic project photos of residential and commercial repairs, remodeling, painting, and construction across Dallas–Fort Worth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ProjectsPageContent />
      </main>
      <Footer />
    </div>
  );
}
