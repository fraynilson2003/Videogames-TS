import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Login({ userInfo, isLogin }) {

  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0()
  
  useEffect(()=>{
    if(isAuthenticated){
      window.localStorage.removeItem("userStorage");
      window.localStorage.setItem("userStorage", JSON.stringify({
        name: user.name,
        email: user.email,
        imagePerfil: user.picture
      }));
    }
  }, [isAuthenticated])


  return (
    <div className='text-blanco'>
      <button onClick={()=>loginWithRedirect()}>
        Login
      </button>

      {isLogin? (
        <div>
          Autenticado
          <img src={userInfo.picture} alt="" />
          <h2>{userInfo.name}</h2>
          <p>{userInfo.email}</p>
        </div>
      ):<></>}

      {isAuthenticated && isLoading? (
        <div>Cargando...</div>
      ):<></>}
      {/* profile */}

      

    </div>
  )
}
