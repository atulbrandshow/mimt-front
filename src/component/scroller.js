"use client";
import { ArrowUp, ArrowUpFromDot, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

function Scroller() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`bg-secondary fixed right-3 bottom-10 z-[1000] border border-black/10 p-2 rounded-full shadow-lg text-black transition-all duration-500 ease-in-out hover:scale-105 hover:bg-secondary/80 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <ArrowUp />
    </button>
  );
}

export default Scroller;
