"use client";
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Services by Webflora Technologies",
  description: "End-to-end digital services including website development, application development, ERP systems, automation, and digital marketing.",
  itemListOrder: "http://schema.org/ItemListOrderAscending",
  itemListElement: [
    { "@type": "Service", position: 1, name: "Website Development", description: "High-performance, fast-loading, scalable websites.", areaServed: "IN", provider: { "@type": "Organization", name: "Webflora Technologies" } },
    { "@type": "Service", position: 2, name: "Application Development", description: "Custom web and mobile applications.", areaServed: "IN", provider: { "@type": "Organization", name: "Webflora Technologies" } },
    { "@type": "Service", position: 3, name: "ERP Software Solutions", description: "Integrated ERP systems.", areaServed: "IN", provider: { "@type": "Organization", name: "Webflora Technologies" } },
    { "@type": "Service", position: 4, name: "Digital Marketing", description: "Performance-driven digital marketing.", areaServed: "IN", provider: { "@type": "Organization", name: "Webflora Technologies" } },
    { "@type": "Service", position: 5, name: "Automation Solutions", description: "Business process automation.", areaServed: "IN", provider: { "@type": "Organization", name: "Webflora Technologies" } }
  ]
};

const servicesData = [
  { id: 1, title: "Website Development", description: "We build fast, stable websites with sharp UI and clean code. Every site loads quick, works smooth, and stays reliable long term.", image: "/website2.png" },
  { id: 2, title: "Application Development", description: "We build fast, stable apps with sharp interfaces and clean code. Every app runs smooth, scales well, and stays reliable long term.", image: "/AppDev.png" },
  { id: 3, title: "ERP Softwares", description: "We build efficient, stable ERP systems with clear interfaces and solid architecture. Each system runs smooth, integrates well, and stays reliable for long-term business operations.", image: "/ERPSys.png" },
  { id: 4, title: "Digital Marketing", description: "We create precise campaigns that reach the right audience and drive measurable outcomes. Strategy stays direct, execution stays optimized.", image: "/digital.png" },
  { id: 5, title: "Automation", description: "Automation turns repetitive tasks into system-driven routines, increasing speed, reducing errors, and keeping workflows running smoothly without manual effort.", image: "/digital.png" }
];

const ServicesCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + servicesData.length) % servicesData.length);

    // Center card
    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0%) scale(1.1)',
        opacity: 1,
        zIndex: 30,
      };
    }
    // Right card
    else if (normalizedDiff === 1) {
      return {
        transform: 'translateX(60%) scale(0.85)',
        opacity: 0.5,
        zIndex: 20,
      };
    }
    // Left card
    else if (normalizedDiff === servicesData.length - 1) {
      return {
        transform: 'translateX(-60%) scale(0.85)',
        opacity: 0.5,
        zIndex: 20,
      };
    }
    // Hidden cards
    else {
      return {
        transform: 'translateX(0%) scale(0.7)',
        opacity: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section aria-label="Digital services offered by Webflora Technologies" className="relative py-16">
        <h2 className="lg:text-7xl md:text-4xl text-4xl leading-14 w-full text-center mb-12 font-bold">
          Our <span className="text-orange-600">Services</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12 -mt-8">
          Comprehensive digital solutions designed to scale your business.
        </p>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Carousel Container */}
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Cards */}
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              {servicesData.map((item, index) => (
                <div
                  key={item.id}
                  className="absolute transition-all duration-700 ease-out"
                  style={getCardStyle(index)}
                  role="listitem"
                >
                  <CardContainer className="group w-[350px] border-2 border-orange-600 rounded-2xl shadow-2xl shadow-orange-600/30 overflow-hidden">
                    <CardBody className="bg-black text-white h-full p-6">
                      <CardItem translateZ={80} className="mb-4 rounded-xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`${item.title} by Webflora Technologies`}
                          width={800}
                          height={500}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      </CardItem>
                      <CardItem
                        translateZ={60}
                        className="text-xl font-bold mb-3 text-orange-600 tracking-wider leading-tight lg:text-white lg:bg-gradient-to-r lg:from-orange-500 lg:via-orange-600 lg:to-pink-600 lg:bg-[length:0%_100%] lg:bg-left lg:bg-no-repeat lg:bg-clip-text lg:transition-all lg:duration-[1200ms] lg:ease-[cubic-bezier(0.22,0.61,0.36,1)] lg:group-hover:text-transparent lg:group-hover:bg-[length:200%_100%] lg:drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] lg:group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]"
                      >
                        {item.title}
                      </CardItem>
                      <CardItem translateZ={40} className="text-gray-300 text-sm leading-relaxed text-justify mb-4">
                        {item.description}
                      </CardItem>
                      <div className="flex items-center justify-center pt-2">
                        <CardItem translateZ={30} className="pointer-events-auto w-full">
                          <a
                            href="/contact"
                            className="block text-center px-4 py-2 bg-orange-600 text-black text-sm rounded-full font-medium hover:bg-gray-200 transition active:scale-95 transition-transform duration-200"
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

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-40 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full transition-all shadow-xl hover:scale-110 active:scale-90"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 z-40 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full transition-all shadow-xl hover:scale-110 active:scale-90"
              aria-label="Next service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {servicesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Text */}
          <div className="flex justify-center items-center gap-8 mt-6">
            <button
              onClick={handlePrev}
              className="text-orange-600 hover:text-orange-500 font-medium transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button
              onClick={handleNext}
              className="text-orange-600 hover:text-orange-500 font-medium transition flex items-center gap-2"
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
