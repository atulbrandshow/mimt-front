// src/components/NewsAndEvents.js

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUser, FiArrowRight } from 'react-icons/fi';
import TitleInfo from './TitleInfo'; // Assuming this component exists

// --- DUMMY DATA (No Changes) ---
const featuredEvent = {
    imageUrl: 'https://www.mangalmay.org/upcoming-events/1734593991-455862382_826500526329478_6459841987519546538_n.jpg',
    category: 'Annual Tech Fest',
    title: 'InnovateX 2025: The Future of Technology',
    description: 'Join us for the most anticipated tech festival of the year. Featuring guest speakers, workshops, and a 24-hour hackathon.',
    date: 'October 15-17, 2025',
};
const upcomingEvents = [
    { id: 1, date: { day: '28', month: 'SEP' }, title: 'Guest Lecture on AI Ethics', category: 'Academics', location: 'Virtual Event' },
    { id: 2, date: { day: '05', month: 'OCT' }, title: 'Inter-College Sports Meet', category: 'Sports', location: 'University Sports Complex' },
    { id: 3, date: { day: '12', month: 'OCT' }, title: 'CodeClash: The Annual Coding Competition', category: 'Competition', location: 'CSE Department Labs' },
];
const featuredNews = {
    imageUrl: 'https://www.mangalmay.org/upcoming-events/1756800285-ashneer.jpg',
    category: 'Research',
    title: 'Breakthrough in Quantum Computing Research',
    description: "Our university's physics department has published a groundbreaking paper on quantum entanglement, paving the way for more stable quantum computers.",
    date: 'September 22, 2025',
};
const otherNews = [
    { id: 4, date: { day: '20', month: 'SEP' }, title: 'New Campus Sustainability Initiative Launched', category: 'Campus Life', author: 'Jane Doe' },
    { id: 5, date: { day: '18', month: 'SEP' }, title: 'Alumni Spotlight: Success in Silicon Valley', category: 'Alumni', author: 'John Smith' },
    { id: 6, date: { day: '15', month: 'SEP' }, title: 'Partnership with Industry Leader for Internships', category: 'Academics', author: 'Admin Office' },
];

// --- Sub-Components for the New Design ---

const TabButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className="relative px-4 py-2 text-lg font-novaSemi transition-colors duration-300 focus:outline-none"
    >
        <span className={active ? "text-teal-600" : "text-slate-500 hover:text-teal-500"}>{label}</span>
        {active && (
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                layoutId="underline"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
        )}
    </button>
);

const TimelineItem = ({ item, isEvent, isOdd }) => {
    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' } },
    };

    const cardContent = (
        <div className="bg-white rounded-3xl drop-shadow-xl border border-gray-100 p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group w-full">
            <p className="text-sm font-novaSemi text-teal-600 uppercase tracking-wider">{item.category}</p>
            <h3 className="text-xl font-novaBold text-slate-800 mt-2 group-hover:text-teal-700">{item.title}</h3>
            <div className="text-sm text-slate-500 mt-3 flex items-center font-novaReg">
                {isEvent ? (
                    <><FiMapPin className="mr-2 flex-shrink-0" /> {item.location}</>
                ) : (
                    <><FiUser className="mr-2 flex-shrink-0" /> {item.author}</>
                )}
            </div>
        </div>
    );

    return (
        <motion.div variants={itemVariants} className="relative w-full">
            <div className="hidden md:block absolute w-0.5 h-full bg-slate-300 top-5 left-1/2 -translate-x-1/2"></div>
            <div className={`flex items-center w-full md:w-1/2 ${isOdd ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                {/* Date on the inside */}
                <div className={`flex-shrink-0 text-center p-3 rounded-md w-24 md:w-28 ${isOdd ? 'md:order-first' : 'md:order-last md:ml-auto'}`}>
                    <p className="text-4xl font-novaBold text-teal-600">{item.date.day}</p>
                    <p className="text-md font-novaSemi text-slate-500 uppercase">{item.date.month}</p>
                </div>
                {/* Card on the outside */}
                <div className={`w-full ${isOdd ? 'md:mr-auto' : ''}`}>
                    {cardContent}
                </div>
            </div>
        </motion.div>
    );
};

// --- MAIN COMPONENT ---
const NewsAndEvents = () => {
    const [activeTab, setActiveTab] = useState('events');

    const featuredItem = activeTab === 'events' ? featuredEvent : featuredNews;
    const listItems = activeTab === 'events' ? upcomingEvents : otherNews;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
    };

    return (
        <section className="bg-gray-50 text-slate-800 py-24 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <TitleInfo first="News & Events" second="Our Vibrant Community" color="teal" />
                    <p className="text-lg font-novaReg text-slate-500 max-w-3xl mx-auto mt-4">
                        Explore the latest stories, research, and gatherings that define our campus life and academic excellence.
                    </p>
                </motion.div>

                {/* --- REDESIGNED TAB SWITCHER --- */}
                <div className="flex justify-center gap-2 sm:gap-6 border-b border-slate-200 mb-16">
                    <TabButton label="Upcoming Events" active={activeTab === 'events'} onClick={() => setActiveTab('events')} />
                    <TabButton label="Latest News" active={activeTab === 'news'} onClick={() => setActiveTab('news')} />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0 }}
                        className="space-y-12"
                    >
                        {/* --- FEATURED ITEM --- */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { type: 'spring' } },
                            }}
                            className="bg-white rounded-3xl drop-shadow-xl border border-gray-100 overflow-hidden group flex flex-col md:flex-row"
                        >
                            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                <img src={featuredItem.imageUrl} alt={featuredItem.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                                <p className="text-sm font-novaSemi text-teal-600 uppercase tracking-wider">{featuredItem.category}</p>
                                <h2 className="text-3xl font-novaBold text-slate-900 mt-2">{featuredItem.title}</h2>
                                <p className="text-slate-600 font-novaReg mt-4 mb-6">{featuredItem.description}</p>
                                <div className="flex items-center justify-between pt-5 border-t border-slate-200">
                                    <p className="text-sm font-novaSemi text-slate-500 flex items-center">
                                        <FiCalendar className="mr-2 text-teal-500" /> {featuredItem.date}
                                    </p>
                                    <button className="flex items-center text-sm font-novaSemi text-teal-600 group-hover:text-teal-800">
                                        Read More
                                        <FiArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* --- TIMELINE LIST --- */}
                        <div className="relative space-y-8 md:space-y-0">
                            {listItems.map((item, index) => (
                                <TimelineItem key={item.id} item={item} isEvent={activeTab === 'events'} isOdd={index % 2 !== 0} />
                            ))}
                        </div>
                        
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: listItems.length * 0.2}}>
                            <button className="w-full mt-8 text-center drop-shadow-xl text-lg border border-gray-200 font-novaSemi py-4 rounded-lg bg-white text-slate-600 hover:border-teal-400 hover:text-teal-600 transition-all duration-300">
                                {activeTab === 'events' ? 'View All Events' : 'Read All News'}
                            </button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default NewsAndEvents;