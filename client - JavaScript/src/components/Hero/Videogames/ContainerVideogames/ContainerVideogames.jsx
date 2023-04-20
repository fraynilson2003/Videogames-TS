import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardVideogames from './CardVideogames'
import Paginado from '../Paginado'
import Spinner from '../../../../extras/Spinner'
import { getAllVideogames } from '../../../../redux/actions/actions'


export default function ContainerVideogames({isLoadingVideogame, setIsLoadingVideogame}) {
  let userLogin = useSelector(state=>state.userAuth0) 
  let favorites = useSelector(state=>state.allFavorites)

  let dispatch = useDispatch()
  let videogames = useSelector(state =>state.allVideogames)

  let totalVideogames = ""
  if(videogames?.TotalCount && videogames.TotalCount > 0){
    totalVideogames = `|    ${videogames.TotalCount} results found`
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

      <p  id="ContainerVideogames" className='w-full justify-center md:justify-start font-primary text-2xl pb-2 mr-2 text-start pl-6 pt-1
      md:pt-4'>Videogames <span className='font-semibold text-2xl '>{`${totalVideogames}`}</span> </p>

      <Paginado
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>

      <div className='flex flex-row flex-wrap justify-around min-h-[600px] box-border h-auto w-auto'>
        {isLoadingVideogame? (
          <div className='w-full pt-40'>
            <Spinner/>
          </div>
        ):<></>}
        
        {!isLoadingVideogame && favorites.status && videogames.result?.length > 0? (videogames.result.map((vid, ind)=>{
          let active = favorites.result?.map(ele=>ele.id).includes(vid.id)

          return <CardVideogames
            key={ind}
            idUser={userLogin.id}
            props={vid}
            favorites={favorites}
            active={active}
          />
        })):<></> }

        {!isLoadingVideogame && !favorites.status && videogames.result?.length > 0? (videogames.result.map((vid, ind)=>{
          return <CardVideogames
          key={ind}
          idUser={userLogin.id}
          props={vid}
          favorites={favorites}
          active={false}
        />}          
        )):<></>}
      
        {!isLoadingVideogame && !videogames.result?.length > 0? (
          <div className='w-full pt-40'>
            <h2 className='font-primary font-semibold text-3xl'>Sin resultados</h2> 
          </div>
        ):<></>}



      </div>  

      <Paginado
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>


    </div>

  )
}
