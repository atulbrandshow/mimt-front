import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { IMAGE_PATH } from "@/configs/config";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  if (!data) return <p>No data available</p>;

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

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 px-3 sm:px-6 gap-10">

        {/* ✅ LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ IMAGE + CONTENT IN A ROW (Modern Layout) */}
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* ✅ Much Smaller Left Image with Elegant Design */}
            {page?.ChairmanImage && (
              <div className="md:w-[220px] w-full flex justify-start">
                <img
                  src={IMAGE_PATH + page.ChairmanImage}
                  alt="Chairman"
                  className="rounded-xl shadow-md object-cover w-[220px] h-[180px] border border-gray-200"
                />
              </div>
            )}

            {/* ✅ Text Content (Right Side) */}
            {page?.ChairmanDescription && (
              <div
                className={`${descriptionCss} w-full leading-relaxed`}
                dangerouslySetInnerHTML={{ __html: page.ChairmanDescription }}
              />
            )}
          </div>
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
