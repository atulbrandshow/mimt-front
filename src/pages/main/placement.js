import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";
import { IMAGE_PATH } from "@/configs/config";

export default function Page({ data }) {
  console.log(data);

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
  ]

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6 max-sm:gap-0">
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div dangerouslySetInnerHTML={{ __html: data?.pageData?.Placement_Description }} className={descriptionCss} />
          <div dangerouslySetInnerHTML={{ __html: data?.pageData?.Recruit_Description_1 }} className={descriptionCss} />
        </div>
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="flex flex-wrap items-center justify-between bg-blue-800/70 rounded-xl overflow-hidden p-6 md:p-10 gap-6">

            {/* Left Content Section */}
            <div className="flex-1 min-w-[280px] text-white prose prose-p:text-white prose-p:bg-transparent">
              <div
                dangerouslySetInnerHTML={{ __html: data?.pageData?.Recruit_Desc_2 }}
                className={descriptionCss}
              />
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center">
              <img
                src={IMAGE_PATH + data?.pageData?.Recruit_img}
                alt="Recruit"
                className="rounded-xl shadow-lg object-cover w-full h-auto max-h-max transition-transform duration-300 hover:scale-105"
              />
            </div>

          </div>
        </div>

        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
