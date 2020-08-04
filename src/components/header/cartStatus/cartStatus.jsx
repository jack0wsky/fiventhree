import React, { useEffect, useState } from 'react'
import { Wrapper, Length, Cart, Value } from './cartStatus.styled'
import CartIcon from './cartIcon/cartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../../actions/toggleCart'

const CartStatus = () => {
  const dispatch = useDispatch()
  const [switchColor, setColor] = useState(false)
  const toggle = useSelector((state) => state.toggleCart)
  const cart = useSelector((state) => state.handleCart)
  useEffect(() => {
    if (window) {
      if (window.location.href.includes('/produkty/')) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
  }, [cart])
  const getProductsAmount = () => {
    if (cart.length > 0) {
      return cart.reduce((acc, cur) => {
        return (acc += cur.quantity)
      }, 0)
    }
    return 0
  }
  return (
    <Wrapper>
      <Cart onClick={() => dispatch(toggleCart())}>
        <CartIcon
          color={toggle || switchColor ? '#000' : '#fff'}
          height={'30px'}
        />
      </Cart>
      <Length toggle={toggle} switchColor={switchColor}>
        <Value>{getProductsAmount()}</Value>
      </Length>
    </Wrapper>
  )
}

export default CartStatus
