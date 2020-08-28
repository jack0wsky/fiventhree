import React, { useState, useEffect } from 'react'
import Star from './star/star'
import { ReviewWrapper, Author, Rate, Caption } from './review.styled'

const Review = ({ shopifyId, author, caption, rate }) => {
  return (
    <ReviewWrapper>
      <Author>{author}</Author>
      <Rate>
        {rate.map(({ value, checked }) => {
          return <Star key={value} checked={checked} height={'20px'} />
        })}
      </Rate>
      <Caption>{caption}</Caption>
    </ReviewWrapper>
  )
}

export default Review
