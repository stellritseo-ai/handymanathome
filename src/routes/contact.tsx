import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactPageContent } from "@/components/site/ContactPageContent";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Handyman At Home | Free Estimate | Dallas-Fort Worth General Contractor",
      },
      {
        name: "description",
        content:
          "Contact Handyman At Home in Dallas-Fort Worth. Request a free estimate for kitchen & bath remodel, painting, roofing, plumbing & repairs. Call (214) 814-1444. 24/7 emergency services.",
      },
      {
        name: "keywords",
        content:
          "Contact Handyman At Home, Dallas Handyman Contact, Fort Worth General Contractor Phone, Free Handyman Estimate DFW, Emergency Handyman Dallas TX",
      },
      {
        property: "og:title",
        content: "Contact Handyman At Home: Let's Bring Your Project to Life | Dallas-Fort Worth",
      },
      {
        property: "og:description",
        content:
          "Call (214) 814-1444 or request your free estimate. Serving Dallas, Tarrant, Collin, Denton, and Ellis counties with licensed craftsmanship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1">
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  );
}
