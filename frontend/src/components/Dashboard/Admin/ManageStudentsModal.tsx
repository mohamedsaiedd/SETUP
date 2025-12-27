import { useState, useEffect } from 'react';
import { X, Search, UserMinus, UserPlus, Loader2 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

interface Student {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface ManageStudentsModalProps {
    courseId: string;
    courseTitle: string;
    onClose: () => void;
}

export const ManageStudentsModal = ({ courseId, courseTitle, onClose }: ManageStudentsModalProps) => {
    const [enrolledStudents, setEnrolledStudents] = useState<Student[]>([]);
    const [allStudents, setAllStudents] = useState<Student[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<string | null>(null);
    const { accessToken } = useAuth();
    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        fetchData();
    }, [courseId]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Fetch current course with students
            const courseRes = await fetch(`${baseUrl}/courses/${courseId}`, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });
            const courseData = await courseRes.json();
            setEnrolledStudents(courseData.students || []);

            // Fetch all users with STUDENT role
            const usersRes = await fetch(`${baseUrl}/users`, {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });
            const allUsers = await usersRes.json();
            setAllStudents(allUsers.filter((u: any) => u.role === 'STUDENT'));
        } catch (error) {
            console.error('Failed to fetch students', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEnroll = async (studentId: string) => {
        setActionLoading(studentId);
        try {
            const res = await fetch(`${baseUrl}/courses/${courseId}/enroll`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({ studentId })
            });

            if (res.ok) {
                fetchData();
            } else {
                const err = await res.json();
                alert(err.message || 'Failed to enroll student');
            }
        } catch (error) {
            console.error('Enroll error', error);
        } finally {
            setActionLoading(null);
        }
    };

    const handleUnenroll = async (studentId: string) => {
        if (!window.confirm('Are you sure you want to remove this student from the course?')) return;
        setActionLoading(studentId);
        try {
            const res = await fetch(`${baseUrl}/courses/${courseId}/enroll/${studentId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });

            if (res.ok) {
                fetchData();
            } else {
                const err = await res.json();
                alert(err.message || 'Failed to unenroll student');
            }
        } catch (error) {
            console.error('Unenroll error', error);
        } finally {
            setActionLoading(null);
        }
    };

    const eligibleStudents = allStudents.filter(s => 
        !enrolledStudents.some(es => es.id === s.id) &&
        (s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
         s.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col border border-white/10">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Manage Students</h2>
                        <p className="text-sm text-gray-500 mt-0.5">{courseTitle}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {loading ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-12 space-y-4">
                        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                        <p className="text-gray-500 text-sm">Loading participants...</p>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        {/* Search & Add Section */}
                        <div className="space-y-4">
                            <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400">Add New Student</h3>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="text"
                                    placeholder="Search by name or email..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            
                            {searchQuery && eligibleStudents.length > 0 && (
                                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800 max-h-48 overflow-y-auto">
                                    {eligibleStudents.map(student => (
                                        <div key={student.id} className="p-3 flex items-center justify-between hover:bg-white dark:hover:bg-gray-800 transition">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xs">
                                                    {student.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{student.name}</p>
                                                    <p className="text-[10px] text-gray-500">{student.email}</p>
                                                </div>
                                            </div>
                                            <button 
                                                disabled={actionLoading === student.id}
                                                onClick={() => handleEnroll(student.id)}
                                                className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/40 rounded-lg transition disabled:opacity-50"
                                            >
                                                {actionLoading === student.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Current List Section */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400">Enrolled Students ({enrolledStudents.length})</h3>
                            </div>
                            
                            {enrolledStudents.length === 0 ? (
                                <div className="text-center py-8 bg-gray-50 dark:bg-gray-800/30 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
                                    <p className="text-sm text-gray-400">No students enrolled in this course yet.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-3">
                                    {enrolledStudents.map(student => (
                                        <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-2xl group hover:border-blue-200 dark:hover:border-blue-900/50 border border-transparent transition">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                                    {student.avatar ? (
                                                        <img src={student.avatar} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-500 text-white font-bold">
                                                            {student.name.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{student.name}</p>
                                                    <p className="text-xs text-gray-500">{student.email}</p>
                                                </div>
                                            </div>
                                            <button 
                                                disabled={actionLoading === student.id}
                                                onClick={() => handleUnenroll(student.id)}
                                                className="opacity-0 group-hover:opacity-100 p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition disabled:opacity-50"
                                                title="Remove Student"
                                            >
                                                {actionLoading === student.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserMinus className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                
                {/* Footer Footer */}
                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-black/20 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 transition shadow-lg shadow-black/10"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};
