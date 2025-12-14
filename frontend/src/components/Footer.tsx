export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white mt-auto">
      <div className="w-full px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Stepup Academy. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-[#d4a853] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#d4a853] transition">Terms of Service</a>
          <a href="#" className="hover:text-[#d4a853] transition">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
