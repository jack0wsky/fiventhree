import React from 'react'
import { Link } from 'gatsby'
import { MenuWrapper, SocialMedia, SMItem, Ahref } from './menu.styled'
import { useSelector } from 'react-redux'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

const Menu = () => {
  const toggleMenu = useSelector((state) => state.handleMenu)
  return (
    <MenuWrapper toggle={toggleMenu}>
      <Link to="/produkty">Produkty</Link>
      <Link to="/kontakt">Kontakt</Link>
      <SocialMedia>
        <Ahref href="#" target="_blank">
          <SMItem src={facebook} />
        </Ahref>
        <Ahref href="#" target="_blank">
          <SMItem src={instagram} />
        </Ahref>
      </SocialMedia>
    </MenuWrapper>
  )
}

export default Menu
