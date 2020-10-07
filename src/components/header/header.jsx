import React, { useEffect, useState, useRef } from 'react'
import {
  Wrapper,
  Background,
  Nav,
  MobileBurger,
  RightAside,
  SocialMedia,
  BurgerIcon,
} from './header.styled'
import { colors } from '../../theme'
import burgerIcon from '../../assets/menu.svg'
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

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const dispatch = useDispatch()
  const backgroundRef = useRef()

  useEffect(() => {
    let init
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        init = window.pageYOffset

        setTimeout(() => {
          const curScroll = window.pageYOffset
          //console.log(init, curScroll)
          if (init < curScroll) {
            //console.log('down')
            setScrolled(true)
          } else if (init > curScroll || window.pageYOffset < 50) {
            //console.log('up')
            setScrolled(false)
          }
        }, 150)
      })
    }
  }, [])

  return (
    <Wrapper scrolled={scrolled}>
      <MobileBurger onClick={() => dispatch(toggleMenu())}>
        <BurgerIcon src={burgerIcon} />
      </MobileBurger>
      <AniLink cover bg={'#000000'} to="/">
        <Logo />
      </AniLink>
      <Nav>
        <AniLink
          cover
          bg={'#000000'}
          activeStyle={{ color: colors.action }}
          to="/drops"
        >
          Dropy
        </AniLink>
        <AniLink
          cover
          bg={'#000000'}
          to="/contact"
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
