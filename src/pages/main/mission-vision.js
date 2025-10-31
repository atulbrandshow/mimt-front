"use client";
import React from "react";

const MissionAndVisionPage = () => {
  return (
    <div className="w-full">

      {/* ✅ HERO BANNER — Same as About Us */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/image/about/mangalmay-campus.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20"></div>

        {/* Center Text Block */}
        <div className="absolute inset-0 flex items-center justify-start px-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl max-w-3xl shadow-[0px_10px_40px_rgba(0,0,0,0.4)]">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-5 tracking-wide drop-shadow-lg">
              Mission & Vision
            </h1>
            <p className="text-white/85 leading-relaxed text-lg">
              Guiding principles that shape excellence and holistic development at
              Mangalmay Group of Institutions.
            </p>
          </div>
        </div>


      </div>

      {/* ✅ CONTENT SECTION */}
      <div className="w-full py-20 bg-gray-100 px-4 flex justify-center">
        <div className="max-w-5xl w-full space-y-14">

          {/* ✅ Vision */}
          <div className="relative bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
            {/* Yellow Highlight Bar */}
            <div className="absolute left-0 top-0 h-full w-2 bg-[#fdd023] rounded-l-xl"></div>

            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="text-[#fdd023] mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To create a vibrant and responsive Institution aimed at attaining outstanding
                  academic levels through inputs of excellence, thereby shaping professionals
                  of tomorrow with the purpose of adding value to society and contributing
                  towards nation building.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Mission */}
          <div className="relative bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
            {/* Yellow Highlight Bar */}
            <div className="absolute left-0 top-0 h-full w-2 bg-[#fdd023] rounded-l-xl"></div>

            <div className="flex items-start gap-6">
              {/* Mission Icon */}
              <div className="text-[#fdd023] mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                  />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>

                <ul className="space-y-4 text-gray-700 leading-relaxed text-lg list-disc pl-6">
                  <li>
                    To inculcate professional skills in our students to be "Krishna's and Arjuna's"
                    of the professional Mahabharata.
                  </li>
                  <li>
                    To create a pro-active environment, conducive for overall professional growth.
                  </li>
                  <li>
                    Enhance students’ analytical outlook for strategic decision-making in the
                    dynamic Indian and international business scenario.
                  </li>
                  <li>
                    Making professional education career-oriented, challenging, and value-added.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
};

export default MissionAndVisionPage;
