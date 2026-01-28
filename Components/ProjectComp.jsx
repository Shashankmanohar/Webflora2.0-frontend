"use client";
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "DBM Vidya Mandir",
    description: "Designed by us to present the school's vibrant activities, standout events, and energetic campus spirit through a modern, engaging digital experience.",
    image: "/image1.png",
    link: "https://www.dbmvidyamandir.com/"
  },
  {
    id: 2,
    title: "Team Excellent Career Institute",
    description: "Designed by us to highlight Team Excellent Career Institute's key courses, achievements, and academic excellence with a modern, student-focused layout.",
    image: "/imag2.png",
    link: "https://teamexcellentcareerinstitute.in/"
  },
  {
    id: 3,
    title: "Vidya Bharti School",
    description: "A modern school website designed to showcase infrastructure, facilities, admissions process, and academic excellence with a clean and trustworthy layout.",
    image: "/image3.png",
    link: "https://vidyabhartischoolbihar.in/"
  },
  {
    id: 4,
    title: "Ojal Premium Quality Store",
    description: "An elegant e-commerce website crafted to highlight premium handcrafted crockery collections with a luxurious, minimal, and user-friendly design.",
    image: "/image4.png",
    link: "https://ojal.store/"
  }
];

const ProjectComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + projectsData.length) % projectsData.length);

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
    else if (normalizedDiff === projectsData.length - 1) {
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
    <div className="relative pt-32">
      <h1 className="lg:text-7xl md:text-4xl text-4xl leading-14 w-full text-center mb-4" id="work">
        The <span className="text-orange-600">Work</span> That Defines{" "}
        <span className="text-orange-600">Us</span>
      </h1>
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
          {/* Cards */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="absolute transition-all duration-700 ease-out"
                style={getCardStyle(index)}
              >
                <CardContainer className="group w-[350px] border-2 border-orange-600 rounded-2xl shadow-2xl shadow-orange-600/30 overflow-hidden">
                  <CardBody className="bg-black text-white h-full p-6">
                    <CardItem translateZ={80} className="mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </CardItem>

                    <CardItem translateZ={60} className="text-xl font-semibold mb-3 leading-tight">
                      {project.title}
                    </CardItem>

                    <CardItem translateZ={40} className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </CardItem>

                    <div className="flex items-center justify-center pt-2">
                      <CardItem translateZ={30} className="pointer-events-auto w-full">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center px-4 py-2 bg-orange-600 text-black text-sm rounded-full font-medium hover:bg-gray-200 transition"
                        >
                          Visit Website
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
            className="absolute left-4 z-40 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full transition-all shadow-xl hover:scale-110"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 z-40 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full transition-all shadow-xl hover:scale-110"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              aria-label={`Go to project ${index + 1}`}
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

        {/* Mobile Swipe Hint */}
        <p className="md:hidden text-center text-zinc-500 text-xs mt-4 animate-pulse">
          Swipe or tap arrows to explore
        </p>
      </div>
    </div>
  );
};

export default ProjectComp;
