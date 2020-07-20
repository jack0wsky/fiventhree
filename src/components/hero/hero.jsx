import React from 'react'
import {
  HeroWrapper,
  ImageContainer,
  Image,
  Overlay,
  HeroText,
  Text,
  Movement,
  MovementText,
} from './hero.styled'
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
      <HeroText>
        <Text>Dołącz do</Text>
        <Movement>
          <MovementText>Ruchu</MovementText>
          <MovementText>8 gwiazd</MovementText>
        </Movement>
      </HeroText>
    </HeroWrapper>
  )
}

export default Hero
