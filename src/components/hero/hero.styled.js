import styled from 'styled-components'
import { small, medium, large } from '../breakpoints'

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

  @media all and (max-width: ${medium}) {
    height: 150%;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 80vh;
  background-color: #bf0000;
  mix-blend-mode: multiply;

  @media all and (max-width: ${small}) {
    height: 60vh;
  }
`
