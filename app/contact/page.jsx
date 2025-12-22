import React from "react";
import ContactPage from "../../Components/ContactPage";

/* =========================
   PAGE LEVEL SEO METADATA
   (Company, not agency)
========================= */
export const metadata = {
  title:
    "Contact Webflora Technologies | End-to-End Digital Services Company in Patna & India",
  description:
    "Get in touch with Webflora Technologies, an end-to-end digital services company based in Patna, India. We provide complete digital solutions required for business growth — from websites to scalable technology systems.",
  keywords: [
    "Contact Webflora",
    "Webflora Technologies",
    "Digital services contact",
    "Website inquiry",
    "App development inquiry",
    "Patna web agency",
    "India digital solutions",
    "Business growth contact",
    "Tech partner contact",
    "Web development contact"
  ],
  alternates: {
    canonical: "https://webfloratechnologies.com/contact",
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
      "Contact Webflora Technologies | One-Stop Digital Services Company",
    description:
      "Contact Webflora Technologies to discuss complete digital solutions for your business growth.",
    url: "https://webfloratechnologies.com/contact",
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
  "@type": "ContactPage",
  name: "Contact Webflora Technologies",
  url: "https://webfloratechnologies.com/contact",
  description:
    "Contact page for Webflora Technologies, an end-to-end digital services company providing complete solutions for business growth.",
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

      {/* =========================
          CONTACT SECTION
          (DESIGN UNCHANGED)
      ========================= */}
      <main
        className="w-full h-screen"
        aria-labelledby="contact-page-heading"
      >
        {/* SEO H1 (SCREEN-READER ONLY, NO DESIGN IMPACT) */}
        <h1 id="contact-page-heading" className="sr-only">
          Contact Webflora Technologies – End-to-End Digital Services Company
        </h1>

        <div className="lg:max-w-7xl mx-auto h-screen">
          <ContactPage />
        </div>
      </main>
    </>
  );
};

export default Page;
