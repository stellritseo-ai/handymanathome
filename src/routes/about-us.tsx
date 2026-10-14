import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AboutPageContent } from "@/components/site/AboutPageContent";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      {
        title: "About Us | Handyman At Home - Trusted DFW Partner for Remodeling & Repairs",
      },
      {
        name: "description",
        content:
          "Since 2001, Handyman At Home has been the premier choice for homeowners and businesses across Dallas-Fort Worth. Over 24 years of excellence in remodeling and repairs. Call (214) 814-1444.",
      },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/about" }],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  );
}
