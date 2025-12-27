import { useEffect, useState } from "react";
import type { CourseDetails } from "../../../types";
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

const CourseThumbnail = ({ src, title, className }: { src?: string, title: string, className?: string }) => {
    const [error, setError] = useState(false);
    if (error || !src) {
        return (
            <div className={`${className} bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center p-4 text-center`}>
                <span className="text-white font-bold text-lg opacity-50">{title}</span>
            </div>
        );
    }

    return (
        <img 
            src={src} 
            alt={title} 
            className={className}
            onError={() => setError(true)}
        />
    );
};

export const Courses = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const [courses, setCourses] = useState<CourseDetails[]>([])
    const { user } = useAuth()
    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`${baseUrl}/courses?studentId=${user?.id}`)
            const data = await response.json()
            setCourses(data)
        }
        fetchCourse()
    }, [])

    return (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:scale-101">
                        <div className="flex flex-col h-full min-h-[400px] justify-between">
                            <div>
                                <CourseThumbnail 
                                    src={course.thumbnailUrl} 
                                    title={course.title}
                                    className="w-full h-50 text-gray-200 object-cover rounded-xl mb-4"
                                />
                                <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{course.title}</p>
                                <p className="text-sm text-[var(--text-sub-color)]">{course.description}</p>
                            </div>
                            <Link to={`./course/${course.id}`} className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full transition inline-flex items-center justify-center gap-4 hover:cursor-pointer hover:opacity-90 hover:bg-[var(--secondary-color)]"> View Course <ArrowRight/></Link>
                        </div>
                    </div>
                ))}
            </div>
    )
}