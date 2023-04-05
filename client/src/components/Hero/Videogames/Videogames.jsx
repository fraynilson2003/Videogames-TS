import Paginado from './Paginado'
import ContainerVideogames from './ContainerVideogames/ContainerVideogames'
import { useState } from 'react'


export default function Videogames({isLoadingVideogame, setIsLoadingVideogame}) {


  return (
    <div className='felx flex-col flex-1 bg-oscuro  h-auto mar-vid md:mx-3 md:rounded
    xl:ml-2 xl:mx-auto'>
        <ContainerVideogames
        isLoadingVideogame={isLoadingVideogame}
        setIsLoadingVideogame={setIsLoadingVideogame}/>

    </div>
  )
}
