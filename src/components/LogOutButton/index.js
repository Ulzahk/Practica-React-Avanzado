import React from 'react'
import { Form, Button, Title} from './styles'
export const LogOutButton = ({ title }) => {
  const logOutFunction = () => {
    window.localStorage.setItem('isLogged', 'loggedOut')
    window.location.reload()
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={logOutFunction}>
        <Button>Cerrar Sesión</Button>
      </Form>
    </>
  )
}
