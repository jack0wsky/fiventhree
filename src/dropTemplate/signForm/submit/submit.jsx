import React, { useEffect } from 'react'
import { useMutation, gql } from '@apollo/client'

const SIGN_IN = gql`
  mutation SignIn {
    createClient(
      data: {
        drop: { connect: { id: $id } }
        firstName: $name
        lastName: $surname
        lockerCode: $locker
      }
    ) {
      id
    }
  }
`

const Submit = ({ id, name, surname, locker }) => {
  const [signIn] = useMutation(SIGN_IN)
  const handleSubmit = (e) => {
    e.preventDefault()
    signIn({ variables: { id, name, surname, locker } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    console.log(signIn)
  }, [])
  return (
    <button type="submit" onClick={(e) => handleSubmit(e)}>
      Przejdź do płatności
    </button>
  )
}

export default Submit
