import React, { useState, useCallback } from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { List } from './styles'
import db from '../../../api/db.json'

export const PhotoCardsList = ({ categoryId }) => {
  const [photos] = useState(db.photos)
  const [categoryData] = useState(JSON.stringify(categoryId))
  console.log(categoryData.length)

  // const forceUpdate = () => {
  //   const [, setTick] = useState(0)
  //   const update = useCallback(() => {
  //     setTick(tick => tick + 1)
  //   }, [])
  //   return update
  // }

  // if (categoryId !== 10) {
  //   forceUpdate()
  // }

  return (
    <List>
      {
        // eslint-disable-next-line use-isnan
        categoryData.length === 4
          ? photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
          // : photosFiltered.map(photo => <PhotoCard key={photo.id} {...photo} />)
          : photos
            .filter(photo => photo.categoryId === categoryId)
            .map(filteredPhoto => <PhotoCard key={filteredPhoto.id} {...filteredPhoto} />)
      }
    </List>
  )
}
