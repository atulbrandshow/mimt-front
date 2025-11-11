"use client";
import React, { useEffect, useRef, useState } from "react";
import { BellDot, ChevronDown, ChevronLeft, ChevronUp, Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/Json/NavList";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatedTooltip } from "./ui/animated-tooltip";
function SlideNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = window.location.pathname || "/";

    const [currentMenu, setCurrentMenu] = useState(currentPath || "")
    const router = useRouter()
    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [leftHeight, setLeftHeight] = useState(0);

    useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [currentMenu, NAV_ITEMS]);

    const items = [
        {
            id: 1,
            name: "Facebook",
            link: "https://www.facebook.com/mangalmay.org",
            image: "/image/Facebook.png"
        },
        {
            id: 2,
            name: "Twitter",
            link: "https://twitter.com/mangalmaydotorg",
            image: "/image/twitter.png"
        },
        {
            id: 3,
            name: "Pinterest",
            link: "https://in.pinterest.com/mangalmaydotorg/",
            image: "/image/pinterest.png"
        },
        {
            id: 4,
            name: "LinkedIn",
            link: "https://in.linkedin.com/in/mangalmaydotorg",
            image: "/image/linkedin.png"
        },
        {
            id: 5,
            name: "Youtube",
            link: "https://www.youtube.com/mangalmayorg",
            image: "/image/youtube.png"
        },
        {
            id: 6,
            name: "Instagran",
            link: "https://www.instagram.com/mangalmayinstitutions/",
            image: "/image/Instagram.png"
        },
        {
            id: 7,
            name: "Whatsapp",
            link: "https://wa.me/919650308990",
            image: "/image/whatsapp.png"
        }
    ]
    const [expandedMenu, setExpandedMenu] = useState(null); // currently opened main menu
    return (
        <>
            {/* Laptop Screen Slide Navbar */}
            <div className="sticky top-0 h-screen z-[999999] bg-primary px-4 max-sm:hidden">
                {/* Menu Icon */}
                {!isMenuOpen ? (
                    <Menu
                        className="mt-12 cursor-pointer text-white"
                        size={30}
                        onClick={handleToggleMenu}
                    />
                ) : (
                    <ChevronLeft
                        className="mt-12 cursor-pointer text-white"
                        size={30}
                        onClick={handleToggleMenu}
                    />
                )}

                {/* Background Blur Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[90] left-14"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleToggleMenu}
                        />
                    )}
                </AnimatePresence>

                {/* Sliding Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                            className="fixed top-0 left-16 h-full w-full  shadow-2xl z-[100] rounded-r-2xl "
                        // onClick={handleToggleMenu}
                        >
                            {/* <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-novaReg text-gray-700">Menu</h2>
              <ChevronLeft
                className="cursor-pointer text-gray-600"
                onClick={handleToggleMenu}
              />
            </div> */}
                            <div className="flex justify-start px-20 gap-10">
                                {/* LEFT SECTION */}
                                <div
                                    ref={leftRef}
                                    className="p-4 space-y-4 mt-32 flex flex-col gap-3 text-white border-r-2"
                                >
                                    {NAV_ITEMS.map((ele) => (
                                        <button
                                            key={ele.links}
                                            onClick={() => {
                                                router.push(ele?.links);
                                                handleToggleMenu();
                                                setCurrentMenu(ele?.links);
                                            }}
                                            onMouseOver={() => setCurrentMenu(ele?.links)}
                                            className={`hover:text-primary cursor-pointer w-max text-2xl font-novaReg text-left ${currentPath === ele?.links ? "text-primary" : ""
                                                }`}
                                        >
                                            {ele?.name}
                                        </button>
                                    ))}
                                </div>

                                {/* RIGHT SECTION */}
                                <div
                                    ref={rightRef}
                                    className="p-4 space-y-4 mt-32 flex flex-col gap-1 text-white w-max flex-1 overflow-y-auto"
                                    style={{ maxHeight: leftHeight ? `${leftHeight}px` : "auto" }}
                                >
                                    {NAV_ITEMS.find((ele) => ele?.links === currentMenu)?.sublinks?.map(
                                        (ele) => (
                                            <button
                                                key={ele.url}
                                                onClick={() => {
                                                    router.push(ele?.url);
                                                    handleToggleMenu();
                                                }}
                                                className="hover:text-primary cursor-pointer w-max text-lg font-novaReg text-left"
                                            >
                                                {ele?.name}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="fixed bottom-2 left-3 z-[999999] max-sm:bottom-14">
                <AnimatedTooltip items={items} />
            </div>
            {/* End Laptop Screen Slide Navbar */}

            {/* Mobile Slide Navbar */}
            <div
                id="MobileMenu"
                className="fixed bottom-0 left-0 w-full h-14 bg-white border-t-2 border-primary z-[1000000] justify-center items-center max-sm:flex hidden shadow-[0_-2px_10px_rgba(0,0,0,0.05)]"
            >
                <div className="flex items-center gap-3">
                    <button className="bg-primary text-white text-sm px-4 py-2 rounded-md font-semibold hover:bg-primary/80 transition-colors">
                        Apply Now
                    </button>
                    <button className="bg-secondary text-black text-sm p-2 rounded-full font-semibold hover:bg-secondary/80 transition-colors cursor-pointer">
                        <BellDot />
                    </button>
                    <button
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        aria-label="Search"
                    >
                        <Search size={20} className="text-gray-600" />
                    </button>
                </div>
                <Menu
                    className="cursor-pointer text-primary ml-10"
                    size={30}
                    onClick={handleToggleMenu}
                />
            </div>

            {/* ✅ Slide-up Panel */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Bottom sliding panel */}
                        <motion.div
                            initial={{ y: "100%" }} // starts below viewport
                            animate={{ y: 0 }} // slides up
                            exit={{ y: "100%" }} // slides down on exit
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                            className="fixed bottom-0 left-0 w-full h-[100vh] bg-white shadow-2xl z-[999999] hidden max-sm:flex flex-col pb-16"
                        >
                            {/* ✅ Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="flex flex-col">
                                    {NAV_ITEMS.map((mainItem) => (
                                        <div key={mainItem.links}>
                                            {/* Main Button */}
                                            <div className="w-full py-5 border-b-2">
                                                <button
                                                    onClick={() =>
                                                        setExpandedMenu((prev) =>
                                                            prev === mainItem.links ? null : mainItem.links
                                                        )
                                                    }
                                                    className="flex justify-between items-center w-full text-left text-primary text-xl font-novaReg hover:text-primary/70 transition-colors px-10"
                                                >
                                                    {mainItem.name}
                                                    {mainItem?.sublinks?.length > 0 && (
                                                        expandedMenu === mainItem.links ? (
                                                            <ChevronUp size={22} />
                                                        ) : (
                                                            <ChevronDown size={22} />
                                                        )
                                                    )}
                                                </button>
                                            </div>

                                            {/* Submenu (Collapsible Section) */}
                                            <AnimatePresence>
                                                {expandedMenu === mainItem.links &&
                                                    mainItem.sublinks &&
                                                    mainItem.sublinks.length > 0 && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="flex flex-col gap-2"
                                                        >
                                                            {mainItem.sublinks.map((sub) => (
                                                                <button
                                                                    key={sub.url}
                                                                    onClick={() => {
                                                                        router.push(sub.url);
                                                                        handleToggleMenu();
                                                                    }}
                                                                    className="text-gray-700 text-base text-left hover:text-primary transition-colors bg-transparent w-full px-10 py-5 border-b-2"
                                                                >
                                                                    {sub.name}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </>
                )}
            </AnimatePresence>

        </>

    );
}

export default SlideNavbar;
