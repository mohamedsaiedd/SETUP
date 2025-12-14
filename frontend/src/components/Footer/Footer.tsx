import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white  px-6 py-4 border-t w-full border-gray-200 mt-auto">
      


      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center w-full justify-around text-sm text-gray-500">

          <div>
            <h3 className='mb-4 text-[var(--headLine-text)] font-bold'>
            Channels
            </h3>
            <div className='flex flex-col gap-4 text-[var(--text-sub-color)]'>
              <div>Facebook</div>
              <div>Instagram</div>
              <div>Youtube</div>
            </div>
          </div>

          <div>
            <h3 className='mb-4 text-[var(--headLine-text)] font-bold'>
            Company
            </h3>
            <div className='flex flex-col gap-4 text-[var(--text-sub-color)]'>
              <div>Home</div>
              <div>Terms</div>
              <div>Privacy</div>
            </div>
          </div>

          {/* contact support */}
          <div>
            <h3 className='mb-4 text-[var(--headLine-text)] font-bold'>
            Contact Support
            </h3>
            <div className='flex flex-col gap-4 text-[var(--text-sub-color)]'>
              <div>01003309356</div>
              <div>01024228747</div>
              <div>01021711520</div>
            </div>
          </div>

        </div>
      </div>


      <div className='items-center flex gap-5 lg:flex-row flex-col justify-between border-t border-[var(--bg-gray)] pt-6'>

        {/* LOGO */}
        <div className="flex items-center gap-3">
            <div className="bg-[var(--primary-color)] p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-[var(--headLine-text)] tracking-tight
            flex flex-col">
              STEPUP {" "}<span className="text-[var(--primary-color)] ml-4">ACADEMY</span>
            </h1>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Stepup Academy. All rights reserved.
        </p>
      </div>
        
    </footer>
  );
}
 