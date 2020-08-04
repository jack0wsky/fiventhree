import React from 'react'
import {
  Wrapper,
  Title,
  CTASection,
  CTA,
  TitlesWrapper,
} from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { colors } from '../../../theme'

const Content = () => {
  return (
    <Wrapper>
      <TitlesWrapper>
        <Title>Wiesz co</Title>
        <Title className="knowWhom">Wiesz kogo</Title>
      </TitlesWrapper>
      <CTASection>
        <AniLink cover bg={colors.darkRed} to={'/produkty'}>
          Sprawdź ofertę
        </AniLink>
      </CTASection>
    </Wrapper>
  )
}

export default Content
