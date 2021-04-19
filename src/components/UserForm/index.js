import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  // Instead of using this ↓
  // const [email, setEmail] = useState('')
  // We use this
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}>
      <input placeholder='Email' {...email} />
      <input placeholder='Password' {...password} />
      <button>Iniciar Sesion</button>
    </form>
  )
}
