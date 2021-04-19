import React from 'react'
import { Grid, Image, Link, Title } from './styles'

const exampleFavs = [
  {
    id: 0,
    categoryId: 2,
    src: 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png',
    userId: 100,
    likes: 7
  },
  {
    id: 1,
    categoryId: 1,
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    userId: 1,
    likes: 45
  },
  {
    id: 15,
    categoryId: 4,
    src: 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    userId: 1,
    likes: 1
  }
]

export const FavsList = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Grid>

        {
          exampleFavs.map(fav =>
            <Link key={fav.id} href={`/detail/${fav.id}`}>
              <Image src={fav.src} />
            </Link>)
        }
      </Grid>
    </>
  )
}
