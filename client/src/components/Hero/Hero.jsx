import React, { useEffect } from 'react'
import portada from "../assets/png-clipart-shuriken-ninja-ninjutsu-ninja-star-game-cdr.png"
import Filter from './Filter/Filter'
import { useDispatch } from 'react-redux'
import { getAllGenders } from '../../redux/actions/actions'

export default function Hero() {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllGenders())
  },[])
  return (
    <div className="flex flex-col md:flex-row h-screen w-[100%] pad-x text-blanco">
      <Filter/>

      <div className='flex-1 bg-oscuro h-[700px] w-[250px] mar-vid rounded'>
        Videogames
      </div>
    </div>
  )
}
