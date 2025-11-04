"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const EventDetails = ({ data }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const date = new Date(data?.date);

    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });

    const eventData = data;
    const galleryImages = Array.isArray(data?.galleryimg) ? data.galleryimg.filter((img) => img && img.trim() !== "") : [];

    console.log(data);

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
        <div onKeyDown={handleKeyDown} className="bg-white">
            {/* Hero Banner */}
            <div className="relative h-96 md:h-[500px] overflow-hidden bg-slate-900 group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1))] bg-[length:40px_40px]"></div>
                </div>
                {/* <Image
                    src="https://www.mangalmay.org/upcoming-events/1734593991-455862382_826500526329478_6459841987519546538_n.jpg"
                    alt={eventData.title}
                    fill
                    className="object-cover object-top opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                /> */}
                <div className="relative h-full flex items-center justify-center px-4">
                    <div className="text-center text-white">
                        <div className="inline-block mb-4 px-4 py-1 bg-primary backdrop-blur-md rounded-full border border-white/20">
                            <span className="text-sm font-novaSemi text-white">FEATURED EVENT</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-novaBold mb-4 text-balance leading-tight">{eventData.name}</h1>
                        <p className="text-lg max-w-4xl font-novaThin mx-auto text-slate-300" dangerouslySetInnerHTML={{ __html: eventData?.shortdesc}} />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-primary">
                <section className="bg-white rounded-bl-[100px] ">
                    <main className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
                        {/* Description Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-[60px] p-12 border border-slate-200/50 shadow-md drop-shadow-2xl transition-all duration-300">
                                    <h2 className="text-3xl font-novaSemi text-black mb-6">About This Event</h2>
                                    <p className="text-slate-700 text-lg font-novaReg leading-relaxed mb-6 prose-p:mb-5" dangerouslySetInnerHTML={{ __html: eventData?.description }} />
                                </div>
                            </div>

                            {/* Sidebar CTA */}
                            <div className="lg:col-span-1">
                                <div className="bg-primary rounded-[40px] p-10 text-white sticky top-24 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <h3 className="text-2xl font-novaBold mb-3">Ready to Attend?</h3>

                                    {/* Date and Location Section */}
                                    <div className="space-y-3 ">
                                        <div className="flex items-center gap-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-200"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span className="text-gray-100 font-novaSemi">{formattedDate}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-200"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5 9 6.344 9 8s1.344 3 3 3z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 22s8-4.438 8-11a8 8 0 10-16 0c0 6.562 8 11 8 11z"
                                                />
                                            </svg>
                                            <span className="text-gray-100 font-novaSemi">Greater Noida</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
            <section className="bg-primary rounded-r-[100px]">
                <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
                    <div className="mb-12">
                        <h2 className="text-4xl font-novaBold text-white mb-2">Event Gallery</h2>
                        <p className="text-slate-200 font-novaReg text-lg">Explore moments from our previous events</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => openLightbox(index)}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer h-60 bg-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Image
                                    src={"https://www.mangalmay.org/upcoming-events/" + image}
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
            </section>

            {/* Lightbox Modal */}
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
                                src={"https://www.mangalmay.org/upcoming-events/" + galleryImages[selectedImageIndex]}
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

export default EventDetails
