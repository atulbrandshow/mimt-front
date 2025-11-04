import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";
import { FaFilePdf } from "react-icons/fa";

export default function PatentsPage({ data }) {
  const pageData = data?.pageData || {};

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
  ];

  // ✅ Dynamically create items array using pageData keys
  const patentsList = [
    {
      title: "Civil – UC Tool",
      pdf: pageData?.CivilUcToolPDF,
    },
    {
      title: "Mechanical – IMI AC Performance",
      pdf: pageData?.MechnicalPDF,
    },
    {
      title: "Computer Science – FDML Fitness",
      pdf: pageData?.ComputerSciencePDF,
    },
    {
      title: "Bio-Technology – NSP Intelligent Technology",
      pdf: pageData?.BioTechnologyPDF,
    },
  ];

  return (
    <div className="bg-gray-50">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 px-3 sm:px-6 gap-10">

        {/* ✅ LEFT COLUMN */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ ONE BIG CARD (same design as NCC) */}
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-10 space-y-14">

            {/* ✅ Page Heading */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
                {pageData?.PatentsPublished}
              </h2>

              <div
                className={`${descriptionCss} text-gray-700 space-y-4`}
                dangerouslySetInnerHTML={{ __html: pageData?.PatentsPublishedDesc }}
              />
            </section>

            {/* ✅ Patent Items Mapped Dynamically */}
            <section>
              <h3 className="text-xl font-semibold mb-6">Published Patents</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {patentsList.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 border border-gray-200 rounded-xl shadow-sm bg-gray-50"
                  >
                    <h4 className="font-bold text-lg mb-3">{item.title}</h4>

                    {item.pdf ? (
                      <a
                        href={item.pdf}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition"
                      >
                        <FaFilePdf size={16} />
                        Download PDF
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500">PDF not available</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title="About Us" LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
