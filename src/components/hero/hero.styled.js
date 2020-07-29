import styled from 'styled-components'
import { small, medium, large } from '../breakpoints'

export const HeroWrapper = styled.main`
  width: 100vw;
  height: 120vh;
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
  width: 100%;

  @media all and (max-width: ${small}) {
    height: 120%;
  }
  @media all and (min-width: ${small}) and (max-width: ${large}) {
    height: 100%;
  }
`
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 80vh;
  background-color: #bf0000;
  mix-blend-mode: multiply;
  @media all and (max-width: ${small}) {
    height: 60vh;
  }
`
export const HeroText = styled.section`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  padding: 0 10vw 0;
  position: relative;

  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: flex-start;
    padding: 0 5vw 0;
    height: 30vh;
  }
`
export const Text = styled.h1`
  font-size: 4em;
  text-transform: uppercase;
  font-weight: 800;
  font-family: 'Aktiv Grotesk Ex', sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px #000;

  @media all and (max-width: ${small}) {
    font-size: 2.5em;
  }
`
export const Movement = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  left: 35%;

  @media all and (max-width: ${small}) {
    position: static;
  }
`
export const MovementText = styled(Text)`
  color: #000;
  font-size: 7em;
  line-height: 80px;
  @media all and (max-width: ${small}) {
    font-size: 3em;
    line-height: 40px;
  }
`
