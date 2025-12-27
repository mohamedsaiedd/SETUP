import { BookOpen } from 'lucide-react';
import { useAuth } from "../../context/AuthContext";
import { Courses } from './Course/Courses';


export const DashboardMain = () => {
    const { user } = useAuth()
    
    return (
        <div>
             <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Welcome back, <span className="text-[var(--primary-color)] dark:text-[var(--gold-500)]">{user?.name}</span>! 👋
                </h1>
                <p className="text-[var(--text-sub-color)] mt-1">Here's your enrolled courses.</p>
            </div>

            <Courses />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Courses */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Continue Learning</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/100 hover:dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                                <div className="w-16 h-16 bg-[var(--primary-color)]/10 rounded-xl dark:bg-[#e1c5a0]/10 flex items-center justify-center">
                                    <BookOpen className="w-8 h-8 text-[var(--primary-color)] dark:text-[var(--gold-400)]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900 dark:text-white">Course Title {index + 1}</h3>
                                    <p className="text-sm text-[var(--text-sub-color)]">Module {index + 2} • Lesson {index + 3}</p>
                                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-[var(--secondary-color)] h-2 rounded-full"
                                            style={{ width: `${30 + index * 20}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-sm text-[var(--text-sub-color)]">{30 + index * 20}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming */}
                <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900  dark:text-white mb-4">Upcoming</h2>
                    <div className="space-y-4">
                        {['Assignment Due', 'Live Session', 'Quiz'].map((item, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800/100 hover:dark:bg-gray-700/50 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900 dark:text-white">{item}</span>
                                    <span className="text-xs bg-[var(--primary-color)] text-white px-2 py-1 dark:bg-[#e1c5a0]/10 rounded-full">
                                        {index + 1} day{index > 0 ? 's' : ''}
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--text-sub-color)] mt-1">Course Name</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}