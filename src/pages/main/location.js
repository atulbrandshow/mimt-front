import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  const pageData = data?.pageData || {};

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
  ];

  return (
    <div className="bg-white">
      {/* ✅ PAGE HEADER */}
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-4 gap-10 px-3 sm:px-6">

        {/* ✅ LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ TITLE */}
          <h2 className="text-3xl font-bold text-black mb-6 border-l-8 border-[#fdd023] pl-4">
            {pageData?.Location_Title || "Location"}
          </h2>

          {/* ✅ DESCRIPTION CONTENT */}
          <div
            className={`${descriptionCss}  p-6 rounded-xl shadow-sm leading-relaxed text-[17px]`}
            dangerouslySetInnerHTML={{ __html: pageData?.Location_Desc }}
          />

        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
