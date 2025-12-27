import { Bell, Search, ChevronDown, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../../ThemToggle';
// import { useLocation } from "react-router-dom";

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
    // const location = useLocation();
    // const isProfilePage = location.pathname === "/profile";

    return (
        <header
            className={`
                fixed top-0 right-0 bg-white border-b dark:bg-gray-900 dark:border-gray-700 border-gray-200 z-30
                transition-all duration-300 ease-in-out
                ${sidebarCollapsed ? 'left-20' : 'left-64'}
            `}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
                {/* Search */}
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-gray-200 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 w-20 sm:w-50 md:w-64 lg:w-64 dark:text-white dark:border-gray-700 bg-gray-50 border dark:bg-gray-800/50 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20 focus:border-[#1e3a5f]"
                            />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    
                    {/* Notifications */}
                    <button className="relative p-2 text-gray-500 dark:text-white hover:dark:bg-[var(--primary-800)] hover:text-gray-700 dark:hover:text-gray-100 hover:bg-gray-100 rounded-lg transition">
                        <Bell className="size-6" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* dark mode button */}
                    <ThemeToggle/>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-3 p-2 hover:bg-gray-100 hover:dark:bg-[var(--primary-800)] rounded-xl transition"
                        >
                            <div className="w-9 h-9 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold text-sm">
                                {userAvatar ? (
                                    <img src={userAvatar} alt={userName} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    userName.split(' ').map(n => n[0]).join('').toUpperCase()
                                )}
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-medium text-gray-800 dark:text-white">{userName}</p>
                                <p className="text-xs text-[var(--text-sub-color)]">{userRole}</p>
                            </div>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>

                        {/* Dropdown Menu */}
                        {showUserMenu && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:border-gray-700 dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 p-1 z-50">
                          <NavLink to="/dashboard/profile" className="flex items-center text-[var(--text-sub-color)] rounded-lg hover:dark:bg-gray-800 hover:dark:text-white gap-2 px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-900">
                              Profile
                          </NavLink>
                          <NavLink to="/dashboard/settings" className="flex items-center rounded-lg hover:dark:bg-gray-800 hover:dark:text-white gap-2 px-4 py-2 text-sm text-[var(--text-sub-color)] hover:bg-gray-200 hover:text-gray-900">
                              Settings
                          </NavLink>
                          <hr className="my-2 dark:border-gray-700"/>
                          <button
                              onClick={() => {
                                  logout()
                                  window.location.href = '/';
                              }}
                              className="flex items-center hover:dark:bg-gray-800 rounded-lg gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full">
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

