import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useSelector } from 'react-redux'
import Header from './header/header'
import BurgerMenu from './burgerMenu/burgerMenu'
import Menu from './menu/menu'
import Cart from './cart/cart'
import RedOverlay from './overlays/redOverlay'
import styled, { createGlobalStyle } from 'styled-components'
import './layout.css'
import '../fonts/medium.css'
import '../fonts/bold.css'
import '../fonts/xbold.css'

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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <BurgerMenu />
      <Menu />
      {toggleCart ? <Cart /> : null}
      {toggleCart ? <RedOverlay /> : null}
      {children}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
