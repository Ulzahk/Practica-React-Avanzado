import React, { useContext } from 'react'
import { UserContext } from '../hooks/UserContext'

export const NotRegisterUser = () => {
  const { isAuth, setIsAuth } = useContext(UserContext)
  console.log('isAuth Not Register User', isAuth)
  if (isAuth !== 'loggedIn') {
    return (
      <button onClick={() => setIsAuth('loggedIn')}>Iniciar Sesión</button>
    )
  }
}
