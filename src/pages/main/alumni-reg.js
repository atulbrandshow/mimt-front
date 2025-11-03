import React, { useState } from "react";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { descriptionCss } from "@/configs/css.config";

export default function Page({ data }) {
  if (!data) return <p>No data available</p>;

  const SideBarLink = [
    { name: "Our Identity", link: "/overview" },
    { name: "Leadership", link: "" },
    { name: "Governance", link: "" },
    { name: "Recognition and Approvals", link: "" },
    { name: "Awards and Rankings", link: "" },
    { name: "Institution Social Responsibility", link: "" },
  ];

  const pageData = data?.pageData || {};

  const htmlContent =
    pageData?.Alumni_Desc_HTML ||
    (pageData?.Alumni_Desc
      ? pageData.Alumni_Desc.split(/\n{2,}/)
          .map((p) => `<p>${p.trim()}</p>`)
          .join("")
      : "");

  // ✅ Dynamic fields list
  const fields = [
    { label: "Name", key: "name", required: true },
    { label: "Course", key: "course" },
    { label: "Year of Passing", key: "yearOfPassing" },
    { label: "Email Id", key: "email", required: true },
    { label: "Current Address", key: "currentAddress", type: "textarea" },
    { label: "Contact Number", key: "contactNumber", required: true },
    { label: "Current Organization", key: "currentOrganization" },
    { label: "Position Held", key: "positionHeld" },
    { label: "LinkedIn Account", key: "linkedin" },
    { label: "Facebook Account", key: "facebook" },
  ];

  // ✅ Generate initial form object dynamically
  const initialData = {};
  fields.forEach((f) => (initialData[f.key] = ""));
  const [form, setForm] = useState(initialData);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Submitted:", form);
  };

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />

      <section className="w-full max-w-[1200px] mx-auto grid grid-cols-12 py-20 gap-10 px-3 sm:px-6">
        
        {/* LEFT */}
        <div className="col-span-12 lg:col-span-8">
          
          {pageData?.Alumni_Title && (
            <h1 className="text-3xl font-semibold text-black mb-6">
              {pageData.Alumni_Title}
            </h1>
          )}

          {htmlContent && (
            <div
              className={`${descriptionCss} prose prose-lg max-w-none mb-8`}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          )}

          {/* ✅ Success Message */}
          {submitted && (
            <div className="mb-6 p-4 rounded bg-green-50 border border-green-200 text-green-700">
              ✅ Your form has been submitted successfully (No API Used).
            </div>
          )}

          {/* ✅ ALUMNI FORM */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Alumni Registration</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {fields.map((f) => (
                  <div
                    key={f.key}
                    className={f.type === "textarea" ? "md:col-span-2" : ""}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {f.label} {f.required && <span className="text-red-600">*</span>}
                    </label>

                    {f.type === "textarea" ? (
                      <textarea
                        name={f.key}
                        value={form[f.key]}
                        onChange={handleChange}
                        rows="3"
                        placeholder={`Enter ${f.label}`}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      ></textarea>
                    ) : (
                      <input
                        type={f.type || "text"}
                        name={f.key}
                        value={form[f.key]}
                        onChange={handleChange}
                        placeholder={`Enter ${f.label}`}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    )}
                  </div>
                ))}

              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition"
                >
                  Submit Registration
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 lg:col-span-4">
          <SideBar title={"About Us"} LinkList={SideBarLink} />
        </div>

      </section>
    </div>
  );
}
