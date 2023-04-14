import React, { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardVideogames from './CardVideogames'
import Paginado from '../Paginado'
import Spinner from '../../../../extras/Spinner'
import { getAllVideogames } from '../../../../redux/actions/actions'

let CardVideogame = lazy(()=>import('./CardVideogames'))

export default function ContainerVideogames({isLoadingVideogame, setIsLoadingVideogame}) {
  let favorites = useSelector(state=>state.allFavorites)
  let idFavorites = favorites.map(ele=>ele.id)


  let dispatch = useDispatch()
  let videogames = useSelector(state =>state.allVideogames)

  let totalVideogames = ""
  if(videogames?.TotalCount && videogames.TotalCount > 0){
    totalVideogames = `|    ${videogames.TotalCount} resultados`
  }else{
    totalVideogames = ""
  }

  useEffect(()=>{
    if(videogames.result?.length){
      //setIsLoadingVideogame(false)
    }else{
      setIsLoadingVideogame(true)
      let res = getAllVideogames().then((res)=>{
        dispatch(res)
        setIsLoadingVideogame(false)
      }).catch(err=>{
        alert(err)
      })
    }


  }, [])

  return (
    <div className='flex flex-col justify-start items-center   pb-[40px] rounded-none
    md:rounded-md md:bg-fondo'>

      <p  id="ContainerVideogames" className='font-primary text-2xl pb-2 mr-2 text-start pl-6 pt-1
      md:pt-4'>Videogoames <span className='font-semibold text-2xl '>{`${totalVideogames}`}</span> </p>

      <Paginado
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>

      <div className='flex flex-row flex-wrap justify-around min-h-[600px] box-border h-auto w-auto'>
        {isLoadingVideogame? (
          <div className='w-full pt-40'>
            <Spinner/>
          </div>
        ):(
          videogames.result?.length > 0? videogames.result.map((vid, ind)=>{
            let active = idFavorites.includes(vid.id)

            return <CardVideogames
              key={ind}
              props={vid}
              favorites={favorites}
              active={active}
            />
          }):(
              <div className='w-full pt-40'>
                <h2 className='font-primary font-semibold text-3xl'>Sin resultados</h2> 
              </div>
            )
        )}


      </div>  

      <Paginado
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>


    </div>

  )
}
