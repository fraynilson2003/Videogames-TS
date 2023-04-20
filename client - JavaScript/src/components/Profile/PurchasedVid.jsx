import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPurchased from './CardPurchased'
import Spinner from '../../extras/Spinner'
import { getPurchasedVideogames } from '../../redux/actions/userAction'

export default function PurchasedVid() {
  let dispatch = useDispatch()
  let [isLoadingVideogame, setIsLoadingVideogame] = useState(true)


  let userLogin = useSelector(state=>state.userAuth0) 
  let allPurchaseds = useSelector(state=>state.allPurchaseds) 
  let favorites = useSelector(state=>state.allFavorites)

  useEffect(()=>{
    getPurchasedVideogames(userLogin.id)
    .then(res=>{
      setIsLoadingVideogame(false)
      dispatch(res)
    }).catch(err=>{
      alert(err)
    })
  }, [userLogin])
  return (
    <div className='flex flex-col justify-start items-center   pb-[40px] rounded-none
    md:rounded-md md:bg-fondo'>

      <p  id="ContainerVideogames" className='font-primary w-full text-blanco text-2xl pb-2 mr-2 text-start pl-6 pt-1
      md:pt-4 md:text-left md:px-10'>Videogame {allPurchaseds.totalCount} </p>

       <div className='flex flex-row w-full flex-wrap justify-around min-h-[600px] box-border h-auto'>
       {isLoadingVideogame? (
          <div className='w-full pt-40'>
            <Spinner/>
          </div>
        ):<></>}

        {!isLoadingVideogame && allPurchaseds.videogames?.length > 0 && favorites.status? (allPurchaseds.videogames?.map((vid, ind)=>{
          let active = favorites.result?.map(ele=>ele.id).includes(vid.id)

            return <CardPurchased
              key={ind}
              idUser={userLogin.id}
              props={vid}
              favorites={favorites}
              active={active}
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
