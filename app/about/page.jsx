import Footer from "@/Components/FooterSection";
import About from "@/Components/About";
import React from "react";

/* =========================
   PAGE LEVEL SEO METADATA
   (Company, not agency)
========================= */
export const metadata = {
  title:
    "About Webflora Technologies | Visionary Tech Partners in Patna & India",
  description:
    "Learn about Webflora Technologies - a team of innovators building the future of digital business in Patna. Driven by Design, Novelty & Technology.",
  keywords: [
    "Webflora Technologies profile",
    "Digital agency Patna team",
    "About Webflora",
    "Web development company history",
    "Tech startups in Bihar",
    "Digital transformation partners",
    "Software company vision",
    "Patna IT services"
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
      "About Webflora: Driven by Design, Novelty & Tech",
    description:
      "We are more than just developers; we are your growth partners. Discover our mission to revolutionize the digital landscape in India.",
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
  logo: "https://webfloratechnologies.com/logo.png",
  description:
    "Webflora Technologies is an end-to-end digital services company in Patna driven by design and technology innovation.",
  email: "webfloratechnologies@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/webflora-technologies",
    "https://www.instagram.com/webfloratech",
    "https://twitter.com/company/webfloratechnologies"
  ],
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
        className="w-full min-h-screen bg-gradient-to-tr from-orange-500 via-red-700/80 to-black text-white px-6 sm:px-10 pb-32"
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
          MISSION & VISION
      ========================= */}
      <About />

      {/* =========================
          FOOTER (UNCHANGED)
      ========================= */}
      <Footer />
    </>
  );
};

export default AboutPage;
