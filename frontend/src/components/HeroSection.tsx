import { Boxes } from "./Boxes";
import { Card } from "./Card";
import TypingAnimation from "./Animation/TypingAnimation";
import { Award, BookOpen, GraduationCap, TrendingUp, Users } from 'lucide-react';
import "./global.css";

//padding constants 
const SectionPaddingY = "py-16 md:py-20"; // between sections
const SectionPaddingZ = "px-4 sm:px-6 lg:px-8"; // horizontal padding
const GapSize = "gap-6 md:gap-8";

// Animation Variants
import { motion  } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

export function HeroSection() {
    
    return (
        <div className="w-full">

            {/* hero section */}
            <motion.div
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            className={`dark:bg-gray-900 ${SectionPaddingY} w-full overflow-hiddendark:text-white `}
            >
                <motion.div variants={item} className={` mx-auto ${SectionPaddingY} bg-[var(--bg-gray)] dark:bg-[var(--primary-800)] rounded-e-[100px]  max-w-7xl`}>

                    <motion.div variants={item} className={`flex ${SectionPaddingZ} flex-col lg:flex-row items-center justify-between gap-10`}>
                        {/* content || text */}
                        <motion.div variants={item} className="w-fit lg:w-1/2 text-start lg:text-left space-y-6">
                            <div className="w-fit bg-[var(--primary-color)] p-2 rounded-lg mb-0  lg:mx-0">
                                <GraduationCap className="text-white w-6 h-6" />
                            </div>
                            <motion.div variants={item}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--headLine-text)] leading-tight flex flex-col items-start">
                                    SETUP{" "}
                                    <span className="text-[var(--primary-color)] relative inline-block">
                                        <TypingAnimation />
                                    </span>
                                </h1>
                            </motion.div>
                            <motion.div variants={item}>
                                <p className="text-lg md:text-xl text-[var(--text-sub-color)] max-w-2xl mx-auto lg:mx-0">
                                    The Inspiring, Interactive Learning Environment Where Every Student Thrives
                                </p>
                            </motion.div>

                            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <button className="px-8 py-3 rounded-xl bg-[var(--primary-color)] text-white font-medium transition hover:opacity-90 cursor-pointer shadow-lg">
                                    Get Started
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* image */}
                        <motion.div variants={item} className="flex justify-center relative">
                            <img
                                src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393667.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Student gesturing with laptop"
                                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Stats Section with Premium Background */}
            <motion.div
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            className={`w-full ${SectionPaddingY} bg-[#1e3a5f] relative overflow-hidden`}>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#162d4a] to-[#0f1d2f]"></div>

                {/* Decorative blurred circles */}
                <motion.div variants={item} className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-[#d4a853] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f97068] rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-50"></div>
                </motion.div>

                <motion.div variants={item} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    {/* Section Header */}
                    <motion.div variants={item} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose <span className="text-[#d4a853]">setup Academy</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Join thousands of students who have transformed their careers with our premium courses
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div variants={item} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#d4a853]/20 transition-colors">
                                <Users className="w-8 h-8 text-[#d4a853]" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">10K+</div>
                            <div className="text-gray-400">Active Students</div>
                        </motion.div>

                        <motion.div variants={item} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#d4a853]/20 transition-colors">
                                <BookOpen className="w-8 h-8 text-[#d4a853]" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">200+</div>
                            <div className="text-gray-400">Premium Courses</div>
                        </motion.div>

                        <motion.div variants={item} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#d4a853]/20 transition-colors">
                                <Award className="w-8 h-8 text-[#d4a853]" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">50+</div>
                            <div className="text-gray-400">Expert Instructors</div>
                        </motion.div>

                        <motion.div variants={item} className="text-center group">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-[#d4a853]/20 transition-colors">
                                <TrendingUp className="w-8 h-8 text-[#d4a853]" />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">95%</div>
                            <div className="text-gray-400">Success Rate</div>
                        </motion.div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={item} className="text-center mt-16">
                        <p className="text-gray-300 mb-6">Ready to start your journey?</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3.5 rounded-xl bg-[#d4a853] text-white font-semibold hover:bg-[#b8923f] transition shadow-lg cursor-pointer">
                                Start Learning Today
                            </button>
                            <button className="px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition cursor-pointer">
                                View All Courses
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div
            className={`${SectionPaddingY} dark:bg-gray-900  dark:text-white`}
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div variants={item} className={`${SectionPaddingZ} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${GapSize}`}>
                    <Boxes
                        title="Notifications"
                        paragraph="Send instant notifications to students and parents via email, WhatsApp, or SMS."
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                            </svg>
                        }
                    />

                    <Boxes
                        title="24/7 Technical Support"
                        paragraph="Get reliable technical support anytime to ensure a smooth learning experience"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                            </svg>
                        }
                    />

                    <Boxes
                        title="Course Management"
                        paragraph="Manage courses with well-structured lessons, modules, and interactive learning materials"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        }
                    />
                </motion.div>
            </motion.div>

            {/* Featured Courses */}
            <motion.div
            className={`w-full dark:bg-gray-900 border-black  ${SectionPaddingY}`}
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div variants={item} className={`${SectionPaddingZ}`}>

                    <motion.div variants={item} className={`container mx-auto w-full`}>
                        <div className="text-3xl font-bold mb-10 text-center md:text-left text-[var(--headLine-text)]">
                            Popular Courses
                        </div>
                        <motion.div variants={item} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${GapSize} w-full`}>
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                        </motion.div>
                        <div className="flex justify-center mt-12">
                            <button className="px-8 py-3 rounded-xl bg-[var(--primary-color)] text-white font-medium transition hover:opacity-90 cursor-pointer shadow-lg">
                                View All Courses
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Join Us Section */}
            <motion.div
            className={`w-full dark:bg-gray-900  dark:text-white`}
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            >
               
                <motion.div variants={item} className={`bg-[var(--bg-gray)] rounded-t-[100px]  dark:bg-[var(--primary-800)] rounded-t-[100px] ${SectionPaddingY}`}>
                    <div className={`w-full ${SectionPaddingZ} overflow-hidden rounded-xl flex flex-col-reverse lg:flex-row`}>
                        {/* image */}
                        <motion.div variants={item} className="w-full lg:w-[35%] h-64 lg:h-auto">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBJeWsHs0s2zqm5Zr-jA6Q3Fqc9FWzyq-Aw&s"
                                alt=""
                                className="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                            />
                        </motion.div>

                        {/* content */}
                        <motion.div variants={item} className="flex flex-col justify-center gap-3 p-8 w-full lg:w-[65%]">
                            <motion.div variants={item}>
                                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-[var(--headLine-text)]">
                                    We Teach, Inspire, and Build Success Together
                                </h2>
                            </motion.div>

                            <motion.div variants={item}>

                                <p className="text-[15px] lg:text-base text-[var(--text-sub-color)] leading-relaxed max-w-[520px]">
                                    We bring high-quality education and meaningful interaction together,
                                    led by passionate teachers and thoughtfully crafted content
                                    to help learners reach their full potential.
                                </p>
                            </motion.div>

                            <motion.div variants={item} className="pt-2">
                                <button className="px-6 py-2.5 rounded-lg bg-[var(--primary-color)] text-white font-medium hover:opacity-90 transition">
                                    Join Us
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    )
}
