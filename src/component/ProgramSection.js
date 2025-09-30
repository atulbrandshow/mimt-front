"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import TitleInfo from "./TitleInfo";

export function ProgramSection() {
    const programs = [
        {
            title: "MBA & MBA++ PROGRAM",
            school: "School Of Management - Pg",
            imageUrl: "https://www.mangalmay.org/assets/images/home/top-campus-noida.jpg",
            link: "#",
        },
        {
            title: "B.TECH & BCA PROGRAM",
            school: "School Of TECHNOLOGY",
            imageUrl: "https://www.mangalmay.org/assets/images/home/campus-delhincr.jpg",
            link: "#",
        },
        {
            title: "BBA PLATINA, BBA & B.COM",
            school: "School Of Management - Ug",
            imageUrl: "https://www.mangalmay.org/assets/images/home/top-campus-up.jpg",
            link: "#",
        },
        {
            title: "B.A B.ED",
            school: "Education Program",
            imageUrl: "https://www.mangalmay.org/assets/images/home/campus-noida.jpg",
            link: "#",
        },
    ];

    return (
        <main className="w-full bg-white py-16 px-4">
            <TitleInfo first="Programs" second="Our Academic Programs" color="black" />
            <p className="text-lg font-novaReg text-slate-500 text-center max-w-4xl mx-auto mt-4">
                Explore a diverse range of programs designed to empower students with knowledge, skills, and industry exposure. From management and technology to commerce and education, our courses are crafted to build future leaders and innovators ready to excel in their chosen fields.
            </p>
            <div className="mt-10 max-w-6xl mx-auto max-[480px]:grid-cols-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {programs.map((item, index) => (
                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-gray-50 relative group/card border-black/[0.1] w-full h-auto rounded-2xl p-4 border shadow-xl">
                            <CardItem
                                translateZ="50"
                                className="text-center w-full font-novaBold text-neutral-600">
                                {item.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-center w-full uppercase text-xs font-novaSemi">
                                {item.school}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src={item.imageUrl}
                                    height="1000"
                                    width="1000"
                                    className="h-96 sm:h-72 w-full object-cover object-top border rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail" />
                            </CardItem>
                            <div className="flex justify-center items-center mt-5">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={item.link}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl bg-black text-white text-xs font-novaBold uppercase tracking-wider">
                                    View Details
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </main>
    );
}
