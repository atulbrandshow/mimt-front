"use client";

import React, { useState, useRef } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "motion/react";
import { useRouter } from "next/router";

export const AnimatedTooltip = ({
    items
}) => {
    const router = useRouter()
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const animationFrameRef = useRef(null);

    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

    const handleMouseMove = (event) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
            const halfWidth = event.target.offsetWidth / 2;
            x.set(event.nativeEvent.offsetX - halfWidth);
        });
    };

    return (
        <>
            {items.map((item, idx) => (
                <div
                    className="group relative mb-2  bg-white rounded-full cursor-pointer"
                    key={item.name}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                onClick={() => router.push(item?.link)}
                                className="absolute cursor-pointer -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-primary/50  border-[1px] border-white px-4 py-2 text-xs shadow-xl">
                                <div
                                    className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                                <div
                                    className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                                <div className="relative z-30 text-base font-bold text-white">
                                    {item.name}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <img
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.image}
                        alt={item.name}
                        className="relative  !m-0 h-9 w-9 rounded-full border-2 border-white object-contain object-top p-1 transition duration-500 group-hover:z-30 group-hover:scale-105" />
                </div>
            ))}
        </>
    );
};
