import React from "react";
import { motion } from "framer-motion";

const IntroductionSection = ({
  title = "Welcome to GNIOT Institute of Management Studies",
  description = `<p>Our <strong>PGDM program</strong> offers a transformative learning experience designed to shape future business leaders. Explore an <em>industry-driven curriculum</em>, global exposure, and unmatched placement support.</p>`,
  image = "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  applyLink,
  brochureLink,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-6 md:py-10 px-6 md:px-12 overflow-hidden">
      {/* Soft background gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative group"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-80 md:h-[450px] object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-10 group-hover:bg-opacity-20 transition duration-500"></div>
        </motion.div>

        {/* Right Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>

          <div
            className="text-gray-700 text-sm md:text-base leading-relaxed prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-6">
            {applyLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-7 rounded-full shadow-lg transition-all duration-300"
              >
                Apply Now
              </motion.a>
            )}

            {brochureLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href={brochureLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3.5 px-7 rounded-full shadow-lg transition-all duration-300"
              >
                Download Brochure
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
