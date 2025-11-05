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
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="max-w-[1200px] ml-auto py-16 px-16">
            <h2 className="text-3xl font-novaBold text-white mb-6 border-l-8 border-[#fdd023] pl-4">
              Education Loan
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.EducationloanDescription,
              }}
              className={`${descriptionCss} bg-white p-6 rounded-3xl shadow-sm mb-10`}
            />
            <section className="p-10 bg-white rounded-3xl">
              <h3 className="text-2xl font-novaSemi mb-6">Our Banking Partners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {bankCards.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[40px] shadow-md drop-shadow-2xl p-6 border hover:shadow-lg transition text-center"
                  >
                    <div className="w-full h-28 flex items-center justify-center mb-4">
                      <img
                        src={`${IMAGE_PATH}${item.img}`}
                        alt="bank-logo"
                        className="max-h-24 object-contain"
                      />
                    </div>
                    <div
                    className="font-novaReg"
                      dangerouslySetInnerHTML={{ __html: item.htmlContent }}
                    />
                  </div>
                ))}
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
