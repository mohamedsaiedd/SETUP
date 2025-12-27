import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo';

export function NotAuth() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300
        bg-gray-50 
        ">
            <div className="max-w-md w-full text-center">
                {/* Illustration/Icon Container */}
                <div className="relative mb-8 flex justify-center">
                    <div className="absolute inset-0 blur-3xl opacity-10 dark:opacity-20 rounded-full"></div>
                    <Logo size={160} variant="icon-blue"  />
                </div>

                {/* Text Content */}
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Not Authenticated
                </h2>
                <p className="text-[var(--text-sub-color)] mb-8 leading-relaxed">
                    You are not authenticated to access this page. Please login to continue.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium "
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                    
                    <Link 
                        to="/login"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary-color)] text-white hover:opacity-90 transition-all font-medium shadow-lg shadow-[var(--primary-color)]/20"
                    >
                        <Home className="w-4 h-4" />
                        Back to Login
                    </Link>
                </div>

                {/* Footer Note */}
                <p className="mt-12 text-sm text-gray-400 dark:text-gray-500">
                    If you think this is a mistake, please contact <span className="underline cursor-pointer">Support</span>.
                </p>
            </div>
        </div>
    );
}