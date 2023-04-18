import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../../extras/Spinner' 
import CardVideogamesFavorite from './CardVideogamesFavorite'


export default function FavoriteVideogames({isLoadingVideogame, setIsLoadingVideogame}) {
  let favorites = useSelector(state=>state.allFavorites)
  let userLogin = useSelector(state=>state.userAuth0) 

  let totalFavorites = ""
  if(favorites?.totalCount && favorites.totalCount > 0){
    totalFavorites = `${favorites.totalCount} favorites`
  }else{
    totalFavorites = ""
  }

  useEffect(()=>{
    if(favorites.result?.length){
      setIsLoadingVideogame(false)
    }
  }, [favorites])

  return (
    <div className='flex flex-col justify-start items-center   pb-[40px] rounded-none
    md:rounded-md md:bg-fondo'>

      <p  id="ContainerVideogames" className='font-primary w-full text-blanco text-2xl pb-2 mr-2 text-start pl-6 pt-1
      md:pt-4 md:text-left md:px-10'>{totalFavorites}</p>

      <div className='flex flex-row flex-wrap justify-around min-h-[600px] box-border h-auto w-auto'>
        {isLoadingVideogame? (
          <div className='w-full pt-40'>
            <Spinner/>
          </div>
        ):(
          favorites.result?.length > 0? favorites.result.map((vid, ind)=>{
            return <CardVideogamesFavorite
              key={ind}
              idUser={userLogin.id}
              props={vid}
              favorites={favorites}
            />
          }):(
              <div className='w-full pt-40'>
                <h2 className='font-primary font-semibold text-3xl'>Sin resultados</h2> 
              </div>
            )
        )}


      </div>  




    </div>

  )
}
