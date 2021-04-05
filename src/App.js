import React from 'react'
import { CategoriesList } from './components/CategoriesList/index'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCardsList } from './components/PhotoCardsList'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <CategoriesList />
      <PhotoCardsList />
    </div>
  )
}
