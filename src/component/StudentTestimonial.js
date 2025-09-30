"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import TitleInfo from "./TitleInfo";

export function StudentTestimonial() {
    return (
        <div
            className="h-full py-16 rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <TitleInfo first="Student Testimonials" second="What Our Student Says" color="white" />
            <p className="mb-10 md:text-lg font-novaReg text-slate-400 text-center max-w-4xl mx-auto">
                Hear from our students and alumni as they share their experiences, success stories, and the impact our programs have had on their careers and personal growth.
            </p>
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Mr. Jenu Jayan",
        title: "Spicejet India Ltd",
        img: "https://www.mangalmay.org/assets/images/student/jenu.jpg"
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "Bharti",
        title: "Next Step Services Pvt Ltd",
        img: "https://www.mangalmay.org/assets/images/inner-images/alumni-speak/bharti.jpg"
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Divya Sharma",
        title: "Religare Securities Ltd",
        img: "https://www.mangalmay.org/assets/images/inner-images/alumni-speak/divya-mishra.jpg"
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Ritik Sharma",
        title: "Asahi Glass India Pvt Ltd.",
        img: "https://www.mangalmay.org/assets/images/inner-images/alumni-speak/hritik-sharma.jpg"
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Rishabh Shrivastava",
        title: "Moody's Corporation",
        img: "https://www.mangalmay.org/assets/images/inner-images/alumni-speak/rishabh-srivastava.jpg"
    },
];
