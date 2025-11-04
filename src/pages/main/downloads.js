import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  console.log(data);

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
  ];

  const downloadCard =
    "block bg-white shadow-sm hover:shadow-md border border-gray-200 p-4 rounded-lg text-gray-800 font-medium hover:text-[#fdd023] transition";

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-6 gap-10 px-3 sm:px-6">

        {/* ✅ LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ PAGE TITLE */}
          <h2 className="text-3xl font-bold text-black mb-6 border-l-8 border-[#fdd023] pl-4">
            Downloads
          </h2>

          {/* ✅ DESCRIPTION */}
          <div
            dangerouslySetInnerHTML={{ __html: data?.pageData?.downloadDescription }}
            className={`${descriptionCss} bg-gray-50 p-6 rounded-xl shadow-sm leading-relaxed text-[17px] mb-10`}
          />

          {/* ✅ SECTION 1 */}
          <h3 className="text-2xl font-semibold mb-4 border-l-4 border-[#fdd023] pl-3">
            Download Section 1
          </h3>

          <div className="space-y-4 mb-12">
            {data?.pageData?.DownloadFirstSec_PDF_1 && (
              <a href={data?.pageData?.DownloadFirstSec_PDF_1} className={downloadCard}>
                Prospectus 2025-26
              </a>
            )}

            {data?.pageData?.DownloadFirstSec_PDF_2 && (
              <a href={data?.pageData?.DownloadFirstSec_PDF_2} className={downloadCard}>
                B.Tech Brochure 2025
              </a>
            )}

            {data?.pageData?.DownloadFirstSec_PDF_3 && (
              <a href={data?.pageData?.DownloadFirstSec_PDF_3} className={downloadCard}>
                MBA Brochure 2025
              </a>
            )}

            {data?.pageData?.DownloadFirstSec_PDF_5 && (
              <a href={data?.pageData?.DownloadFirstSec_PDF_5} className={downloadCard}>
                Placement Brochure 2024
              </a>
            )}

            {data?.pageData?.DownloadFirstSec_PDF_6 && (
              <a href={data?.pageData?.DownloadFirstSec_PDF_6} className={downloadCard}>
                Conference Proceeding
              </a>
            )}

            {data?.pageData?.DownloadFirstSec_PDF_7 && (
              <a href={data?.pageData?.DownloadFirstSec_PDF_7} className={downloadCard}>
                Mangalmay Journal
              </a>
            )}

            {data?.pageData?.DownloadFirstSec_PDF_8 && (
              <a href={data?.pageData?.DownloadFirstSec_PDF_8} className={downloadCard}>
                MIMT Brochure
              </a>
            )}
          </div>

          {/* ✅ SECTION 2 */}
          <h3 className="text-2xl font-semibold mb-4 border-l-4 border-[#fdd023] pl-3">
            Download Section 2
          </h3>

          <div className="space-y-4">
            {data?.pageData?.DownloadSecondSec_PDF_1 && (
              <a href={data?.pageData?.DownloadSecondSec_PDF_1} className={downloadCard}>
                MIET Newsletter 2018
              </a>
            )}

            {data?.pageData?.DownloadSecondSec_PDF_2 && (
              <a href={data?.pageData?.DownloadSecondSec_PDF_2} className={downloadCard}>
                MIMT Newsletter
              </a>
            )}

            {data?.pageData?.DownloadSecondSec_PDF_3 && (
              <a href={data?.pageData?.DownloadSecondSec_PDF_3} className={downloadCard}>
                Biotech Newsletter
              </a>
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
