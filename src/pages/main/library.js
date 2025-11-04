import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";
import MIMTGallery from "@/component/MIMTGallery";

export default function Page({ data }) {
  console.log(data);

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
  ];

  const pageData = data?.pageData || {};

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6 max-sm:gap-0">

        {/* ✅ LEFT CONTENT SECTION */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ TOP TEXT */}
          <div
            dangerouslySetInnerHTML={{ __html: pageData?.LibraryTopText }}
            className={descriptionCss}
          />

          {/* ✅ GALLERY */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MIMTGallery data={pageData?.LibraryGallery} />
              </div>
            </div>
          </section>

          {/* ✅ LIBRARY DESCRIPTION */}
          <div
            dangerouslySetInnerHTML={{ __html: pageData?.LibraryDescription }}
            className={descriptionCss}
          />

          {/* ✅ FEATURES LIST */}
          <h3 className="text-2xl font-semibold mt-10">{pageData?.LF_Heading}</h3>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
            <li>{pageData?.LF_1}</li>
            <li>{pageData?.LF_2}</li>
            <li>{pageData?.LF_3}</li>
            <li>{pageData?.LF_4}</li>
          </ul>

          {/* ✅ LIBRARY COLLECTION */}
          <div
            dangerouslySetInnerHTML={{ __html: pageData?.LibraryCollection }}
            className={`${descriptionCss} mt-10`}
          />

          {/* ✅ LIBRARY SERVICES */}
          <div
            dangerouslySetInnerHTML={{ __html: pageData?.LibraryServices }}
            className={`${descriptionCss} mt-10`}
          />

          {/* ✅ LIBRARY RULES */}
          <div
            dangerouslySetInnerHTML={{ __html: pageData?.LibraryRules }}
            className={`${descriptionCss} mt-10`}
          />

        </div>

        {/* ✅ SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
