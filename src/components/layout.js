import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useSelector } from 'react-redux'
import Header from './header/header'
import BurgerMenu from './burgerMenu/burgerMenu'
import Menu from './menu/menu'
import MobileCart from './mobileCart/mobileCart'
import Cart from './cart/cart'
import RedOverlay from './overlays/redOverlay'
import styled, { createGlobalStyle } from 'styled-components'
import InPostModal from './inPost/inPost'
import SEO from './seo'
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
  const inpost = useSelector((state) => state.inpost)
  const [cartAnimation, setCartAnimation] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const handleCartAnimation = () => {
    setCartAnimation(!cartAnimation)
  }

  const {
    site: { siteMetadata },
  } = data
  return (
    <Wrapper>
      <GlobalStyle />
      <SEO
        title={siteMetadata.title}
        lang={'pl-PL'}
        description={siteMetadata.description}
      />
      <Header />
      {inpost ? <InPostModal /> : null}
      <Menu />
      {toggleCart ? <Cart handleCartAnimation={handleCartAnimation} /> : null}
      {toggleCart ? <RedOverlay cartAnimation={cartAnimation} /> : null}
      {toggleMenu ? <RedOverlay /> : null}
      {children}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
