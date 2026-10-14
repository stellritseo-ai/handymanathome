import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactPageContent } from "@/components/site/ContactPageContent";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      {
        title: "Contact Us | Handyman At Home - Dallas-Fort Worth General Contractor",
      },
      {
        name: "description",
        content:
          "Contact Handyman At Home in Dallas-Fort Worth. Request a free estimate for kitchen & bath remodel, painting, roofing, plumbing & repairs. Call (214) 814-1444.",
      },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/contact" }],
  }),
  component: ContactUsPage,
});

function ContactUsPage() {
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
