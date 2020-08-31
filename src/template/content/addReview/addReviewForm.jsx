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
} from './addReviewForm.styled'
import StarSelect from './star/starSelect'

const AddReviewForm = () => {
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

  const handleStars = (e) => {
    e.preventDefault()
    const value = e.currentTarget.value
    stars.forEach((star) => {
      star.checked = false
    })
    const lessThanSelected = stars.filter(({ key }) => {
      return key <= value
    })
    const moreThanSelected = stars.filter(({ key }) => {
      return key > value
    })
    lessThanSelected.forEach((star) => (star.checked = true))
    setStars(lessThanSelected.concat(moreThanSelected))
  }
  // TODO reset on mouse leave
  // TODO onclick
  // TODO handle posting new review
  const resetStars = () => {
    console.log('leave')
    stars.forEach((star) => {
      star.checked = false
    })
    console.log(stars)
  }
  useEffect(() => {}, [stars])
  return (
    <FormWrapper>
      <Form>
        <Title>Co powiesz o tym produkcie?</Title>
        <InputWrapper>
          <Label>Imię i nazwisko lub pseudonim</Label>
          <Input type="name" />
        </InputWrapper>
        <ChooseStarsAmount>
          <Label>Na ile oceniasz produkt?</Label>
          <StarsGrid>
            {stars.map(({ key, checked }) => {
              return (
                <StarSelect
                  key={key}
                  height={'30px'}
                  handleStars={handleStars}
                  value={key}
                  checked={checked}
                  resetStars={resetStars}
                />
              )
            })}
          </StarsGrid>
        </ChooseStarsAmount>
      </Form>
    </FormWrapper>
  )
}

export default AddReviewForm
