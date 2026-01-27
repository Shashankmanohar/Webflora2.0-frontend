"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Phone number (without + or spaces)
  const phoneNumber = "918863081255";
  const message = "Hi! I'm interested in your services.";

  useEffect(() => {
    // Show tooltip initially, then hide after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium mb-2 relative"
          >
            Chat with us! 👋
            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wave Animation */}
      {/* Classic Ring Wave Animation */}
      <motion.div
        className="absolute bottom-0 right-0 w-14 h-14 rounded-full z-0 border-[3px] border-[#25D366]"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Button */}
      <motion.button
        onClick={handleClick}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg ring-4 ring-transparent hover:ring-[#25D366]/30 relative z-10"
        aria-label="Chat on WhatsApp"
        initial={{ y: 0 }}
        animate={{
          boxShadow: [
            "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
            "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <FaWhatsapp className="text-3xl" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
