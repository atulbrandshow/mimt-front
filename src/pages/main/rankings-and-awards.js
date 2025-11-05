import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";

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
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="max-w-[1200px] ml-auto py-16 px-16">
            <div dangerouslySetInnerHTML={{ __html: data?.pageData?.AwardsTitle }} className="prose prose-li:text-white prose-li:font-novaReg mb-5" />
            <div dangerouslySetInnerHTML={{ __html: data?.pageData?.AwardsAchievementsDescription }} className="prose prose-li:text-white prose-li:font-novaReg prose-li:leading-snug" />
            <div dangerouslySetInnerHTML={{ __html: data?.pageData?.Ranking }} className="prose prose-li:text-white prose-li:font-novaReg mb-5" />
            <div dangerouslySetInnerHTML={{ __html: data?.pageData?.RankingDescription }} className="prose prose-li:text-white prose-li:font-novaReg prose-li:leading-snug" />
          </div>
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
