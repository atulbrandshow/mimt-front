import React from "react"
import clsx from "clsx"

const TitleInfo = ({ first, second, color = "blue" }) => {
    const colorClasses = {
        cyan: "cyan-600",
        blue: "blue-600",
        green: "green-600",
        red: "red-600",
        purple: "purple-600",
        pink: "pink-600",
        orange: "orange-600",
        yellow: "yellow-600",
        indigo: "indigo-600",
        gray: "gray-600",
        amber: "amber-600",
        white: "gray-100", // fallback for white → gray tone
        teal: "teal-600",
        black: "black"
    }

    return (
        <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in-up">
            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-2">
                <div className={clsx("w-8 sm:w-16 h-[2px] rounded-full", `bg-${colorClasses[color]}`)}></div>
                <span className={clsx("text-xs sm:text-sm  font-novaSemi tracking-wider uppercase", `text-${colorClasses[color]}`)}>{first}</span>
                <div className={clsx("w-8 sm:w-16 h-[2px] rounded-full", `bg-${colorClasses[color]}`)}></div>
            </div>
            <h1 className={clsx("font-novaLight text-2xl sm:text-3xl md:text-4xl", `text-${colorClasses[color]}`)}>
                {second}
            </h1>
        </div>
    )
}

export default TitleInfo
