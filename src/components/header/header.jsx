import React, { useEffect, useState, useRef } from 'react'
import {
  Wrapper,
  Background,
  Nav,
  ActiveBackground,
  MobileBurger,
  Line,
  RightAside,
  SocialMedia,
} from './header.styled'
import { colors } from '../../theme'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Logo from '../header/logo/logo'
import CartStatus from './cartStatus/cartStatus'
import { toggleMenu } from '../../actions/toggleMenu'
import { useDispatch } from 'react-redux'
import FacebookIcon from '../../icons/facebookIcon'
import InstagramIcon from '../../icons/instagramIcon'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

let init

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    setTimeout(() => {
      init = window.pageYOffset
    }, 100)
  })
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [minify, setMinified] = useState(false)
  const [background, setBackground] = useState(false)
  const dispatch = useDispatch()
  const backgroundRef = useRef()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('/produkty')) {
        setMinified(true)
        setBackground(true)
      } else {
        setMinified(false)
        setBackground(false)
      }
      window.addEventListener('scroll', () => {
        const curScroll = window.pageYOffset
        if (init < curScroll) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })
    }
  }, [])
  return (
    <Wrapper background={background} minify={minify} scrolled={scrolled}>
      <MobileBurger onClick={() => dispatch(toggleMenu())}>
        <Line />
        <Line />
        <Line />
      </MobileBurger>
      <AniLink cover bg={'#000000'} to="/">
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
      <RightAside>
        <CartStatus />
        <SocialMedia>
          <FacebookIcon color={'#fff'} height={'20px'} />
          <InstagramIcon height={'20px'} color={'#fff'} />
        </SocialMedia>
      </RightAside>
      <Background ref={backgroundRef} />
    </Wrapper>
  )
}

export default Header
