"use client";
import BlurText from "@/Components/BlurText";
import React from "react";
import { SlScreenSmartphone } from "react-icons/sl";

const Header = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center backdrop-blur-xs bg-orange-00/20 border border-orange-500/10">
        <BlurText
          text="Webflora"
          delay={150}
          animateBy="letter"
          direction="top"
          className="text-4xl md:text-7xl xl:text-9xl lg:text-9xl mb-4 md:mb-8 lg:mb-14 text-center font-bold tracking-wide text-white"
        />
        <BlurText
          text="Technologies"
          delay={150}
          animateBy="letters"
          direction="top"
          className="text-4xl md:text-7xl xl:text-9xl lg:text-8xl  mb-7 text-center font-bold tracking-wide text-white"
        />
        <h1 className="animate-slideUp text-lg lg:text-4xl mt-2 lg:mt-10 w-fit text-center tracking-wider leading-11 md:leading-16">
          A <span className="bg-orange-600 lg:px-4 px-2 rounded-full">One</span>{" "}
          Stop Digital Solution for All Your Business{" "}
          <span className="bg-orange-600 lg:px-4 px-2 rounded-full">Need</span>.
        </h1>
        <div
          href="call"
          className="lg:hidden mt-10 flex items-center text-center gap-3 px-5 rounded-full py-3 border-orange-600 border bg-black text-orange-600 whitespace-nowrap"
        >
          <a href="tel:+918540814729" className="hover:scale-110 duration-200 transition">
            Call us <SlScreenSmartphone className="inline text-3xl font-bold" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
