import React, { useEffect, useRef } from 'react'
import { Wrapper, Length, Cart, Value } from './cartStatus.styled'
import CartIcon from './cartIcon/cartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCart } from '../../../actions/toggleCart'
import { ActiveBackground } from '../header.styled'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

const CartStatus = () => {
  const dispatch = useDispatch()
  const toggle = useSelector((state) => state.toggleCart)
  const cart = useSelector((state) => state.handleCart)
  const activeBackground = useRef()
  const getProductsAmount = () => {
    if (cart.length > 0) {
      return cart.reduce((acc, cur) => {
        return (acc += cur.quantity)
      }, 0)
    }

    return 0
  }
  useEffect(() => {
    if (window) {
      const path = window.location.href
      if (path.includes('/kontakt') || path.includes('/produkty/')) {
        gsap.to(activeBackground.current, {
          translateY: 0,
          duration: 0.7,
          delay: 0.8,
        })
      } else {
        gsap.to(activeBackground.current, {
          translateY: '100%',
          duration: 0.7,
          delay: 0.5,
        })
      }
    }
  })
  return (
    <Wrapper>
      <Cart onClick={() => dispatch(toggleCart())}>
        <CartIcon height={'30px'} color={'#fff'} />
      </Cart>
      <Length toggle={toggle}>
        <Value>{getProductsAmount()}</Value>
      </Length>
      <ActiveBackground ref={activeBackground} />
    </Wrapper>
  )
}

export default CartStatus
