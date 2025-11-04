import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  console.log("MBA Page Data:", data);

  const SideBarLink = [
    { name: "Overview", link: "/overview" },
    { name: "Admission Process", link: "" },
    { name: "Eligibility Criteria", link: "" },
    { name: "Fee Structure", link: "" },
    { name: "Syllabus", link: "" },
    { name: "Why Choose Us", link: "" }
  ];

  return (
    <div className="bg-white">
      {/* ✅ HEADER SECTION */}
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      {/* ✅ MAIN CONTENT WITH SIDEBAR */}
      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6 max-sm:gap-0">

        {/* ✅ LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ MBA Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-snug">
            {data?.pageData?.MBAAdmissionTitle}
          </h1>

          {/* ✅ MBA Description */}
          <div
            dangerouslySetInnerHTML={{
              __html: data?.pageData?.MBAAdmissionDescription,
            }}
            className={`${descriptionCss} mt-4`}
          />
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"MBA Admission"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
