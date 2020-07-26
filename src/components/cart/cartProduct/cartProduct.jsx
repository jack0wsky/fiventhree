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
import Cancel from './removeIcon/removeIcon'

const CartProduct = ({ product, handleQuantityUpdate }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(product.quantity)
  useEffect(() => {
    handleQuantityUpdate()
  }, [quantity])
  const ifLowestQuantity = () => {
    if (quantity < 1) {
      dispatch(removeFromCart(product.key))
    } else {
      setQuantity(Math.max(1, quantity - 1))
    }
  }
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
          <Decrement onClick={() => ifLowestQuantity()}>-</Decrement>
          <Value>{quantity}</Value>
          <Increment
            onClick={() => {
              setQuantity(Math.max(1, quantity + 1))
            }}
          >
            +
          </Increment>
        </Quantity>
      </Data>
      <Remove>
        <RemoveBtn onClick={() => dispatch(removeFromCart(product.key))}>
          <Cancel height={'30px'} color={'#000'} />
          Usuń
        </RemoveBtn>
      </Remove>
    </Wrapper>
  )
}

export default CartProduct
