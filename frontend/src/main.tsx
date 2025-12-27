import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./context/ThemContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import './App.css'
import { AppRouter } from './AppRouter.tsx'


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)


