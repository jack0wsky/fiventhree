import React, { useEffect, useRef } from 'react'
import {
  HeroWrapper,
  ImageContainer,
  Image,
  Overlay,
  FloatingContainer,
  FloatingImg,
} from './hero.styled'
import Content from './content/content'
import landscape from '../../assets/background.jpeg'
import woman from '../../assets/woman-floating.png'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(CSSPlugin, ScrollTrigger)

const Hero = () => {
  const floating = useRef()
  const background = useRef()
  useEffect(() => {
    gsap.to(floating.current, {
      yPercent: 10,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        scrub: 1,
      },
    })
    gsap.to(background.current, {
      yPercent: -15,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        scrub: 1,
      },
    })
  }, [])
  return (
    <HeroWrapper className="wrapper">
      <Content />
      <FloatingContainer>
        <FloatingImg ref={floating} src={woman} />
      </FloatingContainer>
      <Overlay />
      <ImageContainer id="imageContainer">
        <Image ref={background} src={landscape} />
      </ImageContainer>
    </HeroWrapper>
  )
}

export default Hero
