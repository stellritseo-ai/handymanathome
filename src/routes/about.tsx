import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AboutPageContent } from "@/components/site/AboutPageContent";

export const Route = createFileRoute("/about")({
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
      {
        name: "keywords",
        content:
          "About Handyman At Home, General Contractor DFW, Dallas Remodeling Contractor, Fort Worth Handyman, DFW Home Repairs, Emergency Handyman DFW, Licensed Contractor Texas",
      },
      {
        property: "og:title",
        content: "About Handyman At Home | Your Trusted DFW Partner for Remodeling & Repairs",
      },
      {
        property: "og:description",
        content:
          "Over two decades of excellence in Dallas-Fort Worth since 2001. No job is too big or too small. Contact us for a free estimate.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
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
