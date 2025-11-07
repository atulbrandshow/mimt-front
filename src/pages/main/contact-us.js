"use client";

import React from "react";
import Header from "@/component/Header";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Page({ data }) {
  const p = data?.pageData;

  return (
    <div className="bg-white">
      <Header BreadCrumb={data?.breadCrumb} data={data} />
      <section className="w-full max-w-[1600px] mx-auto pt-20 pb-10 px-4 grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-[#f9c80e] p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-novaBold text-black mb-6">
              DROP YOUR QUERY
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-novaBold text-center mb-8">Enquire Now</h3>
              <form className="space-y-4">
                <input className="w-full p-3 border rounded-lg font-novaReg" placeholder="Enter Name *" />
                <input className="w-full p-3 border rounded-lg font-novaReg" placeholder="Enter Email Address *" />
                <div className="flex gap-4">
                  <select className="w-28 p-3 border rounded-lg font-novaReg">
                    <option>+91</option>
                  </select>
                  <input className="w-full p-3 border rounded-lg font-novaReg" placeholder="Enter Mobile Number *" />
                </div>
                <div className="flex gap-4">
                  <select className="w-1/2 p-3 border rounded-lg font-novaReg">
                    <option>Select State *</option>
                  </select>
                  <select className="w-1/2 p-3 border rounded-lg font-novaReg">
                    <option>Select City *</option>
                  </select>
                </div>
                <select className="w-full p-3 border rounded-lg font-novaReg">
                  <option>Select Course *</option>
                  <option>B.Tech</option>
                  <option>MBA</option>
                  <option>BBA</option>
                  <option>BCA</option>
                </select>
                <button
                  type="button"
                  className="w-full bg-[#831d82] text-white py-3 text-lg rounded-lg font-novaSemi hover:bg-[#6b146a] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="relative bg-gradient-to-br from-[#8e0f8c] to-[#5b0461] text-white p-10 rounded-3xl shadow-2xl h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <h2 className="text-3xl font-novaBold mb-6 border-b border-white/20 pb-3 relative z-10">
              Contact Information
            </h2>
            <div
              className="text-lg leading-relaxed font-novaReg bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-inner relative z-10 space-y-3"
              dangerouslySetInnerHTML={{
                __html: p?.Contact_info_html || p?.Contact_info || ""
              }}
            />
            <div className="mt-8 space-y-5 relative z-10">
              {p?.Phone && (
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-yellow-300" />
                  <span className="text-lg">{p?.Phone}</span>
                </div>
              )}
              {p?.Email && (
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-yellow-300" />
                  <span className="text-lg">{p?.Email}</span>
                </div>
              )}
              {p?.Address && (
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-300 mt-1" />
                  <span className="text-lg leading-relaxed">{p?.Address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primary">
        <div className="bg-white h-10 rounded-bl-3xl" />
      </div>
      <div className="bg-primary rounded-r-[60px]">
        <div className="w-full px-36 py-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.670382625863!2d77.49140427627815!3d28.459351075759862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1dc2d556ab3%3A0xb81e6f3c5f27c1ef!2sMangalmay%20Group%20of%20Institutions%20%7C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1762330770161!5m2!1sen!2sin"
            className="w-full h-96 rounded-2xl shadow-xl border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
