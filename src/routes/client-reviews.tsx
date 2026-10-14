import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ReviewsPageContent } from "@/components/site/ReviewsPageContent";

export const Route = createFileRoute("/client-reviews")({
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
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/reviews" }],
  }),
  component: ClientReviewsPage,
});

function ClientReviewsPage() {
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
