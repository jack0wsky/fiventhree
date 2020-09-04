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
import { handleReviewsAside } from '../../actions/reviews/handleReviewsAside'
import { useQuery, gql } from '@apollo/client'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const REVIEWS = gql`
  query Review {
    reviews {
      author
      rate
      shopifyId
      caption
      id
    }
  }
`

const Reviews = () => {
  const dispatch = useDispatch()
  const reviewsWrapper = useRef()
  const { loading, data } = useQuery(REVIEWS)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    gsap.from(reviewsWrapper.current, {
      translateX: '100%',
      duration: 0.3,
    })
    console.log(loading, data)
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
      <Overview reviews={reviews} />
      <ReviewsGrid>
        {!loading
          ? data.reviews.map(({ id, shopifyId, author, caption, rate }) => {
              return (
                <Review
                  key={id}
                  shopifyId={shopifyId}
                  author={author}
                  caption={caption}
                  rate={rate}
                />
              )
            })
          : null}
      </ReviewsGrid>
    </Wrapper>
  )
}

export default Reviews

/*
  <IfNoReviews>
    <Text>Nikt jeszcze nie napisał opinii. Badź pierwszy!</Text>
    <AddReview>Dodaj opinię</AddReview>
  </IfNoReviews>
  <Overview reviews={.reviews} />

  {array.map(({ id, shopifyId, author, caption, rate }) => {
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
 */
