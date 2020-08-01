import React, { useState, useEffect } from 'react'
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
import Spinner from '../../loadingSpinner/spinner'
import { useSelector } from 'react-redux'

let client

const Summary = ({ total }) => {
  const lineItems = useSelector((state) => state.handleLineItems)
  const cart = useSelector((state) => state.handleCart)
  const checkoutId = useSelector((state) => state.id)
  const [request, setRequest] = useState(false)
  useEffect(() => {
    client = Client.buildClient({
      storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
      domain: `${process.env.GATSBY_SHOP_NAME}.myshopify.com`,
    })
  }, [cart])
  const handleRequest = () => {
    setRequest(!request)
  }
  const handleCheckout = async () => {
    handleRequest()
    await client.checkout
      .addLineItems(checkoutId, lineItems)
      .then((checkout) => {
        window.open(checkout.webUrl)
        handleRequest()
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
      <ContinueBtn onClick={() => handleCheckout()}>
        {request ? (
          <Spinner width={'30px'} borderColor={'#fff'} color={'#000'} />
        ) : null}
        Checkout
      </ContinueBtn>
    </Wrapper>
  )
}

export default Summary
