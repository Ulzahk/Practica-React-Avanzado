import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = (props) => {
  return (
    <PhotoCardWithQuery id={props.match.params.detailId} />
  )
}
