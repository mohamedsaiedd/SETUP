import { LogOut , ChevronDown} from 'lucide-react';
import { Logo } from '../Logo';
import { useState } from 'react';
import DropDown from './DropDown';
import { NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from '../../ThemToggle';
import { useAuth } from '../../constext/AuthContext';
import { useTheme } from '../../context/ThemContext';
export function goToSection(id: string, navigate: any) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/");

    setTimeout(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate()
  const { logout } = useAuth();
  const { user } = useAuth()
  const { dark } = useTheme()

  return (
    <header className=" bg-white dark:bg-gray-900 w-full dark:border-gray-700 dark:text-white border-b border-gray-200 fixed top-0 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NavLink onClick={() => goToSection("home", navigate)} to="/" className="flex items-center gap-3">
          <Logo size={40} variant={dark ? 'white' : 'default'}/>
        </NavLink>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-sub-color)]">
            {localStorage.getItem('refresh_token')?
              <NavLink to="/dashboard" className=" hover:dark:text-white hover:text-[var(--headLine-text)] rounded-lg">
                Dashboard
              </NavLink> : null}
            <NavLink to="/" onClick={() => goToSection("home", navigate)} className="hover:text-[var(--headLine-text)]">Home</NavLink>
            <button onClick={() => goToSection("about", navigate)} className="hover:text-[var(--headLine-text)] cursor-pointer">About</button>
          </nav>

          <div className="flex items-center gap-4 pr-4 border-r lg:border-l md:pl-4 md:pr-0 lg:border-r-0 border-gray-200">
            
            {/* dark mode button */}
            <ThemeToggle/>

              {localStorage.getItem('refresh_token')? 

                <div className="relative">
                    <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center gap-3 p-2 hover:dark:bg-[var(--primary-800)] hover:bg-gray-100 rounded-xl transition">
                        <div className="w-9 h-9 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white font-semibold text-sm">
                            {user?.avatar ? (
                                <img src={user?.avatar} alt={user?.name} className="w-full h-full rounded-full object-cover" />
                            ) : (
                                user?.name.split(' ').map(n => n[0]).join('').toUpperCase()
                            )}
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-medium dark:text-white text-gray-800">{user?.name}</p>
                            <p className="text-xs dark:text-[var(--text-sub-color)] text-gray-500">{user?.role}</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {showUserMenu && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border dark:border-0 border-gray-200 p-1 z-50">
                          <NavLink to="/profile" className="flex items-center text-[var(--text-sub-color)] rounded-lg hover:dark:bg-gray-800 hover:dark:text-white gap-2 px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-900">
                              Profile
                          </NavLink>
                          <a href="/dashboard/settings" className="flex items-center rounded-lg hover:dark:bg-gray-800 hover:dark:text-white gap-2 px-4 py-2 text-sm text-[var(--text-sub-color)] hover:bg-gray-200 hover:text-gray-900">
                              Settings
                          </a>
                          <hr className="my-2 dark:border-gray-700" />
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

              :

              <NavLink to="/login" className='text-white'>
              <button className='
              px-6 py-2
              bg-[var(--primary-color)]
              hover:opacity-90
              text-white 
              font-semibold
              rounded-full 
              shadow-md 
              dark:bg-[var(--primary-color)]
              hover:dark:opacity-90
              cursor-pointer
              transition-colors
              duration-300 
              '>
                  Login
                </button>
              </NavLink>}
            
          </div>

          {/* MObile hamburger menu */}
          <button
            onClick={() => setOpen(!open)}
            className={`
              md:hidden rounded-lg p-2 text-[var(--text-sub-color)]
              hover:cursor-pointer
              ${open ? "bg-gray-200 dark:bg-[var(--primary-800)]" : "hover:bg-gray-200 hover:dark:bg-[var(--primary-800)]"}`}>

            <svg  
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {open && <DropDown />}


        </div>

      </div>
    </header>
  );
}
