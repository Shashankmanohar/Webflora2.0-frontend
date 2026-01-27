"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const GetinTouch = () => {
  const pathname = usePathname();

  // Hide on contact page
  if (pathname === "/contact") return null;

  return (
    <div className="fixed z-50 bottom-24 left-4 sm:bottom-28 sm:left-8 lg:bottom-32 lg:left-12">
      <Link
        href="/contact"
        aria-label="Get in touch"
        className="group relative w-15 h-15 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-20 lg:h-20 animate-pulse bg-orange-600 rounded-full flex items-center justify-center overflow-hidden transform transition-transform hover:scale-105 shrink-0"
      >
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transform transition-transform duration-300 ease-out">
          {" "}
        </div>
        <span className="relative z-10 font-boldonse text-[10px]  sm:text-base md:text-lg lg:text-xs text-black uppercase text-center leading-4">
          Get In
          <br />
          Touch
        </span>
      </Link>
    </div>
  );
};

export default GetinTouch;
