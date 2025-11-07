import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";
import MIMTGallery from "@/component/MIMTGallery";

export default function Page({ data }) {
  console.log(data);

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
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
            <h2 className="text-3xl font-novaBold text-white mb-6 border-l-8 border-secondary pl-4">
              Communication Lab
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: data?.pageData?.CommunicationLabDesc }}
              className={`${descriptionCss} bg-gray-50 p-6 rounded-xl shadow-sm leading-relaxed text-[17px]`}
            />
            <section className="py-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MIMTGallery data={data?.pageData?.CommunicationLabGallery} />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
