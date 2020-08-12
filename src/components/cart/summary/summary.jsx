import React, { useState, useEffect } from 'react'
import {
  Wrapper,
  Divider,
  ShippingStatus,
  Shipping,
  Label,
  Value,
  Total,
  Text,
  Price,
  ContinueBtn,
  InPostBtn,
  SelectedLocker,
  SelectedValue,
  ChangeBtn,
} from './summary.styled'
import Client from 'shopify-buy'
import Spinner from '../../loadingSpinner/spinner'
import { useSelector, useDispatch } from 'react-redux'
import { handleInPostModal } from '../../../actions/handleInPostModal'

let client

const Summary = ({ total }) => {
  const lineItems = useSelector((state) => state.handleLineItems)
  const cart = useSelector((state) => state.handleCart)
  const checkoutId = useSelector((state) => state.id)
  const inPost = useSelector((state) => state.locker)
  const shippingMethod = useSelector((state) => state.shippingMethod)
  const dispatch = useDispatch()
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
    const inPostLocker = {
      customAttributes: [
        { key: 'Nazwa paczkomatu', value: inPost.name },
        { key: 'Ulica', value: inPost.street },
        { key: 'Kod pocztowy', value: inPost.postCode },
        { key: 'Miasto', value: inPost.city },
      ],
    }
    handleRequest()
    await client.checkout.addLineItems(checkoutId, lineItems).then(() => {
      handleRequest()
    })

    await client.checkout
      .updateAttributes(checkoutId, inPostLocker)
      .then((checkout) => {
        // Do something with the updated checkout
        console.log(checkout)
        window.open(checkout.webUrl)
      })
  }
  const deliveryPoint = localStorage.getItem('deliveryPoint')
  console.log(JSON.parse(deliveryPoint), inPost)
  return (
    <Wrapper>
      {inPost === null || deliveryPoint === null ? (
        <ShippingStatus>
          <InPostBtn
            inPost={inPost}
            onClick={() => dispatch(handleInPostModal())}
          >
            Wybierz paczkomat
          </InPostBtn>
        </ShippingStatus>
      ) : (
        <ShippingStatus>
          <SelectedLocker>
            <SelectedValue>Wybrany:</SelectedValue>
          </SelectedLocker>
          <ChangeBtn>Zmień</ChangeBtn>
        </ShippingStatus>
      )}
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
