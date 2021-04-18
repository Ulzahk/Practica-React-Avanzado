import React, { useState } from 'react'
import { PhotoCardsList } from '../components/PhotoCardsList'
import { CategoriesList } from '../components/CategoriesList/index'

export const Home = () => {
  const [categoryId, setCategoryId] = useState()
  const urlParams = new window.URLSearchParams(window.location.search)
  const categeryData = urlParams.get('category')
  if (categoryId === undefined) {
    const urlData = urlParams.get('category')
    setCategoryId(urlData)
  }
  return (
    <>
      <CategoriesList />
      <PhotoCardsList
        categoryId={categeryData !== null ? parseInt(categoryId) : 0}
      />
    </>
  )
}
