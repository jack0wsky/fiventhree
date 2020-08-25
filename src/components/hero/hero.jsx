import React from 'react'
import { HeroWrapper, ImageContainer, Image } from './hero.styled'
import heroImage from '../../assets/background-hero-image.png'

const Hero = () => {
  return (
    <HeroWrapper className="wrapper">
      <ImageContainer id="imageContainer">
        <Image src={heroImage} />
      </ImageContainer>
    </HeroWrapper>
  )
}

export default Hero
