import React, { useEffect, Suspense, lazy, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVideogames } from '../../../../redux/actions/actions'
import CardVideogames from './CardVideogames'
import LoadingCard from './LoadingCard'
import Paginado from '../Paginado'
import Spinner from '../../../extras/Spinner'

let CardVideogame = lazy(()=>import('./CardVideogames'))

export default function ContainerVideogames({isLoadingVideogame, setIsLoadingVideogame}) {

  let dispatch = useDispatch()
  let videogames = useSelector(state =>state.allVideogames)
  let configFilter = useSelector(state => state.configFilterVideogames)


  useEffect(()=>{
    setIsLoadingVideogame(true)
    let res = getAllVideogames().then((res)=>{
      dispatch(res)
      setIsLoadingVideogame(false )
    }).catch(err=>{
      alert(err)
    })
  }, [])


  return (
    <div className='flex flex-col bg-oscuro h-auto  min-h-[650px] rounded'>

      <h2  id="ContainerVideogames" className='font-primary text-2xl pb-2  text-start pl-6 pt-1
      md:pt-4'>Videogoames</h2>

      <Paginado
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>

      <div className='flex flex-row flex-wrap min-h-[500px] justify-around'>
        {isLoadingVideogame? (
          <div className='w-full pt-40'>
            <Spinner/>
          </div>
        ):(
          videogames.result?.length > 0? videogames.result.map((vid, ind)=>
            <CardVideogames
              key={ind}
              name={vid.name}
              Genders={vid.Genders}
              img={vid.background_image}
            />):(
              <div className='w-full pt-40'>
                <h2 className='font-primary font-semibold text-3xl'>Sin resultados</h2> 
              </div>
            )
        )}


      </div>  

      <Paginado/>


    </div>

  )
}
