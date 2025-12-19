import { DashboardLayout } from '../components/Dashboard/DashboardLayout';
import { BookOpen, Users, TrendingUp, Clock } from 'lucide-react';
import { useAuth } from "../constext/AuthContext";
// Mock user data - replace with actual user data from auth

const stats = [
    { label: 'Enrolled Courses', value: '12', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Completed', value: '8', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'In Progress', value: '4', icon: Clock, color: 'bg-yellow-500' },
    { label: 'Certificates', value: '5', icon: Users, color: 'bg-purple-500' },
];

export function Dashboard() {
    const { user } = useAuth()
    
    return (
        <DashboardLayout 
            userName={user?.name}
            userRole={user?.role}
            userAvatar={user?.avatar}
        >
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back, <span className="text-[#1e3a5f]">{user?.name}</span>! 👋
                </h1>
                <p className="text-gray-500 mt-1">Here's what's happening with your learning today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">{stat.label}</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                            </div>
                            <div className={`${stat.color} p-3 rounded-xl`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Courses */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Continue Learning</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                                <div className="w-16 h-16 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center">
                                    <BookOpen className="w-8 h-8 text-[#1e3a5f]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">Course Title {index + 1}</h3>
                                    <p className="text-sm text-gray-500">Module {index + 2} • Lesson {index + 3}</p>
                                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-[#d4a853] h-2 rounded-full" 
                                            style={{ width: `${30 + index * 20}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500">{30 + index * 20}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming</h2>
                    <div className="space-y-4">
                        {['Assignment Due', 'Live Session', 'Quiz'].map((item, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-900">{item}</span>
                                    <span className="text-xs bg-[#1e3a5f] text-white px-2 py-1 rounded-full">
                                        {index + 1} day{index > 0 ? 's' : ''}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Course Name</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

