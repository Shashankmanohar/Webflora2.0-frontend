"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pRefs = useRef([]);

  useEffect(() => {
    pRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          clipPath: "inset(0 100% 0 0)", // left se right fill
          opacity: 0.4,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full mx-auto border-t-2 rounded-t-2xl bg-black border-white relative z-10 bottom-10">
      <div className="mt-5 lg:pl-40 md:pl-10 pl-10">
        <h1 className="text-5xl lg:text-8xl md:text-7xl xs:text-4xl leading-16 md:leading-26 lg:leading-32 bg-black px-1 py-5 ">
          We are <span className="text-orange-600">Webflora</span> the{" "}
          <span className="text-orange-600">Creative Company</span>.
        </h1>
      </div>

      <div className="w-[150px] lg:w-2xl h-2 mx-auto bg-orange-600 mt-10"></div>

      <div className="mt-5 lg:pl-40 md:pl-10 pl-10">
        <h1 className="text-5xl lg:text-7xl px-1 py-5">
          Who We <span className="text-orange-600">are..</span>
        </h1>

        <p
          ref={(el) => (pRefs.current[0] = el)}
          className="px-1 py-4 text-lg md:text-4xl lg:text-4xl leading-12 md:leading-13 lg:leading-17 text-gray-400"
          style={{ WebkitClipPath: "inset(0 100% 0 0)" }}
        >
          at <span className="text-orange-600">webflora</span>, Our journey began
          with a vision to transform how brands connect with their audiences,
          and we've grown into a team of forward-thinkers and industry
          disruptors. We blend passion with expertise to craft remarkable
          digital experiences but exceed expectations, driven by a shared goal
          to make an impact through innovation and design
          <span className="text-orange-600">.</span>
        </p>

        <h1 className="text-5xl lg:text-7xl px-1 py-5 leading-15 mt-15">
          about the <span className="text-orange-600">brand</span>
        </h1>

        <p
          ref={(el) => (pRefs.current[1] = el)}
          className="px-1 py-5 text-lg md:text-4xl lg:text-4xl leading-12 md:leading-13 lg:leading-17 text-gray-400"
          style={{ WebkitClipPath: "inset(0 100% 0 0)" }}
        >
          at <span className="text-orange-600">webflora</span>, we are a dynamic
          team of creative visionaries and strategic thinkers dedicated to
          pushing boundaries and delivering exceptional results. We thrive on
          collaboration, affiliate, embracing challenges with enthusiasm and a
          commitment to crafting solutions that resonate and inspire creativity.
        </p>
      </div>
      <div className="w-1/2 mx-auto bg-orange-600 h-1 mt-30"></div>
    </div>
  );
};

export default About;
