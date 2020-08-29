import React from 'react'
import { Wrapper, Header, ReviewsGrid, ReturnBtn } from './reviews.styled'
import Overview from './overview/overview'
import Review from './review/review'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

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
  const {
    loading,
    data: { reviews },
  } = useQuery(REVIEWS)
  return (
    <Wrapper>
      <Header>
        <ReturnBtn>Powrót</ReturnBtn>
      </Header>
      <Overview reviews={reviews} />
      <ReviewsGrid>
        {loading ? <p>loading...</p> : null}

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
