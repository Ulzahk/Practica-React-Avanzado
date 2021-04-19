import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
// import { UserContext } from '../hooks/UserContext'

export const NotRegisterUser = () => {
  const isAuth = window.localStorage.getItem('isLogged')

  const logInFunction = () => {
    window.localStorage.setItem('isLogged', 'loggedIn')
    window.location.reload()
  }

  const logOutFunction = () => {
    window.localStorage.setItem('isLogged', 'loggedOut')
    window.location.reload()
  }

  if (isAuth !== 'loggedIn') {
    return (
      <>
        <UserForm onSubmit={logInFunction} title='Registrarse' />
        <UserForm onSubmit={logInFunction} title='Iniciar Sesión' />
      </>
    )
  }

  return (
    <button onClick={logOutFunction}>Cerrar Sesión</button>
  )
}
