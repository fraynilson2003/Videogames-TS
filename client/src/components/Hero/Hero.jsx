import { useEffect, useState } from 'react'
import portada from "../assets/png-clipart-shuriken-ninja-ninjutsu-ninja-star-game-cdr.png"
import Filter from './Filter/Filter'
import { useDispatch } from 'react-redux'
import { getAllGenders } from '../../redux/actions/actions'
import Videogames from './Videogames/Videogames'

export default function Hero() {
  let [isLoadingVideogame, setIsLoadingVideogame] = useState(true)


  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllGenders())
  },[])
  return (
    <div className="flex flex-col md:flex-row h-screen container mx-auto text-blanco">
      <Filter
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>

      <Videogames
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>

    </div>
  )
}
