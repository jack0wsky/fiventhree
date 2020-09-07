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
  SetNameCheckboxWrapper,
  Checkbox,
  Error,
} from './addReviewForm.styled'
import StarSelect from './star/starSelect'
import Confirm from './confirm/confirm'
import ReviewContext from './reviewContext/reviewContext'
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

const AddReviewForm = ({ product, size }) => {
  const dispatch = useDispatch()
  const [addReview] = useMutation(ADD_REVIEW)
  const [name, setName] = useState('')
  const [allowName, setAllowName] = useState(true)
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
  const [nameError, setNameError] = useState(false)
  const [rateError, setRateError] = useState(false)
  const [captionError, setCaptionError] = useState(false)

  const resetAndSplit = (e) => {
    const value = e.currentTarget.value
    const less = rate.filter(({ key }) => {
      return key <= value
    })
    const more = rate.filter(({ key }) => {
      return key > value
    })
    less.forEach((star) => {
      star.checked = true
    })
    setLess(less)
    setMore(more)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { shopifyId } = product

    const isRate = rate.every(({ checked }) => {
      return checked === false
    })

    if (isRate === false) {
      setRateError(false)
    } else {
      setRateError(true)
    }
    if (caption === '') {
      setCaptionError(true)
    } else {
      setCaptionError(false)
    }

    if (allowName) {
      if (name === '') {
        setNameError(true)
      } else {
        setNameError(false)
      }
      if (name !== '' && isRate === false && caption !== '') {
        setCaptionError(false)
        setNameError(false)
        setRateError(false)
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
      } else {
        console.error('error')
      }
    } else {
      setNameError(false)
      if (!isRate && caption !== '') {
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
        })
      } else {
        setRateError(true)
        setCaptionError(true)
      }
    }
  }

  const hoverStars = (e) => {
    if (!clicked) resetAndSplit(e)
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

  const parseName = () => {
    const capital = name.slice(0, 1).toUpperCase()
    const rest = name.slice(1, name.length + 1).toLowerCase()
    const result = capital.concat(rest)
    setName(result)
  }

  useEffect(() => {}, [rate])
  return (
    <FormWrapper>
      {!valid ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Title>Co powiesz o tym produkcie?</Title>
          <ReviewContext product={product} size={size} />
          {allowName ? (
            <InputWrapper>
              <Label>Imię i nazwisko lub pseudonim</Label>
              <Input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
          ) : null}
          <SetNameCheckboxWrapper>
            <Checkbox
              onChange={() => setAllowName(!allowName)}
              size={'25px'}
              name="name"
              type="checkbox"
              checked={allowName}
            />
            <Label htmlFor="name">Chce pokazać moje imię</Label>
            {nameError ? (
              <Error>Nie wpisałeś nazwy lub jest ona niepoprawna</Error>
            ) : null}
          </SetNameCheckboxWrapper>
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
            {rateError ? <Error>Nie wybrałeś ilości gwiazdek</Error> : null}
          </ChooseStarsAmount>
          <CaptionWrapper>
            <Label>Opisz nam swoje doświadczenia</Label>
            <TextArea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            {captionError ? (
              <Error>Musisz wypełnić to pole, aby zamieścić opinię</Error>
            ) : null}
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
