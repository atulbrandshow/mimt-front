"use client";

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { API_NODE_URL, IMAGE_PATH } from '@/configs/config';
import Link from 'next/link';
import TitleInfo from './TitleInfo';

const NotificationSlider = ({ data }) => {
    const d = data?.pageData;
    const [eventsData, setEventsData] = useState(null);

    const stats = []
    for (let i = 1; i <= 10; i++) {
        const count = d?.[`VJC-${i}`]
        const title = d?.[`VJT-${i}`]
        const desc = d?.[`VJD-${i}`]

        if (count && title && desc) {
            stats.push({
                count,
                title,
                desc,
            })
        }
    }

    const fetchEvents = async () => {
        try {
            const response = await fetch(
                `${API_NODE_URL}list-detail-page/all`, {
                credentials: "include",
            })
            const data = await response.json()

            if (data.status && data.data) {
                setEventsData(data.data)
            } else {
                setEventsData([])
            }
        } catch (error) {
            console.error("Failed to fetch events:", error)
            setEventsData([])
        }
    }

    !eventsData && fetchEvents();

    return (
        <main className='bg-gray-100 py-16'>
            <TitleInfo first="Highlights" second="Placement Highlights" color="cyan" />
            <div className="max-w-[1500px] mx-auto">
                <div className="col-span-12 max-lg:mb-4 flex items-center relative">
                    <div className="grid grid-cols-4 max-w-7xl mx-auto w-full place-items-center">
                        {stats.map((item, i) => {
                            const hasUnit = item.count.includes("LPA") || item.count.includes("CR")
                            const [value, unit] = hasUnit ? item.count.split(" ") : [item.count, ""]
                            return (
                                <article
                                    key={i}
                                    className={`p-6 max-xl:p-4 leading-5 max-lg:text-center`}
                                >
                                    <h2 className="text-5xl xl:text-5xl font-novaThin mb-2 max-lg:text-3xl max-lg:mb-3 text-black">
                                        <span className="whitespace-nowrap">
                                            {value}
                                            {unit && (
                                                <span className="text-gray-600 font-novaLight text-xl pr-5 max-2xl:text-xl max-md:text-lg max-sm:text-base">
                                                    {unit}
                                                </span>
                                            )}
                                        </span>
                                    </h2>
                                    <span
                                        className={`bg-yellow-400 text-black py-1 tracking-widest max-[400px]:py-1 max-[400px]:text-xs mb-2 px-2 text-sm uppercase font-novaBold rounded-md font-bold`}
                                    >
                                        {item.title}
                                    </span>
                                    <p className="mt-3 w-32 max-lg:mx-auto text-gray-600 text-[13px] font-novaReg max-md:text-xs leading-4">
                                        {item.desc}
                                    </p>
                                </article>
                            )
                        })}
                    </div>
                </div>
                <section className="col-span-8 max-lg:col-span-12 h-full max-lg:mb-4 max-lg:px-10 max-md:px-8 max-sm:px-1 max-lg:ml-0 drop-shadow-lg">
                    <section className="bg-gradient-to-r from-cyan-500 to-indigo-600 animate-gradient rounded-lg h-full">
                        <div className="grid grid-cols-12 h-full">
                            <div className="col-span-2 max-sm:hidden p-2 flex justify-center items-center">
                                <img
                                    src={IMAGE_PATH + d?.MIMT_Logo}
                                    alt="AKG Logo"
                                    className="w-28 aspect-square rounded-full"
                                />
                            </div>
                            <div className="col-span-5 max-sm:col-span-5 flex justify-center items-center">
                                <h2 className="uppercase text-center max-w-96 font-novaBold leading-5 text-xl max-lg:text-base max-md:text-sm max-sm:text-xs text-white" dangerouslySetInnerHTML={{ __html: d?.MIMT_Desc }} />
                            </div>
                            <div className="col-span-5 max-sm:col-span-7">
                                <img
                                    className="rounded-xl max-2xl:h-full h-52 w-full ml-auto max-lg:w-full max-lg:ml-0 object-cover object-top"
                                    src={IMAGE_PATH + d?.MIMT_Building_Image}
                                    alt="AKG Building"
                                />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    )
}

export default NotificationSlider