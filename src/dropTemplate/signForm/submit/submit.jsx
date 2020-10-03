import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import styled from 'styled-components'

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
    if (name !== '' || surname !== '' || selectedLocker !== null) {
      setInvalid(false)
      const locker = selectedLocker.name
      signIn({ variables: { id, name, surname, locker, size } })
        .then((res) => console.log(res))
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
