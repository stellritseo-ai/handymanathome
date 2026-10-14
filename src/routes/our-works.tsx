import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProjectsPageContent } from "@/components/site/ProjectsPageContent";

export const Route = createFileRoute("/our-works")({
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
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/projects" }],
  }),
  component: OurWorksPage,
});

function OurWorksPage() {
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
