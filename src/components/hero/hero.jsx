import React, { useEffect, useRef } from 'react'
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
import { small } from '../breakpoints'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(CSSPlugin, ScrollTrigger)

const Hero = () => {
  const joinTo = useRef()
  useEffect(() => {
    gsap.fromTo(
      '.joinTo',
      {
        xPercent: 30,
        duration: 2,
      },
      {
        xPercent: -10,
        scrollTrigger: {
          trigger: '.knowWhom',
          start: 'top top',
          end: '+=100',
          scrub: 1,
        },
      }
    )
    gsap.to('.movement', {
      xPercent: 10,
      duration: 2,
      scrollTrigger: {
        trigger: '.knowWhom',
        start: 'top top',
        end: '+=100',
        scrub: 1,
      },
    })
  })
  const ifMobile = () => {
    if (window) {
      if (window.innerWidth <= small) {
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
        <Text ref={joinTo} className="joinTo">
          Dołącz do
        </Text>
        <Movement className="movement">
          <MovementText>Ruchu</MovementText>
          <MovementText>8 gwiazd</MovementText>
        </Movement>
      </HeroText>
    </HeroWrapper>
  )
}

export default Hero
