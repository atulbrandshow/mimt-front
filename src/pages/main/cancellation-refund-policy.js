import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  console.log(data);

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
      {/* ✅ Header */}
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      {/* ✅ Layout */}
      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 px-3 sm:px-6 gap-10 max-sm:py-6 max-sm:gap-0">
        
        {/* ✅ LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ Policy Description */}
          <div
            dangerouslySetInnerHTML={{ __html: data?.pageData?.policyDescription }}
            className={descriptionCss}
          />
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
