import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List } from './styles'

export const PhotoCardsList = () => {
  return (
    <List>
      {
        [1, 2, 3].map(id => <PhotoCard key={id} />)
      }
    </List>
  )
}
