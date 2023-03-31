import React from 'react'
import Paginado from './Paginado'
import ContainerVideogames from './ContainerVideogames/ContainerVideogames'

export default function Videogames() {



  return (
    <div className='felx flex-col flex-1 bg-oscuro h-[700px] mar-vid rounded md:ml-2'>

      <ContainerVideogames/>
      <Paginado/>

    </div>
  )
}
