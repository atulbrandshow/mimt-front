import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { IMAGE_PATH } from "@/configs/config";

export default function Page({ data }) {
  return (
    <div className="bg-white">
      <div className="mt-14">
        <Header BreadCrumb={data?.breadCrumb} />
      </div>
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full  gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px]">
          <div className=" py-6 px-5">
            <div
              className={`text-white font-novaReg w-full leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: data?.pageData?.AboutDescription }}
            />
            <TopperList pageData={data?.pageData}/>
          </div>
        </div>
        {/* <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar />
        </div> */}
      </section>
    </div>
  );
}
 function TopperList({ pageData }) {
  // Extract all topper indexes dynamically
  const topperIndexes = Object.keys(pageData)
    .filter((key) => key.startsWith("Card_Name_"))
    .map((key) => key.split("_")[2]);

  // Convert pageData into a usable array of card objects
  const cardsArray = topperIndexes.map((index) => ({
    Card_Name: pageData[`Card_Name_${index}`],
    Card_Branch: pageData[`Card_Branch_${index}`],
    Card_Marks: pageData[`Card_Marks_${index}`],
    Card_img: pageData[`Card_img_${index}`],
  }));

  return (
    <section className="backdrop-blur-xl bg-white/30 py-12 rounded-[50px]">
      <div className="w-full mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white  mb-3">Toppers of the Year</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{pageData?.Topper_Desc}</p>
        </div>

        {/* Engineering Toppers Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cardsArray.slice(0, 15).map((card, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer flex flex-col items-center text-center bg-white text-gray-800 rounded-2xl shadow-xl p-6 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-blue-900 border-t-4"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b4c] to-[#182b74] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Profile Image */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#0d1b4c] shadow-md bg-white z-10">
                <img
                  src={IMAGE_PATH + card.Card_img}
                  alt={card.Card_Name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 mt-6 space-y-2 group-hover:text-white transition-colors">
                <h3 className="text-lg font-semibold">{card.Card_Name}</h3>
                <p className="text-sm opacity-80">{card.Card_Branch}</p>
                <p className="text-sm font-bold text-green-600 group-hover:text-green-300">
                  {card.Card_Marks}
                </p>
              </div>

              {/* Description */}
              <p className="relative z-10 mt-4 text-sm text-gray-500 px-3 group-hover:text-gray-200 transition-colors">
                Proudly showcasing our student achievements in academics.
              </p>
            </div>
          ))}
        </div>

        {/* MBA Section */}
        {pageData?.MBA_Title && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              {pageData.MBA_Title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {cardsArray.slice(15).map((card, idx) => (
                <div
                  key={idx}
                  className="relative cursor-pointer flex flex-col items-center text-center bg-white text-gray-800 rounded-2xl shadow-xl p-6 overflow-hidden group transition-all  hover:-translate-y-2 hover:shadow-2xl border-blue-900 border-t-4 duration-500" 
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b4c] to-[#182b74] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Profile Image */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#0d1b4c] shadow-md bg-white z-10">
                    <img
                      src={IMAGE_PATH + card.Card_img}
                      alt={card.Card_Name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 mt-6 space-y-2 group-hover:text-white transition-colors">
                    <h3 className="text-lg font-semibold">{card.Card_Name}</h3>
                    <p className="text-sm font-bold text-green-600 group-hover:text-green-300">
                      {card.Card_Marks}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 mt-4 text-sm text-gray-500 px-3 group-hover:text-gray-200 transition-colors">
                    Celebrating outstanding performance in MBA.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

