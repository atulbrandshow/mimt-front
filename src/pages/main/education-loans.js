import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";
import { IMAGE_PATH } from '@/configs/config'

export default function Page({ data }) {
  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
  ];

  const pageData = data?.pageData || {};

  // ✅ Extract dynamic bank details
  const bankDetails = Object.keys(pageData)
    .filter((key) => key.startsWith("BankDetail_"))
    .sort((a, b) => Number(a.split("_")[1]) - Number(b.split("_")[1]))
    .map((key) => pageData[key]);

  // ✅ Bank images
  const bankImages = pageData?.Bank_imgs || [];

  // ✅ Combine image + bank HTML text
  const bankCards = bankImages.map((img, index) => {
    const detailRaw = bankDetails[index] || "";

    // ✅ BankDetail lines -> convert to HTML
    const [bankName = "", rate = ""] = detailRaw.split("\n");

    const htmlContent = `
      <p style="font-size: 18px; font-weight: 600; color: #222;">${bankName}</p>
      <p style="font-size: 15px; color: #555;">${rate}</p>
    `;

    return {
      img,
      htmlContent,
    };
  });

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-20 max-sm:py-6 gap-10 px-3 sm:px-6">

        {/* ✅ LEFT CONTENT */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ TITLE */}
          <h2 className="text-3xl font-bold text-black mb-6 border-l-8 border-[#fdd023] pl-4">
            Education Loan
          </h2>

          {/* ✅ DESCRIPTION */}
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.EducationloanDescription,
            }}
            className={`${descriptionCss} bg-gray-50 p-6 rounded-xl shadow-sm mb-10`}
          />

          {/* ✅ BANK CARDS */}
          <section className="py-12 bg-white">
            <h3 className="text-2xl font-semibold mb-6">Our Banking Partners</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {bankCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition text-center"
                >
                  {/* ✅ Bank Logo */}
                  <div className="w-full h-28 flex items-center justify-center mb-4">
                    <img
                      src={`${IMAGE_PATH}${item.img}`}
                      alt="bank-logo"
                      className="max-h-24 object-contain"
                    />
                  </div>

                  {/* ✅ HTML TEXT RENDER */}
                  <div
                    dangerouslySetInnerHTML={{ __html: item.htmlContent }}
                  />
                </div>
              ))}

            </div>
          </section>
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
