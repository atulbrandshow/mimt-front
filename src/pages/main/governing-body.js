import React from "react";

const sections = [
  {
    title: "Trustee Members",
    items: [
      { name: "Dr. ATUL MANGAL", role: "Chairman (Trustee)", org: "Mangalmay Group of Institutions" },
      { name: "Dr. AAYUSH MANGAL", role: "Vice Chairman (Trustee)", org: "Mangalmay Group of Institutions" },
      { name: "Mrs. SHIKHA MANGAL", role: "Vice Chairperson (Trustee)", org: "Mangalmay Group of Institutions" }
    ]
  },
  {
    title: "Patron Members",
    items: [
      { name: "Lt. Gen. K.M. SETH", role: "Former Governor", org: "Chhattisgarh, MP & Tripura" },
      { name: "Sh. ANUJ MANGAL", role: "Advisor - Mangalmay Institutions", org: "Former - Trustee & VC, Mangalmay Group" },
      { name: "Dr. G.V.G. KRISHNAMURTHY", role: "Former Election Commissioner", org: "Govt. of India" }
    ]
  },
  {
    title: "Distinguished Governing Board",
    items: [
      { name: "Mr. YOGENDER KAPOOR", role: "Secretary", org: "Mangalmay Institutions" },
      { name: "Mr. SUNIL GOYAL", role: "Chief Operating Officer (COO)", org: "Sopra Steria" },
      { name: "Prof.(Dr.) ASHOK CHANDRA", role: "Former Special Secretary", org: "Ministry of HRD, Govt. of India" },
      { name: "Sh. YOGESH MUNJAL", role: "Managing Director", org: "Munjal Showa Ltd." },
      { name: "Prof. K.K. AGARWAL", role: "Ex. VC, GGSIPU", org: "Chairman, National Board of Accreditation" },
      { name: "Sh. B. P. AGARWAL", role: "Chairman", org: "Priya Gold Biscuit" },
      { name: "Mr. DEEPAK MATHUR", role: "CEO", org: "Jaguar Overseas Limited" },
      { name: "Mr. MANMOHAN BHUTANI", role: "COO- India Operations", org: "ACS Global Tech Solutions, USA" },
      { name: "Prof. Dr. R.K. KHANDAL", role: "President, India Glycols Ltd.", org: "Former Vice Chancellor, AKTU, Lucknow" },
      { name: "Mr. RANGARAJAN RAGHAVAN", role: "Former - Managing Director", org: "HCL infosystems" }
    ]
  },
  {
    title: "Academic Board",
    items: [
      { name: "Prof. S.K. KAK", role: "Former Vice Chancellor", org: "AKTU, Lucknow" },
      { name: "Ms. NEERAJA KRISHNAN", role: "Vice President", org: "Cognizant Technology Solutions" },
      { name: "Mr. PANKAJ DUBEY", role: "MD & Country Head", org: "Polaris India" },
      { name: "Mr. RAJESH TRIPATHI", role: "COO", org: "Dalmia Lifecare Ltd." },
      { name: "Mr. ASHISH JAIN", role: "Vice President", org: "Naukri.com" },
      { name: "Mr. CHETANYA VALI", role: "Vice President", org: "Gunnebo India Pvt. Ltd." },
      { name: "Mr. JAGMAL SINGH", role: "Chief Technology Officer (CTO)", org: "paisabazaar.com" },
      { name: "Mr. VIVEK SINGHAL", role: "Senior VP - Global Quality", org: "Sterlite Power" },
      { name: "Er. VAIBHAV PADLIKAR", role: "Vice President", org: "Rail Yatri" },
      { name: "Mr. RAJEEV JAIN", role: "Director - Distribution", org: "LG Electronics" }
    ]
  }
];

export default function GoverningBodyPage() {
  return (
    <div className="w-full">

      {/* ✅ Banner */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/image/about/mangalmay-campus.webp')",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

        {/* Banner Content */}
        <div className="relative z-10 pl-10 md:pl-20 max-w-3xl">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-2xl">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-wide leading-tight">
              Governing Body
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Visionary leaders, distinguished academicians & industry experts guiding Mangalmay’s growth.
            </p>
          </div>
        </div>
      </div>


      {/* ✅ Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {sections.map((sec, i) => (
          <div key={i} className="mb-20">

            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#fdd023] pl-4">
              {sec.title}
            </h2>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sec.items.map((m, idx) => (
                <div
                  key={idx}
                  className="
              p-6 
              rounded-2xl 
              border border-gray-200 
              bg-white/40 
              backdrop-blur-sm
              transition-all 
              hover:-translate-y-1 
              hover:bg-white/60
            "
                >
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {m.name}
                  </h3>

                  <p className="text-gray-700 mt-2 font-medium">
                    {m.role}
                  </p>

                  <p className="text-gray-600 text-sm mt-1">
                    {m.org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
