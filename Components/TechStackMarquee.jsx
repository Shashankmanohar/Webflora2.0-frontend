"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiTailwindcss,
    SiFramer,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiPostgresql,
    SiVercel,
    SiGit,
    SiDocker,
    SiGreensock,
    SiSolidity,
    SiMysql,
    SiPostman
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const TechStackMarquee = () => {
    const marqueeRef = useRef(null);
    const animationRef = useRef(null);

    const techStack = [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Solidity", icon: SiSolidity, color: "#363636" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ];

    // Duplicate the tech stack for seamless infinite scroll
    const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        let currentX = 0;
        let direction = -1; // -1 for left, 1 for right
        let lastScrollY = window.scrollY;
        const speed = 1.5; // Constant speed

        // Create the animation loop
        const animate = () => {
            // Apply continuous movement in current direction
            currentX += direction * speed;

            // Wrap around for infinite scroll
            const wrapPoint = -marquee.scrollWidth / 3;
            if (currentX <= wrapPoint) {
                currentX = 0;
            } else if (currentX >= 0) {
                currentX = wrapPoint;
            }

            gsap.set(marquee, { x: currentX });
            animationRef.current = requestAnimationFrame(animate);
        };

        // Handle scroll for direction control
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollDelta = scrollY - lastScrollY;

            // Scroll UP (negative delta) = move LEFT (direction = -1)
            // Scroll DOWN (positive delta) = move RIGHT (direction = 1)
            if (scrollDelta < 0) {
                direction = -1; // Left
            } else if (scrollDelta > 0) {
                direction = 1; // Right
            }

            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        animate();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <section className="w-full bg-black py-12 overflow-hidden select-none">
            <div className="relative">
                <div
                    ref={marqueeRef}
                    className="flex gap-16 md:gap-20 lg:gap-24 whitespace-nowrap"
                    style={{ willChange: "transform" }}
                >
                    {duplicatedTechStack.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div
                                key={index}
                                className="inline-flex flex-col items-center justify-center gap-4 cursor-pointer group"
                            >
                                <Icon
                                    className="text-5xl md:text-6xl lg:text-7xl transition-all duration-300 group-hover:scale-110"
                                    style={{ color: '#F54A00' }}
                                />
                                <span className="text-xs md:text-sm font-semibold text-zinc-500 group-hover:text-orange-600 transition-colors duration-300 uppercase tracking-wider">
                                    {tech.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStackMarquee;

