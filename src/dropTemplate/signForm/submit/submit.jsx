import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import styled from 'styled-components'
import Stripe from 'stripe'

const SIGN_IN = gql`
  mutation Sign(
    $id: ID!
    $name: String!
    $surname: String!
    $locker: String!
    $size: String!
  ) {
    createClient(
      data: {
        drop: { connect: { id: $id } }
        firstName: $name
        lastName: $surname
        lockerCode: $locker
        size: $size
      }
    ) {
      id
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

  &:focus {
    outline: none;
  }
`

const Submit = ({ id, name, surname, selectedLocker, size }) => {
  const [signIn] = useMutation(SIGN_IN)
  const [isInvalid, setInvalid] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    const stripe = window.Stripe(
      'pk_test_51HB6Y6JL536yVj09fZ5ARLhagc7JXI88pmBPD8be14DfeFeZMm5xnE6zKZKJ5zV8U6VjNbbvsuESX5tyLRyanqvC003cQjQ7MK'
    )
    if (name !== '' || surname !== '' || selectedLocker !== null) {
      setInvalid(false)
      const locker = selectedLocker.name
      signIn({ variables: { id, name, surname, locker, size } })
        .then(async (res) => {
          console.log(res)
          await stripe
            .redirectToCheckout({
              lineItems: [
                { price: 'price_1HYTn3JL536yVj09j6XZlm0E', quantity: 1 },
              ],
              successUrl: 'https://fiventhree.com/drops/success',
              cancelUrl: 'https://fiventhree.com/drops/cancelled',
              mode: 'payment',
              customerEmail: 'jacek.ludzik64@gmail.com',
              submitType: 'pay',
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
      /*
      stripe
        .redirectToCheckout({
          lineItems: [{ sku: 'sku', quantity: 1 }],
          mode: 'payment',
          successUrl: `https://fiventhree.com/drops/success`,
          cancelUrl: `https://fiventhree.com/drops/canceled`,
        })
        .then((res) => console.log(res)) */
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
