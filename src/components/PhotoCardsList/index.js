import React, { useState, useEffect } from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List } from './styles'
import db from '../../../api/db.json'

export const PhotoCardsList = ({ categoryId = 0 }) => {
  const [photos] = useState(db.photos)
  const [photosFiltered, setPhotosFiltered] = useState([])

  if (categoryId !== 0 && photosFiltered.length === 0) {
    const filteredPhotos = photos.filter(photo => {
      return photo.categoryId === categoryId
    })
    setPhotosFiltered(filteredPhotos)
  }

  return (
    <List>
      {
        photosFiltered.length !== 0
          ? photosFiltered.map(photo => <PhotoCard key={photo.id} {...photo} />)
          : photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </List>
  )
}
