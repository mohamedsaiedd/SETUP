import { DashboardLayout } from '../components/Dashboard/DashboardLayout';
import { useAuth } from "../context/AuthContext";
import { Outlet } from 'react-router-dom';
// Mock user data - replace with actual user data from auth

export function Dashboard() {
    const { user } = useAuth()
    
    return (
        <DashboardLayout 
            userName={user?.name}
            userRole={user?.role}
            userAvatar={user?.avatar}
        >
            <Outlet />
        </DashboardLayout>
    );
}

