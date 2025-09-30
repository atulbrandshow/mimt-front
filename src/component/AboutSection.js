"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/moving-border'
import TitleInfo from './TitleInfo'
import { Play, X } from 'lucide-react';


const AboutSection = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const videoId = 'f856Nsg0suU'; // Extracted from the YouTube URL

    const handlePlayClick = () => {
        setIsLoading(true);
        setShowVideo(true);
        // In a real scenario, you might have a slight delay or wait for iframe to load
        // For this example, we'll hide loading immediately for simplicity.
        // A better approach would be to use react-youtube's onReady prop.
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulate loading time
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
        setIsLoading(false);
        // Optionally pause the video if it's still playing
    };

    return (
        <section className='bg-gradient-to-t from-yellow-100 via-transparent to-transparent'>
            <div className='max-w-[1400px] mx-auto px-4 py-10 sm:py-20'>
                <TitleInfo first="Top Ranked Institution" second="Mangalmay Group Of Institutions – One of India's Best Ranked Institutions" color='black' />

                {/* --- Updated Image Section --- */}
                <div
                    className='mt-10 md:mt-20 mx-auto relative group'
                    onMouseEnter={() => setShowPlayButton(true)}
                    onMouseLeave={() => setShowPlayButton(false)}
                >
                    {showVideo ? (
                        <div className='relative h-[300px] md:h-[400px] lg:h-[600px]'>
                            {isLoading && (
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20 text-white'>
                                    {/* Animated Loading Spinner */}
                                    <div className="loader"></div> {/* You'd style this with CSS */}
                                    Loading video...
                                </div>
                            )}
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className='w-full h-full object-cover'
                                title="Inside Mangalmay Group of Institute 🔥 | The Ultimate College Experience"
                            ></iframe>
                            <button
                                onClick={handleCloseVideo}
                                className='absolute top-4 right-5 bg-white text-blue-800 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold z-30'
                            // Add animation classes for 'x' button here
                            >
                                <X />
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className='h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden relative'>
                                <Image
                                    src="/image/mimt/hero-section/building2.jpeg"
                                    width={1080}
                                    height={1080}
                                    alt="Building"
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out'
                                />
                                {showPlayButton && (
                                    <button
                                        onClick={handlePlayClick}
                                        className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                                        <Play className='w-20 h-20 border border-gray-400 rounded-full p-4' strokeWidth="1" />
                                    </button>
                                )}
                            </div>

                            {/* Overlay with Text */}
                            <div className="-mt-8 relative flex items-end justify-center pb-6">
                                <div className="bg-blue-800 text-white px-8 py-3 text-center md:py-4 shadow-lg">
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-novaReg tracking-wider uppercase">Top Quality And Learning Experience</h3>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className='mt-10 max-w-7xl mx-auto sm:px-6'>
                    <h2 className='mb-5 text-3xl font-novaLight text-center'>About Us</h2>
                    <p className='sm:text-lg text-center font-novaReg'>Established in 2002, Mangalmay Group of Institutions is a NAAC "A" Grade accredited institute committed to innovation, excellence, and nurturing global leaders. Offering AICTE-approved and AKTU-affiliated programs in Management, Engineering, Biotechnology, Commerce, and Education, Mangalmay blends knowledge, research, and industry exposure to deliver holistic education. Ranked among the best MBA and B.Tech colleges in Delhi NCR, our mission is to empower students with creativity, talent, and values to make a positive impact on society.</p>
                </div>
                <div className='pt-20 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-4xl md:text-5xl font-novaLight'>2002</h2>
                        <span className='max-md:text-sm text-center font-novaReg'>Established</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-4xl md:text-5xl font-novaLight'>23+</h2>
                        <span className='max-md:text-sm text-center font-novaReg'>Years of Excellence</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-4xl md:text-5xl font-novaLight'>9000+</h2>
                        <span className='max-md:text-sm text-center font-novaReg'>Alumni Network</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='text-4xl md:text-5xl font-novaLight'>1100+</h2>
                        <span className='max-md:text-sm text-center font-novaReg'>Recruiting Partners</span>
                    </div>
                </div>
                <div className='mt-20 flex justify-center'>
                    <Button
                        borderRadius="1rem"
                        className="bg-yellow-400 text-black font-novaBold border-neutral-200"
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection