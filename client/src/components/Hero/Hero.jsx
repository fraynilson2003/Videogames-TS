import { useEffect, useState } from 'react'
import portada from "../assets/png-clipart-shuriken-ninja-ninjutsu-ninja-star-game-cdr.png"
import Filter from './Filter/Filter'
import { useDispatch } from 'react-redux'
import { getAllGenders } from '../../redux/actions/actions'
import Videogames from './Videogames/Videogames'

export default function Hero({isLoadingVideogame, setIsLoadingVideogame}) {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllGenders())
  },[])
  return (
    <div className='bg-oscuro '>
      <div className="flex flex-col md:flex-row container bg-oscuro  text-blanco">
          <Filter
          isLoadingVideogame={isLoadingVideogame}
          setIsLoadingVideogame={setIsLoadingVideogame}/>

          <Videogames
          isLoadingVideogame={isLoadingVideogame}
          setIsLoadingVideogame={setIsLoadingVideogame}/>
      </div>
    </div>


  )
}
