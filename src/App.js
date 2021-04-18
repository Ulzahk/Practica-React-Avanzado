/* eslint-disable react/jsx-indent */
import React from 'react'
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        {
          detailId
            ? <PhotoCardWithQuery id={detailId} />
            : <Route exact path='/' component={Home} />
        }
        <Route path='/pet/:id' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
