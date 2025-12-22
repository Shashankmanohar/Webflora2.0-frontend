"use client";
import { useState, useEffect } from "react";

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-black ">
        <img className="w-100 h-100" src="/webflora-logo.svg" alt="" />
      </div>
    );
  }
  return children;
}
