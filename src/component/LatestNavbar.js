"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { About,Blog, Academics, Admissions, CampusLife, ResearchInnovation, Placements, Programs, Facilities } from "../Json/MenuItem";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { easeIn } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import { Phone } from 'lucide-react';

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Official.AKGU",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-facebook'><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' /></svg>
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/official.akgec/",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-instagram'><rect width='20' height='20' x='2' y='2' rx='5' ry='5' /><path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' /><line x1='17.5' y1='6.5' x2='17.51' y2='6.5' /></svg>
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/school/officialakgec",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-linkedin'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' /><rect width='4' height='12' x='2' y='9' /><circle cx='4' cy='4' r='2' /></svg>
  },
  {
    name: "Twitter",
    url: "https://x.com/official_akgec",
    svg: <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-twitter'><path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' /></svg>
  }
]

const notifications = [
  "Admissions Open: PGDM and MBA Programs 2024-2025",
  "Upcoming Workshop: Leadership and Soft Skills Training - Aug 2024",
];

export default function LatestNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isBelowLg, setIsBelowLg] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [BigMenuToggle, setBigMenuToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("School of Engineering & Technology");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsBelowLg(window.innerWidth < 1024);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = (menu) => {
    if (isBelowLg) {
      setOpenMenu(prevMenu => (prevMenu === menu ? null : menu));
    }
  };

  const LinksList = ({ title, links, titleClassName, ulClassName, setBigMenuToggle }) => (
    <div className="w-fit max-lg:mb-5 lg:mr-10 max-md:w-full">
      {title && <h3 className={`font-novaBold text-purple-800 leading-none mb-5 ${titleClassName}`}>{title}</h3>}
      <ul className={`space-y-1 lg:space-y-2 ${ulClassName}`}>
        {links?.map((link, index) => (
          <li key={index} className="leading-none">
            <Link href={link?.url || "/"} className="hover:underline text-gray-700 cursor-pointer text-left font-novaReg text-sm"
              onClick={() => {
                setBigMenuToggle(false); // Close the menu
              }}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  useGSAP(() => {
    gsap.from(".logo", { scale: 0, duration: 0.5, ease: easeIn })
    gsap.from(".notification", { y: -30, duration: 0.5, ease: easeIn })
  })

  return (
    <header
      className={`navbar z-[100] w-full fixed top-0 left-0 transition-all duration-200 bg-white shadow-md`}>
      <div className={`hidden md:flex overflow-hidden w-full transition-all duration-300 ease-in-out py-1.5 justify-end items-center px-3 border-b border-gray-400/30`}>
        <div className="notification max-lg:w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {notifications.map((notification, index) => (
              <SwiperSlide key={index} className=''>
                <p className={`text-center lg:text-right text-black font-novaReg cursor-pointer text-xs`}>{notification}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:flex justify-end items-center px-2">
          <div className={`flex gap-x-6 justify-end items-center`}>
            <div className={`flex items-center gap-5 xl:gap-10 text-sm uppercase tracking-wider whitespace-nowrap text-black font-novaReg`}>
              <Link href="#" className={`hover:underline hover:text-gray-400 transition duration-500`}>Campus</Link>
              <Link href="#" className={`hover:underline hover:text-gray-400 transition duration-500`}>Library</Link>
              <Link href="#" className={`hover:underline hover:text-gray-400 transition duration-500`}>Student Services</Link>
              <Link href="/blogs" className={`hover:underline hover:text-gray-400 transition duration-500`}>Blogs</Link>
              <Link href="#" className={`hover:underline hover:text-gray-400 transition duration-500`}>News</Link>
              <Link href="#" className={`hover:underline hover:text-gray-400 transition duration-500`}>Events</Link>
              {/* <Link href="/articles" className={`hover:underline hover:text-gray-400 transition duration-500`}>Article</Link> */}
              <Link href="#" className={`hover:underline hover:text-gray-400 transition duration-500`}>Circulars</Link>
              {/* <Link href="/notice" className={`hover:underline hover:text-gray-400 transition duration-500`}>Notices</Link> */}
              {/* <Link href="/download-center" className={`hover:underline hover:text-gray-400 transition duration-500`}>Download Center</Link> */}
              <Link href="#" className=''>
                <div className='h-6 w-12 flex items-center justify-center border-2 border-gray-300 rounded-full'>
                  <Phone size={15} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-1">
        <div className="flex max-lg:w-full">
          <div className={`flex justify-between items-center px-3 ${BigMenuToggle && "relative z-[20] shadow-lg w-screen py-1.5"}`}>
            <div className="flex justify-center max-lg:py-1">
              <Link href="/">
                <Image
                  src="/image/mimt/hero-section/college-logo.webp"
                  alt="MIMT Logo"
                  height={300}
                  width={800}
                  className={`logo xl:h-16 w-full ${BigMenuToggle ? "h-9" : "h-10"} rounded-md object-contain bg-blend-color-dodge cursor-pointer`}
                />
              </Link>
            </div>
            {BigMenuToggle &&
              <button
                onClick={() => setBigMenuToggle(!BigMenuToggle)}
                className="text-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            }
            {!BigMenuToggle &&
              <div className='absolute right-3'>
                <div className='lg:hidden bg-blue-500 p-0.5 rounded-md'>
                  <button onClick={() => setBigMenuToggle(!BigMenuToggle)} className='block text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className='pr-3 xl:pl-20 w-full'>
          <ul
            className={`${BigMenuToggle
              ? "fixed w-full h-full left-0 top-0 py-20 overflow-y-auto backdrop-blur-lg bg-black/50 px-3"
              : `hidden relative rounded-xl px-3 xl:px-10`}text-black bg-black/10 lg:pt-2 lg:flex items-center justify-evenly max-2xl:text-sm 2xl:gap-x-6 font-novaSemi`}>
            {BigMenuToggle && <>
              <div className="my-10">
                <h2 className="text-center text-gray-100 text-sm font-novaSemi mb-1 uppercase">Notifications
                </h2>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  className="w-full"
                >
                  {notifications.map((notification, index) => (
                    <SwiperSlide key={index}>
                      <p className="text-center text-gray-300 font-novaReg cursor-grab text-sm">{notification}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>}
            <li className="relative group">
              <button onClick={() => toggleMenu('about')} className={` relative focus:outline-none font-novaBold flex lg:pb-2 items-center xl:gap-1 tracking-wide xl:tracking-wider 2xl:tracking-widest`}>
                ABOUT{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                <span className="absolute inset-x-0 -top-2 h-[2px] rounded-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
              </button>
              <div
                className={`${BigMenuToggle ? "relative w-full " : "absolute w-max"
                  } ${openMenu === 'about' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-2 mb-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white text-black rounded-lg shadow-lg bg-[url('/image/mimt/navbar/about-menu.jpg')] bg-contain bg-right bg-no-repeat`}
              >
                <div className="w-[700px] h-80">
                  <div className="p-8 transition-all">
                    <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                      <LinksList title="ABOUT MANGALMAY" links={About.sublinks["About Mangalmay"]} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button onClick={() => toggleMenu('programs')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-wide xl:tracking-wider 2xl:tracking-widest`}>
                PROGRAMS{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                <span className="absolute inset-x-0 -top-2 h-[2px] rounded-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
              </button>
              <div
                className={`${BigMenuToggle ? "relative w-full " : "absolute w-max"
                  } ${openMenu === 'programs' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-2 mb-4 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg bg-[url('/image/mimt/navbar/program-menu.jpg')] bg-contain bg-right bg-no-repeat`}
              >
                <div className="w-[900px] h-96">
                  <div className="p-8 transition-all">
                    <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                      <LinksList title="COURSES OFFERED" links={Programs.sublinks["Courses Offered"]} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li className="relative group">
              <button onClick={() => toggleMenu('academics')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-wide xl:tracking-wider 2xl:tracking-widest`}>
                ACADEMICS{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                <span className="absolute inset-x-0 -top-2 h-[2px] rounded-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
              </button>
              <div
                className={`${BigMenuToggle ? "relative w-full " : "absolute w-max"
                  } ${openMenu === 'academics' && "absolute h-auto mt-0 w-full"} -left-52 max-lg:left-0 h-0  mt-2 mb-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
              >
                <div className="grid grid-cols-12">
                  <div className="col-span-8 max-md:col-span-12 p-5 transition-all">
                    <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                      <LinksList title="ACADEMICS" links={Academics.sublinks["Academics"]} setBigMenuToggle={setBigMenuToggle} />
                      <LinksList title="SCHOOLS" links={Academics.sublinks["Schools"]} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                  </div>
                  <div className="col-span-4 max-md:hidden h-full">
                    <div className="bg-Academics bg-cover bg-black bg-blend-multiply bg-opacity-70 h-full flex flex-col justify-between">
                      <div className="flex flex-col items-center mt-20">
                        <span className="text-center text-lg font-novaLight text-white">
                          Milestones in
                        </span>
                        <span className="text-center text-2xl font-novaBold leading-none text-secondary">
                          Educational Achievement
                        </span>
                      </div>
                      <div className="grid grid-cols-2 bg-indigo-950">
                        <div className="flex flex-col items-center text-white border-r border-t-white/50 p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /><path d="m7 16.5-4.74-2.85" /><path d="m7 16.5 5-3" /><path d="M7 16.5v5.17" /><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /><path d="m17 16.5-5-3" /><path d="m17 16.5 4.74-2.85" /><path d="M17 16.5v5.17" /><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /><path d="M12 8 7.26 5.15" /><path d="m12 8 4.74-2.85" /><path d="M12 13.5V8" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Flexible Choice
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white border-t-white/50 p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Electives
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white border-t border-r border-t-white/50 p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-dot"><circle cx="19" cy="6" r="3" /><path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" /><path d="M12 17v4" /><path d="M8 21h8" /></svg>
                          <span className="mt-2 text-xs text-white font-novaLight">
                            Technologies
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-white border-t border-t-white/50 p-7">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /><circle cx="13" cy="12" r="2" /><path d="M18 19c-2.8 0-5-2.2-5-5v8" /><circle cx="20" cy="19" r="2" /></svg>
                          <span className="mt-2 text-xs text-center text-white font-novaLight">
                            Experiential Learning
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
            <li className="relative group">
              <button onClick={() => toggleMenu('admissions')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-wide xl:tracking-wider 2xl:tracking-widest`}>
                ADMISSIONS{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                <span className="absolute inset-x-0 -top-2 h-[2px] rounded-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
              </button>
              <div
                className={`${BigMenuToggle ? "relative w-full " : "absolute w-max"
                  } ${openMenu === 'admissions' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-2 mb-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg bg-[url('/image/mimt/navbar/admission.jpg')] bg-cover bg-right bg-no-repeat`}
              >
                <div className="w-[800px] h-80">
                  <div className="p-8 transition-all">
                    <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                      <LinksList title="ADMISSIONS" links={Admissions.sublinks["Admission"]} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li className="relative group">
              <button onClick={() => toggleMenu('campus-life')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 whitespace-nowrap tracking-wide xl:tracking-wider 2xl:tracking-widest`}>
                CAMPUS LIFE{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                <span className="absolute inset-x-0 -top-2 h-[2px] rounded-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
              </button>
              <div
                className={`${BigMenuToggle ? "relative w-full " : "absolute w-max"
                  } ${openMenu === 'campus-life' && "absolute h-auto mt-0 w-full"} left-0 h-0 mt-2 mb-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg `}
              >
                <div className="grid grid-cols-2">
                  <div className="col-span-2 transition-all">
                    <div className="flex p-5 group-hover:p-5 transition-all max-md:max-h-72 max-md:overflow-y-scroll max-md:flex-col">
                      <div className="w-52 ">
                        <LinksList title="CAMPUS LIFE" links={CampusLife.sublinks.slice(0, Math.ceil(CampusLife?.sublinks.length / 2))} setBigMenuToggle={setBigMenuToggle} />
                      </div>
                      <div className="w-52 ">
                        <LinksList title="" links={CampusLife.sublinks.slice(Math.ceil(CampusLife?.sublinks.length / 2))} setBigMenuToggle={setBigMenuToggle} />
                      </div>
                    </div>
                    <div className="w-full relative max-md:hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-lg shadow-md"
                        style={{
                          backgroundImage:
                            "url('/image/lab/User-Manual-AKGEC 4.webp')",
                        }}
                      >
                        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
                      </div>
                      <div className="relative bg-indigo-950">
                        <div className="relative h-1/2 z-10 text-white">
                          <h3 className="text-xl py-2 text-center font-novaLight">
                            Place Like Home
                          </h3>
                        </div>
                        <div className="flex justify-evenly text-center">
                          <div className="flex flex-col items-center text-white p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ferris-wheel"><circle cx="12" cy="12" r="2" /><path d="M12 2v4" /><path d="m6.8 15-3.5 2" /><path d="m20.7 7-3.5 2" /><path d="M6.8 9 3.3 7" /><path d="m20.7 17-3.5-2" /><path d="m9 22 3-8 3 8" /><path d="M8 22h8" /><path d="M18 18.7a9 9 0 1 0-12 0" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Technology Infusion
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" /><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" /><path d="m2 16 6 6" /><circle cx="16" cy="9" r="2.9" /><circle cx="6" cy="5" r="3" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Student centered
                            </span>
                          </div>
                          <div className="flex flex-col items-center text-white p-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></svg>
                            <span className="mt-2 text-xs text-white font-novaLight">
                              Supportive Environment
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
            <li className="group">
              <button onClick={() => toggleMenu('placements')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 tracking-wide xl:tracking-wider 2xl:tracking-widest`}>
                PLACEMENTS{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                <span className="absolute inset-x-0 -top-2 h-[2px] rounded-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
              </button>
              <div
                className={`${BigMenuToggle ? "relative w-full " : "absolute w-max"
                  } ${openMenu === 'placements' && "absolute h-auto mt-0 w-full"} right-0 h-0 mt-2 mb-5 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg bg-[url('/image/mimt/navbar/collab.jpg')] bg-cover bg-right bg-no-repeat`}
              >
                <div className="w-[650px] h-80">
                  <div className="p-8 transition-all">
                    <div className="flex max-md:flex-col max-md:gap-5 max-md:max-h-72 max-md:overflow-y-scroll">
                      <LinksList title="ADMISSIONS" links={Placements.sublinks["Placements"]} setBigMenuToggle={setBigMenuToggle} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="group">
              <button onClick={() => toggleMenu('research')} className={` relative  focus:outline-none font-novaBold flex pb-2 items-center gap-1 whitespace-nowrap tracking-wide xl:tracking-wider 2xl:tracking-widest`}>
                FACILITIES{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                <span className="absolute inset-x-0 -top-2 h-[2px] rounded-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-bottom" />
              </button>
              <div
                className={`${BigMenuToggle ? "relative w-full" : "absolute w-max"
                  } ${openMenu === 'research' && "absolute h-auto mt-0 w-full"} right-0 h-0 mt-2 overflow-hidden lg:group-hover:h-auto lg:group-hover:mt-0 transition-all bg-white
                                    text-black rounded-lg shadow-lg bg-[url('/image/mimt/navbar/facility.jpg')] bg-contain bg-bottom bg-no-repeat`}
              >
                <div className="h-96 flex p-5 w-max transition-all max-md:overflow-y-scroll max-md:flex-col max-md:gap-5 max-md:w-full">
                  {Array.from({ length: Math.ceil(Facilities?.sublinks["Facilities"].length / 5) }).map((_, i) => (
                    <div key={i} className={`${i === 0 ? "w-62" : "w-44"}`}>
                      <LinksList
                        title={i === 0 ? "FACILITIES @ MANGALMAY" : " "}
                        titleClassName={i !== 0 ? "mt-4" : ""}
                        links={Facilities?.sublinks["Facilities"].slice(i * 5, (i + 1) * 5)}
                        setBigMenuToggle={setBigMenuToggle}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};