import React from "react";
import Image from "next/image";
import Breadcrumb from "@/component/Breadcrumb";
import Header from "@/component/Header";

const BreadCrumb = [
  {
    name: "About",
    Link: "#",
  },
]

export default function AboutUs({ data }) {

  console.log(data);
  
  return (
    <section className="w-full font-sans">
      <Header BreadCrumb={data?.breadCrumb} />

      {/* ✅ MAIN CONTENT SECTION — Clean, Spacious, Modern */}
      <div className="w-full py-20 bg-gray-100 px-4 flex justify-center">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6">

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-wide border-l-8 border-[#fdd023] pl-4">
            About Mangalmay Group of Institutions
          </h2>

          {/* Content Area */}
          <div className="space-y-10 text-gray-700 leading-[1.9] text-[1.1rem]">

            <p className="text-gray-700">
              Established in 2002, Mangalmay Group of Institutions is one of the premier
              NAAC accredited Institution with a major focus on innovation, excellence
              and nurturing global leaders for a sustainable future. Mangalmay blends
              knowledge, industry experience, research and international exposure to
              offer a comprehensive educational ecosystem. Our programs are affiliated
              to AKTU, Lucknow and approved by AICTE, New Delhi, and CCS University, Meerut.
            </p>

            {/* Highlighted Vision Box */}
            <p className="bg-[#fafafa] p-6 rounded-xl border-l-4 border-[#fdd023] shadow-sm text-gray-800">
              Our vision is to disseminate knowledge in Management, Engineering,
              Biotechnology, Commerce and Education. Mangalmay strives to offer an
              academically outstanding experience and has been ranked among the top
              MBA and B.Tech colleges in Delhi NCR.
            </p>

            <p>
              Mangalmay Institute of Engineering and Technology has emerged as a
              reputed B.Tech institution with a global outlook. Our mission is to
              provide innovative learning opportunities that encourage creativity,
              talent and societal contribution.
            </p>

            <p>
              Over the last 23 years, Mangalmay Institute of Management and Technology (MIMT)
              has built a strong reputation and continues to consistently rank among the best
              MBA colleges in Delhi NCR. Admissions for MBA programs are merit-based ensuring
              academic excellence.
            </p>

            {/* Leadership Section */}
            <div className="p-8 bg-[#fff7d9] border border-[#fdd023] rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Leadership
              </h3>

              <p className="mb-4">
                <strong>Dr. Atul Mangal</strong>, Chairman, believes in nurturing a culture
                of innovation and delivering quality education that promotes holistic growth
                of students.
              </p>

              <p>
                <strong>Dr. Aayush Mangal</strong>, Vice Chairman, is a visionary academic
                leader focused on excellence, modern infrastructure and overall student
                development.
              </p>
            </div>

            <p>
              The institution maintains a strong emphasis on research, faculty development
              and interdisciplinary collaboration. Mangalmay actively engages with industries
              and business communities to ensure practical learning and global exposure for
              students.
            </p>

          </div>
        </div>
      </div>

    </section>
  );
}
