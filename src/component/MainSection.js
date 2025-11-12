"use client"
import { useState, useEffect, useMemo } from "react"
import { ArrowLeft, ArrowRight, Sparkles, Award, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const MainSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    "/image/mimt/hero-section/website-varun.jpg",
    "/image/mimt/hero-section/sadhguru-mimt.jpg",
    "/image/mimt/hero-section/new-ipl-session.jpg",
    "/image/mimt/hero-section/new-website-jobfair.jpg",
    "/image/mimt/hero-section/slider-2023.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Memoize particle positions for stability
  const particles = useMemo(() =>
    [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    })), []
  )

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://csip-image.blr1.digitaloceanspaces.com/csip-image/mmit/mangalmay_institute_of_management_technology_cover.webp"
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#911E75]/40 via-transparent to-[#fecc00]/20"></div>

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#911E75]/20 rounded-full blur-3xl z-10 "
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#fecc00]/20 rounded-full blur-3xl z-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />

      {/* Geometric Shapes */}

      {/* <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#fecc00]/30 rotate-45 z-10"></div> */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-[#fecc00]/30 rotate-45 z-10"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-[#911E75]/40 rounded-full z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#fecc00]/10 rotate-12 z-10"></div>

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#fecc00]/40 rounded-full z-10"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Content */}
      <div className="flex justify-center relative z-20 min-h-screen px-5 sm:px-10 lg:px-20">
        <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center py-10 gap-10 lg:gap-16 max-w-7xl">

          {/* Left Text Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#911E75]/20 border border-[#911E75]/40 rounded-full backdrop-blur-sm mb-4 w-fit mx-auto lg:mx-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-[#fecc00]" />
              <span className="text-xs sm:text-sm text-white tracking-widest uppercase">
                best <span className="text-[#fecc00]">university</span> in Delhi NCR
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white mt-3 drop-shadow-2xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ textShadow: '0 0 40px rgba(145, 30, 117, 0.5), 0 0 80px rgba(254, 204, 0, 0.3)' }}
            >
              Mangalmay Group of Institution
            </motion.h1>

            <motion.p
              className="mt-6 text-slate-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Best B.Tech, MBA, BBA, BCA, BCOM and B.Ed college with a global reputation that strives for high-quality education.
              The mission of the group is to offer innovative opportunities to our students to showcase their creativity and talent
              thereby making a positive impact on society.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-6 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#911E75]/30 border border-[#911E75]/50 flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-6 h-6 text-[#fecc00]" />
                </div>
                <div>
                  <div className="text-xl text-white">10+</div>
                  <div className="text-xs text-slate-300">Years</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#911E75]/30 border border-[#911E75]/50 flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-6 h-6 text-[#fecc00]" />
                </div>
                <div>
                  <div className="text-xl text-white">5000+</div>
                  <div className="text-xs text-slate-300">Students</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <button className="relative py-4 px-10 text-sm sm:text-base rounded-xl uppercase bg-gradient-to-r from-[#911E75] to-[#a92284] text-white hover:shadow-2xl hover:shadow-[#911E75]/50 transition-all duration-300 hover:scale-105 tracking-widest overflow-hidden group">
                <span className="relative z-10">Apply Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#fecc00] to-[#911E75] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Carousel Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
          >
            {/* Nav Buttons */}
            <div className="flex gap-3 mb-6 z-30">
              <motion.button onClick={prevSlide} whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-br from-[#911E75] to-[#a92284] rounded-full shadow-lg shadow-[#911E75]/50 hover:scale-110 transition-all duration-300 border border-white/10">
                <ArrowLeft className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button onClick={nextSlide} whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-br from-[#911E75] to-[#a92284] rounded-full shadow-lg shadow-[#911E75]/50 hover:scale-110 transition-all duration-300 border border-white/10">
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Smooth Animated Slides */}
            <div className="relative w-full max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#911E75]/30 to-[#fecc00]/30 rounded-3xl blur-xl"></div>
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
                <AnimatePresence>
                  <motion.img
                    key={slides[currentSlide]}
                    src={slides[currentSlide]}
                    alt="slide"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -bottom-8 -left-4 sm:-left-8 w-48 sm:w-64 h-32 sm:h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-[#fecc00]/50 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop" alt="Event 1" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#911E75]/80 to-transparent flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm uppercase">Campus Events 2025</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 h-32 sm:h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-[#911E75]/50 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop" alt="Event 2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fecc00]/80 to-transparent flex items-end p-4">
                  <span className="text-white text-xs sm:text-sm uppercase">Admissions Open</span>
                </div>
              </motion.div>

              {/* Pagination */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-[#fecc00] w-8'
                      : 'bg-white/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#911E75] via-[#fecc00] to-[#911E75] z-30"></div>
    </div>
  )
}

export default MainSection
