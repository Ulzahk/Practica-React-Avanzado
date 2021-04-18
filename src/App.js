/* eslint-disable react/jsx-indent */
import React from 'react'
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

const isAuth = false

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pet/:categoryId' component={Home} />
        <Route path='/detail/:detailId' component={Detail} />
        {
          isAuth
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
    </BrowserRouter>
  )
}
