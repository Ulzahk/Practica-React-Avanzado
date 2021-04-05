import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { categories as mockCategories } from '../../../api/db.json'
import { List, Item } from './styles'

export const CategoriesList = () => {
  const [categories, setCategories] = useState(mockCategories)
  const [showFixed, setShowFixed] = useState(false)

  // useEffect(() => {
  //   window.fetch('https://practica-react-avanzado-2ebifnw4j-ulzahk.vercel.app/categories')
  //     .then(res => res.json())
  //     .then(response => {
  //       setCategories(response)
  //     })
  // }, [])

  // useEffect(() => {
  //   let ignore = false

  //   async function fetchData () {
  //     const req = await window.fetch(
  //       `https://petgram-app-server-ln46kf2xq.now.sh/categories`,
  //     );
  //     const res = await req.json()
  //     if (!ignore) setCategories(res)
  //   }

  //   fetchData()
  //   return () => {
  //     ignore = true
  //   }
  // }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 180
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(
          (category) =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>
        )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
