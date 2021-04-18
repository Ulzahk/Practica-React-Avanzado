import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const ICON_SIZE = '26px'

export const NavBar = () => {
  return (
    <Nav>
      <Link href='/'><MdHome size={ICON_SIZE} /></Link>
      <Link href='/favs'><MdFavoriteBorder size={ICON_SIZE} /></Link>
      <Link href='/user'><MdPersonOutline size={ICON_SIZE} /></Link>
    </Nav>
  )
}
