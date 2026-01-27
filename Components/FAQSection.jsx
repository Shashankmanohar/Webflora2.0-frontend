"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What services does Webflora Technologies offer?",
            answer:
                "We offer end-to-end digital services including Website Development, Application Development, ERP Software Solutions, Digital Marketing, and Business Automation. We're your one-stop solution for all digital needs.",
        },
        {
            question: "How long does it take to build a website?",
            answer:
                "Typically, a standard website takes 2-4 weeks, while complex applications can take 6-12 weeks. We'll provide you with a detailed timeline during our initial consultation based on your specific requirements.",
        },
        {
            question: "Do you provide ongoing support after project completion?",
            answer:
                "Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, updates, security patches, and technical support to ensure your digital assets run smoothly.",
        },
        {
            question: "What is your pricing structure?",
            answer:
                "Our pricing is project-based and depends on scope, complexity, and timeline. We offer flexible payment plans and provide detailed quotes after understanding your requirements. Contact us for a free consultation and quote.",
        },
        {
            question: "Can you work with clients outside Patna/India?",
            answer:
                "Absolutely! While we're based in Patna, we work with clients globally. We use modern collaboration tools and maintain clear communication throughout the project lifecycle.",
        },
        {
            question: "Do you offer custom solutions or use templates?",
            answer:
                "We create custom solutions tailored to your specific needs. While we may use frameworks and libraries for efficiency, every project is uniquely designed to match your brand and requirements.",
        },
        {
            question: "What technologies do you use?",
            answer:
                "We use modern, industry-standard technologies including Next.js, React, Node.js, MongoDB, and more. We choose the best tech stack based on your project requirements for optimal performance and scalability.",
        },
        {
            question: "How do I get started?",
            answer:
                "Simply fill out our contact form, call us at +918863081255, or message us on WhatsApp. We'll schedule a free consultation to discuss your project and provide you with a detailed proposal.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-black text-white py-20 px-6 md:px-20 lg:px-40">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-orange-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm animate-pulse">
                        Got Questions?
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Frequently Asked{" "}
                        <span className="text-orange-600">Questions</span>
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Find answers to common questions about our services, process, and
                        pricing.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/40 hover:border-orange-600/50 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="text-lg md:text-xl font-semibold pr-8 group-hover:text-orange-600 transition-colors">
                                    {faq.question}
                                </h3>
                                <span className="flex-shrink-0 text-orange-600 text-xl">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-zinc-400 mb-4">Still have questions?</p>
                    <a
                        href="/contact"
                        className="inline-block bg-orange-600 text-black font-bold px-8 py-4 rounded-full uppercase tracking-wider hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
