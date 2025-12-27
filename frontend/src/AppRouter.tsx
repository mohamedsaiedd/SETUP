import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { Login } from './pages/Login.tsx'
import { Dashboard } from './pages/Dashboard.tsx'
import { Error } from './pages/Error.tsx'
import { Profile } from './components/Dashboard/profile/Profile.tsx'
import { useAuth } from './context/AuthContext.tsx'
import { DashboardMain } from './components/Dashboard/DashboardMain.tsx'
import { NotAuth } from './pages/NotAuth.tsx'
import { Course } from './components/Dashboard/Course/Course.tsx'
import { Courses } from './components/Dashboard/Course/Courses.tsx'
import { ManageCourses } from './pages/ManageCourses.tsx'

export const AppRouter = () => {
  const { user } = useAuth();
  return  (
    <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />

          {/* protected route */} 
          <>
            <Route 
            path="/dashboard" 
            element={ user ? <Dashboard /> : <NotAuth />}
            >
                <Route index element={<DashboardMain />} />
                <Route path="profile" element={<Profile />} />
                <Route path="courses" element={<Courses />} />
                <Route path="course/:id" element={<Course />} />
                {(user?.role === 'ADMIN' || user?.role === 'SUPERVISOR') && (
                  <Route path="manage" element={<ManageCourses />} />
                )}
                <Route path="*" element={<Error height="100vh" />} />
            </Route>
          </>
          <Route path="*" element={<Error height="100vh" />} />
        </Routes>
      </BrowserRouter>
  )
}
