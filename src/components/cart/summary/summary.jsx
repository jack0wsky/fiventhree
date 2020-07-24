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
  ContinueBtn,
} from './summary.styled'
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: 'a4c2019ba733587b174a498f66dd2be9',
  domain: `fiventhree.myshopify.com`,
})

const Summary = ({ total }) => {
  console.log(client)
  const handleCheckout = () => {
    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products)
    })
    client.checkout.create().then((checkout) => {
      // Do something with the checkout
      console.log(checkout.webUrl)
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
