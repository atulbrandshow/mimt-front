"use client";;
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { useState, useRef, useId, useEffect } from "react";

const Slide = ({
    slide,
    index,
    current,
    handleSlideClick
}) => {
    const slideRef = useRef(null);

    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef();

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;

            const x = xRef.current;
            const y = yRef.current;

            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event) => {
        event.currentTarget.style.opacity = "1";
    };

    const { src, title, link, date, location, desc } = slide;

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out max-[500px]:w-[80vmin] max-[500px]:h-[80vmin] w-[60vmin] md:w-[50vmin] h-[60vmin] md:h-[50vmin] mx-[4vmin] z-10 "
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? "scale(0.98) rotateX(20deg)"
                            : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
                    style={{
                        transform:
                            current === index
                                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                                : "none",
                    }}>
                    <img
                        className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                        style={{
                            opacity: current === index ? 1 : 0.5,
                        }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="eager"
                        decoding="sync" />
                    {current === index && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-1000" />
                    )}
                </div>

                <article
                    className={`relative h-full flex flex-col justify-end p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    <div className="absolute top-3 left-3 z-10 bg-white rounded-lg flex flex-col leading-none text-black p-2">
                        <span className="font-novaBold">12</span>
                        <span className="text-[10px] font-novaSemi">DEC</span>
                    </div>
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 backdrop-blur-sm bg-white text-black font-novaSemi text-[10px] sm:text-xs uppercase pr-2 pl-1 sm:px-2 py-0.5 rounded-full border border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{location}</span>
                    </div>

                    <div className="relative z-10 text-left">
                        <h2 className="sm:text-lg md:text-xl lg:text-2xl font-novaSemi md:font-novaBold text-white drop-shadow-lg leading-tight">
                            {title}
                        </h2>
                        <p className="mt-2 text-gray-200 text-sm lg:text-base leading-snug font-novaReg line-clamp-2 max-w-3xl">
                            {desc}
                        </p>
                        <div className="mt-4">
                            <Link href={link} className="px-2 md:px-4 py-1 md:py-2 rounded-md bg-yellow-400 text-black text-[10px] sm:text-xs font-novaBold uppercase tracking-wide">View Details</Link>
                        </div>
                    </div>
                </article>
            </li>
        </div>
    );
};

const CarouselControl = ({
    type,
    title,
    handleClick
}) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-100 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
                }`}
            title={title}
            onClick={handleClick}>
            <IconArrowNarrowRight className="text-neutral-800" />
        </button>
    );
};

export function Carousel({
    slides
}) {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();

    return (
        <div
            className="relative max-[500px]:w-[80vmin] max-[500px]:h-[80vmin] w-[60vmin] h-[60vmin] md:w-[50vmin] md:h-[50vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}>
            <ul
                className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}>
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick} />
                ))}
            </ul>
            <div className="absolute flex justify-center w-full top-[calc(100%+2rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick} />

                <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
            </div>
        </div>
    );
}
