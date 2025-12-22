import Footer from "@/Components/FooterSection";
import ServicesCard from "@/Components/ServicesCard";
import React from "react";

/* =========================
   PAGE LEVEL SEO METADATA
========================= */
export const metadata = {
  title:
    "Digital Services for Business Growth | Webflora Technologies | Patna & India",
  description:
    "Webflora Technologies is a one-stop end-to-end digital services company based in Patna, India, delivering websites, applications, automation, branding, and scalable technology solutions required for business growth.",
  keywords: [
    "Digital services",
    "Website development",
    "Application development",
    "ERP systems",
    "Automation solutions",
    "Digital marketing",
    "Business growth",
    "Patna tech company",
    "India digital agency",
    "Webflora services"
  ],
  alternates: {
    canonical: "https://webfloratechnologies.com/services",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title:
      "End-to-End Digital Services for Business Growth | Webflora Technologies",
    description:
      "Complete digital services required for businesses to grow — from digital assets to scalable systems.",
    url: "https://webfloratechnologies.com/services",
    siteName: "Webflora Technologies",
    type: "website",
    locale: "en_IN",
  },
};

/* =========================
   STRUCTURED DATA
========================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webflora Technologies",
  url: "https://webfloratechnologies.com",
  description:
    "Webflora Technologies is a one-stop end-to-end digital services company providing complete digital solutions for business growth.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  areaServed: ["Patna", "Bihar", "India"],
};

const Page = () => {
  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main aria-labelledby="services-hero-heading">
        {/* HERO SECTION */}
        <div className="relative w-full h-screen bg-gradient-to-tr from-[#ff5900] via-black/90 to-[#ff4d01] pt-24 md:pt-32 lg:pt-40 px-6 sm:px-10">
          <h1
            id="services-hero-heading"
            className="text-6xl sm:text-5xl md:text-[12vw] lg:text-[12vw] xl:text-[7.2vw] leading-[1.4] md:leading-[1.3] lg:leading-[1.4] text-left relative top-6 md:top-10 lg:top-6 lg:left-40"
          >
            We Build <span className="text-stroke">Digital</span>
            <br />
            <span className="text-stroke">Assets</span> That
            <span className="text-orange-600"> Drive </span>
            <br />
            <span className="text-orange-600">Growth</span>
          </h1>
        </div>

        {/* SERVICES SECTION */}
        <section
          className="w-full h-screen relative bottom-3 xs:bottom-10 md:bottom-29 lg:bottom-29 bg-black border-t-2 border-orange-600 rounded-xl px-6 md:px-20 lg:px-40"
          aria-labelledby="services-section-heading"
        >
          {/* H2 (STYLE SAME AS BEFORE) */}
          <h2
            id="services-section-heading"
            className="w-full relative top-25 text-center text-6xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-[1.2] lg:leading-[1.3] px-6 md:px-10 py-6 "
          >
            What we are
            <span className="text-orange-600 text-stroke-hover select-none">
              {" "}
              good
            </span>{" "}
            at.
          </h2>

          <p className="text-xl relative top-23 mb-10 md:text-4xl lg:text-3xl leading-9 md:leading-15 lg:leading-16 text-center text-gray-400 mt-1 md:mt-6 lg:mt-5 font-extralight">
            We <span className="text-white">Transform</span> Your Vision Into a
            High-Performing Digital Reality.
          </p>

          <ServicesCard />
        </section>

        <footer className="relative top-100">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Page;
