import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#1e3a5f] p-2 rounded-lg">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            Stepup <span className="text-[#d4a853]">Academy</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="text-[#1e3a5f] hover:text-[#2a4a73]">Dashboard</a>
            <a href="#" className="hover:text-gray-900">Courses</a>
            <a href="#" className="hover:text-gray-900">Teachers</a>
            <a href="#" className="hover:text-gray-900">Settings</a>
          </nav>

          <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
            <a
              href="/login"
              className='
              px-6 py-2
              bg-[#1e3a5f]
              text-white 
              font-semibold
              rounded-full 
              shadow-md 
              hover:bg-[#2a4a73]
              cursor-pointer
              transition-colors
              duration-300 
              '>
              Login
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
