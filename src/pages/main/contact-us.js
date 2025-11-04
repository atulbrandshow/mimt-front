"use client";

import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";

export default function Page({ data }) {
  const p = data?.pageData;

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
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-6 gap-10 px-3 sm:px-6">

        {/* ✅ LEFT AREA */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* Yellow Background Box */}
          <div className="bg-[#f9c80e] p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#831d82] mb-6">
              DROP YOUR QUERY
            </h2>

            {/* White Form Card */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Enquire Now</h3>

              <form className="space-y-4">
                <input className="w-full p-3 border rounded" placeholder="Enter Name *" />
                <input className="w-full p-3 border rounded" placeholder="Enter Email Address *" />

                <div className="flex gap-4">
                  <select className="w-28 p-3 border rounded">
                    <option>+91</option>
                  </select>
                  <input className="w-full p-3 border rounded" placeholder="Enter Mobile Number *" />
                </div>

                <div className="flex gap-4">
                  <select className="w-1/2 p-3 border rounded">
                    <option>Select State *</option>
                  </select>
                  <select className="w-1/2 p-3 border rounded">
                    <option>Select City *</option>
                  </select>
                </div>

                <select className="w-full p-3 border rounded">
                  <option>Select Course *</option>
                  <option>B.Tech</option>
                  <option>MBA</option>
                  <option>BBA</option>
                  <option>BCA</option>
                </select>

                <button
                  type="button"
                  className="w-full bg-[#831d82] text-white py-3 text-lg rounded font-semibold hover:bg-[#6b146a] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* ✅ PURPLE INFO BOX (HTML CONTENT) */}
          {/* <div className="bg-gradient-to-br from-[#8e0f8c] to-[#5b0461] text-white pt-5 p-8 rounded-xl shadow-xl mb-8">

            <div
              className="text-lg leading-relaxed space-y-3"
              dangerouslySetInnerHTML={{
                __html: p?.Contact_info_html || p?.Contact_info || ""
              }}
            />

          </div> */}
        </div>

        {/* ✅ RIGHT SIDEBAR AREA */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
