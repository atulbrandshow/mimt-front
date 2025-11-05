"use client";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { IMAGE_PATH } from "@/configs/config";
import { descriptionCss } from "@/configs/css.config";

const SideBarLink = [
  { name: "Our Identity", link: "/overview" },
  { name: "Leadership", link: "" },
  { name: "Governance", link: "" },
  { name: "Recognition and Approvals", link: "" },
  { name: "Awards and Rankings", link: "" },
  { name: "Institution Social Responsibility", link: "" }
];

export default function ViceChairmanMessagePage({ data }) {
  if (!data) return <p>No data available</p>;
  const page = data?.pageData;
  console.log(data);

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <div className="bg-primary">
        <div className="bg-white h-20 rounded-bl-3xl" />
      </div>
      <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
        <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
          <div className="max-w-[1200px] ml-auto py-16 px-16 flex flex-col md:flex-row gap-8 items-start">
            {page?.ViceChairmanImage && (
              <div className="md:w-[220px] w-full flex justify-start">
                <img
                  src={IMAGE_PATH + page.ViceChairmanImage}
                  alt="Chairman"
                  className="rounded-xl shadow-md object-cover w-[220px] h-[180px] border border-gray-200"
                />
              </div>
            )}
            {page?.ViceChairmanDescription && (
              <div
                className={`${descriptionCss} w-full leading-relaxed`}
                dangerouslySetInnerHTML={{ __html: page.ViceChairmanDescription }}
              />
            )}
          </div>
        </div>
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>
      </section>
    </div>
  );
}
