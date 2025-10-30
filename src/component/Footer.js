"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

const navigation = [
  {
    name: "Management Programs",
    links: [
      { name: "Importance of Management Program", href: "/mba-in-delhi-ncr.html" },
      { name: "MBA Admissions", href: "/mba-admission.html" },
      { name: "BBA Program", href: "/bba-program.html" },
      { name: "Best MBA in Delhi NCR", href: "/best-mba-in-delhi-ncr.html" },
      { name: "MBA Program", href: "/master-of-business-administration.html" },
    ],
  },
  {
    name: "Technical Courses",
    links: [
      { name: "Technical Education", href: "/technical-education.html" },
      { name: "B.Tech Admissions", href: "/btech-admission.html" },
      { name: "Best B.Tech in Delhi NCR", href: "/best-btech-in-delhi-ncr.html" },
      { name: "B.Tech in Artificial Intelligence", href: "/btech-artificial-intelligence.html" },
      { name: "B.Tech in Data Science", href: "/btech-in-data-science.html" },
    ],
  },
  {
    name: "Facilities",
    links: [
      { name: "Online Application Form", href: "/online-application-form.html" },
      { name: "Library", href: "/library.html" },
      { name: "Computer Lab", href: "/computer-center.html" },
      { name: "Wi-Fi Campus", href: "/wifi-campus.html" },
      { name: "Hostel", href: "/hostel.html" },
      { name: "Patents Published", href: "/patents-published.html" },
      { name: "Add-on Certifications", href: "/student-certificates.html" },
      { name: "Pay Your Fee", href: "/pay-fees.html" },
      { name: "NCC", href: "/national-cadet-corps.html" },
    ],
  },
  {
    name: "Admissions",
    links: [
      { name: "Education Loan", href: "/education-loans.html" },
      { name: "Download Prospectus", href: "#" },
      { name: "Affiliations and Approvals", href: "/affiliations-and-approvals.html" },
      { name: "FAQ's", href: "/blogs/faq/" },
    ],
  },
  {
    name: "Community",
    links: [
      { name: "Privacy Policy", href: "/ranked-amongst-best-bschools.html" },
      { name: "Disclaimer", href: "/best-campus-placement.html" },
      { name: "Cancellation & Refund Policy", href: "/cancellation-refund-policy.html" },
      { name: "Terms & Conditions", href: "/terms-conditions.html" },
      { name: "Downloads", href: "/downloads.html" },
      { name: "Contact Us", href: "/top-10-business-schools.html" },
      { name: "360° Virtual Campus Tour", href: "/virtual-tour.html" },
      { name: "Institutional Membership", href: "/institutional-membership.html" },
      { name: "Tender Notice", href: "#" },
    ],
  },
  {
    name: "Best Programs in Delhi NCR",
    links: [
      { name: "BCA Program", href: "/bca-program.html" },
      { name: "B.Com Courses in Delhi NCR", href: "/bcom-courses-in-delhi-ncr.html" },
      { name: "D.Pharm Admissions", href: "#" },
      { name: "Choose Best College in Delhi NCR", href: "/choose-best-college-in-delhi-ncr.html" },
      { name: "NAAC Accredited College", href: "/naac-accredited-college.html" },
    ],
  },
  {
    name: "Important Links",
    links: [
      { name: "News & Events", href: "/mangalmay-in-press.html" },
      { name: "Job Fair", href: "/job-fair-list.html" },
      { name: "Contact Us", href: "/contact-us.html" },
      { name: "NIRF", href: "/nirf-data.html" },
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
