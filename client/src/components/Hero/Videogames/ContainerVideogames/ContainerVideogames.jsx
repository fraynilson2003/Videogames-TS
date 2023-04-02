import React, { useEffect } from 'react'
import CardVideogames from './CardVideogames'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVideogames } from '../../../../redux/actions/actions'

export default function ContainerVideogames() {
  let dispatch = useDispatch()
  let videogames = useSelector(state =>state.allVideogames)
  videogames = videogames.slice(0,15)

  useEffect(()=>{
    dispatch(getAllVideogames())
  }, [])

  return (
    <div className='flex flex-col bg-oscuro h-auto  min-h-[650px] rounded'>

      <h2 className='font-primary text-2xl text-start pl-6 pt-4'>Videogoames</h2>

      <div className='flex  mt-2  flex-row flex-wrap justify-around'>
        {videogames.length && videogames.map((vid)=>
          <CardVideogames
            name={vid.name}
            Genders={vid.Genders}
            img={vid.background_image}
            />
        )}
      </div>  

    </div>

  )
}
