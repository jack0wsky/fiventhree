import React, { useEffect, useState } from 'react'
import { FooterWrapper, Logo } from './footer.styled'
import logo from '../../assets/logo_1.svg'

const Footer = () => {
  const [minify, setMinified] = useState(false)
  useEffect(() => {
    if (window) {
      if (window.location.href.includes('/produkty/')) {
        setMinified(true)
      } else {
        setMinified(false)
      }
    }
  })
  return (
    <FooterWrapper minify={minify}>
      <Logo src={logo} />
    </FooterWrapper>
  )
}

export default Footer
