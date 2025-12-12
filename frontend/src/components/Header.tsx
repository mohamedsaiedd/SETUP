import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            Student<span className="text-blue-600">Manager</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="text-blue-600 hover:text-blue-700">Dashboard</a>
            <a href="#" className="hover:text-gray-900">Courses</a>
            <a href="#" className="hover:text-gray-900">Teachers</a>
            <a href="#" className="hover:text-gray-900">Settings</a>
          </nav>
          
          <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
            {/* <button className="text-gray-400 hover:text-gray-600 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 border border-gray-200">
              <User className="w-5 h-5" />
            </div> */}

            <button className='
            px-6 py-2
            bg-blue-600
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

        </div>
      </div>
    </header>
  );
}
