import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { FaArrowRight } from "react-icons/fa";

export default function PayYourFeePage({ data }) {
  const pageData = data?.pageData || {};

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
  ];

  // ✅ Dynamic Fee List Mapping
  const feeList = [
    {
      title: pageData?.MMIT_Title,
      link: pageData?.MIMT_Link,
    },
    {
      title: pageData?.MIET_Title,
      link: pageData?.MIET_link,
    },
    {
      title: pageData?.Pharma_Title,
      link: pageData?.Pharma_Link,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 px-3 sm:px-6 gap-10">

        {/* ✅ LEFT COLUMN */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ ONE BIG CARD */}
          <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-10 space-y-10">

            {/* ✅ Main Page Title */}
            <h2 className="text-2xl font-bold border-l-8 border-yellow-400 pl-4">
              {pageData?.PayYourFeeTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-8">

              {feeList.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                    {item?.title}
                  </h3>

                  <a
                    href={item?.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                  >
                    Pay Now <FaArrowRight size={14} />
                  </a>
                </div>
              ))}

            </div>

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
