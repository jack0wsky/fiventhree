import React, { useEffect, useState } from 'react'
import { Button, Container, Line } from './burgerMenu.styled'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../../actions/toggleMenu'

const BurgerMenu = () => {
  const toggle = useSelector((state) => state.toggleMenu)
  const dispatch = useDispatch()
  const [hide, setHidden] = useState(false)
  useEffect(() => {
    if (window) {
      if (window.location.href.includes('/produkty/')) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }
  }, [])
  return (
    <Button hide={hide} onClick={() => dispatch(toggleMenu())}>
      <Container toggle={toggle}>
        <Line />
        <Line />
        <Line />
      </Container>
    </Button>
  )
}

export default BurgerMenu
