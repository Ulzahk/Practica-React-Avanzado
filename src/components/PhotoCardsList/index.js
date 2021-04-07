import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List } from './styles'

export const PhotoCardsList = () => {
  return (
    <List>
      {
        [1, 2, 3, 4, 5, 6, 7].map(id => <PhotoCard key={id} />)
      }
    </List>
  )
}
