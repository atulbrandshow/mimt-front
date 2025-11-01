"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/Json/NavList";
import Link from "next/link";
import { useRouter } from "next/router";

function SlideNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = window.location.pathname || "/";
    console.log(currentPath);

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
    return (
        <div className="relative min-h-screen bg-yellow-600 px-4">
            {/* Menu Icon */}
            {!isMenuOpen ? (
                <Menu
                    className="mt-6  cursor-pointer text-white"
                    size={30}
                    onClick={handleToggleMenu}
                />
            ) : (
                <ChevronLeft
                    className="mt-6  cursor-pointer text-white"
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
              <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
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
                                        className={`hover:text-yellow-400 cursor-pointer w-max text-2xl font-bold text-left ${currentPath === ele?.links ? "text-yellow-400" : ""
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
                                            className="hover:text-yellow-400 cursor-pointer w-max text-lg font-bold text-left"
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
    );
}

export default SlideNavbar;
