import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full font-sans">
      {/* HERO SECTION */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/image/about/mangalmay-campus.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* LEFT CONTENT BOX */}
        <div className="absolute top-1/2 left-14 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl max-w-xl shadow-[0px_0px_30px_rgba(0,0,0,0.25)]">
          <h2 className="text-white text-3xl font-bold mb-4 leading-snug drop-shadow-lg">
            About Mangalmay Group
          </h2>
          <p className="text-white/85 leading-relaxed text-sm">
            Established in 2002, Mangalmay Group of Institutions is one of the premier
            NAAC accredited institutions focused on Innovation, Excellence, and
            nurturing future-ready global leaders.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <div className="w-full py-20 bg-gray-100 px-4 flex justify-center">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl font-bold text-black mb-6 tracking-wide border-l-8 border-[#fdd023] pl-4">
            About Mangalmay Group of Institutions
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg border-l-4 border-[#fdd023] pl-6">
            <p>
              Established in 2002, Mangalmay Group of Institutions is one of the premier NAAC accredited Institution with a prime focus on Innovation, Excellence and Nurturing global leaders for a sustainable future. We incorporate Knowledge, Industry experience, Research, and International exposure in our curriculum, to offer comprehensive educational program to the students. The post graduate and graduate programmes offered at Mangalmay are affiliated to AKTU, Lucknow (formally known as U.P.Technical University) and approved by the All India Council for Technical Education (AICTE) Ministry of HRD, New Delhi. Institute is also affiliated to C.C.S University Meerut.
            </p>

            <p>
              Our vision is to disseminate knowledge in the field of Management, Engineering, Bio-Technology, Commerce and Education. Driven by creativity and curiosity, Mangalmay strive to provide an educationally outstanding experience for students. Mangalmay has been ranked among the best MBA and B.Tech college in Delhi NCR.
            </p>

            <p>
              Mangalmay Institute of Engineering and Technology has evolved as one of the best B.Tech college with global reputation that strives for high quality education. The mission of the group is to offer innovative opportunities to our students to showcase their creativity and talent thereby making positive impact on the society.
            </p>

            <p>
              In the record time of 23 years, Mangalmay Institute of Management and Technology (MIMT) has earned a distinct position for itself and been ranked as the best MBA college in Delhi NCR. MBA admissions are based on merit basis.
            </p>

            <p>
              <strong>Dr. Atul Mangal</strong>, Chairman, believes in inculcating a culture of innovation and imparting quality education for students. He emphasizes whole-person integral growth.
            </p>

            <p>
              <strong>Dr. Aayush Mangal</strong>, Vice Chairman, is an enthusiastic visionary who focuses on excellent academic delivery, modern infrastructure, and all-round student development.
            </p>

            <p>
              There is a strong focus on research and development of faculty members from different streams. The institution also offers cross-organizational collaboration and liaises with various business communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
