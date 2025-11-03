"use client";
import { ChevronUp } from "lucide-react";
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
      className={`bg-primary fixed right-3 bottom-10 z-[1000] p-2 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-primary/80 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <ChevronUp className="text-white" />
    </button>
  );
}

export default Scroller;
