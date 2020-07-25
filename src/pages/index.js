import React from 'react'
import SEO from '~/components/seo'
import Hero from '../components/hero/hero'
import Products from '../products/products'
import { createStore, combineReducers } from 'redux'
import { handleMenu, handleCart, toggleCart, handleCheckout } from '../reducers'
import styled from 'styled-components'

const combine = combineReducers({
  handleMenu,
  handleCart,
  toggleCart,
  handleCheckout,
})

export const store = createStore(combine)

const MainWrapper = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
`

const IndexPage = () => {
  return (
    <MainWrapper>
      <Hero />
      <Products />
    </MainWrapper>
  )
}

export default IndexPage
