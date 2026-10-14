import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ReviewsPageContent } from "@/components/site/ReviewsPageContent";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      {
        title: "Client Reviews & Testimonials | Handyman At Home - 5.0 Star Rated DFW Contractor",
      },
      {
        name: "description",
        content:
          "Read 15+ verified 5-star Google reviews from Dallas-Fort Worth homeowners and businesses. High quality remodeling, repairs, and 24/7 emergency services. Call (214) 814-1444.",
      },
      {
        name: "keywords",
        content:
          "Handyman At Home Reviews, Handyman Dallas TX Reviews, Contractor Reviews Fort Worth, General Contractor DFW Testimonials, Handyman Google Reviews",
      },
      {
        property: "og:title",
        content:
          "Client Reviews: Trusted by Dallas-Fort Worth Homeowners & Businesses | Handyman At Home",
      },
      {
        property: "og:description",
        content:
          "See why our North Texas neighbors rate us 5-stars. Over 24 years of proven excellence in remodeling and repairs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/reviews" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ReviewsPageContent />
      </main>
      <Footer />
    </div>
  );
}
