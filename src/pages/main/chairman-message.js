"use client";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import React from "react";

const ChairmanMessagePage = ({ data }) => {
  const d = data?.pageData;
  console.log(data);

  return (
    <>
      <div className="bg-white">
        <Header BreadCrumb={data?.breadCrumb} data={data} />
        <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6 max-sm:gap-0">
          <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
            <div dangerouslySetInnerHTML={{ __html: d?.ChairmanDescription }} />
          </div>
          <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
            <SideBar />
          </div>
        </section>
      </div>
    </>
  );
};

export default ChairmanMessagePage;
