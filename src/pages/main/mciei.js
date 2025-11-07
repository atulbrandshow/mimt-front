import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";
import Image from "next/image";
import { IMAGE_PATH } from "@/configs/config";

export default function Page({ data }) {
  const page = data?.pageData;

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

        {/* LEFT MAIN CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12 space-y-14">

          {/* ✅ MAIN HEADER DESCRIPTION */}
          {page?.McieiTopText && (
            <div
              dangerouslySetInnerHTML={{ __html: page?.McieiTopText }}
              className={`${descriptionCss} text-gray-700`}
            />
          )}

          {/* ✅ GREEN TOP SECTION - (IMAGE + THRUST AREA) */}
          <div className="bg-gradient-to-br from-green-800 to-green-900 p-10 rounded-2xl grid md:grid-cols-2 gap-10 items-center text-white shadow-xl">

            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">THRUST AREAS</h3>
              <div
                dangerouslySetInnerHTML={{ __html: page?.McieiThrustArea }}
                className={`${descriptionCss} text-white leading-relaxed`}
              />
            </div>

            {/* RIGHT IMAGE */}
            {page?.McieiThrustAreaImage && (
              <div className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={IMAGE_PATH + page?.McieiThrustAreaImage}
                  alt="Thrust Area Image"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* ✅ MAIN LONG DESCRIPTION */}
          {page?.McieiDesc && (
            <div
              dangerouslySetInnerHTML={{ __html: page?.McieiDesc }}
              className={`${descriptionCss} text-gray-800 leading-relaxed`}
            />
          )}

          {/* ✅ 4 CARDS — SAME GRADIENT (yellow-400 → white) */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* ✅ INCUBATION PROGRAM */}
            <div className="p-10 rounded-xl shadow-lg text-black bg-gradient-to-br from-yellow-400 to-yellow-500">
              <h3 className="text-2xl font-bold mb-4">INCUBATION PROGRAMS</h3>
              <div
                dangerouslySetInnerHTML={{ __html: page?.IncubationProgram }}
                className={`${descriptionCss}`}
              />
            </div>

            {/* ✅ VISION */}
            <div className="p-10 rounded-xl shadow-lg text-black bg-gradient-to-br from-yellow-400 to-yellow-500">
              <h3 className="text-2xl font-bold mb-4">VISION</h3>
              <div
                dangerouslySetInnerHTML={{ __html: page?.McieiVision }}
                className={`${descriptionCss}`}
              />
            </div>

            {/* ✅ MISSION */}
            <div className="p-10 rounded-xl shadow-lg text-black bg-gradient-to-br from-yellow-400 to-yellow-500">
              <h3 className="text-2xl font-bold mb-4">MISSION</h3>
              <div
                dangerouslySetInnerHTML={{ __html: page?.McieiMission }}
                className={`${descriptionCss}`}
              />
            </div>

            {/* ✅ PARTNERSHIP */}
            <div className="p-10 rounded-xl shadow-lg text-black bg-gradient-to-br from-yellow-400 to-yellow-500">
              <h3 className="text-2xl font-bold mb-4">
                PARTNERSHIPS & ASSOCIATIONS
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: page?.McieiPartnership }}
                className={`${descriptionCss}`}
              />
            </div>
          </div>

        </div>


        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <div className="bg-primary w-[94vw] rounded-r-[100px]">
        <div className="max-w-[1500px] mx-auto py-10">
          <div
            dangerouslySetInnerHTML={{ __html: page?.McieiDesc3 }}
            className={`${descriptionCss} text-gray-700 bg-white p-4 rounded-3xl leading-relaxed text-lg`}
          />
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <div className="group p-6 bg-white rounded-3xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors">
                MCIEI - KEY DIFFERENTIATORS
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: page?.McieiKeys }}
                className={`${descriptionCss} text-gray-700 space-y-3 leading-relaxed animate-fadeIn`}
              />
            </div>
            <div className="group p-6 bg-white rounded-3xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors">
                SUPPORT TO STARTUPS
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: page?.McieiStartups }}
                className={`${descriptionCss} text-gray-700 space-y-3 leading-relaxed animate-fadeIn`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
