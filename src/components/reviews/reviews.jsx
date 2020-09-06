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
import { useDispatch, useSelector } from 'react-redux'
import Overview from './overview/overview'
import Review from './review/review'
import { handleReviewsAside } from '../../actions/reviews/handleReviewsAside'
import { useQuery, gql } from '@apollo/client'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const REVIEWS = gql`
  query Review($shopifyId: String!) {
    reviews(where: { _search: $shopifyId }) {
      author
      caption
      rate
      createdAt
      id
      shopifyId
    }
  }
`

const Reviews = () => {
  const dispatch = useDispatch()
  const { image, shopifyId } = useSelector((state) => state.getProductData)
  const reviewsWrapper = useRef()
  const { loading, data } = useQuery(REVIEWS, {
    variables: { shopifyId },
    pollInterval: 500,
  })
  const [reviews, setReviews] = useState([])

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
    }, 400)
  }
  return (
    <Wrapper ref={reviewsWrapper}>
      <Header>
        <ReturnBtn onClick={() => componentUnmounted()}>Powrót</ReturnBtn>
      </Header>
      <Overview reviews={reviews} />
      <ReviewsGrid>
        {!loading
          ? data.reviews.map(
              ({ id, shopifyId, author, caption, rate, createdAt }) => {
                return (
                  <Review
                    image={image}
                    key={id}
                    shopifyId={shopifyId}
                    author={author}
                    caption={caption}
                    rate={rate}
                    createdAt={createdAt}
                  />
                )
              }
            )
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
