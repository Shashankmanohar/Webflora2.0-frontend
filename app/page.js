import React from "react";
import About from "@/Components/About";
import DotGrid from "@/Components/DotGrid";
import Footer from "@/Components/FooterSection";
import Header from "@/Components/Header";
import ProjectComp from "@/Components/ProjectComp";
import ServicesCard from "@/Components/ServicesCard";
import ProcessSection from "@/Components/ProcessSection";
import TrustBadges from "@/Components/TrustBadges";
import FAQSection from "@/Components/FAQSection";
import TechStackMarquee from "@/Components/TechStackMarquee";


/* =========================
   PAGE-LEVEL SEO METADATA
========================= */

export const metadata = {
  title: "Best Software & Web Development Company in Patna | Webflora Technologies",
  description:
    "Webflora Technologies is a leading software and web development company in Patna, India. We build custom software, SaaS products, high-performance websites, and scalable digital solutions to grow your business.",
  keywords: [
    "Software development company in Patna",
    "Best software agency Bihar",
    "Custom software solutions",
    "Web development company in Patna",
    "SaaS product development",
    "School management software",
    "Billing software development",
    "App development company Bihar",
    "Digital marketing agency Patna",
    "Webflora Technologies"
  ],
  alternates: {
    canonical: "https://webfloratechnologies.com/",
  },
  openGraph: {
    title:
      "Best Software & Web Development Company in Patna | Webflora Technologies",
    description:
      "We build custom software, scalable apps, and blazing-fast websites using modern technologies.",
    url: "https://webfloratechnologies.com/",
    type: "website",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    images: [
      {
        url: "/webflora-og.png",
        width: 1200,
        height: 630,
        alt: "Webflora Technologies Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webflora Technologies | Best Software & Web Agency",
    description: "Building the future of software and digital business in Patna & India.",
    images: ["/webflora-og.png"],
  },
};

/* =========================
   STRUCTURED DATA (JSON-LD)
========================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Webflora Technologies",
  url: "https://webfloratechnologies.com",
  logo: "https://webfloratechnologies.com/logo.png",
  image: "https://webfloratechnologies.com/webflora-og.png",
  description:
    "Webflora Technologies is a premier software and web development company in Patna, providing custom software, apps, and complete digital growth services.",
  telephone: "+918863081255",
  email: "webfloratechnologies@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.5941,
    longitude: 85.1376,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.linkedin.com/company/webflora-technologies",
    "https://www.instagram.com/webfloratech",
    "https://twitter.com/company/webfloratechnologies",
  ],
};

export default function Page() {
  return (
    <>
      {/* ===== Structured Data Injection ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================
          HERO / HEADER SECTION
      ========================= */}
      <main
        className="relative w-full min-h-screen overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* SEO H1 (screen-reader visible, layout-safe) */}
        <h1 id="hero-heading" className="sr-only">
          Web Development and Digital Solutions by Webflora Technologies
        </h1>

        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <DotGrid
            dotSize={10}
            gap={15}
            baseColor="#661414"
            activeColor="#ffb800"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <Header />
        <TechStackMarquee />
      </main>

      {/* =========================
          SERVICES SECTION
          (Moved below hero for immediate visibility)
      ========================= */}
      <section className="py-20" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Our Digital Services
        </h2>
        <ServicesCard />
      </section>

      {/* =========================
          PROCESS SECTION
      ========================= */}
      <ProcessSection />

      {/* =========================
          TRUST BADGES
      ========================= */}
      <TrustBadges />

      {/* =========================
          FAQ SECTION
      ========================= */}
      <FAQSection />





      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
