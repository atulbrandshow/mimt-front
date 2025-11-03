import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
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

export default function GoverningBodyPage({ data }) {
  const d = data?.pageData;
  console.log(data);

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6 max-sm:gap-0">
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div dangerouslySetInnerHTML={{ __html: d?.TrusteeMembersDescription }} />
          <div dangerouslySetInnerHTML={{ __html: d?.PatronMembersDescription }} />
          <div dangerouslySetInnerHTML={{ __html: d?.GoverningBoardDescription }} />
          <div dangerouslySetInnerHTML={{ __html: d?.AcademicBoardDescription }} />
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar />
        </div>
      </section>
    </div>
  );
}
