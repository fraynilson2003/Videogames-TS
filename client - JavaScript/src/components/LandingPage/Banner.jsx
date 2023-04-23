import React from 'react'
import video from "../../video/5222gaming world Youtube channel - Made with PosterMyWall.mp4"
import { NavLink } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='flex flex-col min-h-screen max-w-[1920px] max-h-[1200px]'>
      <div className="absolute inset-0 backdrop-blur-[1px]">

        <video
          className="w-full h-full object-cover backdrop-blur-[1px] brightness-50 select-none z-10"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          {/* Agrega más elementos source si tu video tiene diferentes formatos */}
        </video>

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
    </div>
  )
}
