"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

const navigation = [
  {
    name: "Management Programs",
    links: [
      { name: "Importance of Management Program", href: "#" },
      { name: "MBA Admissions", href: "#" },
      { name: "BBA Program", href: "#" },
      { name: "Best MBA in Delhi NCR", href: "#" },
      { name: "MBA Program", href: "#" },
    ],
  },
  {
    name: "Technical Courses",
    links: [
      { name: "Technical Education", href: "#" },
      { name: "B.Tech Admissions", href: "#" },
      { name: "Best B.Tech in Delhi NCR", href: "#" },
      { name: "B.Tech in Artificial Intelligence", href: "#" },
      { name: "B.Tech in Data Science", href: "#" },
    ],
  },
  {
    name: "Facilities",
    links: [
      { name: "Online Application Form", href: "#" },
      { name: "Library", href: "#" },
      { name: "Computer Lab", href: "#" },
      { name: "Wi-Fi Campus", href: "#" },
      { name: "Hostel", href: "#" },
      { name: "Patents Published", href: "#" },
      { name: "Add-on Certifications", href: "#" },
      { name: "Pay Your Fee", href: "#" },
      { name: "NCC", href: "#" },
    ],
  },
  {
    name: "Admissions",
    links: [
      { name: "Education Loan", href: "#" },
      { name: "Download Prospectus", href: "#" },
      { name: "Affiliations and Approvals", href: "#" },
      { name: "FAQ's", href: "#" },
    ],
  },
  {
    name: "Community",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
      { name: "Cancellation & Refund Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Downloads", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "360° Virtual Campus Tour", href: "#" },
      { name: "Institutional Membership", href: "#" },
      { name: "Tender Notice", href: "#" },
    ],
  },
  {
    name: "Best Programs in Delhi NCR",
    links: [
      { name: "BCA Program", href: "#" },
      { name: "B.Com Courses in Delhi NCR", href: "#" },
      { name: "D.Pharm Admissions", href: "#" },
      { name: "Choose Best College in Delhi NCR", href: "#" },
      { name: "NAAC Accredited College", href: "#" },
    ],
  },
  {
    name: "Important Links",
    links: [
      { name: "News & Events", href: "#" },
      { name: "Job Fair", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "NIRF", href: "#" },
    ],
  },
  {
    name: "Programme Details",
    links: [
      { name: "MBA Program Details", href: "#" },
      { name: "B.Tech Program Details", href: "#" },
    ],
  },
];

const socialIcons = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/mangalmay.org" },
  { Icon: FaInstagram, href: "https://www.instagram.com/mangalmayinstitutions/" },
  { Icon: FaYoutube, href: "https://www.youtube.com/mangalmayorg" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mangalmaydotorg/" },
  { Icon: FaPinterestP, href: "https://in.pinterest.com/mangalmaydotorg/" },
  { Icon: FaTwitter, href: "https://x.com/mangalmaydotorg" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-gray-300 py-16 border-t border-slate-700">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/image/college-logo.webp"
                alt="Mangalmay Logo"
                width={180}
                height={140}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed font-novaSemi">
              Mangalmay Group of Institutions has evolved as one of the best
              B.Tech, MBA, BBA, BCA, B.Com, and B.Ed colleges with a strong
              global reputation for excellence in education and innovation.
            </p>
            <div className="text-sm font-novaSemi">
              <p>Plot No. 8 & 9 Knowledge Park II, Greater Noida, Delhi NCR</p>
              <p className="mt-1">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@mangalmay.org" className="text-white hover:underline">
                  info@mangalmay.org
                </a>
              </p>
              <p className="mt-1">
                <strong>Admission Enquiry:</strong> 18001033797, 9910255400
              </p>
            </div>
          </div>

          {/* 3 Columns: Management, Technical, Facilities */}
          {navigation.slice(0, 3).map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4 border-b border-slate-600 inline-block pb-1">
                {section.name}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-4 gap-10 items-start">
          {navigation.slice(3).map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4 border-b border-slate-600 inline-block pb-1">
                {section.name}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logo beside Community */}
          <div className="flex justify-center md:justify-end items-center">
            <Image
              src="/image/updated2024banner.png"
              alt="Accredited Badge"
              width={200}
              height={160}
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-slate-700 pt-8 flex flex-col items-center mt-10">
          <h3 className="text-white font-novaSemi text-lg mb-4">Follow Us On</h3>
          <div className="flex space-x-5">
            {socialIcons.map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                <Icon className="text-gray-300 hover:text-white text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-10 border-t border-slate-700 pt-4">
          <p>
            © {new Date().getFullYear()} All rights reserved. Design and Developed by{" "}
            <span className="text-white font-semibold">BrandShow</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
