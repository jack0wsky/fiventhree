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
import { useMutation, gql } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { handleReviewForm } from '../../../actions/reviews/handleReviewForm'

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
  const [stars, setStars] = useState([
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
    const value = e.currentTarget.value
    stars.forEach((star) => {
      star.checked = false
    })
    const less = stars.filter(({ key }) => {
      return key <= value
    })
    const more = stars.filter(({ key }) => {
      return key > value
    })
    less.forEach((star) => (star.checked = true))
    setLess(less)
    setMore(more)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let shopifyId = 'new od'
    console.log(stars)
    if (name === '' || caption === '') {
      console.error('fill fields')
    } else {
      addReview({
        variables: { name, caption, shopifyId, stars },
      }).then((res) => console.log(res, data))
    }
  }

  const hoverStars = (e) => {
    e.preventDefault()
    if (!clicked) resetAndSplit(e)
    //setStars(less.concat(more))
  }
  const resetStars = () => {
    if (!clicked) {
      stars.forEach((star) => {
        star.checked = false
      })
      setStars(
        stars.filter((star) => {
          return star.checked === false
        })
      )
    }
  }
  const handleStars = (e) => {
    e.preventDefault()
    resetAndSplit(e)
    const less = stars.filter(({ key }) => {
      return key <= e.currentTarget.value
    })
    less.forEach((star) => {
      star.checked = true
    })
    const more = stars.filter(({ key }) => {
      return key > e.currentTarget.value
    })
    setStars(less.concat(more))
    setClicked(true)
  }

  const closeModal = (e) => {
    e.preventDefault()
    dispatch(handleReviewForm())
  }

  useEffect(() => {}, [stars])
  return (
    <FormWrapper>
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
            {stars.map(({ key, checked }) => {
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
    </FormWrapper>
  )
}

export default AddReviewForm
