import React from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";

export default function AdmissionFormPage({ data }) {
  const pageData = data?.pageData || {};

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1600px] mx-auto grid grid-cols-12 py-16 px-3 sm:px-6 gap-10">

        {/* ✅ LEFT SIDE */}
        <div className="col-span-9 max-xl:col-span-8 max-lg:col-span-12">

          {/* ✅ FORM CARD */}
          <div className="bg-white w-full border border-gray-200 shadow-md rounded-2xl p-10">

            {/* ✅ Page Title */}
            <h2 className="text-3xl font-bold border-l-8 border-yellow-400 pl-4 mb-10">
              {pageData?.Pay_Title}
            </h2>

            {/* ✅ FORM */}
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              {/* Student Name */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  Student's Name <span className="text-red-600">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="Enter Student's Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Father's Name */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  Father's Name <span className="text-red-600">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="Enter Father's Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* DOB */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Date of Birth</label>
                <input 
                  type="date"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Address</label>
                <input 
                  type="text"
                  placeholder="Enter Address"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">City</label>
                <input 
                  type="text"
                  placeholder="Enter City"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Postal Code */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Postal Code</label>
                <input 
                  type="text"
                  placeholder="Enter Postal Code"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Country</label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option>Select Country</option>
                  <option>India</option>
                </select>
              </div>

              {/* Course */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">
                  Course <span className="text-red-600">*</span>
                </label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option>--SELECT--</option>
                </select>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Email Id</label>
                <input 
                  type="email"
                  placeholder="Enter Email"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Mobile Number</label>
                <input 
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Application Amount */}
              <div className="flex flex-col">
                <label className="font-semibold mb-1">Application Amount</label>
                <input 
                  type="text"
                  placeholder="Enter Amount"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col sm:col-span-2">
                <label className="font-semibold mb-1">Description</label>
                <textarea
                  rows={4}
                  placeholder="Write Description"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                ></textarea>
              </div>

            </form>

            {/* ✅ SUBMIT BUTTON */}
            <div className="mt-10">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                Submit Application
              </button>
            </div>

          </div>
        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
          <SideBar title="About Us" LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
