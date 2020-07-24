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
import { Controller, Scene } from 'react-scrollmagic'
import { Tween } from 'react-gsap'
import { small } from '../breakpoints'

const Hero = () => {
  const ifMobile = () => {
    if (window) {
      if (window.innerWidth <= small) {
        console.log(true)
        return 100
      } else {
        return -100
      }
    }
  }
  return (
    <HeroWrapper>
      <Content />
      <Overlay />
      <ImageContainer id="imageContainer">
        <Image src={hero} />
      </ImageContainer>
      <HeroText>
        <Controller>
          <Scene indicators={false} duration={700} offset={-200}>
            <Tween
              from={{
                x: 100,
              }}
            >
              <Text>Dołącz do</Text>
            </Tween>
          </Scene>
        </Controller>
        <Controller>
          <Scene indicators={false} duration={700} offset={-200}>
            <Tween
              from={{
                x: ifMobile(),
              }}
            >
              <Movement>
                <MovementText>Ruchu</MovementText>
                <MovementText>8 gwiazd</MovementText>
              </Movement>
            </Tween>
          </Scene>
        </Controller>
      </HeroText>
    </HeroWrapper>
  )
}

export default Hero
