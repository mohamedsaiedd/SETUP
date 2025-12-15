import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900  dark:text-white px-6 py-4 border-t w-full border-gray-200 mt-auto">
      


      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center w-full justify-between text-sm text-gray-500">

          <div>
            <h3 className='mb-4 text-[var(--headLine-text)] font-bold'>
            Channels
            </h3>
            <div className='flex flex-col gap-4 text-[var(--text-sub-color)]'>
              <div className='hover:text-[var(--primary-900)] cursor-pointer'>Facebook</div>
              <div className='hover:text-[var(--primary-900)] cursor-pointer'>Instagram</div>
              <div className='hover:text-[var(--primary-900)] cursor-pointer'>Youtube</div>
            </div>
          </div>

          <div>
            <h3 className='mb-4 text-[var(--headLine-text)] font-bold'>
            Company
            </h3>
            <div className='flex flex-col gap-4 text-[var(--text-sub-color)]'>
              <div className='hover:text-[var(--primary-900)] cursor-pointer'>Home</div>
              <div className='hover:text-[var(--primary-900)] cursor-pointer'>Terms</div>
              <div className='hover:text-[var(--primary-900)] cursor-pointer'>Privacy</div>
            </div>
          </div>

          {/* contact support */}
          <div>
            <h3 className='mb-4 text-[var(--headLine-text)] font-bold'>
            Contact Support
            </h3>
            <div className='flex flex-col gap-4 text-[var(--text-sub-color)]'>

              <div className='flex items-center justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>01003309356</div>
              </div>

              <div className='flex items-center justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>01024228747</div>
              </div>

              <div className='flex items-center justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>01021711520</div>
              </div>

            </div>
          </div>

        </div>
      </div>


      <div className='items-center flex gap-5 lg:flex-row flex-col justify-between border-[var(--bg-gray)] pt-6'>

        {/* LOGO */}
        <div className="flex items-center gap-3">
            <div className="bg-[var(--primary-color)] p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-[var(--headLine-text)] tracking-tight
            flex flex-col">
              SETUP {" "}<span className="text-[var(--primary-color)]">ACADEMY</span>
            </h1>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Setup Academy. All rights reserved.
        </p>
      </div>
        
    </footer>
  );
}
 