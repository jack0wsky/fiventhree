import React, { useEffect, useState, useRef } from 'react'
import { Wrapper, Background, Nav } from './header.styled'
import { Link } from 'gatsby'
import Logo from '../header/logo/logo'
import CartStatus from './cartStatus/cartStatus'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const Header = () => {
  const [scrolled, setScrolled] = useState()
  const background = useRef()
  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
          console.log('more')
          gsap.to(background.current, {
            bottom: 0,
            duration: 0.1,
          })
        } else {
          gsap.to(background.current, {
            height: 0,
            duration: 0.1,
          })
        }
      })
    }
  })
  return (
    <Wrapper>
      <Logo color={'#fff'} height={'10px'} />
      <Nav>
        <Link to="/produkty">Produkty</Link>
        <Link to="/kontakt">Kontakt</Link>
      </Nav>
      <CartStatus />
      <Background ref={background} />
    </Wrapper>
  )
}

export default Header
