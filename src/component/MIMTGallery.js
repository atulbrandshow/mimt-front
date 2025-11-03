import { IMAGE_PATH } from '@/configs/config'
import React from 'react'

function MIMTGallery({ data }) {
    return (
        <>
            {data?.map((item, index) => (
                <div
                    key={index}
                    className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-grab"
                >
                    {/* Image */}
                    <img
                        src={IMAGE_PATH + item}
                        alt={item}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide text-center px-4">
                            Mangalmay Group Of Institutions
                        </h3>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MIMTGallery