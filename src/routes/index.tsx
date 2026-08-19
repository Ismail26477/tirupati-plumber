import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import {
  About,
  Contact,
  CtaBanner,
  Footer,
  Hero,
  Process,
  Services,
  WhyUs,
} from "@/components/site/Sections";
import { Reviews } from "@/components/site/Reviews";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Shri Tirupati Plumbing Contractor | Reliable Plumbing Services";
const DESC =
  "Shri Tirupati Plumbing Contractor by Bandu S. Pathe offers plumbing installation, pipe fitting, bathroom plumbing, leakage and drainage solutions. Call 9766677051.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "plumbing contractor, plumber near me, pipe fitting, pipe repair, bathroom plumbing, water leakage solution, drainage blockage, Shri Tirupati Plumbing Contractor",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          name: "Shri Tirupati Plumbing Contractor",
          telephone: "+91-9766677051",
          email: "vaibhavpathe060@gmail.com",
          founder: "Bandu S. Pathe",
          description: DESC,
          areaServed: "India",
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Reviews />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
