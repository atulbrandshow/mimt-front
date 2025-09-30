"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { IMAGE_PATH } from "@/configs/config"

// --- Animation settings for a smooth, spring-like transition ---
const transition = {
  type: "spring",
  stiffness: 200,
  damping: 40,
  mass: 1,
}

const MainSection = ({ data }) => {
  const slides = [
    "/image/mimt/hero-section/website-varun.jpg",
    "/image/mimt/hero-section/sadhguru-mimt.jpg",
    "/image/mimt/hero-section/new-ipl-session.jpg",
    "/image/mimt/hero-section/new-website-jobfair.jpg",
    "/image/mimt/hero-section/slider-2023.jpg",
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  // Autoplay functionality
  useEffect(() => {
    const autoplayInterval = setInterval(handleNext, 4000) // Change slide every 4 seconds
    return () => clearInterval(autoplayInterval)
  }, [currentIndex, slides.length]) // Add dependencies for autoplay reset

  if (!slides || slides.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        No banners to display.
      </div>
    )
  }

  return (
    <div className="mt-10 relative flex items-center justify-center w-full h-[45vh] sm:h-[55vh] md:h-[75vh] lg:h-[85vh] xl:h-screen overflow-hidden bg-black">
      {/* Background Gradient & Blur Effect (remains the same) */}
      <div className="absolute inset-0 z-0">
        <Image
          key={slides[currentIndex]} // Use image src as key to ensure re-render
          src={slides[currentIndex]}
          width={1920}
          height={1080}
          alt="Background"
          className="w-full h-full object-cover blur-3xl scale-125 opacity-50 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* 3D Carousel Container */}
      {/* Adjusted width and `perspective` for a better view of full images */}
      <div className="relative z-10 w-full h-full sm:w-[90%] sm:h-[70vh]" style={{ perspective: "1500px" }}>
        <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {slides.map((imageSrc, index) => {
            const offset = index - currentIndex
            const isCurrent = offset === 0
            const isLeft = offset === -1 || (offset === slides.length - 1 && currentIndex === 0) // Handle wrap around for left
            const isRight = offset === 1 || (offset === -(slides.length - 1) && currentIndex === slides.length - 1) // Handle wrap around for right
            const isVisible = isCurrent || isLeft || isRight;


            // --- Calculate dynamic styles for each slide ---
            let transform = "";
            let opacity = 0;
            let zIndex = 0;
            let filter = "brightness(50%)"; // Default for non-current

            if (isCurrent) {
              transform = `translateX(0%) translateZ(0px) rotateY(0deg) scale(1)`;
              opacity = 1;
              zIndex = slides.length; // Ensure current is always on top
              filter = "brightness(100%)";
            } else if (isLeft) {
              transform = `translateX(-60%) translateZ(-300px) rotateY(35deg) scale(0.8)`; // Adjusted for full image
              opacity = 1;
              zIndex = slides.length - 1;
            } else if (isRight) {
              transform = `translateX(60%) translateZ(-300px) rotateY(-35deg) scale(0.8)`; // Adjusted for full image
              opacity = 1;
              zIndex = slides.length - 1;
            } else {
              // For images far out, make them invisible and put them behind
              transform = `translateX(${offset > 0 ? '150%' : '-150%'}) translateZ(-500px) rotateY(${offset > 0 ? '-60deg' : '60deg'}) scale(0.6)`;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <motion.div
                key={imageSrc}
                className="absolute w-full sm:w-[80%] h-full top-0 sm:left-[10%] overflow-hidden pointer-events-none" // Increased width, adjusted left
                style={{
                  zIndex,
                  transformOrigin: "center center",
                  filter,
                }}
                animate={{
                  transform,
                  opacity,
                }}
                transition={transition}
              >
                <Image
                  src={imageSrc}
                  width={1200}
                  height={800}
                  alt={`Banner ${index + 1}`}
                  priority={isCurrent}
                  className={`w-full h-full object-contain`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Minimalist Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute z-20 left-1 md:left-5 lg:left-10 top-1/2 -translate-y-1/2 p-1 md:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
        aria-label="Previous Banner"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={handleNext}
        className="absolute z-20 right-1 md:right-5 lg:right-10 top-1/2 -translate-y-1/2 p-1 md:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
        aria-label="Next Banner"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}

export default MainSection