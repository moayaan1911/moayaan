/** @format */

'use client';
import { cn } from '@/lib/utils';
import details from '@/lib/details.json';

export function Background() {
  return (
    <div className='md:w-3/5 mx-auto md:block hidden mb-20'>
      <div
        className={cn(
          'group w-full overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800',
          'bg-[url(https://assets-global.website-files.com/5e0ac69bad6badc677c5db21/61148543cf584a23e24debfc_ezgif.com-gif-maker.gif)] bg-cover',
          // Preload hover image by setting it in a pseudo-element
          'before:bg-[url(https://assets-global.website-files.com/5e0ac69bad6badc677c5db21/61148543cf584a23e24debfc_ezgif.com-gif-maker.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]',
          'hover:bg-[url(https://assets-global.website-files.com/5e0ac69bad6badc677c5db21/61148691fa744a032476d9c5_ezgif.com-gif-maker.gif)]',
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          'transition-all duration-500'
        )}>
        <div className='text relative z-50'>
          <h1 className='font-bold text-xl md:text-3xl text-red-400 relative text-center group-hover:hidden'>
            {details.connect.title}
          </h1>
          <div className='hidden group-hover:block'>
            <h1 className='font-bold text-xl md:text-3xl text-gray-50 relative text-center'>
              {details.connect.hover}
            </h1>
            <p className='font-normal text-center text-base text-gray-50 relative my-4'>
              {details.connect.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
