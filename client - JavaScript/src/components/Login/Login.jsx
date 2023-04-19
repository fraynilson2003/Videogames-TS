import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { login } from '../../helpers/useLoginStorage'

export default function Login({ classN }) {

    const { loginWithRedirect } = useAuth0()

  return (
    <div className={classN} onClick={()=>loginWithRedirect()}>
        Login
    </div>
  )
}