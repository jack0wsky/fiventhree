import styled from 'styled-components'
import { small, xlarge } from '../breakpoints'

export const HeroWrapper = styled.main`
  width: 100vw;
  height: 90vh;
  position: relative;

  @media all and (max-width: ${small}) {
    height: auto;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;

  @media all and (max-width: ${small}) {
    height: 60vh;
  }
`
export const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;

  @media all and (max-width: ${xlarge}) {
    height: 100%;
  }
`
