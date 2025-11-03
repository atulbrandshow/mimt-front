import React from 'react'
import Breadcrumb from './Breadcrumb'

const Header = ({ BreadCrumb }) => {
    return (
        <div
            className="relative w-full h-[50vh] bg-cover bg-center"
            style={{
                backgroundImage: "url('/image/about/mangalmay_institute.webp')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1600px] mx-auto px-3 sm:px-6 h-full w-full flex flex-col justify-center gap-5">
                    <h1 className="text-5xl font-novaReg text-secondary">Overview</h1>
                    <div>
                        <Breadcrumb data={BreadCrumb} color="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header