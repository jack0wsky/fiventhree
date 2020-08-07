import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useSelector } from 'react-redux'
import Header from './header/header'
import BurgerMenu from './burgerMenu/burgerMenu'
import Menu from './menu/menu'
import MobileCart from './mobileCart/mobileCart'
import Cart from './cart/cart'
import RedOverlay from './overlays/redOverlay'
import Footer from './footer/footer'
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'
import '../fonts/medium.css'
import '../fonts/bold.css'
import '../fonts/xbold.css'
import { Overlay } from './hero/hero.styled'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Aktiv Grotesk Ex", sans-serif;
  }
`
const Wrapper = styled.main`
  width: 100vw;
  height: auto;
  overflow-x: hidden;
`

const Layout = ({ children }) => {
  const toggleCart = useSelector((state) => state.toggleCart)
  const toggleMenu = useSelector((state) => state.handleMenu)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {
    site: { siteMetadata },
  } = data
  return (
    <Wrapper>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteMetadata.title}</title>
      </Helmet>
      <Header />
      <MobileCart />
      <BurgerMenu />
      <Menu />
      {toggleCart ? <Cart /> : null}
      {toggleCart ? <RedOverlay /> : null}
      {toggleMenu ? <RedOverlay /> : null}
      {children}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
