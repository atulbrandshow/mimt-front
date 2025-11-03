import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { IMAGE_PATH } from "@/configs/config";
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
  ]

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6 max-sm:gap-0">
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div dangerouslySetInnerHTML={{ __html: data?.pageData?.TransportDesc }} className={descriptionCss} />
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto ">
              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.pageData?.TransportGallery.map((item, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-grab"
                  >
                    {/* Image */}
                    <img
                      src={IMAGE_PATH + item}
                      alt={item}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide text-center px-4">
                        Mangalmay Group Of Institutions
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
