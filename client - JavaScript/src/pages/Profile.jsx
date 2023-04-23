import React, { useState } from 'react'
import AsideUser from '../components/Profile/AsideUser'
import NavBar from '../components/NavBar/NavBar'

export default function Profile() {
  let [isLoadingVideogame, setIsLoadingVideogame] = useState(false)

  return (
    <>
    <div className='bg-oscuro pb-4 '>

        <NavBar       
          isLoadingVideogame={isLoadingVideogame}
          setIsLoadingVideogame={setIsLoadingVideogame}
          isLoadingImg={false}/>

        <AsideUser/>

    </div>
 
    </>
  
  )
}
