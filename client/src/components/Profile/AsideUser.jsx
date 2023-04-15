import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import MyData from './MyData'
import Favorites from './Favorites'

export default function AsideUser() {
  let userAuth0 = useSelector((state)=>state.userAuth0)

  let { option } = useParams()

  let [category, setCategory] = useState(option != undefined? option : "myData")
  console.log(category);


  let classNameSelect = (option)=>{
    if(option === category){
      return " hover:bg-blanco hover:text-oscuro"
    }else{
      return ""
    }

  }

  let changeSelect = (option)=>{
    console.log(option);
    setCategory(option)
  }

  useEffect(()=>{
    setCategory(option? option : "myData")
  }, [option])

  return (
  <div className='container mx-auto min-h-[100vh]'>
    <div className='w-full h-12  py-0 px-4 bg-oscuro'>
      <div className='relative h-full flex flex-row items-center justify-center md:justify-start  text-blanco overflow-hidden'>

        <div 
        onClick={()=>changeSelect("myData")} 
        className={`relative ${category == "myData"? "text-oscuro bg-blanco" : ""} top-2 mx-2 pt-1 pb-2 px-3 rounded-t cursor-pointer hover:bg-blanco hover:text-oscuro`}>
          My data
        </div>

        <div 
        onClick={()=>changeSelect("favorites")} 
        className={`relative ${category == "favorites"? "text-oscuro bg-blanco" : ""} top-2 mx-2 pt-1 pb-2 px-3 rounded-t cursor-pointer hover:bg-blanco hover:text-oscuro`}>
          Favorites
        </div>

        <div 
        onClick={()=>changeSelect("purchased")} 
        className={`relative ${category == "purchased"? "text-oscuro bg-blanco" : ""} top-2 mx-2 pt-1 pb-2 px-3 rounded-t cursor-pointer hover:bg-blanco hover:text-oscuro`}>
          purchased
        </div>




      </div>
    </div>

    <div className='w-full min-h-[600px] mt-0 bg-fondo border-t-[2px] border-blanco rounded-lg px-4'>

      {category === "myData"?(
        <MyData/>
      ):<></>}

      {category === "favorites"?(
        <Favorites/>
      ):<></>}


    </div>


  </div>

  )
}
