import React from 'react'
import { Wrapper, Length, Cart } from './cartStatus.styled'
import CartIcon from './cartIcon/cartIcon'

const CartStatus = () => {
  return (
    <Wrapper>
      <Cart>
        <CartIcon color={'#fff'} height={'30px'} />
      </Cart>
      <Length>0</Length>
    </Wrapper>
  )
}

export default CartStatus
