import { NavLink } from 'react-router-dom'
import DataDev from '../Filter/DataDev'
import ContainerVideogames from './ContainerVideogames/ContainerVideogames'

export default function Videogames({isLoadingVideogame, setIsLoadingVideogame}) {


  return (
    <div className='flex flex-col rounded-none flex-1 bg-oscuro  h-auto mar-vid  
    md:rounded-md  md:mr-3 md:ml-4 xl:ml-4 xl:mx-auto'>
      
      <ContainerVideogames
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>

      <div className='w-full block md:hidden '>
        <DataDev/>
      </div>

    </div>
  )
}
