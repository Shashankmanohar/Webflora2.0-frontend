"use client";
import React from "react";
import { FaCheckCircle, FaUsers, FaAward, FaClock } from "react-icons/fa";

const TrustBadges = () => {
    const badges = [
        {
            icon: <FaCheckCircle className="text-4xl md:text-5xl" />,
            title: "100% Satisfaction",
            description: "Guaranteed quality or money back",
        },
        {
            icon: <FaUsers className="text-4xl md:text-5xl" />,
            title: "100+ Happy Clients",
            description: "Trusted by businesses across India",
        },
        {
            icon: <FaAward className="text-4xl md:text-5xl" />,
            title: "12 Years Experience",
            description: "Combined team expertise",
        },
        {
            icon: <FaClock className="text-4xl md:text-5xl" />,
            title: "24hr Response Time",
            description: "Quick turnaround guaranteed",
        },
    ];

    return (
        <section className="w-full bg-zinc-950 border-y border-zinc-800 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-orange-600 mb-3 group-hover:text-white transition-colors">
                                {badge.icon}
                            </div>
                            <h3 className="text-white font-bold text-sm md:text-base mb-1 uppercase tracking-wide">
                                {badge.title}
                            </h3>
                            <p className="text-zinc-500 text-xs md:text-sm">
                                {badge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
