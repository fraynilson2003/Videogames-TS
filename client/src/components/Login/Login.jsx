import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { login } from '../../helpers/useLoginStorage'

export default function Login() {

    const { loginWithRedirect } = useAuth0()

  return (
    <li onClick={()=>loginWithRedirect()} className="text-oscuro">
        <a>Login</a>
    </li>
  )
}