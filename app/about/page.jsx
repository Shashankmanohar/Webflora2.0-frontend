import Footer from "@/Components/FooterSection";
import React from "react";

/* =========================
   PAGE LEVEL SEO METADATA
   (Company, not agency)
========================= */
export const metadata = {
  title:
    "About Webflora Technologies | End-to-End Digital Services Company in Patna & India",
  description:
    "Webflora Technologies is an end-to-end digital services company based in Patna, India, providing complete solutions including websites, applications, automation, branding, and technology required for business growth.",
  keywords: [
    "Webflora Technologies",
    "About Webflora",
    "Digital services company",
    "End-to-end solutions",
    "Web development Patna",
    "India web agency",
    "Application development",
    "Automation solutions",
    "Branding and design",
    "Technology partner"
  ],
  alternates: {
    canonical: "https://webfloratechnologies.com/about",
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
      "Webflora Technologies | One-Stop End-to-End Digital Services Company",
    description:
      "A technology-driven company delivering complete digital solutions required for businesses to grow — from websites to scalable systems.",
    url: "https://webfloratechnologies.com/about",
    siteName: "Webflora Technologies",
    type: "website",
    locale: "en_IN",
  },
};

/* =========================
   STRUCTURED DATA (COMPANY)
========================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webflora Technologies",
  url: "https://webfloratechnologies.com",
  description:
    "Webflora Technologies is an end-to-end digital services company providing complete digital solutions required for business growth.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  areaServed: ["Patna", "Bihar", "India"],
};

const AboutPage = () => {
  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================
          HERO SECTION (UNCHANGED)
      ========================= */}
      <main
        className="w-full h-screen bg-gradient-to-tr from-orange-500 via-red-700/80 to-black text-white px-6 sm:px-10"
        aria-labelledby="about-hero-heading"
      >
        {/* SINGLE H1 — REQUIRED FOR SEO */}
        <h1
          id="about-hero-heading"
          className="lg:text-9xl  md:text-8xl text-[54px] lg:leading-50 md:leading-34 leading-20 pt-24 pl-5 lg:pt-43 lg:pl-40 "
        >
          We Are Driven <span className="text-orange-600">by</span> Design,{" "}
          <br />
          <span className="text-stroke3">Novelty </span>& Tech
        </h1>

        <div className="flex justify-center">
          <div className="flex justify-center">
            <button
              className="text-center px-4 py-2 md:px-7 bg-black text-orange-600 tracking-widest mt-4 rounded-full text-sm sm:text-base md:text-lg lg:hidden"
              aria-label="Call Webflora Technologies"
            >
              Call us
            </button>
          </div>
        </div>
      </main>

      {/* =========================
          ABOUT / STATS SECTION
          (DESIGN SAME, TAGS FIXED)
      ========================= */}
      <section
        className="w-full mx-auto h-screen bg-black border-t-1 border-white relative bottom-30 lg:bottom-11 md:bottom-37 rounded-t-4xl"
        aria-labelledby="about-section-heading"
      >
        <div className="lg:w-7xl md:w-2xl mx-auto h-50 relative top-25 ">
          {/* CHANGED h1 → h2 (STYLE SAME) */}
          <h2
            id="about-section-heading"
            className="text-6xl lg:text-9xl md:text-8xl px-5 pt-10 text-white"
          >
            About <span className="text-orange-600">us</span>.
          </h2>

          <div>
            <h3 className="lg:text-4xl md:text-3xl pl-5 pt-5 md:pl-5 md:pt-20 text-orange-600 leading-30">
              Number of
            </h3>
            <p className="lg:text-9xl text-5xl pl-5 lg:pl-4 md:text-6xl md:pl-5 relative bottom-9 lg:static md:static text-white">
              Projects <span className="text-stroke">:</span> 9
            </p>
          </div>

          <div className="">
            <h3 className="lg:text-4xl md:text-3xl pl-5 pt-5 md:pl-5 md:pt-20 text-orange-600 relative bottom-7">
              Years of
            </h3>
            <p className="lg:text-9xl text-[39px] pl-5 lg:pl-4 md:text-6xl md:pl-5 relative bottom-9 lg:static md:static leading-15 lg:leading-29 text-white">
              Experience <span className="text-stroke">:</span> 12
              <sup className="text-xs text-orange-600">combined</sup>
            </p>
          </div>

          <div>
            <h3 className="lg:text-4xl md:text-3xl pl-5 pt-5 md:pl-5 md:pt-20 text-orange-600 relative bottom-7">
              Number of
            </h3>
            <p className="lg:text-9xl text-[39px] pl-5 lg:pl-4 md:text-6xl md:pl-5 relative bottom-9 lg:static md:static leading-15 lg:leading-29 text-white">
              Brains <span className="text-stroke">:</span> 5
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER (UNCHANGED)
      ========================= */}
      <div className=" relative bottom-40 lg:top-96">
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
