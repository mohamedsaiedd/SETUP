import { useState, useEffect } from 'react';
import { X, Plus, Trash2, Video } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';


interface Teacher {
    id: string;
    name: string;
    email: string;
}

interface Session {
    title: string;
    date: string;
    time: string;
}

interface CreateCourseFormProps {
    onClose: () => void;
    onSuccess: () => void;
}

export const CreateCourseForm = ({ onClose, onSuccess }: CreateCourseFormProps) => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: 'Programming',
        teacherId: '',
    });
    const [sessions, setSessions] = useState<Session[]>([
        { title: 'Introduction', date: '', time: '10:00' }
    ]);
    const [loading, setLoading] = useState(false);
    const { accessToken } = useAuth();
    const baseUrl = import.meta.env.VITE_BASE_URL;


    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await fetch(`${baseUrl}/users/teachers`, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });


                const data = await response.json();
                setTeachers(data);
                if (data.length > 0) {
                    setFormData(prev => ({ ...prev, teacherId: data[0].id }));
                }
            } catch (error) {
                console.error('Failed to fetch teachers', error);
            }
        };
        fetchTeachers();
    }, [baseUrl, accessToken]);


    const addSession = () => {
        setSessions([...sessions, { title: '', date: '', time: '10:00' }]);
    };

    const removeSession = (index: number) => {
        setSessions(sessions.filter((_, i) => i !== index));
    };

    const updateSession = (index: number, field: keyof Session, value: string) => {
        const newSessions = [...sessions];
        newSessions[index][field] = value;
        setSessions(newSessions);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            price: parseFloat(formData.price),
            sessions: sessions.map(s => ({
                title: s.title,
                date: `${s.date}T${s.time}:00.000Z`
            }))
        };

        try {
            const response = await fetch(`${baseUrl}/courses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(payload)
            });


            if (response.ok) {
                onSuccess();
            } else {
                const err = await response.json();
                alert(`Error: ${err.message || 'Failed to create course'}`);
            }
        } catch (error) {
            console.error('Submission error', error);
            alert('Network error. Check console.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Create New Course</h2>
                        <p className="text-sm text-gray-500">Live sessions will automatically generate Zoom links</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Course Title</label>
                            <input 
                                required
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                                value={formData.title}
                                onChange={e => setFormData({...formData, title: e.target.value})}
                                placeholder="e.g. Advanced TypeScript"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <select 
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                                value={formData.category}
                                onChange={e => setFormData({...formData, category: e.target.value})}
                            >
                                <option>Programming</option>
                                <option>Design</option>
                                <option>Marketing</option>
                                <option>Business</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea 
                            required
                            rows={3}
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                            placeholder="Describe what students will learn..."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Price ($)</label>
                            <input 
                                required
                                type="number"
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                                value={formData.price}
                                onChange={e => setFormData({...formData, price: e.target.value})}
                                placeholder="99.99"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Assign Teacher</label>
                            <select 
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-[var(--primary-color)] outline-none"
                                value={formData.teacherId}
                                onChange={e => setFormData({...formData, teacherId: e.target.value})}
                            >
                                {teachers.map(t => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Sessions section */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                            <h3 className="font-bold text-[var(--primary-color)] flex items-center gap-2">
                                <Video className="w-4 h-4" /> Live Sessions
                            </h3>
                            <button 
                                type="button"
                                onClick={addSession}
                                className="text-xs bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-md hover:bg-gray-50 transition flex items-center gap-1"
                            >
                                <Plus className="w-3 h-3" /> Add Session
                            </button>
                        </div>

                        <div className="space-y-3">
                            {sessions.map((session, idx) => (
                                <div key={idx} className="flex gap-3 items-end border-b border-gray-50 dark:border-gray-700 pb-3 last:border-0">
                                    <div className="flex-1 space-y-1">
                                        <label className="text-[10px] uppercase font-bold text-gray-400">Title</label>
                                        <input 
                                            required
                                            type="text"
                                            className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700"
                                            value={session.title}
                                            onChange={e => updateSession(idx, 'title', e.target.value)}
                                            placeholder="e.g. Intro Session"
                                        />
                                    </div>
                                    <div className="w-32 space-y-1">
                                        <label className="text-[10px] uppercase font-bold text-gray-400">Date</label>
                                        <input 
                                            required
                                            type="date"
                                            className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700"
                                            value={session.date}
                                            onChange={e => updateSession(idx, 'date', e.target.value)}
                                        />
                                    </div>
                                    <div className="w-24 space-y-1">
                                        <label className="text-[10px] uppercase font-bold text-gray-400">Time</label>
                                        <input 
                                            required
                                            type="time"
                                            className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-600 dark:bg-gray-700"
                                            value={session.time}
                                            onChange={e => updateSession(idx, 'time', e.target.value)}
                                        />
                                    </div>
                                    {sessions.length > 1 && (
                                        <button 
                                            type="button"
                                            onClick={() => removeSession(idx)}
                                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md mb-0.5"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition font-medium"
                        >
                            Cancel
                        </button>
                        <button 
                            disabled={loading}
                            type="submit"
                            className="flex-1 px-4 py-2.5 bg-[var(--primary-color)] text-white rounded-xl hover:opacity-90 transition font-medium disabled:opacity-50"
                        >
                            {loading ? 'Processing...' : 'Create Course'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
