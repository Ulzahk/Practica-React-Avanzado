import React, { useState } from 'react'
import { PhotoCard } from '../components/PhotoCard'
import db from '../../api/db.json'

export const PhotoCardWithQuery = ({ id }) => {
  const [photos] = useState(db.photos)
  // const [loading, setLoading] = useState() Loading
  const [photoFiltered] = useState(photos.find(photo => {
    return photo.id === parseInt(id)
  }))

  return (
    <PhotoCard {...photoFiltered} />
  )
}
