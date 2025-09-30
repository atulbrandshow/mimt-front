"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Play, Newspaper, Calendar as CalendarIcon, ArrowLeft, ArrowRight, ExternalLink, Clock } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// --- MOCK DATA (Replace with your actual data from an API) ---
const admissionsData = [
    {
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop',
        title: 'UG Programme in Tech & Business Management',
    },
    {
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop',
        title: 'UG Programme in Psychology & Marketing',
    },
    {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop',
        title: 'UG Programme in Data Science & Artificial Intelligence',
    },
    {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop',
        title: 'PGP Tech & Business Management',
    },
];

const newsData = [
    {
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1470&auto=format&fit=crop',
        source: 'ABP LIVE',
        title: "India's Private Equity Frenzy: Smart Money Or A Bubble In The Making?",
        date: '17th January',
    },
    {
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop',
        source: 'THE TIMES OF INDIA',
        title: 'Vice President of India speaks at Masters\' Union convocation event',
        date: '13th January',
    },
    {
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop',
        source: 'NEWS 18',
        title: 'Vice President addresses Masters\' Union students on ethics and leadership',
        date: '12th January',
    },
    {
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1470&auto=format&fit=crop',
        source: 'ABP LIVE',
        title: "Another Great Article about Education and Technology advancements",
        date: '10th January',
    },
];

const eventsData = [
    {
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop',
        category: 'UG',
        title: 'Masters\' Union Mixer- Surat Edition!',
        date: '24th September',
        time: '04:00 PM - 05:00 PM',
    },
    {
        image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1470&auto=format&fit=crop',
        category: 'PGP-TBM',
        title: 'A Day at Masters\' Union Campus',
        date: '28th September',
        time: '01:00 PM - 04:00 PM',
    },
    {
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1470&auto=format&fit=crop',
        category: 'UG',
        title: 'Another Awesome Mixer Event for Students!',
        date: '30th September',
        time: '06:00 PM - 08:00 PM',
    },
];

const dataMap = { admissions: admissionsData, news: newsData, events: eventsData };

// --- CARD SUB-COMPONENTS ---
// MODIFIED AdmissionCard for left image, right content layout
const AdmissionCard = ({ item }) => (
    <div className="bg-white rounded-xl border border-gray-200/80 h-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex">
        {/* Left side: Image */}
        <div className="w-2/5 flex-shrink-0">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-l-xl"
            />
        </div>

        {/* Right side: Content */}
        <div className="w-3/5 p-5 flex flex-col justify-between">
            <div>
                <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-slate-800 text-white text-xs font-semibold px-2.5 py-1 rounded">ON CAMPUS</span>
                    <span className="text-gray-500 text-xs font-semibold">4 YEARS</span>
                </div>
                <h3 className="font-bold text-gray-800 text-md leading-tight mb-4">{item.title}</h3>
            </div>
            <div className="flex items-center text-gray-400 text-sm mt-auto"> {/* mt-auto pushes this to the bottom */}
                <CalendarIcon className="w-4 h-4 mr-2" /> {/* Changed icon to Calendar as per full screenshot */}
                <span>Application Starting Soon</span>
            </div>
        </div>
    </div>
);

const NewsCard = ({ item }) => (
    <div className="bg-white rounded-xl border border-gray-200/80 h-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="relative">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <span className="absolute top-3 left-3 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded">{item.source}</span>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="font-bold text-gray-800 text-md leading-tight flex-grow mb-3">{item.title}</h3>
            <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center text-gray-500 text-sm">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{item.date}</span>
                </div>
                <a href="#" className="flex items-center text-sm font-semibold text-gray-700 hover:text-black">
                    View Article <ArrowRight className="w-4 h-4 ml-1" /> {/* Changed ExternalLink to ArrowRight for consistency */}
                </a>
            </div>
        </div>
    </div>
);

const EventCard = ({ item }) => (
    <div className="bg-white rounded-xl border border-gray-200/80 h-full overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
        <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center space-x-3 mb-3">
                <span className="text-gray-500 text-xs font-semibold border px-2 py-0.5 rounded">{item.category}</span>
                <span className="bg-slate-800 text-white text-xs font-semibold px-2.5 py-1 rounded">ON CAMPUS</span>
            </div>
            <h3 className="font-bold text-gray-800 text-md leading-tight mb-4 flex-grow">{item.title}</h3>
            <div className="text-gray-500 text-sm space-y-2 mb-4">
                <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{item.date}</span>
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{item.time}</span>
                </div>
            </div>
            <a href="#" className="flex items-center text-sm font-semibold text-gray-700 hover:text-black mt-auto">
                Register Now <ArrowRight className="w-4 h-4 ml-1" />
            </a>
        </div>
    </div>
);

// --- MAIN COMPONENT ---
const TabbedSlider = () => {
    const [activeTab, setActiveTab] = useState('admissions');

    const renderCard = (item, index) => {
        switch (activeTab) {
            case 'admissions': return <AdmissionCard key={index} item={item} />;
            case 'news': return <NewsCard key={index} item={item} />;
            case 'events': return <EventCard key={index} item={item} />;
            default: return null;
        }
    };

    const TABS = [
        { id: 'admissions', label: 'Admissions', icon: Play },
        { id: 'news', label: 'Latest News', icon: Newspaper },
        { id: 'events', label: 'Events', icon: CalendarIcon },
    ];

    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex items-center bg-gray-100/80 p-1 rounded-lg space-x-1">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 ${activeTab === tab.id ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600 hover:bg-gray-200/60'}`}
                            >
                                <tab.icon className="w-4 h-4 mr-2" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {activeTab === 'news' && (
                            <button className="text-sm font-semibold text-gray-800 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                Explore More
                            </button>
                        )}
                        <div className="flex items-center gap-2">
                            <button className={`prev-btn-${activeTab} p-2 rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}>
                                <ArrowLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            <button className={`next-btn-${activeTab} p-2 rounded-full border-2 border-gray-400 bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}>
                                <ArrowRight className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        key={activeTab}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: `.prev-btn-${activeTab}`,
                            nextEl: `.next-btn-${activeTab}`,
                        }}
                        spaceBetween={16} // Reduced space for better fit
                        slidesPerView={1.2} // Show a bit more than 1 to indicate more content
                        slidesPerGroup={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5, // Adjusted for horizontal cards on smaller screens
                                slidesPerGroup: 1,
                                spaceBetween: 20
                            },
                            768: { // Added a breakpoint for tablets
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                                spaceBetween: 24
                            },
                            1024: {
                                slidesPerView: activeTab === 'events' ? 2 : 2, // Changed admissions/news to 2 for this horizontal layout
                                slidesPerGroup: activeTab === 'events' ? 2 : 2,
                                spaceBetween: 24
                            },
                        }}
                    >
                        {dataMap[activeTab].map((item, index) => (
                            <SwiperSlide key={index} className="!h-auto pb-4">
                                <div className="h-full">
                                    {renderCard(item, index)}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TabbedSlider;