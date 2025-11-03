import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
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
          <div dangerouslySetInnerHTML={{ __html: data?.pageData?.TransportDesc }} className="prose prose-lg max-w-none relative
  prose-headings:font-bold prose-headings:text-gray-900
  prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-4
  prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-700
  prose-strong:text-gray-900 prose-strong:font-semibold
  prose-em:text-gray-800 prose-em:italic
  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 
  prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:rounded-r-lg
  prose-blockquote:text-gray-700 prose-blockquote:italic
  prose-ul:list-none prose-ul:ml-0 prose-ul:my-4
  prose-ol:list-decimal prose-ol:ml-6 prose-ol:my-4
  prose-li:relative prose-li:pl-8 prose-li:my-2 prose-li:text-gray-700 prose-li:leading-relaxed
  prose-table:my-6 prose-table:w-full prose-table:border-collapse
  prose-th:bg-gray-100 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold
  prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700
  prose-code:bg-gray-100 prose-code:text-red-600 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
  prose-pre:border prose-pre:border-gray-800
  prose-img:rounded-lg prose-img:shadow-md prose-img:my-6 prose-img:border prose-img:border-gray-200
  prose-hr:my-8 prose-hr:border-gray-300" />
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
