import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CourseDetails } from "../../../types";
import { ChevronDown, Circle, Video } from "lucide-react";

export const Course = () => {
    const { id } = useParams()
    const baseUrl = import.meta.env.VITE_BASE_URL
    const [course, setCourse] = useState<CourseDetails>()
    const [openModules, setOpenModules] = useState<Record<string, boolean>>({
        'module-1': true,
        'live-sessions': true
    })

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`${baseUrl}/courses/${id}`)
                const data = await response.json()
                setCourse(data)
            } catch (error) {
                console.error("Failed to fetch course", error)
            }
        }
        fetchCourse()
    }, [baseUrl, id])

    const toggleModule = (moduleId: string) => {
        setOpenModules(prev => ({
            ...prev,
            [moduleId]: !prev[moduleId]
        }))
    }

    // Mock Data for UI demonstration
    if (!course) return <div className="p-8 text-center">Loading...</div>

    return (
        <div className="p-6  mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link to="/dashboard" className="hover:text-[var(--primary-color)]">Home</Link>
                <span>&gt;</span>
                <span className="text-[var(--primary-color)] font-medium">Course Details</span>
            </div>

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">{course.title}</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-[var(--primary-color)] font-medium bg-blue-50 dark:bg-blue-900/20 w-fit px-3 py-1 rounded-full">
                    <span>2 / 5 Completed</span>
                    <span>|</span>
                    <span>4.4 min watched</span>
                </div>
            </div>

            {/* Content List */}
            <div className="space-y-4">
                
                {/* Real Data: Live Sessions */}
                {course.sessions && course.sessions.length > 0 && (
                     <div className="border border-blue-100 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
                        <button 
                            onClick={() => toggleModule('live-sessions')}
                            className="w-full flex items-center justify-between p-4 bg-blue-50/50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                        >
                            <div className="text-left">
                                <h3 className="font-bold text-[var(--primary-color)] dark:text-blue-400">Live Sessions</h3>
                                <p className="text-xs text-gray-500 mt-1">{course.sessions.length} Sessions</p>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openModules['live-sessions'] ? 'rotate-180' : ''}`} />
                        </button>

                        {openModules['live-sessions'] && (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 dark:bg-gray-700/50 text-xs uppercase text-gray-500 font-semibold">
                                        <tr>
                                            <th className="px-6 py-4">Session Name</th>
                                            <th className="px-6 py-4">Date & Time</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {course.sessions.map((session, index) => {
                                            const sessionDate = new Date(session.date);
                                            const isExpired = sessionDate < new Date();
                                            
                                            // Status Label
                                            let statusLabel = isExpired ? 'Expired' : 'Upcoming';
                                            let statusColor = isExpired 
                                                ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' 
                                                : 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400';

                                            return (
                                                <tr key={session.id || index} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-[var(--primary-color)]">
                                                                <Video className="w-4 h-4" />
                                                            </div>
                                                            <span className="font-medium text-gray-900 dark:text-white">
                                                                {session.title || `Zoom Session ${index + 1}`}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        <div className="flex flex-col">
                                                            <span className="font-medium text-gray-700 dark:text-gray-300">
                                                                {sessionDate.toLocaleDateString()}
                                                            </span>
                                                            <span className="text-xs">
                                                                {sessionDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                                                            {statusLabel}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        {isExpired ? (
                                                            <button 
                                                                disabled
                                                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed opacity-70"
                                                            >
                                                                Ended
                                                            </button>
                                                        ) : (
                                                            <a 
                                                                href={session.link} 
                                                                target="_blank" 
                                                                rel="noreferrer" 
                                                                className="inline-block px-4 py-2 bg-[var(--primary-color)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition shadow-sm hover:shadow-md"
                                                            >
                                                                Join Now
                                                            </a>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    )
}