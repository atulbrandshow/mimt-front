"use client";

import React, { useEffect, useState } from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { IMAGE_PATH } from "@/configs/config";

export default function AlumniPage({ data }) {
  const p = data?.pageData || {};

  // ✅ Prepare alumni list dynamically
  const alumni = Array.from({ length: 6 }).map((_, i) => ({
    name: p[`Stu_name_${i + 1}`] || "",
    company: p[`Stu_company_${i + 1}`] || "",
    msg: p[`Stu_msg_${i + 1}`] || "",
    img: p[`Stu_img_${i + 1}`] || null,
  }));

  // ✅ Filter valid entries
  const list = alumni.filter((a) => a.name || a.msg);

  // ✅ Slider: 2 cards per slide
  const slides = [];
  for (let i = 0; i < list.length; i += 2) {
    slides.push(list.slice(i, i + 2));
  }

  const total = slides.length;
  const [current, setCurrent] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    if (total === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  const SideBarLink = [
    { name: "Our Alumni", link: "" },
    { name: "Student Success", link: "" },
    { name: "Campus Life", link: "" },
    { name: "Placement Stories", link: "" },
  ];

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="max-w-[1200px] ml-auto py-16 px-16">
            <h1 className="text-3xl font-novaBold text-white mb-10">
              {p?.AlumniTitle || "What Our Students Say"}
            </h1>
            {total === 0 && (
              <p className="text-gray-500 text-lg">No alumni data found.</p>
            )}
            {total > 0 && (
              <div className="relative w-full overflow-hidden">
                <div className="rounded-[40px] relative w-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {slides.map((group, idx) => (
                      <div
                        key={idx}
                        className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        {group.map((item, index) => (
                          <div
                            key={index}
                            className="
                            bg-white border border-gray-200 
                            rounded-[40px] drop-shadow-xl p-6 
                            shadow-sm hover:shadow-lg 
                            transition-all duration-300
                          "
                          >
                            <div className="flex items-center gap-4 mb-4">
                              {item.img ? (
                                <img
                                  src={IMAGE_PATH + item.img}
                                  alt={item.name}
                                  className="
                                w-16 h-16 rounded-3xl object-cover 
                                shadow-md border border-gray-200
                                "
                                />
                              ) : (
                                <div className="w-16 h-16 bg-gray-300 rounded-xl" />
                              )}

                              <div>
                                <h3 className="text-lg font-novaSemi text-gray-900">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-gray-500 font-novaReg">
                                  {item.company}
                                </p>
                              </div>
                            </div>

                            {/* ✅ Message */}
                            <p className="text-gray-700 leading-relaxed font-novaReg text-[15px]">
                              {item.msg}
                            </p>
                          </div>

                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all ${current === i ? "bg-purple-600" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"Alumni"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
