import React from 'react'
import { PhotoCard } from '../PhotoCard/index'

export const PhotoCardsList = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(id => <PhotoCard key={id} />)
      }
    </ul>
  )
}
