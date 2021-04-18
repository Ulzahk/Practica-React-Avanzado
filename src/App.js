/* eslint-disable react/jsx-indent */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    // <div>
    //   <GlobalStyle />
    //   <Logo />
    //   {
    //     detailId
    //       ? <PhotoCardWithQuery id={detailId} />
    //       : <Home />
    //   }
    // </div> 

    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Switch>
        {
          detailId
            ? <PhotoCardWithQuery id={detailId} />
            : <Route exact path='/' component={Home} />
        }
      </Switch>
    </BrowserRouter>
  )
}
