"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { IMAGE_PATH } from "@/configs/config"
import Header from "@/component/Header"
import SideBar from "@/component/SideBar"

const JobFair = ({ data }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    const galleryImages = data?.pageData?.JobFairImages || [];

    const openLightbox = (index) => {
        setSelectedImageIndex(index)
        setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
    }

    const goToPrevious = () => {
        setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
    }

    const handleKeyDown = (e) => {
        if (!isLightboxOpen) return
        if (e.key === "ArrowLeft") goToPrevious()
        if (e.key === "ArrowRight") goToNext()
        if (e.key === "Escape") closeLightbox()
    }
    return (
        <div onKeyDown={handleKeyDown} className="relative bg-white h-full w-full">
            <Header data={data} />
            <div className="bg-primary">
                <div className="bg-white h-20 rounded-bl-3xl" />
            </div>
            <section className="w-full grid grid-cols-12 gap-10 max-sm:gap-0">
                <div className="bg-primary rounded-r-[50px] col-span-9 max-xl:col-span-8 max-lg:col-span-12">
                    <div className="max-w-6xl ml-auto py-16 px-5">
                        <div className="mb-12">
                            <h2 className="text-4xl font-novaBold text-white mb-2">Mangalmay - Job Fair</h2>
                            <p className="text-slate-200 font-novaReg text-lg">
                                Join the Mangalmay Job Fair to explore exciting career opportunities, connect with top employers, and take your next big step toward a successful future.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => openLightbox(index)}
                                    className="group relative overflow-hidden rounded-2xl cursor-pointer h-60 bg-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    <Image
                                        src={IMAGE_PATH + image}
                                        alt={`Gallery image ${index + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-125 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <div className="flex items-center justify-center gap-2 text-white">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-3 max-xl:col-span-4 max-lg:col-span-12">
                    <SideBar />
                </div>
            </section>
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/95 z-[9999999] flex items-center justify-center animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-200 backdrop-blur-md hover:scale-110 hover:rotate-90"
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8">
                        <div className="relative w-full max-w-6xl h-full max-h-[90vh] animate-in zoom-in-50 duration-300">
                            <Image
                                src={IMAGE_PATH + galleryImages[selectedImageIndex]}
                                alt={`Full screen image ${selectedImageIndex + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Left Navigation */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goToPrevious()
                            }}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-md border border-white/30 hover:border-white/50 group"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
                        </button>

                        {/* Right Navigation */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goToNext()
                            }}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/30 hover:border-white/50 group"
                            aria-label="Next image"
                        >
                            <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-novaBold bg-black/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/30">
                            {selectedImageIndex + 1} <span className="text-white/60 mx-1">/</span> {galleryImages.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default JobFair