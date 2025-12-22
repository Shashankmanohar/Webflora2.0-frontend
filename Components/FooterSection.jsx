"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black w-full mx-auto text-white  overflow-hidden">
      <div className="w-1/2 mx-auto h-1 bg-orange-600"></div>
      {/* SECTION 1 */}
      <div className="w-full px-6 pt-20 pb-10 lg:px-12 border-b border-zinc-900 ">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col justify-start items-start">
            <p className="text-orange-600 font-bold tracking-[0.18em] uppercase mb-3 pl-1 animate-pulse text-xs sm:text-sm">
              Start The Revolution
            </p>

            <h1 className="font-boldonse text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-white hover:text-orange-600 transition-colors duration-500 cursor-default select-none">
              Let's Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">
                The Future
              </span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 md:mt-12 gap-6">
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-full md:max-w-xl leading-relaxed">
              We help ambitious brands scale with bold design and cutting-edge
              technology. Don't just compete—dominate.
            </p>

            <Link
              href="/contact"
              aria-label="Get in touch"
              className="group relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-orange-600 rounded-full flex items-center justify-center overflow-hidden transform transition-transform hover:scale-105 shrink-0"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transform transition-transform duration-300 ease-out"> </div>
              <span className="relative z-10 font-boldonse text-sm sm:text-base md:text-lg lg:text-2xl text-black uppercase text-center leading-none">
                Get In
                <br />
                Touch
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full px-6 py-12 lg:px-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Newsletter */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h3 className="font-boldonse text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wide">
              Newsletter
            </h3>

            <form
              className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2 w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-transparent border-b-2 border-zinc-800 py-3 text-sm md:text-base text-white placeholder-zinc-600 focus:outline-none focus:border-orange-600 transition-colors font-boldonse tracking-wider uppercase pl-1"
              />

              <button
                type="submit"
                className="w-full md:w-auto px-4 py-3 uppercase font-bold text-sm tracking-widest text-orange-600 border border-transparent hover:text-white hover:bg-orange-600 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.16em]">
                Sitemap
              </h4>
              <ul className="flex flex-col gap-2 ">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/services">Services</FooterLink>
                <FooterLink href="/#work">Work</FooterLink>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.16em]">
                Socials
              </h4>
              <ul className="flex flex-col gap-2">
                <FooterLink href="https://instagram.com/webflora.technologies/">
                  Instagram
                </FooterLink>
                <FooterLink href="https://twitter.com/company/webfloratechnologies">
                  Twitter
                </FooterLink>
                <FooterLink href="https://linkedin.com/webfloratechnologies">
                  LinkedIn
                </FooterLink>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-zinc-500 font-bold text-xs uppercase tracking-[0.16em]">
                Legal
              </h4>
              <ul className="flex flex-col gap-2">
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/terms">Terms of Service</FooterLink>
                <FooterLink href="/cookies">Cookie Policy</FooterLink>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-[90rem] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="font-boldonse text-xl sm:text-2xl md:text-3xl  tracking-wide text-white flex items-center gap-2">
            <h1>
              Webflora<span className="text-orange-600">.</span>Technologies
            </h1>
          </div>
          <p className="text-zinc-600 text-xs sm:text-sm uppercase tracking-wider font-medium text-center">
            © 2025 Webflora Technologies <br /> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href = "#", children }) => (
  <li>
    <Link
      href={href}
      className="text-sm sm:text-base md:text-sm font-boldonse text-zinc-400 uppercase tracking-wide hover:text-orange-600 hover:pl-2 transition-all duration-300 block "
    >
      {children}
    </Link>
  </li>
);

export default Footer;
