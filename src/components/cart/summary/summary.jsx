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
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    //  TODO better storing cart data
    const cartVal = localStorage.getItem('cart')
    console.log(localStorage, JSON.parse(cartVal))
  })
  console.log(client)
  const checkoutId = 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9kMTZmM2EzMDM4Yjc4N='
  const handleCheckout = () => {
    client.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products)
    })
    client.checkout.create().then((checkout) => {
      console.log(checkout.webUrl)
    })

    client.checkout.fetch(checkoutId).then((checkout) => {
      // Do something with the checkout
      console.log(checkout)
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
