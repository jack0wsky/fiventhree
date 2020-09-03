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
import axios from 'axios'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const Reviews = () => {
  const dispatch = useDispatch()
  const reviewsWrapper = useRef()
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    await axios
      .get('https://boiling-everglades-34125.herokuapp.com/reviews')
      .then((res) => {
        setReviews(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(async () => {
    gsap.from(reviewsWrapper.current, {
      translateX: '100%',
      duration: 0.3,
    })

    await getReviews()
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
        {reviews.map(({ id, shopifyId, author, caption, rate }) => {
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
