import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CourseDetails } from "../../../types";

export const Course = () => {
    const { id } = useParams()

    const baseUrl = import.meta.env.VITE_BASE_URL
    const [course, setCourse] = useState<CourseDetails>()
    useEffect(() => {
        const fetchCourse = async () => {
            const response = await fetch(`${baseUrl}/courses/${id}`)
            const data = await response.json()
            setCourse(data)
        }
        fetchCourse()
    }, [])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Course {course?.title}</h1>
            <p className="text-[var(--text-color)]">{course?.description}</p>
            {course?.zoomLinks.map((link, index) => (
                <p key={index} className="text-[var(--text-color)]">{link}</p>
            ))}
        </div>
    )
}