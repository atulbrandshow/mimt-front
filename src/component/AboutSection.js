"use client";

import React, { useState, useMemo } from 'react';
import { Button } from './ui/moving-border';
import TitleInfo from './TitleInfo';
import { Play, X, Award, Users, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion"; // ✅ Correct import

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const videoId = 'f856Nsg0suU';

  const handlePlayClick = () => {
    setIsLoading(true);
    setShowVideo(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setIsLoading(false);
  };

  const stats = [
    { value: "2002", label: "Established", icon: Building2, delay: 0.2 },
    { value: "23+", label: "Years of Excellence", icon: Award, delay: 0.3 },
    { value: "9000+", label: "Alumni Network", icon: Users, delay: 0.4 },
    { value: "1100+", label: "Recruiting Partners", icon: TrendingUp, delay: 0.5 },
  ];

  // ✅ Memoize particle and sparkle positions to prevent flicker
  const particles = useMemo(() =>
    [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: Math.random() > 0.5 ? '#911E75' : '#fecc00',
      duration: 3 + Math.random() * 3,
      delay: Math.random() * 2,
    })), []
  );

  const sparkles = useMemo(() =>
    [...Array(8)].map((_, i) => ({
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      delay: i * 0.3,
    })), []
  );

  return (
    <section className="bg-gradient-to-b from-white via-[#fecc00]/5 to-white relative overflow-hidden">

      {/* ===== BACKGROUND ANIMATIONS ===== */}
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#911E75]/15 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fecc00]/15 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#911E75]/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute top-32 left-20 w-24 h-24 border-2 border-[#911E75]/20 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-40 right-32 w-20 h-20 border-2 border-[#fecc00]/30 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-16 h-16 bg-[#911E75]/10 rounded-full"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-[#fecc00]/20"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ left: p.left, top: p.top, background: p.color }}
          animate={{ y: [0, -40, 0], opacity: [0.1, 0.6, 0.1], scale: [1, 1.5, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{ left: s.left, top: s.top }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity, delay: s.delay, repeatDelay: 1 }}
        >
          <Sparkles className="w-4 h-4 text-[#fecc00]" />
        </motion.div>
      ))}

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#911E75 1px, transparent 1px),
            linear-gradient(90deg, #911E75 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* ===== MAIN CONTENT ===== */}
      <main className="relative overflow-hidden px-4 sm:px-6 py-12 sm:py-16 md:py-24 shadow-2xl border border-[#911E75]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#911E75]/10 via-transparent to-[#fecc00]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#fecc00]/5 via-transparent to-[#911E75]/5"></div>

        <div className="relative max-w-[1500px] mx-auto">
          <TitleInfo
            first="Top Ranked Institution"
            second="Mangalmay Group Of Institutions – One of India's Best Ranked Institutions"
            color="black"
          />

          <section className='sm:mt-10 md:mt-20 grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12'>
            {/* ===== VIDEO SECTION ===== */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='w-full xl:col-span-2 mx-auto relative group'
              onMouseEnter={() => setShowPlayButton(true)}
              onMouseLeave={() => setShowPlayButton(false)}
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-[#911E75]/10 via-[#fecc00]/10 to-[#911E75]/10 rounded-3xl blur-2xl opacity-50"></div>

              <AnimatePresence mode="wait">
                {showVideo ? (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className='w-full relative h-[300px] md:h-[400px] lg:h-[547px] rounded-2xl overflow-hidden shadow-2xl'
                  >
                    {isLoading && (
                      <div className='absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#911E75] to-[#791b61] z-20 text-white'>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-16 h-16 border-4 border-[#fecc00] border-t-transparent rounded-full"
                        />
                        <p className="mt-4">Loading video...</p>
                      </div>
                    )}
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className='w-full h-full object-cover'
                      title="Inside Mangalmay Group of Institute"
                    ></iframe>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleCloseVideo}
                      className='absolute top-4 right-5 bg-white text-[#911E75] rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-30 hover:bg-[#fecc00] transition-colors'
                    >
                      <X />
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Thumbnail with Hover Button */}
                    <div className='relative h-[300px] md:h-[400px] lg:h-[547px] rounded-2xl overflow-hidden shadow-2xl'>
                      <img
                        src="/image/mimt/hero-section/building2.jpeg"
                        alt="Building"
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      <AnimatePresence>
                        {showPlayButton && (
                          <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handlePlayClick}
                            className='absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm'
                          >
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="relative"
                            >
                              <div className="absolute inset-0 bg-[#fecc00]/30 rounded-full blur-2xl"></div>
                              <Play className='w-20 h-20 border-2 border-white rounded-full p-4 bg-gradient-to-br from-[#911E75] to-[#791b61] text-white shadow-2xl relative z-10' strokeWidth="1.5" />
                            </motion.div>
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
                    {/* Overlay with Text */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="-mt-8 relative flex items-end justify-center pb-6 z-10"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative bg-white/90 border-2 border-[#911E75]/20 backdrop-blur-xl rounded-2xl text-black px-6 sm:px-8 py-3 md:py-4 text-center shadow-2xl overflow-hidden"
                      >
                        {/* Animated Background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#911E75]/10 via-[#fecc00]/10 to-[#911E75]/10"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider uppercase relative z-10">
                          Top Quality And Learning Experience
                        </h3>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                )}
              </AnimatePresence>
            </motion.div>

            {/* ===== ABOUT TEXT & STATS ===== */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='xl:col-span-1 flex flex-col'
            >
              <div className='px-4 sm:px-6'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative inline-block mb-6"
                >
                  <h2 className='text-3xl lg:text-4xl text-center relative z-10'>About Us</h2>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#911E75]/30 to-[#fecc00]/30 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='text-sm sm:text-base leading-relaxed text-gray-700'
                >
                  Established in 2002, Mangalmay Group of Institutions is a NAAC "A" Grade accredited institute committed to innovation and excellence...
                </motion.p>
              </div>

              {/* Stats */}
              <div className='pt-8 grid grid-cols-2 gap-4 sm:gap-6 px-4'>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className='relative group'
                  >
                    <div className='relative flex flex-col items-center p-5 bg-white border-2 border-[#911E75]/10 rounded-2xl shadow-lg overflow-hidden'>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#911E75] to-[#791b61] flex items-center justify-center mb-3 shadow-lg"
                      >
                        <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#fecc00]" />
                      </motion.div>
                      <h2 className='text-3xl sm:text-4xl bg-gradient-to-r from-[#911E75] to-[#791b61] bg-clip-text text-transparent'>
                        {stat.value}
                      </h2>
                      <span className='text-xs sm:text-sm text-center text-gray-600 mt-2'>
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className='mt-8 flex justify-center'>
                <Button
                  borderRadius="1rem"
                  className="bg-gradient-to-r from-[#911E75] to-[#791b61] text-white shadow-lg hover:shadow-xl"
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default AboutSection;
