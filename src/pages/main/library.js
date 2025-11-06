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

      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="max-w-[1200px] ml-auto py-16 px-16">
            {/* ✅ TOP TEXT */}
            <div
              dangerouslySetInnerHTML={{ __html: pageData?.LibraryTopText }}
              className="text-white font-novaReg mb-5"
            />

            {/* ✅ GALLERY */}
            <section className="py-2">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MIMTGallery data={pageData?.LibraryGallery} />
                </div>
              </div>
            </section>

            {/* ✅ LIBRARY DESCRIPTION */}
            <div
              dangerouslySetInnerHTML={{ __html: pageData?.LibraryDescription }}
              className="text-white font-novaReg mb-5"
            />

            {/* ✅ FEATURES LIST */}
            <h3 className="text-2xl font-semibold text-white mt-10">{pageData?.LF_Heading}</h3>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-100">
              <li>{pageData?.LF_1}</li>
              <li>{pageData?.LF_2}</li>
              <li>{pageData?.LF_3}</li>
              <li>{pageData?.LF_4}</li>
            </ul>

            {/* ✅ LIBRARY COLLECTION */}
            <div
              dangerouslySetInnerHTML={{ __html: pageData?.LibraryCollection }}
              className={`mt-10`}
            />

            {/* ✅ LIBRARY SERVICES */}
            <div
              dangerouslySetInnerHTML={{ __html: pageData?.LibraryServices }}
              className={`mt-10`}
            />

            {/* ✅ LIBRARY RULES */}
            <div
              dangerouslySetInnerHTML={{ __html: pageData?.LibraryRules }}
              className={`mt-10`}
            />

          </div>
        </div>

        {/* ✅ SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
