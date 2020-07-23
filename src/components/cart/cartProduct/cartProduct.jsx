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
  const { product: item, quantity } = product
  return (
    <Wrapper>
      <Preview></Preview>
      <Data>
        <Name>{item.name}</Name>
        <Price>{item.price} PLN</Price>
        <Quantity>
          <Decrement>-</Decrement>
          <Value>{quantity}</Value>
          <Increment>+</Increment>
        </Quantity>
      </Data>
      <Remove>
        <RemoveBtn onClick={() => dispatch(removeFromCart(item.key))}>
          Usuń
        </RemoveBtn>
      </Remove>
    </Wrapper>
  )
}

export default CartProduct
