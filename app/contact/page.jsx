import React from "react";
import ContactPage from "../../Components/ContactPage";
import Footer from "@/Components/FooterSection";
/* =========================
   PAGE LEVEL SEO METADATA
   (Company, not agency)
========================= */
export const metadata = {
  title:
    "Contact Webflora | Hire Best Web Developers in Patna & India",
  description:
    "Ready to grow? Contact Webflora Technologies for top-rated web development, app creation, and digital marketing services in Patna. Get a free quote today.",
  keywords: [
    "Contact Webflora Technologies",
    "Hire web developers Patna",
    "App development cost India",
    "Digital marketing enquiry",
    "Website design quote",
    "Software company contact number",
    "Best tech support Patna",
    "Start a project"
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
      "Get in Touch | Webflora Technologies Patna",
    description:
      "Let's discuss your project. We transform ideas into scalable digital reality. Call or Email us now.",
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
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Webflora Technologies",
    telephone: "+918863081255",
    email: "webfloratechnologies@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
  },
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
        className="w-full min-h-screen"
        aria-labelledby="contact-page-heading"
      >
        {/* SEO H1 (SCREEN-READER ONLY, NO DESIGN IMPACT) */}
        <h1 id="contact-page-heading" className="sr-only">
          Contact Webflora Technologies – End-to-End Digital Services Company
        </h1>

        <div className="lg:max-w-7xl mx-auto min-h-screen">
          <ContactPage />
        </div>
      </main>
      <footer className="mt-20">
        <Footer />
      </footer>
    </>
  );
};

export default Page;
