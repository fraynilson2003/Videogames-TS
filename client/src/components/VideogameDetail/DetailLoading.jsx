import React from 'react'

export function DetailLoading() {
  return (
    <div className="flex justify-center w-full mx-auto items-center  mt-5  text-blanco border h-[200px]  min-h-[200px] max-w-[350px] min-w-[320px] overflow-hidden rounded-sm
    md:w-[550px] md:h-[350px] md:min-w-[550px] md:min-h-[350px] md:max-w-[550px] md:max-h-[350px] md:mx-0 ">

        <div class="flex animate-pulse items-center justify-center h-[180px] mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg class="text-center w-12 h-12 md:w-20 my-auto  text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
        </div>
    </div>
  )
}

export function DetailPLoading(){
  return (
    <div className='w-full animate-pulse h-auto mt-5 px-5 text-blanco bg-oscuro'>
      <div className='w-40 mx-auto my-5 h-3 bg-blanco rounded-lg 
      md:h-4 md:w-55 md:mb-10  '></div>

      <div className='my-3 h-2 bg-blanco rounded-lg'></div>
      <div className='my-3 h-2 bg-blanco rounded-lg'></div>
      <div className='my-3 h-2 bg-blanco rounded-lg'></div>

      <div className='my-3 mb-14  w-[40%] h-2 bg-blanco rounded-lg'></div>

      <div className='w-20 my-5 h-3 bg-blanco rounded-lg'></div>

      <div className='flex flex-col md:flex-row md:flex-wrap justify-center'>
        <div className='my-5 h-10 bg-blanco/90 rounded-lg 
        md:w-[170px] md:h-[120px] md:w-min-[170px] md:h-min-[120px]  md:w-max-[170px] md:h-max-[120px] md:mx-3 md:my-3 md:rounded-lg '></div>
        
        <div className='my-5 h-10 bg-blanco/90 rounded-lg 
        md:w-[170px] md:h-[120px] md:w-min-[170px] md:h-min-[120px]  md:w-max-[170px] md:h-max-[120px] md:mx-3 md:my-3 md:rounded-lg '></div>
        
        <div className='my-5 h-10 bg-blanco/90 rounded-lg 
        md:w-[170px] md:h-[120px] md:w-min-[170px] md:h-min-[120px]  md:w-max-[170px] md:h-max-[120px] md:mx-3 md:my-3 md:rounded-lg '></div>
        
      </div>




      {/* <div className='mt-3 h-auto'>
        <h2 className='text-start text-xl'>Genders</h2>
        {detailVid.Genders?.length? (detailVid.Genders.map((g)=>
          <div className='relative my-5 rounded-lg overflow-hidden w-[100%] h-[120px]  
          group group-hover:bg-oscuro/50'>
            
            <img className='flex justify-center items-center absolute object-cover 
            group-hover:scale-125 transition-all duration-400'
              src={g.image_background} alt={g.name} />

            <h2 className='absolute w-full text-center top-[70%] font-semibold 
            text-shadow-sm'>{g.name}</h2>
          </div>
        )):<></>}
      </div> */}
    </div>
  )
}
