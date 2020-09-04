import React, { useState, useEffect } from 'react'
import {
  FormWrapper,
  Form,
  Title,
  InputWrapper,
  Label,
  Input,
  ChooseStarsAmount,
  StarsGrid,
  CaptionWrapper,
  TextArea,
  Footer,
  CloseModalBtn,
  SubmitBtn,
} from './addReviewForm.styled'
import StarSelect from './star/starSelect'
import Confirm from './confirm/confirm'
import { useDispatch } from 'react-redux'
import { handleReviewForm } from '../../../actions/reviews/handleReviewForm'
import { useMutation, gql } from '@apollo/client'

const ADD_REVIEW = gql`
  mutation AddReview(
    $name: String!
    $caption: String!
    $shopifyId: String!
    $rate: [Json!]
  ) {
    createReview(
      data: {
        author: $name
        caption: $caption
        shopifyId: $shopifyId
        rate: $rate
      }
    ) {
      id
      author
      caption
      rate
      shopifyId
    }
  }
`

const AddReviewForm = () => {
  const dispatch = useDispatch()
  const [addReview, { data }] = useMutation(ADD_REVIEW)
  const [name, setName] = useState('')
  const [clicked, setClicked] = useState(false)
  const [valid, setValid] = useState(false)
  const [caption, setCaption] = useState('')
  const [rate, setRate] = useState([
    {
      key: 1,
      checked: false,
    },
    {
      key: 2,
      checked: false,
    },
    {
      key: 3,
      checked: false,
    },
    {
      key: 4,
      checked: false,
    },
    {
      key: 5,
      checked: false,
    },
  ])
  const [less, setLess] = useState([])
  const [more, setMore] = useState([])

  const resetAndSplit = (e) => {
    console.log(e.currentTarget)
    rate.forEach((star) => {
      star.checked = false
    })
    console.log(rate)
    /*
    const less = rate.filter(({ key }) => {
      return key <= value
    })
    const more = rate.filter(({ key }) => {
      return key > value
    })
    less.forEach((star) => (star.checked = true))
    setLess(less)
    setMore(more) */
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const shopifyId = 'new id'
    if (name === '' || caption === '') {
      console.error('fill fields')
    } else {
      addReview({
        variables: { name, caption, shopifyId, rate },
      }).then((res) => {
        console.log(res)
        setName('')
        setCaption('')
        setRate([
          {
            key: 1,
            checked: false,
          },
          {
            key: 2,
            checked: false,
          },
          {
            key: 3,
            checked: false,
          },
          {
            key: 4,
            checked: false,
          },
          {
            key: 5,
            checked: false,
          },
        ])
        setValid(true)
        setTimeout(() => {
          closeModal(e)
        }, 1500)
      })
    }
  }

  const hoverStars = (e) => {
    e.preventDefault()
    //if (!clicked) resetAndSplit(e)
    setRate(less.concat(more))
  }
  const resetStars = () => {
    if (!clicked) {
      rate.forEach((star) => {
        star.checked = false
      })
      setRate(
        rate.filter((star) => {
          return star.checked === false
        })
      )
    }
  }
  const handleStars = (e) => {
    e.preventDefault()
    rate.forEach((star) => {
      star.checked = false
    })
    const curValue = e.currentTarget.value
    const less = rate.filter(({ key }) => {
      return key <= curValue
    })
    less.forEach((star) => {
      star.checked = true
    })
    const more = rate.filter(({ key }) => {
      return key > curValue
    })
    setRate(less.concat(more))
    setClicked(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    dispatch(handleReviewForm())
  }

  useEffect(() => {}, [rate])
  return (
    <FormWrapper>
      {!valid ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Title>Co powiesz o tym produkcie?</Title>
          <InputWrapper>
            <Label>Imię i nazwisko lub pseudonim</Label>
            <Input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <ChooseStarsAmount>
            <Label>Na ile oceniasz produkt?</Label>
            <StarsGrid>
              {rate.map(({ key, checked }) => {
                return (
                  <StarSelect
                    key={key}
                    height={'30px'}
                    hoverStars={hoverStars}
                    value={key}
                    checked={checked}
                    resetStars={resetStars}
                    handleStars={handleStars}
                  />
                )
              })}
            </StarsGrid>
          </ChooseStarsAmount>
          <CaptionWrapper>
            <Label>Opisz nam swoje doświadczenia</Label>
            <TextArea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </CaptionWrapper>
          <Footer>
            <CloseModalBtn onClick={(e) => closeModal(e)}>Anuluj</CloseModalBtn>
            <SubmitBtn role="submit">Dodaj opinię</SubmitBtn>
          </Footer>
        </Form>
      ) : (
        <Confirm />
      )}
    </FormWrapper>
  )
}

export default AddReviewForm
