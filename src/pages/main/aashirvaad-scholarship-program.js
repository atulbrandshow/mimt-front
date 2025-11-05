"use client";

import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  const p = data?.pageData;

  const SideBarLink = [
    { name: "Scholarships", link: "" },
    { name: "Education Loan", link: "" },
    { name: "Fee Structure", link: "" },
    { name: "Admission Process", link: "" }
  ];

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-16 px-4 gap-10">

        {/* LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* Session Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6 border-l-8 border-[#fdd023] pl-4">
            {p?.Session_Title_}
          </h1>

          {/* Short Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {p?.Short_Desc}
          </p>

          {/* Scholarship Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-10 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-[#831d82] mb-4">
              {p?.Scolarship_Title_1}
            </h2>

            <div
              className="text-gray-700 leading-relaxed text-lg space-y-4"
              dangerouslySetInnerHTML={{ __html: p?.Scolarship_Desc_1 || "" }}
            />
          </div>

          {/* Scholarship Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-10 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-[#831d82] mb-4">
              {p?.Scolarship_Title_2}
            </h2>

            <div
              className="text-gray-700 leading-relaxed text-lg space-y-4"
              dangerouslySetInnerHTML={{ __html: p?.Scolarship_Desc_2 || "" }}
            />
          </div>

          {/* NOTE Section */}
          <div className="bg-yellow-100 border-l-8 border-yellow-500 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Important Note</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {p?.Note_Desc}
            </p>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"Scholarships"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}


