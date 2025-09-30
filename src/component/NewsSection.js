"use client"

import { useState, useEffect } from "react"
import React from "react"
import TitleInfo from "./TitleInfo"

export default function NewsSection() {
    const [activeCard, setActiveCard] = useState(0)
    const [animationKey, setAnimationKey] = useState(0)

    const cards = [
        {
            title: "Entrepreneurial skill",
            description: "MIMT organised an activity for UG students in under the combined flagship of Marketing Club and IIC to enhance Entrepreneurial skill among students. There was LOGO DESIGNING and TAG LINE CREATION competition for BBA PLATINA , BBA REGULAR and B.Com students.",
            image: "https://www.mangalmay.org/news/1667505633-mimt2.jpeg",
            date: "24 December 2025",
            link: "/news/entrepreneurial-skill-event"
        },
        {
            title: "Water Week",
            description: "For the holistic development of students and to sensitize them regarding the water conservation and sustainable development, Managalmay Institute of Management & Technology extruded students of MBA first year along with Dr. Anju Bala.",
            image: "https://www.mangalmay.org/news/1667505442-event2.jpeg",
            date: "18 January 2025",
            link: "/news/water-week-initiative"
        },
        {
            title: "Gender Equity",
            description: "A session on Gender Equity was organised in the Management department for BBA and B.COM students under the aegis of Internal Complaint Committee ( ICC) of the Institute on 12-10-22.The session was taken by ICC co-ordinator Dr. Suruchi Khanna. The students were sensetized about gender equality.",
            image: "https://www.mangalmay.org/news/1665596747-WhatsApp%20Image%202022-10-12%20at%2010.21.05%20PM%20(2).jpeg",
            date: "31 March 2025",
            link: "/news/gender-equity-session"
        },
    ]

    const handleCardClick = (index) => {
        if (activeCard === index) return; // Prevent re-triggering on the same card
        setActiveCard(index)
        setAnimationKey((prev) => prev + 1)
    }

    const handleAnimationEnd = () => {
        setActiveCard((prev) => (prev + 1) % cards.length);
        setAnimationKey((prev) => prev + 1);
    };

    // Auto-advance logic now handled by onAnimationEnd
    useEffect(() => {
        // This effect can be used to start the first animation or handle other side effects
        // but the interval is no longer needed.
    }, []);


    const activeNews = cards[activeCard];

    return (
        <section className="flex flex-col justify-start items-center px-2 py-16">
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
                {/* Header Section */}
                <TitleInfo first="News" second="Discover Latest News" color="black" />
                <p className="text-lg font-novaReg text-slate-500 text-center max-w-4xl mx-auto mt-4">
                    Explore a diverse range of programs designed to empower students with knowledge, skills, and industry exposure. From management and technology to commerce and education, our courses are crafted to build future leaders and innovators ready to excel in their chosen fields.
                </p>

                {/* Content Section */}
                <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
                    <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
                        {/* Left Column - Feature Cards */}
                        <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
                            {cards.map((card, index) => {
                                const isActive = index === activeCard

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleCardClick(index)}
                                        className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer rounded-xl ${isActive
                                            ? "bg-white shadow-[0px_0px_0px_1px_#E0DEDB_inset,_0_4px_12px_-2px_rgba(0,0,0,0.05)]"
                                            : "border border-gray-300"
                                            }`}
                                    >
                                        <div className="w-full h-0.5 bg-transparent">
                                            {/* --- THE FIX IS HERE --- */}
                                            {/* Only render the progress bar for the active card */}
                                            {isActive && (
                                                <div
                                                    key={animationKey}
                                                    className="h-0.5 bg-[#322D2B] animate-[progressBar_5s_linear_forwards] will-change-transform"
                                                    onAnimationEnd={handleAnimationEnd}
                                                />
                                            )}
                                        </div>
                                        <div className="px-6 py-4 w-full flex flex-col gap-2">
                                            <div className="self-stretch flex justify-center flex-col text-[#49423D] font-novaBold leading-6 font-sans">
                                                {card.title}
                                            </div>
                                            <div className="text-xs text-slate-700 uppercase font-novaSemi bg-gray-200 w-fit px-2 py-0.5 rounded-lg">
                                                {card.date}
                                            </div>
                                            <div className="self-stretch line-clamp-2 text-[#605A57] text-sm font-normal leading-snug font-novaReg whitespace-pre-line">
                                                {card.description}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Right Column - Main News Display */}
                        <div className="w-full md:flex-1 flex flex-col justify-center items-start gap-4 order-1 md:order-2">
                            <div className="w-full h-auto bg-white shadow-lg overflow-hidden rounded-lg">
                                <img
                                    key={activeNews.title} // Add key to force re-render for fade effect
                                    src={activeNews.image}
                                    alt={activeNews.title}
                                    className="w-full h-[250px] md:h-[380px] object-cover animate-[fadeIn_0.5s_ease-in-out]"
                                />
                            </div>
                            <div className="w-full flex justify-between items-center px-1">
                                <div>
                                    <h3 className="text-xl font-bold font-novaBold text-slate-800">{activeNews.title}</h3>
                                    <p className="text-sm text-slate-500 font-novaSemi">{activeNews.date}</p>
                                </div>
                                <a
                                    href={activeNews.link}
                                    className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors duration-300 font-novaBold text-sm whitespace-nowrap"
                                >
                                    Read More &rarr;
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <style jsx>{`
                    @keyframes progressBar {
                      0% {
                        transform: translateX(-100%);
                      }
                      100% {
                        transform: translateX(0%);
                      }
                    }
                    @keyframes fadeIn {
                      0% {
                        opacity: 0.7;
                      }
                      100% {
                        opacity: 1;
                      }
                    }
                  `}</style>
            </div>
        </section>
    )
}