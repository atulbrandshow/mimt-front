"use client";

import React, { useEffect, useState } from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { IMAGE_PATH } from "@/configs/config";

export default function Page({ data }) {
  const p = data?.pageData;

  // ✅ 15 Recruiters list generate
  const recruiters = Array.from({ length: 15 }).map((_, i) => ({
    img: p[`SliderImage_${i + 1}`],
    desc: p[`SliderDescription_${i + 1}`],
  }));

  const SideBarLink = [
    { name: "Our Recruiters", link: "" },
    { name: "Placement Reports", link: "" },
    { name: "Corporate Partners", link: "" },
    { name: "Training Activities", link: "" },
  ];

  // ✅ Auto slider – index control
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const total = recruiters.filter(r => r.img || r.desc).length;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // ✅ Auto slide every 3 secs

    return () => clearInterval(interval);
  }, [recruiters]);

  const activeRecruiters = recruiters.filter(r => r.img || r.desc);

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-16 px-4 gap-10">

        {/* ✅ LEFT SECTION */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-10">
            {p?.RecruitersSaysTitle}
          </h1>

          {/* ✅ AUTO SLIDER */}
          <div className="relative w-full h-auto">
            {activeRecruiters.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                  ${current === index ? "opacity-100" : "opacity-0"}
                `}
              >
                <div className="p-8 rounded-2xl border border-gray-200 shadow-md bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    
                    {/* ✅ IMAGE */}
                    <div className="flex justify-center">
                      {item.img ? (
                        <img
                          src={IMAGE_PATH + item.img}
                          alt=""
                          className="w-40 h-40 rounded-full object-cover border-4 border-purple-600 p-1 bg-white shadow"
                        />
                      ) : (
                        <div className="w-40 h-40 bg-gray-200 rounded-full" />
                      )}
                    </div>

                    {/* ✅ DESCRIPTION (HTML Support) */}
                    <div className="md:col-span-2 text-gray-700 text-lg leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ DOT INDICATORS */}
          <div className="flex justify-center mt-6 space-x-2">
            {activeRecruiters.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all
                  ${current === i ? "bg-purple-600" : "bg-gray-300"}
                `}
              />
            ))}
          </div>
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"Placements"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
