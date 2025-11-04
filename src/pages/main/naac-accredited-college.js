import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function NAACPage({ data }) {
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

        {/* ✅ LEFT CONTENT — SINGLE CARD */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-10 space-y-14">

            {/* ✅ What is NAAC */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
                {pageData?.NAACHeading}
              </h2>

              <div
                className={`${descriptionCss} text-gray-700 space-y-4`}
                dangerouslySetInnerHTML={{ __html: pageData?.NAACdescription }}
              />
            </section>

            {/* ✅ Objective */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
                NAAC Objective
              </h2>

              <div
                className={`${descriptionCss} text-gray-700 space-y-4`}
                dangerouslySetInnerHTML={{ __html: pageData?.NAACObjective }}
              />
            </section>

            {/* ✅ Criteria */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
                NAAC Criteria
              </h2>

              <div
                className={`${descriptionCss} text-gray-700 space-y-4`}
                dangerouslySetInnerHTML={{ __html: pageData?.NAACCriteria }}
              />
            </section>

            {/* ✅ Accreditation */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
                NAAC Accreditation
              </h2>

              <div
                className={`${descriptionCss} text-gray-700 space-y-4`}
                dangerouslySetInnerHTML={{
                  __html: pageData?.NAACAccreditation,
                }}
              />
            </section>

            {/* ✅ Accreditation Importance */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
                NAAC Accreditation Importance
              </h2>

              <div
                className={`${descriptionCss} text-gray-700 space-y-4`}
                dangerouslySetInnerHTML={{
                  __html: pageData?.NAACAccreditationImportance,
                }}
              />
            </section>

            {/* ✅ Cycles & Reassessment */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-l-8 border-yellow-400 pl-4">
                Cycles & Reassessment
              </h2>

              <div
                className={`${descriptionCss} text-gray-700 space-y-4`}
                dangerouslySetInnerHTML={{
                  __html: pageData?.["NAACCyclesAndReassessment."],
                }}
              />
            </section>
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
