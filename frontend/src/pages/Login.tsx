import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GraduationCap, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '../constext/AuthContext';

export function Login() {
    const { login } = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(null);

        try {
            const response = await axios.post('https://setup-production-c651.up.railway.app/auth/login', {
                email,
                password,
            });
            setSuccess(response.data);
            console.log('Login successful:', response.data);
            login(response.data);
            
            // Redirect to dashboard after successful login
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen dark:bg-amber-700 flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#1e3a5f] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#162d4a] to-[#0f1d2f]"></div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4a853] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f97068] rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center px-16 text-white">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-white/10 backdrop-blur p-3 rounded-xl border border-white/20">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold flex flex-col tracking-tight">
                            Setup <span className="text-[#d4a853]">Academy</span>
                        </h1>
                    </div>

                    <h2 className="text-4xl font-bold leading-tight mb-6">
                        Welcome back to<br />your learning journey
                    </h2>
                    <p className="text-gray-300 text-lg max-w-md">
                        Access your courses, track progress, and continue mastering new skills with our premium platform.
                    </p>

                    {/* Decorative elements */}
                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-[#d4a853] border-2 border-[#1e3a5f]"></div>
                            <div className="w-10 h-10 rounded-full bg-[#f97068] border-2 border-[#1e3a5f]"></div>
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-[#1e3a5f]"></div>
                        </div>
                        <p className="text-sm text-gray-300">
                            <span className="text-[#d4a853] font-semibold">10,000+</span> students learning
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full dark:bg-gray-900 text-white lg:w-1/2 flex items-center justify-center bg-[#fafafa] px-6 py-12">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
                        <div className="bg-[#1e3a5f] p-2 rounded-lg">
                            <GraduationCap className="text-white w-6 h-6" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
                            Setup <span className="text-[#d4a853]">Academy</span>
                        </h1>
                    </div>

                    <div className="text-center lg:text-left mb-8">
                        <h2 className="text-3xl dark:text-white font-bold text-start text-[#1e3a5f] mb-2">Sign in</h2>
                        <p className="text-[#334155] text-start dark:text-gray-400">Enter your credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block dark:text-white text-sm font-medium text-[#334155] mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl dark:text-white dark:focus:ring-white dark:bg-gray-900 bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition shadow-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm dark:text-white font-medium text-[#334155] mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl dark:text-white dark:bg-gray-900 dark:focus:ring-white bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center dark:text-white gap-2 text-[#334155]">
                                <input type="checkbox" className="w-4 h-4 rounded  border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]" />
                                Remember me
                            </label>
                            <a href="#" className="text-[#d4a853] hover:text-[#b8923f] font-medium">
                                Forgot password?
                            </a>
                        </div>

                        {error && (
                            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                                <p className="font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    {success.message}
                                </p>
                                <p className="text-xs mt-1 text-green-600 opacity-75">Welcome back, {success.data?.name}!</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 px-4 bg-[#1e3a5f] text-white font-semibold rounded-xl hover:bg-[#2a4a73] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:ring-offset-2 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Signing in...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Setup Academy. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
