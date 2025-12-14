interface DashboardFooterProps {
    sidebarCollapsed: boolean;
}

export function DashboardFooter({ sidebarCollapsed }: DashboardFooterProps) {
    return (
        <footer
            className={`
                fixed bottom-0 right-0 h-12 bg-white border-t border-gray-200 z-20
                transition-all duration-300 ease-in-out
                ${sidebarCollapsed ? 'left-20' : 'left-64'}
            `}
        >
            <div className="h-full px-6 flex items-center justify-between text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Stepup Academy. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-gray-700 transition">Privacy</a>
                    <a href="#" className="hover:text-gray-700 transition">Terms</a>
                    <a href="#" className="hover:text-gray-700 transition">Support</a>
                </div>
            </div>
        </footer>
    );
}
