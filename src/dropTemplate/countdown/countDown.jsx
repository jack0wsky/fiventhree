import React, { useState } from 'react'
import { Wrapper, Title, Counter } from './countDown.styled'

const CountDown = ({ endDate }) => {
  const [countdown, setCountdown] = useState(null)
  setInterval(() => {
    const end = new Date(endDate).getTime()
    const now = new Date().getTime()
    const toEnd = end - now
    const days = Math.floor(toEnd / (1000 * 60 * 60 * 24))
    const hours = Math.floor((toEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((toEnd % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((toEnd % (1000 * 60)) / 1000)
    const result = `${days}d ${hours}h ${minutes}m ${seconds}s`
    setCountdown(result)
  }, 1000)
  return (
    <Wrapper>
      <Title>Do zakończenia preorderu pozostało:</Title>
      <Counter>{countdown}</Counter>
    </Wrapper>
  )
}

export default CountDown
