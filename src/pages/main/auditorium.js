import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { IMAGE_PATH } from "@/configs/config";
import { descriptionCss } from "@/configs/css.config";
import MIMTGallery from "@/component/MIMTGallery";

export default function Page({ data }) {
  if (!data) return <p>No data available</p>;

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" }
  ];

  const pageData = data?.pageData || {};

  return (
    <div className="bg-white">
      {/* Header */}
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-2 gap-10 px-3 sm:px-6 max-sm:gap-0">

        {/* LEFT CONTENT AREA */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ Auditorium Description */}
          <div
            dangerouslySetInnerHTML={{ __html: pageData?.AuditoriumDesc }}
            className={descriptionCss}
          />

          {/* ✅ Gallery Section (same as Transport) */}
          {pageData?.AuditoriumGallery?.length > 0 && (
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto">
                
                {/* GALLERY GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MIMTGallery data={pageData.AuditoriumGallery} />
                </div>

              </div>
            </section>
          )}

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title="About Us" LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
