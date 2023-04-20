import React from 'react'

export default function LoadingCard() {

  return (
    <div className="card my-2 mx-2 flex-auto w-auto h-[330px] max-h-[330px] max-w-[300px] min-w-[300px]  text-blanco bg-gris shadow-xl
    md:my-3 md:mx-3 sm:my-2 sm:mx-2 rounded-md md:max-w-[280px] md:min-w-[280px]">

      <div role="status" class="max-w-sm min-h-[320px] p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
          <div class="flex items-center justify-center h-[180px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
          </div>

          <div class="w-[40%]  my-2 bg-blanco h-3 rounded-xl"></div>
          <div class="w-[100%] mx-auto my-2 bg-blanco h-2 rounded-xl"></div>
          <div class="w-[100%] mx-auto my-2 bg-blanco h-2 rounded-xl"></div>

          <div className='flex flex-row justify-end'>
            <div class="w-[40px]  my-2 bg-blanco h-2 rounded-xl"></div>
            <div class="w-[40px] ml-4 my-2 bg-blanco h-2 rounded-xl"></div>
 
          </div>


      </div>
    </div>
  )
}


