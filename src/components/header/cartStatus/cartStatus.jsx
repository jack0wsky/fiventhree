import React from 'react'
import { Wrapper, Length, Cart, Value } from './cartStatus.styled'
import CartIcon from './cartIcon/cartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../../actions/toggleCart'

const CartStatus = () => {
  const dispatch = useDispatch()
  const toggle = useSelector((state) => state.toggleCart)
  const cart = useSelector((state) => state.handleCart)
  const getProductsAmount = () => {
    console.log(cart)
    if (cart.length > 0) {
      cart.reduce((acc, cur) => {
        return (acc += cur.quantity)
      }, 0)
    }
  }
  console.log(getProductsAmount())
  return (
    <Wrapper>
      <Cart onClick={() => dispatch(toggleCart())}>
        <CartIcon color={toggle ? '#000' : '#fff'} height={'30px'} />
      </Cart>
      <Length toggle={toggle}>
        <Value>{cart.length}</Value>
      </Length>
    </Wrapper>
  )
}

export default CartStatus
