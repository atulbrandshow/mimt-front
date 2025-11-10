"use client";

import React, { useState } from "react";
import Link from "next/link";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { CheckCircle, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, GraduationCap, BookOpen } from "lucide-react";
import Header from "@/component/Header";
import IntroductionSection from "@/component/ProgramIntroductionSection";
import { IMAGE_PATH } from "@/configs/config";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const MBAfeatures = [
    "Ranked 'A-3' by AIMA & Business Standard",
    "Ranked AAA by Business & Management Chronicle.",
    "Ranked 'A' in best B-Schools of India by Business India.",
    "Ranked 16th in Delhi-NCR by Mail Today (India Today Group)",
    "Ranked 5th for Management by Amar Ujala and IMRB International Education Survey.",
    "Meritorious students will be given a chance to undergo certification courses from best universities of the world.",
    "TCS Certified Computer Labs",
    "Strong Faculty base comprising of eminent academicians and industry professionals from prestigious institutions like IIMs and XLRI.",
    "ISO 9001:2000 Certified Institute.",
    "Strategic location in the largest education hub of North India.",
    "Automated Library Resource Centre with e-books, Journals, Research Publications & Magazines.",
    "Dedicated Placement Division with strong industry connect for internships and placements.",
    "Research deliberations and experiential learning through conferences, seminars, workshops, and colloquiums.",
    "Ultra-modern Hostel Facility for Girls & Boys separately.",
    "Scholarships for Meritorious students.",
    "Vibrant campus life with focus on extra-curricular activities.",
    "Partner Institute of NIESBUD, a Govt. of India Organization.",
    "Registered under National Skill Development Mission (Govt. of India initiative).",
];

const Page = ({ data }) => {
    console.log(data);

    const [activeTab, setActiveTab] = useState("eligibility");
    const [index, setIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const nextSlide = () => setIndex((prev) => (prev + 1) % MBAfeatures.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + MBAfeatures.length) % MBAfeatures.length);
    return (
        <>
            <div className="bg-white">
                <Header BreadCrumb={data?.breadCrumb} data={data} />
                <section className="w-full max-w-[1400px] mx-auto pt-10">
                    <div className="container mx-auto px-4 py-8">
                        <IntroductionSection title={data?.pageData?.ProgramIntroductionTitle} description={data?.pageData?.ProgramIntroductionDescription} image={IMAGE_PATH + data?.pageData?.ProgramIntroductionImage} applyLink={data?.pageData?.ProgramIntroductionApplyLink} brochureLink={data?.pageData?.ProgramIntroductionApplyLink} />

                        <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 md:py-24 px-6 md:px-12 overflow-hidden">
                            {/* Decorative background glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>

                            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                                {/* LEFT SIDE — TEXT SECTION */}
                                <motion.div
                                    initial={{ opacity: 0, x: -60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7 }}
                                    viewport={{ once: true }}
                                    className="space-y-6 order-2 lg:order-1"
                                >
                                    <div className="space-y-3">
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                            Program Overview
                                        </h2>
                                        <p className="text-gray-700 text-lg leading-relaxed font-novaReg">
                                            {data?.pageData?.ProgramOverviewTitle}
                                        </p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-100"
                                    >
                                        <span className="text-3xl text-primary">⚙️</span>
                                        <p
                                            className="text-gray-700 text-base md:text-lg leading-7 font-novaReg"
                                            dangerouslySetInnerHTML={{ __html: data?.pageData?.ProgramOverviewDescription }}
                                        ></p>

                                    </motion.div>
                                </motion.div>

                                {/* RIGHT SIDE — IMAGE SECTION */}
                                <motion.div
                                    initial={{ opacity: 0, x: 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative order-1 lg:order-2"
                                >
                                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={IMAGE_PATH + data?.pageData?.ProgramOverviewImage}
                                            alt="Mangalmay Institute Campus"
                                            className="w-full h-80 md:h-[460px] object-contain object-top transform transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl hover:bg-opacity-20 transition duration-500"></div>
                                </motion.div>
                            </div>
                        </section>
                        {/* Courses Offered */}

                        <div className="py-6 bg-gradient-to-b from-white to-gray-50">
                            <div className="container mx-auto px-6 lg:px-12">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                                    {/* Left Card - College Info */}
                                    {/* <div className="bg-white p-6 border border-gray-200 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
                                        <div className="flex justify-center mb-6">
                                            <img
                                                src="/image/college-logo.webp"
                                                alt="Mangalmay Institution Logo"
                                                className="w-2/3 object-contain"
                                            />
                                        </div>
                                        <div className="mt-6 bg-gradient-to-r from-red-700 to-red-400 h-[3px] w-1/2 rounded-full"></div>
                                        <p className="mt-4 text-gray-700 leading-relaxed font-novaReg">
                                            Along with regular <span className="font-semibold">MBA</span> at Mangalmay
                                            Institution, students simultaneously complete a{" "}
                                            <span className="font-semibold">
                                                Certification Program in Digital Marketing
                                            </span>
                                            .
                                        </p>
                                        <p className="mt-3 text-gray-700 font-novaReg leading-relaxed">
                                            This additional program opens a wide host of job opportunities across
                                            industries. It not only ensures high-paying roles but also secures the next
                                            decade of success in the booming Internet world.
                                        </p>
                                    </div> */}

                                    {/* Right Section - Specialization */}
                                    <div className="md:col-span-2 bg-white border border-gray-200 rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl">
                                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 tracking-wide">
                                            Specialization Group
                                        </h2>

                                        <div className="h-[4px] w-1/2 mb-6 bg-gradient-to-r from-red-700 to-transparent rounded-full"></div>

                                        {/* Description with styled list */}
                                        <div
                                            className="[&>ul]:grid [&>ul]:grid-cols-1 sm:[&>ul]:grid-cols-2 [&>ul]:gap-y-3 [&>ul]:gap-x-6
             [&>ul]:list-none [&>ul]:p-0 [&>ul]:m-0
             [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:gap-3
             [&>ul>li]:text-gray-800 [&>ul>li]:font-novaReg [&>ul>li]:text-base
             [&>ul>li:hover]:translate-x-1 [&>ul>li]:transition-transform [&>ul>li]:duration-300
             [&>ul>li::before]:content-[''] [&>ul>li::inline-block [&>ul>li::before]:w-3 [&>ul>li::before]:h-3
             [&>ul>li::before]:rounded-full [&>ul>li::before]:bg-gradient-to-r
             [&>ul>li::before]:from-red-700 [&>ul>li::before]:to-red-400
             text-gray-700 text-sm md:text-base leading-relaxed max-w-none"
                                            dangerouslySetInnerHTML={{
                                                __html: data?.pageData?.ProgramSpecializationDescription,
                                            }}
                                        ></div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Removed all activeTab / tabs logic completely */}
                    </div>
                </section>

                {/* Other Sections stay unchanged */}
                <section>{/* ... Your placement and Swiper section remains the same ... */}</section>

                {/* Fees Structure Section */}
                <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
                    {/* Decorative Blur Backgrounds */}
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

                    <div className="relative max-w-7xl mx-auto px-6">
                        {/* Title */}
                        <div className="text-center mb-14">
                            <h2 className="text-5xl font-bold text-gray-800 tracking-tight max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                                MBA Fees Structure
                            </h2>
                            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                                Explore detailed information on MBA college fees and hostel & mess charges for the
                                current academic session.
                            </p>
                        </div>

                        {/* Two Tables Side by Side */}
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* College Fees Table */}
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-3xl">
                                    <h3 className="text-2xl font-bold text-gray-800">College Fees</h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                        * Examination Fee to be paid separately as per University norms.
                                    </p>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm text-gray-700">
                                        <thead className="bg-gray-100 text-gray-800 text-left">
                                            <tr>
                                                <th className="py-4 px-6 font-semibold">Fees Type</th>
                                                <th className="py-4 px-6 font-semibold text-center">1st Year</th>
                                                <th className="py-4 px-6 font-semibold text-center">2nd Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t hover:bg-gray-50">
                                                <td className="py-4 px-6 font-medium">Tuition Fees</td>
                                                <td className="py-4 px-6 text-center text-blue-600 font-semibold">
                                                    ₹79,600
                                                </td>
                                                <td className="py-4 px-6 text-center text-blue-600 font-semibold">
                                                    ₹79,600
                                                </td>
                                            </tr>
                                            <tr className="border-t hover:bg-gray-50">
                                                <td className="py-4 px-6 font-medium">Other Charges</td>
                                                <td className="py-4 px-6 text-center text-blue-600 font-semibold">
                                                    ₹74,900
                                                </td>
                                                <td className="py-4 px-6 text-center text-blue-600 font-semibold">
                                                    ₹74,900
                                                </td>
                                            </tr>
                                            <tr className="border-t bg-gray-50 hover:bg-gray-100">
                                                <td className="py-4 px-6 font-bold text-gray-900">Total</td>
                                                <td className="py-4 px-6 text-center font-bold text-indigo-700">
                                                    ₹1,54,500
                                                </td>
                                                <td className="py-4 px-6 text-center font-bold text-indigo-700">
                                                    ₹1,54,500
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Hostel Fees Table */}
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-t-3xl">
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        Hostel & Mess Charges (Optional)
                                    </h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                        * Hostel fees include accommodation and meal services.
                                    </p>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm text-gray-700">
                                        <thead className="bg-gray-100 text-gray-800 text-left">
                                            <tr>
                                                <th className="py-4 px-6 font-semibold">Room Type</th>
                                                <th className="py-4 px-6 font-semibold text-center">
                                                    Annual Fees (INR)
                                                </th>
                                                <th className="py-4 px-6 font-semibold text-center">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t hover:bg-gray-50">
                                                <td className="py-4 px-6 font-medium">2 Seater</td>
                                                <td className="py-4 px-6 text-center text-blue-600 font-semibold">
                                                    ₹1,15,000
                                                </td>
                                                <td className="py-4 px-6 text-center text-gray-600">Per annum</td>
                                            </tr>
                                            <tr className="border-t bg-gray-50 hover:bg-gray-100">
                                                <td className="py-4 px-6 font-medium">3 Seater</td>
                                                <td className="py-4 px-6 text-center text-blue-600 font-semibold">
                                                    ₹1,00,000
                                                </td>
                                                <td className="py-4 px-6 text-center text-gray-600">
                                                    For girls only (twin sharing)
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-10"></div>

                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
                                MBA Eligibility & Admission Process
                            </h2>
                            <div className="mt-3 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                                Know who can apply and how to join our MBA program at Greater Noida
                            </p>
                        </div>

                        {/* Tab Buttons */}
                        <div className="flex justify-center gap-6 mb-10">
                            <button
                                onClick={() => setActiveTab("eligibility")}
                                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 border ${activeTab === "eligibility"
                                    ? "bg-blue-600 text-white shadow-lg border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                                    }`}
                            >
                                Eligibility Criteria
                            </button>

                            <button
                                onClick={() => setActiveTab("admission")}
                                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 border ${activeTab === "admission"
                                    ? "bg-blue-600 text-white shadow-lg border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                                    }`}
                            >
                                Admission Process
                            </button>
                        </div>

                        {/* Content Area */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${activeTab === "eligibility"
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 hidden"
                                }`}
                        >
                            {/* Eligibility Criteria Content */}
                            <div className="relative bg-white border border-gray-100 rounded-3xl shadow-2xl p-10 md:p-14 max-w-5xl mx-auto hover:shadow-blue-200 transition duration-300">
                                <div className="absolute -top-6 left-10 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                                    Admission 2025–27
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-blue-600 w-10 h-10"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                        MBA College in Greater Noida college
                                    </h3>
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Applicants must have successfully completed their graduation under the{" "}
                                    <strong>10+2+3 scheme</strong>, securing a minimum of <strong>50% marks</strong> in
                                    any discipline from a recognized university. Those currently in the process of
                                    completing their qualifying examination or awaiting results may apply provisionally.
                                    However, their admission is{" "}
                                    <strong>conditional upon passing the qualifying examination</strong>.
                                </p>

                                {/* <div className="mt-6 border-l-4 border-blue-600 pl-4 text-gray-700 bg-blue-50/40 rounded-md py-3">
                                    <p className="italic">
                                        <strong>Note:</strong> Admission is subject to passing the qualifying
                                        examination and meeting the eligibility standards set by the institute.
                                    </p>
                                </div> */}
                            </div>
                        </div>

                        {/* Admission Process */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${activeTab === "admission"
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 hidden"
                                }`}
                        >
                            <div className="bg-gradient-to-r from-blue-50 to-white p-10 md:p-14 rounded-3xl border border-gray-200 shadow-xl max-w-5xl mx-auto hover:shadow-blue-100 transition duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-4-6a4 4 0 100-8a4 4 0 000 8zm0 4h8a2 2 0 012 2v2H3v-2a2 2 0 012-2h8z"
                                        />
                                    </svg>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                        Admission Process for MBA in Greater Noida college
                                    </h3>
                                </div>

                                <ol className="list-decimal list-inside text-gray-700 text-lg space-y-4 leading-relaxed">
                                    <li>
                                        The applicant must hold a <strong>bachelor’s degree</strong> with at least{" "}
                                        <strong>50% marks</strong> from any of the universities incorporated by an act
                                        of the central or state legislature in India. Candidates appearing for the final
                                        bachelor’s degree or equivalent qualification examination can also apply.
                                    </li>

                                    <li>
                                        All candidates seeking admission to the <strong>MBA program at MIMT</strong>{" "}
                                        will be required to appear in one of the national-level management entrance
                                        exams — <strong>CAT / XAT / MAT</strong>. Candidates not appearing for any
                                        management entrance exams will have to appear for the{" "}
                                        <strong>MIMT Entrance Exam</strong>.
                                    </li>

                                    <li>
                                        Besides the entrance exams, candidates are required to{" "}
                                        <strong>register at MIMT, Greater Noida</strong> through a separate application
                                        form, available online along with the information prospectus on the institute’s
                                        website or from the <strong>Admissions Desk, MIMT Greater Noida</strong>, at a
                                        cost of <strong>₹750</strong>.
                                    </li>

                                    <li>
                                        Candidates shortlisted on the basis of their <strong>CAT / MAT scores</strong>{" "}
                                        will be invited for a <strong>Group Discussion (GD)</strong>, a written test,
                                        and a <strong>Personal Interview (PI)</strong> for final selection.
                                    </li>

                                    <li>
                                        The <strong>results of selected candidates</strong> shall be displayed on the{" "}
                                        <strong>Institute’s Notice Board</strong>.
                                    </li>
                                </ol>

                                <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-md py-3 px-5">
                                    <p className="italic text-gray-700">
                                        <strong>Tip:</strong> Keep all academic records, ID proofs, and test scorecards
                                        ready during the application process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative bg-primary py-16">
                    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* LEFT SIDE - DISTINCT FEATURES */}
                        <div className="bg-yellow-400 bg-gradient-to-br from-yellow-300 to-yellow-500 p-10 rounded-2xl shadow-md text-gray-800">
                            <div className="flex items-center gap-3 mb-4">
                                <ClipboardList className="w-8 h-8 text-gray-900" />
                                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
                                    Distinct Features of <span className="text-gray-900">MBA</span>
                                </h2>
                            </div>
                            <p className="text-gray-800 mb-6 leading-relaxed">
                                The management program at Mangalmay is continuously updated keeping in mind the intense
                                global competition which has catapulted management education into an increasingly
                                central role in the success of individuals, business and corporations and has been
                                conferred with the following rankings:
                            </p>

                            <ul className="space-y-2 text-gray-900 list-none">
                                {MBAfeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex flex-col gap-4">
                            {/* PLACEMENTS */}
                            <div className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-8 rounded-2xl shadow-md">
                                <div className="flex items-center gap-3 mb-4">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                    <h2 className="text-3xl font-bold uppercase tracking-wide">
                                        Placements @ <span className="text-blue-300">Mangalmay</span>
                                    </h2>
                                </div>
                                <p className="leading-relaxed text-gray-100 mb-3">
                                    Placements are the most important and great deciding factor for students aspiring to
                                    join any premier B-school across the country.
                                </p>
                                <p className="leading-relaxed text-gray-100 mb-3">
                                    Mangalmay Institute of Management & Technology lived up to its glorious past and
                                    witnessed another wonderful year as far as placements are concerned. The Institute
                                    has consistently maintained a 90+% placement record and takes pride in the fact that
                                    its students have exceeded expectations of recruiters.
                                </p>
                                <p className="leading-relaxed text-gray-100 mb-3">
                                    Industry interaction throughout the year facilitates placements as industry
                                    personnel have already interacted with students and seen for themselves the quality
                                    of students.
                                </p>
                                <p className="leading-relaxed text-gray-100">
                                    A host of companies visited the MIMT campus this year from a variety of sectors such
                                    as FMCG, Consulting, IT and ITeS, BFSI, Market Research, Education, Electronics and
                                    many more...
                                </p>
                            </div>

                            {/* CURRICULUM AND FLOW */}
                            <div className="bg-gradient-to-br from-blue-800 to-cyan-700 text-white p-8 rounded-2xl shadow-md">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <BookOpen className="w-8 h-8 text-white" />
                                    <h2 className="text-3xl font-bold uppercase tracking-wide">
                                        Curriculum <span className="text-cyan-300">and Flow</span>
                                    </h2>
                                </div>

                                {/* Main Content */}
                                <p className="leading-relaxed text-gray-100 mb-3">
                                    Masters in Business Administration (MBA) is a two-year degree program divided into
                                    four semesters and offering dual specialization. The first year is aimed at
                                    equipping students with a solid foundation in the fundamentals of management
                                    education covering 16 essential areas with 8 papers in each semester.
                                </p>
                                <p className="leading-relaxed text-gray-100 mb-3">
                                    At the end of the first year, the students go for an industry internship with an
                                    organization of repute to hone their employability skills. The internship spans over
                                    a period of 6–8 weeks and is designed to provide a meaningful insight into the
                                    organizational working, to develop an understanding of business realities, and
                                    practical application of theoretical knowledge.
                                </p>
                                <p className="leading-relaxed text-gray-100 mb-3">
                                    The second year comprises of two semesters involving 4 core + 3 specialization
                                    papers in each semester. The focus is on holistic development by imparting
                                    life-changing and career-defining skills through executive communication,
                                    personality development, and research projects.
                                </p>
                                <p className="leading-relaxed text-gray-100">
                                    Students are also required to prepare a comprehensive Research Report based on
                                    primary data under the supervision of a core faculty member. The institute
                                    encourages short-term live projects to develop analytical and market research
                                    skills.
                                </p>

                                {/* Read More Button */}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="mt-6 flex items-center gap-2 text-cyan-300 hover:text-white transition-all duration-300"
                                >
                                    <span className="font-semibold">{isOpen ? "Read Less" : "Read More"}</span>
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                                    )}
                                </button>

                                {/* Scrollable Expandable Section */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            key="expand"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 200 }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                            className="mt-4 text-gray-100 space-y-3 pr-2 overflow-hidden rounded-lg"
                                        >
                                            {/* Inner scrollable content */}
                                            <div
                                                className="h-full overflow-y-auto cursor-grab active:cursor-grabbing scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent px-1"
                                                style={{ scrollBehavior: "smooth" }}
                                            >
                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    The Corporate Partnership – Summer Internships
                                                </h3>
                                                <p>
                                                    After the completion of the first year of the program, the
                                                    institution provides students through its Placement Division
                                                    services for Summer Internship. The institute also provides
                                                    pre-summer internship classes for preparatory groundwork and helps
                                                    the students by finding reputed companies to absorb students for 6–8
                                                    weeks of hands-on training.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    Case Studies
                                                </h3>
                                                <p>
                                                    Management students solve real-life business problems through case
                                                    studies to impart practical insights. Case studies from different
                                                    functional areas of management are deliberated in classrooms to hone
                                                    analytical and logical reasoning skills.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    PowerPoint Presentations
                                                </h3>
                                                <p>
                                                    Every student is assigned topics for PowerPoint presentations to be
                                                    presented within their respective groups. This provides valuable
                                                    practice for the corporate world.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    Guest Lectures
                                                </h3>
                                                <p>
                                                    Eminent personalities from industry and academia from India and
                                                    abroad are invited to share valuable experiences. This offers
                                                    students a glimpse into the real business world.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    Simulated Interviews
                                                </h3>
                                                <p>
                                                    Through simulated interviews, students analyze their strengths and
                                                    weaknesses. A virtual corporate environment is created, and the
                                                    sessions are recorded for self-evaluation and improvement.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    Industrial Visits and Market Research
                                                </h3>
                                                <p>
                                                    Regular industrial visits expose students to real business
                                                    operations, bridging classroom knowledge with corporate practice.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    Industry Linked / Aided Projects
                                                </h3>
                                                <p>
                                                    Students can undertake live industry projects under faculty
                                                    supervision. These projects enhance analytical skills and deepen
                                                    understanding of functional areas of interest.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    Business Games and PDP Exercises
                                                </h3>
                                                <p>
                                                    The institute organizes debates, simulations, business games, and
                                                    role plays. Corporate trainers groom students’ personalities and
                                                    communication skills.
                                                </p>

                                                <h3 className="text-2xl font-semibold text-cyan-300 mt-4">
                                                    Sports and Recreation
                                                </h3>
                                                <p>
                                                    Beyond academics, the institute offers a vibrant campus life with
                                                    sports, dramatics, debating, and quizzing opportunities, fostering
                                                    all-round development.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Page;
