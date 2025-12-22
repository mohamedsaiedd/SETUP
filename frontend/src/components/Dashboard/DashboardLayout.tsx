import { useEffect, useState } from 'react';
import type { ReactNode } from "react";

import { Sidebar } from './Sidebar';
import { DashboardNavbar } from './DashboardNavbar';
import { DashboardFooter } from './DashboardFooter';
import { useIsMobile } from '../../context/UseIsMobile';


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
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
    const isMobile = useIsMobile();

    useEffect(() => {
  if (isMobile && !sidebarCollapsed) {
    // منع scroll على body و html
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  };
}, [isMobile, sidebarCollapsed]);

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
            {isMobile && !sidebarCollapsed && (
                <div
                    onClick={() => setSidebarCollapsed(true)}
                    className="fixed inset-0 bg-black/50 z-30"
                />
            )}
            <main
                className={`
                    pt-16 pb-12 h-screen
                    transition-all duration-300 ease-in-out
                    ${isMobile? 'ml-20' :sidebarCollapsed ? 'ml-20' : 'ml-64'}
                `}
            >
                <div className={`p-6 dark:bg-gray-900`}>
                    {children}
                </div>
            </main>

            {/* Footer */}
            <DashboardFooter sidebarCollapsed={sidebarCollapsed} />
        </div>
    );
}

