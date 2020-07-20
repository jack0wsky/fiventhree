import React from 'react'
import { MenuWrapper } from './menu.styled'
import { useSelector } from 'react-redux'

const Menu = () => {
  const toggleMenu = useSelector((state) => state.toggleMenu)
  return (
    <MenuWrapper toggle={toggleMenu}>
      <p>menu</p>
    </MenuWrapper>
  )
}

export default Menu
