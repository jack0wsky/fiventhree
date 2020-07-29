import React from 'react'
import SEO from '~/components/seo'
import Hero from '../components/hero/hero'
import Products from '../products/products'
import { createStore, combineReducers } from 'redux'
import { useSelector } from 'react-redux'
import {
  handleMenu,
  handleCart,
  toggleCart,
  handleCheckout,
  handleCheckoutId,
} from '../reducers'
import { handleLineItems } from '../reducers/lineItems'
import styled from 'styled-components'

const combine = combineReducers({
  handleMenu,
  handleCart,
  toggleCart,
  handleCheckout,
  id: handleCheckoutId,
  handleLineItems,
})

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(combine)

const MainWrapper = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  overflow: ${({ toggleCart }) => (toggleCart ? 'hidden' : 'auto')};
`

const IndexPage = () => {
  const toggleCart = useSelector((state) => state.toggleCart)
  return (
    <MainWrapper toggleCart={toggleCart}>
      <Hero />
      <Products />
    </MainWrapper>
  )
}

export default IndexPage
