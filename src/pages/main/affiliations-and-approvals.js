import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  if (!data) return <p>No data available</p>;

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
  ];

  const pageData = data?.pageData || {};

  const listItems = [
    { title: pageData?.AffiliationsApprovalsListTitle1, link: pageData?.AffiliationsAndApprovalsListLink1 },
    { title: pageData?.AffiliationsApprovalsListTitle2, link: pageData?.AffiliationsAndApprovalsListLink2 },
    { title: pageData?.AffiliationsApprovalsListTitle3, link: pageData?.AffiliationsAndApprovalsListLink3 },
    { title: pageData?.AffiliationsApprovalsListTitle4, link: pageData?.AffiliationsAndApprovalsListLink4 },
  ].filter(item => item.title || item.link);

  return (
    <div className="bg-white">
      {/* ✅ Header */}
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6">

        {/* ✅ LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ Title */}
          {pageData?.AffiliationsAndApprovalsTitle && (
            <h1 className="text-3xl font-semibold text-black mb-6">
              {pageData.AffiliationsAndApprovalsTitle}
            </h1>
          )}

          {/* ✅ List Section */}
          <div className={`${descriptionCss} mt-4`}>
            <ul className="list-disc ml-6 space-y-4 text-gray-700 leading-relaxed">

              {listItems.map((item, index) => (
                <li key={index}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </li>
              ))}

            </ul>
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
