import React from 'react'
import { useSelector } from 'react-redux'

export default function MyData() {
  let userLogin = useSelector(state=>state.userAuth0) 


  return (
    <div className='text-blanco h-full  pt-6'>

      <div className='flex flex-row max-w-[600px] my-1  py-2'>
        <p className='text-lg py-2'>Name: </p>
        <p className='ml-24 text-lg border-b-[2px] border-blanco/50 py-2'>{userLogin.name}</p>
      </div>

      <div className='flex flex-row max-w-[600px] my-1 '>
        <p className='text-lg py-2'>Email: </p>
        <p className='ml-24 text-lg border-b-[2px] border-blanco/50 py-2'>{userLogin.email}</p>
      </div>

      {userLogin.sexo? 
      <div className='flex flex-row max-w-[600px] my-1 py-2'>
        <p className='text-lg py-2'>Sex: </p>
        <p className='ml-24 text-lg border-b-[2px]  border-blanco/50 py-2'>{userLogin.sexo}</p>
      </div>
      :<></>}
      
      {userLogin.edad? 
      <div className='flex flex-row max-w-[600px] my-1 py-2'>
        <p className='text-lg py-2'>Age: </p>
        <p className='ml-24 text-lg border-b-[2px]  border-blanco/50 py-2'>{userLogin.edad}</p>
      </div>
      :<></>}


    </div>
  )
}
