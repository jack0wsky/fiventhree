import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../actions/removeFromCart'
import {
  Wrapper,
  Preview,
  Data,
  Name,
  Price,
  Size,
  Quantity,
  Decrement,
  Increment,
  Value,
  Remove,
  RemoveBtn,
  Image,
} from './cartProduct.styled'

const CartProduct = ({ product }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(product.quantity)
  useEffect(() => {}, [quantity])
  return (
    <Wrapper>
      <Preview>
        <Image src={product.image} />
      </Preview>
      <Data>
        <Name>{product.name}</Name>
        <Price>{product.price} PLN</Price>
        <Size>Rozmiar: {product.size}</Size>
        <Quantity>
          <Decrement onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            -
          </Decrement>
          <Value>{quantity}</Value>
          <Increment
            onClick={() => {
              console.log(quantity)
              setQuantity(Math.max(1, quantity + 1))
            }}
          >
            +
          </Increment>
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
