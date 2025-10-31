"use client"
import Button from "./Button"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MainSection = () => {

  const slides = [
    "/image/mimt/hero-section/website-varun.jpg",
    "/image/mimt/hero-section/sadhguru-mimt.jpg",
    "/image/mimt/hero-section/new-ipl-session.jpg",
    "/image/mimt/hero-section/new-website-jobfair.jpg",
    "/image/mimt/hero-section/slider-2023.jpg",
  ]

  return (
    <div className="overflow-hidden relative">
      <div className="flex justify-center relative z-20 h-[95vh]">
        <div className="relative z-10 w-full h-full flex items-center py-10">
          <div className="px-40 w-full flex flex-col justify-center h-full">
            <span className="text-sm font-novaReg text-white tracking-widest uppercase">best university in this Delhi NCR</span>
            <h1 className="text-7xl uppercase font-cursiveFont font-thin max-w-lg text-white">
              Mangalmay Group of Institution
            </h1>
            <p className="mt-4 text-white text-xl font-novaReg max-lg:text-base max-lg:text-center">
              Best B.Tech, MBA, BBA, BCA, BCOM and B.Ed college with a global reputation that strives for high-quality education. The mission of the group is to offer innovative opportunities to our students to showcase their creativity and talent thereby making a positive impact on society.
            </p>
            <div className="h-20">
              <Button
                text={"Apply Today"}
                // onClick={() => setIsModalOpen(!isModalOpen)}
                className="py-3 max-sm:px-6 max-sm:text-xs px-10 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-yellow-400 animate-gradient text-black w-max hover:bg-yellow-500 hover:border-b-4 hover:border-black hover:transform scale-y-105 tracking-widest"
              />
            </div>
          </div>
          <div className="w-6/12 h-full flex flex-col items-end justify-end relative">
            {/* Navigation buttons */}
            <div className="flex gap-2 mb-5 mr-5">
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
                {slides.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full h-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${img})` }}></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="w-full h-full object-cover absolute left-0 top-0 z-10 bg-black/80"></div>

      <div className="w-full h-full absolute left-0 top-0 z-0">
        <Image
          src="https://csip-image.blr1.digitaloceanspaces.com/csip-image/mmit/mangalmay_institute_of_management_technology_cover.webp"
          width={1920}
          height={1080}
          alt="Building"
          priority
          className={`w-full h-full object-cover absolute left-0 top-0 transition-opacity duration-1000 ease-in-out`}
        />
      </div>
    </div>
  )
}

export default MainSection
