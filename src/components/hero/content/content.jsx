import React from 'react'
import {
  Wrapper,
  Title,
  CTASection,
  CTA,
  TitlesWrapper,
} from './content.styled'

const Content = () => {
  return (
    <Wrapper>
      <TitlesWrapper>
        <Title>Wiesz co</Title>
        <Title>Wiesz kogo</Title>
      </TitlesWrapper>
      <CTASection>
        <CTA>Sprawdź ofertę</CTA>
      </CTASection>
    </Wrapper>
  )
}

export default Content
