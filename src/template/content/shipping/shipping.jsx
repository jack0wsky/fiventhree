import React, { useEffect, useState } from 'react'
import {
  ShippingWrapper,
  Grid,
  ShippingMethod,
  ShippingTitle,
  Label,
  Price,
} from '../shipping.styled'
import Box from './box'
import { useDispatch } from 'react-redux'
import { getShippingMethod } from '../../../actions/getShippingMethod'
import shippingMethods from '../../../data/shippingMethods.json'
import DeliveryPoint from './deliveryPoint'

export const Shipping = () => {
  const dispatch = useDispatch()
  const selectShippingMethod = (method) => {
    shippingMethods.forEach((method) => {
      method.selected = false
    })
    console.log(shippingMethods)
    method.selected = true
    dispatch(getShippingMethod(method))
  }
  return (
    <ShippingWrapper>
      <ShippingTitle>Dostawa</ShippingTitle>
      <Grid>
        {shippingMethods.map((method) => {
          return (
            <ShippingMethod
              onClick={() => selectShippingMethod(method)}
              selected={method.selected}
              key={method.key}
            >
              <Box height={'20px'} />
              <Label>{method.label}</Label>
              <Price>{method.price}</Price>
            </ShippingMethod>
          )
        })}
      </Grid>
    </ShippingWrapper>
  )
}

export default Shipping
