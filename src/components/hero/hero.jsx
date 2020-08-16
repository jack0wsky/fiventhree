import React from 'react'
import { HeroWrapper, ImageContainer, Image, Overlay } from './hero.styled'
import Content from './content/content'
import heroImage from '../../assets/hero-background.jpg'

const Hero = () => {
  return (
    <HeroWrapper className="wrapper">
      <Content />
      <Overlay />
      <ImageContainer id="imageContainer">
        <Image src={heroImage} />
      </ImageContainer>
    </HeroWrapper>
  )
}

export default Hero
