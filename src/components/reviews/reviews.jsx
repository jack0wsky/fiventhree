import React from 'react'
import { Wrapper, ReviewsGrid } from './reviews.styled'
import { graphql, useStaticQuery } from 'gatsby'
import Overview from './overview/overview'
import Review from './review/review'

const Reviews = () => {
  const {
    reviews: { reviews },
  } = useStaticQuery(graphql`
    query Reviews {
      reviews {
        reviews {
          shopifyId
          author
          caption
          rate
          id
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Overview reviews={reviews} />
      <ReviewsGrid>
        {reviews.map(({ shopifyId, author, caption, rate, id }) => {
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
