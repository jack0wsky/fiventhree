import React, { useState, useEffect } from 'react'
import { useMutation, gql } from '@apollo/client'
import styled from 'styled-components'
import Stripe from '@stripe/stripe-js'
import { small } from '../../../components/breakpoints'

const SIGN_IN = gql`
  mutation Sign(
    $id: ID!
    $name: String!
    $surname: String!
    $locker: String!
    $lockerStreet: String!
    $lockerCity: String!
    $size: String!
    $phone: String!
    $email: String!
    $quantity: Int!
  ) {
    createClient(
      data: {
        drop: { connect: { id: $id } }
        firstName: $name
        lastName: $surname
        lockerCode: $locker
        lockerStreet: $lockerStreet
        lockerCity: $lockerCity
        size: $size
        phone: $phone
        email: $email
        quantity: $quantity
      }
    ) {
      id
    }
  }
`
const PUBLISH = gql`
  mutation Publish($clientId: ID!) {
    publishClient(where: { id: $clientId }, to: PUBLISHED) {
      stage
    }
  }
`
const SubmitButton = styled.button`
  padding: 10px 20px 10px;
  font-size: 1em;
  width: max-content;
  border: none;
  background-color: ${({ isInvalid }) => (isInvalid ? '#676767' : '#000')};
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  align-self: flex-end;

  &:focus {
    outline: none;
  }
  @media all and (max-width: ${small}) {
    width: 100%;
    height: 50px;
  }
`

const Submit = ({
  id,
  name,
  surname,
  selectedLocker,
  size,
  phone,
  email,
  quantity,
}) => {
  const [signIn] = useMutation(SIGN_IN)
  const [publish] = useMutation(PUBLISH)
  const [isInvalid, setInvalid] = useState(false)

  useEffect(() => {
    console.log(Stripe)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '' || surname !== '' || selectedLocker !== null) {
      setInvalid(false)
      const locker = selectedLocker.name
      const lockerStreet = selectedLocker.address.line1
      const lockerCity = selectedLocker.address.line2
      signIn({
        variables: {
          id,
          name,
          surname,
          locker,
          lockerStreet,
          lockerCity,
          size,
          phone,
          email,
          quantity,
        },
      })
        .then(async (res) => {
          const clientId = res.data.createClient.id
          publish({ variables: { clientId } })
          /*
          await stripe.redirectToCheckout({
            lineItems: [
              { price: 'price_1HYTn3JL536yVj09j6XZlm0E', quantity: 1 },
            ],
            successUrl: `http://${window.location.host}/drops/success`,
            cancelUrl: `http://${window.location.host}/drops/cancelled`,
            mode: 'payment',
            customerEmail: email,
            submitType: 'pay',
          }) */
        })
        .catch((err) => console.log(err))
    } else {
      setInvalid(true)
    }
  }
  return (
    <SubmitButton
      disabled={isInvalid}
      isInvalid={isInvalid}
      type="submit"
      onClick={(e) => handleSubmit(e)}
    >
      Przejdź do płatności
    </SubmitButton>
  )
}

export default Submit
