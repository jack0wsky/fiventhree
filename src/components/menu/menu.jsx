import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { MenuWrapper, SocialMedia, SMItem, Ahref } from './menu.styled'
import { useSelector } from 'react-redux'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import { colors } from '../../theme'

const Menu = () => {
  const toggleMenu = useSelector((state) => state.handleMenu)
  return (
    <MenuWrapper toggle={toggleMenu}>
      <AniLink
        cover
        bg={colors.darkRed}
        to="/products"
        activeStyle={{ color: colors.darkRed }}
      >
        Produkty
      </AniLink>
      <AniLink
        cover
        bg={colors.darkRed}
        to="/contact"
        activeStyle={{ color: colors.darkRed }}
      >
        Kontakt
      </AniLink>
      <SocialMedia>
        <Ahref href="https://www.facebook.com/fiventhree/" target="_blank">
          <SMItem src={facebook} />
        </Ahref>
        <Ahref
          href="https://www.instagram.com/fiventhree_clothing/"
          target="_blank"
        >
          <SMItem src={instagram} />
        </Ahref>
      </SocialMedia>
    </MenuWrapper>
  )
}

export default Menu
