import React, { Fragment, useState } from 'react'
import { PhotoCardsList } from '../components/PhotoCardsList'
import { CategoriesList } from '../components/CategoriesList/index'

export const Home = (props) => {
  const [categoryId] = useState(props.match.params.categoryId)
  return (
    <>
      <CategoriesList />
      <PhotoCardsList
        categoryId={parseInt(categoryId)}
      />
    </>
  )
}
