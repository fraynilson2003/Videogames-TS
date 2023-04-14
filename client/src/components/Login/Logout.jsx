import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Logout({ classN }) {

  const { logout } = useAuth0()

  return (
      <div className={classN} onClick={()=>{
        window.localStorage.removeItem("userStorage");
        logout({ returnTo: window.location.origin });
      }}>
        Logout
      </div>
  )
}
