import React, { useEffect, useRef, useState } from 'react'
import {
  Wrapper,
  Header,
  ReviewsGrid,
  ReturnBtn,
  IfNoReviews,
  Text,
  AddReview,
} from './reviews.styled'
import { useDispatch } from 'react-redux'
import Overview from './overview/overview'
import Review from './review/review'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { handleReviewsAside } from '../../actions/reviews/handleReviewsAside'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const REVIEWS = gql`
  query Reviews {
    reviews {
      rate
      shopifyId
      id
      author
      caption
    }
  }
`

const Reviews = () => {
  const { loading, data } = useQuery(REVIEWS)
  const dispatch = useDispatch()
  const reviewsWrapper = useRef()
  const [array] = useState([])

  useEffect(() => {
    gsap.from(reviewsWrapper.current, {
      translateX: '100%',
      duration: 0.3,
    })
  }, [])

  const componentUnmounted = () => {
    gsap.to(reviewsWrapper.current, {
      translateX: '100%',
      duration: 0.3,
    })
    setTimeout(() => {
      dispatch(handleReviewsAside())
    }, 350)
  }
  return (
    <Wrapper ref={reviewsWrapper}>
      <Header>
        <ReturnBtn onClick={() => componentUnmounted()}>Powrót</ReturnBtn>
      </Header>
      {loading ? null : data.reviews.length > 0 ? (
        <>
          <Overview reviews={data.reviews} />
          <ReviewsGrid>
            {data.reviews.map(({ id, shopifyId, author, caption, rate }) => {
              return (
                <Review
                  key={id}
                  shopifyId={shopifyId}
                  author={author}
                  caption={caption}
                  rate={rate}
                />
              )
            })}
          </ReviewsGrid>
        </>
      ) : (
        <IfNoReviews>
          <Text>Nikt jeszcze nie napisał opinii. Badź pierwszy!</Text>
          <AddReview>Dodaj opinię</AddReview>
        </IfNoReviews>
      )}
    </Wrapper>
  )
}

export default Reviews
