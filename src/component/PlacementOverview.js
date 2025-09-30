import React from 'react'
import TitleInfo from './TitleInfo'
import { LogoSlider } from '@/Components'
import PlacementSlider from './PlacementSlider';

const statsData = [
    {
        lpa: "20",
        description: "Package Offered by 30+ Companies",
    },
    {
        lpa: "15",
        description: "Package Offered by 50+ Companies",
    },
    {
        lpa: "10",
        description: "Package Offered by 100+ Companies",
    },
    {
        lpa: "7",
        description: "Package Offered by 300+ Companies",
    },
    {
        lpa: "5",
        description: "Package Offered by 500+ Companies",
    },
];

const PlacementOverview = () => {
    return (
        <section className='pt-16 overflow-hidden'>
            <div className='w-full text-center'>
                <TitleInfo first="Placement" second="Placement Overview" color='gray' />
                <p className='text-gray-500 font-novaReg'>Top Global Brands Trust Our Talent</p>
            </div>
            <div className='mt-12'>
                <div className='relative z-10 mb-[-280px] sm:mb-[-250px]'>
                    <PlacementSlider />
                </div>
                <div className='relative z-0'>
                    <div className='bg-yellow-400 pt-[250px] sm:pt-[280px] pb-6 sm:pb-20'>
                        <div className='max-w-[1600px] mx-auto sm:px-4'>
                            <LogoSlider />
                            <div className='max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h2 className='text-4xl md:text-5xl font-novaLight'>9000+</h2>
                                    <span className='font-novaReg text-gray-600 leading-none max-md:text-sm text-center w-20'>Placement Offers</span>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <h2 className='text-4xl md:text-5xl font-novaLight'>1100+</h2>
                                    <span className='font-novaReg text-gray-600 leading-none max-md:text-sm text-center w-32'>Company Visited for Recruitment</span>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className="flex items-baseline">
                                        <span className="text-4xl md:text-5xl font-novaLight">
                                            54.75
                                        </span>
                                        <span className="text-2xl sm:text-2xl font-novaReg ml-1">
                                            LPA
                                        </span>
                                    </div>
                                    <span className='font-novaReg text-gray-600 leading-none max-md:text-sm text-center w-32'>Highest National Package Offered</span>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className="flex items-baseline">
                                        <span className="text-4xl md:text-5xl font-novaLight">
                                            1.7
                                        </span>
                                        <span className="text-2xl sm:text-2xl font-novaReg ml-1">
                                            CR
                                        </span>
                                    </div>
                                    <span className='font-novaReg text-gray-600 leading-none max-md:text-sm text-center w-40'>Highest International Package Offered</span>
                                </div>
                            </div>
                            <div className="md:mt-10 max-w-[1400px] mx-auto px-4">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:divide-x divide-gray-600 lg:grid-cols-5 lg:gap-y-0 lg:divide-y-0 lg:divide-x">
                                    {statsData.map((stat, index) => (
                                        <div key={index} className="flex flex-col items-center justify-start text-center px-4  lg:pt-0">
                                            <div className="flex items-baseline">
                                                <span className="text-3xl sm:text-4xl md:text-5xl font-novaLight text-gray-900 tracking-tighter">
                                                    {stat.lpa}
                                                </span>
                                                <span className="text-2xl sm:text-2xl font-novaReg ml-1">
                                                    LPA
                                                </span>
                                            </div>
                                            <p className="mt-2 text-gray-800 font-novaReg leading-tight max-w-[15ch]">
                                                {stat.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlacementOverview