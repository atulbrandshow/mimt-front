"use client";

import TitleInfo from "./TitleInfo";
import { Carousel } from "./ui/carousel";

export function EventSection() {
    const slideData = [
        {
            title: "Ankur Warikoo at Mangalmay",
            date: "21 August 2024",
            location: "Greater Noida",
            desc: "We’re excited to share that on August 21st, Mangalmay Group of Institutions hosted a phenomenal session for our new MBA++ and BTech students, featuring the esteemed speaker Mr. Ankur Warikoo!",
            link: "#",
            src: "https://www.mangalmay.org/upcoming-events/1734593991-455862382_826500526329478_6459841987519546538_n.jpg",
        },
        {
            title: "Fit India Week",
            date: "13 December 2024",
            location: "Greater Noida",
            desc: "The Fitness Club at Mangalmay Institute of Management Technology celebrated Fit India Week from 8th to 13th December 2024.",
            link: "#",
            src: "https://www.mangalmay.org/upcoming-events/1734518760-WhatsApp%20Image%202024-12-12%20at%206.00.15%20PM%20(1).jpeg",
        },
        {
            title: "Varun Dhawan in Mangalmay Group of Institutions",
            date: "14 December 2024",
            location: "Greater Noida",
            desc: "Bollywood superstar Varun Dhawan, the lead actor of the upcoming film “BABY JOHN”, graced our campus with his presence, bringing an unforgettable wave of energy and charm!",
            link: "#",
            src: "https://www.mangalmay.org/upcoming-events/1734516940-470169180_909174131395450_5024780158950900718_n.jpg",
        },
        {
            title: "Alumni Meet 2024",
            date: "23 November 2024",
            location: "Greater Noida",
            desc: "The Alumni Meet 2024, held on 23rd November 2024, was a vibrant celebration of nostalgia and togetherness.",
            link: "#",
            src: "https://www.mangalmay.org/upcoming-events/1732602705-WhatsApp%20Image%202024-11-23%20at%207.48.06%20PM.jpeg",
        },
    ];
    return (
        <div className="relative overflow-hidden bg-black w-full h-full pt-16 pb-32">
            <TitleInfo first="Events" second="Explore Our Events" color="white" />
            <p className="mb-10 md:text-lg font-novaReg text-slate-400 text-center max-w-4xl mx-auto">
                Our events provide students with opportunities to learn beyond the classroom, connect with industry experts, showcase their talents, and create memories that last a lifetime.
            </p>
            <Carousel slides={slideData} />
        </div>
    );
}
