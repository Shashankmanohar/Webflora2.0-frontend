"use client";
import BlurText from "@/Components/BlurText";
import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";

const Header = () => {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col items-center justify-center backdrop-blur-xs bg-orange-00/20 border border-orange-500/10 pt-24 pb-16 px-4">
        <BlurText
          text="Webflora"
          delay={150}
          animateBy="letter"
          direction="top"
          className="text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[13rem] lg:mb-0 lg:leading-none text-center font-bold tracking-wide text-white"
        />
        <BlurText
          text="Technologies"
          delay={150}
          animateBy="letters"
          direction="top"
          className="text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[13rem] mb-7 lg:mt-0 lg:leading-none text-center font-bold tracking-wide text-white"
        />
        <h1 className="animate-slideUp text-base md:text-xl lg:text-3xl xl:text-4xl mt-2 lg:mt-10 max-w-4xl px-4 text-center tracking-wider leading-relaxed md:leading-relaxed font-bold">
          A <span className="bg-orange-600 lg:px-4 px-2 rounded-full">One</span>{" "}
          Stop Digital Solution for All Your Business{" "}
          <span className="bg-orange-600 lg:px-4 px-2 rounded-full">Need</span>.
        </h1>
        <div
          href="call"
          className="lg:hidden mt-10 flex items-center text-center gap-3 px-5 rounded-full py-3 border-orange-600 border bg-black text-orange-600 whitespace-nowrap"
        >
          <a href="tel:+918863081255" className="hover:scale-110 duration-200 transition">
            Call us <SlScreenSmartphone className="inline text-3xl font-bold" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
