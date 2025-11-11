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
    <div className="relative overflow-hidden">
      <div className="flex justify-center relative z-20 min-h-[90vh] sm:h-screen px-5 sm:px-10 lg:px-20">
        <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center lg:items-center py-10 gap-10 lg:gap-0">

          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <span className="text-xs sm:text-sm font-novaReg text-white tracking-widest uppercase">
              best <span className="text-primary">university</span> in Delhi NCR
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-cursiveFont font-thin text-white mt-3">
              Mangalmay Group of Institution
            </h1>

            <p className="mt-4 text-slate-200 text-sm sm:text-base md:text-lg font-novaReg max-w-xl mx-auto lg:mx-0">
              Best B.Tech, MBA, BBA, BCA, BCOM and B.Ed college with a global reputation that strives for high-quality education. 
              The mission of the group is to offer innovative opportunities to our students to showcase their creativity and talent 
              thereby making a positive impact on society.
            </p>

            <div className="mt-6">
              <Button
                text="Apply Today"
                className="py-3 px-8 sm:px-10 text-sm sm:text-[15px] rounded-xl font-novaBold uppercase bg-primary animate-gradient text-white hover:bg-[#791b61] hover:border-b-4 hover:border-black hover:scale-y-105 tracking-widest"
              />
            </div>
          </div>

          {/* Right Swiper Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-end relative lg:h-full">
            
            {/* Navigation Buttons */}
            <div className="flex gap-2 mb-4 lg:mb-5">
              <button id="prevButton" className="p-2 bg-primary rounded-full shadow hover:bg-[#9b337e] transition">
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button id="nextButton" className="p-2 bg-primary rounded-full shadow hover:bg-[#9b337e] transition">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Swiper */}
            <div className="w-[250px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[140px] sm:h-[160px] md:h-[200px]">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1068: { slidesPerView: 2 },
                }}
                spaceBetween={15}
                navigation={{
                  prevEl: "#prevButton",
                  nextEl: "#nextButton",
                }}
                className="rounded-2xl h-full"
              >
                {slides.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full h-full bg-cover bg-center rounded-2xl"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-black/80"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://csip-image.blr1.digitaloceanspaces.com/csip-image/mmit/mangalmay_institute_of_management_technology_cover.webp"
          width={1920}
          height={1080}
          alt="Building"
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default MainSection
