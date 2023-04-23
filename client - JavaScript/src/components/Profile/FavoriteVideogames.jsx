import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../extras/Spinner' 
import CardVideogamesFavorite from './CardVideogamesFavorite'
import { putReduxNotify } from '../../redux/actions/actionState'


export default function FavoriteVideogames({isLoadingVideogame, setIsLoadingVideogame}) {
  let dispatch = useDispatch()
  let favorites = useSelector(state=>state.allFavorites)
  let userLogin = useSelector(state=>state.userAuth0) 


  useEffect(()=>{
    if(favorites.result){
      setIsLoadingVideogame(false)
    }
  }, [favorites])

  useEffect(()=>{
    dispatch(putReduxNotify(0))
  }, [])

  return (
    <div className='flex flex-col justify-start items-center   pb-[40px] rounded-none
    md:rounded-md md:bg-fondo'>

      <p  id="ContainerVideogames" className='font-primary w-full text-blanco text-2xl pb-2 mr-2 text-start pl-6 pt-1
      md:pt-4 md:text-left md:px-10'>{favorites.result?.length?  `${favorites.result?.length} favorites` : "... "}</p>

      <div className='flex flex-row flex-wrap justify-around min-h-[600px] box-border h-auto w-auto'>
        {isLoadingVideogame? (
          <div className='w-full pt-40'>
            <Spinner/>
          </div>
        ):<></>}

        {!isLoadingVideogame && favorites.result?.length > 0? (favorites.result.map((vid, ind)=>{
            return <CardVideogamesFavorite
              key={ind}
              idUser={userLogin.id}
              props={vid}
              favorites={favorites}
            />
          }
        )): <></>}

        {!isLoadingVideogame && !favorites.result?.length > 0? (
          <div className='w-full pt-40'>
            <h2 className='font-primary font-semibold text-3xl text-blanco'>no favorites</h2> 
          </div>
        ):<></>}

      </div>  




    </div>

  )
}
