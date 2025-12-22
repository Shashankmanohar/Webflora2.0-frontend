import React from "react";
import About from "@/Components/About";
import DotGrid from "@/Components/DotGrid";
import Footer from "@/Components/FooterSection";
import Header from "@/Components/Header";
import ProjectComp from "@/Components/ProjectComp";

/* =========================
   PAGE-LEVEL SEO METADATA
========================= */

export const metadata = {
  title: "Web Development & Digital Solutions Company",
  description:
    "Webflora Technologies is a modern web development and digital solutions agency delivering high-performance websites, scalable applications, and premium user experiences — a complete one-stop solution for all business digital growth needs.",
  keywords: [
    "Web development",
    "Digital solutions",
    "Next.js websites",
    "React development",
    "Tailwind CSS",
    "Framer Motion animations",
    "Website design",
    "App development",
    "Patna web agency",
    "India digital agency"
  ],
  alternates: {
    canonical: "https://webfloratechnologies.com/",
  },
  openGraph: {
    title:
      "Webflora Technologies a complete and best Digital Solutions Company in Patna & India.",
    description:
      "We build blazing-fast websites and scalable digital products using modern technologies.",
    url: "https://webfloratechnologies.com/",
    type: "website",
    images: [
      {
        url: "/webflora-og.png",
        width: 1200,
        height: 630,
        alt: "Webflora Technologies Homepage",
      },
    ],
  },
};

/* =========================
   STRUCTURED DATA (JSON-LD)
========================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webflora Technologies",
  url: "https://webfloratechnologies.com",
  logo: "https://webfloratechnologies.com/logo.png",
  description:
    "Webflora Technologies provides modern web development, scalable applications, and digital solutions for growing businesses.",
  sameAs: [
    "https://www.linkedin.com/company/webflora-technologies",
    "https://www.instagram.com/webfloratech",
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
      </main>

      {/* =========================
          ABOUT SECTION
      ========================= */}
      <section className="py-20" aria-labelledby="about-heading">
        <h2 id="about-heading" className="sr-only">
          About Webflora Technologies
        </h2>
        <About />
      </section>

      {/* =========================
          PROJECTS / WORK SECTION
      ========================= */}
      <section
        className="py-20 lg:px-40 md:px-20 px-5"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="sr-only">
          Our Projects and Case Studies
        </h2>
        <ProjectComp />
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
