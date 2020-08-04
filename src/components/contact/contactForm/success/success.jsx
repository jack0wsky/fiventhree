import React, { useEffect, useRef } from 'react'
import { Wrapper, Container, Status, Feedback } from './success.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { colors } from '../../../../theme'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

const Success = () => {
  const status = useRef()
  const feedback = useRef()
  const button = useRef()
  useEffect(() => {
    const tl = gsap.timeline({ duration: 1 })
    tl.from(status.current, {
      yPercent: 20,
      opacity: 0,
    })
    tl.from(feedback.current, {
      yPercent: 20,
      opacity: 0,
    })
    tl.from(button.current, {
      yPercent: 20,
      opacity: 0,
    })
  })
  return (
    <Wrapper>
      <Container>
        <Status ref={status}>Twój e-mail został wysłany</Status>
        <Feedback ref={feedback}>Wrótce odezwiemy się do Ciebie</Feedback>
        <AniLink ref={button} cover bg={colors.darkRed} to="/">
          Wróć do strony głównej
        </AniLink>
      </Container>
    </Wrapper>
  )
}

export default Success
