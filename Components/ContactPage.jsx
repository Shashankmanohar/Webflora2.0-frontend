"use client";
import React, { useState, useEffect } from "react";
import { submitForm } from "@/lib/api";

/* =========================
   STRUCTURED DATA (CONTACT)
   Company, not agency
========================= */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Webflora Technologies",
  url: "https://webfloratechnologies.com/contact",
  description:
    "Contact Webflora Technologies, an end-to-end digital services company providing complete digital solutions required for business growth.",
  areaServed: ["Patna", "Bihar", "India"],
  mainEntity: {
    "@type": "Organization",
    name: "Webflora Technologies",
    url: "https://webfloratechnologies.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "IN"
    }
  }
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' | 'error' | null
    message: "",
  });
  const [charCount, setCharCount] = useState(0);

  // Load saved draft on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDraft = localStorage.getItem("webflora_contact_draft");
      if (savedDraft) {
        try {
          const draft = JSON.parse(savedDraft);
          setFormData(draft);
          setCharCount(draft.message?.length || 0);
        } catch (error) {
          console.error("Failed to load draft:", error);
        }
      }
    }
  }, []);

  // Auto-save draft
  useEffect(() => {
    if (typeof window !== "undefined" && (formData.name || formData.email || formData.contactNumber || formData.message)) {
      const timer = setTimeout(() => {
        localStorage.setItem("webflora_contact_draft", JSON.stringify(formData));
      }, 1000); // Save after 1 second of inactivity

      return () => clearTimeout(timer);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update character count for message field
    if (name === "message") {
      setCharCount(value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [name === "phone" ? "contactNumber" : name]: value,
    }));

    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Name and message are required.",
      });
      return;
    }

    if (!formData.email.trim() && !formData.contactNumber.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please provide either email or contact number.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const payload = {
        name: formData.name.trim(),
        message: formData.message.trim(),
        ...(formData.email.trim() && { email: formData.email.trim() }),
        ...(formData.contactNumber.trim() && {
          contactNumber: formData.contactNumber.trim(),
        }),
      };

      const res = await submitForm(payload);
      if (res?.success) {
        setSubmitStatus({
          type: "success",
          message:
            "✅ Thank you! We'll respond within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          message: "",
        });
        setCharCount(0);

        // Clear saved draft
        if (typeof window !== "undefined") {
          localStorage.removeItem("webflora_contact_draft");
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: res?.message || "Failed to send message.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="bg-black text-white w-full min-h-screen relative overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-[170rem] mx-auto px-6 sm:px-8 md:px-10 lg:px-20 pt-32 pb-20 relative z-10">

          {/* --- SECTION 1: MASSIVE HEADER --- */}
          <div className="flex flex-col justify-start items-start mb-10 sm:mb-16">
            <p className="text-orange-600 font-bold tracking-[0.2em] uppercase mb-4 pl-1 animate-pulse text-sm md:text-base font-sans">
              Start The Conversation
            </p>

            {/* SINGLE H1 (SEO REQUIRED, DESIGN SAME) */}
            <h1
              id="contact-heading"
              className="font-boldonse text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] lg:leading-27 md:leading-20 leading-15  tracking-tight uppercase text-white cursor-default select-none"
            >
              Anything that <br /> can be{" "}
              <span className="text-orange-600">Built</span>, <br />
              <span className="text-orange-600 ">
                We Build
              </span>
              <span className="relative bottom-3" aria-hidden="true">🔥</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

            {/* --- LEFT COLUMN --- */}
            <div className="lg:col-span-5 flex flex-col justify-between mt-10">
              <div className="flex flex-col gap-8">
                <div className="w-full break-all">
                  <p className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] font-sans mb-2">
                    Email Us
                  </p>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-boldonse text-white tracking-wide hover:text-orange-600 hover:translate-x-2 transition-transform duration-300 block"
                    aria-label="Email Webflora Technologies"
                  >
                    hello.webflora@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] font-sans mb-2">
                    Call Us
                  </p>
                  <a
                    href="tel:+918863081255"
                    className="text-2xl sm:text-3xl md:text-4xl font-boldonse text-white uppercase tracking-wide hover:text-orange-600 hover:translate-x-2 transition-transform duration-300 block"
                    aria-label="Call Webflora Technologies"
                  >

                    +91 8863081255
                  </a>
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN (FORM) --- */}
            <div className="lg:col-span-7 lg:mt-0 mt-10">
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-900/40 p-6 sm:p-8 md:p-10 border border-zinc-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden max-w-3xl"
                aria-label="Contact form"
              >
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-600/30 transition-colors duration-500 pointer-events-none"></div>

                {submitStatus.type && (
                  <div
                    className={`mb-6 p-4 rounded-lg border ${submitStatus.type === "success"
                      ? "bg-green-900/20 border-green-600/50 text-green-400"
                      : "bg-red-900/20 border-red-600/50 text-red-400"
                      }`}
                  >
                    <p className="text-sm md:text-base font-medium">
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
                  <InputGroup
                    label="Your Name"
                    id="name"
                    type="text"
                    required={true}
                    placeholder="Ram Kumar"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <InputGroup
                    label="Contact Number (Optional)"
                    id="phone"
                    type="tel"
                    required={false}
                    placeholder="+91 987654321"
                    name="phone"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <InputGroup
                    label="Email Address (Optional)"
                    id="email"
                    type="email"
                    required={false}
                    placeholder="Ram@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label
                      htmlFor="message"
                      className="block text-orange-600 font-bold tracking-[0.15em] uppercase text-sm font-sans"
                    >
                      Your Message
                    </label>
                    <span className="text-xs text-zinc-500">
                      {charCount} / 1000 characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, timeline, and budget..."
                    className="w-full bg-transparent border-b-4 border-zinc-800 text-sm sm:text-base md:text-lg text-white placeholder-zinc-600 focus:outline-none focus:border-orange-600 transition-all duration-300 font-sans tracking-wide uppercase resize-none py-2"
                    aria-required="true"
                  ></textarea>
                  {charCount > 900 && (
                    <p className="text-xs text-orange-500 mt-1">
                      {1000 - charCount} characters remaining
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full md:w-auto bg-orange-600 text-black font-boldonse text-xl sm:text-2xl md:text-3xl uppercase px-8 md:px-12 py-4 md:py-5 tracking-wider overflow-hidden transition-transform active:scale-95 hover:bg-white hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send inquiry to Webflora Technologies"
                >
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    {!isSubmitting && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 md:w-7 md:h-7 transition-transform"
                        aria-hidden="true"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* =========================
   INPUT GROUP (UNCHANGED UI)
========================= */
const InputGroup = ({ label, id, name, type, required, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="block text-zinc-500 font-bold tracking-[0.15em] uppercase text-xs mb-2 font-sans"
      >
        {label} {required && <span className="text-orange-600">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name || id}
        required={required}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        className="w-full bg-transparent border-b-4 border-zinc-800 py-3 text-sm sm:text-base md:text-lg text-white placeholder-zinc-600 focus:outline-none focus:border-orange-600 transition-all duration-300 font-sans tracking-wide uppercase"
        aria-required={required}
        aria-label={label}
        pattern={type === "tel" ? "[0-9+() -]{6,}" : undefined}
      />
    </div>
  );
};

export default ContactPage;
