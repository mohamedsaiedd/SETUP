import { Boxes } from "./Boxes";
import { Card } from "./Card";
import TypingAnimation from "./Animation/TypingAnimation";
import { Award, BookOpen, GraduationCap, TrendingUp, Users } from 'lucide-react';
import "./global.css";

//padding constants 
const SectionPaddingY = "py-8 md:py-14"; // between sections
const SectionPaddingZ = "px-4 sm:px-6 lg:px-8"; // horizontal padding
const GapSize = "gap-6 md:gap-8";

// Animation Variants
import { motion } from "framer-motion";
import heroCharacter from "../assets/hero-character.png";
import heroLamp from "../assets/hero-lamp.png";
import heroCalculator from "../assets/hero-calculator.png";
import heroPencil from "../assets/hero-pencil.png";
import heroPalette from "../assets/hero-palette.png";
import aboutIllustration from "../assets/about-illustration.png";
// import { useAuth } from "../constext/AuthContext";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;


export function HeroSection() {

    // const { user } = useAuth()
     
    return (
        <div className="w-full">

            {/* hero section */}
            <motion.div
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            id="home"
            className={` dark:bg-gray-900 ${SectionPaddingY} w-full overflow-hidden dark:text-white lg:min-h-screen lg:mt-0 flex items-center mt-[90px]`}
            >
                <motion.div variants={item} className={`mx-auto ${SectionPaddingY} w-full`}>

                    <motion.div variants={item} className={`container mx-auto flex ${SectionPaddingZ} flex-col-reverse lg:flex-row items-center justify-between gap-10`}>
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
                                <button className="px-8 py-3 rounded-xl border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-medium transition hover:bg-[var(--primary-color)] hover:text-white cursor-pointer">
                                    View Courses
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* image */}
                        <motion.div variants={item} className="flex justify-center relative w-full lg:w-1/2 min-h-[250px] lg:min-h-[500px]">
                            
                            {/* Solar System Orbits */}
                            <div className="absolute z-0" style={{ left: '20%', top: '10%', width: '60%', height: '100%', pointerEvents: 'none' }}>
                                {/* Orbit 1 */}
                                <motion.div 
                                    className="absolute rounded-full border border-dashed border-[var(--primary-color)]/40"
                                    style={{ 
                                        width: '120%', 
                                        height: '120%', 
                                        left: '-10%', 
                                        top: '-10%',
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Orbit 2 */}
                                <motion.div 
                                    className="absolute rounded-full border border-dashed border-[var(--primary-color)]/40"
                                    style={{ 
                                        width: '160%', 
                                        height: '160%', 
                                        left: '-30%', 
                                        top: '-30%',
                                    }}
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            {/* Main Character */}
                            <motion.img
                                src={heroCharacter}
                                alt="Student jumping"
                                className="absolute z-20 w-[60%] max-w-sm object-contain"
                                animate={{ 
                                    y: [0, -20, 0],
                                }}
                                transition={{ 
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    left: '20%',
                                    top: '10%'
                                }}
                            />
                            
                            {/* Lamp - Hidden on mobile */}
                            <motion.img
                                src={heroLamp}
                                alt="Desk lamp"
                                className="absolute z-10 w-[30%] max-w-xs object-contain hidden sm:block"
                                animate={{ 
                                    y: [0, -15, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ 
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                style={{
                                    right: '10%',
                                    bottom: '20%'
                                }}
                            />

                            {/* Calculator - Visible on mobile */}
                            <motion.img
                                src={heroCalculator}
                                alt="Calculator"
                                className="absolute z-30 w-[15%] sm:w-[15%] object-contain scale-75 sm:scale-100"
                                animate={{ 
                                    y: [0, -10, 0],
                                    rotate: [0, -10, 0]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                style={{
                                    left: '10%',
                                    bottom: '30%'
                                }}
                            />

                            {/* Pencil - Visible on mobile */}
                            <motion.img
                                src={heroPencil}
                                alt="Pencil"
                                className="absolute z-30 w-[15%] sm:w-[12%] object-contain"
                                animate={{ 
                                    y: [0, -12, 0],
                                    x: [0, 5, 0]
                                }}
                                transition={{ 
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }}
                                style={{
                                    right: '25%',
                                    top: '5%'
                                }}
                            />

                            {/* Palette - Hidden on mobile */}
                            <motion.img
                                src={heroPalette}
                                alt="Art palette"
                                className="absolute z-10 w-[20%] object-contain hidden sm:block"
                                animate={{ 
                                    y: [0, -18, 0],
                                    rotate: [0, 15, 0]
                                }}
                                transition={{ 
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                                style={{
                                    left: '5%',
                                    top: '40%'
                                }}
                            />

                            {/* Floating UI Elements */}
                            
                            {/* Grade Card A+ - Visible but smaller on mobile */}
                            <motion.div
                                className="absolute z-20 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-xl border border-white/50 flex items-center gap-2 sm:gap-3 scale-75 sm:scale-100 origin-top-right"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                style={{ top: '15%', right: '10%' }}
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg sm:text-xl">A+</div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Grade</span>
                                    <span className="text-xs sm:text-sm font-bold text-gray-800">Excellent</span>
                                </div>
                            </motion.div>

                            {/* Code Icon Bubble - Visible on mobile */}
                            <motion.div
                                className="absolute z-20 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/50 scale-75 sm:scale-100"
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                style={{ bottom: '20%', left: '15%' }}
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                </div>
                            </motion.div>

                            {/* Magnifying Glass - Visible on mobile */}
                            <motion.div
                                className="absolute z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-white/50 scale-75 sm:scale-100"
                                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                style={{ top: '50%', right: '0%' }}
                            >
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                            </motion.div>

                            {/* Star - Visible on mobile */}
                            <motion.div
                                className="absolute z-10 scale-75 sm:scale-100"
                                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                style={{ top: '5%', left: '10%' }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#FBBF24" stroke="none">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </motion.div>

                            {/* Abstract Shapes - Hidden on mobile */}
                            
                            {/* Circle */}
                            <motion.div
                                className="absolute z-0 w-8 h-8 rounded-full border-4 border-yellow-400/50 hidden sm:block"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{ top: '15%', left: '40%' }}
                            />

                            {/* Triangle */}
                            <motion.div
                                className="absolute z-0 hidden sm:block"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{ bottom: '40%', right: '5%' }}
                            >
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M15 0L27.9904 22.5H2.00962L15 0Z" fill="#F87171" fillOpacity="0.5" />
                                </svg>
                            </motion.div>

                            {/* Wavy Line */}
                            <motion.div
                                className="absolute z-0 hidden sm:block"
                                animate={{ x: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                style={{ bottom: '10%', left: '40%' }}
                            >
                                <svg width="60" height="20" viewBox="0 0 60 20" fill="none" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round">
                                    <path d="M2 10C10 2 20 18 30 10C40 2 50 18 58 10" />
                                </svg>
                            </motion.div>

                            {/* Atom/Orbital */}
                            <motion.div
                                className="absolute z-0 hidden sm:block"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{ top: '25%', right: '35%' }}
                            >
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#A78BFA" strokeWidth="1.5">
                                    <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(0 50 50)" />
                                    <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(60 50 50)" />
                                    <ellipse cx="50" cy="50" rx="45" ry="15" transform="rotate(120 50 50)" />
                                    <circle cx="50" cy="50" r="5" fill="#A78BFA" />
                                </svg>
                            </motion.div>

                            {/* Dots */}
                            <motion.div
                                className="absolute z-0 flex gap-2 hidden sm:block"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{ top: '50%', right: '30%' }}
                            >
                                <div className="w-2 h-2 rounded-full bg-purple-400/60"></div>
                                <div className="w-2 h-2 rounded-full bg-purple-400/60"></div>
                                <div className="w-2 h-2 rounded-full bg-purple-400/60"></div>
                            </motion.div>
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
            className={`w-full ${SectionPaddingY}  bg-[var(--primary-color)] relative overflow-hidden dark:bg-[var(--bg-primary)]`}>

                <motion.div variants={item} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    {/* Section Header */}
                    <motion.div variants={item} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Choose <span className="text-[#d4a853]">setup Academy</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                        <p className="text-gray-400 mb-6">Ready to start your journey?</p>
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
            className={`${SectionPaddingY} w-full   dark:bg-gray-900  dark:text-white`}
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div variants={item} className={`container mx-auto ${SectionPaddingZ} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${GapSize}`}>
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

            {/* about */}
            <motion.div
            className={`w-full  dark:bg-gray-900  dark:text-white`}
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div variants={item} id="about" className={`container mx-auto ${SectionPaddingY}`}>
                    <div className={`w-full ${SectionPaddingZ}`}>
                        <div className={`overflow-hidden rounded-xl flex flex-col-reverse lg:flex-row items-center`}>

                            {/* image - replaced with uploaded asset */}
                            <motion.div variants={item} className="w-full lg:w-[40%] flex justify-center">
                                <img
                                    src={aboutIllustration}
                                    alt="About Setup Academy"
                                    className="w-full max-w-md object-contain"
                                />
                            </motion.div>

                            {/* content */}
                            <motion.div variants={item} className="flex flex-col justify-center gap-3 w-full lg:w-[60%]">
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
                    </div>
                </motion.div>
            </motion.div>

            {/* Featured Courses */}
            <motion.div
            className={`w-full ${SectionPaddingY} ${SectionPaddingZ} relative overflow-hidden bg-[var(--primary-color)] dark:bg-gray-900  `}
            variants={container}   
            initial="hidden"       
            whileInView="show"      
            viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div variants={item} className={` `}>
                    <motion.div variants={item} className={`container mx-auto w-full relative overflow-hidden rounded-3xl`}>
                        
                        <div className="relative z-10">
                            <div className="text-3xl font-bold mb-10 text-center md:text-left text-white">
                                Popular Courses
                            </div>
                            <motion.div variants={item} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${GapSize} w-full`}>
                                <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                                <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                                <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                                <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                            </motion.div>
                            <div className="flex justify-center mt-12">
                                <button className="px-8 py-3 rounded-xl bg-[#d4a853] text-white font-semibold hover:bg-[#b8923f] transition shadow-lg cursor-pointer">
                                    View All Courses
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>


        </div>
    )
}
