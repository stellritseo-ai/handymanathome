import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FreeEstimatePageContent } from "@/components/site/FreeEstimatePageContent";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      {
        title: "Free Estimate | Handyman At Home - Dallas-Fort Worth General Contractor",
      },
      {
        name: "description",
        content:
          "Request a 100% free, no-obligation estimate from Handyman At Home in Dallas-Fort Worth. Transparent upfront pricing with zero hidden fees. Call (214) 814-1444.",
      },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/free-estimate" }],
  }),
  component: EstimateAliasPage,
});

function EstimateAliasPage() {
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
