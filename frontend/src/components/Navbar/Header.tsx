import { GraduationCap } from 'lucide-react';
import { useState } from 'react';
import DropDown from './DropDown';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../../ThemToggle';

// const SectionPaddingZ = "px-4 sm:px-6 lg:px-8";

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900  dark:text-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[var(--primary-color)] p-2 rounded-lg">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-[var(--headLine-text)] tracking-tight
          flex flex-col ">
            SETUP {" "}<span className="text-[var(--primary-color)]">ACADEMY</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-sub-color)]">
            <a href="#" className="hover:text-[var(--headLine-text)]">Home</a>
            <a href="#" className="hover:text-[var(--headLine-text)]">About</a>
          </nav>

          <div className="flex items-center gap-4 pr-4 border-r lg:border-l md:pl-4 md:pr-0 lg:border-r-0 border-gray-200">
            {/* <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 border border-gray-200">
              <User className="w-5 h-5" />
            </div> */}

            {/* dark them */}
            {/* <button onClick={toggleThem} className='p-2 hover:bg-gray-100 rounded-lg'>
              {dark?(
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              ): (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
                </svg>
              )}
            </button> */}

            <ThemeToggle/>

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
            </NavLink>
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
