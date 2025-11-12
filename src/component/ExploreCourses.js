"use client";

import { useMemo } from "react";
import TitleInfo from "./TitleInfo";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion"; // ✅ Correct import
import { GraduationCap, ArrowRight, Sparkles, Award, TrendingUp, Users2 } from "lucide-react";


const programs = [
    {
        title: "MBA & MBA++ COURSE",
        school: "School Of Management - Pg",
        imageUrl: "https://www.mangalmay.org/assets/images/home/top-campus-noida.jpg",
        link: "#",
    },
    {
        title: "B.TECH & BCA COURSE",
        school: "School Of TECHNOLOGY",
        imageUrl: "https://www.mangalmay.org/assets/images/home/campus-delhincr.jpg",
        link: "#",
    },
    {
        title: "BBA PLATINA, BBA & B.COM",
        school: "School Of Management - Ug",
        imageUrl: "https://www.mangalmay.org/assets/images/home/top-campus-up.jpg",
        link: "#",
    },
    {
        title: "B.A B.ED",
        school: "Education Program",
        imageUrl: "https://www.mangalmay.org/assets/images/home/campus-noida.jpg",
        link: "#",
    },
];

const defaultStats = [
    { title: "15+", description: "Programs Offered", icon: GraduationCap },
    { title: "100%", description: "Placement Support", icon: TrendingUp },
    { title: "500+", description: "Expert Faculty", icon: Users2 },
    { title: "NAAC A", description: "Accredited", icon: Award },
];

export default function ExploreCourses({ data }) {
    const d = data?.pageData;

    const stats = [];
    for (let i = 1; i <= 10; i++) {
        const title = d?.[`CST-${i}`];
        const description = d?.[`CSD-${i}`];
        if (title && description) stats.push({ title, description });
    }

    const displayStats = stats.length > 0 ? stats : defaultStats;

    // ✅ Memoize random particle & sparkle positions to prevent flicker
    const particles = useMemo(
        () =>
            [...Array(25)].map(() => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 2,
            })),
        []
    );

    const sparkles = useMemo(
        () =>
            [...Array(10)].map((_, i) => ({
                left: `${15 + Math.random() * 70}%`,
                top: `${10 + Math.random() * 80}%`,
                delay: i * 0.4,
            })),
        []
    );

    return (
        <section className="bg-white relative overflow-hidden">
            {/* Smooth Background Animations */}
            <motion.div
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#911E75]/10 rounded-full blur-[150px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform, opacity" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#fecc00]/10 rounded-full blur-[150px]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform, opacity" }}
            />


            <section className="bg-gradient-to-br from-[#911E75] via-[#791b61] to-[#911E75] rounded-r-[60px] sm:rounded-r-[100px] py-12 sm:py-16 md:py-24 relative overflow-hidden shadow-2xl">
                {/* Radial Layers */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#fecc00]/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#fecc00]/10 via-transparent to-transparent"></div>

                <motion.div
                    className="absolute top-32 left-40 w-24 h-24 border-2 border-[#fecc00]/40 rounded-full"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                        className="absolute bottom-10 right-32 w-20 h-20 border-2 border-[#fecc00]/30 rotate-45"
                        animate={{ rotate: [45, 405] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 bg-[#fecc00]/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform, opacity" }}
                />

                <motion.div
                    className="absolute bottom-40 left-20 w-80 h-80 bg-[#fecc00]/15 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: "transform, opacity" }}
                />

                {/* Floating Particles (memoized) */}
                {particles.map((p, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-[#fecc00]/40 rounded-full"
                        style={{ left: p.left, top: p.top }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                    />
                ))}

                {/* Sparkles (memoized) */}
                {sparkles.map((s, i) => (
                    <motion.div
                        key={`sparkle-${i}`}
                        className="absolute"
                        style={{ left: s.left, top: s.top }}
                        animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: s.delay,
                            repeatDelay: 1,
                        }}
                    >
                        <Sparkles className="w-5 h-5 text-[#fecc00]" />
                    </motion.div>
                ))}

                {/* Grid Background */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(#fecc00 1px, transparent 1px),
              linear-gradient(90deg, #fecc00 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* CONTENT */}
                <div className="break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
                    <TitleInfo
                        first="Our Courses"
                        second={d?.Courses_Title || "Explore Our Premium Educational Programs"}
                        color="white"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-100 mx-auto text-center max-w-3xl"
                    >
                        {d?.Courses_Desc ||
                            "Choose from our wide range of industry-aligned programs designed to shape future leaders and innovators."}
                    </motion.p>

                    {/* Stats */}
                    <div className="my-8 sm:my-12 mx-auto max-w-6xl">
                        <dl className="grid grid-cols-2 gap-4 sm:gap-6 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {displayStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="mx-auto flex max-w-xs flex-col relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#fecc00]/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl hover:shadow-2xl overflow-hidden">
                                        {stat.icon && (
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#fecc00] to-[#ffd700] flex items-center justify-center shadow-lg"
                                            >
                                                <stat.icon className="w-6 h-6 text-[#911E75]" />
                                            </motion.div>
                                        )}
                                        <dd className="text-3xl sm:text-4xl md:text-5xl text-[#fecc00] drop-shadow-lg">
                                            {stat.title}
                                        </dd>
                                        <dt className="text-xs sm:text-sm mt-2 text-gray-100">
                                            {stat.description}
                                        </dt>
                                    </div>
                                </motion.div>
                            ))}
                        </dl>
                    </div>

                    {/* Course Cards */}
                    <div className="mt-10 max-w-6xl mx-auto max-[480px]:grid-cols-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-sm:px-4">
                        {programs.map((item, index) => (
                            <CardContainer key={index} className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-full h-auto rounded-2xl p-4 border shadow-xl">
                                    <CardItem translateZ="50" className="text-center font-novaBold text-neutral-600">
                                        {item.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-center uppercase text-xs font-novaSemi"
                                    >
                                        {item.school}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img
                                            src={item.imageUrl}
                                            height="1000"
                                            width="1000"
                                            className="h-96 sm:h-72 w-full object-cover object-top border rounded-xl group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-center items-center mt-6 relative z-10">
                                        <CardItem
                                            translateZ={20}
                                            as="a"
                                            href={item.link}
                                            className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-[#fecc00] to-[#ffd700] text-[#911E75] text-sm uppercase tracking-wider w-full text-center overflow-hidden group/button shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                View Details
                                                <motion.div
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <ArrowRight className="w-4 h-4" />
                                                </motion.div>
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-[#911E75] to-[#791b61]"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "0%" }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <span className="absolute inset-0 flex items-center justify-center gap-2 text-white opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 z-20">
                                                View Details
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        ))}
                    </div>
                </div>

                {/* Bottom Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fecc00] to-transparent origin-center"
                />
            </section>
        </section>
    );
}
