"use client";
import Image from "next/image";

export default function ViceChairmanMessagePage() {
  return (
    <div className="w-full">

      {/* ✅ BANNER */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/image/about/mangalmay-campus.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

        <div className="relative z-10 pl-10 md:pl-20 max-w-3xl">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-2xl">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wide leading-tight">
              Vice Chairman’s Message
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Leadership vision that enriches academic excellence and fosters future-ready professionals.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ MAIN CONTENT – Same Ultra Modern Layout */}
      <div className="w-full py-24 px-6 bg-white flex justify-center">
        <div className="max-w-7xl w-full">

          {/* ✅ SECTION HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Message from the Vice Chairman
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-[#fdd023] rounded-full"></div>
          </div>

          {/* ✅ LAYOUT */}
          <div className="grid lg:grid-cols-3 gap-16">

            {/* ✅ LEFT — Image with Overlay Name */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/image/about/vice-chairman.jpg"
                  width={600}
                  height={800}
                  alt="Vice Chairman"
                  className="w-full h-[450px] object-cover"
                />

                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Name inside image */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-semibold">Dr. Aayush Mangal</h3>
                  <p className="text-white/80 text-lg">Vice Chairman & COO</p>
                </div>
              </div>
            </div>

            {/* ✅ RIGHT — Editorial Message */}
            <div className="lg:col-span-2">

              <div className="max-w-3xl text-gray-700 leading-[1.9] space-y-7">

                {/* Top Quote */}
                <blockquote className="border-l-4 border-[#fdd023] pl-6 italic text-xl text-gray-700 bg-gray-50/60 py-4 rounded-md">
                  “Every student holds immense potential — our role is to nurture it,
                  guide it, and empower it for a successful future.”
                </blockquote>

                <p className="text-[18px] font-medium text-gray-800">Dear Guardians/Students,</p>

                <p>
                  The rapid changes and increased complexity of today's world present new challenges
                  and demand continuous evolution in the education system. Preparing students for
                  productive functioning in a dynamic and highly demanding environment has become essential.
                </p>

                <p>
                  At Mangalmay, we have identified key parameters that make students placement-ready.
                  This includes several add-on certification programs across Engineering, Management,
                  Teacher Education, along with impactful sessions on Universal Human Values and Life
                  Management to motivate and inspire students.
                </p>

                {/* Middle Quote */}
                <blockquote className="border-l-4 border-[#fdd023] pl-6 italic bg-gray-50/60 py-5 rounded-md text-[19px]">
                  <span className="font-semibold text-gray-900">
                    "Successful and unsuccessful people do not vary greatly in their abilities.
                    They vary in their desires to reach their potential."
                  </span>
                  <br />
                  <span className="mt-2 block text-gray-700">— John Maxwell</span>
                </blockquote>

                <p>
                  Mangalmay Institutions are committed to transforming education to meet the needs
                  of a rapidly growing nation and a globalized world. Each institution provides excellent
                  facilities, academic rigor, and a rich environment for co-curricular and extra-curricular
                  development.
                </p>

                <p>
                  Our faculty members are highly experienced and deeply committed to the growth of every
                  student, ensuring a supportive, value-driven, and progressive learning journey.
                </p>

                <p>
                  I warmly welcome you to Mangalmay Group of Institutions and wish you great success
                  in all your future pursuits.
                </p>

                {/* Signature */}
                <div className="mt-14 pt-6 border-t border-gray-300">
                  <h3 className="text-2xl font-semibold text-gray-900">Dr. Aayush Mangal</h3>
                  <p className="text-gray-600 text-lg">Vice Chairman & COO</p>
                  <p className="text-gray-600 text-lg">Mangalmay Group of Institutions</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
