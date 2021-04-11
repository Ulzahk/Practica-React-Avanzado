import React from 'react'
import { CategoriesList } from './components/CategoriesList/index'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { PhotoCardsList } from './components/PhotoCardsList'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <CategoriesList />
      <PhotoCardsList categoryId={3} />
    </div>
  )
}
