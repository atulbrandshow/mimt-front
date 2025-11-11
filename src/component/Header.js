import React from 'react'
import Breadcrumb from './Breadcrumb'

const Header = ({ BreadCrumb, data }) => {
    return (
        <div
            className="mt-10 relative ml-10 h-[50vh] rounded-l-[30px] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/image/about/mangalmay_institute.webp')",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1500px] mx-auto px-3 sm:px-10 h-full w-full flex flex-col justify-center gap-5">
                    <h1 className="text-5xl font-novaReg text-secondary capitalize">{data?.name || "Overview"}</h1>
                    <div>
                        {BreadCrumb && <Breadcrumb data={BreadCrumb} color="white" />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header