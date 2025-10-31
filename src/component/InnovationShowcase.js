"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TitleInfo from "./TitleInfo"

export default function InnovationShowcase() {
    const [activeTab, setActiveTab] = useState("labs")
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [isAutoSliding, setIsAutoSliding] = useState(true)

    // Data for both tabs
    const contentData = {
        labs: {
            title: "Build The Future Here",
            description:
                "Explore and push the limits of your creativity at our various Innovation Labs to turn your theoretical knowledge into practical outcomes.",
            cards: [
                {
                    id: 1,
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/electronics-workshop-with-person-in-pink-shirt-phXPLE4kyj5Kqyh0sHDs10i4Js0FG5.jpg",
                    title: "VMware VSphere Overview",
                    logo: "🔷",
                },
                {
                    id: 2,
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-lab-with-geometric-ceiling-and-people-colla-n3YSdiW2fHDIgmZPbEwgYDPDhDp44U.jpg",
                    title: "Metaverse Centre of Excellence in AR/VR",
                    logo: "🌐",
                },
                {
                    id: 3,
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/professional-team-photo-in-office-setting-1BFg67oron4I1afqHhqDVpWQ4QHV1S.jpg",
                    title: "Capgemini 5G Lab",
                    logo: "📡",
                },
            ],
        },
        research: {
            title: "Advanced Research Division",
            description:
                "Discover cutting-edge research initiatives and breakthrough technologies developed at our world-class research facilities and institutes.",
            cards: [
                {
                    id: 1,
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/quantum-computing-lab-with-advanced-equipment-9z2yINBknr121RwW5fQpZhBgUydW0o.jpg",
                    title: "Quantum Computing Research",
                    logo: "⚛️",
                },
                {
                    id: 2,
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ai-machine-learning-research-center-Gtj68Y11wPXSbMn33V4DR0rSSKRuWh.jpg",
                    title: "AI & Machine Learning Institute",
                    logo: "🤖",
                },
                {
                    id: 3,
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/biotech-research-facility-NWot07nIsgjVCuxi8n1mhMHh2DzbZl.jpg",
                    title: "Biotech Innovation Hub",
                    logo: "🧬",
                },
            ],
        },
    }

    const currentContent = contentData[activeTab]

    // Auto-slide carousel
    useEffect(() => {
        if (!isAutoSliding) return
        const timer = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % currentContent.cards.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [isAutoSliding, currentContent.cards.length])

    // Reset carousel on tab change
    useEffect(() => {
        setCarouselIndex(0)
    }, [activeTab])

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        setCarouselIndex(0)
    }

    const handlePrevCard = () => {
        setCarouselIndex((prevIndex) => (prevIndex - 1 + currentContent.cards.length) % currentContent.cards.length)
        setIsAutoSliding(false)
    }

    const handleNextCard = () => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % currentContent.cards.length)
        setIsAutoSliding(false)
    }

    return (
        <section className="h-full bg-black pt-16">
            <TitleInfo first="Labs & Research" second="Innovate and Inspire Be a Future Innovator" color='white' />
            <div className="max-w-[1600px] mx-auto text-white p-8 md:p-16">
                {/* Header with Tab Buttons */}
                <div className="flex items-center gap-4 mb-16">
                    <button
                        onClick={() => handleTabChange("labs")}
                        className={`text-2xl md:text-4xl font-novaBold transition-all duration-500 ${activeTab === "labs" ? "text-white" : "text-gray-500 hover:text-gray-400"
                            }`}
                    >
                        Innovation Labs
                    </button>

                    {/* Accent dot */}
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>

                    <button
                        onClick={() => handleTabChange("research")}
                        className={`text-2xl md:text-4xl font-novaBold transition-all duration-500 ${activeTab === "research" ? "text-white" : "text-gray-500 hover:text-gray-400"
                            }`}
                    >
                        Research
                    </button>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Section - Text Content */}
                    <div className="lg:col-span-1 flex flex-col justify-start">
                        <div>
                            <h1 className="text-4xl md:text-8xl font-novaThin mb-6 text-balance">{currentContent.title}</h1>
                            <p className="text-gray-400 text-lg max-w-sm font-novaReg leading-relaxed">{currentContent.description}</p>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4 mt-12">
                            <button
                                onClick={handlePrevCard}
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-300"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={handleNextCard}
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-300"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Carousel */}
                    <div className="lg:col-span-2">
                        <div className="relative h-96 overflow-hidden rounded-lg">
                            {/* Cards Container */}
                            <div className="relative w-full h-full">
                                {currentContent.cards.map((card, index) => (
                                    <div
                                        key={card.id}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === carouselIndex ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        {/* Card Image */}
                                        <img src={card.image || "/placeholder.svg"} alt={card.title} className="w-full h-full object-cover object-bottom" />

                                        {/* Card Info Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{card.logo}</span>
                                                <div>
                                                    <p className="text-white font-novaSemi text-sm md:text-base">{card.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                                {currentContent.cards.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCarouselIndex(index)
                                            setIsAutoSliding(false)
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === carouselIndex ? "bg-white w-6" : "bg-gray-500"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Additional Cards Carousel (scrollable grid) */}
                        <div className="mt-8 overflow-x-auto scrollbar-hide p-1">
                            <div className="flex gap-4 pb-4">
                                {currentContent.cards.map((card, index) => (
                                    <div
                                        key={card.id}
                                        onClick={() => {
                                            setCarouselIndex(index)
                                            setIsAutoSliding(false)
                                        }}
                                        className={`flex-shrink-0 w-48 h-32 rounded-lg cursor-pointer transition-all duration-300 ${index === carouselIndex ? "ring-2 ring-red-500 opacity-100" : "opacity-60 hover:opacity-80"
                                            }`}
                                    >
                                        <img
                                            src={card.image || "/placeholder.svg"}
                                            alt={card.title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
