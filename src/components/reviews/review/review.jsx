import React from 'react'
import Star from './star/star'
import {
  ReviewWrapper,
  Author,
  Rate,
  Caption,
  ReviewImage,
  Image,
  Content,
  CreatedDate,
} from './review.styled'

const Review = ({ author, caption, rate, image, createdAt }) => {
  const parseDate = () => {
    const date = new Date(createdAt)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    if (month < 10) {
      return `${day}.0${month}.${year}`
    } else {
      return `${day}.${month}.${year}`
    }
  }
  return (
    <ReviewWrapper>
      <ReviewImage>
        <Image src={image} />
      </ReviewImage>
      <Content>
        <Author>{author !== '' ? author : 'Klient Fiventhree'}</Author>
        <Rate>
          {rate.map(({ value, checked }) => {
            return <Star key={value} checked={checked} height={'20px'} />
          })}
        </Rate>
        <Caption>{caption}</Caption>
        <CreatedDate>Dodano: {parseDate()}</CreatedDate>
      </Content>
    </ReviewWrapper>
  )
}

export default Review
