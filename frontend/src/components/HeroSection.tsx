import { Boxes } from "./Boxes";
import { Card } from "./Card";
import  TypingAnimation  from "./Animation/TypingAnimation"
import { GraduationCap } from 'lucide-react';
import "./global.css"

//padding constants 
const SectionPaddingY = "py-16 md:py-20"; // between sections
const SectionPaddingZ = "px-4 sm:px-6 lg:px-8"; // between sections

// const SectionMarginY = "my-16 md:my-24"; // مسافة بين الأقسام
const GapSize = "gap-6 md:gap-8"; // 

export function HeroSection() {
    return (
        <div className="w-full">

                {/* hero section */}
                <section className={`bg-[var(--bg-gray)] rounded-e-[100px] ${SectionPaddingY} w-full overflow-hidden`}>
                    <div className={`container mx-auto ${SectionPaddingZ} max-w-7xl`}>
                        
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                            {/* content || text */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                                <div className=" w-fit bg-[var(--primary-color)] p-2 rounded-lg mb-0">
                                    <GraduationCap className="text-white w-6 h-6" />
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold
                                 text[var(--headLine-text)] leading-tight">
                                STEPUP {" "}
                                <span className="text-[var(--primary-color)] relative inline-block">
                                    <TypingAnimation />
                                    {/* ACADEMY */}
                                </span>
                                </h1>
                                
                                <p className="text-lg md:text-xl text-[var(--text-sub-color)] max-w-2xl mx-auto lg:mx-0">
                                    The Inspiring, Interactive Learning Environment Where Every Student Thrives
                                </p>
                            </div>

                            {/* image */}
                            <div className="w-full lg:w-1/2 flex justify-center relative">
                                
                                {/* blob under the picture */}

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                                <img 
                                src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393667.jpg?semt=ais_hybrid&w=740&q=80" 
                                alt="Student gesturing with laptop" 
                                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-500 "
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* features */}
                <div className={`${SectionPaddingY}`}>
                    <div className={`${SectionPaddingZ} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${GapSize}`}> 

                        <Boxes title="Notifications for Students and Parents" paragraph="Send instant notifications to students and parents via email, WhatsApp, or SMS." 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        } />

                        <Boxes title="24/7 Technical Support" 
                        paragraph="Get reliable technical support anytime to ensure a smooth learning    experience"
                        icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg>}/>

                        <Boxes title="Course Management"
                        paragraph="Manage courses with well-structured lessons, modules, and interactive learning materials"
                        icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>}/>

                    </div>
                </div>

                {/* (Featured Courses) */}
                <div className={`w-full bg-[var(--bg-gray)] ${SectionPaddingY}`}>
                    <div className={`container mx-auto ${SectionPaddingZ}`}>
                        <div className="text-3xl font-bold mb-10 text-center md:text-left
                         text[var(--headLine-text)]">Popular Courses</div>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${GapSize} w-full`}> 
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK1kQ4r3NlYn8EbW6pxg5ouQTTUWJAdABXQ&s" title="My Card" description="This is a sample description." />
                        </div>
                        <div className="flex justify-center mt-12">
                            <button className="
                            px-8 py-3 
                            rounded-xl 
                            bg-[var(--primary-color)] 
                            text-white 
                            font-medium 
                            transition 
                            hover:bg-blue-500
                            cursor-pointer">
                                View All Courses
                            </button>
                        </div>

                    </div>
                </div>

                {/* join us section */}
                <div className={`${SectionPaddingY} w-full`}>
                    <div className={`${SectionPaddingZ}`}>
                        <div className="w-full overflow-hidden rounded-xl flex flex-col-reverse lg:flex-row">

                            {/* image */}
                            <div className="w-full lg:w-[35%] h-64 lg:h-auto">
                                <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBJeWsHs0s2zqm5Zr-jA6Q3Fqc9FWzyq-Aw&s"
                                alt=""
                                className="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                                />
                            </div>

                            {/* content */}
                            <div className="flex flex-col justify-center gap-3 p-8 w-full lg:w-[65%]">
                                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
                                We Teach, Inspire, and Build Success Together
                                </h2>

                                <p className="text-[15px] lg:text-base text-[var(--text-sub-color)] leading-relaxed max-w-[520px]">
                                We bring high-quality education and meaningful interaction together,
                                led by passionate teachers and thoughtfully crafted content
                                to help learners reach their full potential.
                                </p>

                                <div className="pt-2">
                                <button className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                                    Join Us
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

        </div>
    )
}