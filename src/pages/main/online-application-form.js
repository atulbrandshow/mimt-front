import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";

export default function OnlineApplicationForm({ data }) {

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
  ];

  return (
    <div className="bg-gray-50">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 gap-10 py-16 px-4 sm:px-6">

        {/* ✅ Left Form Section */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ Card Container */}
          <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-200">

            <h2 className="text-2xl font-bold mb-8 border-l-8 border-yellow-400 pl-4">
              Online Application Form
            </h2>

            <form className="space-y-6">

              {/* ✅ Full Name */}
              <div>
                <label className="block font-semibold mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input type="text" className="w-full border rounded-lg px-4 py-3 focus:outline-yellow-400" placeholder="Enter your full name" />
              </div>

              {/* ✅ Mobile + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">
                    Mobile <span className="text-red-600">*</span>
                  </label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter mobile number" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input type="email" className="w-full border rounded-lg px-4 py-3" placeholder="Enter email address" />
                </div>
              </div>

              {/* ✅ Father's Name + Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">
                    Father's Name <span className="text-red-600">*</span>
                  </label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter father's name" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Father's Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter father's mobile number" />
                </div>
              </div>

              {/* ✅ Course Dropdown */}
              <div>
                <label className="block font-semibold mb-1">
                  Course <span className="text-red-600">*</span>
                </label>
                <select className="w-full border rounded-lg px-4 py-3 bg-white">
                  <option>Select Course</option>
                  <option>B.Tech</option>
                  <option>MBA</option>
                  <option>BBA</option>
                  <option>BCA</option>
                  <option>B.Com</option>
                  <option>Pharmacy</option>
                </select>
              </div>

              {/* ✅ Address */}
              <div>
                <label className="block font-semibold mb-1">Address</label>
                <textarea className="w-full border rounded-lg px-4 py-3" rows="3" placeholder="Enter your address"></textarea>
              </div>

              {/* ✅ State + City + Pin */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block font-semibold mb-1">
                    State <span className="text-red-600">*</span>
                  </label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter state" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    City <span className="text-red-600">*</span>
                  </label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter city" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Pin Code</label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter pin code" />
                </div>
              </div>

              {/* ✅ Academic Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block font-semibold mb-1">10th Percentage</label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="%" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">12th Percentage</label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="%" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Graduation Percentage</label>
                  <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="%" />
                </div>
              </div>

              {/* ✅ Referred By */}
              <div>
                <label className="block font-semibold mb-1">
                  Referred By (Counsellor Name) <span className="text-red-600">*</span>
                </label>
                <input type="text" className="w-full border rounded-lg px-4 py-3" placeholder="Enter counsellor name" />
              </div>

              {/* ✅ Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-xl text-lg shadow hover:bg-yellow-600 transition-all"
              >
                Submit Application
              </button>

            </form>
          </div>
        </div>

        {/* ✅ Right Sidebar */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
