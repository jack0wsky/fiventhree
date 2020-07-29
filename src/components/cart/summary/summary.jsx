import React, { useEffect } from 'react'
import {
  Wrapper,
  Divider,
  Shipping,
  Label,
  Value,
  Total,
  Text,
  Price,
  ContinueBtn,
} from './summary.styled'
import Client from 'shopify-buy'
import { useSelector } from 'react-redux'

const client = Client.buildClient({
  storefrontAccessToken: 'a4c2019ba733587b174a498f66dd2be9',
  domain: `fiventhree.myshopify.com`,
})

const Summary = ({ total }) => {
  const cart = useSelector((state) => state.handleCart)
  const checkoutId = useSelector((state) => state.id)
  const handleCheckout = () => {
    console.log(checkoutId)
    const lineItems = cart.forEach((item) => {
      return item.shopifyId
    })
    console.log(lineItems)
    const items = [
      {
        variantId:
          'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTIxNjg1ODU0NjMzOQ==',
        quantity: 1,
      },
    ]
    console.log('clicked')
    client.checkout.create().then((checkout) => {
      // Do something with the checkout
      console.log(checkout.webUrl)
    })

    client.checkout.addLineItems(checkoutId, items).then((checkout) => {
      // Do something with the updated checkout
      console.log(checkout.lineItems) // Array with one additional line item
    })
  }
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
      <ContinueBtn onClick={() => handleCheckout()}>Checkout</ContinueBtn>
    </Wrapper>
  )
}

export default Summary
