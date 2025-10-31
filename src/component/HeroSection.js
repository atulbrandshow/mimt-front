"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, SearchIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
    "/image/mimt/hero-section/website-varun.jpg",
    "/image/mimt/hero-section/sadhguru-mimt.jpg",
    "/image/mimt/hero-section/new-ipl-session.jpg",
    "/image/mimt/hero-section/new-website-jobfair.jpg",
    "/image/mimt/hero-section/slider-2023.jpg",
];

const HeroSection = () => {
    return (
        <section className="relative w-full h-[75vh] bg-blue-900">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-white"></div>

            {/* Right-side background image */}
            <div
                className="absolute right-0 top-0 h-full w-1/2 bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/image/accurate/about/accurate-building.webp')",
                }}
            ></div>

            {/* Content and Slider */}
            <div className="relative z-10 w-full h-full flex items-center py-10">
                <div className="px-24 w-full flex h-full">
                    {/* Left side content */}
                    <div className="w-6/12 flex flex-col justify-center pr-8 max-sm:w-full">
                        <h1 className="text-5xl font-bold mb-4 max-md:text-3xl max-sm:text-2xl text-white">Discover Your Potential with Accurate</h1>
                        <p className="mb-6 text-lg text-white max-w-2xl">Unleash your potential with Accurate Institute. Choose from a diverse range of programs and discover endless opportunities for transformative learning.</p>

                        {/* Search Box */}
                        <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md max-w-md gap-2">
                            <input type="text" placeholder="Search what you are looking for..." className="flex-grow px-4 py-2 text-gray-700 outline-none" />
                            <SearchIcon className="w-6 h-6 text-gray-500 mr-4" />
                        </div>
                    </div>

                    {/* Right bottom slider with navigation buttons */}
                    <div className="w-6/12 flex flex-col items-end justify-end relative">
                        {/* Navigation buttons */}
                        <div className="flex gap-2 mb-2">
                            <button id="prevButton" className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                                <ArrowLeft className="w-5 h-5 text-black" />
                            </button>
                            <button id="nextButton" className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
                                <ArrowRight className="w-5 h-5 text-black" />
                            </button>
                        </div>

                        {/* Swiper */}
                        <div className="w-[850px] h-[200px]">
                            <Swiper
                                modules={[Autoplay, Pagination, Navigation]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                slidesPerView={2.4}
                                spaceBetween={20}
                                navigation={{
                                    prevEl: "#prevButton",
                                    nextEl: "#nextButton",
                                }}
                                className="rounded-2xl h-full"
                            >
                                {images.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="w-full h-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${img})` }}></div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;