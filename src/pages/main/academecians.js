import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import MIMTGallery from "@/component/MIMTGallery";
import { descriptionCss } from "@/configs/css.config";

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

  // ✅ Check meaningful content
  const hasContent = (value) => {
    if (!value || value === "" || value === false) return false;
    if (Array.isArray(value)) return value.some(hasContent);
    if (typeof value === "object")
      return Object.values(value).some(hasContent);
    return true;
  };

  // ✅ Recursive render
  const renderValue = (value) => {
    if (!hasContent(value)) return null;

    // Strings containing HTML
    if (typeof value === "string" && /<[^>]+>/.test(value)) {
      return (
        <div
          className={descriptionCss}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      );
    }

    // Array
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc ml-6">
          {value.map((item, i) => (
            <li key={i}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    }

    // Object
    if (typeof value === "object") {
      return (
        <div className="ml-3 border-l border-gray-300 pl-3">
          {Object.entries(value).map(([k, v]) => (
            <div key={k} className="mb-2">
              <strong className="text-black">{k}</strong>
              <div className="ml-2 mt-1">{renderValue(v)}</div>
            </div>
          ))}
        </div>
      );
    }

    return <span className="text-black">{value}</span>;
  };

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 px-3 sm:px-6 gap-10">

        {/* LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ Academicians Description */}
          {renderValue(data?.pageData?.AcademiciansDescription)}

          {/* ✅ GALLERY */}
          {data?.pageData?.AcademiciansGallery &&
            data?.pageData?.AcademiciansGallery?.length > 0 && (
              <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <MIMTGallery data={data?.pageData?.AcademiciansGallery} />
                  </div>
                </div>
              </section>
            )}
        </div>

        {/* ✅ SIDEBAR WITH IMAGE */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar
            title="About Us"
            LinkList={SideBarLink}
            image={data?.pageData?.AcademiciansImage || "/mmit/bank-loan-sidebar.jpg"}
          />
        </div>
      </section>
    </div>
  );
}
