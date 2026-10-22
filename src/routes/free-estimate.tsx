import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FreeEstimatePageContent } from "@/components/site/FreeEstimatePageContent";

export const Route = createFileRoute("/free-estimate")({
  head: () => ({
    meta: [
      {
        title: "Get Your Free Estimate Today: No Obligation, No Surprises | Handyman At Home",
      },
      {
        name: "description",
        content:
          "Request a 100% free, no-obligation estimate from Handyman At Home in Dallas-Fort Worth. Transparent upfront pricing for remodeling, painting, roofing, plumbing & repairs. Call (214) 814-1444.",
      },
      {
        name: "keywords",
        content:
          "Free Handyman Estimate Dallas, Free Contractor Quote Fort Worth, Transparent Pricing Handyman DFW, Remodeling Estimate Texas, No Obligation Repair Quote",
      },
      {
        property: "og:title",
        content: "Get Your Free Estimate Today: No Obligation, No Surprises | Handyman At Home DFW",
      },
      {
        property: "og:description",
        content:
          "100% free estimates with transparent pricing for homeowners and businesses in Dallas-Fort Worth. Over 24 years of trusted craftsmanship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/free-estimate" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/free-estimate" }],
  }),
  component: FreeEstimatePage,
});

function FreeEstimatePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <FreeEstimatePageContent />
      </main>
      <Footer />
    </div>
  );
}
