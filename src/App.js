/* eslint-disable react/jsx-indent */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Details'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pet/:categoryId' component={Home} />
        <Route path='/detail/:detailId' component={Detail} />
      </Switch>
    </BrowserRouter>
  )
}
