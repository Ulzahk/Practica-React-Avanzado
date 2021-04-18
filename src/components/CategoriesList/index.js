import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { categories as mockCategories } from '../../../api/db.json'
import { List, Item } from './styles'

// Custom Hook
/* const useCategoriesData = () => {
  //Loading
  const [loading, setLoading] = useState()
  const [categories, setCategories] = useState(mockCategories)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://practica-react-avanzado-2ebifnw4j-ulzahk.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
} */

export const CategoriesList = () => {
  // Using Custom Hook
  /* const { categories, loading } = useCategoriesData()  */ 
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
    <List fixed={fixed}>
      {
        // loading ? <Item key='loading' /> :
        categories.map(
          (category) =>
            <Item key={category.id}>
              <Category {...category} path={`/?category=${category.id}`} />
            </Item>
        )
      }
    </List>
  )

  // Using loading state when we are fetching the Data
  /* if (loading) {
    return 'Cargando...'
  } */

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
