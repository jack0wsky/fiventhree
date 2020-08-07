import React from 'react'
import { Wrapper, CTASection } from './content.styled'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { colors } from '../../../theme'

const Content = () => {
  return (
    <Wrapper>
      <CTASection>
        <AniLink paintDrip hex={colors.darkRed} to={'/produkty'}>
          Sprawdź ofertę
        </AniLink>
      </CTASection>
    </Wrapper>
  )
}

export default Content
