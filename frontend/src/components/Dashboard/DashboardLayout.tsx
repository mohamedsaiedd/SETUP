import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { DashboardNavbar } from './DashboardNavbar';
import { DashboardFooter } from './DashboardFooter';
import type { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
    userName?: string;
    userRole?: string;
    userAvatar?: string;
}

export function DashboardLayout({
    children,
    userName,
    userRole,
    userAvatar
}: DashboardLayoutProps) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                isCollapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            />

            {/* Navbar */}
            <DashboardNavbar
                sidebarCollapsed={sidebarCollapsed}
                userName={userName}
                userRole={userRole}
                userAvatar={userAvatar}
            />

            {/* Main Content */}
            <main
                className={`
                    pt-16 pb-12 min-h-screen
                    transition-all duration-300 ease-in-out
                    ${sidebarCollapsed ? 'ml-20' : 'ml-64'}
                `}
            >
                <div className="p-6">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <DashboardFooter sidebarCollapsed={sidebarCollapsed} />
        </div>
    );
}

