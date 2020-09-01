import React, { useState, useEffect } from 'react'
import { Wrapper, StarsWrapper, RatesAmount, SeeAllBtn } from './review.styled'
import Star from '../../../components/reviews/review/star/star'
import { useQuery } from '@apollo/client'
import { handleReviewsAside } from '../../../actions/reviews/handleReviewsAside'
import { useDispatch } from 'react-redux'
import gql from 'graphql-tag'

const REVIEWS = gql`
  query OverviewReviews {
    reviews {
      rate
      shopifyId
      id
    }
  }
`

const ProductReview = () => {
  const dispatch = useDispatch()
  const [values, setValues] = useState([])
  const [averangeRate, setAverangeRate] = useState([
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
  const [averangeSum, setAverange] = useState(0)
  const { loading, data } = useQuery(REVIEWS)

  const getAverange = () => {
    const { reviews } = data
    const averange = new Array(5)
    const total = [
      { value: 5 },
      { value: 4 },
      { value: 3 },
      { value: 2 },
      { value: 2 },
    ]
    return reviews.forEach(({ rate }) => {
      const found = rate.filter(({ checked }) => checked === true)
      averange.push(found.length)
      const sum = averange.reduce((acc, cur) => {
        return (acc += cur)
      }, 0)
      setAverange((sum / reviews.length).toFixed(1))
    })
  }

  const setStars = () => {
    const lessThan = averangeRate.filter(({ key }) => {
      return key <= averangeSum
    })
    const moreThan = averangeRate.filter(({ key }) => {
      return key > averangeSum
    })
    lessThan.forEach((rate) => {
      rate.checked = true
    })
    const merged = lessThan.concat(moreThan)
    setAverangeRate(merged)
  }
  useEffect(() => {
    if (!loading) getAverange()
    setStars()
  }, [loading, averangeSum])
  return (
    <Wrapper>
      <StarsWrapper>
        {averangeRate.length > 0
          ? averangeRate.map(({ key, checked }) => {
              return <Star key={key} height={'25px'} checked={checked} />
            })
          : null}
        {!loading ? (
          <RatesAmount>
            {averangeSum} ({data.reviews.length})
          </RatesAmount>
        ) : null}
      </StarsWrapper>
      <SeeAllBtn onClick={() => dispatch(handleReviewsAside())}>
        Zobacz wszystkie
      </SeeAllBtn>
    </Wrapper>
  )
}

export default ProductReview

/*

{!loading
          ? reviews[0].rate.map(({ checked }) => {
              return <Star height={'30px'} checked={checked} />
            })
          : null}
 */
