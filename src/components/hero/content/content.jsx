import React, { useEffect, useRef } from 'react'
import { Wrapper, Title, Stars } from './content.styled'
import stars from '../../../assets/stars.png'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (window || document) {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger)
}

const Content = () => {
  const starsRef = useRef()
  useEffect(() => {
    gsap.to(starsRef.current, {
      scale: 0.105,
      duration: 1,
      translateY: -100,
      scrollTrigger: '#imageContainer',
      position: 'fixed',
    })
  }, [])
  return (
    <Wrapper>
      <Stars ref={starsRef} src={stars} />
      <Title>Wiesz co</Title>
      <Title>Wiesz kogo</Title>
    </Wrapper>
  )
}

export default Content
