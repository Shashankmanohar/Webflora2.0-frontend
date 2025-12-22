"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function MouseFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    // If device is mobile/tablet → DO NOT RUN mouse logic
    if (window.innerWidth < 1024) return;

    const updatePosition = (e) => {
      animate(x, e.clientX - 15, { duration: 0.25, ease: "easeOut" });
      animate(y, e.clientY - 15, { duration: 0.25, ease: "easeOut" });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <motion.div
      // hidden on mobile/tablet, visible on desktop (lg+)
      className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        translateX: x,
        translateY: y,
      }}
    >
      <div
        className="
          w-5 h-5 
          rounded-full 
          backdrop-blur-xl 
          bg-red-500 
          border border-black
          shadow-xl 
        "
      />
    </motion.div>
  );
}
