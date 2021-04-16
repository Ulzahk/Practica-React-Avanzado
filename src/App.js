/* eslint-disable react/jsx-indent */
import React, { Fragment, useState } from 'react'
import { CategoriesList } from './components/CategoriesList/index'
import { GlobalStyle } from './components/styles/GlobalStyles'
import { PhotoCardsList } from './components/PhotoCardsList'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

export const App = () => {
  const [categoryId, setCategoryId] = useState();
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  const categeryData = urlParams.get('category')
  if (categoryId === undefined) {
    const urlData = urlParams.get('category')
    setCategoryId(urlData)
  }

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
              <CategoriesList />
              <PhotoCardsList
                categoryId={categeryData !== null ? parseInt(categoryId) : 1}
              />
            </>
      }
    </div>
  )
}
