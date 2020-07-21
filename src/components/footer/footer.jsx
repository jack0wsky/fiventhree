import React from 'react'
import { FooterWrapper, Logo } from './footer.styled'
import logo from '../../assets/logo_1.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo src={logo} />
    </FooterWrapper>
  )
}

export default Footer
