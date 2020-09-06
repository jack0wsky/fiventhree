import React, { useState, useEffect } from 'react'
import { Wrapper, StarsWrapper, RatesAmount, SeeAllBtn } from './review.styled'
import Star from '../../../components/reviews/review/star/star'
import { handleReviewsAside } from '../../../actions/reviews/handleReviewsAside'
import { useDispatch } from 'react-redux'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const REVIEWS = gql`
  query OverviewReviews($shopifyId: String!) {
    reviews(where: { _search: $shopifyId }) {
      rate
      shopifyId
      id
    }
  }
`

const ProductReview = ({ productData: { shopifyId } }) => {
  const [averangeSum, setSum] = useState(0)
  const dispatch = useDispatch()
  const { loading, data } = useQuery(REVIEWS, { variables: { shopifyId } })
  const [averangeRate, setAverangeRate] = useState([
    { key: 1, checked: false },
    { key: 2, checked: false },
    { key: 3, checked: false },
    { key: 4, checked: false },
    { key: 5, checked: false },
  ])
  const calculateRate = () => {
    const tempArr = []
    data.reviews.forEach(({ rate }) => {
      const stars = rate.filter((star) => {
        return star.checked === true
      })
      tempArr.push(stars.length)
      const sum = tempArr.reduce((acc, cur) => {
        return (acc += cur)
      }, 0)
      setSum((sum / tempArr.length).toFixed(1))
    })
  }
  const setStars = () => {
    data.reviews.forEach(({ rate }) => {
      const positive = rate.filter((star) => {
        return star.checked === true
      })
      if (positive.length === 5) {
        setAverangeRate(positive)
      }
    })
  }
  useEffect(() => {
    if (!loading) {
      setStars()
      calculateRate()
    }
  }, [loading])

  return (
    <Wrapper>
      <StarsWrapper>
        {!loading
          ? averangeRate.map(({ key, checked }) => {
              return <Star key={key} checked={checked} height={'30px'} />
            })
          : null}
        {!loading ? (
          <RatesAmount>
            {averangeSum > 0 ? averangeSum : 0} {`(${data.reviews.length})`}
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


          return this.state.averangeRate.length > 0
                  ? this.state.averangeRate.map(({key, checked}) => {
                    return <Star key={key} height={'25px'} checked={checked}/>
                  })
 */
