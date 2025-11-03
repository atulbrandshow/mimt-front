import React from "react";
import Header from "@/component/Header";
import { IMAGE_PATH } from "@/configs/config";

export default function Page({ data }) {
  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
  ];

  return (
    <div className="bg-[#f4f7ff] min-h-screen">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <section className="w-full max-w-[1600px] mx-auto py-20 px-4 sm:px-8">
        <PlacementCards pageData={data?.pageData} />
      </section>
    </div>
  );
}

function PlacementCards({ pageData }) {
  if (!pageData) return null;

  // Group dynamic backend data
  const groupedCards = Object.keys(pageData).reduce((acc, key) => {
    const match = key.match(/_(\d+)$/);
    if (match) {
      const index = match[1];
      if (!acc[index]) acc[index] = {};
      const cleanKey = key.replace(/_\d+$/, "");
      acc[index][cleanKey] = pageData[key];
    }
    return acc;
  }, {});

  const cardsArray = Object.values(groupedCards);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {cardsArray.map((card, idx) => (
        <div
          key={idx}
          className="relative cursor-pointer flex flex-col items-center text-center bg-white text-gray-800 rounded-2xl shadow-xl p-6 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-blue-900 border-t-4"
        >
          {/* Gradient Background Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b4c] to-[#182b74] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Profile Image */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#0d1b4c] shadow-md bg-white z-10">
            <img
              src={IMAGE_PATH + card.Card_img}
              alt={card.Card_Name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 mt-6 space-y-2 group-hover:text-white transition-colors">
            <h3 className="text-lg font-semibold">{card.Card_Name}</h3>
            <p className="text-sm opacity-80">{card.Card_Course}</p>
            {card.Card_Company && (
              <p className="text-sm font-medium text-[#4ea8ff] group-hover:text-[#b7d7ff]">
                {card.Card_Company.replace("Company :", "").trim()}
              </p>
            )}
            <p className="text-sm font-bold text-green-600 group-hover:text-green-300">
              {card.Card_CTC}
            </p>
          </div>

          {/* Description */}
          <p className="relative z-10 mt-4 text-sm text-gray-500 px-3 group-hover:text-gray-200 transition-colors">
            Proudly showcasing our student achievements in top organizations.
          </p>
        </div>
      ))}
    </div>
  );
}
