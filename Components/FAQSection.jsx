"use client";
import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What technologies do you use for website development?",
            answer:
                "We primarily use Next.js and React for building high-performance, SEO-friendly, and scalable websites. For styling, we use Tailwind CSS, and for animations, we leverage Framer Motion to create immersive user experiences.",
        },
        {
            question: "Can you build custom ERP software for my business?",
            answer:
                "Yes! We specialize in building custom ERP (Enterprise Resource Planning) solutions tailored to your specific business workflows. whether you need inventory management, HRMS, billing systems, or end-to-end automation, we build it from scratch to fit your needs perfectly.",
        },
        {
            question: "Do you develop mobile applications for both Android and iOS?",
            answer:
                "Absolutely. We develop cross-platform mobile applications using modern frameworks that work seamlessly on both Android and iOS devices. This ensures a consistent user experience and faster time-to-market for your app.",
        },
        {
            question: "How does your digital marketing help my business grow?",
            answer:
                "Our digital marketing strategies are data-driven. We focus on SEO to improve your organic ranking, targeted PPC campaigns for immediate leads, and Social Media Marketing to build brand authority. We don't just bring traffic; we focus on conversion and ROI.",
        },
        {
            question: "What is the typical timeline for a project?",
            answer:
                "Timelines depend on the project scope. A standard business website takes 1-2 weeks, while complex custom software or mobile apps can take 4-8 weeks. We provide a detailed roadmap and milestone breakdown during our initial consultation.",
        },
        {
            question: "Do you provide support after the project is live?",
            answer:
                "Yes, we offer dedicated support and maintenance packages. From server monitoring and bug fixes to feature updates and security patches, we ensure your digital assets continue to run smoothly long after launch.",
        },
    ];

    return (
        <section className="bg-black text-white w-full py-20 px-4 md:px-10 lg:px-20 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* LEFT SIDE: Heading */}
                    <div className="flex flex-col justify-start">
                        <p className="text-orange-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm font-sans">
                            FAQ
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-boldonse uppercase leading-tight">
                            Common <br /> <span className="text-stroke">Questions</span>
                        </h2>
                        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-md">
                            Everything you need to know about working with Webflora Technologies.
                        </p>
                    </div>

                    {/* RIGHT SIDE: Accordion */}
                    <div className="flex flex-col">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-zinc-700 last:border-none"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                                >
                                    <span className="text-lg md:text-2xl font-boldonse tracking-wide uppercase group-hover:text-orange-600 transition-colors duration-300 pr-4">
                                        {faq.question}
                                    </span>
                                    <span className="text-orange-600 flex-shrink-0">
                                        {openIndex === index ? (
                                            <FiMinus className="w-6 h-6 md:w-8 md:h-8" />
                                        ) : (
                                            <FiPlus className="w-6 h-6 md:w-8 md:h-8" />
                                        )}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="pb-6 text-base md:text-lg text-gray-300 leading-relaxed font-sans">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
