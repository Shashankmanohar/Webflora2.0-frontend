import Footer from "@/Components/FooterSection";
import ProjectComp from "@/Components/ProjectComp";
import ServicesCard from "@/Components/ServicesCard";
import ProcessSection from "@/Components/ProcessSection";
import React from "react";

/* =========================
   PAGE LEVEL SEO METADATA
========================= */
export const metadata = {
  title:
    "Software & Digital Services: Web, App, SaaS & Marketing | Webflora Patna",
  description:
    "Webflora Technologies offers top-tier software services in Patna: Custom Software Development, SaaS Products, Mobile Apps, ERP Systems, and ROI-driven Digital Marketing.",
  keywords: [
    "Software development services Patna",
    "SaaS product development",
    "Custom CRM software",
    "School management system",
    "Website development services Patna",
    "Best app developers in Bihar",
    "ERP software company Patna",
    "Business automation solutions",
    "Digital marketing services India"
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
      "Webflora Services: Software, Web, App & Marketing Solutions",
    description:
      "Transform your business with our end-to-end software solutions. From custom SaaS to complex ERPs, we build it all.",
    url: "https://webfloratechnologies.com/services",
    siteName: "Webflora Technologies",
    type: "website",
    locale: "en_IN",
  },
};

/* =========================
   STRUCTURED DATA (ITEM LIST)
========================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Website Development",
      description: "High-performance, SEO-friendly custom websites.",
      provider: {
        "@type": "LocalBusiness",
        name: "Webflora Technologies",
      },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Application Development",
      description: "Scalable mobile and web applications (Android/iOS).",
      provider: {
        "@type": "LocalBusiness",
        name: "Webflora Technologies",
      },
    },
    {
      "@type": "Service",
      position: 3,
      name: "ERP Systems",
      description: "Custom ERP solutions for business management.",
      provider: {
        "@type": "LocalBusiness",
        name: "Webflora Technologies",
      },
    },
    {
      "@type": "Service",
      position: 4,
      name: "Digital Marketing",
      description: "Result-oriented SEO, SMM, and PPC campaigns.",
      provider: {
        "@type": "LocalBusiness",
        name: "Webflora Technologies",
      },
    },
  ],
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
        {/* HERO SECTION */}
        <div className="relative w-full min-h-screen bg-gradient-to-tr from-[#ff5900] via-black/90 to-[#ff4d01] pt-24 md:pt-32 lg:pt-40 px-6 sm:px-10 pb-40">
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

        {/* SERVICES CAROUSEL */}
        <div className="relative z-10 bg-black pt-10">
          <ServicesCard />
        </div>

        {/* PROCESS SECTION */}
        <ProcessSection />

        {/* WORK/PROJECTS SECTION */}
        <section
          className="w-full relative z-10 bg-black border-t-2 border-orange-600 rounded-xl px-6 md:px-20 lg:px-40 pb-20"
          aria-labelledby="services-section-heading"
        >
          <ProjectComp />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Page;
