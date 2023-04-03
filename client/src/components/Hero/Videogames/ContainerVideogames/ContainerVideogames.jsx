import React, { useEffect, Suspense, lazy, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVideogames } from '../../../../redux/actions/actions'
import CardVideogames from './CardVideogames'
import LoadingCard from './LoadingCard'
import Paginado from '../Paginado'

let CardVideogame = lazy(()=>import('./CardVideogames'))

export default function ContainerVideogames() {

  let dispatch = useDispatch()
  let videogames = useSelector(state =>state.allVideogames)
  let configFilter = useSelector(state => state.configFilterVideogames)

  useEffect(()=>{
    dispatch(getAllVideogames())
  }, [])


  return (
    <div className='flex flex-col bg-oscuro h-auto  min-h-[650px] rounded'>

      <h2  id="ContainerVideogames" className='font-primary text-2xl pb-2  text-start pl-6 pt-1
      md:pt-4'>Videogoames</h2>

      <Paginado/>

      <div className='flex flex-row flex-wrap min-h-[500px] justify-around'>
        {videogames.result?.length? videogames.result.map((vid, ind)=>
          <CardVideogames
            key={ind}
            name={vid.name}
            Genders={vid.Genders}
            img={vid.background_image}
          />):<></>}
      </div>  

      <Paginado/>


    </div>

  )
}
