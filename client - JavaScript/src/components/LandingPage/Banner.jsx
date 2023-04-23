import React from 'react'
import { NavLink } from 'react-router-dom'
import fondoIMG from "../../assets/fondo.jpg"

export default function Banner() {
  return (
    <div className='relative flex flex-col overflow-hidden min-h-screen max-w-[1920px] max-h-[1200px]'>

        <div className='w-full h-screen max-h-screen object-cover'>
          <img
            className="w-full h-full object-cover backdrop-blur-[1px] brightness-50 select-none z-10"
            src={fondoIMG}/>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className='max-w-[600px] '>
            <h1 className='text-6xl font-semibold text-center text-blanco font-primary'>TundraWolf TS</h1>
            <div className='flex flex-row justify-center text-blanco'>

            <NavLink to={"/home"}>
              <div className='w-[100px] text-center mx-6 mt-6 mb-3 text-xl px-4 py-2 bg-rojo/80 rounded-lg cursor-pointer'>
                Go App
              </div>
            </NavLink>

              <div className='w-[100px] text-center mx-6 mt-6 mb-3 text-xl px-4 py-2 bg-rojo/80 rounded-lg cursor-pointer'>
                Api
              </div>

            </div>
          </div>
        </div>

    </div>
  )
}
