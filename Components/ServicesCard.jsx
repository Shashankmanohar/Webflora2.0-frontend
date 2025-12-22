import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

/* =========================
   PAGE-AWARE STRUCTURED DATA
   (Services-focused, not generic)
========================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Services by Webflora Technologies",
  description:
    "End-to-end digital services including website development, application development, ERP systems, automation, and digital marketing provided by Webflora Technologies for business growth.",
  itemListOrder: "http://schema.org/ItemListOrderAscending",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Website Development",
      description:
        "High-performance, fast-loading, scalable websites built for long-term business growth.",
      areaServed: "IN",
      provider: {
        "@type": "Organization",
        name: "Webflora Technologies"
      }
    },
    {
      "@type": "Service",
      position: 2,
      name: "Application Development",
      description:
        "Custom web and mobile applications with scalable architecture and clean interfaces.",
      areaServed: "IN",
      provider: {
        "@type": "Organization",
        name: "Webflora Technologies"
      }
    },
    {
      "@type": "Service",
      position: 3,
      name: "ERP Software Solutions",
      description:
        "Integrated ERP systems designed to streamline operations and improve efficiency.",
      areaServed: "IN",
      provider: {
        "@type": "Organization",
        name: "Webflora Technologies"
      }
    },
    {
      "@type": "Service",
      position: 4,
      name: "Digital Marketing",
      description:
        "Performance-driven digital marketing strategies focused on measurable business outcomes.",
      areaServed: "IN",
      provider: {
        "@type": "Organization",
        name: "Webflora Technologies"
      }
    },
    {
      "@type": "Service",
      position: 5,
      name: "Automation Solutions",
      description:
        "Business process automation to reduce manual work and improve operational efficiency.",
      areaServed: "IN",
      provider: {
        "@type": "Organization",
        name: "Webflora Technologies"
      }
    }
  ]
};

/* ---- CARD DATA (UNCHANGED) ---- */
const servicesData = [
  {
    id: 1,
    title: "Website Development",
    description:
      "We build fast, stable websites with sharp UI and clean code. Every site loads quick, works smooth, and stays reliable long term.",
    image: "/website2.png"
  },
  {
    id: 2,
    title: "Application Development",
    description:
      "We build fast, stable apps with sharp interfaces and clean code. Every app runs smooth, scales well, and stays reliable long term.",
    image: "/AppDev.png"
  },
  {
    id: 3,
    title: "ERP Softwares",
    description:
      "We build efficient, stable ERP systems with clear interfaces and solid architecture. Each system runs smooth, integrates well, and stays reliable for long-term business operations.",
    image: "/ERPSys.png"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We create precise campaigns that reach the right audience and drive measurable outcomes. Strategy stays direct, execution stays optimized.",
    image: "/digital.png"
  },
  {
    id: 5,
    title: "Automation",
    description:
      "Automation turns repetitive tasks into system-driven routines, increasing speed, reducing errors, and keeping workflows running smoothly without manual effort.",
    image: "/digital.png"
  }
];

const ServicesCard = () => {
  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section aria-label="End-to-end digital services offered by Webflora Technologies">
        {/* SIDE ARROWS (DECORATIVE) */}
        <div className="flex justify-between gap-5 px-5" aria-hidden="true">
          <img
            src="/left.png"
            className="bg-orange-600 w-10 h-10 p-2 rounded-full relative top-10 shrink-0 md:hidden lg:block"
            alt=""
          />
          <img
            src="/right.png"
            className="bg-orange-600 w-10 h-10 p-2 rounded-full relative top-10 md:hidden lg:block"
            alt=""
          />
        </div>

        {/* CARDS */}
        <div
          className="card flex flex-nowrap overflow-x-auto gap-4 lg:flex-nowrap lg:overflow-x-auto"
          role="list"
        >
          {servicesData.map((item) => (
            <div key={item.id} role="listitem">
              <CardContainer
                className="group lg:w-[440px] w-90 h-fit border-1 border-orange-600 hover:rounded-3xl rounded-xl lg:pb-69 pb-71 shadow-gray-600 shadow-2xs"
              >
                <CardBody className="bg-black text-white rounded-3xl p-6">
                  {/* Image */}
                  <CardItem
                    translateZ={80}
                    className="mb-6 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} by Webflora Technologies`}
                      width={800}
                      height={500}
                      className="w-full h-52 object-cover rounded-xl"
                    />
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ={60}
                    className="text-2xl font-bold mb-3 text-orange-600 tracking-wider leading-10 lg:text-white lg:bg-gradient-to-r lg:from-orange-500 lg:via-orange-600 lg:to-pink-600 lg:bg-[length:0%_100%] lg:bg-left lg:bg-no-repeat lg:bg-clip-text lg:transition-all lg:duration-[1200ms] lg:ease-[cubic-bezier(0.22,0.61,0.36,1)] lg:group-hover:text-transparent lg:group-hover:bg-[length:200%_100%] lg:drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] lg:group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]"
                  >
                    {item.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    translateZ={40}
                    className="text-gray-300 text-justify"
                  >
                    {item.description}
                  </CardItem>

                  {/* CTA */}
                  <div className="flex items-center justify-between p-4">
                    <CardItem translateZ={30} className="pointer-events-auto">
                      <a
                        href="/contact"
                        className="px-4 py-2 bg-orange-600 text-black rounded-full font-medium hover:bg-gray-200 transition inline-block"
                        aria-label={`Book a consultation for ${item.title}`}
                      >
                        Book a call
                      </a>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
