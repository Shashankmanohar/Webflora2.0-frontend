"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-50 bg-orange-600 hover:bg-white text-white hover:text-orange-600 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-transparent hover:border-orange-600"
                    aria-label="Back to top"
                >
                    <FaArrowUp className="text-lg md:text-xl" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
