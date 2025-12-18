import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { Login } from './pages/Login.tsx'
import { Dashboard } from './pages/Dashboard.tsx'
import { ThemeProvider } from "./context/ThemContext.tsx";
import { AuthProvider, useAuth } from "./constext/AuthContext.tsx";
import './App.css'
import { Error } from './pages/Error.tsx'


export const AppRouter = () => {
  const { user } = useAuth();
  return  (
    <BrowserRouter>
        <Routes>
          {/* public route */}
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />

          {/* protected route */} 
          {user? 
            <Route path="/dashboard" element={<Dashboard />} />
          : <Route path="*" element={<Error />} />}
        </Routes>
      </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)


