import React from 'react'
import { Wrapper } from './header.styled'
import Logo from '../header/logo/logo'
import CartStatus from './cartStatus/cartStatus'

const Header = () => {
  return (
    <Wrapper>
      <Logo color={'#fff'} height={'10px'} />
      <CartStatus />
    </Wrapper>
  )
}

export default Header
