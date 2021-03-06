/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react'
import { UserContext } from './hooks/UserContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { Detail } from './pages/Details'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'

// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }

export const App = () => {
  const [isAuth, setIsAuth] = useState()

  // using LocalStorage because we don't have Link component
  const isLogged = window.localStorage.getItem('isLogged')

  if (isLogged === null) {
    window.localStorage.setItem('isLogged', 'initializing')
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isAuth, setIsAuth }}>
        <GlobalStyle />
        <Logo />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pet/:categoryId' component={Home} />
          <Route path='/detail/:detailId' component={Detail} />
          {
            isLogged === 'loggedIn'
              ? <>
                  <Route exact path='/favs' component={Favs} />
                  <Route exact path='/user' component={User} />
                </>
              : <>
                  <Route exact path='/favs' component={NotRegisterUser} />
                  <Route exact path='/user' component={NotRegisterUser} />
                </>
          }
        </Switch>
        <NavBar />
      </UserContext.Provider>
    </BrowserRouter>
  )
}
