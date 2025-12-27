import { useState, useEffect } from 'react';
import { Plus, Trash2, Calendar, User, BookOpen, Users } from 'lucide-react';
import { CreateCourseForm } from '../components/Dashboard/Admin/CreateCourseForm';
import { ManageStudentsModal } from '../components/Dashboard/Admin/ManageStudentsModal';
import { useAuth } from '../context/AuthContext';



export const ManageCourses = () => {
    const [courses, setCourses] = useState<any[]>([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const { accessToken } = useAuth();
    const baseUrl = import.meta.env.VITE_BASE_URL;


    const fetchCourses = async () => {
        try {
            const response = await fetch(`${baseUrl}/courses`);
            const data = await response.json();
            setCourses(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Failed to fetch courses', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [baseUrl]);

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this course?')) return;
        
        try {
            const response = await fetch(`${baseUrl}/courses/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.ok) {
                fetchCourses();
            }
        } catch (error) {
            console.error('Failed to delete course', error);
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading management portal...</div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--primary-color)]">Course Management</h1>
                    <p className="text-gray-500 text-sm">Create and manage academy courses and sessions</p>
                </div>
                <button 
                    onClick={() => setShowCreateForm(true)}
                    className="flex items-center gap-2 bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition shadow-sm"
                >
                    <Plus className="w-4 h-4" />
                    Create New Course
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-[var(--primary-color)]">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">{course.title}</h3>
                                <div className="flex gap-4 mt-1 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {course.teacher?.name}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {course.sessions?.length || 0} Sessions
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setSelectedCourse(course)}
                                className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition"
                                title="Manage Students"
                            >
                                <Users className="w-5 h-5" />
                            </button>
                            <button 
                                onClick={() => handleDelete(course.id)}
                                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                                title="Delete Course"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>

                    </div>
                ))}

                {courses.length === 0 && (
                    <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <p className="text-gray-500">No courses found. Create your first one!</p>
                    </div>
                )}
            </div>

            {showCreateForm && (
                <CreateCourseForm 
                    onClose={() => setShowCreateForm(false)} 
                    onSuccess={() => {
                        setShowCreateForm(false);
                        fetchCourses();
                    }} 
                />
            )}

            {selectedCourse && (
                <ManageStudentsModal 
                    courseId={selectedCourse.id}
                    courseTitle={selectedCourse.title}
                    onClose={() => {
                        setSelectedCourse(null);
                        fetchCourses(); // Refresh to update student count
                    }}
                />
            )}
        </div>

    );
};
