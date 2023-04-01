import React from 'react'
import Paginado from './Paginado'
import ContainerVideogames from './ContainerVideogames/ContainerVideogames'

export default function Videogames() {



  return (
    <div className='felx flex-col flex-1 bg-oscuro h-[700px] mar-vid mx-3 rounded
    xl:ml-2 xl:mx-auto'>

      <ContainerVideogames/>
      <Paginado/>

    </div>
  )
}
