import React from 'react'
import CartIcon from '../header/cartStatus/cartIcon/cartIcon'
import { MobileCartWrapper, CartLength } from './mobileCart.styled'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCart } from '../../actions/toggleCart'

const MobileCart = () => {
  const cart = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()
  const getProductsAmount = () => {
    if (cart.length > 0) {
      return cart.reduce((acc, cur) => {
        return (acc += cur.quantity)
      }, 0)
    }
    return 0
  }
  return (
    <MobileCartWrapper onClick={() => dispatch(toggleCart())}>
      <CartLength>{getProductsAmount()}</CartLength>
      <CartIcon color={'#fff'} height={'30px'} />
    </MobileCartWrapper>
  )
}

export default MobileCart
