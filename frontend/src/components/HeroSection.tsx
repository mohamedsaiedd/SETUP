import { Boxes } from "./Boxes";
import { Card } from "./Card";

//padding constants 
const SectionPaddingY = "py-16 md:py-24"; // between sections
const SectionMarginY = "my-16 md:my-24"; // مسافة بين الأقسام
const GapSize = "gap-6 md:gap-8"; // 

export function HeroSection() {
    return (
        <div className="w-full">

                {/* hero section */}
                <section className={`bg-gray-50 ${SectionPaddingY} w-full overflow-hidden`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                            {/* content || text */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                                Unlock Your <br/>
                                <span className="text-blue-600 relative inline-block">
                                    Potential
                                </span>
                                </h1>
                                
                                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                                    Master new skills with our online courses
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
                <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${SectionMarginY}`}>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${GapSize}`}> 
                        <Boxes title="flexible learning" />
                        <Boxes title="expert instructors" />
                        <Boxes title="community support" />
                    </div>
                </div>

                {/* (Featured Courses) */}
                <div className={`w-full bg-gray-50 ${SectionPaddingY}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-3xl font-bold mb-10 text-center md:text-left">Popular Courses</div>
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
                            bg-blue-600 
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

        </div>
    )
}