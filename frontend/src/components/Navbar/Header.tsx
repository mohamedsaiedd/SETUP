import { GraduationCap } from 'lucide-react';
import { useState } from 'react';
import DropDown from './DropDown';


export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[var(--primary-color)] p-2 rounded-lg">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-[var(--headLine-text)] tracking-tight
          flex flex-col ">
            STEPUP {" "}<span className="text-[var(--primary-color)] ml-4">ACADEMY</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-sub-color)]">
            <a href="#" className="text-[var(--primary-color)] hover:text-blue-700">Dashboard</a>
            <a href="#" className="hover:text-[var(--headLine-text)]">Courses</a>
            <a href="#" className="hover:text-[var(--headLine-text)]">Teachers</a>
            <a href="#" className="hover:text-[var(--headLine-text)]">Settings</a>
          </nav>

          <div className="flex items-center gap-4 pr-6 border-r lg:border-l lg:pl-6 lg:pr-0 lg:border-r-0 border-gray-200">
            {/* <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 border border-gray-200">
              <User className="w-5 h-5" />
            </div> */}

            <button className='
            px-6 py-2
            bg-[var(--primary-color)]
            text-white 
            font-semibold
            rounded-full 
            shadow-md 
            hover:bg-blue-500
            cursor-pointer
            transition-colors
            duration-300 
            '>
              Login
            </button>
          </div>

              {/* MObile hamburger menu */}
          <button
            onClick={() => setOpen(!open)}
            className={`
              md:hidden rounded-lg p-2 text-[var(--text-sub-color)]
              hover:cursor-pointer
              ${open ? "bg-gray-200" : "hover:bg-gray-200"}`}>

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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>

          {open && <DropDown />}


        </div>

      </div>
    </header>
  );
}
