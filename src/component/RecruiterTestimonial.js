"use client";

import React from "react";
import { WhiteInfiniteMovingCards } from "./ui/white-moving-cards";
import TitleInfo from "./TitleInfo";

export function RecruiterTestimonial() {
    return (
        <div
            className="h-full py-16 rounded-md flex flex-col antialiased bg-white bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <TitleInfo first="Recruiter Testimonials" second="What Our Recruiters Says" color="black" />
            <p className="mb-10 md:text-lg font-novaReg text-slate-600 text-center max-w-4xl mx-auto">
                Hear from our students and alumni as they share their experiences, success stories, and the impact our programs have had on their careers and personal growth.
            </p>
            <WhiteInfiniteMovingCards items={testimonials} direction="right" speed="slow" color="white" />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Mr. Anand R",
        title: "Senior VP HR - HCL Tech",
        img: "https://www.mangalmay.org/assets/images/corporate/hcl.jpg"
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "Mr. Pankaj Munjal",
        title: "MD Hero Motors",
        img: "https://www.mangalmay.org/assets/images/corporate/hero.jpg"
    },
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Mr. Anand R",
        title: "Senior VP HR - HCL Tech",
        img: "https://www.mangalmay.org/assets/images/corporate/hcl.jpg"
    },
];
