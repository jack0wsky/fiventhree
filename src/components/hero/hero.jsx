import React from 'react'
import { HeroWrapper, ImageContainer, Image, Overlay } from './hero.styled'
import Content from './content/content'
import hero from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <HeroWrapper>
      <Content />
      <Overlay />
      <ImageContainer id="imageContainer">
        <Image src={hero} />
      </ImageContainer>
    </HeroWrapper>
  )
}

export default Hero
