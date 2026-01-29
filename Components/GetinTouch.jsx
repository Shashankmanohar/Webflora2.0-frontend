"use client";
import Link from "next/link";
import React from "react";
const GetinTouch = () => {

  return (
    <div className="fixed z-50 bottom-24 left-4 sm:bottom-28 sm:left-8 lg:bottom-32 lg:left-12">
      <Link
        href="/contact"
        aria-label="Get in touch"
        className="group relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 animate-pulse bg-orange-600 rounded-full flex items-center justify-center overflow-hidden transform transition-transform hover:scale-105 shrink-0"
      >
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transform transition-transform duration-300 ease-out">
          {" "}
        </div>
        <span className="relative z-10 font-boldonse text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs text-black uppercase text-center leading-tight">
          Get In
          <br />
          Touch
        </span>
      </Link>
    </div>
  );
};

export default GetinTouch;
