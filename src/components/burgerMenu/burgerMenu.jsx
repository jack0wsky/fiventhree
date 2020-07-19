import React, { useState } from 'react'
import { Button, Container, Line } from './burgerMenu.styled'

const BurgerMenu = () => {
  const [toggle, setToogle] = useState(false)
  return (
    <Button onClick={() => setToogle(!toggle)}>
      <Container toggle={toggle}>
        <Line />
        <Line />
        <Line />
      </Container>
    </Button>
  )
}

export default BurgerMenu
