import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function NIRFPage({ data }) {
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
    <div className="bg-gray-50">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 px-3 sm:px-6 gap-10">

        {/* ✅ LEFT COLUMN */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ CARD CONTAINER */}
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-10 space-y-10">

            {/* ✅ NIRF Heading */}
            <h2 className="text-3xl font-bold mb-4 border-l-8 border-blue-600 pl-4">
              NIRF DATA
            </h2>

            {/* ✅ Description */}
            <div
              className={`${descriptionCss} text-gray-700`}
              dangerouslySetInnerHTML={{ __html: pageData?.NirfDescription }}
            />

            {/* ✅ PDF Button */}
            {pageData?.NirfPdf && (
              <div className="mt-6">
                <a
                  href={pageData.NirfPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-700 hover:shadow-md transition-all duration-200"
                >
                  📄 View NIRF 2021 PDF
                </a>
              </div>
            )}

          </div>
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
