import React, { useEffect, useState, useRef } from 'react'
import { Wrapper, Background, Nav } from './header.styled'
import { colors } from '../../theme'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Logo from '../header/logo/logo'
import CartStatus from './cartStatus/cartStatus'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [minify, setMinified] = useState(false)
  const background = useRef()
  useEffect(() => {
    if (window) {
      if (window.location.href.includes('/produkty/')) {
        setMinified(true)
      } else {
        setMinified(false)
      }
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })
    }
  })
  return (
    <Wrapper minify={minify} scrolled={scrolled}>
      <AniLink cover bg={colors.darkRed} to="/">
        <Logo color={'#fff'} height={'10px'} />
      </AniLink>
      <Nav>
        <AniLink
          cover
          bg={'#000000'}
          direction="top"
          to="/produkty"
          activeStyle={{ color: colors.action }}
        >
          Produkty
        </AniLink>
        <AniLink
          cover
          bg={'#000000'}
          direction="top"
          to="/kontakt"
          activeStyle={{ color: colors.action }}
        >
          Kontakt
        </AniLink>
      </Nav>
      <CartStatus />
      <Background ref={background} />
    </Wrapper>
  )
}

export default Header
