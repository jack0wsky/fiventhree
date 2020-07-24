import React from 'react'
import {
  Wrapper,
  Divider,
  Shipping,
  Label,
  Value,
  Total,
  Text,
  Price,
} from './summary.styled'

const Summary = ({ total }) => {
  return (
    <Wrapper>
      <Divider />
      <Shipping>
        <Label>Dostawa</Label>
        <Value>8.99 PLN</Value>
      </Shipping>
      <Total>
        <Text>Suma</Text>
        <Price>{total()} PLN</Price>
      </Total>
    </Wrapper>
  )
}

export default Summary
