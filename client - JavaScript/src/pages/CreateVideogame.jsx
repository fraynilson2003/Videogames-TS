import React, { useEffect } from 'react'
import FormVideogame from '../forms/FormVideogame'
import { NavLink } from 'react-router-dom'
import { getAllGenders } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'
import Home from './Home'

export default function CreateVideogame() {

  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllGenders())
  },[])
  return (
    <div className='bg-oscuro'>
    <div className="hidden">
      <Home/>
    </div>
    <div className='flex  w-full  min-w-full h-full min-h-[100vh] pb-10'>

      <div className='container'>
        <div className='flex  justify-start w-full  mt-2 px-5' >
          <NavLink to={`/home`} className='mt-4 w-[65px] text-center px-2 py-1 bg-amarillo/90 text-oscuro font-bold text-base font-primary rounded-sm cursor-pointer
          hover:bg-amarillo '>
            Home
          </NavLink>
        </div>

      <FormVideogame></FormVideogame>

      </div>

    </div>
    </div>

  )
}
