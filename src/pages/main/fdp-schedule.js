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
    { name: "Institution Social Responsibility", link: "" },
  ];

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 px-3 sm:px-6 gap-10">

        {/* ✅ LEFT SECTION */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ MAIN TITLE */}
          <h2 className="text-3xl font-bold text-black mb-6 border-l-8 border-[#fdd023] pl-4">
            {pageData?.FDP_Title}
          </h2>

          {/* ✅ MAIN DESCRIPTION */}
          <div
            className={`${descriptionCss} bg-gray-50 p-6 rounded-xl shadow-sm`}
            dangerouslySetInnerHTML={{ __html: pageData?.FDP_Desc }}
          />

          {/* ✅ SHORT DESC */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">
            {pageData?.FDP_Short_Desc}
          </h3>

          {/* ✅ TABLE 1 USING TAILWIND CLASSES */}
          {pageData?.FDP_Table_1 && (
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 border-l-4 border-[#fdd023] pl-3">
                {pageData?.FDP_Title_Table_1}
              </h4>

              <div className="overflow-x-auto shadow-md rounded-xl border border-gray-200">
                <div
                  className="prose max-w-none table-style p-4"
                  dangerouslySetInnerHTML={{ __html: pageData.FDP_Table_1 }}
                />
              </div>
            </div>
          )}

          {/* ✅ TABLE 2 USING TAILWIND CLASSES */}
          {pageData?.FDP_Table_2 && (
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-4 border-l-4 border-[#fdd023] pl-3">
                {pageData?.FDP_Title_Table_2}
              </h4>

              <div className="overflow-x-auto shadow-md rounded-xl border border-gray-200">
                <div
                  className="prose max-w-none table-style p-4"
                  dangerouslySetInnerHTML={{ __html: pageData.FDP_Table_2 }}
                />
              </div>
            </div>
          )}


        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
