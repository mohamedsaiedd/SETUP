import { Bell, Search, ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../constext/AuthContext';
import { NavLink } from 'react-router-dom';

interface DashboardNavbarProps {
    sidebarCollapsed: boolean;
    userName?: string;
    userRole?: string;
    userAvatar?: string;
}

export function DashboardNavbar({
    sidebarCollapsed,
    userName = 'John Doe',
    userRole = 'Student',
    userAvatar
}: DashboardNavbarProps) {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const { logout } = useAuth();
    return (
        <header
            className={`
                fixed top-0 right-0 h-16 bg-white border-b border-gray-200 z-30
                transition-all duration-300 ease-in-out
                ${sidebarCollapsed ? 'left-20' : 'left-64'}
            `}
        >
            <div className="h-full px-6 flex items-center justify-between">
                {/* Search */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f]"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Notifications */}
                    <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-xl transition"
                        >
                            <div className="w-9 h-9 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-semibold text-sm">
                                {userAvatar ? (
                                    <img src={userAvatar} alt={userName} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    userName.split(' ').map(n => n[0]).join('').toUpperCase()
                                )}
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-medium text-gray-800">{userName}</p>
                                <p className="text-xs text-gray-500">{userRole}</p>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>

                        {/* Dropdown Menu */}
                        {showUserMenu && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                                <NavLink to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    Profile
                                </NavLink>
                                <a href="/dashboard/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                    Settings
                                </a>
                                <hr className="my-2" />
                                <button
                                    onClick={() => {
                                        logout()
                                        window.location.href = '/';
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full"
                                >
                                    <LogOut className="w-4 h-4" 
                                    />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

