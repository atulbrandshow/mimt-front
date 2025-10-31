"use client";
import React from "react";

const ChairmanMessagePage = () => {
  return (
    <>
      <div
        className="relative w-full h-[70vh] bg-cover bg-left"
        style={{
          backgroundImage: "url('/image/about/mangalmay-campus.webp')",
        }}
      >
        {/* Dark Gradient from Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* Left-Aligned Centered Content */}
        <div className="absolute inset-0 flex items-center pl-10 md:pl-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl max-w-xl shadow-lg">

            <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Chairman’s Message
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              A vision-driven approach to education, preparing future-ready leaders
              through excellence, innovation and strong value-based learning.
            </p>

          </div>
        </div>
      </div>


      {/* ✅ MAIN CONTENT – Ultra Modern Split Layout */}
      <div className="w-full py-24 px-6 bg-white flex justify-center">
        <div className="max-w-7xl w-full">

          {/* ✅ SECTION HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Message from the Chairman
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#fdd023] rounded-full"></div>
          </div>

          {/* ✅ FLEX LAYOUT */}
          <div className="grid lg:grid-cols-3 gap-16">

            {/* ✅ LEFT SIDE — Image + Name */}
            <div className="flex flex-col items-center lg:items-start">

              {/* Image Box */}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/image/about/chairman.jpg"
                  alt="Chairman"
                  className="w-full h-[420px] object-cover"
                />

                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Name inside image */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-semibold">Dr. Atul Mangal</h3>
                  <p className="text-white/80 text-lg">Chairman, Mangalmay Group</p>
                </div>
              </div>
            </div>

            {/* ✅ RIGHT SIDE — Premium Editorial Text */}
            <div className="lg:col-span-2">

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

                <p className="text-xl text-gray-600 border-l-4 border-[#fdd023] pl-4 italic">
                  “Education is not preparation for life; education is life itself — and at Mangalmay,
                  we shape leaders who shape tomorrow.”
                </p>

                <p>
                  With India emerging as a Global Superpower within the next 15 years, the education
                  sector is encountering a paradigm shift to meet new demands. The need for Management
                  Graduates, Teachers, Bio-Technologists, Engineers and IT Specialists is so high that
                  a vast portion of the population can transition into the employable workforce.
                </p>

                <p>
                  Despite global financial challenges, job opportunities in India continue to rise,
                  and career possibilities remain abundant.
                </p>

                <p>
                  Mangalmay offers a fertile breeding ground for aspiring managers and engineers.
                  Supported by state-of-the-art infrastructure, a committed faculty, an innovative
                  culture and a results-driven environment, the institution has earned an honourable
                  standing among top educational institutes.
                </p>

                <p>
                  Our goal is to shape individuals who possess adaptability, emotional intelligence,
                  and strategic decision-making abilities to excel in a dynamic global environment.
                </p>

                <p>
                  Mangalmay stands as a temple of excellence — an institute where the pursuit of
                  perfection never ends. Our Management School ranks among the best MBA colleges,
                  and our Engineering School among India’s leading institutions.
                </p>

                {/* Signature Section */}
                <div className="mt-10 pt-6 border-t border-gray-300">
                  <h3 className="text-2xl font-semibold text-gray-900">Dr. Atul Mangal</h3>
                  <p className="text-gray-600 text-lg">Chairman, Mangalmay Group</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ChairmanMessagePage;
