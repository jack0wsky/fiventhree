import React from 'react'
import { Wrapper, ImageWrapper, Image } from './leftSide.styled'
import contactImg from '../../../assets/contact.jpg'

const LeftSide = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={contactImg} alt="contact" />
      </ImageWrapper>
    </Wrapper>
  )
}

export default LeftSide
