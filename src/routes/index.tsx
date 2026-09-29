import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceArea } from "@/components/site/ServiceArea";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quality General Contractor & Handyman Services in Dallas, Fort Worth, TX | Handyman At Home" },
      {
        name: "description",
        content:
          "Reliable Repairs, Expert Remodeling, and 24/7 Emergency Service in Dallas, Fort Worth, TX. Over 24 years of experience, licensed & insured. Call (214) 814-1444.",
      },
      {
        name: "keywords",
        content:
          "General Contractor DFW, Handyman Dallas TX, Handyman Fort Worth, Bathroom Remodel Near Me, Roofing Company DFW, Kitchen Remodelers DFW, Painting Services DFW, Emergency Number DFW, Handyman At Home",
      },
      { property: "og:title", content: "Quality General Contractor & Handyman Services in Dallas, Fort Worth, TX | Handyman At Home" },
      {
        property: "og:description",
        content:
          "For over two decades, Handyman At Home has been the trusted name for homeowners and businesses in Dallas, Fort Worth, TX, and beyond. Since 2001.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://handymanathometx.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://handymanathometx.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <CtaBanner />
        <Services />
        <Process />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
