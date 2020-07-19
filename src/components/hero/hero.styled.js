import styled from 'styled-components'
import { small } from '../breakpoints'

export const HeroWrapper = styled.main`
  width: 100vw;
  height: 120vh;
  position: relative;
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
`
export const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;

  @media all and (max-width: ${small}) {
    height: 120%;
  }
`
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 80vh;
  background-color: #bf0000;
  mix-blend-mode: multiply;
`
