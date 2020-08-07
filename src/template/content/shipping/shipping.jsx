import React, { useEffect } from 'react'
import {
  ShippingWrapper,
  Grid,
  ShippingMethod,
  ShippingTitle,
  Label,
  Price,
} from '../shipping.styled'
import Box from './box'
import DeliveryPoint from './deliveryPoint'

export const Shipping = () => {
  return (
    <ShippingWrapper>
      <ShippingTitle>Dostawa</ShippingTitle>
      <Grid>
        <ShippingMethod>
          <Box height={'20px'} />
          <Label>Kurier</Label>
          <Price>8.99 PLN</Price>
        </ShippingMethod>
        <ShippingMethod>
          <DeliveryPoint height={'20px'} />
          <Label>Paczkomat</Label>
          <Price>8.99 PLN</Price>
        </ShippingMethod>
      </Grid>
    </ShippingWrapper>
  )
}

export default Shipping
