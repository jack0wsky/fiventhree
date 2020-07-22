import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../actions/removeFromCart'
import {
  Wrapper,
  Preview,
  Data,
  Name,
  Price,
  Quantity,
  Decrement,
  Increment,
  Value,
  Remove,
  RemoveBtn,
} from './cartProduct.styled'

const CartProduct = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Preview></Preview>
      <Data>
        <Name>{product.name}</Name>
        <Price>{product.price} PLN</Price>
        <Quantity>
          <Decrement>-</Decrement>
          <Value>{product.quantity}</Value>
          <Increment>+</Increment>
        </Quantity>
      </Data>
      <Remove>
        <RemoveBtn onClick={() => dispatch(removeFromCart(product.key))}>
          Usuń
        </RemoveBtn>
      </Remove>
    </Wrapper>
  )
}

export default CartProduct
