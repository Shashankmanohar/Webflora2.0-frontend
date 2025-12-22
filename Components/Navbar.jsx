"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const sideMenuref = useRef();
  const pathname = usePathname();

  const openMenu = () => {
    sideMenuref.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuref.current.style.transform = "translateX(16rem)";
  };

  // Active link function
  const isActive = (path) =>
    pathname === path
      ? "text-orange-600 font-semibold"
      : "text-white";

  return (
    <>
      <nav className="w-full fixed z-50 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between lg:mt-10">
        {/* LOGO */}
        <a href="/">
          <Image
            width={200}
            height={10}
            alt="logo"
            src="/webflora-logo.svg"
            className="cursor-pointer mr-14"
          />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8  backdrop-blur-xs bg-orange-400/15 border border-orange-500/10 px-10 py-2 rounded-full whitespace-nowrap">
          <li><Link id="home" className={isActive("/")} href="/">Home</Link></li>
          <li><Link id="home" className={isActive("/about")} href="/about">About us</Link></li>
          <li><Link id="home" className={isActive("/services")} href="/services">Work <span className="text-white">&</span> Services</Link></li>
          <li><Link id="home" className={isActive("/contact")} href="/contact">Contact us.</Link></li>
        </ul>

        {/* CALL BUTTON (Desktop Only) */}
        <div className="md:hidden lg:flex">
          <div
            href="call"
            className="hidden lg:flex items-center text-center gap-3 px-8 rounded-full py-2 backdrop-blur-sm bg-orange-400/20 border border-orange-500/20 whitespace-nowrap">
            <a href="tel:+918540814729" className="hover:scale-110 duration-200 transition">
              Call us <SlScreenSmartphone className="inline text-3xl font-bold" />
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={openMenu}
          className="text-4xl font-bold mr-5 text-white block lg:hidden md:hidden xl:hidden"
        >
          <RxHamburgerMenu />
        </button>

        {/* MOBILE SIDE MENU */}
        <ul
          ref={sideMenuref}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen backdrop-blur-lg bg-orange-400/5 transition duration-500"
        >
          <div className="absolute right-10 top-12" onClick={closeMenu}>
            <button className="text-4xl text-white font-bold">
              <AiOutlineClose />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <ul className="flex flex-col gap-5">
            <li><Link className={isActive("/")} href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link className={isActive("/about")} href="/about" onClick={closeMenu}>About us</Link></li>
            <li><Link id="home" className={isActive("/services")} href="/services">Work <span className="text-white">&</span> Services</Link></li>
            <li><Link className={isActive("/contact")} href="/contact" onClick={closeMenu}>Contact us.</Link></li>

            <li>
              <a href="tel:+918540814729" className="bg-black px-4 text-lg py-3 border border-orange-600 text-orange-600 rounded-full text-center mt-5 w-full">
                Call us
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;