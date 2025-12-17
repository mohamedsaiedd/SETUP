import { useNavigate } from 'react-router-dom';
import { goToSection } from './Header'


export default function DropDown() {
  const navigate = useNavigate()

  return (
    <div className="absolute right-2.5 w-52 text-right mt-4">
        <div className="absolute top-2.5 right-0 mt-2 w-52 max-h-60 overflow-auto rounded-xl dark:bg-gray-900 dark:text-white bg-white p-1 dark:shadow-sm shadow-[0_8px_24px_rgba(149,157,165,0.2)] z-50">
          <button onClick={() => goToSection("home", navigate)} className="w-full px-3 py-2 text-left hover:dark:bg-gray-800 hover:dark:text-white hover:bg-gray-200 hover:text-gray-900 text-gray-500 rounded-lg">
            Home
          </button>
          <button onClick={() => goToSection("about", navigate)} className="w-full px-3 py-2 text-left hover:dark:bg-gray-800 hover:dark:text-white hover:bg-gray-200 hover:text-gray-900 text-gray-500 rounded-lg">
            About
          </button>
        </div>
    </div>
  );
}
