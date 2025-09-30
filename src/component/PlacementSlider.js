"use client";

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { IndianRupee } from 'lucide-react';

// Dummy data array based on the image provided
const testimonials = [
    {
        name: "Shivangi Chauhan",
        placement: "Paloalto",
        companyLogo: "https://www.cuchd.in/latest-assets/img/ts-paloalto-logo.webp", // Replace with your actual logo path
        salary: "54.75",
        studentImage: "https://www.cuchd.in/latest-assets/img/top-student-vandanaChauhan.webp", // Replace with your actual student image path
        cardBg: "bg-[#004B87]",
        nameColor: "text-amber-300",
    },
    {
        name: "Arjun Mehta",
        placement: "Amazon",
        companyLogo: "https://www.cuchd.in/latest-assets/img/ts-amazon-logo.webp", // Replace with your actual logo path
        salary: "44.00",
        studentImage: "https://www.cuchd.in/latest-assets/img/top-student-harsh.webp", // Replace with your actual student image path
        cardBg: "bg-gray-800",
        nameColor: "text-amber-300",
    },
    {
        name: "Lucky Bhaskar",
        placement: "Microsoft",
        companyLogo: "https://www.cuchd.in/latest-assets/img/ts-microsoft-logo.webp", // Replace with your actual logo path
        salary: "48.00",
        studentImage: "https://www.cuchd.in/latest-assets/img/top-student-siddhant.webp", // Replace with your actual student image path
        cardBg: "bg-gray-800",
        nameColor: "text-amber-300",
    },
];

const PlacementSlider = () => {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto relative px-2 sm:px-10">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    className="!pb-10" // Add padding bottom for shadow visibility
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className='!h-auto'>
                            <div className={`h-full max-sm:flex relative ${testimonial.cardBg} rounded-b-3xl shadow-lg overflow-hidden`}>
                                <div className="max-sm:w-1/2 flex flex-row items-center">
                                    {/* Text Content */}
                                    <div className="w-full sm:w-1/2 p-6 text-white text-left order-1">
                                        <h3 className={`text-3xl sm:text-4xl font-novaLight leading-none w-32 ${testimonial.nameColor}`}>{testimonial.name}</h3>
                                        <p className="text-gray-200 max-sm:text-sm mt-2 font-novaLight">- Placed in {testimonial.placement}</p>
                                        <div className="mt-6">
                                            <img src={testimonial.companyLogo} alt={`${testimonial.placement} logo`} className="h-12 sm:h-16 bg-white p-1 rounded-b-lg mx-0" />
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-3xl sm:text-4xl md:text-5xl font-novaBold text-white flex">
                                                <IndianRupee className='h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6' /> {testimonial.salary} <span className="mt-2.5 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-2xl font-novaLight">LPA</span>
                                            </p>
                                            <p className="text-gray-300 max-sm:text-sm tracking-wider font-novaLight">Salary Package</p>
                                        </div>
                                    </div>

                                    {/* Student Image */}
                                    <div className="max-sm:hidden mt-auto w-1/2 h-auto order-2">
                                        <img src={testimonial.studentImage} alt={testimonial.name} className="w-full h-full object-cover object-center" />
                                    </div>
                                </div>
                                <div className="sm:hidden mt-auto w-1/2 h-auto order-2">
                                    <img src={testimonial.studentImage} alt={testimonial.name} className="w-full h-full object-cover object-center" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="max-sm:hidden swiper-button-prev-custom absolute top-1/3 -left-3 transform -translate-y-1/2 z-10 rounded-full cursor-pointer transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className="max-sm:hidden swiper-button-next-custom absolute top-1/3 -right-3 transform -translate-y-1/2 z-10 rounded-full cursor-pointer transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default PlacementSlider;