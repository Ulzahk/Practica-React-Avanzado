import React from 'react'
import { CategoriesList } from './components/CategoriesList/index'
import { GlobalStyle } from './GlobalStyles'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <CategoriesList />
    </div>
  )
}
