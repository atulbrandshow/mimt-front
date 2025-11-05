"use client";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import React from "react";

const MissionAndVisionPage = ({ data }) => {
const d = data?.pageData;
  console.log(data);

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="max-w-[1200px] ml-auto py-16 px-16">
            <div className="max-w-5xl w-full space-y-14">
              <div className="relative bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
                {/* Yellow Highlight Bar */}
                <div className="absolute left-0 top-0 h-full w-2 bg-[#fdd023] rounded-l-xl"></div>

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="text-[#fdd023] mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{d?.VisionTitle}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: d?.VisionDescription}} />
                  </div>
                </div>
              </div>

              {/* ✅ Mission */}
              <div className="relative bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
                {/* Yellow Highlight Bar */}
                <div className="absolute left-0 top-0 h-full w-2 bg-[#fdd023] rounded-l-xl"></div>

                <div className="flex items-start gap-6">
                  {/* Mission Icon */}
                  <div className="text-[#fdd023] mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{d?.MissionTitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: d?.MissionDescription}} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar />
        </div>
      </section>
    </div>
  );
};

export default MissionAndVisionPage;
