import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";

export default function AboutUs({ data }) {
  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} />
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="max-w-6xl ml-auto py-16 px-5">
            <div
              className={`text-white font-novaReg w-full leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: data?.pageData?.AboutDescription }}
            />
          </div>
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar />
        </div>
      </section>
    </div>
  );
}
