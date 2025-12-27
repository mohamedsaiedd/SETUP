import { Logo } from '../Logo';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    User,
} from 'lucide-react';
import { NavLink } from "react-router-dom";

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/dashboard/courses' },
    { icon: Users, label: 'Tethers', path: '/dashboard/tethers' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: HelpCircle, label: 'Help & Support', path: '/dashboard/help' },
];

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {

    return (
        <aside
            className={`
                fixed left-0 top-0 h-screen bg-[var(--primary-color)] text-white
                transition-all duration-300 ease-in-out z-40
                ${isCollapsed ? 'w-20' : 'w-64'}
            `}
        >
            {/* Logo */}
            <NavLink to="/" className="h-16 flex items-center justify-center px-4 border-b border-white/10">
                <Logo size={isCollapsed ? 30 : 40} variant={isCollapsed ? 'icon' : 'white'} />
            </NavLink>

            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-20 bg-[var(--primary-color)] border border-white/20 rounded-full p-1.5 hover:bg-[var(--primary-color)]/80 transition "
            >
                {isCollapsed ? (
                    <ChevronRight className="w-4 h-4" />
                ) : (
                    <ChevronLeft className="w-4 h-4" />
                )}
            </button>

            {/* Menu Items */}
            <nav className="mt-6 px-3">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                        to={item.path}
                        end={item.path === '/dashboard'}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-3 rounded-xl
                            transition-all duration-200
                            ${isActive
                            ? 'bg-[var(--secondary-color)] text-white'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                            }
                        `}
                        >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && (
                            <span className="font-medium">{item.label}</span>
                        )}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Section */}
            {!isCollapsed && (
                <div className="absolute bottom-6 left-0 right-0 px-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-sm text-gray-300">Need help?</p>
                        <p className="text-xs text-gray-400 mt-1">Contact our support team</p>
                        <button className="mt-3 w-full py-2 bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)]/80 rounded-lg text-sm font-medium transition">
                            Get Support
                        </button>
                    </div>
                </div>
            )}
        </aside>
    );
}



