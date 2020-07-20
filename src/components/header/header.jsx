import React, { useEffect, useState } from 'react'
import { Wrapper, Background } from './header.styled'
import Logo from '../header/logo/logo'
import CartStatus from './cartStatus/cartStatus'

const Header = () => {
  const [scrolled, setScrolled] = useState()
  useEffect(() => {
    if (window) {
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
    <Wrapper>
      <Logo color={'#fff'} height={'10px'} />
      <CartStatus />
      <Background scrolled={scrolled} />
    </Wrapper>
  )
}

export default Header
