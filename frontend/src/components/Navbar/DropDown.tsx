
export default function DropDown() {
  return (
    <div className="absolute right-2.5 w-52 text-right mt-4">
        <div className="absolute top-2.5 right-0 mt-2 w-52 max-h-60 overflow-auto rounded-xl bg-white p-1 shadow-[0_8px_24px_rgba(149,157,165,0.2)] z-50">
          <button className="w-full px-3 py-2 text-left hover:bg-gray-200 hover:text-gray-900 text-blue-600 rounded-lg">
            Dashboard
          </button>
          <button className="w-full px-3 py-2 text-left hover:bg-gray-200 hover:text-gray-900 text-gray-500 rounded-lg">
            Courses
          </button>
          <button className="w-full px-3 py-2 text-left hover:bg-gray-200 hover:text-gray-900 text-gray-500 rounded-lg">
            Teachers
          </button>
          <button className="w-full px-3 py-2 text-left hover:bg-gray-200 hover:text-gray-900 text-gray-500 rounded-lg">
            Settings
          </button>
        </div>
    </div>
  );
}
