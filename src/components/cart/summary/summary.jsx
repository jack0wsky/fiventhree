import React, { useState, useEffect } from 'react'
import {
  Wrapper,
  Divider,
  ShippingStatus,
  Shipping,
  Data,
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
  PinWrapper,
  DiscountInfo,
} from './summary.styled'
import Client from 'shopify-buy'
import Spinner from '../../loadingSpinner/spinner'
import { useSelector, useDispatch } from 'react-redux'
import { handleInPostModal } from '../../../actions/handleInPostModal'
import { resetLocker } from '../../../actions/resetLocker'
import Pin from '../../inPost/pinIcon/pinIcon'

let client

const Summary = ({ total }) => {
  const lineItems = useSelector((state) => state.handleLineItems)
  const cart = useSelector((state) => state.handleCart)
  const checkoutId = useSelector((state) => state.id)
  const inPost = useSelector((state) => state.locker)
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
  const handleLockerChange = () => {
    dispatch(resetLocker())
    dispatch(handleInPostModal())
  }
  const handleCheckout = async () => {
    const inPostLocker = {
      customAttributes: [
        { key: 'Nazwa paczkomatu', value: inPost.name },
        { key: 'Ulica', value: inPost.street },
        { key: 'Kod pocztowy i miasto', value: inPost.city },
      ],
    }
    handleRequest()
    await client.checkout.addLineItems(checkoutId, lineItems).then(() => {
      handleRequest()
    })

    await client.checkout
      .updateAttributes(checkoutId, inPostLocker)
      .then((checkout) => {
        window.open(checkout.webUrl)
        handleRequest()
      })
  }
  return (
    <Wrapper>
      <DiscountInfo>
        Jeśli posiadasz kod rabatowy, możesz wprowadzić go w następnym kroku
      </DiscountInfo>
      {inPost === null ? (
        <ShippingStatus inPost={inPost}>
          <InPostBtn
            inPost={inPost}
            onClick={() => dispatch(handleInPostModal())}
          >
            Wybierz paczkomat
          </InPostBtn>
        </ShippingStatus>
      ) : (
        <ShippingStatus inPost={inPost}>
          <SelectedLocker>
            <PinWrapper>
              <Pin height={'25px'} color={'#fff'} />
            </PinWrapper>
            <Data>
              <SelectedValue>{inPost.name}</SelectedValue>
              <SelectedValue>{inPost.street}</SelectedValue>
              <SelectedValue>{inPost.city}</SelectedValue>
            </Data>
          </SelectedLocker>
          <ChangeBtn onClick={() => handleLockerChange()}>Zmień</ChangeBtn>
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
      {inPost ? (
        <ContinueBtn onClick={() => handleCheckout()}>
          {request ? (
            <Spinner width={'30px'} borderColor={'#fff'} color={'#000'} />
          ) : null}
          Przejdź do kasy
        </ContinueBtn>
      ) : (
        <ContinueBtn>
          {request ? (
            <Spinner width={'30px'} borderColor={'#fff'} color={'#000'} />
          ) : null}
          Przejdź do kasy
        </ContinueBtn>
      )}
    </Wrapper>
  )
}

export default Summary
