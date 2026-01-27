"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "01",
        title: "Discovery",
        description:
            "We dive deep into your goals, audience, and market to build a solid strategy.",
    },
    {
        id: "02",
        title: "Design",
        description:
            "We craft intuitive, high-impact visuals that align with your brand identity.",
    },
    {
        id: "03",
        title: "Development",
        description:
            "We build utilizing the latest tech for speed, security, and scalability.",
    },
    {
        id: "04",
        title: "Launch & Growth",
        description:
            "We deploy with precision and help you scale through data-driven insights.",
    },
];

const ProcessSection = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        gsap.fromTo(
            ".process-card",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section ref={scrollRef} className="w-full bg-black text-white py-20 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center">
                    Our <span className="text-orange-600">Process</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="process-card p-6 border border-gray-800 rounded-2xl hover:border-orange-600 transition-colors duration-300 group"
                        >
                            <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-black group-hover:from-orange-600 group-hover:to-orange-900 transition-all duration-300">
                                {step.id}
                            </span>
                            <h3 className="text-2xl font-bold mt-4 mb-3 text-white">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
