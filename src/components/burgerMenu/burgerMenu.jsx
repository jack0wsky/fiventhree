import React from 'react'
import { Button, Container, Line } from './burgerMenu.styled'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../../actions/toggleMenu'

const BurgerMenu = () => {
  const toggle = useSelector((state) => state.toggleMenu)
  const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(toggleMenu())}>
      <Container toggle={toggle}>
        <Line />
        <Line />
        <Line />
      </Container>
    </Button>
  )
}

export default BurgerMenu
