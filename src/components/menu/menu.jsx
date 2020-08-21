import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {
  MenuWrapper,
  SocialMedia,
  SMItem,
  Ahref,
  LinkButton,
} from './menu.styled'
import { useSelector, useDispatch } from 'react-redux'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import { colors } from '../../theme'
import { toggleMenu } from '../../actions/toggleMenu'

const Menu = () => {
  const toggleMenuState = useSelector((state) => state.handleMenu)
  const dispatch = useDispatch()
  return (
    <MenuWrapper toggle={toggleMenuState}>
      <AniLink
        cover
        bg={colors.darkRed}
        to="/products"
        activeStyle={{ color: colors.darkRed }}
      >
        <LinkButton onClick={() => dispatch(toggleMenu())}>Produkty</LinkButton>
      </AniLink>
      <AniLink
        cover
        bg={colors.darkRed}
        to="/contact"
        activeStyle={{ color: colors.darkRed }}
      >
        <LinkButton onClick={() => dispatch(toggleMenu())}>Kontakt</LinkButton>
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
