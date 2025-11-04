import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";
import Image from "next/image";
import { IMAGE_PATH } from "@/configs/config";

export default function Page({ data }) {
  const page = data?.pageData;

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
  ];

  // ✅ Dynamic array of all Titles + Images
  const mouItems = Array.from({ length: 8 }, (_, i) => ({
    title: page?.[`AOCTitle${i + 1}`],
    image: page?.[`AOCImage${i + 1}`],
  })).filter((item) => item.image);

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-4 gap-10 px-3 sm:px-6">

        {/* ✅ LEFT MAIN CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ TOP DESCRIPTION */}
          <div
            dangerouslySetInnerHTML={{
              __html: page?._InstitutionalMembershipTopText,
            }}
            className={`${descriptionCss} mb-10`}
          />

          {/* ✅ GRID OF MOU ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {mouItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl shadow-sm hover:shadow-md overflow-hidden transition flex flex-col"
              >
                {/* ✅ IMAGE (FULL HEIGHT, EVEN SIZE) */}
                <div className="w-full h-[340px] bg-gray-100 relative">
                  <Image
                    src={IMAGE_PATH + item.image}
                    alt={item.title}
                    fill
                    className=" object-center"
                  />
                </div>

                {/* Title */}
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>

          {/* ✅ END TEXT → NOW HTML CONTENT */}
          {page?.AOCEnd && (
            <div
              dangerouslySetInnerHTML={{ __html: page.AOCEnd }}
              className={`${descriptionCss} mt-10`}
            />
          )}

        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
