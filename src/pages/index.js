import React from 'react'
import Hero from '../components/hero/hero'
import { createStore, combineReducers } from 'redux'
import { useSelector } from 'react-redux'
import {
  handleMenu,
  handleCart,
  toggleCart,
  handleCheckout,
  handleCheckoutId,
  handleModal,
} from '../reducers'
import { handleLineItems } from '../reducers/lineItemsReducer'
import { handleInPostModal } from '../reducers/inPostReducer'
import { SelectedInPostLocker } from '../reducers/inPostLockerReducer'
import { shippingMethod } from '../reducers/shippingMethodReducer'
import { TemporaryLockerHolder } from '../reducers/temporaryLockerHolderReducer'
import {
  reviewsModalReducer,
  getProductData,
} from '../reducers/reviewsModalReducer'
import { handleReviewForm } from '../reducers/reviewFormReducer'
import styled from 'styled-components'

const combine = combineReducers({
  handleMenu,
  handleCart,
  toggleCart,
  handleCheckout,
  id: handleCheckoutId,
  handleLineItems,
  modal: handleModal,
  inpost: handleInPostModal,
  locker: SelectedInPostLocker,
  shippingMethod,
  temporaryInPostHolder: TemporaryLockerHolder,
  reviewsModal: reviewsModalReducer,
  reviewsForm: handleReviewForm,
  getProductData,
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
    </MainWrapper>
  )
}

export default IndexPage
