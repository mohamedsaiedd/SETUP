import {
    LayoutDashboard,
    BookOpen,
    Users,
    Settings,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    GraduationCap
} from 'lucide-react';

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', active: true },
    { icon: BookOpen, label: 'Courses', path: '/dashboard/courses', active: false },
    { icon: Users, label: 'Students', path: '/dashboard/students', active: false },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings', active: false },
    { icon: HelpCircle, label: 'Help & Support', path: '/dashboard/help', active: false },
];

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
    return (
        <aside
            className={`
                fixed left-0 top-0 h-screen bg-[#1e3a5f] text-white
                transition-all duration-300 ease-in-out z-40
                ${isCollapsed ? 'w-20' : 'w-64'}
            `}
        >
            {/* Logo */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-[#d4a853]" />
                    </div>
                    {!isCollapsed && (
                        <span className="font-bold text-lg">
                            Setup <span className="text-[#d4a853]">Academy</span>
                        </span>
                    )}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-20 bg-[#1e3a5f] border border-white/20 rounded-full p-1.5 hover:bg-[#2a4a73] transition"
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
                            <a
                                href={item.path}
                                className={`
                                    flex items-center gap-3 px-3 py-3 rounded-xl
                                    transition-all duration-200
                                    ${item.active
                                        ? 'bg-[#d4a853] text-white'
                                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }
                                `}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                {!isCollapsed && (
                                    <span className="font-medium">{item.label}</span>
                                )}
                            </a>
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
                        <button className="mt-3 w-full py-2 bg-[#d4a853] hover:bg-[#b8923f] rounded-lg text-sm font-medium transition">
                            Get Support
                        </button>
                    </div>
                </div>
            )}
        </aside>
    );
}

